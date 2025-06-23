
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="font-logo text-2xl mb-4">
              <span className="text-blue-400">Jack</span>
              <span className="text-orange-btn">B</span>
              <span className="text-green-nature">o</span>
              <span className="text-yellow-accent">o</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos a criatividade infantil em livros únicos e especiais. 
              Cada desenho conta uma história, cada história cria memórias.
            </p>
            <div className="flex items-center text-pink-400">
              <Heart size={20} className="mr-2" />
              <span>Feito com amor para crianças</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#criar-livro" className="text-gray-300 hover:text-white transition-colors">
                  Criar Livro
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-white transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-400" />
                <span className="text-gray-300">contato@jackboo.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-green-400" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-3 text-red-400" />
                <span className="text-gray-300">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 JackBoo. Todos os direitos reservados. 
            <span className="text-pink-400 ml-2">Criando memórias através da arte infantil</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
