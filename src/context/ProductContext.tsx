'use client';
import { createContext, useContext, useState } from 'react';
import type { Product } from '@/types';

type ProductContextType = {
  products: Product[];
  refresh: () => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const refresh = async () => {
    const { fetchProducts } = await import('@/services/productService');
    const data = await fetchProducts();
    setProducts(data);
  };

  return (
    <ProductContext.Provider value={{ products, refresh }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error('useProduct must be inside ProductProvider');
  return ctx;
};