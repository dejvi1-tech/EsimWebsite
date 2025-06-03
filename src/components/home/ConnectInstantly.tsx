import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const ConnectInstantly = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-white to-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-lg text-primary font-medium">Easier</span>
            <h2 className="text-4xl md:text-5xl font-bold">Connect instantly</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              VIA is the stress-free solution – choose your internet plan, pay, and you're ready for your trip. 
              When you arrive at your destination, connect directly online. No need to hunt for Wi-Fi like a detective!
            </p>
            <div className="pt-4">
              <Link to="/plans">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="group"
                >
                  Get Connected Now
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image/Cards Section */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg"
                alt="Person using eSIM"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://flagcdn.com/th.svg"
                    alt="Thailand flag"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">Thailand</div>
                    <div className="text-sm text-gray-500">From 7.99</div>
                  </div>
                  <ArrowRight size={16} className="text-gray-400" />
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://flagcdn.com/tr.svg"
                    alt="Turkey flag"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">Turkey</div>
                    <div className="text-sm text-gray-500">From 5.99</div>
                  </div>
                  <ArrowRight size={16} className="text-gray-400" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl"></div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectInstantly;