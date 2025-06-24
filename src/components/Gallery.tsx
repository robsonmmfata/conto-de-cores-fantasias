
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Gallery = () => {
  const examples = [
    {
      title: "AVENTURA DA SOFIA",
      image: "🐥",
      bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-300",
      likes: 3460,
      color: "text-orange-600"
    },
    {
      title: "O ROBÔ",
      image: "🤖",
      bgColor: "bg-gradient-to-br from-blue-200 to-blue-300", 
      likes: 3460,
      color: "text-blue-600"
    },
    {
      title: "O MONSTRO AZUL",
      image: "👾",
      bgColor: "bg-gradient-to-br from-cyan-200 to-cyan-300",
      likes: 3460,
      color: "text-cyan-600"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-yellow-100 to-yellow-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 md:mb-0">
              Lojinha dos Amigos
            </h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              Mais votados
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {examples.map((example, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-xl overflow-hidden bg-white rounded-3xl"
            >
              <CardContent className="p-0">
                <div className={`${example.bgColor} p-12 text-center relative overflow-hidden`}>
                  <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{example.image}</div>
                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className={`text-xl font-bold ${example.color} mb-6`}>
                    {example.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-red-50 px-3 py-2 rounded-full">
                      <Heart size={18} className="text-red-500 fill-current mr-2" />
                      <span className="text-sm font-bold text-gray-700">{example.likes.toLocaleString()}</span>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Ver livro
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
