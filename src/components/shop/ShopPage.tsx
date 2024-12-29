import React, { useState, useMemo } from 'react';
import { products } from '../../data/products';
import ProductFilters from './ProductFilters';
import ProductSort from './ProductSort';
import ProductList from './ProductList';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = useMemo(() => 
    Array.from(new Set(products.map(p => p.category))),
    []
  );

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Apply price filter
    filtered = filtered.filter(p => {
      const price = parseFloat(p.price.replace('₵', ''));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => 
          parseFloat(a.price.replace('₵', '')) - parseFloat(b.price.replace('₵', ''))
        );
        break;
      case 'price-desc':
        filtered.sort((a, b) => 
          parseFloat(b.price.replace('₵', '')) - parseFloat(a.price.replace('₵', ''))
        );
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return filtered;
  }, [products, selectedCategory, priceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-64">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </aside>
        
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-purple-900">Shop</h1>
            <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
          </div>
          <ProductList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
};