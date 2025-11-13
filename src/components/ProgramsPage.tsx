import { Check, CreditCard } from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (page: string) => void;
}

export function ProgramsPage({ onNavigate }: ProgramsPageProps) {
  const programs = [
    {
      id: 'masse',
      title: 'Prise de masse',
      subtitle: 'Développez votre masse musculaire',
      price: '149€',
      period: '/mois',
      description: 'Programme complet pour construire du muscle de qualité avec un suivi personnalisé.',
      features: [
        'Programme d\'entraînement personnalisé (4-5 séances/semaine)',
        'Plan nutritionnel hypercalorique sur mesure',
        'Calcul précis des macros (protéines, glucides, lipides)',
        'Suivi hebdomadaire avec ajustements',
        'Accès à l\'application mobile de suivi',
        'Support WhatsApp 7j/7',
        'Bibliothèque de recettes prise de masse',
        'Vidéos techniques des exercices'
      ],
      popular: false
    },
    {
      id: 'perte',
      title: 'Perte de poids',
      subtitle: 'Atteignez votre poids idéal',
      price: '129€',
      period: '/mois',
      description: 'Transformez votre corps de manière saine et durable sans effet yo-yo.',
      features: [
        'Programme cardio + renforcement musculaire',
        'Plan alimentaire en déficit calorique maîtrisé',
        'Suivi de progression hebdomadaire',
        'Coaching motivation et mindset',
        'Accès à l\'application mobile de suivi',
        'Support WhatsApp 7j/7',
        'Recettes healthy et gourmandes',
        'Conseils pour éviter l\'effet yo-yo'
      ],
      popular: true
    },
    {
      id: 'forme',
      title: 'Remise en forme',
      subtitle: 'Retrouvez votre énergie',
      price: '119€',
      period: '/mois',
      description: 'Programme équilibré pour retrouver la forme et le bien-être au quotidien.',
      features: [
        'Programme adapté à votre niveau (débutant ok)',
        'Mix cardio, renfo, mobilité et stretching',
        'Nutrition équilibrée sans frustration',
        'Suivi bimensuel',
        'Accès à l\'application mobile de suivi',
        'Support WhatsApp du lundi au vendredi',
        'Conseils bien-être et récupération',
        'Programme évolutif selon vos progrès'
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e50914]/10 border border-[#e50914]/30 rounded-full px-4 py-1 mb-6">
            <span className="text-[#e50914]">Programmes détaillés</span>
          </div>
          
          <h1 
            className="text-[#f4f4f4] mb-4"
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}
          >
            Choisissez le programme{' '}
            <span className="text-[#e50914]">parfait</span>{' '}
            pour vous
          </h1>
          
          <p className="text-[#AAAAAA] text-lg max-w-2xl mx-auto">
            Tous les programmes incluent un suivi personnalisé et un accès illimité à votre coach
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`relative bg-[#0F0F0F] rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 ${
                program.popular
                  ? 'border-[#e50914]'
                  : 'border-white/10 hover:border-[#e50914]/50'
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#e50914] text-white text-center py-2">
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    ⭐ Le plus populaire
                  </span>
                </div>
              )}

              <div className={`p-8 ${program.popular ? 'pt-16' : ''}`}>
                {/* Title */}
                <h3 
                  className="text-[#f4f4f4] mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.75rem' }}
                >
                  {program.title}
                </h3>
                <p className="text-[#AAAAAA] mb-6">
                  {program.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span 
                      className="text-[#f4f4f4]"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '3rem' }}
                    >
                      {program.price}
                    </span>
                    <span className="text-[#AAAAAA] ml-2">
                      {program.period}
                    </span>
                  </div>
                  <p className="text-[#AAAAAA] text-sm mt-2">
                    {program.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="text-[#e50914] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-[#f4f4f4]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full px-6 py-4 rounded-lg transition-all flex items-center justify-center space-x-2 ${
                    program.popular
                      ? 'bg-[#e50914] text-white hover:bg-[#c50812]'
                      : 'bg-transparent border-2 border-[#e50914] text-[#e50914] hover:bg-[#e50914] hover:text-white'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  <CreditCard size={20} />
                  <span>Je choisis ce plan</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Program Section */}
        <div className="bg-gradient-to-r from-[#e50914]/10 to-transparent border border-[#e50914]/30 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h3 
              className="text-[#f4f4f4] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2rem' }}
            >
              Besoin d'un programme 100% sur mesure ?
            </h3>
            <p className="text-[#AAAAAA] text-lg mb-6">
              Contactez-moi pour créer ensemble un programme entièrement personnalisé selon vos objectifs, 
              contraintes et budget. Tarifs adaptés pour coaching premium, suivi intensif ou préparation compétition.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#e50914] text-white px-8 py-4 rounded-lg hover:bg-[#c50812] transition-all"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Demander un devis personnalisé
            </button>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-12 text-center">
          <p className="text-[#AAAAAA] mb-4">
            Paiement sécurisé via{' '}
            <span className="text-[#e50914]">Stripe</span>
          </p>
          <p className="text-[#AAAAAA] text-sm">
            Sans engagement · Annulation possible à tout moment · Garantie satisfait ou remboursé 14 jours
          </p>
        </div>
      </div>
    </div>
  );
}
