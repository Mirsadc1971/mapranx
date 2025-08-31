# 🚀 How to Start MapRanx After a Break

## Quick Start (3 Steps)

### 1️⃣ Open Terminal/Command Prompt
Open your terminal and navigate to the MapRanx folder:
```bash
cd C:\saas\mapranx
```

### 2️⃣ Start the Development Server
```bash
npm run dev
```

### 3️⃣ Open Your Browser
Go to: **http://localhost:3000**
(If port 3000 is busy, it might be 3001, 3002, etc. - check the terminal output)

---

## 📱 Your Pages

- **Homepage**: http://localhost:3000
- **Login**: http://localhost:3000/login
- **Signup**: http://localhost:3000/signup
- **Dashboard**: http://localhost:3000/dashboard (must be logged in)
- **Pricing**: http://localhost:3000/pricing

---

## 🔑 Your Login Credentials
Use the email and password you created when you signed up.

---

## 🛠️ If Something's Not Working

### Option 1: Restart the server
1. Press `Ctrl + C` in terminal to stop
2. Run `npm run dev` again

### Option 2: Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

### Option 3: Check if you're in the right folder
```bash
pwd
# Should show: C:\saas\mapranx
```

---

## 📂 Project Location
Your MapRanx project is located at:
```
C:\saas\mapranx
```

---

## 🌐 Live Site
Your deployed site (when ready): https://mapranx.com

---

## 💡 Pro Tips
- Keep this file open in a browser tab for quick reference
- Bookmark http://localhost:3000/dashboard
- The app auto-saves to GitHub when we make changes

---

## 🆘 Need Help?
1. Check if the server is running (you should see "✓ Ready" in terminal)
2. Make sure you're in the mapranx folder
3. Try opening in incognito/private browser window

---

## 📊 Your Supabase Dashboard
Manage your database at:
https://supabase.com/dashboard/project/idhtdnzpzjpvirfypxbi

---

That's it! Just 3 commands to get back to work:
1. `cd C:\saas\mapranx`
2. `npm run dev`
3. Open http://localhost:3000