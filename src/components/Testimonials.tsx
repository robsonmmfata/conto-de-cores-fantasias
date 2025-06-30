import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-100 to-yellow-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Depoimentos de pais
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg relative">
            {/* Profile image positioned to the left */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 text-center md:text-left">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5c4?auto=format&fit=crop&w=150&h=150" 
                  alt="Ana Maria"
                  className="w-16 h-16 rounded-full object-cover mx-auto md:mx-0 shadow-md"
                />
                <h4 className="text-lg font-bold text-gray-800 mt-3 mb-2">Ana Maria</h4>
                <div className="flex items-center justify-center md:justify-start mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  "Ver o desenho da minha filha virar personagem de um livro foi mágico! Ela 
                  ficou encantada e agora leva o livrinho pra todo lugar."
                </p>
              </div>
            </div>
            
            {/* Other parents at the bottom right */}
            <div className="flex justify-end items-center gap-4 mt-6">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150" 
                  alt="Pai 1"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150" 
                  alt="Pai 2"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150" 
                  alt="Pai 3"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
              </div>
              <span className="text-sm text-gray-500 font-medium">+1.247 pais satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
