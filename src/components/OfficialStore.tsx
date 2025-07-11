import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OfficialStore = () => {
  const officialStoreBooks = [
    {
      productImagePath: "/public/imagensfigma/lojinha1.png", // Caminho real da sua imagem
      price: "R$29,90",
    },
    {
      productImagePath: "/public/imagensfigma/lojinha2.png", // Caminho real da sua imagem
      price: "R$29,90",
    },
    {
      productImagePath: "/public/imagensfigma/lojinha3.png", // Caminho real da sua imagem
      price: "R$29,90",
    }
  ];

  const friendsStoreItems = [
    {
      itemImagePath: "/public/imagensfigma/aventuraduda.png", // Substitua pelo caminho real da imagem
      likes: 34,
    },
    {
      itemImagePath: "/public/imagensfigma/livrocolorir.png", // Substitua pelo caminho real da imagem
      likes: 34,
    },
    {
      itemImagePath: "/public/imagensfigma/aventuraduda2.png", // Substitua pelo caminho real da imagem
      likes: 34,
    },
    {
      itemImagePath: "/public/imagensfigma/jackboocomcoelho.png", // Substitua pelo caminho real da imagem
      likes: 34,
    },
  ];

  const darkBlueText = "text-[#062637]"; // Reutilizando a cor de texto JackBoo
  const lightOrangeBg = "bg-[#FFEFE3]"; // Cor de fundo da seção Campeonato de Pintura (do Figma)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Seção: Loja Oficial JackBoo */}
        <div className="flex justify-between items-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${darkBlueText}`}>
            Loja Oficial JackBoo
          </h2>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-6"
          >
            Ver Todos
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20"> {/* Adicionado mb-20 para espaçamento com a próxima seção */}
          {officialStoreBooks.map((book, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-lg border-none shadow-none hover:shadow-none transition-shadow"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <img
                  src={book.productImagePath}
                  alt={`Produto da Loja Oficial JackBoo ${index + 1}`}
                  className="w-full h-auto object-cover rounded-t-lg flex-grow"
                />

                <div className="p-4 text-center">
                  <p className={`font-bold text-xl ${darkBlueText}`}>{book.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção: Lojinha dos Amigos */}
        <div className="flex justify-between items-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold ${darkBlueText}`}>
            Lojinha dos amigos
          </h2>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-6"
          >
            Ver Todos
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"> {/* Grid de 4 colunas para itens da lojinha dos amigos */}
          {friendsStoreItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-lg border-none shadow-none hover:shadow-none transition-shadow"
            >
              <CardContent className="p-0 flex flex-col items-center"> {/* flex-col e items-center para centralizar */}
                <img
                  src={item.itemImagePath}
                  alt={`Item da Lojinha dos Amigos ${index + 1}`}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="flex items-center justify-center py-3"> {/* Contêiner para o coração e o texto "Ver Livro" */}
                  {/* Ícone de Coração (simplesmente um span por enquanto) */}
                  <span className="text-red-500 text-lg mr-2">❤️</span>
                  <p className={`text-base font-semibold ${darkBlueText} mr-4`}>{item.likes}</p>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-4 py-2 text-sm"
                  >
                    Ver Livro
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção: Campeonato de Pintura */}
        
      </div>
    </section>
  );
};

export default OfficialStore;