import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { plans } from '../../data/plans';

interface Country {
  code: string;
  name: string;
  coverage: 'full' | 'partial' | 'none';
}

const InteractiveMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);
  const navigate = useNavigate();

  const getCountryPlans = (countryName: string) => {
    return plans.filter(plan => 
      plan.coverage.includes(countryName) ||
      plan.country === countryName
    );
  };

  return (
    <div className="relative h-[600px] overflow-hidden rounded-xl bg-gray-100">
      <div className="absolute inset-0">
        {/* Map will be implemented using a mapping library */}
        <div className="flex h-full items-center justify-center">
          <p className="text-gray-500">Interactive coverage map coming soon...</p>
        </div>
      </div>

      {selectedCountry && (
        <div className="absolute bottom-4 right-4 w-80 rounded-xl bg-white p-4 shadow-lg">
          <h3 className="mb-2 text-lg font-semibold">{selectedCountry.name}</h3>
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <div className={`h-2 w-2 rounded-full ${
                selectedCountry.coverage === 'full' 
                  ? 'bg-success' 
                  : selectedCountry.coverage === 'partial'
                  ? 'bg-warning'
                  : 'bg-error'
              }`} />
              <span className="text-sm text-gray-600">
                {selectedCountry.coverage === 'full' 
                  ? 'Full Coverage'
                  : selectedCountry.coverage === 'partial'
                  ? 'Partial Coverage'
                  : 'No Coverage'
                }
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            {getCountryPlans(selectedCountry.name).map((plan) => (
              <button
                key={plan.id}
                className="w-full rounded-lg border border-gray-200 p-2 text-left hover:border-primary"
                onClick={() => navigate(`/checkout?plan=${plan.id}`)}
              >
                <div className="font-medium">{plan.name}</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{plan.dataAmount}</span>
                  <span className="font-medium text-primary">€{plan.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;