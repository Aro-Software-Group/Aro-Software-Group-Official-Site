"use client";

import { createContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ja',
  setLanguage: () => {},
});

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Load language preference from localStorage if available
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['ja', 'en', 'ko'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    } else {
      // Default to browser language if possible
      const browserLang = navigator.language.split('-')[0];
      if (['ja', 'en', 'ko'].includes(browserLang as Language)) {
        setLanguage(browserLang as Language);
        document.documentElement.lang = browserLang;
      }
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  // If we're rendering on the server or during the first client render,
  // don't apply the language changes to avoid hydration mismatches
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
