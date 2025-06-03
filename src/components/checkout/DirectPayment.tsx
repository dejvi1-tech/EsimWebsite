import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Check } from 'lucide-react';
import Button from '../ui/Button';
import { Plan } from '../../data/plans';
import { useLanguage } from '../../contexts/LanguageContext';

interface DirectPaymentProps {
  plan: Plan;
  onSuccess: () => void;
}

const DirectPayment = ({ plan, onSuccess }: DirectPaymentProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real implementation, you would:
    // 1. Validate card details
    // 2. Send to your payment processor
    // 3. Handle the response

    setIsProcessing(false);
    onSuccess();
    navigate('/account');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Basic input formatting
    let formattedValue = value;
    if (name === 'number') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
    } else if (name === 'expiry') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .substr(0, 5);
    } else if (name === 'cvc') {
      formattedValue = value.replace(/\D/g, '').substr(0, 3);
    }

    setCardDetails(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-soft">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{t('checkout.secure')}</h3>
        <p className="text-sm text-gray-600">
          {t('checkout.secureDesc')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            {t('checkout.cardName')}
          </label>
          <input
            type="text"
            name="name"
            value={cardDetails.name}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            {t('checkout.cardNumber')}
          </label>
          <div className="relative">
            <input
              type="text"
              name="number"
              value={cardDetails.number}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="4242 4242 4242 4242"
              maxLength={19}
              required
            />
            <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              {t('checkout.cardExpiry')}
            </label>
            <input
              type="text"
              name="expiry"
              value={cardDetails.expiry}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="MM/YY"
              maxLength={5}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              {t('checkout.cardCvc')}
            </label>
            <input
              type="text"
              name="cvc"
              value={cardDetails.cvc}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="123"
              maxLength={3}
              required
            />
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">{t('checkout.total')}:</span>
            <span className="text-xl font-bold text-primary">€{plan.price}</span>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isProcessing}
          >
            {isProcessing ? t('checkout.processing') : t('checkout.pay')}
          </Button>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Check size={16} className="text-success" />
            <span>{t('checkout.securePayment')}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DirectPayment;