import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

// Todas las traducciones
const translations = {
  es: {
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Desarrollador Front-End',
    'hero.subtitle': 'Creando experiencias digitales innovadoras',
    'hero.cta': 'Ver Proyectos',
    'about.title': 'Sobre Mí',
    'about.description':
      'Soy un desarrollador front-end apasionado por crear interfaces web modernas, responsivas y accesibles. Me especializo en React, TypeScript y diseño UI/UX.',
    'about.skills': 'Habilidades',
    'projects.title': 'Proyectos Destacados',
    'projects.viewDemo': 'Ver Demo',
    'projects.viewCode': 'Ver Código',
    'contact.title': 'Conectemos',
    'contact.description': 'Estoy disponible para nuevos proyectos y colaboraciones',
    'footer.rights': 'Todos los derechos reservados',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi, I am',
    'hero.title': 'Front-End Developer',
    'hero.subtitle': 'Creating innovative digital experiences',
    'hero.cta': 'View Projects',
    'about.title': 'About Me',
    'about.description':
      'I am a front-end developer passionate about creating modern, responsive, and accessible web interfaces. I specialize in React, TypeScript, and UI/UX design.',
    'about.skills': 'Skills',
    'projects.title': 'Featured Projects',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'View Code',
    'contact.title': "Let's Connect",
    'contact.description': "I'm available for new projects and collaborations",
    'footer.rights': 'All rights reserved',
  },
};

// 🔥 Esto crea autocompletado para las keys de traducción
export type TranslationKey = keyof typeof translations['es'];

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 🔥 Cargar idioma desde localStorage al iniciar
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('lang') as Language;
    return saved || 'es';
  });

  // 🔥 Guardar idioma en el storage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  // Toggle entre ES ↔ EN
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  // Función de traducción con autocompletado entero
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
