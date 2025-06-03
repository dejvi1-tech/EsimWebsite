import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Signal } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center rounded-lg bg-primary p-2">
                <Signal size={28} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-primary">Dev E-sim</span>
            </Link>
            <p className="text-sm text-gray-600">
              {t('hero.subtitle')}
            </p>
            <div className="flex space-x-4 text-gray-500">
              <a href="#" className="hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-gray-900">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 transition-colors hover:text-primary">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-600 transition-colors hover:text-primary">{t('nav.browsePlans')}</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 transition-colors hover:text-primary">{t('nav.faq')}</Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-600 transition-colors hover:text-primary">{t('nav.account')}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-gray-900">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 transition-colors hover:text-primary">{t('footer.contactUs')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 transition-colors hover:text-primary">{t('footer.helpCenter')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 transition-colors hover:text-primary">{t('footer.installationGuide')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 transition-colors hover:text-primary">{t('footer.compatibilityCheck')}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-gray-900">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 transition-colors hover:text-primary">{t('footer.termsOfService')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 transition-colors hover:text-primary">{t('footer.privacyPolicy')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 transition-colors hover:text-primary">{t('footer.refundPolicy')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 transition-colors hover:text-primary">{t('footer.cookiePolicy')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 text-center text-sm text-gray-600 md:flex-row md:space-y-0">
            <p>&copy; {currentYear} Dev E-sim. {t('footer.rights')}</p>
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:text-primary">Home</Link>
              <Link to="/plans" className="hover:text-primary">Plans</Link>
              <Link to="/about" className="hover:text-primary">About</Link>
              <Link to="/faq" className="hover:text-primary">FAQ</Link>
              <Link to="/ndihme" className="hover:text-primary">Ndihme</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;