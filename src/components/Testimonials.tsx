
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-yellow-200 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
            Depoimentos de pais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que os pais estão falando sobre a experiência mágica do JackBoo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 text-center md:text-left">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5c4?auto=format&fit=crop&w=150&h=150" 
                  alt="Ana Maria"
                  className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
                />
                <h4 className="text-xl font-bold text-orange-500 mt-4 mb-2">Ana Maria</h4>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "Ver o desenho da minha filha virar personagem de um livro foi mágico! Ela 
                  ficou encantada e agora leva o livrinho pra todo lugar. A qualidade da impressão 
                  e a história criada superaram todas as minhas expectativas."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150" 
                      alt="Pai 1"
                      className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150" 
                      alt="Pai 2"
                      className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150" 
                      alt="Pai 3"
                      className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-md"
                    />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">+1.247 pais satisfeitos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
