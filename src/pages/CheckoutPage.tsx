import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getPlanById } from '../data/plans';
import Button from '../components/ui/Button';
import DirectPayment from '../components/checkout/DirectPayment';
import { Check, CreditCard, AlertCircle, Globe, Clock, Signal, ChevronRight, Shield, X, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Mock coupon codes
const validCoupons = {
  'WELCOME10': { discount: 0.10, description: '10% off your first purchase' },
  'SUMMER25': { discount: 0.25, description: '25% summer special' },
  'TRAVEL15': { discount: 0.15, description: '15% off for travelers' }
};

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get('plan');
  const plan = planId ? getPlanById(planId) : null;
  const { t } = useLanguage();

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [step, setStep] = useState<'details' | 'payment'>('details');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    agreeToTerms: false
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleApplyCoupon = () => {
    setCouponError(null);
    const coupon = validCoupons[couponCode as keyof typeof validCoupons];
    
    if (!coupon) {
      setCouponError('Invalid coupon code');
      return;
    }

    setAppliedCoupon(couponCode);
    setCouponCode('');
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      setStep('payment');
      return;
    }
  };

  const handlePaymentSuccess = () => {
    setOrderComplete(true);
  };

  if (!plan) {
    return (
      <div className="container-custom mx-auto mt-32 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">{t('checkout.noPlan')}</h2>
        <p className="mb-8 text-gray-600">{t('checkout.selectPlan')}</p>
        <Link to="/plans">
          <Button variant="primary">{t('checkout.browsePlans')}</Button>
        </Link>
      </div>
    );
  }

  const subtotal = plan.price;
  const discount = appliedCoupon ? subtotal * validCoupons[appliedCoupon as keyof typeof validCoupons].discount : 0;
  const total = subtotal - discount;

  if (orderComplete) {
    return (
      <div className="pt-20">
        <div className="container-custom py-12">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl bg-white p-8 text-center shadow-soft">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
                <Check size={30} className="text-success" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">{t('checkout.orderComplete')}</h2>
              <p className="mx-auto mb-6 max-w-md text-gray-600">
                {t('checkout.orderCompleteDesc')}
              </p>
              
              <div className="mb-8 overflow-hidden rounded-xl bg-secondary-light">
                <div className="border-b border-gray-200 bg-white p-6">
                  <h3 className="mb-4 text-lg font-semibold">{t('checkout.summary')}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{plan.name}</div>
                      <div className="text-sm text-gray-600">
                        {plan.dataAmount} • {plan.validity}
                      </div>
                    </div>
                    <div className="font-medium">€{plan.price}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4 text-lg font-semibold">{t('checkout.qrCode')}</div>
                  <div className="mx-auto h-48 w-48 bg-white p-4">
                    <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-1">
                      {Array.from({ length: 49 }).map((_, i) => (
                        <div
                          key={i}
                          className={`${
                            Math.random() > 0.7 ? 'bg-black' : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    {t('checkout.scanQrCode')}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-success/10 p-4 text-success">
                  <div className="flex items-center space-x-2">
                    <Check size={20} />
                    <span className="font-medium">
                      {t('checkout.confirmationSent')} {formData.email}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Link to="/plans">
                    <Button variant="primary" fullWidth>
                      {t('checkout.browsePlans')}
                    </Button>
                  </Link>
                  <Link to="/account">
                    <Button variant="secondary" fullWidth>
                      {t('checkout.viewAccount')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{t('checkout.title')}</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Order Summary */}
          <div className="lg:col-span-1 lg:order-2">
            <div className="sticky top-32 space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-soft">
                <h2 className="mb-6 text-xl font-semibold">{t('checkout.summary')}</h2>
                
                <div className="mb-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://flagcdn.com/${plan.countryCode.toLowerCase()}.svg`}
                      alt={`${plan.country} flag`}
                      className="h-8 w-8 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{plan.name}</div>
                      <div className="text-sm text-gray-600">{plan.country}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Signal size={16} className="text-gray-400" />
                      <span>{plan.dataAmount}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock size={16} className="text-gray-400" />
                      <span>{plan.validity}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Globe size={16} className="text-gray-400" />
                      <span>{plan.coverage.length} countries covered</span>
                    </div>
                  </div>
                </div>

                {/* Coupon Code Section */}
                <div className="mb-6 border-t border-gray-100 pt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Tag size={16} className="text-primary" />
                    <span className="text-sm font-medium">{t('checkout.haveCoupon')}</span>
                  </div>
                  
                  {!appliedCoupon ? (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        placeholder={t('checkout.enterCode')}
                        className="flex-1 rounded-lg border border-gray-300 p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleApplyCoupon}
                        disabled={!couponCode}
                      >
                        {t('checkout.apply')}
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-success/10 rounded-lg p-2">
                      <div className="flex items-center space-x-2">
                        <Check size={16} className="text-success" />
                        <span className="text-sm text-success">
                          {validCoupons[appliedCoupon as keyof typeof validCoupons].description}
                        </span>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                  
                  {couponError && (
                    <p className="mt-2 text-sm text-red-600">{couponError}</p>
                  )}
                </div>
                
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('checkout.subtotal')}</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-success">{t('checkout.discount')}</span>
                      <span className="text-success">-€{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-gray-100 pt-3 font-semibold">
                    <span>{t('checkout.total')}</span>
                    <span className="text-lg text-primary">€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl bg-white p-6 shadow-soft">
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-success" />
                  <h3 className="font-medium">{t('checkout.secure')}</h3>
                </div>
                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Check size={16} className="text-success" />
                    <span>{t('checkout.instantDelivery')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={16} className="text-success" />
                    <span>{t('checkout.moneyBack')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={16} className="text-success" />
                    <span>{t('checkout.support')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Checkout Form */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="rounded-xl bg-white p-6 shadow-soft">
              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                      1
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium">{t('checkout.contactDetails')}</div>
                    </div>
                  </div>
                  <div className="h-px flex-1 bg-gray-200 mx-4"></div>
                  <div className="flex items-center">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      step === 'payment' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      2
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium">{t('checkout.payment')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {step === 'details' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                        {t('checkout.firstName')}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                        {t('checkout.lastName')}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                      {t('checkout.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      {t('checkout.emailNote')}
                    </p>
                  </div>

                  <div className="rounded-lg bg-blue-50 p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="mt-0.5 text-primary" size={20} />
                      <div className="flex-1">
                        <p className="font-medium text-primary">{t('checkout.important')}</p>
                        <p className="mt-1 text-sm text-gray-600">
                          {t('checkout.importantNote')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    fullWidth 
                    size="lg"
                  >
                    {t('checkout.continue')}
                    <ChevronRight size={18} className="ml-2" />
                  </Button>
                </form>
              ) : (
                <DirectPayment 
                  plan={plan}
                  onSuccess={handlePaymentSuccess}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;