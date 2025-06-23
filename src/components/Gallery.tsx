
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";

const Gallery = () => {
  const examples = [
    {
      title: "A Aventura do Urso Corajoso",
      author: "Ana, 7 anos",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300",
      rating: 5,
      description: "Uma história incrível sobre um urso que salva a floresta"
    },
    {
      title: "O Gato Mágico",
      author: "Pedro, 6 anos",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&h=300",
      rating: 5,
      description: "As aventuras de um gato com poderes especiais"
    },
    {
      title: "Família de Cervos",
      author: "Maria, 8 anos",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?auto=format&fit=crop&w=400&h=300",
      rating: 5,
      description: "Uma linda história sobre amizade na floresta"
    },
    {
      title: "Minha Casa dos Sonhos",
      author: "João, 5 anos",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&h=300",
      rating: 5,
      description: "Um livro sobre o lar perfeito para toda família"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Galeria de Criações
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja alguns dos livros incríveis que outras crianças já criaram com o JackBoo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {examples.map((example, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold ml-1">{example.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {example.title}
                  </h3>
                  <p className="text-orange-btn font-semibold mb-3">
                    Por {example.author}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {example.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(example.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <Heart size={20} className="text-pink-500 hover:text-pink-600 cursor-pointer transition-colors" />
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
