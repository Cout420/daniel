import React, { useState } from 'react';
import { useLanguage } from '../hooks/use-language';
import { Button } from './ui/button';
import { ChevronDown, Globe } from 'lucide-react';
import { Language } from '../types';

const languages: { code: Language; label: string }[] = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'zh', label: '中文' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const currentLabel = languages.find(l => l.code === language)?.label || 'Português';

  return (
    <div className="relative">
      <Button variant="ghost" size="sm" onClick={toggleOpen} className="gap-2">
        <Globe className="h-4 w-4" />
        {currentLabel}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md border bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 max-h-80 overflow-y-auto">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${language === lang.code ? 'font-bold text-primary' : 'text-gray-700'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
