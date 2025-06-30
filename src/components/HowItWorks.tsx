
const HowItWorks = () => {
  const steps = [
    {
      icon: "🎨",
      title: "Desenhe",
      description: "Crie um desenho incrível usando sua imaginação",
      bgColor: "bg-pink-200",
      number: 1
    },
    {
      icon: "📱",
      title: "Escaneie",
      description: "Tire uma foto ou escaneie o desenho usando nosso app",
      bgColor: "bg-blue-200",
      number: 2
    },
    {
      icon: "🎭",
      title: "Personagem",
      description: "O JackBoo dará vida ao seu personagem",
      bgColor: "bg-green-200",
      number: 3
    },
    {
      icon: "📚",
      title: "Livro",
      description: "Receba o seu livrinho de colorir em casa",
      bgColor: "bg-yellow-200",
      number: 4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Como Funciona
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
                <div className="text-3xl">{step.icon}</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-btn text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
