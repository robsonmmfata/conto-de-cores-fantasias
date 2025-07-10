import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen relative overflow-hidden bg-no-repeat bg-top bg-contain"
      style={{
        backgroundImage: "url('/public/imagensfigma/bg.png')",
      }}
    >
      <div className="container mx-auto pt-64 pb-12 px-4">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
          {/* Conteúdo da Esquerda (Texto e Botão) */}
          <div className="flex flex-col items-end lg:items-end pr-16"> {/* Removido text-white daqui */}
            {/* Texto com quebra de linha e nova cor */}
            <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-8 leading-tight text-right lg:text-right text-[--text-dark-blue]"> {/* Adicionado text-[--text-dark-blue] */}
              Transforme seu desenho <br /> em um personagem!
            </h1>

            {/* Botão */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-bold shadow-lg flex items-center justify-center">
              Criar personagem/Livro
            </Button>
          </div>

          {/* Conteúdo da Direita - Urso do Figma */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/public/imagensfigma/6.png"
              alt="Urso personagem JackBoo"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;