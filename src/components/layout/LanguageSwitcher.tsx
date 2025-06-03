import { Globe2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../utils/cn';

interface LanguageSwitcherProps {
  isTransparent?: boolean;
}

const LanguageSwitcher = ({ isTransparent }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <button
        className={cn(
          "flex items-center space-x-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
          isTransparent
            ? "bg-white/10 text-white hover:bg-white/20"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        )}
        onClick={() => setLanguage(language === 'en' ? 'sq' : 'en')}
      >
        <Globe2 size={16} className="mr-1" />
        <span>{language === 'en' ? 'EN' : 'SQ'}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;