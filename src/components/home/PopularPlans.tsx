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
    <section className="bg-secondary py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('plans.title')}</h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            {t('plans.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {displayedPlans.map((plan) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              featured={plan.popular}
              onBuyNow={() => handleBuyNow(plan.id)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/plans">
            <Button 
              variant="secondary" 
              size="lg" 
              className="group"
            >
              {t('plans.viewAll')}
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularPlans;