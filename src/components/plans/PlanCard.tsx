import { useNavigate } from 'react-router-dom';
import { Globe, Clock, Signal } from 'lucide-react';
import { Plan } from '../../data/plans';
import { cn } from '../../utils/cn';

interface PlanCardProps {
  plan: Plan;
  featured?: boolean;
  onBuyNow?: () => void;
}

const PlanCard = ({ plan, featured = false, onBuyNow }: PlanCardProps) => {
  const navigate = useNavigate();
  
  const getCountryCode = (country: string): string => {
    switch (country) {
      case 'Europe':
        return 'eu';
      case 'United States':
        return 'us';
      case 'Asia':
        return 'kr'; // Using South Korea as representative
      default:
        return plan.countryCode.toLowerCase();
    }
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow();
    } else {
      navigate(`/checkout?plan=${plan.id}`);
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-soft">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={`https://flagcdn.com/${getCountryCode(plan.country)}.svg`}
            alt={`${plan.country} flag`}
            className="h-6 w-6 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold">{plan.name}</h3>
        </div>
        {featured && (
          <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
            Most Popular
          </div>
        )}
      </div>

      <div className="mb-6 flex items-end justify-between">
        <div className="text-3xl font-bold">€{plan.price}</div>
      </div>

      <div className="mb-6 space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Signal size={16} className="text-gray-400" />
          <span>{plan.dataAmount}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock size={16} className="text-gray-400" />
          <span>{plan.validity} validity</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Globe size={16} className="text-gray-400" />
          <span>{plan.coverage.length} countries covered</span>
        </div>
      </div>

      <button
        onClick={handleBuyNow}
        className={cn(
          "w-full rounded-full bg-primary px-6 py-3 text-center font-medium text-white transition-all hover:bg-primary-dark",
          featured && "bg-blue-600 hover:bg-blue-700"
        )}
      >
        Buy now
      </button>
    </div>
  );
};

export default PlanCard;