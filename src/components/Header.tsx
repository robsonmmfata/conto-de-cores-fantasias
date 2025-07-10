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
    <header className="w-full bg-[#FFD167] border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/public/imagensfigma/logo.png"
              alt="JackBoo Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Início
            </a>
            <a 
              href="#como-funciona" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Clube JackBoo
            </a>
            <a 
              href="#lojinha" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Lojinha
            </a>
          </nav>

          {/* Sacola + Login Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Sacola */}
            <a 
              href="#sacola" 
              className="mr-2 flex items-center justify-center"
              title="Sacola"
            >
              <img src="/public/imagensfigma/sacola.png" alt="Sacola" className="h-7 w-7" />
            </a>

            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
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
                  className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-full font-semibold"
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline"
                  onClick={signOut}
                  className="bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full font-semibold"
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
            className="md:hidden text-gray-700"
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
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#como-funciona" 
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Clube JackBoo
              </a>
              <a 
                href="#lojinha" 
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lojinha
              </a>
              
              {user ? (
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
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
                    className="w-full bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-full font-semibold"
                  >
                    Dashboard
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full font-semibold"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200">
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
