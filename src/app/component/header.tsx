'use client';
import Link from 'next/link';
import { useAuth } from './AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link href="/" className="navbar-brand">MyApp</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link href="/dashboard" className="nav-link">Dashboard</Link></li>
          {!user && <li className="nav-item"><Link href="/login" className="nav-link">Login</Link></li>}
        </ul>
        {user && (
          <div>
            <span className="me-3">Hello, {user}</span>
            <button className="btn btn-outline-danger btn-sm" onClick={logout}>Logout</button>
          </div>
        )}
      </div>
      
    </nav>
    
  );
}
