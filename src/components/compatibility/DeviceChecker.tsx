import { useState } from 'react';
import { Smartphone, Check, X, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

interface DeviceInfo {
  brand: string;
  models: {
    name: string;
    compatible: boolean;
    notes?: string;
  }[];
}

const deviceDatabase: DeviceInfo[] = [
  {
    brand: 'Apple',
    models: [
      { name: 'iPhone 15 Series', compatible: true },
      { name: 'iPhone 14 Series', compatible: true },
      { name: 'iPhone 13 Series', compatible: true },
      { name: 'iPhone 12 Series', compatible: true },
      { name: 'iPhone 11 Series', compatible: true },
      { name: 'iPhone XS/XR', compatible: true },
      { name: 'iPhone X', compatible: false, notes: 'eSIM not supported' }
    ]
  },
  {
    brand: 'Samsung',
    models: [
      { name: 'Galaxy S24 Series', compatible: true },
      { name: 'Galaxy S23 Series', compatible: true },
      { name: 'Galaxy S22 Series', compatible: true },
      { name: 'Galaxy S21 Series', compatible: true },
      { name: 'Galaxy Z Fold/Flip Series', compatible: true },
      { name: 'Galaxy S20', compatible: false, notes: 'Limited eSIM support' }
    ]
  },
  {
    brand: 'Google',
    models: [
      { name: 'Pixel 8 Series', compatible: true },
      { name: 'Pixel 7 Series', compatible: true },
      { name: 'Pixel 6 Series', compatible: true },
      { name: 'Pixel 5', compatible: true },
      { name: 'Pixel 4', compatible: true },
      { name: 'Pixel 3', compatible: false, notes: 'Limited eSIM support' }
    ]
  }
];

const DeviceChecker = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const handleCheck = () => {
    if (!selectedBrand || !selectedModel) return;
    
    const brand = deviceDatabase.find(b => b.brand === selectedBrand);
    const model = brand?.models.find(m => m.name === selectedModel);
    
    if (model?.compatible) {
      // Show success message
    } else {
      // Show incompatible message
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-soft">
      <div className="mb-8 flex items-center space-x-3">
        <div className="rounded-full bg-primary/10 p-3">
          <Smartphone size={24} className="text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Device Compatibility Checker</h2>
          <p className="text-gray-600">Check if your device supports eSIM technology</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Selection Area */}
        <div className="space-y-6">
          {/* Brand Selection */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Select Your Device Brand
            </label>
            <div className="grid grid-cols-3 gap-2">
              {deviceDatabase.map((brand) => (
                <button
                  key={brand.brand}
                  className={`rounded-lg border-2 p-4 text-center transition-all ${
                    selectedBrand === brand.brand
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => {
                    setSelectedBrand(brand.brand);
                    setSelectedModel(null);
                  }}
                >
                  {brand.brand}
                </button>
              ))}
            </div>
          </div>

          {/* Model Selection */}
          {selectedBrand && (
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Select Your Model
              </label>
              <div className="space-y-2">
                {deviceDatabase
                  .find(b => b.brand === selectedBrand)
                  ?.models.map((model) => (
                    <button
                      key={model.name}
                      className={`flex w-full items-center justify-between rounded-lg border-2 p-4 text-left transition-all ${
                        selectedModel === model.name
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedModel(model.name)}
                    >
                      <span>{model.name}</span>
                      {model.compatible ? (
                        <Check size={20} className="text-success" />
                      ) : (
                        <X size={20} className="text-error" />
                      )}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Result Area */}
        <div className="rounded-xl bg-gray-50 p-6">
          {selectedBrand && selectedModel ? (
            <div>
              {deviceDatabase
                .find(b => b.brand === selectedBrand)
                ?.models.find(m => m.name === selectedModel)?.compatible ? (
                <div>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
                    <Check size={32} className="text-success" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-success">
                    Good News! Your Device is Compatible
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Your {selectedBrand} {selectedModel} supports eSIM technology. You can proceed with purchasing and installing an eSIM plan.
                  </p>
                  <Button variant="primary" className="group">
                    Browse eSIM Plans
                    <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-error/20">
                    <X size={32} className="text-error" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-error">
                    Device Not Compatible
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Unfortunately, your {selectedBrand} {selectedModel} doesn't support eSIM technology.
                  </p>
                  <div className="rounded-lg bg-white p-4">
                    <h4 className="mb-2 font-medium">Alternative Options:</h4>
                    <ul className="ml-4 list-disc text-sm text-gray-600">
                      <li>Consider using a physical SIM card</li>
                      <li>Check our partner stores for compatible devices</li>
                      <li>Contact support for more assistance</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-lg font-medium">Select your device</p>
              <p className="mt-2 text-gray-600">
                Choose your device brand and model to check eSIM compatibility
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceChecker;