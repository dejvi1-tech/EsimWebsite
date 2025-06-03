import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCheckoutSession } from '../../lib/stripe';
import Button from '../ui/Button';
import { Plan } from '../../data/plans';

interface StripeCheckoutProps {
  plan: Plan;
}

const StripeCheckout = ({ plan }: StripeCheckoutProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      await createCheckoutSession(plan.id);
    } catch (error) {
      console.error('Checkout error:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-soft">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Secure Payment</h3>
        <p className="text-sm text-gray-600">
          Your payment will be processed securely through Stripe
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Plan:</span>
          <span className="font-medium">{plan.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Amount:</span>
          <span className="font-medium">€{plan.price}</span>
        </div>
      </div>

      <Button
        variant="primary"
        fullWidth
        isLoading={isLoading}
        onClick={handleCheckout}
      >
        Pay €{plan.price}
      </Button>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          By proceeding with the payment, you agree to our terms and conditions
        </p>
      </div>
    </div>
  );
};

export default StripeCheckout;