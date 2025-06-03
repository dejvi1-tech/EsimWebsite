import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getPlanById } from '../data/plans';
import Button from '../components/ui/Button';
import { Check, CreditCard, AlertCircle, Globe, Clock, Signal, ChevronRight, Shield, X, Tag } from 'lucide-react';
import CountryCoverage from '../components/ui/CountryCoverage';

// Mock coupon codes
const validCoupons = {
  'WELCOME10': { discount: 0.10, description: '10% off your first purchase' },
  'SUMMER25': { discount: 0.25, description: '25% off summer special' },
  'TRAVEL15': { discount: 0.15, description: '15% off for travelers' }
};

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get('plan');
  const plan = planId ? getPlanById(planId) : null;

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
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
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
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 2000);
  };

  if (!plan) {
    return (
      <div className="container-custom mx-auto mt-32 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">No Plan Selected</h2>
        <p className="mb-8 text-gray-600">Please select an eSIM plan to continue with checkout.</p>
        <Link to="/plans">
          <Button variant="primary">Browse Plans</Button>
        </Link>
      </div>
    );
  }

  const subtotal = plan.price;
  const discount = appliedCoupon ? subtotal * validCoupons[appliedCoupon as keyof typeof validCoupons].discount : 0;
  const tax = (subtotal - discount) * 0.05; // 5% tax after discount
  const total = subtotal - discount + tax;

  if (orderComplete) {
    return (
      <div className="pt-20">
        <div className="container-custom py-12">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl bg-white p-8 text-center shadow-soft">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
                <Check size={30} className="text-success" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Order Complete!</h2>
              <p className="mx-auto mb-6 max-w-md text-gray-600">
                Thank you for your purchase! Your eSIM has been successfully ordered and activation instructions have been sent to your email.
              </p>
              
              <div className="mb-8 overflow-hidden rounded-xl bg-secondary-light">
                <div className="border-b border-gray-200 bg-white p-6">
                  <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
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
                  <div className="mb-4 text-lg font-semibold">Your eSIM QR Code</div>
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
                    Scan this QR code with your phone to install the eSIM
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-success/10 p-4 text-success">
                  <div className="flex items-center space-x-2">
                    <Check size={20} />
                    <span className="font-medium">Order confirmation sent to {formData.email}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Link to="/plans">
                    <Button variant="primary" fullWidth>
                      Browse More Plans
                    </Button>
                  </Link>
                  <Link to="/account">
                    <Button variant="secondary" fullWidth>
                      Go to My Account
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
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Order Summary */}
          <div className="lg:col-span-1 lg:order-2">
            <div className="sticky top-32 space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-soft">
                <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>
                
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
                      <span>{plan.validity} validity</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Globe size={16} className="text-gray-400" />
                      <span>{plan.coverage.length} countries covered</span>
                    </div>
                  </div>
                </div>

                {/* Add CountryCoverage component here */}
                <div className="mb-6 border-t border-gray-100 pt-4">
                  <CountryCoverage title="Coverage Details" />
                </div>

                {/* Coupon Code Section */}
                <div className="mb-6 border-t border-gray-100 pt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Tag size={16} className="text-primary" />
                    <span className="text-sm font-medium">Have a coupon code?</span>
                  </div>
                  
                  {!appliedCoupon ? (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        placeholder="Enter code"
                        className="flex-1 rounded-lg border border-gray-300 p-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleApplyCoupon}
                        disabled={!couponCode}
                      >
                        Apply
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
                    <span className="text-gray-600">Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-success">Discount</span>
                      <span className="text-success">-€{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>€{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-100 pt-3 font-semibold">
                    <span>Total</span>
                    <span className="text-lg text-primary">€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl bg-white p-6 shadow-soft">
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-success" />
                  <h3 className="font-medium">Secure Checkout</h3>
                </div>
                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Check size={16} className="text-success" />
                    <span>Instant digital delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={16} className="text-success" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={16} className="text-success" />
                    <span>24/7 customer support</span>
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
                      <div className="text-sm font-medium">Contact Details</div>
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
                      <div className="text-sm font-medium">Payment</div>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 'details' ? (
                  <>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName\" className=\"mb-1 block text-sm font-medium text-gray-700">
                          First Name
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
                          Last Name
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
                        Email Address
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
                        We'll send the eSIM activation details to this email
                      </p>
                    </div>

                    <div className="rounded-lg bg-blue-50 p-4">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="mt-0.5 text-primary" size={20} />
                        <div className="flex-1">
                          <p className="font-medium text-primary">Important Information</p>
                          <p className="mt-1 text-sm text-gray-600">
                            Make sure to provide a valid email address. Your eSIM QR code and activation instructions will be sent to this email immediately after purchase.
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
                      Continue to Payment
                      <ChevronRight size={18} className="ml-2" />
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="pt-4">
                      <div className="mb-4 flex items-center">
                        <CreditCard size={20} className="mr-2 text-primary" />
                        <h3 className="font-semibold">Payment Details</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label htmlFor="cardName" className="mb-1 block text-sm font-medium text-gray-700">
                            Name on Card
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="John Doe"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardNumber" className="mb-1 block text-sm font-medium text-gray-700">
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="4242 4242 4242 4242"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="cardExpiry" className="mb-1 block text-sm font-medium text-gray-700">
                              Expiration Date
                            </label>
                            <input
                              type="text"
                              id="cardExpiry"
                              name="cardExpiry"
                              className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="MM/YY"
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="cardCvc" className="mb-1 block text-sm font-medium text-gray-700">
                              CVC
                            </label>
                            <input
                              type="text"
                              id="cardCvc"
                              name="cardCvc"
                              className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="123"
                              value={formData.cardCvc}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        className="mt-1 rounded border-gray-300"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                        I agree to the{' '}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    
                    <div className="space-y-4">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        fullWidth 
                        size="lg"
                        isLoading={isProcessing}
                      >
                        {isProcessing ? 'Processing...' : 'Complete Purchase'}
                      </Button>
                      
                      <button
                        type="button"
                        className="w-full text-center text-sm text-gray-600 hover:text-primary"
                        onClick={() => setStep('details')}
                      >
                        Back to Contact Details
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;