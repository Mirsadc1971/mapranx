# Fix NetworkError - CORS Configuration

## The Issue
"NetworkError when attempting to fetch resource" means Supabase is blocking requests from mapranx.com

## Solution Steps

### 1. Update Supabase CORS Settings

Go to: https://supabase.com/dashboard/project/idhtdnzpzjpvirfypxbi/settings/api

In the **CORS Settings** section, add these allowed origins:
```
https://mapranx.com
https://www.mapranx.com
https://mapranx.netlify.app
http://localhost:3000
http://localhost:3001
```

### 2. Update Authentication Settings

Go to: https://supabase.com/dashboard/project/idhtdnzpzjpvirfypxbi/auth/url-configuration

Ensure these are set:

**Site URL:**
```
https://mapranx.com
```

**Redirect URLs (must include all):**
```
https://mapranx.com/**
https://www.mapranx.com/**
https://mapranx.netlify.app/**
http://localhost:3000/**
```

### 3. Check API Settings

Go to: https://supabase.com/dashboard/project/idhtdnzpzjpvirfypxbi/settings/api

Make sure:
- Service role key is enabled
- Anon key is enabled
- RLS (Row Level Security) is properly configured or disabled for testing

### 4. Alternative: Use Edge Function

If CORS continues to be an issue, we may need to create an API route in Next.js to proxy the Supabase requests.

### 5. Clear Everything and Test

After making changes:
1. Clear browser cache completely
2. Use incognito/private window
3. Test at https://mapranx.com/test-supabase

### If Still Not Working

Check browser console (F12) for specific error messages. Look for:
- CORS policy errors
- Mixed content warnings
- Certificate issues