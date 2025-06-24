
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="font-logo text-4xl mb-6">
              <span className="text-white">Jack</span>
              <span className="text-orange-500">B</span>
              <span className="text-green-400">o</span>
              <span className="text-yellow-300">o</span>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Transformando a criatividade infantil em histórias mágicas que duram para sempre.
            </p>
            <div className="flex items-center gap-2">
              <Heart className="text-pink-400 fill-current" size={20} />
              <span className="text-blue-100">Criando memórias através da arte</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#como-funciona" className="text-blue-100 hover:text-yellow-300 transition-colors text-lg">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#criar-livro" className="text-blue-100 hover:text-yellow-300 transition-colors text-lg">
                  Criar Livro
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-blue-100 hover:text-yellow-300 transition-colors text-lg">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-blue-100 hover:text-yellow-300 transition-colors text-lg">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-300" size={20} />
                <span className="text-blue-100 text-lg">contato@jackboo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-300" size={20} />
                <span className="text-blue-100 text-lg">(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-300" size={20} />
                <span className="text-blue-100 text-lg">São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-center md:text-left">
              © 2024 JackBoo. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#privacidade" className="text-blue-100 hover:text-yellow-300 transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="text-blue-100 hover:text-yellow-300 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
