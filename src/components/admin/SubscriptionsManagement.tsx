
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Plus, Edit, Trash2, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Subscription {
  id: string;
  plan_name: string;
  status: string;
  start_date: string;
  end_date: string | null;
  price: number | null;
  created_at: string;
  user_id: string;
  user_email: string;
}

interface UserOption {
  id: string;
  email: string;
  full_name: string | null;
}

export const SubscriptionsManagement = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [users, setUsers] = useState<UserOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSubscription, setEditingSubscription] = useState<Subscription | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    user_id: '',
    plan_name: '',
    status: 'active',
    price: '',
    end_date: ''
  });

  useEffect(() => {
    fetchSubscriptions();
    fetchUsers();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select(`
          *,
          profiles!inner(email)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const subscriptionsWithEmail = data?.map(sub => ({
        ...sub,
        user_email: (sub.profiles as any)?.email || 'Email não encontrado'
      })) || [];

      setSubscriptions(subscriptionsWithEmail);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar assinaturas.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, full_name')
        .order('email');

      if (error) throw error;

      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const subscriptionData = {
        user_id: formData.user_id,
        plan_name: formData.plan_name,
        status: formData.status,
        price: formData.price ? parseFloat(formData.price) : null,
        end_date: formData.end_date || null
      };

      if (editingSubscription) {
        const { error } = await supabase
          .from('subscriptions')
          .update(subscriptionData)
          .eq('id', editingSubscription.id);

        if (error) throw error;

        toast({
          title: "Assinatura atualizada",
          description: "Assinatura atualizada com sucesso.",
        });
      } else {
        const { error } = await supabase
          .from('subscriptions')
          .insert([subscriptionData]);

        if (error) throw error;

        toast({
          title: "Assinatura criada",
          description: "Nova assinatura criada com sucesso.",
        });
      }

      setIsDialogOpen(false);
      setEditingSubscription(null);
      setFormData({
        user_id: '',
        plan_name: '',
        status: 'active',
        price: '',
        end_date: ''
      });
      fetchSubscriptions();
    } catch (error) {
      console.error('Error saving subscription:', error);
      toast({
        title: "Erro",
        description: "Erro ao salvar assinatura.",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (subscription: Subscription) => {
    setEditingSubscription(subscription);
    setFormData({
      user_id: subscription.user_id,
      plan_name: subscription.plan_name,
      status: subscription.status,
      price: subscription.price?.toString() || '',
      end_date: subscription.end_date || ''
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (subscriptionId: string) => {
    if (!confirm('Tem certeza que deseja deletar esta assinatura?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('subscriptions')
        .delete()
        .eq('id', subscriptionId);

      if (error) throw error;

      toast({
        title: "Assinatura deletada",
        description: "Assinatura deletada com sucesso.",
      });

      fetchSubscriptions();
    } catch (error) {
      console.error('Error deleting subscription:', error);
      toast({
        title: "Erro",
        description: "Erro ao deletar assinatura.",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const formatCurrency = (value: number | null) => {
    if (!value) return 'Gratuito';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'expired': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ativa';
      case 'cancelled': return 'Cancelada';
      case 'expired': return 'Expirada';
      default: return status;
    }
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
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Gerenciar Assinaturas
              </CardTitle>
              <CardDescription>
                Visualize e gerencie todas as assinaturas do sistema
              </CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => {
                  setEditingSubscription(null);
                  setFormData({
                    user_id: '',
                    plan_name: '',
                    status: 'active',
                    price: '',
                    end_date: ''
                  });
                }}>
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Assinatura
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editingSubscription ? 'Editar Assinatura' : 'Nova Assinatura'}
                  </DialogTitle>
                  <DialogDescription>
                    {editingSubscription 
                      ? 'Edite os dados da assinatura' 
                      : 'Crie uma nova assinatura para um usuário'
                    }
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="user_id">Usuário</Label>
                    <Select value={formData.user_id} onValueChange={(value) => setFormData({...formData, user_id: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um usuário" />
                      </SelectTrigger>
                      <SelectContent>
                        {users.map(user => (
                          <SelectItem key={user.id} value={user.id}>
                            {user.full_name || user.email} ({user.email})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="plan_name">Nome do Plano</Label>
                    <Input
                      id="plan_name"
                      value={formData.plan_name}
                      onChange={(e) => setFormData({...formData, plan_name: e.target.value})}
                      placeholder="Ex: Premium, Básico..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Ativa</SelectItem>
                        <SelectItem value="cancelled">Cancelada</SelectItem>
                        <SelectItem value="expired">Expirada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="price">Preço (R$)</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      placeholder="0.00"
                    />
                  </div>

                  <div>
                    <Label htmlFor="end_date">Data de Término</Label>
                    <Input
                      id="end_date"
                      type="date"
                      value={formData.end_date}
                      onChange={(e) => setFormData({...formData, end_date: e.target.value})}
                    />
                  </div>

                  <DialogFooter>
                    <Button type="submit">
                      {editingSubscription ? 'Atualizar' : 'Criar'} Assinatura
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subscriptions.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Nenhuma assinatura encontrada</p>
            ) : (
              subscriptions.map((subscription) => (
                <div key={subscription.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium">{subscription.plan_name}</p>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {subscription.user_email}
                        </p>
                        <p className="text-xs text-gray-500">
                          Início: {formatDate(subscription.start_date)}
                          {subscription.end_date && ` • Fim: ${formatDate(subscription.end_date)}`}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(subscription.status)}`}>
                          {getStatusText(subscription.status)}
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          {formatCurrency(subscription.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(subscription)}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(subscription.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Deletar
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
