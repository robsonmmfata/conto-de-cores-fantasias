import { Button } from "@/components/ui/button";

const ClubJackBoo = () => {
  const bearIllustrationPath = "/public/imagensfigma/ursoclubejackboo.png";

  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Ajustado lg:grid-cols para dar mais espaço à esquerda e empurrar o urso mais para a esquerda */}
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center"> {/* Aumentado a proporção da primeira coluna */}
          {/* Left Content - Text and Button */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Clube JackBoo
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Faça parte do nosso clube e receba livros e desenhos todo mês!
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-bold">
              Assinar clube JackBoo
            </Button>
          </div>

          {/* Right Content - Bear Image */}
          <div className="flex justify-center">
            <img
              src={bearIllustrationPath}
              alt="Urso do Clube JackBoo"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
      {/* Elementos decorativos - Mantidos fora para sua decisão */}
    </section>
  );
};

export default ClubJackBoo;