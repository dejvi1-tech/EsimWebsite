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
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
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
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-5gb',
    name: '5GB + 1GB Falas / 60 Ditë / Europë, SHBA, Ballkan',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '5GB + 1GB Free',
    validity: '60 days',
    price: 9.99,
    currency: 'EUR',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract', '1GB Extra Free'],
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-10gb',
    name: '10GB + 2GB Falas / 60 Ditë / Europë, SHBA, Ballkan',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '10GB + 2GB Free',
    validity: '60 days',
    price: 14.99,
    currency: 'EUR',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract', '2GB Extra Free'],
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-10gb-offer',
    name: 'OFERTË: 10GB + 5GB FALAS / 60 Ditë / Europë, SHBA, Shqipëri',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '10GB + 5GB Free',
    validity: '60 days',
    price: 14.99,
    currency: 'EUR',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract', '5GB Extra Free'],
    popular: true,
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-15gb',
    name: 'OFERTË: 15GB + 3GB FALAS / 30 Ditë / Europë, SHBA, Shqipëri',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '15GB + 3GB Free',
    validity: '30 days',
    price: 17.50,
    currency: 'EUR',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract', '3GB Extra Free'],
    popular: true,
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-20gb',
    name: '20GB / 60 Ditë / Europë, SHBA, Ballkan',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '20GB',
    validity: '60 days',
    price: 24.99,
    currency: 'EUR',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract'],
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-30gb',
    name: '30GB / 30 Ditë / Europë, SHBA, Ballkan',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '30GB',
    validity: '30 days',
    price: 29.99,
    currency: 'EUR',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract'],
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-35gb',
    name: '35GB EU, 50GB Angli - O2 SUPER',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '35GB EU, 50GB UK',
    validity: '30 days',
    price: 28.00,
    currency: 'EUR',
    features: [
      'UK +44 Number',
      'Unlimited Local Calls',
      'Unlimited Incoming SMS',
      'Active for 30 days from purchase'
    ],
    coverage: ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'Switzerland'],
    provider: 'O2 Network',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg'
  },
  {
    id: 'plan-50gb',
    name: '50GB / 30 Ditë / Europë, SHBA, Ballkan',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '50GB',
    validity: '30 days',
    price: 35.90,
    currency: 'EUR',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract'],
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-unlimited-7',
    name: 'Pa Limit / 7 Ditë / Europë, SHBA, Shqipëri',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: 'Unlimited',
    validity: '7 days',
    price: 23.00,
    currency: 'EUR',
    features: ['Unlimited Data', '4G/5G Coverage', 'Easy Activation', 'No Contract'],
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-unlimited-15',
    name: 'Pa Limit / 15 Ditë / Europë, SHBA, Shqipëri',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: 'Unlimited',
    validity: '15 days',
    price: 35.00,
    currency: 'EUR',
    features: ['Unlimited Data', '4G/5G Coverage', 'Easy Activation', 'No Contract'],
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'plan-unlimited-30',
    name: 'Pa Limit / 30 Ditë / Europë, SHBA, Shqipëri',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: 'Unlimited',
    validity: '30 days',
    price: 59.99,
    currency: 'EUR',
    features: ['Unlimited Data', '4G/5G Coverage', 'Easy Activation', 'No Contract'],
    coverage: ['Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  }
];

export const getPlanById = (id: string): Plan | undefined => {
  return plans.find(plan => plan.id === id);
};

export const getPopularPlans = (): Plan[] => {
  return plans.filter(plan => plan.popular);
};