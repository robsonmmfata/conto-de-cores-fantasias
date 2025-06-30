
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-sky-blue to-blue-400 px-4 py-16 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Transforme seu desenho em um personagem!
            </h1>
            
            <Button 
              className="bg-orange-btn hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-bold shadow-lg"
            >
              Criar personagem/Livro
            </Button>
          </div>

          {/* Right Content - Bear Character */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Main Bear Character */}
              <div className="w-80 h-96 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Bear Body */}
                  <div className="w-48 h-60 bg-yellow-accent rounded-t-full rounded-b-3xl relative shadow-xl">
                    {/* Bear Head */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-yellow-accent rounded-full shadow-lg">
                      {/* Ears */}
                      <div className="absolute -top-4 left-4 w-12 h-12 bg-yellow-accent rounded-full shadow-md"></div>
                      <div className="absolute -top-4 right-4 w-12 h-12 bg-yellow-accent rounded-full shadow-md"></div>
                      <div className="absolute -top-2 left-6 w-8 h-8 bg-orange-300 rounded-full"></div>
                      <div className="absolute -top-2 right-6 w-8 h-8 bg-orange-300 rounded-full"></div>
                      
                      {/* Eyes */}
                      <div className="absolute top-6 left-6 w-4 h-4 bg-black rounded-full"></div>
                      <div className="absolute top-6 right-6 w-4 h-4 bg-black rounded-full"></div>
                      
                      {/* Nose */}
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                      
                      {/* Mouth */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-b-full"></div>
                    </div>
                    
                    {/* Orange Shirt */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-36 h-24 bg-orange-btn rounded-t-3xl shadow-md"></div>
                    
                    {/* Arms */}
                    <div className="absolute top-14 -left-6 w-12 h-20 bg-yellow-accent rounded-full shadow-md"></div>
                    <div className="absolute top-14 -right-6 w-12 h-20 bg-yellow-accent rounded-full shadow-md"></div>
                    
                    {/* Phone/Device in right hand */}
                    <div className="absolute top-18 -right-10 w-16 h-20 bg-white border-2 border-gray-300 rounded-lg shadow-xl transform rotate-12">
                      <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg p-2">
                        <div className="w-8 h-8 bg-yellow-accent rounded-full mx-auto mt-2 shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Art supplies around */}
              <div className="absolute top-20 -left-8 w-12 h-3 bg-red-500 rounded-full transform rotate-45"></div>
              <div className="absolute top-32 -left-12 w-12 h-3 bg-blue-500 rounded-full transform rotate-12"></div>
              <div className="absolute top-44 -left-6 w-12 h-3 bg-green-500 rounded-full transform -rotate-30"></div>
              
              {/* Camera */}
              <div className="absolute bottom-16 -left-16 w-20 h-16 bg-gray-700 rounded-lg shadow-lg">
                <div className="absolute top-2 left-2 w-16 h-12 bg-gray-800 rounded"></div>
                <div className="absolute top-4 left-4 w-8 h-8 bg-gray-600 rounded-full"></div>
                <div className="absolute top-6 left-6 w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
