
-- Substitua 'seu-email@exemplo.com' pelo email que você usou para se registrar
INSERT INTO public.user_roles (user_id, role) 
SELECT id, 'admin' FROM auth.users WHERE email = 'admin@jackboo.com'
ON CONFLICT (user_id, role) DO NOTHING;
