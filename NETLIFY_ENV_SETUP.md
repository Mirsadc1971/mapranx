# Netlify Environment Variables Setup

## IMPORTANT: Add these to Netlify Dashboard

Go to: https://app.netlify.com/sites/mapranx/settings/env

Add these environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://idhtdnzpzjpvirfypxbi.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkaHRkbnpwempwdmlyZnlweGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1MjUzMzIsImV4cCI6MjA3MjEwMTMzMn0.ALUJ4Vu0mSoJ0i4VzMkS7p-l_Itx4BvyukXYW9FSZfI

SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkaHRkbnpwempwdmlyZnlweGJpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjUyNTMzMiwiZXhwIjoyMDcyMTAxMzMyfQ.GPnTdAaVQWRTBLt_Txj8j4lnRWWKTDHKGqhCUEgtlDw

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=[Get from your .env.local file - starts with pk_live_]

STRIPE_SECRET_KEY=[Get from your .env.local file - starts with sk_live_]
```

## Steps to Add:
1. Go to Netlify Dashboard
2. Click on your MapRanx site
3. Go to Site Settings → Environment Variables
4. Add each variable above
5. Click "Deploy" → "Trigger Deploy" → "Deploy Site"

## After Adding Variables:
The site will rebuild automatically and all pages will work including:
- https://mapranx.com/login
- https://mapranx.com/signup
- https://mapranx.com/dashboard (after login)