# 🛸 QUESTIFY — Two Games. One Epic Platform.

> **"BORING TASKS. EPIC MISSIONS."**  
> Turn your digital mess into your next high score. Organize cluttered local folders and eliminate unwanted inboxes through two playable arcade games inside one unified dashboard.

QUESTIFY is built strictly with **Vanilla Web Technologies**:
- **HTML5** & 2D Canvas (Dual 60 FPS Game Engines)
- **CSS3** (Bold, premium monochrome identity — pure black, charcoal, silver, and off-white. No neon colors.)
- **Vanilla JavaScript** (ES6+, zero frameworks, zero external dependencies)
- **Native File System Access API**
- ❌ No Python
- ❌ No Node.js
- ❌ No npm or build pipelines

---

## 🌌 The Questify Universe (Main Dashboard)

The central command dashboard connects both games under a unified shared career progression system:

- **Player Profile:** Commander Callsign (customizable), Player Level, XP Progress Bar, and Career Ranks (from Orbital Recruit to Productivity Prime).
- **Gamification Currency:** Arcade Coins (`🪙`), Daily Streak (`⚡`), and Productivity Integrity Score.
- **Unified Chore Counter:** Tracks total real-world tasks completed (`Total Files Organised` + `Total Emails Purged`).
- **Two Interactive Game Cards:**
  1. **FILE RUNNER:** *"Run. Dodge. Collect. Organise."*
  2. **INBOX INVADERS:** *"Lock. Load. Clean your inbox."*
- **Persistent Storage:** All player levels, coins, streaks, high scores, and mission history are saved in browser `localStorage`.

---

## 🏃 Game 01: FILE RUNNER

Your proven real-world file organizer wrapped in a 60 FPS courier runner game.

### Core Mechanics (Preserved & Polished):
- **Courier Drone Controls:** Jump (`Space` / `↑` / `W`, with double-jump capability) and Crouch (Hold `↓` / `S`).
- **On-Screen Touch Buttons:** `[Jump ↑]` and `[Crouch ↓]` for laptop touch screens and mobile.
- **Real-Time On-Disk Sorting:**
  - Select any cluttered folder on your PC using the browser's native File System Access API.
  - Automatically identifies and categorizes files into `Images`, `Documents`, `Videos`, `Audio`, `Archives`, or `Others`.
  - Duplicates are auto-renamed (`file (1).ext`) to ensure **zero data loss**.
  - As you jump and crouch, files are moved in real time with in-game toast notifications popping up on the canvas.
- **Simulation Mode:** Includes an instant simulation run mode with sample files for quick testing.

---

## 👾 Game 02: INBOX INVADERS

An arcade space shooter that turns email triage into a space fleet battle.

### Story & Gameplay:
- Thousands of promotional blasts, spam waves, and unread newsletters are swarming your workspace.
- Pilot your defense ship along the bottom of the screen (`Arrow Left/Right` or `A/D`, and `Spacebar` to fire).
- **Enemy Waves & Categories:**
  - 👾 **Promotions:** Fast-moving agile drones.
  - 💀 **Spam Swarm:** Erratic high-speed torpedoes.
  - 🛸 **Newsletters:** Armored cruisers requiring multiple hits.
  - 📡 **Social Notifications:** Agile ping scouts.
  - 🛡️ **Important Emails:** Shielded VIP cargo. **Do NOT blast!** Protecting them and letting them pass safely awards high score bonuses (+500 PTS).
- **Boss Wave (Wave 4):** Battle the giant **SPAM BOT MATRIX** mother-ship featuring a top health bar and projectile attacks.
- **Power-Ups:** Destroying enemies drops `[⚡ Rapid Fire]` (3-way beam), `[🛡️ Energy Shield]`, and `[2X Multiplier]`.
- **Safe Email Triage Flow:**
  - Pre-loaded with a realistic 25-email demo sandbox across all categories.
  - Includes client-side Google OAuth 2.0 configuration ready for live connection without asking for user passwords.
  - **Reversible Archiving:** Actions are non-destructive (archiving, never permanent deletion).
  - Explicit confirmation review step before applying changes.

---

## 🎨 Visual Identity — Premium Monochrome

Following a strict, elegant black-and-white aesthetic:
- **Pure Black:** `#000000` base and canvas arenas.
- **Charcoal & Silver:** `#121214` surface cards, `#27272a` borders, `#a1a1aa` secondary accents.
- **Crisp Off-White:** `#ffffff` and `#f4f4f5` for high-contrast typography and projectiles.
- **Zero Neon Colors:** No purple, blue, green, or pink glowing clutter.

---

## 🚀 How to Run in Google Chrome

1. Open your folder:
   ```
   C:\Users\Davinder Kumar\OneDrive\Desktop\QUESTIFY
   ```
2. Double-click **`index.html`** (or right-click `index.html` → **Open with** → **Google Chrome**).
3. The Questify Universe dashboard will load immediately.

---

## 🧪 Testing Checklist

- [x] **Single-Page Navigation:** Click between `Universe`, `File Runner`, `Inbox Invaders`, `Hangar`, and `Bounties`.
- [x] **Home Buttons:** Both games feature a prominent `← HOME / UNIVERSE` button returning to the main dashboard.
- [x] **File Runner:** Click `Play File Runner` → test folder scan or `Launch Simulation Run` → jump and crouch under obstacles while files sort.
- [x] **Inbox Invaders:** Click `Play Inbox Invaders` → engage mission → move with `Arrow Left/Right` or `A/D` and shoot with `Spacebar` → destroy promotional/spam drones and defeat the Spam Matrix boss.
- [x] **Triage Confirmation:** In Inbox Invaders, review the email manifest and click `Confirm & Apply Email Triage` to earn real XP and coins.
- [x] **Shared Gamification:** Verify that Level, XP, Coins, and Mission Logs update and persist after refreshing the browser.
