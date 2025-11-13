import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', page: 'home' },
    { label: 'Programmes', page: 'programs' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-[#e50914] rounded-lg flex items-center justify-center">
              <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>PC</span>
            </div>
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
              Personal Coach
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page
                    ? 'text-[#e50914]'
                    : 'text-[#f4f4f4] hover:text-[#e50914]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#e50914] text-white px-6 py-2.5 rounded-lg hover:bg-[#c50812] transition-colors"
            >
              Commencer
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/10">
          <nav className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors ${
                  currentPage === item.page
                    ? 'text-[#e50914]'
                    : 'text-[#f4f4f4] hover:text-[#e50914]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#e50914] text-white px-6 py-3 rounded-lg hover:bg-[#c50812] transition-colors"
            >
              Commencer
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
