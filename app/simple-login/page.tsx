'use client';

import { useState } from 'react';

export default function SimpleLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Trying to login with: ${email}`);
    // Just test without actually calling Supabase
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Simple Login Test</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="test@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Test Login
          </button>
        </form>

        {message && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            {message}
          </div>
        )}

        <div className="mt-6 space-y-2">
          <a href="/test" className="block text-blue-600 underline">Back to Test Page</a>
          <a href="/login" className="block text-blue-600 underline">Try Real Login Page</a>
        </div>
      </div>
    </div>
  );
}