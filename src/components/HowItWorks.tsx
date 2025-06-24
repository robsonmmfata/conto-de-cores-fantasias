
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: "🎨",
      title: "Pinte seu personagem",
      description: "Desenhe e pinte seu personagem favorito com muita criatividade",
      bgColor: "bg-blue-100",
      stepColor: "bg-blue-500"
    },
    {
      icon: "📱",
      title: "Escaneie ou tire foto",
      description: "Use nosso app para capturar seu desenho de forma simples",
      bgColor: "bg-green-100",
      stepColor: "bg-green-500"
    },
    {
      icon: "📚",
      title: "Gere seu livro",
      description: "Nossa IA cria uma história incrível com seu personagem",
      bgColor: "bg-purple-100",
      stepColor: "bg-purple-500"
    },
    {
      icon: "⭐",
      title: "Vote e compartilha",
      description: "Compartilhe sua criação e vote nos livros dos amigos",
      bgColor: "bg-yellow-100",
      stepColor: "bg-yellow-500"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-600 mb-8">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme a criatividade do seu filho em uma aventura literária em apenas 4 passos simples
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number and Icon */}
              <div className="relative mb-8">
                <div className={`w-24 h-24 ${step.bgColor} rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-4xl">{step.icon}</div>
                </div>
                <div className={`absolute -top-3 -left-3 w-10 h-10 ${step.stepColor} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}>
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full font-bold text-xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Ver exemplos de livros
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
