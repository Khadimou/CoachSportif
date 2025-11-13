import { ImageWithFallback } from './figma/ImageWithFallback';
import { Apple, Utensils, Calendar, CheckCircle2 } from 'lucide-react';

export function Nutrition() {
  const nutritionFeatures = [
    'Plans alimentaires personnalisés',
    'Recettes saines et savoureuses',
    'Calcul macro-nutriments',
    'Liste de courses hebdomadaire'
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-[#e50914]/10 border border-[#e50914]/30 rounded-full px-4 py-1 mb-6">
              <span className="text-[#e50914]">Nutrition</span>
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
              L'alimentation,{' '}
              <span className="text-[#e50914]">la clé</span>{' '}
              de votre réussite
            </h2>

            <p className="text-[#AAAAAA] mb-8 text-lg">
              Un entraînement efficace ne suffit pas. Une nutrition adaptée représente 70% 
              de votre transformation. C'est pourquoi chaque programme inclut un suivi 
              nutritionnel complet et personnalisé.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0F0F0F] border border-white/10 rounded-xl p-4 hover:border-[#e50914]/50 transition-colors">
                <Apple className="text-[#e50914] mb-3" size={28} />
                <h3 
                  className="text-[#f4f4f4] mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  Qualité
                </h3>
                <p className="text-[#AAAAAA] text-sm">
                  Aliments sains et équilibrés
                </p>
              </div>

              <div className="bg-[#0F0F0F] border border-white/10 rounded-xl p-4 hover:border-[#e50914]/50 transition-colors">
                <Utensils className="text-[#e50914] mb-3" size={28} />
                <h3 
                  className="text-[#f4f4f4] mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  Simplicité
                </h3>
                <p className="text-[#AAAAAA] text-sm">
                  Recettes faciles et rapides
                </p>
              </div>

              <div className="bg-[#0F0F0F] border border-white/10 rounded-xl p-4 hover:border-[#e50914]/50 transition-colors">
                <Calendar className="text-[#e50914] mb-3" size={28} />
                <h3 
                  className="text-[#f4f4f4] mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  Planning
                </h3>
                <p className="text-[#AAAAAA] text-sm">
                  Menu semaine par semaine
                </p>
              </div>

              <div className="bg-[#0F0F0F] border border-white/10 rounded-xl p-4 hover:border-[#e50914]/50 transition-colors">
                <CheckCircle2 className="text-[#e50914] mb-3" size={28} />
                <h3 
                  className="text-[#f4f4f4] mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  Suivi
                </h3>
                <p className="text-[#AAAAAA] text-sm">
                  Ajustements réguliers
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {nutritionFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#e50914] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-white" size={16} />
                  </div>
                  <span className="text-[#f4f4f4]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXB8ZW58MXx8fHwxNzYyNDg5NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Meal Prep"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3NjI0MTQ2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthy Food"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXB8ZW58MXx8fHwxNzYyNDg5NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nutrition"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 grayscale"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3NjI0MTQ2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthy Meals"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 grayscale"
                />
                {/* Overlay badge */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <div className="text-center">
                    <div 
                      className="text-[#e50914] mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.5rem' }}
                    >
                      70%
                    </div>
                    <div className="text-white">
                      de votre réussite
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
}
