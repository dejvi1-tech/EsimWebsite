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

    // Plans Section
    'plans.title': 'Available eSIM Plans',
    'plans.subtitle': 'Choose from our wide range of data plans tailored for your travel needs',
    'plans.viewAll': 'View All Plans',
    'plans.from': 'From',
    'plans.validity': 'Valid for',
    'plans.data': 'Data',
    'plans.viewDetails': 'View Details',
    'plans.buyNow': 'Buy Now',
    'plans.popular': 'Popular',
    'plans.special': 'Special',
    'plans.unlimited': 'Unlimited',
    'plans.coverage': 'Coverage',
    'plans.oneTime': 'one-time',

    // Coverage Section
    'coverage.title': 'Countries Covered',
    'coverage.subtitle': 'Our eSIM works in the following countries',
    'coverage.included': 'Included Countries',
    'coverage.dataOnly': 'What do Data Only packages include?',
    'coverage.dataOnlyDesc': 'Data Only packages include high-speed internet across Europe, including Switzerland, UK, and Turkey.',
    'coverage.countries': 'countries',

    // Checkout
    'checkout.title': 'Checkout',
    'checkout.summary': 'Order Summary',
    'checkout.total': 'Total',
    'checkout.proceed': 'Proceed to Payment',
    'checkout.secure': 'Secure Checkout',

    // Account
    'account.title': 'My Account',
    'account.orders': 'Order History',
    'account.esims': 'My eSIMs',
    'account.profile': 'Profile',
    'account.settings': 'Settings',

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

    // Plans Section
    'plans.title': 'Planet eSIM të Disponueshme',
    'plans.subtitle': 'Zgjidhni nga gama jonë e gjerë e planeve të të dhënave të përshtatura për nevojat tuaja të udhëtimit',
    'plans.viewAll': 'Shiko të Gjitha Planet',
    'plans.from': 'Nga',
    'plans.validity': 'I vlefshëm për',
    'plans.data': 'Të dhëna',
    'plans.viewDetails': 'Shiko Detajet',
    'plans.buyNow': 'Bli Tani',
    'plans.popular': 'Popullarizuar',
    'plans.special': 'Special',
    'plans.unlimited': 'Pa Limit',
    'plans.coverage': 'Mbulimi',
    'plans.oneTime': 'një herë',

    // Coverage Section
    'coverage.title': 'Shtetet e Mbuluara',
    'coverage.subtitle': 'eSIM jonë funksionon në shtetet e mëposhtme',
    'coverage.included': 'Shtetet e Përfshira',
    'coverage.dataOnly': 'Çfarë përfshijnë paketat Data Only?',
    'coverage.dataOnlyDesc': 'Paketat Data Only përfshijnë internet me shpejtësi të lartë në të gjithë Europën, duke përfshirë Zvicër, Angli dhe Turqi.',
    'coverage.countries': 'shtete',

    // Checkout
    'checkout.title': 'Pagesa',
    'checkout.summary': 'Përmbledhja e Porosisë',
    'checkout.total': 'Totali',
    'checkout.proceed': 'Vazhdo me Pagesën',
    'checkout.secure': 'Pagesë e Sigurt',

    // Account
    'account.title': 'Llogaria Ime',
    'account.orders': 'Historiku i Porosive',
    'account.esims': 'eSIM-et e Mia',
    'account.profile': 'Profili',
    'account.settings': 'Cilësimet',

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