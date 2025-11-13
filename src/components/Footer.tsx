import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#e50914] rounded-lg flex items-center justify-center">
                <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>PC</span>
              </div>
              <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                Personal Coach
              </span>
            </div>
            <p className="text-[#AAAAAA] mb-4 max-w-sm">
              Transformez votre corps et votre vie avec un accompagnement personnalisé. 
              Coach sportif certifié depuis plus de 8 ans.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#e50914] hover:border-[#e50914] transition-all"
              >
                <Instagram className="text-[#f4f4f4]" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#e50914] hover:border-[#e50914] transition-all"
              >
                <Facebook className="text-[#f4f4f4]" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#e50914] hover:border-[#e50914] transition-all"
              >
                <Youtube className="text-[#f4f4f4]" size={20} />
              </a>
              <a
                href="mailto:coach@personal.fr"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#e50914] hover:border-[#e50914] transition-all"
              >
                <Mail className="text-[#f4f4f4]" size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 
              className="text-[#f4f4f4] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#AAAAAA] hover:text-[#e50914] transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="text-[#AAAAAA] hover:text-[#e50914] transition-colors"
                >
                  Programmes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#AAAAAA] hover:text-[#e50914] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-[#f4f4f4] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              Services
            </h4>
            <ul className="space-y-2 text-[#AAAAAA]">
              <li>Prise de masse</li>
              <li>Perte de poids</li>
              <li>Remise en forme</li>
              <li>Coaching nutrition</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#AAAAAA] text-sm mb-4 md:mb-0">
            © 2025 Personal Coach. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-[#AAAAAA] hover:text-[#e50914] transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-[#AAAAAA] hover:text-[#e50914] transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-[#AAAAAA] hover:text-[#e50914] transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
