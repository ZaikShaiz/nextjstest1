'use client';
import { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';
import { useRouter } from 'next/navigation';
import ProductForm from '@/components/ProductForm';
import { useProduct } from '@/context/ProductContext';
import ProductCard from '@/components/ProductCard';
import { addProduct } from '@/services/productService';

export default function HomePage() {
  const { sharedData, setSharedData } = useContext(DataContext);
  const router = useRouter();
  const { products, refresh } = useProduct();

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Welcome to Home Page</h1>
      <input
        className="form-control my-3"
        type="text"
        value={sharedData}
        onChange={e => setSharedData(e.target.value)}
        placeholder="Type something to share"
      />
      <button className="btn btn-primary" onClick={() => router.push('/dashboard')}>
        Go to Dashboard
      </button>

      <div className="container mt-4">
        <h2>Product Dashboard</h2>
        <ProductForm onSubmit={addProduct} />
        <div className="row">
          {products.map(p => (
            <div key={p.id} className="col-md-4">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
