
-- Criar tabela para assinaturas
CREATE TABLE public.subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  plan_name text NOT NULL,
  status text NOT NULL DEFAULT 'active',
  start_date timestamp with time zone NOT NULL DEFAULT now(),
  end_date timestamp with time zone,
  price decimal(10,2),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Criar tabela para personagens
CREATE TABLE public.characters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  image_url text,
  personality text,
  age_range text,
  gender text,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Criar tabela para chats/conversas
CREATE TABLE public.chats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  character_id uuid REFERENCES public.characters(id) ON DELETE SET NULL,
  title text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Criar tabela para mensagens dos chats
CREATE TABLE public.chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chat_id uuid REFERENCES public.chats(id) ON DELETE CASCADE NOT NULL,
  sender_type text NOT NULL CHECK (sender_type IN ('user', 'character')),
  content text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Habilitar RLS para todas as tabelas
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Políticas para subscriptions
CREATE POLICY "Users can view their own subscriptions" 
  ON public.subscriptions FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all subscriptions" 
  ON public.subscriptions FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage subscriptions" 
  ON public.subscriptions FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

-- Políticas para characters
CREATE POLICY "Everyone can view active characters" 
  ON public.characters FOR SELECT 
  USING (is_active = true);

CREATE POLICY "Admins can manage characters" 
  ON public.characters FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

-- Políticas para chats
CREATE POLICY "Users can view their own chats" 
  ON public.chats FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own chats" 
  ON public.chats FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all chats" 
  ON public.chats FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

-- Políticas para chat_messages
CREATE POLICY "Users can view messages from their chats" 
  ON public.chat_messages FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM public.chats 
    WHERE chats.id = chat_messages.chat_id 
    AND chats.user_id = auth.uid()
  ));

CREATE POLICY "Users can create messages in their chats" 
  ON public.chat_messages FOR INSERT 
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.chats 
    WHERE chats.id = chat_messages.chat_id 
    AND chats.user_id = auth.uid()
  ));

CREATE POLICY "Admins can view all chat messages" 
  ON public.chat_messages FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

-- Inserir alguns personagens de exemplo
INSERT INTO public.characters (name, description, personality, age_range, gender) VALUES
('Luna', 'Uma fada mágica que adora aventuras', 'Curiosa, corajosa e sempre pronta para ajudar', '5-10', 'feminino'),
('Rex', 'Um dinossauro amigável que ensina sobre a natureza', 'Gentil, sábio e protetor', '6-12', 'masculino'),
('Estrela', 'Uma princesa das estrelas que conta histórias do espaço', 'Sonhadora, inteligente e carinhosa', '4-8', 'feminino'),
('Capitão Jack', 'Um pirata aventureiro em busca de tesouros', 'Corajoso, engraçado e leal', '7-12', 'masculino');
