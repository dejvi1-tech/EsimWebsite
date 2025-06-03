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

    // Payment Flow
    'payment.title': 'Checkout',
    'payment.summary': 'Order Summary',
    'payment.total': 'Total',
    'payment.proceed': 'Proceed to Payment',
    'payment.secure': 'Secure Checkout',
    'payment.cardName': 'Name on Card',
    'payment.cardNumber': 'Card Number',
    'payment.cardExpiry': 'Expiry Date',
    'payment.cardCvc': 'CVC',
    'payment.pay': 'Pay Now',
    'payment.processing': 'Processing...',
    'payment.secureDesc': 'Your payment information is secure',
    'payment.securePayment': 'Secure payment processing',
    'payment.noPlan': 'No Plan Selected',
    'payment.selectPlan': 'Please select an eSIM plan to continue.',
    'payment.browsePlans': 'Browse Plans',
    'payment.orderComplete': 'Order Complete!',
    'payment.orderCompleteDesc': 'Thank you for your purchase! Your eSIM has been successfully ordered and activation instructions have been sent to your email.',
    'payment.qrCode': 'Your eSIM QR Code',
    'payment.scanQrCode': 'Scan this QR code with your phone to install the eSIM',
    'payment.confirmationSent': 'Order confirmation sent to',
    'payment.viewAccount': 'Go to My Account',
    'payment.haveCoupon': 'Have a coupon code?',
    'payment.enterCode': 'Enter code',
    'payment.apply': 'Apply',
    'payment.subtotal': 'Subtotal',
    'payment.discount': 'Discount',
    'payment.instantDelivery': 'Instant digital delivery',
    'payment.moneyBack': '30-day money-back guarantee',
    'payment.support': '24/7 customer support',
    'payment.important': 'Important Information',
    'payment.importantNote': 'Make sure to provide a valid email address. Your eSIM QR code and activation instructions will be sent to this email immediately after purchase.',
    'payment.continue': 'Continue to Payment',
    'payment.firstName': 'First Name',
    'payment.lastName': 'Last Name',
    'payment.email': 'Email Address',
    'payment.emailNote': "We'll send the eSIM activation details to this email",
    'payment.contactDetails': 'Contact Details',
    'payment.payment': 'Payment',

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

    // Payment Flow
    'payment.title': 'Pagesa',
    'payment.summary': 'Përmbledhja e Porosisë',
    'payment.total': 'Totali',
    'payment.proceed': 'Vazhdo me Pagesën',
    'payment.secure': 'Pagesë e Sigurt',
    'payment.cardName': 'Emri në Kartë',
    'payment.cardNumber': 'Numri i Kartës',
    'payment.cardExpiry': 'Data e Skadimit',
    'payment.cardCvc': 'CVC',
    'payment.pay': 'Paguaj Tani',
    'payment.processing': 'Duke procesuar...',
    'payment.secureDesc': 'Informacioni juaj i pagesës është i sigurt',
    'payment.securePayment': 'Procesim i sigurt i pagesës',
    'payment.noPlan': 'Nuk është zgjedhur asnjë plan',
    'payment.selectPlan': 'Ju lutemi zgjidhni një plan eSIM për të vazhduar.',
    'payment.browsePlans': 'Shfleto Planet',
    'payment.orderComplete': 'Porosia u Kompletua!',
    'payment.orderCompleteDesc': 'Faleminderit për blerjen! eSIM juaj është porositur me sukses dhe udhëzimet e aktivizimit janë dërguar në email-in tuaj.',
    'payment.qrCode': 'Kodi QR i eSIM tuaj',
    'payment.scanQrCode': 'Skanoni këtë kod QR me telefonin tuaj për të instaluar eSIM',
    'payment.confirmationSent': 'Konfirmimi i porosisë u dërgua në',
    'payment.viewAccount': 'Shko te Llogaria Ime',
    'payment.haveCoupon': 'Keni kod kuponi?',
    'payment.enterCode': 'Vendosni kodin',
    'payment.apply': 'Apliko',
    'payment.subtotal': 'Nëntotali',
    'payment.discount': 'Zbritje',
    'payment.instantDelivery': 'Dorëzim i menjëhershëm dixhital',
    'payment.moneyBack': 'Garanci kthimi parash 30-ditore',
    'payment.support': 'Mbështetje 24/7',
    'payment.important': 'Informacion i Rëndësishëm',
    'payment.importantNote': 'Sigurohuni të vendosni një adresë email të vlefshme. Kodi QR i eSIM dhe udhëzimet e aktivizimit do të dërgohen në këtë email menjëherë pas blerjes.',
    'payment.continue': 'Vazhdo te Pagesa',
    'payment.firstName': 'Emri',
    'payment.lastName': 'Mbiemri',
    'payment.email': 'Adresa Email',
    'payment.emailNote': 'Do të dërgojmë detajet e aktivizimit të eSIM në këtë email',
    'payment.contactDetails': 'Detajet e Kontaktit',
    'payment.payment': 'Pagesa',

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