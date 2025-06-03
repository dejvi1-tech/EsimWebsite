import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Wifi, Clock, Globe, Check } from 'lucide-react';
import { europeanCountries, Country } from '../../data/countries';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

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

  // Sample plans for demonstration - in a real app, these would come from your plans database
  const countryPlans = [
    {
      id: 'basic',
      data: '3GB',
      price: 8.99,
      validity: '30 ditë',
      features: ['Instant activation', 'No physical SIM required', '24/7 customer support', 'Hotspot sharing enabled']
    },
    {
      id: 'standard',
      data: '6GB',
      price: 15.99,
      validity: '30 ditë',
      popular: true,
      features: ['Instant activation', 'No physical SIM required', '24/7 customer support', 'Hotspot sharing enabled']
    },
    {
      id: 'premium',
      data: '10GB',
      price: 24.99,
      validity: '30 ditë',
      features: ['Instant activation', 'No physical SIM required', '24/7 customer support', 'Hotspot sharing enabled']
    }
  ];

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

      {/* Selected Country Display and Plans */}
      <AnimatePresence>
        {selectedCountry && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 space-y-4"
          >
            {/* Country Info */}
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
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
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {countryPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative bg-white rounded-xl p-6 shadow-lg"
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popullarizuar
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.name[language]}
                      className="w-12 h-12 rounded-full border-4 border-blue-100"
                    />
                    <div>
                      <div className="text-gray-600">Data Plan</div>
                      <div className="text-2xl font-bold text-primary">{plan.data}</div>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-primary mb-1">
                    €{plan.price}
                  </div>
                  <div className="text-gray-500 mb-4">one-time</div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Wifi size={18} className="text-primary" />
                      <span>{plan.data} High-Speed Data</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={18} className="text-primary" />
                      <span>Valid for {plan.validity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe size={18} className="text-primary" />
                      <span>Coverage: {selectedCountry.name[language]}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        <Check size={16} className="text-success" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/checkout?plan=${plan.id}`}
                    className="block w-full py-3 text-center bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
                  >
                    Bli tani
                  </Link>
                </motion.div>
              ))}
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