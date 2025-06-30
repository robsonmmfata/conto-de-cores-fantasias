
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Eye, Trash2, User, Bot } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Chat {
  id: string;
  title: string | null;
  created_at: string;
  user_id: string;
  character_id: string | null;
  user_email: string;
  character_name: string | null;
  message_count: number;
}

interface ChatMessage {
  id: string;
  content: string;
  sender_type: string;
  created_at: string;
}

export const ChatsManagement = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChatMessages, setSelectedChatMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const { data, error } = await supabase
        .from('chats')
        .select(`
          *,
          profiles!inner(email),
          characters(name),
          chat_messages(count)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const chatsWithDetails = data?.map(chat => ({
        id: chat.id,
        title: chat.title,
        created_at: chat.created_at,
        user_id: chat.user_id,
        character_id: chat.character_id,
        user_email: (chat.profiles as any)?.email || 'Email não encontrado',
        character_name: (chat.characters as any)?.name || 'Personagem não encontrado',
        message_count: (chat.chat_messages as any)?.length || 0
      })) || [];

      setChats(chatsWithDetails);
    } catch (error) {
      console.error('Error fetching chats:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar chats.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchChatMessages = async (chatId: string) => {
    setLoadingMessages(true);
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('chat_id', chatId)
        .order('created_at', { ascending: true });

      if (error) throw error;

      setSelectedChatMessages(data || []);
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar mensagens do chat.",
        variant: "destructive",
      });
    } finally {
      setLoadingMessages(false);
    }
  };

  const deleteChat = async (chatId: string) => {
    if (!confirm('Tem certeza que deseja deletar este chat? Esta ação não pode ser desfeita.')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('chats')
        .delete()
        .eq('id', chatId);

      if (error) throw error;

      toast({
        title: "Chat deletado",
        description: "Chat deletado com sucesso.",
      });

      fetchChats();
    } catch (error) {
      console.error('Error deleting chat:', error);
      toast({
        title: "Erro",
        description: "Erro ao deletar chat.",
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
            <MessageCircle className="h-5 w-5 mr-2" />
            Gerenciar Chats
          </CardTitle>
          <CardDescription>
            Visualize e gerencie todas as conversas do sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {chats.length === 0 ? (
              <p className="text-center text-gray-500 py-8">Nenhum chat encontrado</p>
            ) : (
              chats.map((chat) => (
                <div key={chat.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium">
                          {chat.title || `Chat com ${chat.character_name}`}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <User className="h-3 w-3" />
                          {chat.user_email}
                          <span className="mx-2">•</span>
                          <Bot className="h-3 w-3" />
                          {chat.character_name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Criado em: {formatDate(chat.created_at)}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500">
                        {chat.message_count} mensagens
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => fetchChatMessages(chat.id)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Chat
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>
                            Chat: {chat.title || `Conversa com ${chat.character_name}`}
                          </DialogTitle>
                          <DialogDescription>
                            Usuário: {chat.user_email} • Personagem: {chat.character_name}
                          </DialogDescription>
                        </DialogHeader>
                        {loadingMessages ? (
                          <div className="flex justify-center p-4">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                          </div>
                        ) : (
                          <div className="space-y-3 max-h-96 overflow-y-auto">
                            {selectedChatMessages.map((message) => (
                              <div
                                key={message.id}
                                className={`p-3 rounded-lg ${
                                  message.sender_type === 'user'
                                    ? 'bg-blue-100 ml-8'
                                    : 'bg-gray-100 mr-8'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  {message.sender_type === 'user' ? (
                                    <User className="h-4 w-4 text-blue-600" />
                                  ) : (
                                    <Bot className="h-4 w-4 text-gray-600" />
                                  )}
                                  <span className="text-sm font-medium">
                                    {message.sender_type === 'user' ? 'Usuário' : 'Personagem'}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {formatDate(message.created_at)}
                                  </span>
                                </div>
                                <p className="text-sm">{message.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => deleteChat(chat.id)}
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
