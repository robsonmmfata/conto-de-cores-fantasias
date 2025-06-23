
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="font-logo text-3xl">
              <span className="text-blue-500">Jack</span>
              <span className="text-orange-btn">B</span>
              <span className="text-green-nature">o</span>
              <span className="text-yellow-accent">o</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-orange-btn transition-colors font-medium"
            >
              Início
            </a>
            <a 
              href="#criar-livro" 
              className="text-gray-700 hover:text-orange-btn transition-colors font-medium"
            >
              Criar Livro
            </a>
            <a 
              href="#como-funciona" 
              className="text-gray-700 hover:text-orange-btn transition-colors font-medium"
            >
              Como Funciona
            </a>
            <a 
              href="#galeria" 
              className="text-gray-700 hover:text-orange-btn transition-colors font-medium"
            >
              Galeria
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-orange-btn hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Loja
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-orange-btn transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#criar-livro" 
                className="text-gray-700 hover:text-orange-btn transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Criar Livro
              </a>
              <a 
                href="#como-funciona" 
                className="text-gray-700 hover:text-orange-btn transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#galeria" 
                className="text-gray-700 hover:text-orange-btn transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </a>
              <Button 
                className="bg-orange-btn hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Loja
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
