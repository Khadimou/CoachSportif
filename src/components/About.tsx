import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Target, Heart } from 'lucide-react';

export function About() {
  return (
    <section className="bg-[#0F0F0F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb2FjaCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjUzMDY5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Coach Professionnel"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e50914] rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-[#e50914]/10 border border-[#e50914]/30 rounded-full px-4 py-1 mb-6">
              <span className="text-[#e50914]">À propos</span>
            </div>

            <h2 
              className="text-[#f4f4f4] mb-6"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.2'
              }}
            >
              Qui suis-je ?
            </h2>

            <p className="text-[#AAAAAA] mb-6 text-lg">
              Coach sportif certifié depuis plus de 8 ans, j'ai accompagné des centaines de personnes 
              vers leurs objectifs de transformation physique. Ma philosophie ? 
              <span className="text-[#f4f4f4]"> Aucun objectif n'est hors de portée avec le bon plan et la bonne mentalité.</span>
            </p>

            <p className="text-[#AAAAAA] mb-8 text-lg">
              Je combine expertise scientifique, programmes personnalisés et suivi nutritionnel 
              pour garantir des résultats durables. Chaque client est unique, chaque plan est sur mesure.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#e50914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-[#e50914]" size={24} />
                </div>
                <div>
                  <h3 
                    className="text-[#f4f4f4] mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    Certifications professionnelles
                  </h3>
                  <p className="text-[#AAAAAA]">
                    Diplômé d'État · Nutrition sportive · CrossFit Level 2
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#e50914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-[#e50914]" size={24} />
                </div>
                <div>
                  <h3 
                    className="text-[#f4f4f4] mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    Approche orientée résultats
                  </h3>
                  <p className="text-[#AAAAAA]">
                    Plans personnalisés basés sur vos objectifs et contraintes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#e50914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-[#e50914]" size={24} />
                </div>
                <div>
                  <h3 
                    className="text-[#f4f4f4] mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    Passion et engagement
                  </h3>
                  <p className="text-[#AAAAAA]">
                    Votre réussite est ma priorité, ensemble nous atteignons vos objectifs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
