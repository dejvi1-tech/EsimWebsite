import { Smartphone, Zap, Globe, CreditCard, Settings, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import AnimatedSection from '../animations/AnimatedSection';
import { motion } from 'framer-motion';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Smartphone size={24} />,
      title: t('features.instantActivation'),
      description: t('features.instantActivationDesc')
    },
    {
      icon: <Globe size={24} />,
      title: t('features.globalCoverage'),
      description: t('features.globalCoverageDesc')
    },
    {
      icon: <Zap size={24} />,
      title: t('features.fastConnectivity'),
      description: t('features.fastConnectivityDesc')
    },
    {
      icon: <CreditCard size={24} />,
      title: t('features.costEffective'),
      description: t('features.costEffectiveDesc')
    },
    {
      icon: <Settings size={24} />,
      title: t('features.easySetup'),
      description: t('features.easySetupDesc')
    },
    {
      icon: <Shield size={24} />,
      title: t('features.secureConnection'),
      description: t('features.secureConnectionDesc')
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('features.title')}</h2>
          <p className="mb-16 text-lg text-gray-600">
            {t('features.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index}
              delay={index * 0.1}
            >
              <motion.div 
                className="group rounded-xl bg-white p-8 shadow-soft transition-all hover:shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-5 inline-flex rounded-full bg-primary/10 p-3 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;