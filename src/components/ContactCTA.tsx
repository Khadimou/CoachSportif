import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objective: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', objective: '' });
    }, 3000);
  };

  return (
    <section id="contact-section" className="bg-[#0F0F0F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 
              className="text-[#f4f4f4] mb-4"
              style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.2'
              }}
            >
              Prêt à{' '}
              <span className="text-[#e50914]">changer ?</span>
            </h2>
            
            <p className="text-[#AAAAAA] text-lg">
              Réservez votre appel découverte gratuit de 30 minutes et commencez votre transformation dès aujourd'hui
            </p>
          </div>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-black border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-[#f4f4f4] mb-2 block">
                    Nom complet
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    className="bg-[#0F0F0F] border-white/10 text-[#f4f4f4] focus:border-[#e50914] focus:ring-[#e50914]"
                  />
                </div>

                {/* Email */}
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
                    className="bg-[#0F0F0F] border-white/10 text-[#f4f4f4] focus:border-[#e50914] focus:ring-[#e50914]"
                  />
                </div>

                {/* Objective */}
                <div>
                  <Label htmlFor="objective" className="text-[#f4f4f4] mb-2 block">
                    Votre objectif
                  </Label>
                  <Textarea
                    id="objective"
                    required
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    placeholder="Décrivez brièvement votre objectif (prise de masse, perte de poids, remise en forme...)"
                    className="bg-[#0F0F0F] border-white/10 text-[#f4f4f4] focus:border-[#e50914] focus:ring-[#e50914] min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#e50914] text-white px-8 py-4 rounded-lg hover:bg-[#c50812] transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  <span>Réserver mon appel</span>
                  <Send size={20} />
                </button>
              </div>

              {/* Privacy Notice */}
              <p className="text-[#AAAAAA] text-sm text-center mt-6">
                Vos données sont sécurisées et ne seront jamais partagées
              </p>
            </form>
          ) : (
            <div className="bg-black border border-[#e50914]/50 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-[#e50914]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-[#e50914]" size={40} />
              </div>
              <h3 
                className="text-[#f4f4f4] mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.5rem' }}
              >
                Merci {formData.name} !
              </h3>
              <p className="text-[#AAAAAA]">
                Votre demande a été envoyée avec succès. Je vous recontacterai très bientôt pour planifier votre appel découverte.
              </p>
            </div>
          )}

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div 
                className="text-[#e50914] mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}
              >
                100% Gratuit
              </div>
              <p className="text-[#AAAAAA] text-sm">
                Premier appel sans engagement
              </p>
            </div>
            <div className="text-center">
              <div 
                className="text-[#e50914] mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}
              >
                30 minutes
              </div>
              <p className="text-[#AAAAAA] text-sm">
                Pour définir vos objectifs
              </p>
            </div>
            <div className="text-center">
              <div 
                className="text-[#e50914] mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}
              >
                Plan sur mesure
              </div>
              <p className="text-[#AAAAAA] text-sm">
                Programme adapté à vous
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
