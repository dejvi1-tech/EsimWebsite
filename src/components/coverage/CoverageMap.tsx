import { useState } from 'react';
import { plans } from '../../data/plans';
import PlanCard from '../plans/PlanCard';

const CoverageMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const getPlansForRegion = (region: string) => {
    return plans.filter(plan => 
      plan.coverage.includes(region) || 
      plan.country === region
    );
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-soft">
      <h2 className="mb-6 text-2xl font-bold">Coverage Map</h2>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Map Container */}
        <div className="relative h-[400px] overflow-hidden rounded-xl bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500">Interactive map coming soon...</p>
          </div>
          
          {/* Placeholder for regions */}
          <div className="absolute inset-4 grid grid-cols-3 gap-2">
            {['Europe', 'Asia', 'North America', 'South America', 'Africa', 'Oceania'].map((region) => (
              <button
                key={region}
                className={`rounded-lg p-4 text-sm font-medium transition-all ${
                  selectedRegion === region
                    ? 'bg-primary text-white'
                    : hoveredRegion === region
                    ? 'bg-primary/10 text-primary'
                    : 'bg-white/80 text-gray-700 hover:bg-primary/5'
                }`}
                onClick={() => setSelectedRegion(region)}
                onMouseEnter={() => setHoveredRegion(region)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Display */}
        <div>
          {selectedRegion ? (
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Available Plans in {selectedRegion}
              </h3>
              <div className="space-y-4">
                {getPlansForRegion(selectedRegion).map((plan) => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-center">
              <div className="max-w-sm">
                <p className="text-lg font-medium">Select a region</p>
                <p className="mt-2 text-gray-600">
                  Click on any region in the map to see available eSIM plans
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoverageMap;