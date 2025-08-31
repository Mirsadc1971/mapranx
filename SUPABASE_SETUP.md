# Supabase Configuration Required

## Fix "Failed to fetch" Login Error

### 1. Enable Authentication in Supabase

Go to: https://supabase.com/dashboard/project/idhtdnzpzjpvirfypxbi/auth/providers

Enable these:
- ✅ Email/Password authentication
- ✅ Magic Link (optional)

### 2. Configure Site URL and Redirect URLs

Go to: https://supabase.com/dashboard/project/idhtdnzpzjpvirfypxbi/auth/url-configuration

Set these URLs:

**Site URL:**
```
https://mapranx.com
```

**Redirect URLs (add all):**
```
https://mapranx.com/**
https://mapranx.netlify.app/**
http://localhost:3000/**
http://localhost:3001/**
```

### 3. CORS Configuration (if needed)

If still getting errors, check CORS settings:
- Go to Project Settings → API
- Ensure your domain is allowed

### 4. Test Authentication

After configuration:
1. Clear browser cache
2. Try logging in again at https://mapranx.com/login

### 5. Create a Test User (Optional)

Go to: https://supabase.com/dashboard/project/idhtdnzpzjpvirfypxbi/auth/users

Click "Add user" → "Create new user" to create a test account.

### Common Issues:

- **"Failed to fetch"** - Usually means Supabase URLs aren't configured
- **"Invalid login credentials"** - User doesn't exist or wrong password  
- **CORS error** - Domain not whitelisted in Supabase settings