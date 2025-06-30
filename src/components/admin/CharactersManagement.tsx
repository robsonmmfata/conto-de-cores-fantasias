
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Bot, Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Character {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
  personality: string | null;
  age_range: string | null;
  gender: string | null;
  is_active: boolean;
  created_at: string;
  created_by: string | null;
}

interface CharactersManagementProps {
  onStatsUpdate: () => void;
}

export const CharactersManagement = ({ onStatsUpdate }: CharactersManagementProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: '',
    personality: '',
    age_range: '',
    gender: '',
    is_active: true
  });

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const { data, error } = await supabase
        .from('characters')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setCharacters(data || []);
    } catch (error) {
      console.error('Error fetching characters:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar personagens.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingCharacter) {
        const { error } = await supabase
          .from('characters')
          .update(formData)
          .eq('id', editingCharacter.id);

        if (error) throw error;

        toast({
          title: "Personagem atualizado",
          description: "Personagem atualizado com sucesso.",
        });
      } else {
        const { error } = await supabase
          .from('characters')
          .insert([formData]);

        if (error) throw error;

        toast({
          title: "Personagem criado",
          description: "Novo personagem criado com sucesso.",
        });
      }

      setIsDialogOpen(false);
      setEditingCharacter(null);
      resetForm();
      fetchCharacters();
      onStatsUpdate();
    } catch (error) {
      console.error('Error saving character:', error);
      toast({
        title: "Erro",
        description: "Erro ao salvar personagem.",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      image_url: '',
      personality: '',
      age_range: '',
      gender: '',
      is_active: true
    });
  };

  const handleEdit = (character: Character) => {
    setEditingCharacter(character);
    setFormData({
      name: character.name,
      description: character.description || '',
      image_url: character.image_url || '',
      personality: character.personality || '',
      age_range: character.age_range || '',
      gender: character.gender || '',
      is_active: character.is_active
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (characterId: string) => {
    if (!confirm('Tem certeza que deseja deletar este personagem?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('characters')
        .delete()
        .eq('id', characterId);

      if (error) throw error;

      toast({
        title: "Personagem deletado",
        description: "Personagem deletado com sucesso.",
      });

      fetchCharacters();
      onStatsUpdate();
    } catch (error) {
      console.error('Error deleting character:', error);
      toast({
        title: "Erro",
        description: "Erro ao deletar personagem.",
        variant: "destructive",
      });
    }
  };

  const toggleActiveStatus = async (characterId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('characters')
        .update({ is_active: !currentStatus })
        .eq('id', characterId);

      if (error) throw error;

      toast({
        title: "Status atualizado",
        description: `Personagem ${!currentStatus ? 'ativado' : 'desativado'} com sucesso.`,
      });

      fetchCharacters();
    } catch (error) {
      console.error('Error updating character status:', error);
      toast({
        title: "Erro",
        description: "Erro ao atualizar status do personagem.",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
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
                <Bot className="h-5 w-5 mr-2" />
                Gerenciar Personagens
              </CardTitle>
              <CardDescription>
                Crie e gerencie os personagens disponíveis no sistema
              </CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => {
                  setEditingCharacter(null);
                  resetForm();
                }}>
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Personagem
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingCharacter ? 'Editar Personagem' : 'Novo Personagem'}
                  </DialogTitle>
                  <DialogDescription>
                    {editingCharacter 
                      ? 'Edite os dados do personagem' 
                      : 'Crie um novo personagem para o sistema'
                    }
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Nome do personagem"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Descrição do personagem"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="personality">Personalidade</Label>
                    <Textarea
                      id="personality"
                      value={formData.personality}
                      onChange={(e) => setFormData({...formData, personality: e.target.value})}
                      placeholder="Características da personalidade"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age_range">Faixa Etária</Label>
                      <Select value={formData.age_range} onValueChange={(value) => setFormData({...formData, age_range: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a faixa etária" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3-5">3-5 anos</SelectItem>
                          <SelectItem value="5-8">5-8 anos</SelectItem>
                          <SelectItem value="8-12">8-12 anos</SelectItem>
                          <SelectItem value="3-12">3-12 anos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="gender">Gênero</Label>
                      <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o gênero" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="feminino">Feminino</SelectItem>
                          <SelectItem value="neutro">Neutro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="image_url">URL da Imagem</Label>
                    <Input
                      id="image_url"
                      value={formData.image_url}
                      onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                      placeholder="https://exemplo.com/imagem.jpg"
                      type="url"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="is_active"
                      checked={formData.is_active}
                      onCheckedChange={(checked) => setFormData({...formData, is_active: checked})}
                    />
                    <Label htmlFor="is_active">Personagem ativo</Label>
                  </div>

                  <DialogFooter>
                    <Button type="submit">
                      {editingCharacter ? 'Atualizar' : 'Criar'} Personagem
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {characters.length === 0 ? (
              <p className="text-center text-gray-500 py-8 col-span-full">Nenhum personagem encontrado</p>
            ) : (
              characters.map((character) => (
                <Card key={character.id} className={`${!character.is_active ? 'opacity-50' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">{character.name}</h3>
                        <p className="text-sm text-gray-600">
                          {character.age_range && `${character.age_range} • `}
                          {character.gender && character.gender.charAt(0).toUpperCase() + character.gender.slice(1)}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {character.is_active ? (
                          <Eye className="h-4 w-4 text-green-500" />
                        ) : (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                    
                    {character.image_url && (
                      <img 
                        src={character.image_url} 
                        alt={character.name}
                        className="w-full h-32 object-cover rounded-md mb-3"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                    
                    {character.description && (
                      <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                        {character.description}
                      </p>
                    )}
                    
                    {character.personality && (
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                        <strong>Personalidade:</strong> {character.personality}
                      </p>
                    )}
                    
                    <p className="text-xs text-gray-400 mb-3">
                      Criado em: {formatDate(character.created_at)}
                    </p>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(character)}
                        className="flex-1"
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        variant={character.is_active ? "secondary" : "default"}
                        onClick={() => toggleActiveStatus(character.id, character.is_active)}
                      >
                        {character.is_active ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(character.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
