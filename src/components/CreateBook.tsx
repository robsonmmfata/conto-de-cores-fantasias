
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Palette, Upload, Star } from "lucide-react";

const CreateBook = () => {
  const bookTypes = [
    {
      icon: BookOpen,
      title: "Livro de História",
      description: "Crie uma história personalizada com o desenho do seu filho como protagonista",
      features: ["Texto personalizado", "Até 20 páginas", "Capa dura", "Impressão premium"],
      price: "R$ 49,90",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      popular: false
    },
    {
      icon: Palette,
      title: "Livro de Colorir",
      description: "Transforme desenhos em páginas para colorir, criando um livro único",
      features: ["Múltiplos desenhos", "Papel especial", "Capa personalizada", "Diferentes tamanhos"],
      price: "R$ 29,90",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      popular: true
    }
  ];

  return (
    <section id="criar-livro" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Crie Seu Livro Personalizado
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Escolha entre diferentes tipos de livros e transforme a criatividade do seu filho em uma obra de arte física que durará para sempre
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16 max-w-6xl mx-auto">
          {bookTypes.map((type, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-xl overflow-hidden relative ${type.popular ? 'ring-4 ring-orange-400' : ''}`}
            >
              {type.popular && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 z-10">
                  <Star size={16} className="fill-current" />
                  Mais Popular
                </div>
              )}
              
              <CardContent className="p-0">
                <div className={`${type.color} p-8 text-white relative overflow-hidden`}>
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <type.icon size={40} className="mr-4" />
                      <h3 className="text-3xl font-bold">{type.title}</h3>
                    </div>
                    <p className="text-white/95 text-lg leading-relaxed">{type.description}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <Heart size={18} className="text-pink-500 mr-4 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold text-gray-800">{type.price}</span>
                    <Button 
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Começar Agora
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-3 border-dashed border-orange-300 hover:border-orange-500 transition-all duration-300 bg-gradient-to-br from-orange-50 to-yellow-50 hover:shadow-xl">
            <CardContent className="p-16 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Upload size={40} className="text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Já tem um desenho pronto?
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Faça upload do desenho do seu filho e comece a criar seu livro personalizado agora mesmo. Suportamos JPG, PNG e PDF.
              </p>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-12 py-5 text-xl rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Upload className="mr-3" size={24} />
                Fazer Upload do Desenho
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreateBook;
