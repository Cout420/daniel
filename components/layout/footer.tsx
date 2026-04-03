import React from 'react';
import { useLanguage } from '../../hooks/use-language';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary">{t.footer.aboutTitle}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Column 2: Nav */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary">{t.footer.navTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/sobre" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="/atuacao/siderurgia" className="hover:text-accent transition-colors">Siderurgia</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Qualidade</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary">{t.footer.contactTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>vendas@metalurgicadaniela.com.br</li>
              <li>
                <a 
                  href="https://wa.me/551146442969?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20equipe." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  +55 (11) 4644-2969
                </a>
              </li>
              <li>+55 (11) 4644-2977</li>
              <li>Rua Alfa, nº 299, Bairro Una</li>
              <li>Itaquaquecetuba/SP 08599-670</li>
              <li className="pt-2 text-xs opacity-80">Seg-Sex: 8h às 18h</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary">{t.footer.newsletterTitle}</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email..." 
                className="w-full rounded border border-gray-300 px-3 py-1 text-sm bg-white"
              />
              <button className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90">OK</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 text-center text-xs text-muted-foreground">
          © {currentYear} {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
