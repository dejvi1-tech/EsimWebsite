import { Smartphone, QrCode, Wifi } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-primary">does VIA eSIM work?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          {/* Step 1 */}
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 perspective-1000">
                <div className="relative w-64 h-[500px] animate-float-3d">
                  <div className="absolute inset-0 rounded-[3rem] border-8 border-gray-900 bg-gray-900 shadow-xl">
                    <div className="relative h-full w-full rounded-[2.5rem] bg-white overflow-hidden">
                      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-6">
                        <div className="w-full space-y-4">
                          <div className="h-20 w-full rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                            5GB
                            <div className="text-xs ml-2">Valid for 60 Days</div>
                          </div>
                          <div className="h-20 w-full rounded-xl bg-primary/10 flex items-center justify-center text-primary font-medium">
                            3GB
                            <div className="text-xs ml-2">Valid for 60 Days</div>
                          </div>
                          <div className="h-20 w-full rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                            1GB
                            <div className="text-xs ml-2">Valid for 7 Days</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose a plan</h3>
              <p className="text-gray-600">Buy the plan that suits you.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 perspective-1000">
                <div className="relative w-64 h-[500px] animate-float-3d">
                  <div className="absolute inset-0 rounded-[3rem] border-8 border-gray-900 bg-gray-900 shadow-xl">
                    <div className="relative h-full w-full rounded-[2.5rem] bg-white overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full aspect-square bg-primary/5 rounded-3xl p-8">
                          <div className="w-full h-full bg-white rounded-2xl shadow-sm grid grid-cols-7 grid-rows-7 gap-2 p-4">
                            {Array.from({ length: 49 }).map((_, i) => (
                              <div
                                key={i}
                                className={`${
                                  Math.random() > 0.7 ? 'bg-primary' : 'bg-transparent'
                                } rounded-sm transition-colors duration-700`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scan QR code or install automatically from the app</h3>
              <p className="text-gray-600">QR Code will be sent to your app and email.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 perspective-1000">
                <div className="relative w-64 h-[500px] animate-float-3d">
                  <div className="absolute inset-0 rounded-[3rem] border-8 border-gray-900 bg-gray-900 shadow-xl">
                    <div className="relative h-full w-full rounded-[2.5rem] bg-white overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg"
                        alt="Connected to the world"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="absolute bottom-8 left-4 right-4">
                          <div className="mb-2 rounded-lg bg-primary/90 backdrop-blur px-4 py-2 text-white inline-flex items-center">
                            <Wifi size={16} className="mr-2" />
                            Connected
                          </div>
                          <h4 className="text-lg font-semibold text-white">You're ready to go!</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">You're connected to the world!</h3>
              <p className="text-gray-600">After activation, congratulations you're equipped with super internet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;