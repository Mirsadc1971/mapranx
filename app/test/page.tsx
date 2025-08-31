export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p>If you can see this, Next.js is working!</p>
      
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="font-bold mb-2">Environment Variables:</h2>
        <p>Supabase URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'}</p>
        <p>Supabase Anon Key: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}</p>
      </div>

      <div className="mt-4">
        <a href="/login" className="text-blue-600 underline">Go to Login</a>
      </div>
    </div>
  );
}