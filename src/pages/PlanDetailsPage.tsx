import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getPlanById } from '../data/plans';
import Button from '../components/ui/Button';
import { 
  Globe, Clock, Zap, Check, AlertCircle, ChevronRight, 
  ShoppingCart, Download, Smartphone, HelpCircle 
} from 'lucide-react';

const PlanDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const plan = getPlanById(id || '');
  const [activeTab, setActiveTab] = useState('details');

  if (!plan) {
    return (
      <div className="container-custom mx-auto mt-32 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">Plan Not Found</h2>
        <p className="mb-8 text-gray-600">The plan you're looking for doesn't exist or has been removed.</p>
        <Link to="/plans">
          <Button variant="primary">Browse All Plans</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // In a real app, this would add the plan to cart in state/context
    navigate('/checkout');
  };

  return (
    <div className="pt-20">
      {/* Hero Section with Plan Image */}
      <section className="relative h-64 md:h-80 lg:h-96">
        <div className="absolute inset-0">
          <img 
            src={plan.image} 
            alt={plan.country} 
            className="h-full w-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="container-custom relative z-10 flex h-full flex-col justify-end pb-8">
          <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white w-fit mb-3">
            {plan.country}
          </div>
          <h1 className="text-3xl font-bold text-white md:text-4xl">{plan.name}</h1>
          <p className="text-lg text-white/90">{plan.provider}</p>
        </div>
      </section>

      {/* Plan Details */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Left Column - Plan Information */}
            <div className="md:col-span-2">
              {/* Tabs */}
              <div className="mb-8 border-b border-gray-200">
                <div className="flex space-x-8">
                  <button
                    className={`border-b-2 pb-4 text-sm font-medium ${
                      activeTab === 'details'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('details')}
                  >
                    Plan Details
                  </button>
                  <button
                    className={`border-b-2 pb-4 text-sm font-medium ${
                      activeTab === 'coverage'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('coverage')}
                  >
                    Coverage
                  </button>
                  <button
                    className={`border-b-2 pb-4 text-sm font-medium ${
                      activeTab === 'faq'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('faq')}
                  >
                    FAQ
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'details' && (
                <div className="space-y-8">
                  <div className="rounded-xl bg-white p-6 shadow-soft">
                    <h2 className="mb-4 text-xl font-semibold">Plan Information</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="flex items-start space-x-3">
                        <Globe className="mt-1 text-primary" size={20} />
                        <div>
                          <h3 className="font-medium">Data Amount</h3>
                          <p>{plan.dataAmount}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="mt-1 text-primary" size={20} />
                        <div>
                          <h3 className="font-medium">Validity</h3>
                          <p>{plan.validity}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Zap className="mt-1 text-primary" size={20} />
                        <div>
                          <h3 className="font-medium">Network Speed</h3>
                          <p>{plan.speedCap || '4G/5G where available'}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="mt-1 text-primary" size={20} />
                        <div>
                          <h3 className="font-medium">Important Notes</h3>
                          <p>Activate within 30 days of purchase</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-soft">
                    <h2 className="mb-4 text-xl font-semibold">Features</h2>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="mt-1 text-success" size={18} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-soft">
                    <h2 className="mb-4 text-xl font-semibold">How to Activate</h2>
                    <ol className="space-y-6">
                      <li className="flex space-x-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          1
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">Purchase Your eSIM</h3>
                          <p className="text-gray-600">
                            Complete your purchase and payment for this eSIM plan.
                          </p>
                        </div>
                      </li>
                      <li className="flex space-x-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          2
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">Receive QR Code</h3>
                          <p className="text-gray-600">
                            You'll receive a QR code via email and in your account dashboard.
                          </p>
                        </div>
                      </li>
                      <li className="flex space-x-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          3
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">Scan & Install</h3>
                          <p className="text-gray-600">
                            Go to your phone settings, select "Add eSIM" or "Add Data Plan" and scan the QR code.
                          </p>
                        </div>
                      </li>
                      <li className="flex space-x-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          4
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">Activate & Connect</h3>
                          <p className="text-gray-600">
                            Turn on data roaming and select your new eSIM as the data source.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              )}

              {activeTab === 'coverage' && (
                <div className="space-y-8">
                  <div className="rounded-xl bg-white p-6 shadow-soft">
                    <h2 className="mb-4 text-xl font-semibold">Coverage Areas</h2>
                    <p className="mb-6 text-gray-600">
                      This plan provides coverage in the following areas:
                    </p>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {plan.coverage.map((area, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Check className="text-success" size={18} />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-white p-6 shadow-soft">
                    <h2 className="mb-4 text-xl font-semibold">Network Provider</h2>
                    <p className="text-gray-600">
                      This eSIM connects to {plan.provider}, ensuring reliable coverage across the specified regions.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="space-y-6">
                  <div className="rounded-xl bg-white p-6 shadow-soft">
                    <h2 className="mb-4 text-xl font-semibold">Frequently Asked Questions</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-2 flex items-center font-medium">
                          <HelpCircle size={18} className="mr-2 text-primary" />
                          What devices are compatible with this eSIM?
                        </h3>
                        <p className="pl-6 text-gray-600">
                          Most newer smartphones support eSIM technology, including iPhone XS and newer, Google Pixel 3 and newer, and select Samsung models. You can check our compatibility guide or your device manufacturer's website to confirm if your device supports eSIM.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="mb-2 flex items-center font-medium">
                          <HelpCircle size={18} className="mr-2 text-primary" />
                          Can I use this eSIM with my current phone number?
                        </h3>
                        <p className="pl-6 text-gray-600">
                          This eSIM provides data connectivity only. Your existing phone number will still work for calls and SMS through your primary SIM card. Modern smartphones support Dual SIM Dual Standby (DSDS), allowing you to use both your physical SIM and eSIM simultaneously.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="mb-2 flex items-center font-medium">
                          <HelpCircle size={18} className="mr-2 text-primary" />
                          How long does it take to activate the eSIM?
                        </h3>
                        <p className="pl-6 text-gray-600">
                          Activation is instant. Once you complete your purchase, you'll receive a QR code that you can scan to install the eSIM on your device. The entire process typically takes less than 5 minutes.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="mb-2 flex items-center font-medium">
                          <HelpCircle size={18} className="mr-2 text-primary" />
                          Can I share my eSIM data with other devices?
                        </h3>
                        <p className="pl-6 text-gray-600">
                          Yes, you can use your phone's hotspot feature to share the eSIM data connection with other devices, such as laptops or tablets. Please note that this will consume your data allowance faster.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="mb-2 flex items-center font-medium">
                          <HelpCircle size={18} className="mr-2 text-primary" />
                          What happens if I use all my data before the validity period ends?
                        </h3>
                        <p className="pl-6 text-gray-600">
                          If you use all your allocated data before the validity period ends, you can purchase a new plan or a data top-up from your account dashboard. There are no automatic charges or renewals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Purchase Box */}
            <div className="md:col-span-1">
              <div className="sticky top-32 rounded-xl bg-white p-6 shadow-soft">
                <div className="mb-6 border-b border-gray-100 pb-6">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    ${plan.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {plan.currency} • One-time payment
                  </div>
                </div>
                
                <div className="mb-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data:</span>
                    <span className="font-semibold">{plan.dataAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Validity:</span>
                    <span className="font-semibold">{plan.validity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coverage:</span>
                    <span className="font-semibold">{plan.country}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    variant="primary" 
                    fullWidth 
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    fullWidth
                    onClick={() => setActiveTab('coverage')}
                  >
                    <Globe size={18} className="mr-2" />
                    View Coverage
                  </Button>
                </div>
                
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Download size={16} className="mr-2 text-primary" />
                    Instant digital delivery
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Smartphone size={16} className="mr-2 text-primary" />
                    Works with all eSIM compatible devices
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Check size={16} className="mr-2 text-success" />
                    30-day money-back guarantee
                  </div>
                </div>
                
                <div className="mt-6 rounded-lg bg-secondary-light p-4 text-sm">
                  <p className="font-medium">Need help choosing a plan?</p>
                  <p className="mt-1 text-gray-600">
                    Our experts can help you find the perfect eSIM for your trip.
                  </p>
                  <a 
                    href="#"
                    className="mt-2 flex items-center text-primary hover:underline"
                  >
                    Contact Support
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanDetailsPage;