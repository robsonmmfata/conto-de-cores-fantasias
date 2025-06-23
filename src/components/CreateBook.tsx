
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Palette, Upload } from "lucide-react";

const CreateBook = () => {
  const bookTypes = [
    {
      icon: BookOpen,
      title: "Livro de História",
      description: "Crie uma história personalizada com o desenho do seu filho como protagonista",
      features: ["Texto personalizado", "Até 20 páginas", "Capa dura", "Impressão premium"],
      price: "R$ 49,90",
      color: "bg-blue-500"
    },
    {
      icon: Palette,
      title: "Livro de Colorir",
      description: "Transforme desenhos em páginas para colorir, criando um livro único",
      features: ["Múltiplos desenhos", "Papel especial", "Capa personalizada", "Diferentes tamanhos"],
      price: "R$ 29,90",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="criar-livro" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Crie Seu Livro Personalizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha entre diferentes tipos de livros e transforme a criatividade do seu filho em uma obra de arte física
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {bookTypes.map((type, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`${type.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <type.icon size={32} className="mr-3" />
                    <h3 className="text-2xl font-bold">{type.title}</h3>
                  </div>
                  <p className="text-white/90 text-lg">{type.description}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <Heart size={16} className="text-pink-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-800">{type.price}</span>
                    <Button 
                      className="bg-orange-btn hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
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
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-dashed border-gray-300 hover:border-orange-btn transition-colors duration-300">
            <CardContent className="p-12 text-center">
              <Upload size={48} className="mx-auto text-gray-400 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Já tem um desenho pronto?
              </h3>
              <p className="text-gray-600 mb-6">
                Faça upload do desenho do seu filho e comece a criar seu livro agora mesmo
              </p>
              <Button 
                className="bg-gradient-to-r from-orange-btn to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Upload className="mr-2" size={20} />
                Fazer Upload
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreateBook;
