
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Gallery = () => {
  const examples = [
    {
      title: "AVENTURA DA SOFIA",
      image: "🐥",
      bgColor: "bg-yellow-100",
      likes: 3460,
      color: "text-orange-600"
    },
    {
      title: "O ROBÔ",
      image: "🤖",
      bgColor: "bg-blue-100", 
      likes: 3460,
      color: "text-blue-600"
    },
    {
      title: "O MONSTRO AZUL",
      image: "👾",
      bgColor: "bg-cyan-100",
      likes: 3460,
      color: "text-cyan-600"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-yellow-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Lojinha dos Amigos
            </h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
              Mais votados
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {examples.map((example, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white"
            >
              <CardContent className="p-0">
                <div className={`${example.bgColor} p-8 text-center`}>
                  <div className="text-6xl mb-4">{example.image}</div>
                </div>
                
                <div className="p-4 text-center">
                  <h3 className={`text-lg font-bold ${example.color} mb-3`}>
                    {example.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Heart size={16} className="text-red-500 fill-current mr-1" />
                      <span className="text-sm font-semibold">{example.likes}</span>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
