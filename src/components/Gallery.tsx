
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Gallery = () => {
  const books = [
    {
      title: "A AVENTURA DE DUDA",
      likes: 34,
      bgColor: "bg-yellow-200"
    },
    {
      title: "CRIAR livro de colorir",
      likes: 34,
      bgColor: "bg-blue-200"
    },
    {
      title: "AVENTURA DE DUDA",
      likes: 34,
      bgColor: "bg-green-200"
    },
    {
      title: "JACKBOO",
      likes: 34,
      bgColor: "bg-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Lojinha dos amigos
          </h2>
          <Button 
            variant="outline" 
            className="border-orange-btn text-orange-btn hover:bg-orange-btn hover:text-white rounded-full px-6"
          >
            Ver Todos
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className={`${book.bgColor} h-32 rounded-t-lg flex items-center justify-center`}>
                  {/* Simple bear mascot */}
                  <div className="w-16 h-20 bg-yellow-accent rounded-t-full rounded-b-2xl relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-accent rounded-full">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-orange-btn rounded-t-2xl"></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-center mb-3">{book.title}</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Heart size={16} className="text-red-500 fill-current mr-1" />
                      <span className="text-sm font-bold">{book.likes}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-orange-btn hover:bg-orange-600 text-white text-xs rounded-full px-3 py-1"
                    >
                      Ver Livro
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
