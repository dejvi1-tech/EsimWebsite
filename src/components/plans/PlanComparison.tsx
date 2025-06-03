import { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';
import { Plan } from '../../data/plans';
import Button from '../ui/Button';

interface PlanComparisonProps {
  plans: Plan[];
  onClose: () => void;
}

const PlanComparison = ({ plans, onClose }: PlanComparisonProps) => {
  const features = [
    'Data Amount',
    'Validity',
    'Coverage Countries',
    '4G/5G Support',
    'Instant Activation',
    'Multi-Device Support',
    'Data Sharing',
    'Speed Cap',
    'Auto-Renewal Option'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 max-w-5xl rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="mb-6 text-2xl font-bold">Plan Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="p-4 text-left">Features</th>
                {plans.map((plan) => (
                  <th key={plan.id} className="p-4 text-center">
                    <div className="mb-2 text-lg font-bold">{plan.name}</div>
                    <div className="text-2xl font-bold text-primary">€{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature} className="border-t border-gray-100">
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <span>{feature}</span>
                      <HelpCircle size={16} className="text-gray-400" />
                    </div>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className="p-4 text-center">
                      {feature === 'Data Amount' ? (
                        <span>{plan.dataAmount}</span>
                      ) : feature === 'Validity' ? (
                        <span>{plan.validity}</span>
                      ) : feature === 'Coverage Countries' ? (
                        <span>{plan.coverage.length} countries</span>
                      ) : (
                        <Check size={20} className="mx-auto text-success" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {plans.map((plan) => (
            <Button
              key={plan.id}
              variant="primary"
              onClick={() => {
                window.location.href = `/checkout?plan=${plan.id}`;
              }}
            >
              Choose {plan.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;