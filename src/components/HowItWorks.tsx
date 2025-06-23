
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Scan, BookOpen, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Palette,
      title: "1. Desenhe",
      description: "Seu filho cria um desenho incrível com muita criatividade e amor",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Scan,
      title: "2. Escaneie",
      description: "Tire uma foto ou escaneie o desenho usando nosso app",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "3. Personalize",
      description: "Adicione texto, escolha o formato e personalize sua história",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Sparkles,
      title: "4. Receba",
      description: "Receba seu livro físico impresso em casa em poucos dias",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Em apenas 4 passos simples, transformamos a arte do seu filho em um livro de verdade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
