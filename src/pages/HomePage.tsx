import { useState } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ConnectInstantly from '../components/home/ConnectInstantly';
import PopularPlans from '../components/home/PopularPlans';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import AIOnboarding from '../components/onboarding/AIOnboarding';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  const [showOnboarding] = useState(() => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (!hasSeenOnboarding) {
      localStorage.setItem('hasSeenOnboarding', 'true');
      return true;
    }
    return false;
  });

  return (
    <div>
      {showOnboarding && <AIOnboarding />}
      <Hero />
      <PopularPlans />
      <Features />
      <ConnectInstantly />
      <HowItWorks />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="rounded-3xl bg-secondary p-8 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('cta.title')}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              {t('cta.subtitle')}
            </p>
            <Link to="/plans">
              <Button 
                variant="primary" 
                size="lg" 
                className="group"
              >
                {t('cta.button')}
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;