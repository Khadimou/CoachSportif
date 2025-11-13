import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, ChevronDown } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const faqs = [
    {
      question: 'Comment se passe le premier appel ?',
      answer: 'Le premier appel est gratuit et dure environ 30 minutes. Nous discutons de vos objectifs, votre niveau actuel, vos contraintes (emploi du temps, alimentation, blessures...) et je vous explique comment je peux vous aider à atteindre vos objectifs. Aucune obligation d\'engagement.'
    },
    {
      question: 'Combien de temps dure un programme ?',
      answer: 'Les programmes sont sans engagement et fonctionnent par abonnement mensuel. Cependant, je recommande un minimum de 3 mois pour obtenir des résultats visibles et durables. La plupart de mes clients continuent entre 6 et 12 mois pour atteindre leurs objectifs complets.'
    },
    {
      question: 'Puis-je faire le programme de chez moi ?',
      answer: 'Oui ! Je créé des programmes adaptés à votre situation : salle de sport, home gym, ou même en poids du corps uniquement. L\'important est d\'être régulier et motivé, pas forcément d\'avoir du matériel coûteux.'
    },
    {
      question: 'À quelle fréquence avons-nous contact ?',
      answer: 'Vous avez un accès direct à moi via WhatsApp 7j/7 (ou 5j/7 selon le programme). Nous faisons un point hebdomadaire ou bimensuel selon votre formule, avec ajustements du programme si nécessaire. Je réponds généralement en quelques heures maximum.'
    },
    {
      question: 'Que se passe-t-il si je ne vois pas de résultats ?',
      answer: 'Si vous suivez le programme sérieusement et que vous ne voyez aucun résultat après 30 jours, je vous rembourse intégralement. Mais soyons honnêtes : avec de la régularité et mon accompagnement, les résultats sont garantis !'
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#e50914]/10 border border-[#e50914]/30 rounded-full px-4 py-1 mb-6">
            <span className="text-[#e50914]">Contact</span>
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
            Parlons de{' '}
            <span className="text-[#e50914]">vos objectifs</span>
          </h1>
          
          <p className="text-[#AAAAAA] text-lg max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous ou contactez-moi directement. Je vous réponds sous 24h maximum.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 md:p-12">
                <h2 
                  className="text-[#f4f4f4] mb-8"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.75rem' }}
                >
                  Formulaire de contact
                </h2>

                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-[#f4f4f4] mb-2 block">
                        Prénom
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Votre prénom"
                        className="bg-black border-white/10 text-[#f4f4f4] focus:border-[#e50914] focus:ring-[#e50914]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-[#f4f4f4] mb-2 block">
                        Nom
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Votre nom"
                        className="bg-black border-white/10 text-[#f4f4f4] focus:border-[#e50914] focus:ring-[#e50914]"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-[#f4f4f4] mb-2 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre.email@exemple.com"
                        className="bg-black border-white/10 text-[#f4f4f4] focus:border-[#e50914] focus:ring-[#e50914]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#f4f4f4] mb-2 block">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+33 6 12 34 56 78"
                        className="bg-black border-white/10 text-[#f4f4f4] focus:border-[#e50914] focus:ring-[#e50914]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-[#f4f4f4] mb-2 block">
                      Votre message
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Parlez-moi de vos objectifs, vos contraintes, vos questions..."
                      className="bg-black border-white/10 text-[#f4f4f4] focus:border-[#e50914] focus:ring-[#e50914] min-h-[160px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#e50914] text-white px-8 py-4 rounded-lg hover:bg-[#c50812] transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  >
                    <span>Envoyer le message</span>
                    <Send size={20} />
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-[#0F0F0F] border border-[#e50914]/50 rounded-2xl p-12 text-center">
                <div className="w-20 h-20 bg-[#e50914]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-[#e50914]" size={40} />
                </div>
                <h3 
                  className="text-[#f4f4f4] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.5rem' }}
                >
                  Message envoyé avec succès !
                </h3>
                <p className="text-[#AAAAAA]">
                  Merci {formData.firstName}, je vous recontacte dans les 24h.
                </p>
              </div>
            )}

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 
                className="text-[#f4f4f4] mb-8"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.75rem' }}
              >
                Questions fréquentes
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span 
                        className="text-[#f4f4f4]"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                      >
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`text-[#e50914] transition-transform ${
                          openFAQ === index ? 'rotate-180' : ''
                        }`}
                        size={20}
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-[#AAAAAA]">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8">
              <h3 
                className="text-[#f4f4f4] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}
              >
                Coordonnées directes
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#e50914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#e50914]" size={20} />
                  </div>
                  <div>
                    <div className="text-[#AAAAAA] text-sm mb-1">Email</div>
                    <a href="mailto:coach@personal.fr" className="text-[#f4f4f4] hover:text-[#e50914] transition-colors">
                      coach@personal.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#e50914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#e50914]" size={20} />
                  </div>
                  <div>
                    <div className="text-[#AAAAAA] text-sm mb-1">Téléphone</div>
                    <a href="tel:+33612345678" className="text-[#f4f4f4] hover:text-[#e50914] transition-colors">
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#e50914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#e50914]" size={20} />
                  </div>
                  <div>
                    <div className="text-[#AAAAAA] text-sm mb-1">Localisation</div>
                    <div className="text-[#f4f4f4]">
                      Paris & Île-de-France
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#0F0F0F] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-[#e50914]" size={24} />
                <h3 
                  className="text-[#f4f4f4]"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}
                >
                  Disponibilités
                </h3>
              </div>
              <div className="space-y-2 text-[#AAAAAA]">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="text-[#f4f4f4]">7h - 21h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-[#f4f4f4]">9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-[#f4f4f4]">Sur RDV</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-[#e50914]/10 to-transparent border border-[#e50914]/30 rounded-2xl p-6 text-center">
              <div 
                className="text-[#e50914] mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2rem' }}
              >
                {"< 24h"}
              </div>
              <p className="text-[#f4f4f4]">Temps de réponse moyen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
