'use client';
import { useProduct } from '@/context/ProductContext';
import { useSearchParams } from 'next/navigation';


export default function ProductDetail({ params }: { params: { id: string } }) {
  const name = useSearchParams().get('name');
  const { products } = useProduct();
  const prod = products.find(p => p.id === Number(params.id));

  return (
    <div className="container mt-4">
      <h2>Product Detail</h2>
      {prod ? (
        <>
          <p>ID: {prod.id}</p>
          <p>Name: {prod.name}</p>
          <p>Price: ${prod.price}</p>
        </>
      ) : <p>Product not found</p>}
    </div>
  );
}