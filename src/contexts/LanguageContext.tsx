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

    // Checkout Section
    'checkout.title': 'Checkout',
    'checkout.summary': 'Order Summary',
    'checkout.total': 'Total',
    'checkout.proceed': 'Proceed to Payment',
    'checkout.secure': 'Secure Checkout',
    'checkout.cardName': 'Name on Card',
    'checkout.cardNumber': 'Card Number',
    'checkout.cardExpiry': 'Expiry Date',
    'checkout.cardCvc': 'CVC',
    'checkout.pay': 'Pay Now',
    'checkout.processing': 'Processing...',
    'checkout.secureDesc': 'Your payment information is secure',
    'checkout.securePayment': 'Secure payment processing',
    'checkout.noPlan': 'No Plan Selected',
    'checkout.selectPlan': 'Please select an eSIM plan to continue.',
    'checkout.browsePlans': 'Browse Plans',
    'checkout.orderComplete': 'Order Complete!',
    'checkout.orderCompleteDesc': 'Thank you for your purchase! Your eSIM has been successfully ordered and activation instructions have been sent to your email.',
    'checkout.qrCode': 'Your eSIM QR Code',
    'checkout.scanQrCode': 'Scan this QR code with your phone to install the eSIM',
    'checkout.confirmationSent': 'Order confirmation sent to',
    'checkout.viewAccount': 'Go to My Account',
    'checkout.haveCoupon': 'Have a coupon code?',
    'checkout.enterCode': 'Enter code',
    'checkout.apply': 'Apply',
    'checkout.subtotal': 'Subtotal',
    'checkout.discount': 'Discount',
    'checkout.instantDelivery': 'Instant digital delivery',
    'checkout.moneyBack': '30-day money-back guarantee',
    'checkout.support': '24/7 customer support',
    'checkout.important': 'Important Information',
    'checkout.importantNote': 'Make sure to provide a valid email address. Your eSIM QR code and activation instructions will be sent to this email immediately after purchase.',
    'checkout.continue': 'Continue to Payment',
    'checkout.firstName': 'First Name',
    'checkout.lastName': 'Last Name',
    'checkout.email': 'Email Address',
    'checkout.emailNote': "We'll send the eSIM activation details to this email",
    'checkout.contactDetails': 'Contact Details',
    'checkout.payment': 'Payment'
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

    // Checkout Section
    'checkout.title': 'Pagesa',
    'checkout.summary': 'Përmbledhja e Porosisë',
    'checkout.total': 'Totali',
    'checkout.proceed': 'Vazhdo me Pagesën',
    'checkout.secure': 'Pagesë e Sigurt',
    'checkout.cardName': 'Emri në Kartë',
    'checkout.cardNumber': 'Numri i Kartës',
    'checkout.cardExpiry': 'Data e Skadimit',
    'checkout.cardCvc': 'CVC',
    'checkout.pay': 'Paguaj Tani',
    'checkout.processing': 'Duke procesuar...',
    'checkout.secureDesc': 'Informacioni juaj i pagesës është i sigurt',
    'checkout.securePayment': 'Procesim i sigurt i pagesës',
    'checkout.noPlan': 'Nuk është zgjedhur asnjë plan',
    'checkout.selectPlan': 'Ju lutemi zgjidhni një plan eSIM për të vazhduar.',
    'checkout.browsePlans': 'Shfleto Planet',
    'checkout.orderComplete': 'Porosia u Kompletua!',
    'checkout.orderCompleteDesc': 'Faleminderit për blerjen! eSIM juaj është porositur me sukses dhe udhëzimet e aktivizimit janë dërguar në email-in tuaj.',
    'checkout.qrCode': 'Kodi QR i eSIM tuaj',
    'checkout.scanQrCode': 'Skanoni këtë kod QR me telefonin tuaj për të instaluar eSIM',
    'checkout.confirmationSent': 'Konfirmimi i porosisë u dërgua në',
    'checkout.viewAccount': 'Shko te Llogaria Ime',
    'checkout.haveCoupon': 'Keni kod kuponi?',
    'checkout.enterCode': 'Vendosni kodin',
    'checkout.apply': 'Apliko',
    'checkout.subtotal': 'Nëntotali',
    'checkout.discount': 'Zbritje',
    'checkout.instantDelivery': 'Dorëzim i menjëhershëm dixhital',
    'checkout.moneyBack': 'Garanci kthimi parash 30-ditore',
    'checkout.support': 'Mbështetje 24/7',
    'checkout.important': 'Informacion i Rëndësishëm',
    'checkout.importantNote': 'Sigurohuni të vendosni një adresë email të vlefshme. Kodi QR i eSIM dhe udhëzimet e aktivizimit do të dërgohen në këtë email menjëherë pas blerjes.',
    'checkout.continue': 'Vazhdo te Pagesa',
    'checkout.firstName': 'Emri',
    'checkout.lastName': 'Mbiemri',
    'checkout.email': 'Adresa Email',
    'checkout.emailNote': 'Do të dërgojmë detajet e aktivizimit të eSIM në këtë email',
    'checkout.contactDetails': 'Detajet e Kontaktit',
    'checkout.payment': 'Pagesa'
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