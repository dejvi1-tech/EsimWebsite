import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

// FAQ categories and questions
const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is an eSIM?',
        answer: 'An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan from your carrier without having to use a physical SIM card. It\'s built into your device and can be programmed to connect to different networks.'
      },
      {
        question: 'How do I know if my device supports eSIM?',
        answer: 'Most newer smartphones support eSIM technology, including iPhone XS and newer, Google Pixel 3 and newer, and select Samsung models. You can check your device manufacturer\'s specifications or settings to confirm if your device supports eSIM.'
      },
      {
        question: 'Can I use eSIM and physical SIM at the same time?',
        answer: 'Yes, most eSIM-compatible devices support Dual SIM Dual Standby (DSDS), allowing you to use both a physical SIM card and an eSIM simultaneously. This lets you have two different phone numbers and data plans active on one device.'
      }
    ]
  },
  {
    category: 'Purchasing & Activation',
    questions: [
      {
        question: 'How do I purchase an eSIM?',
        answer: 'To purchase an eSIM, browse our available plans, select the one that best fits your needs, proceed to checkout, and complete the payment. After purchase, you\'ll receive a QR code to scan with your device to install the eSIM.'
      },
      {
        question: 'How do I activate my eSIM?',
        answer: 'To activate your eSIM, go to your device settings, select "Mobile Data" or "Cellular," then "Add Data Plan" or "Add eSIM." Scan the QR code we provide after purchase, follow the on-screen instructions, and your eSIM will be installed and ready to use.'
      },
      {
        question: 'Can I activate my eSIM later?',
        answer: 'Yes, you can purchase an eSIM now and activate it later. Your eSIM QR code will be valid for 30 days from the purchase date. After scanning the QR code, you can choose when to start using your data plan within the validity period.'
      }
    ]
  },
  {
    category: 'Usage & Coverage',
    questions: [
      {
        question: 'Where can I use my eSIM?',
        answer: 'Our eSIMs provide coverage in over 190 countries worldwide. Each plan specifies the countries or regions where it can be used. You can check the coverage details on each plan\'s page before purchasing.'
      },
      {
        question: 'What happens when I use all my data?',
        answer: 'When you exhaust your data allowance, your service will be paused. You can purchase additional data through your account dashboard. We do not automatically charge you for overages, giving you complete control over your spending.'
      },
      {
        question: 'Can I share my eSIM connection with other devices?',
        answer: 'Yes, you can use your phone\'s hotspot feature to share your eSIM\'s data connection with other devices like laptops and tablets. Keep in mind that this will consume your data allowance faster.'
      }
    ]
  },
  {
    category: 'Troubleshooting',
    questions: [
      {
        question: 'My eSIM isn\'t connecting to the network. What should I do?',
        answer: 'First, ensure your device has eSIM support and that you\'ve installed the eSIM correctly. Check that data roaming is enabled in your settings. If the issue persists, try restarting your device. For further assistance, contact our support team with your order details.'
      },
      {
        question: 'I accidentally deleted my eSIM. Can I reinstall it?',
        answer: 'Yes, you can reinstall your eSIM. Log in to your account dashboard where you can access your QR code again. If you need assistance, contact our customer support with your order details, and we\'ll help you reinstall your eSIM.'
      },
      {
        question: 'Why is my data speed slow?',
        answer: 'Data speeds can vary based on your location, network congestion, and coverage quality. Some of our plans have speed caps as indicated in the plan details. If you\'re experiencing consistently slow speeds, try toggling airplane mode on and off, or restart your device.'
      }
    ]
  }
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  
  const toggleQuestion = (question: string) => {
    if (openQuestions.includes(question)) {
      setOpenQuestions(openQuestions.filter(q => q !== question));
    } else {
      setOpenQuestions([...openQuestions, question]);
    }
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h1>
            <p className="text-lg text-white/90">
              Find answers to common questions about our eSIM service. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Category Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-32 space-y-2 rounded-xl bg-white p-6 shadow-soft">
                <h2 className="mb-4 font-semibold">Categories</h2>
                {faqData.map((category) => (
                  <button
                    key={category.category}
                    className={`flex w-full items-center rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${
                      activeCategory === category.category
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category.category)}
                  >
                    {category.category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Questions */}
            <div className="md:col-span-3">
              <div className="rounded-xl bg-white p-6 shadow-soft">
                <div className="mb-6 flex items-center space-x-3">
                  <HelpCircle size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold">{activeCategory}</h2>
                </div>
                
                <div className="space-y-4">
                  {faqData
                    .find(category => category.category === activeCategory)
                    ?.questions.map((faq, index) => (
                      <div 
                        key={index} 
                        className="rounded-lg border border-gray-200 bg-white transition-all hover:border-gray-300"
                      >
                        <button
                          className="flex w-full items-center justify-between p-4 text-left font-medium"
                          onClick={() => toggleQuestion(faq.question)}
                        >
                          <span>{faq.question}</span>
                          <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200">
                            {openQuestions.includes(faq.question) ? (
                              <Minus size={14} />
                            ) : (
                              <Plus size={14} />
                            )}
                          </span>
                        </button>
                        
                        {openQuestions.includes(faq.question) && (
                          <div className="border-t border-gray-200 p-4 text-gray-600">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12">
        <div className="container-custom">
          <div className="rounded-3xl bg-secondary p-8 text-center md:p-16">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Still Have Questions?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600">
              Our support team is here to help. Contact us for personalized assistance with your eSIM needs.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
              <button className="btn-primary">
                Contact Support
              </button>
              <button className="btn-secondary">
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;