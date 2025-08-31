# Supabase Setup Instructions

## ✅ Completed
1. **Environment Variables** - All keys are configured in `.env.local`
2. **Authentication Pages** - Login and Signup pages created
3. **Supabase Client** - Connection files created

## 📋 Next Step: Create Database Tables

### Go to Supabase SQL Editor:
https://supabase.com/dashboard/project/idhtdnzpzjpvirfypxbi/sql/new

### Copy and Run This SQL:
Open the file `supabase/schema.sql` and copy ALL the SQL code, then paste it in the SQL Editor and click "Run".

This will create:
- `profiles` table (user profiles)
- `locations` table (business NAP data)
- `keywords` table (search keywords)
- `scans` table (scan sessions)
- `rankings` table (ranking results)
- `competitors` table (competitor tracking)
- `reports` table (generated reports)
- `points_transactions` table (points history)
- `subscription_history` table

## 🔐 Enable Authentication

1. Go to **Authentication** → **Providers**
2. Enable **Email** provider (should be on by default)
3. Optional: Enable **Google** provider for social login

## 🎯 Test Your Setup

1. Try logging in at: http://localhost:3002/login
2. Check if user appears in: **Authentication** → **Users**
3. Check if profile created in: **Table Editor** → **profiles**

## 📝 Your Registered Account
Since you already registered, you should be able to log in with your email and password.

## 🚀 What's Working Now
- User registration/login
- Supabase connection
- Database schema ready

## ⚠️ What's Next
- Connect dashboard to real data
- Implement actual scan functionality
- Set up Stripe webhooks for payments