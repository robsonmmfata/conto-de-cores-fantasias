
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OfficialStore = () => {
  const books = [
    {
      title: "JackBoo",
      price: "R$29,90",
      bgColor: "bg-blue-400"
    },
    {
      title: "JackBoo", 
      price: "R$29,90",
      bgColor: "bg-orange-400"
    },
    {
      title: "JackBoo",
      price: "R$29,90", 
      bgColor: "bg-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Loja Oficial JackBoo
          </h2>
          <Button 
            variant="outline" 
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-6"
          >
            Ver Todos
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className={`${book.bgColor} h-48 rounded-t-lg flex items-center justify-center relative`}>
                  {/* Bear mascot for each book */}
                  <div className="w-20 h-24 bg-yellow-300 rounded-t-full rounded-b-2xl relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-300 rounded-full">
                      <div className="absolute -top-1 left-2 w-4 h-4 bg-yellow-300 rounded-full"></div>
                      <div className="absolute -top-1 right-2 w-4 h-4 bg-yellow-300 rounded-full"></div>
                      <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-8 bg-orange-500 rounded-t-2xl"></div>
                  </div>
                  {/* JackBoo text on book cover */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg">
                    JackBoo
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="font-bold text-xl text-gray-800 mb-4">{book.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficialStore;
