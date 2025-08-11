'use client';
import { useRouter } from 'next/navigation';
export default function ProductCard({ product }: { product: any }) {
  const router = useRouter();
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price}</p>
        <button className="btn btn-primary" onClick={() => router.push(`/product/${product.id}?name=${product.name}`)}>
          View Details
        </button>
      </div>
    </div>
  );
}