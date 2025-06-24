
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating clouds */}
        <div className="absolute top-20 left-10 w-20 h-12 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-10 bg-white/25 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/4 w-12 h-8 bg-white/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Decorative hills in bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 200" className="w-full h-40 text-green-400/80">
            <path d="M0,200 L0,100 Q300,50 600,80 Q900,110 1200,60 L1200,200 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Transforme o desenho do seu filho em{" "}
              <span className="text-yellow-300">verdade!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 mb-10 font-medium leading-relaxed">
              <span className="inline-flex items-center gap-3 mb-2">
                <span className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">1</span>
                <span>Pinte, escaneie e pronto</span>
              </span>
              <br />
              <span className="text-xl ml-13">seu livro estará criado</span>
            </p>
            
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 text-xl rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('criar-livro')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Criar livro personalizado
            </Button>
          </div>

          {/* Right Content - Simplified Character */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Simplified Character - More cartoon-like */}
              <div className="w-96 h-96 relative">
                {/* Main Bear Character */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Bear Body */}
                  <div className="w-52 h-64 bg-yellow-300 rounded-t-full rounded-b-3xl relative shadow-xl">
                    {/* Bear Head */}
                    <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-yellow-300 rounded-full shadow-lg">
                      {/* Ears */}
                      <div className="absolute -top-6 left-3 w-14 h-14 bg-yellow-300 rounded-full shadow-md"></div>
                      <div className="absolute -top-6 right-3 w-14 h-14 bg-yellow-300 rounded-full shadow-md"></div>
                      <div className="absolute -top-3 left-6 w-10 h-10 bg-orange-300 rounded-full"></div>
                      <div className="absolute -top-3 right-6 w-10 h-10 bg-orange-300 rounded-full"></div>
                      
                      {/* Eyes */}
                      <div className="absolute top-8 left-8 w-5 h-5 bg-black rounded-full"></div>
                      <div className="absolute top-8 right-8 w-5 h-5 bg-black rounded-full"></div>
                      
                      {/* Nose */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
                      
                      {/* Mouth */}
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-3 border-black rounded-b-full"></div>
                    </div>
                    
                    {/* Orange Shirt */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-40 h-28 bg-orange-500 rounded-t-3xl shadow-md"></div>
                    
                    {/* Blue Pants */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-24 bg-blue-500 rounded-b-3xl shadow-md"></div>
                    
                    {/* Arms */}
                    <div className="absolute top-16 -left-8 w-14 h-24 bg-yellow-300 rounded-full shadow-md"></div>
                    <div className="absolute top-16 -right-8 w-14 h-24 bg-yellow-300 rounded-full shadow-md"></div>
                    
                    {/* Book in right hand */}
                    <div className="absolute top-20 -right-12 w-20 h-24 bg-white border-3 border-gray-400 rounded-lg shadow-xl transform rotate-12">
                      <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-400 rounded-lg p-3">
                        <div className="w-10 h-10 bg-yellow-300 rounded-full mx-auto mt-3 shadow-sm"></div>
                        <div className="w-8 h-2 bg-green-600 mx-auto mt-2 rounded-full"></div>
                        <div className="w-10 h-2 bg-green-600 mx-auto mt-1 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced sparkles */}
              <div className="absolute -top-6 -right-6">
                <Sparkles className="text-yellow-300 animate-bounce-gentle" size={40} />
              </div>
              <div className="absolute top-1/4 -left-8">
                <div className="w-8 h-8 text-yellow-300 animate-pulse">✨</div>
              </div>
              <div className="absolute bottom-1/4 -right-10">
                <div className="w-10 h-10 text-yellow-300 animate-bounce-gentle" style={{animationDelay: '0.5s'}}>⭐</div>
              </div>
              <div className="absolute top-1/2 left-0">
                <div className="w-6 h-6 text-yellow-300 animate-pulse" style={{animationDelay: '1s'}}>💫</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
