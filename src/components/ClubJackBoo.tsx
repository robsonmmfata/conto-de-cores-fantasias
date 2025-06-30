
import { Button } from "@/components/ui/button";

const ClubJackBoo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Clube JackBoo
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Faça parte do nosso clube e receba livros e desenhos todo mês!
            </p>
            <Button className="bg-orange-btn hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full font-bold">
              Assinar clube JackBoo
            </Button>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Bear with book */}
              <div className="w-64 h-80 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Bear Body */}
                  <div className="w-40 h-48 bg-yellow-accent rounded-t-full rounded-b-3xl relative shadow-xl">
                    {/* Bear Head */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-yellow-accent rounded-full shadow-lg">
                      {/* Ears */}
                      <div className="absolute -top-3 left-3 w-8 h-8 bg-yellow-accent rounded-full"></div>
                      <div className="absolute -top-3 right-3 w-8 h-8 bg-yellow-accent rounded-full"></div>
                      <div className="absolute -top-1 left-4 w-6 h-6 bg-orange-300 rounded-full"></div>
                      <div className="absolute -top-1 right-4 w-6 h-6 bg-orange-300 rounded-full"></div>
                      
                      {/* Eyes */}
                      <div className="absolute top-4 left-4 w-3 h-3 bg-black rounded-full"></div>
                      <div className="absolute top-4 right-4 w-3 h-3 bg-black rounded-full"></div>
                      
                      {/* Nose */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    
                    {/* Orange Shirt */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-28 h-18 bg-orange-btn rounded-t-3xl"></div>
                    
                    {/* Arms */}
                    <div className="absolute top-10 -left-4 w-8 h-16 bg-yellow-accent rounded-full"></div>
                    <div className="absolute top-10 -right-4 w-8 h-16 bg-yellow-accent rounded-full"></div>
                    
                    {/* Book in arms */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-red-500 rounded-lg shadow-lg">
                      <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-lg p-2">
                        <div className="text-white text-xs font-bold text-center mt-2">LIVRO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubJackBoo;
