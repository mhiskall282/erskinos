import React from 'react';
import { Filter } from 'lucide-react';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            <button
              onClick={() => onCategoryChange('')}
              className={`block w-full text-left px-2 py-1 rounded ${
                selectedCategory === '' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`block w-full text-left px-2 py-1 rounded ${
                  selectedCategory === category ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₵{priceRange[0]}</span>
              <span>₵{priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};