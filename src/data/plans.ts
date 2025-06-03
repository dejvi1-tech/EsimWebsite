export interface Plan {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  dataAmount: string;
  validity: string;
  price: number;
  currency: string;
  features: string[];
  popular?: boolean;
  coverage: string[];
  speedCap?: string;
  provider: string;
  image: string;
}

export const plans: Plan[] = [
  {
    id: 'plan-1gb',
    name: '1GB / 60 Ditë / Europë, SHBA, Ballkan',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '1GB',
    validity: '60 days',
    price: 2.90,
    currency: 'EUR',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract'],
    coverage: ['Europe', 'USA', 'Balkans'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-3gb',
    name: '3GB / 60 Ditë / Europë, SHBA, Ballkan',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '3GB',
    validity: '60 days',
    price: 6.99,
    currency: 'EUR',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract'],
    coverage: ['Europe', 'USA', 'Balkans'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  // Add all other plans here with the same structure
];

export const getPlanById = (id: string): Plan | undefined => {
  return plans.find(plan => plan.id === id);
};

export const getPopularPlans = (): Plan[] => {
  return plans.filter(plan => plan.popular);
};