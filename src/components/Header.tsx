
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
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

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {user.user_metadata?.full_name || 'Usuário'}
                  </span>
                  {isAdmin && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                      Admin
                    </span>
                  )}
                </div>
                <Button 
                  onClick={handleAuthAction}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline"
                  onClick={signOut}
                  className="px-6 py-3 rounded-full font-semibold"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </div>
            ) : (
              <Button 
                onClick={handleAuthAction}
                className="bg-orange-btn hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Entrar
              </Button>
            )}
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
              
              {user ? (
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {user.user_metadata?.full_name || 'Usuário'}
                    </span>
                    {isAdmin && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                        Admin
                      </span>
                    )}
                  </div>
                  <Button 
                    onClick={() => {
                      handleAuthAction();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    Dashboard
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-6 py-3 rounded-full font-semibold"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => {
                    handleAuthAction();
                    setIsMenuOpen(false);
                  }}
                  className="bg-orange-btn hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold mt-2"
                >
                  Entrar
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
