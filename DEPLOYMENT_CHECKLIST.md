# MapRanx Deployment Checklist

## 🚨 IMMEDIATE ACTION REQUIRED TO FIX 404 ERROR

The site is returning 404 because Netlify needs environment variables configured.

## Step 1: Add Environment Variables to Netlify

1. Go to: https://app.netlify.com/sites/mapranx/settings/env
2. Click "Add a variable" for each of these:

### Required Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL
Value: https://idhtdnzpzjpvirfypxbi.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkaHRkbnpwempwdmlyZnlweGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1MjUzMzIsImV4cCI6MjA3MjEwMTMzMn0.ALUJ4Vu0mSoJ0i4VzMkS7p-l_Itx4BvyukXYW9FSZfI

SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkaHRkbnpwempwdmlyZnlweGJpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjUyNTMzMiwiZXhwIjoyMDcyMTAxMzMyfQ.GPnTdAaVQWRTBLt_Txj8j4lnRWWKTDHKGqhCUEgtlDw

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
Value: [Get from your .env.local file - starts with pk_live_]

STRIPE_SECRET_KEY
Value: [Get from your .env.local file - starts with sk_live_]
```

## Step 2: Trigger a New Deploy

After adding all environment variables:

1. Go to: https://app.netlify.com/sites/mapranx/deploys
2. Click "Trigger deploy" → "Deploy site"
3. Wait for the build to complete (usually 2-3 minutes)

## Step 3: Verify Pages Are Working

Once deployed, check these URLs:
- ✅ https://mapranx.com (Homepage)
- ✅ https://mapranx.com/login (Login page)
- ✅ https://mapranx.com/signup (Signup page)
- ✅ https://mapranx.com/dashboard (After login)
- ✅ https://mapranx.com/dashboard/billing
- ✅ https://mapranx.com/dashboard/settings
- ✅ https://mapranx.com/dashboard/api-monitor

## Build Settings Already Configured

The following are already set in netlify.toml:
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18
- Next.js plugin installed
- Security headers configured

## Troubleshooting

If pages still show 404 after deployment:
1. Check Netlify build logs for errors
2. Ensure all environment variables are set correctly
3. Clear browser cache and try again
4. Check if the domain is properly connected

## Git Repository

Repository: https://github.com/yourusername/mapranx
Branch: main

To push latest changes:
```bash
git add .
git commit -m "Add dashboard pages and Netlify configuration"
git push origin main
```

## Support

If you encounter issues:
1. Check Netlify build logs
2. Verify all environment variables are set
3. Ensure the latest code is pushed to GitHub