import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sq';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.browsePlans': 'Browse Plans',
    'nav.faq': 'FAQ',
    'nav.ndihme': 'Help',
    'nav.account': 'Account',
    'nav.cart': 'Cart',
    'nav.aboutUs': 'About Us',

    // Hero Section
    'hero.title': 'Stay Connected Anywhere in the World',
    'hero.subtitle': 'Instant eSIM activation for 190+ countries. No physical SIM needed. Connect to local networks at affordable prices.',

    // Features Section
    'features.title': 'Why Choose Our eSIM Service?',
    'features.subtitle': 'Experience the convenience of our eSIM technology with these amazing features',
    'features.instantActivation': 'Instant Activation',
    'features.instantActivationDesc': 'Activate your eSIM instantly with a simple QR code scan. No physical SIM card needed.',
    'features.globalCoverage': 'Global Coverage',
    'features.globalCoverageDesc': 'Stay connected in over 190 countries with reliable local network access.',
    'features.fastConnectivity': 'Fast Connectivity',
    'features.fastConnectivityDesc': 'Enjoy high-speed 4G/5G data where available for smooth browsing and streaming.',
    'features.costEffective': 'Cost-Effective',
    'features.costEffectiveDesc': 'Avoid expensive roaming charges with our affordable prepaid plans.',
    'features.easySetup': 'Easy Setup',
    'features.easySetupDesc': 'Simple installation process compatible with all eSIM-enabled devices.',
    'features.secureConnection': 'Secure Connection',
    'features.secureConnectionDesc': 'Encrypted connection for safe and private internet usage anywhere.',

    // Testimonials Section
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Read what travelers around the world think about our eSIM service. Real experiences from real customers.',

    // CTA Section
    'cta.title': 'Ready to Stay Connected?',
    'cta.subtitle': 'Choose from our wide range of eSIM plans and enjoy seamless connectivity on your next adventure.',
    'cta.button': 'Get Your eSIM Now',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.support': 'Support',
    'footer.contactUs': 'Contact Us',
    'footer.helpCenter': 'Help Center',
    'footer.installationGuide': 'Installation Guide',
    'footer.compatibilityCheck': 'Compatibility Check',
    'footer.legal': 'Legal',
    'footer.termsOfService': 'Terms of Service',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.refundPolicy': 'Refund Policy',
    'footer.cookiePolicy': 'Cookie Policy',
    'footer.rights': 'All rights reserved.'
  },
  sq: {
    // Navigation
    'nav.home': 'Ballina',
    'nav.browsePlans': 'Shfleto Planet',
    'nav.faq': 'FAQ',
    'nav.ndihme': 'Ndihme',
    'nav.account': 'Llogaria',
    'nav.cart': 'Shporta',
    'nav.aboutUs': 'Rreth Nesh',

    // Hero Section
    'hero.title': 'Qëndroni të Lidhur Kudo në Botë',
    'hero.subtitle': 'Aktivizim i menjëhershëm i eSIM për më shumë se 190 vende. Nuk nevojitet SIM fizike. Lidhuni me rrjetet lokale me çmime të përballueshme.',

    // Features Section
    'features.title': 'Pse të Zgjidhni Shërbimin tonë eSIM?',
    'features.subtitle': 'Përjetoni lehtësinë e teknologjisë sonë eSIM me këto veçori të mahnitshme',
    'features.instantActivation': 'Aktivizim i Menjëhershëm',
    'features.instantActivationDesc': 'Aktivizoni eSIM-in tuaj menjëherë me një skanim të thjeshtë të kodit QR. Nuk nevojitet kartë fizike SIM.',
    'features.globalCoverage': 'Mbulim Global',
    'features.globalCoverageDesc': 'Qëndroni të lidhur në më shumë se 190 vende me qasje të besueshme në rrjetin lokal.',
    'features.fastConnectivity': 'Lidhje e Shpejtë',
    'features.fastConnectivityDesc': 'Shijoni të dhëna të shpejta 4G/5G ku është e disponueshme për shfletim dhe transmetim të qetë.',
    'features.costEffective': 'Kosto Efektive',
    'features.costEffectiveDesc': 'Shmangni tarifat e shtrenjta të roaming-ut me planet tona të përballueshme me parapagesë.',
    'features.easySetup': 'Konfigurim i Lehtë',
    'features.easySetupDesc': 'Proces i thjeshtë instalimi i përputhshëm me të gjitha pajisjet që mbështesin eSIM.',
    'features.secureConnection': 'Lidhje e Sigurt',
    'features.secureConnectionDesc': 'Lidhje e enkriptuar për përdorim të sigurt dhe privat të internetit kudo.',

    // Testimonials Section
    'testimonials.title': 'Çfarë Thonë Klientët Tanë',
    'testimonials.subtitle': 'Lexoni se çfarë mendojnë udhëtarët nga e gjithë bota për shërbimin tonë eSIM. Përvoja reale nga klientë realë.',

    // CTA Section
    'cta.title': 'Gati për të Qëndruar të Lidhur?',
    'cta.subtitle': 'Zgjidhni nga gama jonë e gjerë e planeve eSIM dhe shijoni lidhje të pandërprerë në aventurën tuaj të radhës.',
    'cta.button': 'Merrni eSIM-in Tuaj Tani',

    // Footer
    'footer.quickLinks': 'Lidhje të Shpejta',
    'footer.support': 'Mbështetje',
    'footer.contactUs': 'Na Kontaktoni',
    'footer.helpCenter': 'Qendra e Ndihmës',
    'footer.installationGuide': 'Udhëzuesi i Instalimit',
    'footer.compatibilityCheck': 'Kontrolli i Përputhshmërisë',
    'footer.legal': 'Ligjore',
    'footer.termsOfService': 'Kushtet e Shërbimit',
    'footer.privacyPolicy': 'Politika e Privatësisë',
    'footer.refundPolicy': 'Politika e Rimbursimit',
    'footer.cookiePolicy': 'Politika e Cookies',
    'footer.rights': 'Të gjitha të drejtat e rezervuara.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('sq');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}