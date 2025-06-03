import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Plan } from '../../data/plans';
import { useLanguage } from '../../contexts/LanguageContext';

interface PlanFiltersProps {
  onFilter: (filters: FilterOptions) => void;
}

interface FilterOptions {
  search: string;
  minPrice: number;
  maxPrice: number;
  dataAmount: string[];
  validity: string[];
  countries: string[];
}

const PlanFilters = ({ onFilter }: PlanFiltersProps) => {
  const { t } = useLanguage();
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    minPrice: 0,
    maxPrice: 100,
    dataAmount: [],
    validity: [],
    countries: []
  });

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  return (
    <div className="mb-8 space-y-6 rounded-xl bg-white p-6 shadow-lg">
      {/* Search */}
      <div>
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={t('filters.searchPlaceholder')}
            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
          />
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          {t('filters.priceRange')}
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min="0"
            max="100"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange({ minPrice: Number(e.target.value) })}
            className="w-full"
          />
          <span className="text-sm">
            €{filters.minPrice} - €{filters.maxPrice}
          </span>
        </div>
      </div>

      {/* Data Amount Filter */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          {t('filters.dataAmount')}
        </label>
        <div className="flex flex-wrap gap-2">
          {['1GB', '3GB', '5GB', '10GB', '20GB', 'Unlimited'].map((amount) => (
            <button
              key={amount}
              className={`rounded-full px-3 py-1 text-sm ${
                filters.dataAmount.includes(amount)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => {
                const newDataAmount = filters.dataAmount.includes(amount)
                  ? filters.dataAmount.filter((a) => a !== amount)
                  : [...filters.dataAmount, amount];
                handleFilterChange({ dataAmount: newDataAmount });
              }}
            >
              {amount}
            </button>
          ))}
        </div>
      </div>

      {/* Validity Filter */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          {t('filters.validity')}
        </label>
        <div className="flex flex-wrap gap-2">
          {['7 days', '15 days', '30 days', '60 days'].map((period) => (
            <button
              key={period}
              className={`rounded-full px-3 py-1 text-sm ${
                filters.validity.includes(period)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => {
                const newValidity = filters.validity.includes(period)
                  ? filters.validity.filter((v) => v !== period)
                  : [...filters.validity, period];
                handleFilterChange({ validity: newValidity });
              }}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <div className="flex justify-end">
        <button
          className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700"
          onClick={() =>
            handleFilterChange({
              search: '',
              minPrice: 0,
              maxPrice: 100,
              dataAmount: [],
              validity: [],
              countries: []
            })
          }
        >
          <X size={16} />
          <span>{t('filters.reset')}</span>
        </button>
      </div>
    </div>
  );
};

export default PlanFilters;