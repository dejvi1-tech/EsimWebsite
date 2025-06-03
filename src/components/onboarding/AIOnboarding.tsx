import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Globe, Smartphone, Check, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  animation: string;
}

const steps: OnboardingStep[] = [
  {
    id: 1,
    title: "Welcome to ConnectEsim",
    description: "Let's find the perfect eSIM plan for your travels. I'll guide you through the process.",
    icon: <Bot className="text-primary" size={32} />,
    animation: "fade-in slide-up"
  },
  {
    id: 2,
    title: "Where are you traveling?",
    description: "Choose your destination and I'll show you the best available plans.",
    icon: <Globe className="text-primary" size={32} />,
    animation: "fade-in slide-up"
  },
  {
    id: 3,
    title: "Check Device Compatibility",
    description: "Let's make sure your device supports eSIM technology.",
    icon: <Smartphone className="text-primary" size={32} />,
    animation: "fade-in slide-up"
  }
];

const AIOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentStep < steps.length) {
      setIsTyping(true);
      let text = steps[currentStep].description;
      let index = 0;
      setDisplayedText('');

      const typingInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/plans');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 max-w-2xl rounded-2xl bg-white p-8 shadow-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                    index <= currentStep
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {index < currentStep ? (
                    <Check size={16} />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 w-16 transition-all ${
                      index < currentStep ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          <div className="mb-6 flex items-center space-x-3">
            <div className="rounded-full bg-primary/10 p-4">
              {steps[currentStep].icon}
            </div>
            <h2 className="text-2xl font-bold">{steps[currentStep].title}</h2>
          </div>

          <div className="min-h-[80px] text-lg text-gray-600">
            {displayedText}
            {isTyping && (
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary" />
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            className={`text-sm text-gray-500 hover:text-gray-700 ${
              currentStep === 0 ? 'invisible' : ''
            }`}
          >
            Back
          </button>
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={isTyping}
            className="group"
          >
            {currentStep === steps.length - 1 ? 'Get Started' : 'Continue'}
            <ChevronRight
              size={16}
              className="ml-1 transition-transform group-hover:translate-x-1"
            />
          </Button>
        </div>

        {/* Skip Button */}
        <button
          onClick={() => navigate('/plans')}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-white/80 hover:text-white"
        >
          Skip Onboarding
        </button>
      </div>
    </div>
  );
};

export default AIOnboarding;