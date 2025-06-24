
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Scan, BookOpen, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "🎨",
      title: "Pinte seu personagem",
      description: "Desenhe e pinte seu personagem favorito com muita criatividade",
      bgColor: "bg-blue-100"
    },
    {
      icon: "📱",
      title: "Escaneie ou tire foto",
      description: "Use nosso app para capturar seu desenho de forma simples",
      bgColor: "bg-green-100"
    },
    {
      icon: "📚",
      title: "Gere seu livro",
      description: "Nossa IA cria uma história incrível com seu personagem",
      bgColor: "bg-purple-100"
    },
    {
      icon: "⭐",
      title: "Vote e compartilha",
      description: "Compartilhe sua criação e vote nos livros dos amigos",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Como Funciona
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg`}>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Ver exemplos de livros
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
