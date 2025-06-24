
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-yellow-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
            Depoimentos de pais
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5c4?auto=format&fit=crop&w=150&h=150" 
                  alt="Ana Maria"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h4 className="text-xl font-bold text-orange-500 mb-2">Ana Maria</h4>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ver o desenho da minha filha virar personagem de um livro foi mágico! Ela 
                  ficou encantada e agora leva o livrinho pra todo lugar.
                </p>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150" 
                      alt="Pai 1"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150" 
                      alt="Pai 2"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150" 
                      alt="Pai 3"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
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

export default Testimonials;
