'use client';
import { useState } from 'react';

export default function ProductForm({ onSubmit }: { onSubmit: any }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ name, price: Number(price) });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="mb-2">
        <input type="number" className="form-control" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      </div>
      <button className="btn btn-success" type="submit">Add Product</button>
    </form>
  );
}