'use client';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { sharedData } = useContext(DataContext);
  const router = useRouter();

  useEffect(() => {
    console.log("Dashboard received sharedData:", sharedData);
  }, [sharedData]);

  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>
      <p>Data shared from Home: <strong>{sharedData}</strong></p>
      <button className="btn btn-secondary" onClick={() => router.push('/')}>
        Back to Home
      </button>
    </div>
  );
}
