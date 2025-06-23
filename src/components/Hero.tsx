
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating clouds */}
        <div className="absolute top-20 left-10 w-20 h-12 bg-white/20 cloud-shape animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-10 bg-white/20 cloud-shape animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/4 w-12 h-8 bg-white/20 cloud-shape animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Decorative hills */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 200" className="w-full h-32 text-green-nature/30">
            <path d="M0,200 L0,100 Q300,50 600,80 Q900,110 1200,60 L1200,200 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 150" className="w-full h-24 text-green-nature/50">
            <path d="M0,150 L0,80 Q400,30 800,60 Q1000,80 1200,40 L1200,150 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforme o desenho do seu filho em um livro{" "}
              <span className="text-yellow-accent">de verdade!</span>
              <Sparkles className="inline-block ml-2 text-yellow-accent animate-bounce-gentle" size={40} />
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              <Sparkles className="inline-block mr-2 text-yellow-accent" size={24} />
              Pinte, escaneie e pronto, seu livrinho estará criado.
            </p>
            
            <Button 
              className="bg-orange-btn hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-bounce-gentle"
              onClick={() => document.getElementById('criar-livro')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="mr-2" size={24} />
              Criar Livro
            </Button>
          </div>

          {/* Right Content - Character */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Character placeholder - using the uploaded image */}
              <div className="w-80 h-80 md:w-96 md:h-96 relative animate-float">
                <img 
                  src="/lovable-uploads/4d0455af-1d74-45c6-b930-6b7b13579749.png" 
                  alt="Personagem JackBoo segurando um livro" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Decorative sparkles */}
              <div className="absolute -top-4 -right-4">
                <Sparkles className="text-yellow-accent animate-bounce-gentle" size={32} />
              </div>
              <div className="absolute top-1/4 -left-6">
                <Sparkles className="text-white animate-bounce-gentle" size={24} style={{animationDelay: '0.5s'}} />
              </div>
              <div className="absolute bottom-1/4 -right-8">
                <Sparkles className="text-yellow-accent animate-bounce-gentle" size={20} style={{animationDelay: '1s'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
