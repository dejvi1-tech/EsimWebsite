import { useState, useMemo } from 'react';
import { plans } from '../data/plans';
import PlanCard from '../components/plans/PlanCard';
import CountryFlagCard from '../components/plans/CountryFlagCard';
import { Search, Globe, MapPin } from 'lucide-react';

const countries = {
  usa: [
    { name: 'United States', code: 'us', image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg' }
  ],
  europe: [
    { name: 'Europe', code: 'eu', image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg' },
    { name: 'Albania', code: 'al', image: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg' },
    // ... other European countries
  ]
};

// Popular searches
const popularSearches = [
  { name: 'Europe', code: 'eu', type: 'region' },
  { name: 'United States', code: 'us', type: 'country' },
  { name: 'United Kingdom', code: 'gb', type: 'country' },
  { name: 'Germany', code: 'de', type: 'country' },
  { name: 'France', code: 'fr', type: 'country' }
];

const BrowsePlansPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'plans' | 'countries'>('countries');
  const [selectedRegion, setSelectedRegion] = useState<'usa' | 'europe'>('europe');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const getCountries = () => countries[selectedRegion];

  const getCountryPlans = (countryName: string) => {
    const countryPlans = plans.filter(plan => 
      plan.coverage.includes(countryName) || plan.country === countryName || 
      (countryName === 'Europe' && plan.country === 'Europe')
    );
    return {
      count: countryPlans.length,
      lowestPrice: Math.min(...countryPlans.map(plan => plan.price))
    };
  };

  const filteredPlans = useMemo(() => {
    return plans.filter((plan) => {
      const matchesSearch = 
        plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.coverage.some(country => 
          country.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesRegion = 
        (selectedRegion === 'usa' && plan.country === 'United States') ||
        (selectedRegion === 'europe' && (plan.country === 'Europe' || plan.coverage.some(c => countries.europe.some(ec => ec.name === c))));
      
      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  const handleSearchSelect = (item: typeof popularSearches[0]) => {
    if (item.type === 'region' && item.name.toLowerCase() === 'europe') {
      setSelectedRegion('europe');
      setViewMode('plans');
    }
    setSearchTerm(item.name);
    setShowSearchResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark py-16 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-white/10"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Find Your Perfect eSIM Plan
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Stay connected worldwide with our reliable eSIM plans. Choose from multiple carriers and enjoy seamless connectivity.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search size={20} className="text-white/70" />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-full bg-white/10 py-4 pl-12 pr-4 text-white placeholder-white/70 backdrop-blur-sm transition-all focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Search by country or plan name..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSearchResults(true);
                  }}
                  onFocus={() => setShowSearchResults(true)}
                />

                {/* Search Results Dropdown */}
                {showSearchResults && (
                  <div className="absolute left-0 right-0 mt-2 rounded-xl bg-white p-4 shadow-lg">
                    <div className="mb-4">
                      <h3 className="mb-3 text-center text-lg font-semibold text-gray-700">Popular Searches</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        {popularSearches.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleSearchSelect(item)}
                            className="flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                          >
                            <img
                              src={`https://flagcdn.com/${item.code}.svg`}
                              alt={item.name}
                              className="h-4 w-4 rounded-sm"
                            />
                            <span>{item.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-8">
                      <button
                        onClick={() => {
                          setViewMode('countries');
                          setShowSearchResults(false);
                        }}
                        className="flex items-center space-x-2 rounded-full bg-blue-50 px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-blue-100"
                      >
                        <Globe size={18} />
                        <span>Countries</span>
                      </button>
                      <button
                        onClick={() => {
                          setViewMode('plans');
                          setShowSearchResults(false);
                        }}
                        className="flex items-center space-x-2 rounded-full bg-blue-50 px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-blue-100"
                      >
                        <MapPin size={18} />
                        <span>Plans</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Region Toggle */}
      <section className="sticky top-20 z-30 border-b border-gray-200 bg-white py-4 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <button
                className={`group flex items-center space-x-2 transition-colors ${
                  selectedRegion === 'usa' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setSelectedRegion('usa')}
              >
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="USA"
                  className="h-5 w-5 rounded-sm object-cover"
                />
                <span className="font-medium">United States</span>
              </button>
              <button
                className={`group flex items-center space-x-2 transition-colors ${
                  selectedRegion === 'europe' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => {
                  setSelectedRegion('europe');
                  setViewMode('plans');
                }}
              >
                <img
                  src="https://flagcdn.com/w40/eu.png"
                  alt="Europe"
                  className="h-5 w-5 rounded-sm object-cover"
                />
                <span className="font-medium">Europe</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'countries'
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setViewMode('countries')}
              >
                <Globe size={18} />
                <span>Countries</span>
              </button>
              <button
                className={`flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'plans'
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
                onClick={() => setViewMode('plans')}
              >
                <MapPin size={18} />
                <span>Plans</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12">
        <div className="container-custom">
          {viewMode === 'countries' ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {getCountries()
                .filter(country => 
                  country.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((country) => {
                  const { count, lowestPrice } = getCountryPlans(country.name);
                  return (
                    <CountryFlagCard
                      key={country.code}
                      countryName={country.name}
                      countryCode={country.code}
                      countryImage={country.image}
                      planCount={count}
                      lowestPrice={lowestPrice}
                    />
                  );
                })}
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  Showing {filteredPlans.length} plans for {selectedRegion === 'usa' ? 'United States' : 'Europe'}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPlans.map((plan) => (
                  <PlanCard 
                    key={plan.id} 
                    plan={plan} 
                    featured={plan.popular}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrowsePlansPage;