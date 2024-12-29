export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
  sizes?: string[];
  colors?: string[];
}

export type CartItem = Product & {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
};