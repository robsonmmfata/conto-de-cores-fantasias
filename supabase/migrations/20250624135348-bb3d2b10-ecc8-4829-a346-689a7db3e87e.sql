
-- Adicionar role de administrador para o usuário robsonalexmmfata@gmail.com
INSERT INTO public.user_roles (user_id, role) 
SELECT id, 'admin' FROM auth.users WHERE email = 'robsonalexmmfata@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;
