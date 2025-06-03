import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Signal, HelpCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const isTransparent = !isScrolled && location.pathname === '/';

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.browsePlans'), path: '/plans' },
    { label: t('nav.aboutUs'), path: '/about' },
    { label: t('nav.faq'), path: '/faq' },
    { label: t('nav.ndihme'), path: '/ndihme', icon: <HelpCircle size={16} className="ml-1" /> }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isTransparent 
          ? 'bg-transparent backdrop-blur-sm' 
          : 'bg-white shadow-sm'
      )}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className={cn(
              "flex items-center justify-center rounded-lg p-2",
              isTransparent ? "bg-white/20 backdrop-blur-sm" : "bg-primary"
            )}>
              <Signal 
                size={28} 
                className="text-white"
                strokeWidth={2.5} 
              />
            </div>
            <span className={cn(
              "text-xl font-bold transition-colors duration-300",
              isTransparent ? "text-white" : "text-primary"
            )}>Dev E-sim</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        'text-sm font-medium transition-colors flex items-center',
                        isTransparent
                          ? isActive
                            ? 'text-white'
                            : 'text-white/90 hover:text-white'
                          : isActive
                            ? 'text-primary'
                            : 'text-gray-700 hover:text-primary'
                      )
                    }
                  >
                    {item.label}
                    {item.icon}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden space-x-4 md:flex items-center">
            <LanguageSwitcher isTransparent={isTransparent} />
            <Link
              to="/account"
              className={cn(
                "flex items-center space-x-1 text-sm font-medium transition-colors",
                isTransparent
                  ? "text-white/90 hover:text-white"
                  : "text-gray-700 hover:text-primary"
              )}
            >
              <User size={18} />
              <span>{t('nav.account')}</span>
            </Link>
            <Link
              to="/checkout"
              className={cn(
                "flex items-center space-x-1 text-sm font-medium transition-colors",
                isTransparent
                  ? "text-white/90 hover:text-white"
                  : "text-gray-700 hover:text-primary"
              )}
            >
              <ShoppingCart size={18} />
              <span>{t('nav.cart')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden transition-colors",
              isTransparent ? "text-white" : "text-gray-700"
            )}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white shadow-md md:hidden">
          <nav className="container-custom py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center py-2 text-base font-medium transition-colors hover:text-primary',
                        isActive ? 'text-primary' : 'text-gray-700'
                      )
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                    {item.icon}
                  </NavLink>
                </li>
              ))}
              <li>
                <LanguageSwitcher />
              </li>
              <li className="border-t border-gray-200 pt-4">
                <Link
                  to="/account"
                  className="flex items-center space-x-2 py-2 text-base font-medium text-gray-700 hover:text-primary"
                  onClick={closeMenu}
                >
                  <User size={20} />
                  <span>{t('nav.account')}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="flex items-center space-x-2 py-2 text-base font-medium text-gray-700 hover:text-primary"
                  onClick={closeMenu}
                >
                  <ShoppingCart size={20} />
                  <span>{t('nav.cart')}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;