
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
    <header className="w-full bg-blue-500 border-b border-blue-400 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="font-logo text-3xl">
              <span className="text-white">Jack</span>
              <span className="text-orange-500">B</span>
              <span className="text-green-400">o</span>
              <span className="text-yellow-300">o</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-white hover:text-yellow-300 transition-colors font-medium"
            >
              Depoimentos
            </a>
            <a 
              href="#como-funciona" 
              className="text-white hover:text-yellow-300 transition-colors font-medium"
            >
              Funcionamento
            </a>
            <Button 
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-500 px-6 py-2 rounded-full font-semibold"
              onClick={() => navigate('/auth')}
            >
              Criar conta
            </Button>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">
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
                  className="bg-white text-blue-500 hover:bg-gray-100 px-6 py-2 rounded-full font-semibold"
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline"
                  onClick={signOut}
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-500 px-6 py-2 rounded-full font-semibold"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </div>
            ) : (
              <Button 
                onClick={handleAuthAction}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-400 pt-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-white hover:text-yellow-300 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#como-funciona" 
                className="text-white hover:text-yellow-300 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Funcionamento
              </a>
              
              {user ? (
                <div className="space-y-3 pt-4 border-t border-blue-400">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">
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
                    className="w-full bg-white text-blue-500 hover:bg-gray-100 px-6 py-2 rounded-full font-semibold"
                  >
                    Dashboard
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-transparent border-white text-white hover:bg-white hover:text-blue-500 px-6 py-2 rounded-full font-semibold"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Button>
                </div>
              ) : (
                <div className="pt-4 border-t border-blue-400 space-y-2">
                  <Button 
                    onClick={() => {
                      navigate('/auth');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-transparent border-white text-white hover:bg-white hover:text-blue-500 px-6 py-2 rounded-full font-semibold mb-2"
                    variant="outline"
                  >
                    Criar conta
                  </Button>
                  <Button 
                    onClick={() => {
                      handleAuthAction();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold"
                  >
                    Login
                  </Button>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
