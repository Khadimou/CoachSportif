import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dumbbell, TrendingDown, Zap, ArrowRight } from 'lucide-react';

interface ProgramsProps {
  onNavigate: (page: string) => void;
}

export function Programs({ onNavigate }: ProgramsProps) {
  const programs = [
    {
      id: 'masse',
      title: 'Prise de masse',
      description: 'Développez votre masse musculaire avec un programme structuré et une nutrition optimisée.',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1638536534782-6c7cf0802d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjdWxhdGlvbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzYyNTMwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Programme musculation personnalisé',
        'Plan nutritionnel hypercalorique',
        'Suivi hebdomadaire',
        'Ajustements en temps réel'
      ]
    },
    {
      id: 'perte',
      title: 'Perte de poids',
      description: 'Atteignez votre poids idéal de manière saine et durable sans effet yo-yo.',
      icon: TrendingDown,
      image: 'https://images.unsplash.com/photo-1759300642261-6a1dcd0d19f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHQlMjBsb3NzJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzYyNTMwNjk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Cardio et renforcement musculaire',
        'Déficit calorique optimisé',
        'Coaching motivation',
        'Suivi de progression'
      ]
    },
    {
      id: 'forme',
      title: 'Remise en forme',
      description: 'Retrouvez votre énergie et votre condition physique avec un programme équilibré.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1760862557682-8d1ea29bceea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBhdGhsZXRlfGVufDF8fHx8MTc2MjQ2Mzg2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Training adapté à votre niveau',
        'Nutrition équilibrée',
        'Flexibilité et mobilité',
        'Bien-être global'
      ]
    }
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e50914]/10 border border-[#e50914]/30 rounded-full px-4 py-1 mb-6">
            <span className="text-[#e50914]">Programmes</span>
          </div>
          
          <h2 
            className="text-[#f4f4f4] mb-4"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: '1.2'
            }}
          >
            Choisissez votre{' '}
            <span className="text-[#e50914]">transformation</span>
          </h2>
          
          <p className="text-[#AAAAAA] text-lg max-w-2xl mx-auto">
            Des programmes sur mesure conçus pour atteindre vos objectifs spécifiques
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden hover:border-[#e50914]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#e50914] rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 
                    className="text-[#f4f4f4] mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.5rem' }}
                  >
                    {program.title}
                  </h3>
                  
                  <p className="text-[#AAAAAA] mb-6">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-[#AAAAAA]">
                        <div className="w-1.5 h-1.5 bg-[#e50914] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => onNavigate('programs')}
                    className="w-full bg-transparent border-2 border-[#e50914] text-[#e50914] px-6 py-3 rounded-lg hover:bg-[#e50914] hover:text-white transition-all flex items-center justify-center space-x-2 group/btn"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight 
                      className="group-hover/btn:translate-x-1 transition-transform" 
                      size={18} 
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#AAAAAA] mb-4">
            Besoin d'un programme 100% personnalisé ?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#e50914] text-white px-8 py-3 rounded-lg hover:bg-[#c50812] transition-colors inline-flex items-center space-x-2"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            <span>Contactez-moi</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
