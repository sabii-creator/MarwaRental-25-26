# ☁️ How to Enable Cloud Sync

To sync data between your laptop and phone, you need a free Firebase database.

## Step 1: Create Database
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"** and name it "Marwa Rental".
3. Disable Google Analytics (optional).
4. Once created, go to **Build > Realtime Database**.
5. Click **"Create Database"**.
6. Select **"Start in Test Mode"** (makes it easy to start).

## Step 2: Get Configuration
1. Click the ⚙️ (Gear icon) > **Project settings**.
2. Scroll down to "Your apps" and click **</>** (Web icon).
3. Register app (name it "Web").
4. You will see a code block with `const firebaseConfig = { ... }`.
5. **Copy ONLY the part inside the braces `{ ... }`**.

Example of what to copy:
```json
{
  "apiKey": "AIzaSy...",
  "authDomain": "marwa-rental.firebaseapp.com",
  "projectId": "marwa-rental",
  "storageBucket": "marwa-rental.appspot.com",
  "messagingSenderId": "123...",
  "appId": "1:123...",
  "databaseURL": "https://marwa-rental-default-rtdb.firebaseio.com"
}
```

## Step 3: Connect Your Site
1. Open your deployed Vercel site.
2. Click **"☁️ Sync"** in the top navigation bar.
3. Paste the code you copied.
4. Click **Connect**.

## Step 4: Repeat on Phone
1. Open the site on your phone.
2. Click **"☁️ Sync"**.
3. Paste the **SAME** code.
4. Click **Connect**.

Now, when you add a customer on your phone, it will appear on your laptop instantly! 🚀
