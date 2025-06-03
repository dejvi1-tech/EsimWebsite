import { useState } from 'react';
import { Globe, ChevronRight, Check, MapPin, Signal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { plans } from '../../data/plans';

interface CountryFlagCardProps {
  countryName: string;
  countryCode: string;
  countryImage: string;
  planCount: number;
  lowestPrice: number;
}

const CountryFlagCard = ({ 
  countryName, 
  countryCode, 
  countryImage,
  planCount, 
  lowestPrice 
}: CountryFlagCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const countryPlans = plans.filter(plan => 
    plan.coverage.includes(countryName) || plan.country === countryName
  ).slice(0, 3);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48">
        {/* Background Image */}
        <img
          src={countryImage}
          alt={`${countryName} landscape`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60">
          <div className="absolute bottom-0 left-0 p-4">
            <div className="mb-2 flex items-center space-x-2">
              <img
                src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
                alt={`${countryName} flag`}
                className="h-6 w-6 rounded-sm object-cover shadow-sm"
              />
              <h3 className="text-xl font-bold text-white">{countryName}</h3>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <div className="flex items-center space-x-1">
                <Signal size={14} />
                <span className="text-sm">4G/5G</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe size={14} />
                <span className="text-sm">{planCount} plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin size={18} className="text-primary" />
            <span className="text-sm text-gray-600">Nationwide Coverage</span>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Starting from</div>
            <div className="text-lg font-bold text-primary">${lowestPrice}</div>
          </div>
        </div>
        
        {!isExpanded ? (
          <Button 
            variant="secondary" 
            fullWidth
            onClick={() => setIsExpanded(true)}
            className="group"
          >
            View Available Plans
            <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : (
          <div className="space-y-3">
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="mb-3 text-sm font-medium text-gray-700">Choose Your Plan:</div>
              <div className="space-y-2">
                {countryPlans.map((plan) => (
                  <button
                    key={plan.id}
                    className={`w-full rounded-lg border-2 bg-white p-3 text-left transition-all hover:shadow-md ${
                      selectedPlan === plan.id
                        ? 'border-primary bg-primary/5'
                        : 'border-transparent hover:border-gray-200'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{plan.dataAmount} for {plan.validity}</div>
                        <div className="text-sm text-gray-500">Perfect for {plan.validity.includes('30') ? 'long trips' : plan.validity.includes('14') ? 'medium trips' : 'short trips'}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-primary">${plan.price}</span>
                        {selectedPlan === plan.id && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                            <Check size={12} />
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <Link 
              to={selectedPlan ? `/checkout?plan=${selectedPlan}` : '#'}
              className="block"
              onClick={(e) => !selectedPlan && e.preventDefault()}
            >
              <Button 
                variant="primary" 
                fullWidth
                className="group"
                disabled={!selectedPlan}
              >
                Get This Plan
                <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <button
              className="w-full text-center text-sm text-gray-500 hover:text-primary"
              onClick={() => {
                setIsExpanded(false);
                setSelectedPlan(null);
              }}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryFlagCard;