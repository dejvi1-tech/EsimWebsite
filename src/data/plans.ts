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
    id: 'usa-5gb-30d',
    name: 'USA Traveler',
    country: 'United States',
    countryCode: 'us',
    dataAmount: '5GB',
    validity: '30 days',
    price: 19.99,
    currency: 'USD',
    features: ['4G/5G Coverage', 'Easy Activation', 'No Contract'],
    popular: true,
    coverage: ['Continental US', 'Alaska', 'Hawaii', 'Puerto Rico', 'US Virgin Islands'],
    provider: 'AT&T Network',
    image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg'
  },
  {
    id: 'europe-10gb-14d',
    name: 'Euro Explorer',
    country: 'Europe',
    countryCode: 'eu',
    dataAmount: '10GB',
    validity: '14 days',
    price: 24.99,
    currency: 'USD',
    features: ['40+ Countries Coverage', 'Unlimited Calls within EU', '4G/5G Where Available'],
    popular: true,
    coverage: [
      'Albania', 'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus',
      'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France',
      'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy',
      'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands',
      'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia',
      'Spain', 'Sweden', 'UK', 'Switzerland', 'Norway'
    ],
    provider: 'Multiple European Networks',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg'
  },
  {
    id: 'italy-8gb-15d',
    name: 'Italian Explorer',
    country: 'Italy',
    countryCode: 'it',
    dataAmount: '8GB',
    validity: '15 days',
    price: 22.99,
    currency: 'USD',
    features: ['Nationwide Coverage', 'High-Speed Data', 'Tourist Hotspots'],
    popular: true,
    coverage: ['All of Italy', 'Vatican City', 'San Marino'],
    provider: 'TIM Italia',
    image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg'
  },
  {
    id: 'germany-10gb-15d',
    name: 'German Connect',
    country: 'Germany',
    countryCode: 'de',
    dataAmount: '10GB',
    validity: '15 days',
    price: 23.99,
    currency: 'USD',
    features: ['Nationwide Coverage', '5G Network', 'Unlimited EU Roaming'],
    popular: true,
    coverage: ['All of Germany', 'EU Roaming Included'],
    provider: 'Deutsche Telekom',
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg'
  },
  {
    id: 'japan-8gb-10d',
    name: 'Japan Connect',
    country: 'Japan',
    countryCode: 'jp',
    dataAmount: '8GB',
    validity: '10 days',
    price: 29.99,
    currency: 'USD',
    features: ['Nationwide Coverage', 'High-Speed Data', 'English Support'],
    coverage: ['All of Japan', 'Including Rural Areas', 'Major Cities', 'Islands'],
    provider: 'Docomo Network',
    image: 'https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg'
  },
  {
    id: 'asia-12gb-15d',
    name: 'Asia Explorer',
    country: 'Asia',
    countryCode: 'asia',
    dataAmount: '12GB',
    validity: '15 days',
    price: 34.99,
    currency: 'USD',
    features: ['15+ Countries Coverage', 'Shared Data Pool', '4G Speed'],
    speedCap: '10 Mbps',
    coverage: [
      'Thailand', 'Singapore', 'Malaysia', 'Indonesia', 'Vietnam',
      'Philippines', 'South Korea', 'Taiwan', 'Hong Kong', 'Macau',
      'Cambodia', 'Laos', 'Myanmar', 'Bangladesh', 'Sri Lanka'
    ],
    provider: 'Multiple Asian Networks',
    image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg'
  },
  {
    id: 'uk-3gb-7d',
    name: 'UK Weekender',
    country: 'United Kingdom',
    countryCode: 'gb',
    dataAmount: '3GB',
    validity: '7 days',
    price: 14.99,
    currency: 'USD',
    features: ['Nationwide Coverage', 'Free Calls to UK Numbers', 'Tethering Allowed'],
    coverage: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    provider: 'EE Network',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg'
  },
  {
    id: 'canada-5gb-30d',
    name: 'Canada Explorer',
    country: 'Canada',
    countryCode: 'ca',
    dataAmount: '5GB',
    validity: '30 days',
    price: 24.99,
    currency: 'USD',
    features: ['Coast to Coast Coverage', 'Free Canada Calls', '5G Access'],
    coverage: ['All Provinces', 'Major Cities', 'Tourist Areas'],
    provider: 'Rogers Network',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg'
  },
  {
    id: 'australia-8gb-14d',
    name: 'Aussie Connect',
    country: 'Australia',
    countryCode: 'au',
    dataAmount: '8GB',
    validity: '14 days',
    price: 29.99,
    currency: 'USD',
    features: ['Nationwide Coverage', 'Outback Ready', 'Tourist Hotspots'],
    coverage: ['All States', 'Major Cities', 'Tourist Destinations'],
    provider: 'Telstra Network',
    image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg'
  },
  {
    id: 'mediterranean-15gb-30d',
    name: 'Mediterranean Bundle',
    country: 'Mediterranean',
    countryCode: 'med',
    dataAmount: '15GB',
    validity: '30 days',
    price: 39.99,
    currency: 'USD',
    features: ['Beach Coverage', 'Island Hopping', 'Tourist Support'],
    coverage: ['Albania', 'Spain', 'Italy', 'Greece', 'Malta', 'Cyprus', 'Croatia', 'Turkey'],
    provider: 'Multiple Networks',
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg'
  },
  {
    id: 'scandinavia-10gb-14d',
    name: 'Nordic Explorer',
    country: 'Scandinavia',
    countryCode: 'scan',
    dataAmount: '10GB',
    validity: '14 days',
    price: 34.99,
    currency: 'USD',
    features: ['Northern Lights Coverage', '5G Ready', 'Cross-Border Use'],
    coverage: ['Norway', 'Sweden', 'Denmark', 'Finland', 'Iceland'],
    provider: 'Nordic Networks',
    image: 'https://images.pexels.com/photos/3375997/pexels-photo-3375997.jpeg'
  },
  {
    id: 'global-20gb-30d',
    name: 'Global Voyager',
    country: 'Global',
    countryCode: 'global',
    dataAmount: '20GB',
    validity: '30 days',
    price: 59.99,
    currency: 'USD',
    features: ['190+ Countries', 'Unlimited Social Media', 'Premium Support'],
    popular: true,
    coverage: [
      'North America', 'South America', 'Europe', 'Asia', 'Africa',
      'Middle East', 'Oceania', 'Caribbean Islands', 'Albania'
    ],
    provider: 'Global Network Alliance',
    image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg'
  }
];

// Function to get plan by ID
export const getPlanById = (id: string): Plan | undefined => {
  return plans.find(plan => plan.id === id);
};

// Function to get popular plans
export const getPopularPlans = (): Plan[] => {
  return plans.filter(plan => plan.popular);
};