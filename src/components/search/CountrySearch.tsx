import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { europeanCountries, Country } from '../../data/countries';
import { useLanguage } from '../../contexts/LanguageContext';

interface CountrySearchProps {
  onCountrySelect: (country: Country) => void;
  selectedCountry?: Country | null;
}

const CountrySearch = ({ onCountrySelect, selectedCountry }: CountrySearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const filteredCountries = useMemo(() => {
    if (!searchTerm) return europeanCountries;

    return europeanCountries.filter((country) =>
      country.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.name.en.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, language]);

  const handleCountrySelect = (country: Country) => {
    onCountrySelect(country);
    setSearchTerm(country.name[language]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-white/70" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search your destination..."
          className="w-full pl-12 pr-4 py-4 text-lg rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-white/70" />
        </div>
      </div>

      {/* Selected Country Display */}
      <AnimatePresence>
        {selectedCountry && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="flex items-center gap-3">
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name[language]}
                className="w-8 h-6 object-cover rounded"
              />
              <span className="font-semibold text-white">
                {selectedCountry.name[language]}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown Results */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg max-h-80 overflow-y-auto"
            >
              {filteredCountries.length > 0 ? (
                <div className="py-2">
                  {filteredCountries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => handleCountrySelect(country)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={country.flag}
                          alt={country.name[language]}
                          className="w-8 h-6 object-cover rounded"
                        />
                        <span className="font-medium text-gray-900">
                          {country.name[language]}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-4 px-4 text-center text-gray-500">
                  No countries found
                </div>
              )}
            </motion.div>
            {/* Overlay to close dropdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountrySearch;