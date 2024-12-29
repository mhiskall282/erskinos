import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface ProductSortProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const ProductSort: React.FC<ProductSortProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="w-5 h-5 text-purple-600" />
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
};