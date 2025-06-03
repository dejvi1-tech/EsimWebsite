import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { plans } from '../../data/plans';
import PlanCard from '../plans/PlanCard';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const PopularPlans = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBuyNow = (planId: string) => {
    navigate(`/checkout?plan=${planId}&step=payment`);
  };

  // Show first 4 plans
  const displayedPlans = plans.slice(0, 4);

  return (
    <section className="bg-secondary py-16">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Planet eSIM të Disponueshme</h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Zgjidhni nga gama jonë e gjerë e planeve të të dhënave të përshtatura për nevojat tuaja të udhëtimit
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {displayedPlans.map((plan) => (
            <div 
              key={plan.id}
              className="rounded-xl bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={`https://flagcdn.com/${plan.countryCode.toLowerCase()}.svg`}
                    alt={plan.country}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <div className="text-sm font-medium">{plan.country}</div>
                </div>
                {plan.popular && (
                  <div className="rounded-full bg-pink-500 px-2 py-0.5 text-xs font-medium text-white">
                    Popullarizuar
                  </div>
                )}
              </div>

              <div className="mb-4">
                <div className="text-2xl font-bold text-primary">€{plan.price}</div>
                <div className="text-sm text-gray-500">një herë</div>
              </div>

              <div className="mb-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">{plan.dataAmount}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  I vlefshëm për {plan.validity}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  {plan.coverage.length} shtete të mbuluara
                </div>
              </div>

              <button
                onClick={() => handleBuyNow(plan.id)}
                className="w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Bli Tani
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/plans">
            <Button 
              variant="secondary" 
              size="lg" 
              className="group"
            >
              Shiko të Gjitha Planet
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularPlans;