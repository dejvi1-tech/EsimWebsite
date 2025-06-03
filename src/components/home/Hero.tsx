import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark pt-20 text-white">
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Qëndroni të Lidhur Kudo në Botë
          </h1>
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            Aktivizim i menjëhershëm i eSIM për më shumë se 190 vende. Nuk nevojitet SIM fizike. Lidhuni me rrjetet lokale me çmime të përballueshme.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-center">
            <Link to="/plans">
              <Button 
                variant="accent" 
                size="lg" 
                className="group"
              >
                Shfleto Planet
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/faq">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Si Funksionon
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary-light opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-primary-light opacity-20 animate-float-reverse"></div>
        <div className="absolute right-1/4 top-1/3 h-20 w-20 rounded-full bg-accent opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;