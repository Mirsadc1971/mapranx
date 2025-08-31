'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function TestSupabase() {
  const [status, setStatus] = useState<string>('Testing connection...');
  const [details, setDetails] = useState<Record<string, string>>({});
  
  useEffect(() => {
    const testConnection = async () => {
      try {
        const supabase = createClient();
        
        // Test 1: Check if client is created
        setDetails(prev => ({...prev, client: '✅ Client created'}));
        
        // Test 2: Check environment variables
        const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
        const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        
        setDetails(prev => ({
          ...prev, 
          envVars: `URL: ${hasUrl ? '✅' : '❌'}, Key: ${hasKey ? '✅' : '❌'}`
        }));
        
        // Test 3: Try to get session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          setDetails(prev => ({...prev, session: `❌ Error: ${sessionError.message}`}));
        } else {
          setDetails(prev => ({...prev, session: session ? '✅ Active session' : '⚠️ No session'}));
        }
        
        // Test 4: Try a simple auth health check
        const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/health`, {
          headers: {
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
          }
        });
        
        if (response.ok) {
          setDetails(prev => ({...prev, health: '✅ Auth endpoint healthy'}));
          setStatus('Connection successful!');
        } else {
          setDetails(prev => ({...prev, health: `❌ Auth endpoint error: ${response.status}`}));
          setStatus('Connection issues detected');
        }
        
      } catch (error) {
        setStatus('Connection failed');
        setDetails(prev => ({...prev, error: error instanceof Error ? error.message : String(error)}));
      }
    };
    
    testConnection();
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Supabase Connection Test</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <p className="text-lg font-semibold mb-2">Status: {status}</p>
          </div>
          
          <div className="space-y-3">
            <h2 className="font-semibold text-gray-700">Connection Details:</h2>
            {Object.entries(details).map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <span className="font-medium capitalize">{key}:</span>
                <span>{String(value)}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <p className="font-semibold mb-2">Environment Variables:</p>
            <code className="text-sm">
              <div>NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'}</div>
              <div>NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}</div>
            </code>
          </div>
          
          <div className="mt-6">
            <a href="/login" className="text-blue-600 hover:underline">← Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}