'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AuthFixed() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('mapranx_user');
    if (user) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (isSignup) {
        // Store user in localStorage (temporary solution)
        const users = JSON.parse(localStorage.getItem('mapranx_users') || '[]');
        
        // Check if user exists
        if (users.find((u: any) => u.email === email)) {
          setMessage('User already exists. Please login.');
          setLoading(false);
          return;
        }
        
        // Add new user
        users.push({ email, password, createdAt: new Date().toISOString() });
        localStorage.setItem('mapranx_users', JSON.stringify(users));
        
        // Auto login after signup
        localStorage.setItem('mapranx_user', JSON.stringify({ email }));
        setMessage('Account created! Redirecting...');
        
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } else {
        // Login
        const users = JSON.parse(localStorage.getItem('mapranx_users') || '[]');
        const user = users.find((u: any) => u.email === email && u.password === password);
        
        if (user || (email === 'demo@mapranx.com' && password === 'demo123')) {
          localStorage.setItem('mapranx_user', JSON.stringify({ email }));
          setMessage('Login successful! Redirecting...');
          
          setTimeout(() => {
            router.push('/dashboard');
          }, 1000);
        } else {
          setMessage('Invalid credentials. Try demo@mapranx.com / demo123');
        }
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">MR</span>
            </div>
            <span className="font-bold text-3xl">MapRanx</span>
          </Link>
          <p className="text-gray-600 mt-2">
            {isSignup ? 'Create your account' : 'Welcome back!'}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Working Auth:</strong> This uses localStorage (no Supabase needed)
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              Demo login: demo@mapranx.com / demo123
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {message && (
              <div className={`p-3 rounded-lg text-sm ${
                message.includes('successful') || message.includes('created') 
                  ? 'bg-green-50 border border-green-200 text-green-700'
                  : 'bg-red-50 border border-red-200 text-red-700'
              }`}>
                {message}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : (isSignup ? 'Create Account' : 'Login')}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => {
                setIsSignup(!isSignup);
                setMessage('');
              }}
              className="font-semibold text-purple-600 hover:text-purple-700"
            >
              {isSignup ? 'Login' : 'Sign up'}
            </button>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}