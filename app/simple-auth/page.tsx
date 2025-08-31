'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SimpleAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple hardcoded auth for testing
    if (email === 'demo@mapranx.com' && password === 'demo123') {
      // Set a simple cookie
      document.cookie = 'auth=true; path=/';
      router.push('/dashboard');
    } else {
      alert('Use demo@mapranx.com / demo123');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Simple Login (No Supabase)</h1>
        <p className="mb-4 text-sm text-gray-600">
          Use: demo@mapranx.com / demo123
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}