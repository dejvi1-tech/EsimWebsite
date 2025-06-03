import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { plans } from '../../data/plans';
import PlanCard from '../plans/PlanCard';

interface Message {
  type: 'user' | 'bot';
  content: string;
  plans?: typeof plans;
}

const AIChatSupport = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hi! I can help you find the perfect eSIM plan for your trip. Where are you planning to travel?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processUserInput = async (userInput: string) => {
    const userMessage: Message = { type: 'user', content: userInput };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    const lowercaseInput = userInput.toLowerCase();
    let response: Message;

    if (lowercaseInput.includes('albania') || lowercaseInput.includes('europe')) {
      const recommendedPlans = plans.filter(plan => 
        plan.coverage.includes('Albania') || 
        plan.coverage.includes('Europe')
      ).sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));

      response = {
        type: 'bot',
        content: `I've found some great eSIM plans for ${lowercaseInput.includes('albania') ? 'Albania' : 'Europe'}. Here are my top recommendations based on coverage and value:`,
        plans: recommendedPlans.slice(0, 3)
      };
    } else {
      response = {
        type: 'bot',
        content: 'Could you please specify if you\'re traveling to Albania or another European country? This will help me recommend the best plans for your destination.'
      };
    }

    setMessages(prev => [...prev, response]);
    setIsTyping(false);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      processUserInput(input.trim());
    }
  };

  return (
    <div className="flex h-[600px] flex-col rounded-xl bg-white shadow-soft">
      {/* Chat Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <Bot size={24} className="text-primary" />
          <div>
            <h3 className="font-semibold">eSIM Travel Assistant</h3>
            <p className="text-sm text-gray-600">Find the perfect plan for your trip</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex max-w-[80%] items-start space-x-2 rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.type === 'bot' && (
                  <Bot size={20} className="mt-1 shrink-0" />
                )}
                <div className="space-y-2">
                  <p>{message.content}</p>
                  {message.plans && (
                    <div className="mt-4 space-y-4">
                      {message.plans.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} />
                      ))}
                    </div>
                  )}
                </div>
                {message.type === 'user' && (
                  <User size={20} className="mt-1 shrink-0" />
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-2 rounded-lg bg-gray-100 p-3">
                <Bot size={20} />
                <Loader2 size={20} className="animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about eSIM plans for your destination..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIChatSupport;