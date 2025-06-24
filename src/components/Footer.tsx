
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="font-logo text-3xl">
              <span className="text-white">Jack</span>
              <span className="text-orange-500">B</span>
              <span className="text-green-400">o</span>
              <span className="text-yellow-300">o</span>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <a href="#contato" className="hover:text-yellow-300 transition-colors font-medium">
              Entrar em contato
            </a>
            <a href="#suporte" className="hover:text-yellow-300 transition-colors font-medium">
              Suporte
            </a>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-6 text-center">
          <p className="text-blue-100 text-sm">
            © 2024 JackBoo. Todos os direitos reservados. 
            <span className="text-yellow-300 ml-2">Criando memórias através da arte infantil</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
