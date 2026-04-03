
import React, { useState } from 'react';
import { useLanguage } from '../../hooks/use-language';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { LanguageSwitcher } from '../language-switcher';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.header.home, path: '/' },
    { label: t.header.about, path: '/sobre' },
    { label: t.header.markets, path: '/atuacao' },
    { label: t.header.innovation, path: '/inovacao' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-4 md:px-8 relative">
        {/* Logo Container - Absolute to allow overflow without affecting layout */}
        <div className="relative z-50 shrink-0 flex items-center">
          <Link to="/" className="flex items-center group">
            <div className="relative flex items-center">
              <img 
                src="https://i.imgur.com/yxFATfL.png" 
                alt="Aceros Logo" 
                className="h-28 md:h-40 w-auto object-contain absolute top-1/2 -translate-y-1/2 left-0 max-w-none transition-transform duration-300 group-hover:scale-105" 
                style={{ marginTop: '8px' }}
              />
              {/* Invisible placeholder to reserve width in the flex layout */}
              <div className="w-36 md:w-56 h-20 md:h-24"></div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav - Centered and Distributed */}
        <nav className="hidden md:flex items-center justify-center flex-1 px-4">
          <div className="flex items-center justify-center w-full gap-8 lg:gap-12 text-base font-medium text-gray-700">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className="relative transition-colors hover:text-primary whitespace-nowrap py-2 group">
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 transition-transform group-hover:scale-x-100 origin-left"></span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Right Side Actions - Balanced */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
          <div className="h-8 w-px bg-gray-200 mx-2"></div>
          <LanguageSwitcher />
          <Button onClick={() => navigate('/contato')} className="px-6 shadow-md hover:shadow-lg transition-all">
            {t.header.contact}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white p-4 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.path} 
                className="text-sm font-medium text-gray-700 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full" onClick={() => { navigate('/contato'); setMobileMenuOpen(false); }}>
              {t.header.contact}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
