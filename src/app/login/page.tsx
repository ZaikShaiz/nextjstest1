'use client';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = await login(email, password);
    if(success) router.push('/dashboard');
    else alert('Login failed');
  }

  return (
    <div className="container mt-4" style={{ maxWidth: 400 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  );
}
