// components/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      iconPath: "/public/imagensfigma/iconelapis.png",
      title: "1. Desenhe",
      description: "Crie um desenho incrível usando sua imaginação",
      bgColorClass: "bg-[#FDE9EE]", // Cor rosa clara do Figma
      illustrationPath: "/public/imagensfigma/retratomorcego.png",
    },
    {
      iconPath: "/public/imagensfigma/iconescan.png",
      title: "2. Escaneie",
      description: "Tire uma foto ou escaneie o desenho usando nosso app",
      bgColorClass: "bg-[#E6F3FA]", // Cor azul clara do Figma
      illustrationPath: "/public/imagensfigma/celularmorcego.png",
    },
    {
      iconPath: "/public/imagensfigma/iconelivro.png", // Este é o ícone do personagem (o Figma mostra um livro ali, mas o design é de um JackBoo)
      title: "3. Personagem",
      description: "O JackBoo dará vida ao seu personagem",
      bgColorClass: "bg-[#E0F8F1]", // Cor verde clara do Figma
      illustrationPath: "/public/imagensfigma/celmorgegos2.png",
    },
    {
      iconPath: "/public/imagensfigma/iconeestrela.png",
      title: "4. Livro",
      description: "Receba o seu livrinho de colorir em casa",
      bgColorClass: "bg-[#FFF8E6]", // Cor amarela clara do Figma
      illustrationPath: "/public/imagensfigma/livrojackboo.png",
    }
  ];

  const darkBlueText = "text-[#062637]"; // Cor do texto principal e títulos

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F0F5FB] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${darkBlueText} mb-8`}>
            Como Funciona
          </h2>
        </div>

        {/* Grid de Passos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl shadow-md flex flex-col items-center relative pt-20 ${step.bgColorClass}`} // Adicionado relative e pt-20 para espaço do ícone
            >
              {/* Ícone superior - Posicionamento Absoluto */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2"> {/* -top-10 move pra cima, translate-x-1/2 centraliza */}
                <img
                  src={step.iconPath}
                  alt={`${step.title} icon`}
                  className="w-20 h-20 object-contain" // Tamanho do ícone, ajuste se necessário
                />
              </div>

              {/* Título do Passo */}
              <h3 className={`text-xl font-bold ${darkBlueText} mt-4 mb-2`}> {/* mt-4 para afastar do ícone */}
                {step.title}
              </h3>

              {/* Descrição do Passo */}
              <p className={`text-base ${darkBlueText} text-center mb-6`}>
                {step.description}
              </p>

              {/* Ilustração principal do card */}
              <div className="flex-grow flex items-end justify-center"> {/* Alinha a ilustração na parte inferior do card */}
                <img
                  src={step.illustrationPath}
                  alt={`${step.title} illustration`}
                  className="w-full h-auto object-contain max-w-[150px] md:max-w-[180px] lg:max-w-[200px]" // Mantenha o ajuste de tamanho
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elementos decorativos do fundo (lápis e câmera) - Mantenha se quiser */}
      {/* Exemplo: <img src="/public/imagensfigma/lapis_decorativo.png" alt="Lapis decorativo" className="absolute bottom-10 left-5 md:left-20 w-24 h-auto rotate-[-15deg] z-0" /> */}
      {/* Exemplo: <img src="/public/imagensfigma/camera_decorativa.png" alt="Camera decorativa" className="absolute bottom-5 right-5 md:right-20 w-32 h-auto rotate-[5deg] z-0" /> */}
    </section>
  );
};

export default HowItWorks;