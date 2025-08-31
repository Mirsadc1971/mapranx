import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test environment variables
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
    const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const hasServiceKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    // Test Supabase connection
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    let supabaseHealth = 'Not tested';
    
    if (supabaseUrl) {
      try {
        const response = await fetch(`${supabaseUrl}/auth/v1/health`, {
          headers: {
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
          }
        });
        supabaseHealth = response.ok ? 'Healthy' : `Error: ${response.status}`;
      } catch (error) {
        supabaseHealth = `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`;
      }
    }
    
    return NextResponse.json({
      success: true,
      environment: {
        NEXT_PUBLIC_SUPABASE_URL: hasUrl ? 'Set' : 'Missing',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: hasAnonKey ? 'Set' : 'Missing', 
        SUPABASE_SERVICE_ROLE_KEY: hasServiceKey ? 'Set' : 'Missing',
      },
      supabase: {
        url: supabaseUrl ? supabaseUrl.substring(0, 30) + '...' : 'Not set',
        health: supabaseHealth
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}