
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-sky-blue via-blue-400 to-blue-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating clouds */}
        <div className="absolute top-20 left-10 w-20 h-12 bg-white/20 cloud-shape animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-10 bg-white/20 cloud-shape animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/4 w-12 h-8 bg-white/20 cloud-shape animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Decorative hills */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 200" className="w-full h-32 text-green-500/60">
            <path d="M0,200 L0,100 Q300,50 600,80 Q900,110 1200,60 L1200,200 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 150" className="w-full h-24 text-green-400/80">
            <path d="M0,150 L0,80 Q400,30 800,60 Q1000,80 1200,40 L1200,150 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforme o desenho do seu filho em{" "}
              <span className="text-yellow-300">verdade!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 mb-8 font-medium">
              <span className="inline-flex items-center gap-2">
                <span className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                Pinte, escaneie e pronto
              </span>
              <br />
              <span className="text-lg">seu livro estará criado</span>
            </p>
            
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('criar-livro')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Criar livro personalizado
            </Button>
          </div>

          {/* Right Content - Character with Book */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Main Character - Teddy Bear with Book */}
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Bear Body */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-56 bg-yellow-200 rounded-t-full rounded-b-3xl relative">
                    {/* Bear Head */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-yellow-200 rounded-full">
                      {/* Ears */}
                      <div className="absolute -top-4 left-2 w-12 h-12 bg-yellow-200 rounded-full"></div>
                      <div className="absolute -top-4 right-2 w-12 h-12 bg-yellow-200 rounded-full"></div>
                      <div className="absolute -top-2 left-4 w-8 h-8 bg-orange-200 rounded-full"></div>
                      <div className="absolute -top-2 right-4 w-8 h-8 bg-orange-200 rounded-full"></div>
                      
                      {/* Eyes */}
                      <div className="absolute top-6 left-6 w-4 h-4 bg-black rounded-full"></div>
                      <div className="absolute top-6 right-6 w-4 h-4 bg-black rounded-full"></div>
                      
                      {/* Nose */}
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                      
                      {/* Mouth */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-b-full"></div>
                    </div>
                    
                    {/* Orange Shirt */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-36 h-24 bg-orange-500 rounded-t-2xl"></div>
                    
                    {/* Blue Pants */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-blue-500 rounded-b-3xl"></div>
                    
                    {/* Arms */}
                    <div className="absolute top-12 -left-6 w-12 h-20 bg-yellow-200 rounded-full"></div>
                    <div className="absolute top-12 -right-6 w-12 h-20 bg-yellow-200 rounded-full"></div>
                    
                    {/* Book in hand */}
                    <div className="absolute top-16 -right-8 w-16 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-lg transform rotate-12">
                      <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 rounded-lg p-2">
                        <div className="w-8 h-8 bg-yellow-200 rounded-full mx-auto mt-2"></div>
                        <div className="w-6 h-1 bg-green-600 mx-auto mt-1 rounded"></div>
                        <div className="w-8 h-1 bg-green-600 mx-auto mt-1 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative sparkles */}
              <div className="absolute -top-4 -right-4">
                <Sparkles className="text-yellow-300 animate-bounce-gentle" size={32} />
              </div>
              <div className="absolute top-1/4 -left-6">
                <div className="w-6 h-6 text-yellow-300">✨</div>
              </div>
              <div className="absolute bottom-1/4 -right-8">
                <div className="w-8 h-8 text-yellow-300">⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
