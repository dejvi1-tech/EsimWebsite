import { useState, useMemo } from 'react';
import { plans } from '../data/plans';
import { Link, useNavigate } from 'react-router-dom';
import { Wifi, Clock, Globe, Check } from 'lucide-react';

const BrowsePlansPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'usa' | 'europe'>('europe');
  
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
        (selectedRegion === 'europe' && (plan.country === 'Europe' || plan.coverage.some(c => c === 'Albania')));
      
      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

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
            <p className="text-lg text-white/90">
              Stay connected worldwide with our reliable eSIM plans. Choose from multiple carriers and enjoy seamless connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Region Toggle */}
      <section className="sticky top-20 z-30 border-b border-gray-200 bg-white py-4 shadow-sm">
        <div className="container-custom">
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
              onClick={() => setSelectedRegion('europe')}
            >
              <img
                src="https://flagcdn.com/w40/eu.png"
                alt="Europe"
                className="h-5 w-5 rounded-sm object-cover"
              />
              <span className="font-medium">Europe</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popullarizuar
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={`https://flagcdn.com/${plan.countryCode.toLowerCase()}.svg`}
                    alt={plan.country}
                    className="w-12 h-12 rounded-full border-4 border-blue-100"
                  />
                  <div>
                    <div className="text-gray-600">Data Plan</div>
                    <div className="text-2xl font-bold text-primary">{plan.dataAmount}</div>
                  </div>
                </div>

                <div className="text-3xl font-bold text-primary mb-1">
                  €{plan.price}
                </div>
                <div className="text-gray-500 mb-4">one-time</div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Wifi size={18} className="text-primary" />
                    <span>{plan.dataAmount} High-Speed Data</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} className="text-primary" />
                    <span>Valid for {plan.validity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Globe size={18} className="text-primary" />
                    <span>Coverage: {plan.coverage.length} countries</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowsePlansPage;