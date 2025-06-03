import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wifi, Clock, Globe } from 'lucide-react';

const europeanPlans = [
  {
    id: 'plan-1gb',
    name: '1GB / 60 Ditë / Europë, SHBA, Ballkan - 75 Shtete / Data Only',
    data: '1GB',
    validity: '60 Ditë',
    price: 2.90,
    coverage: 'Europë, SHBA, Ballkan'
  },
  {
    id: 'plan-3gb',
    name: '3GB / 60 Ditë / Europë, SHBA, Ballkan - 75 Shtete / Data Only',
    data: '3GB',
    validity: '60 Ditë',
    price: 6.99,
    coverage: 'Europë, SHBA, Ballkan'
  },
  {
    id: 'plan-5gb',
    name: '5GB + 1GB Falas / 60 Ditë / Europë, SHBA, Ballkan - 75 Shtete / Data Only',
    data: '5GB + 1GB Falas',
    validity: '60 Ditë',
    price: 9.99,
    coverage: 'Europë, SHBA, Ballkan'
  },
  {
    id: 'plan-10gb',
    name: '10GB + 2GB Falas / 60 Ditë / Europë, SHBA, Ballkan - 75 Shtete / Data Only',
    data: '10GB + 2GB Falas',
    validity: '60 Ditë',
    price: 14.99,
    coverage: 'Europë, SHBA, Ballkan'
  },
  {
    id: 'plan-10gb-offer',
    name: 'OFERTË: 10GB + 5GB FALAS / 60 Ditë / Europë, SHBA, Shqipëri - 40 Shtete / Data Only',
    data: '10GB + 5GB Falas',
    validity: '60 Ditë',
    price: 14.99,
    coverage: 'Europë, SHBA, Shqipëri',
    isOffer: true
  },
  {
    id: 'plan-15gb',
    name: 'OFERTË: 15GB + 3GB FALAS / 30 Ditë / Europë, SHBA, Shqipëri - 40 Shtete / Data Only',
    data: '15GB + 3GB Falas',
    validity: '30 Ditë',
    price: 17.50,
    coverage: 'Europë, SHBA, Shqipëri',
    isOffer: true
  },
  {
    id: 'plan-20gb',
    name: '20GB / 60 Ditë / Europë, SHBA, Ballkan - 75 Shtete / Data Only',
    data: '20GB',
    validity: '60 Ditë',
    price: 24.99,
    coverage: 'Europë, SHBA, Ballkan'
  },
  {
    id: 'plan-30gb',
    name: '30GB / 30 Ditë / Europë, SHBA, Ballkan - 75 Shtete / Data Only',
    data: '30GB',
    validity: '30 Ditë',
    price: 29.99,
    coverage: 'Europë, SHBA, Ballkan'
  },
  {
    id: 'plan-35gb',
    name: '35GB EU, 50GB Angli - O2 SUPER (EU, Angli, Zvicër - 48 shtete) / 30 Ditë',
    data: '35GB EU, 50GB Angli',
    validity: '30 Ditë',
    price: 28.00,
    coverage: 'EU, Angli, Zvicër',
    special: true
  },
  {
    id: 'plan-50gb',
    name: '50GB / 30 Ditë / Europë, SHBA, Ballkan - 75 Shtete / Data Only',
    data: '50GB',
    validity: '30 Ditë',
    price: 35.90,
    coverage: 'Europë, SHBA, Ballkan'
  },
  {
    id: 'plan-unlimited-7',
    name: 'Pa Limit / 7 Ditë / Europë, SHBA, Shqipëri - 40 Shtete / Data Only',
    data: 'Pa Limit',
    validity: '7 Ditë',
    price: 23.00,
    coverage: 'Europë, SHBA, Shqipëri'
  },
  {
    id: 'plan-unlimited-15',
    name: 'Pa Limit / 15 Ditë / Europë, SHBA, Shqipëri - 40 Shtete / Data Only',
    data: 'Pa Limit',
    validity: '15 Ditë',
    price: 35.00,
    coverage: 'Europë, SHBA, Shqipëri'
  },
  {
    id: 'plan-unlimited-30',
    name: 'Pa Limit / 30 Ditë / Europë, SHBA, Shqipëri - 40 Shtete / Data Only',
    data: 'Pa Limit',
    validity: '30 Ditë',
    price: 59.99,
    coverage: 'Europë, SHBA, Shqipëri'
  }
];

const BrowsePlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleContinue = () => {
    if (selectedPlan) {
      navigate(`/checkout?plan=${selectedPlan}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-12">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center space-x-3">
            <img
              src="https://flagcdn.com/eu.svg"
              alt="Europe"
              className="h-8 w-8 rounded-full"
            />
            <h2 className="text-xl font-semibold">European eSIM Plans</h2>
          </div>

          <div className="space-y-4">
            {europeanPlans.map((plan) => (
              <label
                key={plan.id}
                className={`relative flex cursor-pointer items-center rounded-lg border-2 p-4 transition-all hover:border-primary/50 ${
                  selectedPlan === plan.id ? 'border-primary bg-primary/5' : 'border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  checked={selectedPlan === plan.id}
                  onChange={() => handlePlanSelect(plan.id)}
                  className="h-4 w-4 text-primary"
                />
                
                <div className="ml-4 flex flex-1 items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{plan.data}</span>
                      {plan.isOffer && (
                        <span className="rounded-full bg-pink-500 px-2 py-0.5 text-xs font-medium text-white">
                          Popullarizuar
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">{plan.name}</div>
                    
                    <div className="mt-2 grid grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Wifi size={16} className="text-primary" />
                        <span>{plan.data}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} className="text-primary" />
                        <span>{plan.validity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Globe size={16} className="text-primary" />
                        <span>{plan.coverage}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-4 text-right">
                    <div className="text-lg font-bold text-primary">€{plan.price.toFixed(2)}</div>
                    <div className="text-sm text-gray-500">one-time</div>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleContinue}
              disabled={!selectedPlan}
              className={`rounded-lg px-6 py-2 text-white transition-colors ${
                selectedPlan
                  ? 'bg-primary hover:bg-primary-dark'
                  : 'cursor-not-allowed bg-gray-300'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePlansPage;