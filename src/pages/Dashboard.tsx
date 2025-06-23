
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Palette, Users, Settings } from 'lucide-react';

const Dashboard = () => {
  const { user, signOut, loading, isAdmin } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-btn mx-auto mb-4"></div>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Olá, {user.user_metadata?.full_name || 'Usuário'}! 👋
            </h1>
            <p className="text-gray-600 mt-2">Bem-vindo ao seu painel JackBoo</p>
            {isAdmin && (
              <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Administrador
              </span>
            )}
          </div>
          <div className="flex gap-4">
            {isAdmin && (
              <Button 
                onClick={() => window.location.href = '/admin'}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Settings className="h-4 w-4 mr-2" />
                Painel Admin
              </Button>
            )}
            <Button variant="outline" onClick={signOut}>
              Sair
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <BookOpen className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Criar História</CardTitle>
              <CardDescription>
                Crie histórias personalizadas com seus personagens favoritos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Começar História
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Palette className="h-12 w-12 text-green-nature mx-auto mb-4" />
              <CardTitle>Livro de Colorir</CardTitle>
              <CardDescription>
                Gere livros de colorir personalizados para suas crianças
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-nature hover:bg-green-600">
                Criar Livro
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-orange-btn mx-auto mb-4" />
              <CardTitle>Meus Personagens</CardTitle>
              <CardDescription>
                Gerencie seus personagens e histórias criadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-orange-btn hover:bg-orange-600">
                Ver Personagens
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Suas Criações Recentes</CardTitle>
              <CardDescription>
                Últimas histórias e livros de colorir criados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Nenhuma criação ainda</p>
                <p className="text-sm">Comece criando sua primeira história!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
