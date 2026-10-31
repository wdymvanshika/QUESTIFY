# 🛸 QUESTIFY — Gamified Productivity Platform

> **"YOUR CHORES. YOUR GAME. YOUR VICTORY."**  
> Turn boring digital tasks into exciting missions. Play, progress and get things done.

QUESTIFY transforms everyday digital clutter (disorganized folders, overflowing email inboxes) into playable 60 FPS browser games while safely completing the actual real-world tasks on your system.

Created with passion by **VANSHIKA** for the hackathon.

---

## 🌟 What's New: Premium Redesign

Inspired by modern, bright, light-themed gaming startups and Apple-style product presentation:
- **Bright, Glossy White & Pearl Visual Theme:** Light background with soft glassmorphic surfaces, subtle gradients, and realistic depth.
- **Dark Arcade Arenas:** The games themselves run inside dark arcade viewports for optimal visual contrast and retro game feel.
- **Hero Section:** Animated 3D-inspired game visual, floating file elements, live statistics, and immediate call-to-actions.
- **User Accounts & Authentication:** Secure email authentication via Supabase (Magic Links / OTP) or instant Guest Mode.
- **Creator Credits Section:** Dedicated "Crafted with Passion" card highlighting the creator, easily customizable in one place.
- **Zero Build Tools Required:** Pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (ES6+). No Node.js, no Python, no npm!

---

## 🎮 Two Epic Missions. One Platform.

### 🏃 Mission 01: FILE RUNNER
- **Gameplay:** 60 FPS courier runner. Jump (`Space` / `↑` / `W`) and crouch (`↓` / `S`) over spires and under overhead lasers.
- **Real File Organizing:** Uses the native browser **File System Access API** (in Chrome / Edge) to scan any disorganized folder (e.g., Downloads).
- **Categorization:** Automatically sorts files into `Images`, `Documents`, `Videos`, `Audio`, `Archives`, or `Others`.
- **Zero Data Loss:** Files are safely moved with automatic duplicate renaming (`file (1).ext`) — no files are ever deleted or overwritten.
- **Simulation Mode:** Includes instant simulation mode with sample files for quick testing.

### 👾 Mission 02: INBOX INVADERS
- **Gameplay:** 60 FPS retro space defense shooter. Move with Arrow keys or `A/D`, fire lasers with `Spacebar`.
- **Enemy Waves:** 4 intense waves featuring Promotions, Spam torpedoes, Newsletter cruisers, Social ping scouts, and the giant **SPAM BOT MATRIX** boss.
- **VIP Email Protection:** Important emails are shielded VIP cargo — protect them and avoid shooting them for massive score bonuses!
- **Power-Ups:** Collect Rapid Fire (3-way beam), Energy Shield, and 2X Multiplier.
- **Reversible Triage:** Eliminating emails prepares them for safe reversible archiving (removing the Inbox label), never permanent deletion.

---

## 🔒 Authentication & Account Progression

QUESTIFY supports two flexible authentication modes:

### 1. Instant Guest Mode (Default)
- No sign-in required.
- Full access to all games, mechanics, and profile features.
- Player progress is saved locally in the browser under an isolated guest profile.

### 2. Email Magic Link (Supabase)
- **Zero Passwords:** Users never enter or share their email password.
- **Separate Accounts:** Each email account has its own isolated profile, level, coins, and high scores.
- **Setup Instructions for Production:**
  1. Create a free project at [supabase.com](https://supabase.com).
  2. In your Supabase Dashboard, go to **Project Settings** → **API**.
  3. Copy your **Project URL** and **Anon Public Key**.
  4. In `script.js`, update `SUPABASE_CONFIG`:
     ```javascript
     const SUPABASE_CONFIG = {
       url: 'https://YOUR_PROJECT_ID.supabase.co',
       anonKey: 'YOUR_ANON_PUBLIC_KEY'
     };
     ```
  5. In Supabase Dashboard → **Authentication** → **URL Configuration** → **Redirect URLs**, add your deployed Vercel URL:
     ```
     https://your-questify-project.vercel.app/
     ```

---

## ✏️ Customizing the Creator Name

The creator name is defined in one documented place in `index.html`:
```html
<!-- Line ~367 in index.html -->
<span class="creator-name" id="creatorName">VANSHIKA</span>
```
Change `VANSHIKA` to any name and it will update the credits card and contact information.

---

## 🚀 Running and Testing Locally

1. Open your QUESTIFY project directory in Google Chrome:
   ```
   C:\Users\Davinder Kumar\OneDrive\Desktop\QUESTIFY\index.html
   ```
2. Double-click `index.html` or open it with Google Chrome / Microsoft Edge.
3. Test all features:
   - Click **Start Your Mission** or choose **File Runner** / **Inbox Invaders**.
   - Test folder sorting or click **Launch Simulation Run**.
   - Play **Inbox Invaders**, defeat the boss, and confirm email triage.
   - Inspect the **Hangar** to equip vessel skins and check **Bounties** for unlocked career medals.
   - Test signing in with any email in the **Sign In** modal to see account switching in action.
