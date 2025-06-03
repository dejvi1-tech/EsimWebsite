import { useState, useMemo } from 'react';
import { plans } from '../data/plans';
import { Link, useNavigate } from 'react-router-dom';
import { Wifi, Clock, Globe, Check } from 'lucide-react';

const BrowsePlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<'usa' | 'europe'>('europe');
  
  const filteredPlans = useMemo(() => {
    return plans.filter((plan) => {
      const matchesRegion = 
        (selectedRegion === 'usa' && plan.country === 'United States') ||
        (selectedRegion === 'europe' && (plan.country === 'Europe' || plan.coverage.some(c => c === 'Albania')));
      
      return matchesRegion;
    });
  }, [selectedRegion]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
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

      {/* Plans List */}
      <section className="py-12">
        <div className="container-custom">
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-xl font-semibold">Available Plans</h2>
            <div className="space-y-4">
              {filteredPlans.map((plan) => (
                <label
                  key={plan.id}
                  className={`relative flex cursor-pointer items-start rounded-lg border-2 p-4 transition-all hover:border-primary/50 ${
                    selectedPlan === plan.id ? 'border-primary bg-primary/5' : 'border-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="mt-1 h-4 w-4 text-primary"
                  />
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://flagcdn.com/${plan.countryCode.toLowerCase()}.svg`}
                          alt={plan.country}
                          className="h-6 w-6 rounded-full"
                        />
                        <div>
                          <div className="font-medium">{plan.dataAmount} / {plan.validity} / {plan.country}</div>
                          <div className="text-sm text-gray-500">Data Only</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">€{plan.price}</div>
                        <div className="text-sm text-gray-500">one-time</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Wifi size={16} className="text-primary" />
                        <span>{plan.dataAmount} Data</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} className="text-primary" />
                        <span>{plan.validity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Globe size={16} className="text-primary" />
                        <span>{plan.coverage.length} countries</span>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <Link
                to={selectedPlan ? `/checkout?plan=${selectedPlan}` : '#'}
                className={`rounded-lg px-6 py-2 text-white transition-colors ${
                  selectedPlan
                    ? 'bg-primary hover:bg-primary-dark'
                    : 'pointer-events-none bg-gray-300'
                }`}
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowsePlansPage;