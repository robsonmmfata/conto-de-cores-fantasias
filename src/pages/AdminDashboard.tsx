
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Shield, ArrowLeft, MessageCircle, CreditCard, UserPlus, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { UsersManagement } from '@/components/admin/UsersManagement';
import { ChatsManagement } from '@/components/admin/ChatsManagement';
import { SubscriptionsManagement } from '@/components/admin/SubscriptionsManagement';
import { CharactersManagement } from '@/components/admin/CharactersManagement';

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  roles: string[];
}

interface DashboardStats {
  totalUsers: number;
  totalAdmins: number;
  totalChats: number;
  totalSubscriptions: number;
  totalCharacters: number;
  newUsersThisWeek: number;
}

const AdminDashboard = () => {
  const { user, signOut, loading, isAdmin } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalAdmins: 0,
    totalChats: 0,
    totalSubscriptions: 0,
    totalCharacters: 0,
    newUsersThisWeek: 0
  });
  const [loadingStats, setLoadingStats] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isAdmin) {
      fetchDashboardStats();
    }
  }, [isAdmin]);

  const fetchDashboardStats = async () => {
    try {
      // Fetch users count
      const { count: usersCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      // Fetch admins count
      const { count: adminsCount } = await supabase
        .from('user_roles')
        .select('*', { count: 'exact', head: true })
        .eq('role', 'admin');

      // Fetch chats count
      const { count: chatsCount } = await supabase
        .from('chats')
        .select('*', { count: 'exact', head: true });

      // Fetch subscriptions count
      const { count: subscriptionsCount } = await supabase
        .from('subscriptions')
        .select('*', { count: 'exact', head: true });

      // Fetch characters count
      const { count: charactersCount } = await supabase
        .from('characters')
        .select('*', { count: 'exact', head: true });

      // Fetch new users this week
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      
      const { count: newUsersCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', weekAgo.toISOString());

      setStats({
        totalUsers: usersCount || 0,
        totalAdmins: adminsCount || 0,
        totalChats: chatsCount || 0,
        totalSubscriptions: subscriptionsCount || 0,
        totalCharacters: charactersCount || 0,
        newUsersThisWeek: newUsersCount || 0
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar estatísticas do dashboard.",
        variant: "destructive",
      });
    } finally {
      setLoadingStats(false);
    }
  };

  if (loading || loadingStats) {
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
            <p className="text-gray-600 mt-2">Gerencie todos os aspectos do sistema JackBoo</p>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-blue-500 mr-2" />
                <span className="text-2xl font-bold text-blue-600">{stats.totalUsers}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Administradores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-purple-500 mr-2" />
                <span className="text-2xl font-bold text-purple-600">{stats.totalAdmins}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Chats Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-2xl font-bold text-green-600">{stats.totalChats}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Assinaturas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 text-orange-500 mr-2" />
                <span className="text-2xl font-bold text-orange-600">{stats.totalSubscriptions}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Personagens</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Bot className="h-4 w-4 text-pink-500 mr-2" />
                <span className="text-2xl font-bold text-pink-600">{stats.totalCharacters}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Novos (7 dias)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <UserPlus className="h-4 w-4 text-teal-500 mr-2" />
                <span className="text-2xl font-bold text-teal-600">{stats.newUsersThisWeek}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content with Tabs */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="chats">Chats</TabsTrigger>
            <TabsTrigger value="subscriptions">Assinaturas</TabsTrigger>
            <TabsTrigger value="characters">Personagens</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="mt-6">
            <UsersManagement onStatsUpdate={fetchDashboardStats} />
          </TabsContent>

          <TabsContent value="chats" className="mt-6">
            <ChatsManagement />
          </TabsContent>

          <TabsContent value="subscriptions" className="mt-6">
            <SubscriptionsManagement />
          </TabsContent>

          <TabsContent value="characters" className="mt-6">
            <CharactersManagement onStatsUpdate={fetchDashboardStats} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
