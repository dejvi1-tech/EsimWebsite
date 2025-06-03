import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wifi, Clock, Globe } from 'lucide-react';
import CountryCoverage from '../components/ui/CountryCoverage';
import { useLanguage } from '../contexts/LanguageContext';
import { plans as europeanPlans } from '../data/plans';

const BrowsePlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    navigate(`/checkout?plan=${planId}&step=payment`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-custom py-12">
        {/* Coverage Information */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">{t('coverage.dataOnly')}</h2>
          <p className="mb-4 text-gray-600">
            {t('coverage.dataOnlyDesc')}
          </p>
          <CountryCoverage title={t('coverage.included')} />
        </div>

        {/* Plans */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center space-x-3">
            <img
              src="https://flagcdn.com/eu.svg"
              alt="Europe"
              className="h-8 w-8 rounded-full"
            />
            <h2 className="text-xl font-semibold">{t('plans.title')}</h2>
          </div>

          <div className="space-y-4">
            {europeanPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full text-left transition-all ${
                  selectedPlan === plan.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="relative flex cursor-pointer items-center rounded-lg border-2 p-4 transition-all hover:border-primary/50">
                  <div className="ml-4 flex flex-1 items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{plan.data}</span>
                        {plan.isOffer && (
                          <span className="rounded-full bg-pink-500 px-2 py-0.5 text-xs font-medium text-white">
                            {t('plans.popular')}
                          </span>
                        )}
                        {plan.special && (
                          <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-medium text-white">
                            {t('plans.special')}
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

                      {plan.features && (
                        <div className="mt-2 border-t border-gray-100 pt-2">
                          <ul className="grid grid-cols-1 gap-1">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600">
                                • {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-4 text-right">
                      <div className="text-lg font-bold text-primary">€{plan.price.toFixed(2)}</div>
                      <div className="text-sm text-gray-500">{t('plans.oneTime')}</div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePlansPage;