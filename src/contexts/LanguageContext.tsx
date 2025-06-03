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
    'testimonials.subtitle': 'Read what travelers around the world think about our eSIM service',

    // CTA Section
    'cta.title': 'Ready to Stay Connected?',
    'cta.subtitle': 'Choose from our wide range of eSIM plans and enjoy seamless connectivity',
    'cta.button': 'Get Your eSIM Now',

    // Coverage Section
    'coverage.dataOnly': 'Data Coverage Information',
    'coverage.dataOnlyDesc': 'Our eSIM plans provide data-only service in all supported countries',
    'coverage.included': 'Countries Included',

    // Plans Section
    'plans.title': 'Available eSIM Plans',
    'plans.popular': 'Popular',
    'plans.special': 'Special Offer',
    'plans.oneTime': 'One-time payment',

    // Checkout Section
    'checkout.title': 'Secure Checkout',
    'checkout.noPlan': 'No Plan Selected',
    'checkout.selectPlan': 'Please select an eSIM plan to continue',
    'checkout.browsePlans': 'Browse Plans',
    'checkout.summary': 'Order Summary',
    'checkout.haveCoupon': 'Have a coupon code?',
    'checkout.enterCode': 'Enter code',
    'checkout.apply': 'Apply',
    'checkout.subtotal': 'Subtotal',
    'checkout.discount': 'Discount',
    'checkout.total': 'Total',
    'checkout.secure': 'Secure Payment',
    'checkout.instantDelivery': 'Instant digital delivery',
    'checkout.moneyBack': '30-day money-back guarantee',
    'checkout.support': '24/7 customer support',
    'checkout.contactDetails': 'Contact Details',
    'checkout.payment': 'Payment',
    'checkout.firstName': 'First Name',
    'checkout.lastName': 'Last Name',
    'checkout.email': 'Email Address',
    'checkout.emailNote': 'We'll send your eSIM details to this email',
    'checkout.important': 'Important Note',
    'checkout.importantNote': 'Please ensure your device is eSIM compatible before purchase',
    'checkout.continue': 'Continue to Payment',
    'checkout.orderComplete': 'Order Complete!',
    'checkout.orderCompleteDesc': 'Your eSIM has been delivered to your email',
    'checkout.qrCode': 'Your eSIM QR Code',
    'checkout.scanQrCode': 'Scan this QR code with your device to install the eSIM',
    'checkout.confirmationSent': 'Confirmation email sent to',
    'checkout.viewAccount': 'View Account',

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
    'testimonials.subtitle': 'Lexoni se çfarë mendojnë udhëtarët nga e gjithë bota për shërbimin tonë eSIM',

    // CTA Section
    'cta.title': 'Gati për të Qëndruar të Lidhur?',
    'cta.subtitle': 'Zgjidhni nga gama jonë e gjerë e planeve eSIM dhe shijoni lidhje të pandërprerë',
    'cta.button': 'Merrni eSIM-in Tuaj Tani',

    // Coverage Section
    'coverage.dataOnly': 'Informacion për Mbulimin e të Dhënave',
    'coverage.dataOnlyDesc': 'Planet tona eSIM ofrojnë shërbim vetëm për të dhëna në të gjitha vendet e mbështetura',
    'coverage.included': 'Vendet e Përfshira',

    // Plans Section
    'plans.title': 'Planet eSIM të Disponueshme',
    'plans.popular': 'Popullarizuar',
    'plans.special': 'Ofertë Speciale',
    'plans.oneTime': 'Pagesë një herë',

    // Checkout Section
    'checkout.title': 'Pagesë e Sigurt',
    'checkout.noPlan': 'Nuk është Zgjedhur Asnjë Plan',
    'checkout.selectPlan': 'Ju lutemi zgjidhni një plan eSIM për të vazhduar',
    'checkout.browsePlans': 'Shfleto Planet',
    'checkout.summary': 'Përmbledhja e Porosisë',
    'checkout.haveCoupon': 'Keni kod kuponi?',
    'checkout.enterCode': 'Vendosni kodin',
    'checkout.apply': 'Apliko',
    'checkout.subtotal': 'Nëntotali',
    'checkout.discount': 'Zbritje',
    'checkout.total': 'Totali',
    'checkout.secure': 'Pagesë e Sigurt',
    'checkout.instantDelivery': 'Dorëzim i menjëhershëm dixhital',
    'checkout.moneyBack': 'Garanci kthimi parash 30-ditore',
    'checkout.support': 'Mbështetje 24/7',
    'checkout.contactDetails': 'Detajet e Kontaktit',
    'checkout.payment': 'Pagesa',
    'checkout.firstName': 'Emri',
    'checkout.lastName': 'Mbiemri',
    'checkout.email': 'Adresa e Email-it',
    'checkout.emailNote': 'Do t\'ju dërgojmë detajet e eSIM-it në këtë email',
    'checkout.important': 'Shënim i Rëndësishëm',
    'checkout.importantNote': 'Ju lutemi sigurohuni që pajisja juaj mbështet eSIM përpara blerjes',
    'checkout.continue': 'Vazhdo te Pagesa',
    'checkout.orderComplete': 'Porosia u Kompletua!',
    'checkout.orderCompleteDesc': 'eSIM-i juaj është dërguar në email-in tuaj',
    'checkout.qrCode': 'Kodi QR i eSIM-it Tuaj',
    'checkout.scanQrCode': 'Skanoni këtë kod QR me pajisjen tuaj për të instaluar eSIM-in',
    'checkout.confirmationSent': 'Email-i i konfirmimit u dërgua te',
    'checkout.viewAccount': 'Shiko Llogarinë',

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