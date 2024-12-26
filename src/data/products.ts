import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Denim Jeans',
    category: 'Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '₵299.99',
    description: 'High-quality denim jeans with perfect fit and comfort.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Grey']
  },
  {
    id: 2,
    name: 'Classic White Shirt',
    category: 'Shirts',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '₵159.99',
    description: 'Timeless white shirt made from premium cotton.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue', 'Pink']
  },
  {
    id: 3,
    name: 'Designer Sneakers',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '₵399.99',
    description: 'Comfortable and stylish sneakers for everyday wear.',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['White', 'Black', 'Grey']
  },
  {
    id: 4,
    name: 'Ghana Mist Spray',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '₵89.99',
    description: 'Refreshing and long-lasting fragrance.',
    colors: ['Original', 'Intense', 'Light']
  },
  {
    id: 5,
    name: 'African Print T-Shirt',
    category: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '₵129.99',
    description: 'Modern t-shirt with traditional African prints.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Green', 'Red']
  },
  {
    id: 6,
    name: 'Leather Sandals',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '₵199.99',
    description: 'Handcrafted leather sandals for maximum comfort.',
    sizes: ['40', '41', '42', '43', '44'],
    colors: ['Brown', 'Black', 'Tan']
  }
];