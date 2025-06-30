
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Users, UserCheck, UserX } from 'lucide-react';

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  roles: string[];
}

interface UsersManagementProps {
  onStatsUpdate: () => void;
}

export const UsersManagement = ({ onStatsUpdate }: UsersManagementProps) => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

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
      toast({
        title: "Erro",
        description: "Erro ao carregar usuários.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
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
      onStatsUpdate();
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
      onStatsUpdate();
    } catch (error) {
      console.error('Error removing admin role:', error);
      toast({
        title: "Erro",
        description: "Erro ao remover role de administrador.",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Gerenciar Usuários
          </CardTitle>
          <CardDescription>
            Lista de todos os usuários registrados no sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-medium">{user.full_name || 'Nome não informado'}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-xs text-gray-500">
                        Cadastrado em: {formatDate(user.created_at)}
                      </p>
                    </div>
                    <div className="flex gap-2">
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
                </div>
                <div className="flex gap-2">
                  {user.roles.includes('admin') ? (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => removeAdminRole(user.id)}
                    >
                      <UserX className="h-4 w-4 mr-2" />
                      Remover Admin
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={() => makeUserAdmin(user.id)}
                    >
                      <UserCheck className="h-4 w-4 mr-2" />
                      Tornar Admin
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
