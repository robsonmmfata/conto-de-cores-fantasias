
const HowItWorks = () => {
  const steps = [
    {
      icon: "✏️",
      title: "1. Desenhe",
      description: "Crie um desenho incrível usando sua imaginação",
      bgColor: "bg-pink-200",
      image: "📝"
    },
    {
      icon: "📱",
      title: "2. Escaneie",
      description: "Tire uma foto ou escaneie o desenho usando nosso app",
      bgColor: "bg-blue-200",
      image: "📱"
    },
    {
      icon: "🐻",
      title: "3. Personagem",
      description: "O JackBoo dará vida ao seu personagem",
      bgColor: "bg-green-200",
      image: "🐻"
    },
    {
      icon: "📚",
      title: "4. Livro",
      description: "Receba o seu livrinho de colorir em casa",
      bgColor: "bg-yellow-200",
      image: "📚"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Como Funciona
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step illustration */}
              <div className="mb-6">
                {index === 0 && (
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg mx-auto p-4 border-2 border-pink-200">
                    <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                      <div className="text-blue-400 text-2xl">🐻</div>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="w-24 h-40 bg-blue-500 rounded-lg mx-auto relative shadow-lg">
                    <div className="absolute top-3 left-3 right-3 bottom-8 bg-blue-100 rounded">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-blue-400 text-xl">🐻</div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-blue-600 rounded"></div>
                  </div>
                )}
                {index === 2 && (
                  <div className="w-32 h-40 bg-green-400 rounded-lg mx-auto p-4 shadow-lg">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-20 bg-yellow-300 rounded-t-full rounded-b-lg relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-300 rounded-full">
                          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
                          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rounded-full"></div>
                        </div>
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-orange-500 rounded-t-lg"></div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg mx-auto p-4 border-2 border-yellow-200">
                    <div className="w-full h-full bg-gradient-to-b from-yellow-200 to-yellow-300 rounded flex items-center justify-center">
                      <div className="w-12 h-16 bg-yellow-300 rounded-t-full rounded-b-lg relative">
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-300 rounded-full">
                          <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
                          <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
                        </div>
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-orange-500 rounded-t-lg"></div>
                      </div>
                    </div>
                  </div>
                )}
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
