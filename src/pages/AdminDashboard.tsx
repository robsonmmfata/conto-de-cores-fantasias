
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Users, Shield, ArrowLeft, UserPlus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  roles: string[];
}

const AdminDashboard = () => {
  const { user, signOut, loading, isAdmin } = useAuth();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [creatingAdmin, setCreatingAdmin] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  const fetchUsers = async () => {
    try {
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      const { data: roles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');

      if (rolesError) throw rolesError;

      const usersWithRoles = profiles?.map(profile => ({
        ...profile,
        roles: roles?.filter(role => role.user_id === profile.id).map(role => role.role) || []
      })) || [];

      setUsers(usersWithRoles);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoadingUsers(false);
    }
  };

  const makeUserAdmin = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .insert({ user_id: userId, role: 'admin' });

      if (error) throw error;

      toast({
        title: "Administrador criado",
        description: "Usuário promovido a administrador com sucesso.",
      });

      fetchUsers();
    } catch (error) {
      console.error('Error making user admin:', error);
      toast({
        title: "Erro",
        description: "Erro ao promover usuário a administrador.",
        variant: "destructive",
      });
    }
  };

  const removeAdminRole = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId)
        .eq('role', 'admin');

      if (error) throw error;

      toast({
        title: "Role removida",
        description: "Role de administrador removida com sucesso.",
      });

      fetchUsers();
    } catch (error) {
      console.error('Error removing admin role:', error);
      toast({
        title: "Erro",
        description: "Erro ao remover role de administrador.",
        variant: "destructive",
      });
    }
  };

  if (loading || loadingUsers) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p>Carregando painel administrativo...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Shield className="h-8 w-8 text-purple-600 mr-3" />
              Painel Administrativo
            </h1>
            <p className="text-gray-600 mt-2">Gerencie usuários e administradores do sistema</p>
          </div>
          <div className="flex gap-4">
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/dashboard'}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Dashboard
            </Button>
            <Button variant="outline" onClick={signOut}>
              Sair
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Total de Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-center text-blue-600">
                {users.length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>Administradores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-center text-purple-600">
                {users.filter(u => u.roles.includes('admin')).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <UserPlus className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Usuários Comuns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-center text-green-600">
                {users.filter(u => !u.roles.includes('admin')).length}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Usuários</CardTitle>
              <CardDescription>
                Lista de todos os usuários registrados no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{user.full_name || 'Nome não informado'}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <div className="flex gap-2 mt-1">
                        {user.roles.map((role) => (
                          <span 
                            key={role}
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              role === 'admin' 
                                ? 'bg-purple-100 text-purple-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {role === 'admin' ? 'Administrador' : 'Usuário'}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {user.roles.includes('admin') ? (
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => removeAdminRole(user.id)}
                          disabled={user.id === user.id} // Prevent self-demotion
                        >
                          Remover Admin
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700"
                          onClick={() => makeUserAdmin(user.id)}
                        >
                          Tornar Admin
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instruções</CardTitle>
              <CardDescription>
                Como gerenciar administradores no sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Promover Usuário a Admin</h4>
                <p className="text-sm text-blue-800">
                  Clique em "Tornar Admin" ao lado do usuário que você deseja promover. 
                  O usuário terá acesso completo ao painel administrativo.
                </p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium text-orange-900 mb-2">Remover Role de Admin</h4>
                <p className="text-sm text-orange-800">
                  Clique em "Remover Admin" para revogar os privilégios administrativos. 
                  O usuário voltará a ser um usuário comum.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Primeiro Administrador</h4>
                <p className="text-sm text-green-800">
                  Para criar o primeiro administrador, registre-se com o email desejado 
                  e depois use o SQL Editor do Supabase para executar a query de promoção manual.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
