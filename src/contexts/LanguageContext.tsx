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
    'hero.browsePlans': 'Browse Plans',
    'hero.howItWorks': 'How It Works',

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

    // Popular Plans Section
    'plans.title': 'Popular eSIM Plans',
    'plans.subtitle': 'Our most popular data plans for travelers. Fast activation, reliable connection, and affordable prices.',
    'plans.viewAll': 'View All Plans',
    'plans.from': 'From',
    'plans.validity': 'Valid for',
    'plans.data': 'Data',
    'plans.viewDetails': 'View Details',

    // How It Works Section
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Getting connected with our eSIM service is quick and easy. Just follow these simple steps:',
    'howItWorks.step1': 'Choose Your Plan',
    'howItWorks.step1Desc': 'Browse our available plans based on your destination and data needs.',
    'howItWorks.step2': 'Scan QR Code',
    'howItWorks.step2Desc': 'After purchase, scan the QR code with your eSIM-compatible device.',
    'howItWorks.step3': 'Connect & Enjoy',
    'howItWorks.step3Desc': 'Activate your plan and enjoy reliable internet connection anywhere.',

    // Testimonials Section
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': "Don't just take our word for it. Here's what travelers around the world think about our eSIM service.",

    // CTA Section
    'cta.title': 'Ready to Stay Connected?',
    'cta.subtitle': 'Choose from our wide range of eSIM plans and enjoy seamless connectivity on your next adventure.',
    'cta.button': 'Get Your eSIM Now',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.contactUs': 'Contact Us',
    'footer.helpCenter': 'Help Center',
    'footer.installationGuide': 'Installation Guide',
    'footer.compatibilityCheck': 'Compatibility Check',
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
    'hero.browsePlans': 'Shfleto Planet',
    'hero.howItWorks': 'Si Funksionon',

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

    // Popular Plans Section
    'plans.title': 'Planet e Popullarizuara eSIM',
    'plans.subtitle': 'Planet tona më të popullarizuara të të dhënave për udhëtarët. Aktivizim i shpejtë, lidhje e besueshme dhe çmime të përballueshme.',
    'plans.viewAll': 'Shiko të Gjitha Planet',
    'plans.from': 'Nga',
    'plans.validity': 'I vlefshëm për',
    'plans.data': 'Të dhëna',
    'plans.viewDetails': 'Shiko Detajet',

    // How It Works Section
    'howItWorks.title': 'Si Funksionon',
    'howItWorks.subtitle': 'Lidhja me shërbimin tonë eSIM është e shpejtë dhe e lehtë. Thjesht ndiqni këto hapa të thjeshta:',
    'howItWorks.step1': 'Zgjidhni Planin Tuaj',
    'howItWorks.step1Desc': 'Shfletoni planet e disponueshme bazuar në destinacionin dhe nevojat tuaja për të dhëna.',
    'howItWorks.step2': 'Skanoni Kodin QR',
    'howItWorks.step2Desc': 'Pas blerjes, skanoni kodin QR me pajisjen tuaj të përputhshme me eSIM.',
    'howItWorks.step3': 'Lidhuni & Shijoni',
    'howItWorks.step3Desc': 'Aktivizoni planin tuaj dhe shijoni lidhje të besueshme interneti kudo.',

    // Testimonials Section
    'testimonials.title': 'Çfarë Thonë Klientët Tanë',
    'testimonials.subtitle': 'Mos merrni vetëm fjalën tonë. Ja çfarë mendojnë udhëtarët nga e gjithë bota për shërbimin tonë eSIM.',

    // CTA Section
    'cta.title': 'Gati për të Qëndruar të Lidhur?',
    'cta.subtitle': 'Zgjidhni nga gama jonë e gjerë e planeve eSIM dhe shijoni lidhje të pandërprerë në aventurën tuaj të radhës.',
    'cta.button': 'Merrni eSIM-in Tuaj Tani',

    // Footer
    'footer.quickLinks': 'Lidhje të Shpejta',
    'footer.support': 'Mbështetje',
    'footer.legal': 'Ligjore',
    'footer.contactUs': 'Na Kontaktoni',
    'footer.helpCenter': 'Qendra e Ndihmës',
    'footer.installationGuide': 'Udhëzuesi i Instalimit',
    'footer.compatibilityCheck': 'Kontrolli i Përputhshmërisë',
    'footer.termsOfService': 'Kushtet e Shërbimit',
    'footer.privacyPolicy': 'Politika e Privatësisë',
    'footer.refundPolicy': 'Politika e Rimbursimit',
    'footer.cookiePolicy': 'Politika e Cookies',
    'footer.rights': 'Të gjitha të drejtat e rezervuara.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

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