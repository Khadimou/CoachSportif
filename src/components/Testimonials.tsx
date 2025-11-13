import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marie L.',
      age: 32,
      program: 'Perte de poids',
      image: 'https://images.unsplash.com/photo-1593640852822-a44850096f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYmVmb3JlJTIwYWZ0ZXJ8ZW58MXx8fHwxNzYyNDgzMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      result: '-15kg en 4 mois',
      quote: "J'ai enfin trouvé un coach qui m'écoute et adapte le programme à mon rythme de vie. Les résultats ont dépassé mes attentes ! Je me sens en pleine forme et pleine de confiance.",
      rating: 5
    },
    {
      name: 'Thomas B.',
      age: 28,
      program: 'Prise de masse',
      image: 'https://images.unsplash.com/photo-1638536534782-6c7cf0802d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjdWxhdGlvbiUyMGd5bSUyMHdvcmtvdXR8ZW58MXx8fHwxNzYyNTMwNjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      result: '+8kg de muscle sec',
      quote: "Grâce au programme personnalisé et au suivi nutritionnel, j'ai enfin réussi à prendre de la masse musculaire de qualité. Le coaching est top, je recommande à 200% !",
      rating: 5
    },
    {
      name: 'Sophie D.',
      age: 45,
      program: 'Remise en forme',
      image: 'https://images.unsplash.com/photo-1760862557682-8d1ea29bceea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBhdGhsZXRlfGVufDF8fHx8MTc2MjQ2Mzg2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      result: 'Transformation complète',
      quote: "Après des années d'inactivité, j'avais peur de me lancer. Le coach a su me rassurer et me motiver. Aujourd'hui, je me sens revivre avec une énergie que je n'avais plus depuis longtemps.",
      rating: 5
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#0F0F0F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e50914]/10 border border-[#e50914]/30 rounded-full px-4 py-1 mb-6">
            <span className="text-[#e50914]">Témoignages</span>
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
            Ils ont{' '}
            <span className="text-[#e50914]">transformé</span>{' '}
            leur vie
          </h2>
          
          <p className="text-[#AAAAAA] text-lg max-w-2xl mx-auto">
            Découvrez les témoignages de mes clients et leurs transformations
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div className="bg-black border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-[400px] md:h-auto">
                  <ImageWithFallback
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent"></div>
                  
                  {/* Result Badge */}
                  <div className="absolute bottom-6 left-6 bg-[#e50914] px-4 py-2 rounded-lg">
                    <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                      {current.result}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  {/* Stars */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="text-[#e50914] fill-[#e50914]" size={20} />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-[#f4f4f4] text-lg mb-6 italic">
                    "{current.quote}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div 
                      className="text-[#f4f4f4] mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                    >
                      {current.name}, {current.age} ans
                    </div>
                    <div className="text-[#AAAAAA]">
                      Programme : {current.program}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#e50914] hover:border-[#e50914] transition-all"
              >
                <ChevronLeft className="text-[#f4f4f4]" size={20} />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-[#e50914] w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#e50914] hover:border-[#e50914] transition-all"
              >
                <ChevronRight className="text-[#f4f4f4]" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
