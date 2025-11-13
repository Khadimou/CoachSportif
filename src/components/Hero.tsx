import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjI0NTg0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Personal Training"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#e50914]/10 border border-[#e50914]/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-[#e50914] rounded-full animate-pulse"></div>
            <span className="text-[#e50914]">Coach Sportif Certifié</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-[#f4f4f4] mb-6"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: '1.1'
            }}
          >
            Débloquez votre plein potentiel.{' '}
            <span className="text-[#e50914]">
              Commencez votre transformation
            </span>{' '}
            aujourd'hui.
          </h1>

          {/* Subtitle */}
          <p className="text-[#AAAAAA] text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Programme personnalisé · Suivi nutrition · Accompagnement 1-1 · 
            Résultats garantis
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('contact-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-[#e50914] text-white px-8 py-4 rounded-lg hover:bg-[#c50812] transition-all transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              <span>Commencer mon coaching</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="border-2 border-white/20 text-[#f4f4f4] px-8 py-4 rounded-lg hover:border-[#e50914] hover:text-[#e50914] transition-all w-full sm:w-auto"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Découvrir les programmes
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div 
                className="text-[#e50914] mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.5rem' }}
              >
                500+
              </div>
              <div className="text-[#AAAAAA]">Clients transformés</div>
            </div>
            <div className="text-center">
              <div 
                className="text-[#e50914] mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.5rem' }}
              >
                8+
              </div>
              <div className="text-[#AAAAAA]">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div 
                className="text-[#e50914] mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.5rem' }}
              >
                98%
              </div>
              <div className="text-[#AAAAAA]">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#e50914] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
