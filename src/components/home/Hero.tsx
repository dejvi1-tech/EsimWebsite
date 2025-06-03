import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { Country } from '../../data/countries';
import CountrySearch from '../search/CountrySearch.tsx';

const Hero = () => {
  const { t } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    // You can add additional logic here, like redirecting to plans page with country filter
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark pt-20 text-white">
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            {t('hero.subtitle')}
          </p>

          {/* Country Search */}
          <div className="mb-8">
            <CountrySearch 
              onCountrySelect={handleCountrySelect}
              selectedCountry={selectedCountry}
            />
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-center">
            <Link to="/plans">
              <Button 
                variant="accent" 
                size="lg" 
                className="group"
              >
                {t('hero.browsePlans')}
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/faq">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                {t('hero.howItWorks')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Device Mockup with enhanced 3D animations */}
      <div className="mt-12 flex justify-center pb-16 md:mt-0">
        <div className="relative perspective-1000">
          <div className="animate-float-3d rounded-3xl border-8 border-gray-800 bg-gray-800 shadow-2xl transition-transform duration-500 hover:scale-105">
            <div className="relative rounded-2xl bg-white overflow-hidden h-[280px] w-[140px] sm:h-[400px] sm:w-[200px]">
              <img 
                src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Phone with eSIM"
                className="h-full w-full object-cover transition-all duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-medium text-white sm:text-sm">Instant eSIM</span>
                <span className="text-lg font-bold text-white sm:text-2xl">Connect Now</span>
              </div>
            </div>
          </div>
          
          {/* QR Code with 3D hover effect */}
          <div className="absolute -right-16 top-1/4 hidden rotate-6 transform rounded-lg bg-white p-2 shadow-lg sm:block hover:rotate-0 transition-all duration-500 hover:scale-110">
            <div className="h-24 w-24 rounded bg-gray-900 p-1 transform hover:rotate-3 transition-transform">
              <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-1">
                <div className="col-span-1 row-span-1 bg-white"></div>
                <div className="col-span-2 row-span-1 bg-transparent"></div>
                <div className="col-span-1 row-span-1 bg-white"></div>
                <div className="col-span-1 row-span-2 bg-transparent"></div>
                <div className="col-span-2 row-span-2 bg-white"></div>
                <div className="col-span-1 row-span-2 bg-transparent"></div>
                <div className="col-span-1 row-span-1 bg-white"></div>
                <div className="col-span-2 row-span-1 bg-transparent"></div>
                <div className="col-span-1 row-span-1 bg-white"></div>
              </div>
            </div>
            <div className="mt-1 text-center text-xs font-medium text-gray-800">
              Scan to Activate
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements with 3D parallax effect */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary-light opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-primary-light opacity-20 animate-float-reverse"></div>
        <div className="absolute right-1/4 top-1/3 h-20 w-20 rounded-full bg-accent opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;