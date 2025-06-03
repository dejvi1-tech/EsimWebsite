import { useState } from 'react';
import { 
  User, CreditCard, ShoppingBag, Settings, LogOut, 
  Check, MapPin, Smartphone, ChevronRight 
} from 'lucide-react';
import Button from '../components/ui/Button';

// Mock user data
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
};

// Mock purchased eSIMs
const purchasedEsims = [
  {
    id: 'esim-001',
    planName: 'USA Traveler',
    country: 'United States',
    dataAmount: '5GB',
    purchaseDate: '2025-04-10',
    expiryDate: '2025-05-10',
    status: 'active',
    dataUsed: 1.2,
    qrCode: true
  },
  {
    id: 'esim-002',
    planName: 'Japan Connect',
    country: 'Japan',
    dataAmount: '8GB',
    purchaseDate: '2025-04-05',
    expiryDate: '2025-04-15',
    status: 'expired',
    dataUsed: 8,
    qrCode: true
  }
];

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('esims');

  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="rounded-xl bg-white p-6 shadow-soft">
              {/* User Profile Summary */}
              <div className="mb-6 flex items-center space-x-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <img 
                    src={userData.avatar} 
                    alt={userData.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{userData.name}</h3>
                  <p className="text-sm text-gray-600">{userData.email}</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <button
                  className={`flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                    activeTab === 'esims'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('esims')}
                >
                  <Smartphone size={18} />
                  <span>My eSIMs</span>
                </button>
                
                <button
                  className={`flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                    activeTab === 'orders'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('orders')}
                >
                  <ShoppingBag size={18} />
                  <span>Order History</span>
                </button>
                
                <button
                  className={`flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                    activeTab === 'payment'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('payment')}
                >
                  <CreditCard size={18} />
                  <span>Payment Methods</span>
                </button>
                
                <button
                  className={`flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                    activeTab === 'profile'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User size={18} />
                  <span>Account Settings</span>
                </button>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <LogOut size={18} />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="md:col-span-3">
            {activeTab === 'esims' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">My eSIMs</h2>
                
                {purchasedEsims.length > 0 ? (
                  <div className="space-y-4">
                    {purchasedEsims.map((esim) => (
                      <div 
                        key={esim.id} 
                        className="rounded-xl bg-white p-6 shadow-soft"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="text-xl font-semibold">{esim.planName}</h3>
                              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                                esim.status === 'active' 
                                  ? 'bg-success/10 text-success' 
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {esim.status === 'active' ? 'Active' : 'Expired'}
                              </span>
                            </div>
                            
                            <div className="mt-2 flex items-center text-sm text-gray-600">
                              <MapPin size={16} className="mr-1 text-primary" />
                              {esim.country}
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm text-gray-600">
                              Expires: {new Date(esim.expiryDate).toLocaleDateString()}
                            </div>
                            <div className="mt-1 text-sm font-medium">
                              {esim.dataAmount} Data Plan
                            </div>
                          </div>
                        </div>
                        
                        {/* Data Usage */}
                        <div className="mt-6">
                          <div className="flex items-center justify-between text-sm">
                            <span>Data Usage</span>
                            <span>
                              {esim.dataUsed} GB / {parseInt(esim.dataAmount)} GB
                            </span>
                          </div>
                          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                            <div 
                              className={`h-full rounded-full ${
                                esim.status === 'active' ? 'bg-primary' : 'bg-gray-400'
                              }`}
                              style={{ width: `${(esim.dataUsed / parseInt(esim.dataAmount)) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div className="mt-6 flex flex-wrap gap-3">
                          <Button 
                            variant="primary" 
                            size="sm"
                          >
                            View QR Code
                          </Button>
                          
                          {esim.status === 'active' ? (
                            <Button 
                              variant="secondary" 
                              size="sm"
                            >
                              Top Up Data
                            </Button>
                          ) : (
                            <Button 
                              variant="secondary" 
                              size="sm"
                            >
                              Buy Again
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl bg-white p-8 text-center shadow-soft">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                      <Smartphone size={24} className="text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">No eSIMs Yet</h3>
                    <p className="mb-6 text-gray-600">
                      You haven't purchased any eSIMs yet. Browse our plans to get started!
                    </p>
                    <Button variant="primary">Browse Plans</Button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Order History</h2>
                
                <div className="space-y-4">
                  {purchasedEsims.map((esim) => (
                    <div 
                      key={esim.id} 
                      className="rounded-xl bg-white p-6 shadow-soft"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Order #{esim.id}</div>
                          <div className="font-semibold">{esim.planName}</div>
                          <div className="mt-1 text-sm text-gray-600">
                            Purchased on {new Date(esim.purchaseDate).toLocaleDateString()}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-medium text-primary">$19.99</div>
                          <div className="mt-2">
                            <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                              Completed
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <Button 
                          variant="secondary" 
                          size="sm"
                        >
                          View Receipt
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Payment Methods</h2>
                
                <div className="rounded-xl bg-white p-6 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-16 items-center justify-center rounded-md bg-gray-100">
                        <span className="text-sm font-medium">VISA</span>
                      </div>
                      <div>
                        <div className="font-medium">•••• •••• •••• 4242</div>
                        <div className="text-sm text-gray-500">Expires 12/25</div>
                      </div>
                    </div>
                    <div>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                        <Check size={14} />
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button variant="secondary">
                  Add Payment Method
                </Button>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Account Settings</h2>
                
                <div className="rounded-xl bg-white p-6 shadow-soft">
                  <h3 className="mb-4 text-lg font-medium">Personal Information</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          defaultValue="John"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          defaultValue="Doe"
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
                        className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        defaultValue={userData.email}
                      />
                    </div>
                    
                    <div>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </div>
                
                <div className="rounded-xl bg-white p-6 shadow-soft">
                  <h3 className="mb-4 text-lg font-medium">Change Password</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="currentPassword" className="mb-1 block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="currentPassword"
                        className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="newPassword" className="mb-1 block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="newPassword"
                        className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <Button variant="primary" type="submit">
                        Update Password
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;