
import { Button } from "@/components/ui/button";

const PaintingChampionship = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-yellow-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Campeonato de Pintura
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Pinte, envie e participe do ranking JackBoo
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button className="bg-orange-btn hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-bold">
            Enviar Desenho
          </Button>
          <Button 
            variant="outline" 
            className="border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white px-8 py-4 text-lg rounded-full font-bold"
          >
            Ver Ranking
          </Button>
        </div>

        {/* Books display */}
        <div className="flex justify-center items-end gap-4 mb-8">
          <div className="w-24 h-32 bg-blue-500 rounded-lg shadow-lg transform rotate-[-5deg]">
            <div className="p-2 text-white text-center">
              <div className="w-8 h-8 bg-yellow-accent rounded-full mx-auto mb-2"></div>
              <div className="text-xs font-bold">O AMIGO RICARDO</div>
            </div>
          </div>
          <div className="w-28 h-36 bg-yellow-500 rounded-lg shadow-lg">
            <div className="p-2 text-white text-center">
              <div className="w-10 h-10 bg-orange-300 rounded-full mx-auto mb-2"></div>
              <div className="text-xs font-bold">A GRANDE AMIZADE</div>
            </div>
          </div>
          <div className="w-24 h-32 bg-green-500 rounded-lg shadow-lg transform rotate-[5deg]">
            <div className="p-2 text-white text-center">
              <div className="w-8 h-8 bg-yellow-accent rounded-full mx-auto mb-2"></div>
              <div className="text-xs font-bold">O Ursinho Oliver</div>
            </div>
          </div>
        </div>

        {/* Bear mascot */}
        <div className="flex justify-center">
          <div className="w-32 h-40 bg-yellow-accent rounded-t-full rounded-b-3xl relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-yellow-accent rounded-full">
              <div className="absolute -top-2 left-3 w-6 h-6 bg-yellow-accent rounded-full"></div>
              <div className="absolute -top-2 right-3 w-6 h-6 bg-yellow-accent rounded-full"></div>
              <div className="absolute top-3 left-3 w-3 h-3 bg-black rounded-full"></div>
              <div className="absolute top-3 right-3 w-3 h-3 bg-black rounded-full"></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-orange-btn rounded-t-3xl"></div>
            <div className="absolute top-8 -left-3 w-6 h-12 bg-yellow-accent rounded-full"></div>
            <div className="absolute top-8 -right-3 w-6 h-12 bg-yellow-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingChampionship;
