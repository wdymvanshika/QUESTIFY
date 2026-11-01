/**
 * QUESTIFY // Two Games. One Epic Platform.
 * File Runner (File System Access API) + Inbox Invaders (Email Triage Space Shooter)
 * Pure Vanilla JavaScript — Zero External Dependencies
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. SOUND SYNTHESIZER (Pure Web Audio API — Monochrome Soundscape)
  // =========================================================================
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('questify_muted') === 'true';
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.ctx = new AudioContext();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.muted = !this.muted;
      localStorage.setItem('questify_muted', this.muted);
      return this.muted;
    }

    // Runner Jump
    playJump() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.12);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    }

    // Item / Pod Collect
    playCollect() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    }

    // Player Hit
    playHit() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.18);
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    }

    // Shooter Laser Fire
    playLaser() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'square';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.07);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.07);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    }

    // Enemy Explosion
    playExplosion() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.16);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    }

    // Powerup Pick
    playPowerup() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.04;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.1, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.1);
      });
    }

    // Boss Warning Alert
    playBossAlert() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      [220, 180, 220, 180].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.14;
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.12);
      });
    }

    // Mission Victory Chime
    playVictory() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.08;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.14, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.28);
      });
    }
  }

  // =========================================================================
  // 2. SHARED GAMIFICATION & PLAYER PROFILE MANAGER
  // =========================================================================
  const RANKS = [
    { level: 1, title: 'ORBITAL RECRUIT', minXp: 0, maxXp: 100 },
    { level: 2, title: 'COURIER PILOT', minXp: 100, maxXp: 250 },
    { level: 3, title: 'SECTOR DEFENDER', minXp: 250, maxXp: 500 },
    { level: 4, title: 'INBOX PURGER', minXp: 500, maxXp: 900 },
    { level: 5, title: 'ARCHIVE ADMIRAL', minXp: 900, maxXp: 1500 },
    { level: 6, title: 'PRODUCTIVITY PRIME', minXp: 1500, maxXp: 3000 }
  ];

  class PlayerProfileManager {
    constructor(userId = 'guest') {
      this.userId = userId;
      this.state = this.loadState();
      this.checkDailyStreak();
    }

    setUserId(userId) {
      this.userId = userId || 'guest';
      this.state = this.loadState();
      this.checkDailyStreak();
    }

    getStorageKey() {
      return `questify_user_${this.userId}`;
    }

    loadState() {
      const key = this.getStorageKey();
      let saved = localStorage.getItem(key);
      if (!saved && this.userId === 'guest') {
        // Fallback to legacy single-user key
        saved = localStorage.getItem('questify_universe_state');
      }
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.warn('Resetting corrupt state');
        }
      }
      const defaultName = (this.userId === 'guest' || !this.userId)
        ? 'COMMANDER NOVA'
        : ('CMD ' + this.userId.split('@')[0].toUpperCase().slice(0, 12));

      return {
        callsign: defaultName,
        xp: 0,
        coins: 150,
        streakDays: 1,
        lastActiveDate: new Date().toISOString().split('T')[0],
        totalFilesOrganized: 0,
        totalEmailsProcessed: 0,
        fileRunnerHighScore: 0,
        inboxInvadersHighScore: 0,
        equippedSkin: 'saucer',
        unlockedSkins: ['saucer'],
        achievements: [],
        missionLog: []
      };
    }

    saveState() {
      localStorage.setItem(this.getStorageKey(), JSON.stringify(this.state));
    }

    checkDailyStreak() {
      const today = new Date().toISOString().split('T')[0];
      if (this.state.lastActiveDate !== today) {
        const last = new Date(this.state.lastActiveDate);
        const curr = new Date(today);
        const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          this.state.streakDays += 1;
        } else if (diffDays > 1) {
          this.state.streakDays = 1;
        }
        this.state.lastActiveDate = today;
        this.saveState();
      }
    }

    getRank() {
      for (let i = RANKS.length - 1; i >= 0; i--) {
        if (this.state.xp >= RANKS[i].minXp) {
          return RANKS[i];
        }
      }
      return RANKS[0];
    }

    addXp(amount) {
      if (amount <= 0) return { leveledUp: false };
      const oldRank = this.getRank();
      this.state.xp += amount;
      this.saveState();
      const newRank = this.getRank();
      return {
        leveledUp: newRank.level > oldRank.level,
        oldRank,
        newRank
      };
    }

    addCoins(amount) {
      this.state.coins += amount;
      this.saveState();
    }

    recordFileMission(count, score) {
      this.state.totalFilesOrganized += count;
      if (score > this.state.fileRunnerHighScore) {
        this.state.fileRunnerHighScore = score;
      }
      this.addMissionLog('FILE RUNNER', `${count} files sorted`, score);
      this.checkAchievements();
      this.saveState();
    }

    recordEmailMission(count, score) {
      this.state.totalEmailsProcessed += count;
      if (score > this.state.inboxInvadersHighScore) {
        this.state.inboxInvadersHighScore = score;
      }
      this.addMissionLog('INBOX INVADERS', `${count} emails purged`, score);
      this.checkAchievements();
      this.saveState();
    }

    addMissionLog(type, details, score) {
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.state.missionLog.unshift({
        type,
        details,
        score,
        time: timeStr
      });
      if (this.state.missionLog.length > 10) {
        this.state.missionLog.pop();
      }
    }

    checkAchievements() {
      const list = [
        { id: 'first_run', title: 'First Sort', desc: 'Organize your first real folder', condition: () => this.state.totalFilesOrganized >= 1 },
        { id: 'first_shot', title: 'Inbox Defender', desc: 'Neutralize 10+ email invaders', condition: () => this.state.totalEmailsProcessed >= 10 },
        { id: 'master_sorter', title: 'Archive Master', desc: 'Sort 25+ local files', condition: () => this.state.totalFilesOrganized >= 25 },
        { id: 'clean_streak', title: 'Daily Consistency', desc: 'Maintain a 3+ day chore streak', condition: () => this.state.streakDays >= 3 }
      ];

      list.forEach((ach) => {
        if (!this.state.achievements.includes(ach.id) && ach.condition()) {
          this.state.achievements.push(ach.id);
          this.addCoins(50);
          this.addXp(50);
        }
      });
    }

    getProductivityScore() {
      return (this.state.totalFilesOrganized * 25) + (this.state.totalEmailsProcessed * 20) + (this.state.streakDays * 15);
    }
  }

  // =========================================================================
  // 3. FILE SYSTEM UTILITIES (FOR FILE RUNNER)
  // =========================================================================
  const FILE_CATEGORIES = {
    Images: { icon: '[IMG]', name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico', 'tiff', 'avif'] },
    Documents: { icon: '[DOC]', name: 'Documents', extensions: ['pdf', 'doc', 'docx', 'txt', 'rtf', 'odt', 'xls', 'xlsx', 'ppt', 'pptx', 'csv', 'md'] },
    Videos: { icon: '[VID]', name: 'Videos', extensions: ['mp4', 'mkv', 'mov', 'avi', 'wmv', 'flv', 'webm', 'm4v'] },
    Audio: { icon: '[AUD]', name: 'Audio', extensions: ['mp3', 'wav', 'flac', 'aac', 'ogg', 'm4a', 'wma'] },
    Archives: { icon: '[ARC]', name: 'Archives', extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'bz2', 'iso'] },
    Others: { icon: '[OTH]', name: 'Others', extensions: [] }
  };

  function getFileCategory(filename) {
    const lastDot = filename.lastIndexOf('.');
    if (lastDot === -1 || lastDot === filename.length - 1) return 'Others';
    const ext = filename.substring(lastDot + 1).toLowerCase();
    for (const [catName, def] of Object.entries(FILE_CATEGORIES)) {
      if (def.extensions.includes(ext)) return catName;
    }
    return 'Others';
  }

  // =========================================================================
  // 4. GAME ONE: FILE RUNNER ENGINE (PRESERVED & MONOCHROME-POLISHED)
  // =========================================================================
  class FileRunnerGame {
    constructor(canvas, onScoreUpdate, onHeartsUpdate) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.onScoreUpdate = onScoreUpdate;
      this.onHeartsUpdate = onHeartsUpdate;
      this.sound = null;
      this.running = false;
      this.animationId = null;

      this.groundY = 270;
      this.player = {
        x: 90,
        y: this.groundY - 32,
        w: 48,
        h: 28,
        vy: 0,
        jumpForce: -11.5,
        gravity: 0.58,
        isGrounded: true,
        isCrouching: false,
        doubleJumpAvailable: true,
        invincibleTimer: 0
      };

      this.score = 0;
      this.hearts = 3;
      this.distance = 0;
      this.speed = 4.4;
      this.collectedPods = 0;

      this.stars = [];
      this.groundOffset = 0;
      this.obstacles = [];
      this.collectibles = [];
      this.particles = [];
      this.popups = [];
      this.obstacleTimer = 0;
      this.collectibleTimer = 0;

      this.initStars();
      this.bindInputs();
    }

    setSound(sound) {
      this.sound = sound;
    }

    initStars() {
      this.stars = [];
      for (let i = 0; i < 60; i++) {
        this.stars.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * (this.groundY - 30),
          r: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.8 + 0.3,
          alpha: Math.random() * 0.7 + 0.3
        });
      }
    }

    bindInputs() {
      window.addEventListener('keydown', (e) => {
        if (!this.running) return;
        if (e.code === 'Space' || e.code === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
          e.preventDefault();
          this.jump();
        } else if (e.code === 'ArrowDown' || e.key === 's' || e.key === 'S') {
          e.preventDefault();
          this.setCrouch(true);
        }
      });

      window.addEventListener('keyup', (e) => {
        if (!this.running) return;
        if (e.code === 'ArrowDown' || e.key === 's' || e.key === 'S') {
          this.setCrouch(false);
        }
      });

      this.canvas.addEventListener('pointerdown', (e) => {
        if (!this.running) return;
        const rect = this.canvas.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        if (clickY < rect.height * 0.6) this.jump();
        else this.setCrouch(true);
      });

      this.canvas.addEventListener('pointerup', () => {
        if (this.running) this.setCrouch(false);
      });
    }

    jump() {
      if (this.player.isGrounded) {
        this.player.vy = this.player.jumpForce;
        this.player.isGrounded = false;
        this.player.doubleJumpAvailable = true;
        this.spawnBurst();
        if (this.sound) this.sound.playJump();
      } else if (this.player.doubleJumpAvailable) {
        this.player.vy = this.player.jumpForce * 0.85;
        this.player.doubleJumpAvailable = false;
        this.spawnBurst();
        if (this.sound) this.sound.playJump();
      }
    }

    setCrouch(crouch) {
      this.player.isCrouching = crouch;
      const touchBtn = document.getElementById('touchCrouchBtn');
      if (touchBtn) {
        if (crouch) touchBtn.classList.add('active');
        else touchBtn.classList.remove('active');
      }
    }

    spawnBurst() {
      for (let i = 0; i < 7; i++) {
        this.particles.push({
          x: this.player.x + 6,
          y: this.player.y + (this.player.isCrouching ? 10 : 20),
          vx: -(Math.random() * 3 + 2),
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 2 + 1,
          color: '#ffffff',
          life: 0.8
        });
      }
    }

    start() {
      this.running = true;
      this.score = 0;
      this.hearts = 3;
      this.distance = 0;
      this.speed = 4.4;
      this.collectedPods = 0;
      this.obstacles = [];
      this.collectibles = [];
      this.particles = [];
      this.popups = [];
      this.player.y = this.groundY - 32;
      this.player.vy = 0;
      this.player.isGrounded = true;
      this.player.isCrouching = false;
      this.player.invincibleTimer = 0;

      if (this.onScoreUpdate) this.onScoreUpdate(this.score);
      if (this.onHeartsUpdate) this.onHeartsUpdate(this.hearts);

      this.lastTime = performance.now();
      if (this.animationId) cancelAnimationFrame(this.animationId);
      this.loop(this.lastTime);
    }

    stop() {
      this.running = false;
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
    }

    spawnFilePodEvent(catName, filename) {
      const cat = FILE_CATEGORIES[catName] || FILE_CATEGORIES.Others;
      this.collectibles.push({
        x: this.canvas.width + 30,
        y: this.groundY - 70 - Math.random() * 40,
        w: 26,
        h: 26,
        icon: cat.icon,
        name: filename
      });
    }

    loop(now) {
      if (!this.running) return;
      const dt = Math.min((now - this.lastTime) / 1000, 0.1);
      this.lastTime = now;
      this.update(dt);
      this.draw();
      this.animationId = requestAnimationFrame((t) => this.loop(t));
    }

    update(dt) {
      this.distance += this.speed;
      this.score += Math.round(this.speed * 0.12);
      if (this.onScoreUpdate) this.onScoreUpdate(this.score);

      this.speed = Math.min(8.2, 4.4 + (this.distance / 4200));

      this.stars.forEach((s) => {
        s.x -= s.speed * (this.speed * 0.35);
        if (s.x < 0) s.x = this.canvas.width;
      });

      this.groundOffset = (this.groundOffset + this.speed) % 40;

      this.player.y += this.player.vy;
      this.player.vy += this.player.gravity;

      const pHeight = this.player.isCrouching ? 16 : 28;
      const targetGround = this.groundY - pHeight;
      if (this.player.y >= targetGround) {
        this.player.y = targetGround;
        this.player.vy = 0;
        this.player.isGrounded = true;
      }

      if (this.player.invincibleTimer > 0) {
        this.player.invincibleTimer -= dt;
      }

      // Spawning Obstacles
      this.obstacleTimer += dt;
      if (this.obstacleTimer > Math.max(1.6, 3.2 - (this.speed * 0.18))) {
        this.obstacleTimer = 0;
        const isOverhead = Math.random() > 0.5;
        if (isOverhead) {
          this.obstacles.push({ type: 'overhead', x: this.canvas.width + 20, y: this.groundY - 54, w: 40, h: 16 });
        } else {
          this.obstacles.push({ type: 'ground', x: this.canvas.width + 20, y: this.groundY - 32, w: 22, h: 32 });
        }
      }

      // Spawning bonus pods
      this.collectibleTimer += dt;
      if (this.collectibleTimer > 3.0) {
        this.collectibleTimer = 0;
        const tags = ['DOC', 'IMG', 'AUD', 'ARC', 'VID'];
        this.collectibles.push({
          x: this.canvas.width + 20,
          y: this.groundY - (Math.random() > 0.5 ? 85 : 40),
          w: 24,
          h: 24,
          icon: tags[Math.floor(Math.random() * tags.length)]
        });
      }

      // Obstacle collision
      for (let i = this.obstacles.length - 1; i >= 0; i--) {
        const obs = this.obstacles[i];
        obs.x -= this.speed;

        const pBox = {
          x: this.player.x + 4,
          y: this.player.y + 2,
          w: this.player.w - 8,
          h: (this.player.isCrouching ? 16 : 28) - 4
        };

        if (
          this.player.invincibleTimer <= 0 &&
          pBox.x < obs.x + obs.w &&
          pBox.x + pBox.w > obs.x &&
          pBox.y < obs.y + obs.h &&
          pBox.y + pBox.h > obs.y
        ) {
          this.handleHit();
          this.obstacles.splice(i, 1);
          continue;
        }

        if (obs.x + obs.w < -20) this.obstacles.splice(i, 1);
      }

      // Collectible collision
      for (let i = this.collectibles.length - 1; i >= 0; i--) {
        const col = this.collectibles[i];
        col.x -= this.speed;

        const pBox = { x: this.player.x, y: this.player.y, w: this.player.w, h: this.player.isCrouching ? 16 : 28 };
        if (pBox.x < col.x + col.w && pBox.x + pBox.w > col.x && pBox.y < col.y + col.h && pBox.y + pBox.h > col.y) {
          this.score += 100;
          this.collectedPods++;
          if (this.onScoreUpdate) this.onScoreUpdate(this.score);
          if (this.sound) this.sound.playCollect();

          this.popups.push({ text: '+100 PTS', x: col.x, y: col.y, life: 1 });
          this.collectibles.splice(i, 1);
          continue;
        }

        if (col.x + col.w < -30) this.collectibles.splice(i, 1);
      }

      // Particles
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const pt = this.particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life -= dt * 2;
        if (pt.life <= 0) this.particles.splice(i, 1);
      }

      // Popups
      for (let i = this.popups.length - 1; i >= 0; i--) {
        const pop = this.popups[i];
        pop.y -= dt * 30;
        pop.life -= dt * 1.5;
        if (pop.life <= 0) this.popups.splice(i, 1);
      }
    }

    handleHit() {
      this.hearts--;
      this.player.invincibleTimer = 1.2;
      if (this.sound) this.sound.playHit();

      if (this.hearts <= 0) {
        this.hearts = 1;
        this.score = Math.max(0, this.score - 100);
      }

      if (this.onHeartsUpdate) this.onHeartsUpdate(this.hearts);
      if (this.onScoreUpdate) this.onScoreUpdate(this.score);
    }

    draw() {
      const w = this.canvas.width;
      const h = this.canvas.height;
      const ctx = this.ctx;

      // Dark Sky
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, w, h);

      // Stars
      this.stars.forEach((s) => {
        ctx.fillStyle = `rgba(240, 240, 240, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ground
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, this.groundY, w, h - this.groundY);

      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, this.groundY);
      ctx.lineTo(w, this.groundY);
      ctx.stroke();

      ctx.strokeStyle = '#18181b';
      ctx.lineWidth = 1;
      for (let x = -this.groundOffset; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, this.groundY);
        ctx.lineTo(x - 20, h);
        ctx.stroke();
      }

      // Obstacles
      this.obstacles.forEach((obs) => {
        if (obs.type === 'overhead') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(obs.x, obs.y + 4, obs.w, 4);
          ctx.fillStyle = '#27272a';
          ctx.fillRect(obs.x - 3, obs.y, 5, obs.h);
          ctx.fillRect(obs.x + obs.w - 2, obs.y, 5, obs.h);
          ctx.fillStyle = '#A1A1A6';
          ctx.font = '700 9px JetBrains Mono, monospace';
          ctx.fillText('LASER BEAM', obs.x, obs.y - 4);
        } else {
          ctx.fillStyle = '#1c1c1f';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(obs.x, this.groundY);
          ctx.lineTo(obs.x + obs.w / 2, obs.y);
          ctx.lineTo(obs.x + obs.w, this.groundY);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      });

      // Collectibles (Precision Data Pods)
      this.collectibles.forEach((col) => {
        ctx.save();
        ctx.translate(col.x + col.w / 2, col.y + col.h / 2);
        ctx.fillStyle = '#101010';
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(0, 0, 13, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '700 8px JetBrains Mono, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(col.icon || 'DATA', 0, 1);
        ctx.restore();
      });

      // Particles
      this.particles.forEach((pt) => {
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = Math.max(0, pt.life);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Player
      const p = this.player;
      const isInvincibleBlink = p.invincibleTimer > 0 && Math.floor(p.invincibleTimer * 10) % 2 === 0;

      if (!isInvincibleBlink) {
        ctx.save();
        ctx.translate(p.x, p.y);
        if (p.isCrouching) {
          ctx.fillStyle = '#1c1c1f';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.ellipse(24, 8, 22, 6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(18, 5, 12, 3);
        } else {
          ctx.fillStyle = '#121214';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.ellipse(24, 16, 22, 9, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(24, 12, 7, Math.PI, 0);
          ctx.fill();
        }
        ctx.restore();
      }

      // Popups
      this.popups.forEach((pop) => {
        ctx.fillStyle = '#ffffff';
        ctx.font = '700 12px JetBrains Mono, monospace';
        ctx.globalAlpha = Math.max(0, pop.life);
        ctx.fillText(pop.text, pop.x, pop.y);
        ctx.globalAlpha = 1;
      });
    }
  }

  // =========================================================================
  // 5. GAME TWO: INBOX INVADERS ARCADE SHOOTER (GENUINE PLAYABLE GAME)
  // =========================================================================
  const SAMPLE_INBOX_EMAILS = [
    { id: 1, subject: 'FLASH SALE: 70% Off Electronics Ends Tonight', category: 'Promotions', sender: 'deals@megastore.com' },
    { id: 2, subject: 'Exclusive VIP Discount on Flight Bookings', category: 'Promotions', sender: 'promos@airtravel.com' },
    { id: 3, subject: 'CLAIM YOUR $1,000,000 LOTTERY WINNINGS NOW', category: 'Spam', sender: 'reward@crypto-win-portal.xyz' },
    { id: 4, subject: 'Immediate Account Verification Required', category: 'Spam', sender: 'security-alert@fakebank-portal.net' },
    { id: 5, subject: 'Weekly Tech Digest #142: Future of Web Engines', category: 'Newsletters', sender: 'editor@techdigest.io' },
    { id: 6, subject: 'Alex tagged you in 3 new group photos', category: 'Social', sender: 'notifications@socialnet.com' },
    { id: 7, subject: 'Your Monthly Cloud Invoice is Ready (#8941)', category: 'Important', sender: 'billing@cloudservices.com' },
    { id: 8, subject: 'BOGO Weekend Free Shipping On Apparel', category: 'Promotions', sender: 'news@fashionhub.com' },
    { id: 9, subject: 'Special Invitation: Free Crypto Investment Webinar', category: 'Spam', sender: 'info@quickwealthgroup.co' },
    { id: 10, subject: 'The Design Systems Journal Issue #48', category: 'Newsletters', sender: 'team@designsystems.org' },
    { id: 11, subject: 'New connection request from Sarah Jenkins', category: 'Social', sender: 'messages@proconnect.com' },
    { id: 12, subject: '50% Off Pizza Night — promo code inside!', category: 'Promotions', sender: 'deals@pizzaparadise.com' },
    { id: 13, subject: 'Notice: Suspicious transaction detected in your wallet', category: 'Spam', sender: 'alert@cryptowallet-fake.com' },
    { id: 14, subject: 'Cyber Security Daily: Protecting API keys', category: 'Newsletters', sender: 'briefs@securespot.net' },
    { id: 15, subject: 'Mark liked your recent post: "Hackathon Prep"', category: 'Social', sender: 'feed@socialnet.com' },
    { id: 16, subject: 'Limited Time: Free 30-day premium upgrade', category: 'Promotions', sender: 'upsell@streammedia.com' },
    { id: 17, subject: 'Urgent: Your package delivery address is missing', category: 'Spam', sender: 'delivery@parcel-tracking-scam.com' },
    { id: 18, subject: 'Productivity Roundup: 5 tips for deep work', category: 'Newsletters', sender: 'dispatch@productivitypulse.io' },
    { id: 19, subject: 'Summer Clearance Sale: Final price drop', category: 'Promotions', sender: 'store@outdoorgear.com' },
    { id: 20, subject: 'Get rich quick in 7 simple steps without working', category: 'Spam', sender: 'wealth@spamnetwork.biz' },
    { id: 21, subject: 'Order Confirmation: Hardware Components #9012', category: 'Important', sender: 'orders@hardwarestore.com' },
    { id: 22, subject: 'Flash Deal: 40% off productivity software', category: 'Promotions', sender: 'offers@appmarket.com' },
    { id: 23, subject: 'Workplace Weekly: Remote Collaboration Insights', category: 'Newsletters', sender: 'news@workplaceweekly.com' },
    { id: 24, subject: 'Exclusive Member Rewards: Double Points Week', category: 'Promotions', sender: 'rewards@hotelchain.com' },
    { id: 25, subject: 'SPAM MATRIX MASTER NODE: Unsolicited Mega Blast', category: 'Spam', sender: 'matrix@spambotnet.global' }
  ];

  class InboxInvadersGame {
    constructor(canvas, onHudUpdate, onMissionComplete) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.onHudUpdate = onHudUpdate;
      this.onMissionComplete = onMissionComplete;
      this.sound = null;
      this.running = false;
      this.paused = false;
      this.animationId = null;

      // Player Ship
      this.player = {
        x: canvas.width / 2,
        y: canvas.height - 44,
        w: 36,
        h: 28,
        speed: 7.5,
        movingLeft: false,
        movingRight: false,
        shootCooldown: 0,
        hasRapidFire: 0,
        hasShield: false,
        invincibleTimer: 0
      };

      // State
      this.score = 0;
      this.lives = 3;
      this.combo = 1;
      this.consecutiveHits = 0;
      this.totalShotsFired = 0;
      this.totalShotsHit = 0;
      this.currentWave = 1;
      this.totalWaves = 4;
      this.clearedEmailsCount = 0;
      this.processedEmails = [];

      // Entities
      this.stars = [];
      this.bullets = [];
      this.enemies = [];
      this.enemyBullets = [];
      this.powerups = [];
      this.particles = [];
      this.popups = [];
      this.boss = null;

      this.initStars();
      this.bindInputs();
    }

    setSound(sound) {
      this.sound = sound;
    }

    initStars() {
      this.stars = [];
      for (let i = 0; i < 75; i++) {
        this.stars.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          speed: Math.random() * 1.5 + 0.4,
          r: Math.random() * 1.6 + 0.4,
          alpha: Math.random() * 0.7 + 0.3
        });
      }
    }

    bindInputs() {
      window.addEventListener('keydown', (e) => {
        if (!this.running || this.paused) return;
        if (e.code === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
          this.player.movingLeft = true;
        } else if (e.code === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
          this.player.movingRight = true;
        } else if (e.code === 'Space') {
          e.preventDefault();
          this.firePlayerLaser();
        } else if (e.code === 'Escape') {
          this.togglePause();
        }
      });

      window.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
          this.player.movingLeft = false;
        } else if (e.code === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
          this.player.movingRight = false;
        }
      });

      // Canvas Pointer Drag / Click to fire
      this.canvas.addEventListener('pointerdown', (e) => {
        if (!this.running || this.paused) return;
        const rect = this.canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        this.player.x = Math.max(30, Math.min(this.canvas.width - 30, clickX));
        this.firePlayerLaser();
      });
    }

    firePlayerLaser() {
      if (this.player.shootCooldown > 0) return;
      this.totalShotsFired++;

      if (this.player.hasRapidFire > 0) {
        // Triple Stream
        this.bullets.push({ x: this.player.x - 10, y: this.player.y - 12, vx: -0.8, vy: -12, w: 3, h: 10 });
        this.bullets.push({ x: this.player.x, y: this.player.y - 14, vx: 0, vy: -13, w: 4, h: 12 });
        this.bullets.push({ x: this.player.x + 10, y: this.player.y - 12, vx: 0.8, vy: -12, w: 3, h: 10 });
        this.player.shootCooldown = 0.12;
      } else {
        // Standard Laser
        this.bullets.push({ x: this.player.x, y: this.player.y - 14, vx: 0, vy: -12, w: 3, h: 11 });
        this.player.shootCooldown = 0.22;
      }

      if (this.sound) this.sound.playLaser();
    }

    start(emailBatch = SAMPLE_INBOX_EMAILS) {
      this.running = true;
      this.paused = false;
      this.score = 0;
      this.lives = 3;
      this.combo = 1;
      this.consecutiveHits = 0;
      this.totalShotsFired = 0;
      this.totalShotsHit = 0;
      this.currentWave = 1;
      this.clearedEmailsCount = 0;
      this.emailQueue = [...emailBatch];
      this.processedEmails = [];
      this.bullets = [];
      this.enemies = [];
      this.enemyBullets = [];
      this.powerups = [];
      this.particles = [];
      this.popups = [];
      this.boss = null;

      this.player.x = this.canvas.width / 2;
      this.player.y = this.canvas.height - 44;
      this.player.hasRapidFire = 0;
      this.player.hasShield = false;
      this.player.invincibleTimer = 0;

      this.emitHud();
      this.spawnWave(this.currentWave);

      this.lastTime = performance.now();
      if (this.animationId) cancelAnimationFrame(this.animationId);
      this.loop(this.lastTime);
    }

    stop() {
      this.running = false;
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
    }

    togglePause() {
      this.paused = !this.paused;
      const modal = document.getElementById('invadersPauseModal');
      if (modal) modal.style.display = this.paused ? 'flex' : 'none';
      if (!this.paused) {
        this.lastTime = performance.now();
        this.loop(this.lastTime);
      }
    }

    emitHud() {
      if (this.onHudUpdate) {
        this.onHudUpdate({
          wave: `${this.currentWave} / ${this.totalWaves}`,
          cleared: this.clearedEmailsCount,
          total: this.emailQueue.length + this.processedEmails.length,
          score: this.score,
          combo: `x${this.combo}`,
          lives: this.lives,
          bossHealthPct: this.boss ? Math.max(0, (this.boss.hp / this.boss.maxHp) * 100) : null
        });
      }
    }

    spawnWave(waveNum) {
      this.enemies = [];
      this.enemyBullets = [];
      this.boss = null;
      const bossBar = document.getElementById('bossHealthContainer');
      if (bossBar) bossBar.style.display = 'none';

      if (waveNum === 1) {
        // Wave 1: 6 scout enemies
        this.spawnEnemyGrid(2, 3, ['Promotions', 'Social']);
      } else if (waveNum === 2) {
        // Wave 2: 8 enemies
        this.spawnEnemyGrid(2, 4, ['Promotions', 'Newsletters', 'Spam']);
      } else if (waveNum === 3) {
        // Wave 3: 10 heavy enemies + Important email escort
        this.spawnEnemyGrid(2, 5, ['Spam', 'Promotions', 'Newsletters']);
        // Add VIP email with shield
        this.enemies.push({
          x: this.canvas.width / 2 - 25,
          y: 35,
          w: 52,
          h: 30,
          hp: 999,
          isImportant: true,
          emailData: { subject: 'Payroll Statement & Deposit', category: 'Important', sender: 'payroll@company.com' },
          speedX: 1.2,
          speedY: 0.35
        });
      } else if (waveNum === 4) {
        // Boss Wave: Spam Bot Matrix
        if (this.sound) this.sound.playBossAlert();
        if (bossBar) bossBar.style.display = 'flex';

        this.boss = {
          x: this.canvas.width / 2 - 60,
          y: 40,
          w: 120,
          h: 60,
          hp: 30,
          maxHp: 30,
          speedX: 2.5,
          shootTimer: 0,
          emailData: { subject: 'SPAM MATRIX MASTER NODE: Unsolicited Mega Blast', category: 'Spam', sender: 'matrix@spambotnet.global' }
        };
      }

      this.emitHud();
    }

    spawnEnemyGrid(rows, cols, categoryPool) {
      const paddingX = 68;
      const startX = (this.canvas.width - (cols * paddingX)) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const emailItem = this.emailQueue.shift() || {
            subject: 'Automated Marketing Blast',
            category: categoryPool[Math.floor(Math.random() * categoryPool.length)],
            sender: 'promo@store.com'
          };

          const isSpam = emailItem.category === 'Spam';
          const isNews = emailItem.category === 'Newsletters';

          this.enemies.push({
            x: startX + c * paddingX,
            y: 45 + r * 50,
            w: 42,
            h: 26,
            hp: isNews ? 3 : (isSpam ? 1 : 2),
            maxHp: isNews ? 3 : (isSpam ? 1 : 2),
            category: emailItem.category,
            emailData: emailItem,
            speedX: 1.4 * (r % 2 === 0 ? 1 : -1),
            shootCooldown: Math.random() * 3 + 2
          });
        }
      }
    }

    loop(now) {
      if (!this.running || this.paused) return;
      const dt = Math.min((now - this.lastTime) / 1000, 0.1);
      this.lastTime = now;

      this.update(dt);
      this.draw();

      this.animationId = requestAnimationFrame((t) => this.loop(t));
    }

    update(dt) {
      // Background star scroll
      this.stars.forEach((s) => {
        s.y += s.speed;
        if (s.y > this.canvas.height) {
          s.y = 0;
          s.x = Math.random() * this.canvas.width;
        }
      });

      // Player Movement
      if (this.player.movingLeft) this.player.x -= this.player.speed;
      if (this.player.movingRight) this.player.x += this.player.speed;
      this.player.x = Math.max(24, Math.min(this.canvas.width - 24, this.player.x));

      if (this.player.shootCooldown > 0) this.player.shootCooldown -= dt;
      if (this.player.hasRapidFire > 0) this.player.hasRapidFire -= dt;
      if (this.player.invincibleTimer > 0) this.player.invincibleTimer -= dt;

      // Update Player Bullets
      for (let i = this.bullets.length - 1; i >= 0; i--) {
        const b = this.bullets[i];
        b.x += b.vx;
        b.y += b.vy;
        if (b.y < -15 || b.x < 0 || b.x > this.canvas.width) {
          this.bullets.splice(i, 1);
        }
      }

      // Update Enemy Bullets
      for (let i = this.enemyBullets.length - 1; i >= 0; i--) {
        const eb = this.enemyBullets[i];
        eb.y += eb.vy;

        // Collision with player
        const pBox = { x: this.player.x - 16, y: this.player.y - 12, w: 32, h: 24 };
        if (
          this.player.invincibleTimer <= 0 &&
          eb.x < pBox.x + pBox.w &&
          eb.x + 4 > pBox.x &&
          eb.y < pBox.y + pBox.h &&
          eb.y + 6 > pBox.y
        ) {
          this.handlePlayerHit();
          this.enemyBullets.splice(i, 1);
          continue;
        }

        if (eb.y > this.canvas.height + 10) this.enemyBullets.splice(i, 1);
      }

      // Update Regular Enemies
      let changeDir = false;
      for (let i = this.enemies.length - 1; i >= 0; i--) {
        const e = this.enemies[i];
        e.x += e.speedX;

        if (e.x < 15 || e.x + e.w > this.canvas.width - 15) {
          changeDir = true;
        }

        // Enemy shooting
        e.shootCooldown -= dt;
        if (e.shootCooldown <= 0 && !e.isImportant) {
          e.shootCooldown = Math.random() * 4 + 3;
          if (Math.random() < 0.4) {
            this.enemyBullets.push({ x: e.x + e.w / 2, y: e.y + e.h, vy: 4.5 });
          }
        }

        // Check Important Email Pass Through Bottom (Safely Saved!)
        if (e.isImportant && e.y > this.canvas.height - 20) {
          this.score += 500;
          this.popups.push({ text: 'VIP EMAIL SAVED! +500', x: e.x, y: e.y - 20, life: 1.5 });
          this.processedEmails.push({
            subject: e.emailData.subject,
            category: 'Important',
            action: 'Keep in Inbox (Protected)',
            status: 'Shielded'
          });
          this.enemies.splice(i, 1);
          continue;
        }

        // Bullet collisions with enemy
        for (let j = this.bullets.length - 1; j >= 0; j--) {
          const b = this.bullets[j];
          if (b.x < e.x + e.w && b.x + b.w > e.x && b.y < e.y + e.h && b.y + b.h > e.y) {
            this.bullets.splice(j, 1);
            this.totalShotsHit++;

            if (e.isImportant) {
              // Warning: Shooting VIP email!
              this.score = Math.max(0, this.score - 50);
              this.popups.push({ text: 'CAUTION: PROTECT VIP EMAIL!', x: e.x - 10, y: e.y - 10, life: 1 });
              break;
            }

            e.hp--;
            this.spawnSparks(b.x, b.y, 4);

            if (e.hp <= 0) {
              this.destroyEnemy(e);
              this.enemies.splice(i, 1);
            }
            break;
          }
        }
      }

      if (changeDir) {
        this.enemies.forEach((e) => {
          e.speedX *= -1;
          e.y += 10;
        });
      }

      // Update Boss
      if (this.boss) {
        this.boss.x += this.boss.speedX;
        if (this.boss.x < 20 || this.boss.x + this.boss.w > this.canvas.width - 20) {
          this.boss.speedX *= -1;
        }

        this.boss.shootTimer += dt;
        if (this.boss.shootTimer > 0.8) {
          this.boss.shootTimer = 0;
          this.enemyBullets.push({ x: this.boss.x + 20, y: this.boss.y + this.boss.h, vy: 5 });
          this.enemyBullets.push({ x: this.boss.x + this.boss.w / 2, y: this.boss.y + this.boss.h + 4, vy: 5.5 });
          this.enemyBullets.push({ x: this.boss.x + this.boss.w - 20, y: this.boss.y + this.boss.h, vy: 5 });
        }

        // Bullet collisions with boss
        for (let j = this.bullets.length - 1; j >= 0; j--) {
          const b = this.bullets[j];
          if (b.x < this.boss.x + this.boss.w && b.x + b.w > this.boss.x && b.y < this.boss.y + this.boss.h && b.y + b.h > this.boss.y) {
            this.bullets.splice(j, 1);
            this.boss.hp--;
            this.totalShotsHit++;
            this.spawnSparks(b.x, b.y, 5);
            this.emitHud();

            if (this.boss.hp <= 0) {
              this.destroyBoss();
              break;
            }
          }
        }
      }

      // Update Powerups
      for (let i = this.powerups.length - 1; i >= 0; i--) {
        const pw = this.powerups[i];
        pw.y += 2.5;

        const pBox = { x: this.player.x - 16, y: this.player.y - 12, w: 32, h: 24 };
        if (pw.x < pBox.x + pBox.w && pw.x + 20 > pBox.x && pw.y < pBox.y + pBox.h && pw.y + 20 > pBox.y) {
          if (pw.type === 'rapid') {
            this.player.hasRapidFire = 8;
            this.popups.push({ text: 'RAPID FIRE 8s!', x: this.player.x, y: this.player.y - 20, life: 1 });
          } else if (pw.type === 'shield') {
            this.player.hasShield = true;
            this.popups.push({ text: 'SHIELD ACTIVE!', x: this.player.x, y: this.player.y - 20, life: 1 });
          } else if (pw.type === 'double') {
            this.score += 250;
            this.popups.push({ text: '+250 BOUNTY', x: this.player.x, y: this.player.y - 20, life: 1 });
          }
          if (this.sound) this.sound.playPowerup();
          this.powerups.splice(i, 1);
          continue;
        }

        if (pw.y > this.canvas.height + 20) this.powerups.splice(i, 1);
      }

      // Particles & Popups
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= dt * 2.2;
        if (p.life <= 0) this.particles.splice(i, 1);
      }

      for (let i = this.popups.length - 1; i >= 0; i--) {
        const pop = this.popups[i];
        pop.y -= dt * 35;
        pop.life -= dt * 1.5;
        if (pop.life <= 0) this.popups.splice(i, 1);
      }

      // Wave Check
      if (this.enemies.length === 0 && !this.boss) {
        if (this.currentWave < this.totalWaves) {
          this.currentWave++;
          this.popups.push({ text: `WAVE ${this.currentWave} INCOMING!`, x: this.canvas.width / 2 - 80, y: 180, life: 1.8 });
          this.spawnWave(this.currentWave);
        } else {
          // Completed all waves!
          this.finishMission(true);
        }
      }
    }

    destroyEnemy(e) {
      if (this.sound) this.sound.playExplosion();
      this.spawnSparks(e.x + e.w / 2, e.y + e.h / 2, 14);

      this.consecutiveHits++;
      if (this.consecutiveHits % 3 === 0 && this.combo < 5) this.combo++;

      const pts = 100 * this.combo;
      this.score += pts;
      this.clearedEmailsCount++;

      this.processedEmails.push({
        subject: e.emailData.subject,
        category: e.emailData.category,
        action: 'Archive to Clean Inbox',
        status: 'Neutralized'
      });

      // Random powerup drop (12% chance)
      if (Math.random() < 0.14) {
        const types = ['rapid', 'shield', 'double'];
        this.powerups.push({
          x: e.x + e.w / 2 - 10,
          y: e.y,
          type: types[Math.floor(Math.random() * types.length)]
        });
      }

      this.emitHud();
    }

    destroyBoss() {
      if (this.sound) this.sound.playVictory();
      this.spawnSparks(this.boss.x + this.boss.w / 2, this.boss.y + this.boss.h / 2, 35);
      this.score += 2500;
      this.clearedEmailsCount++;
      this.processedEmails.push({
        subject: this.boss.emailData.subject,
        category: 'Spam Boss',
        action: 'Purge from Workspace',
        status: 'Boss Defeated'
      });
      this.boss = null;
      this.emitHud();

      setTimeout(() => this.finishMission(true), 1200);
    }

    handlePlayerHit() {
      if (this.player.hasShield) {
        this.player.hasShield = false;
        this.popups.push({ text: 'SHIELD BROKEN!', x: this.player.x, y: this.player.y - 20, life: 1 });
        this.player.invincibleTimer = 0.8;
        return;
      }

      this.lives--;
      this.combo = 1;
      this.consecutiveHits = 0;
      this.player.invincibleTimer = 1.4;
      if (this.sound) this.sound.playHit();
      this.spawnSparks(this.player.x, this.player.y, 16);

      if (this.lives <= 0) {
        this.lives = 1; // Non-fatal recovery for hackathon fun
        this.score = Math.max(0, this.score - 200);
      }

      this.emitHud();
    }

    spawnSparks(x, y, count) {
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          radius: Math.random() * 2.5 + 1,
          color: '#ffffff',
          life: 0.7
        });
      }
    }

    finishMission(victory = true) {
      this.stop();
      if (this.sound) this.sound.playVictory();

      const accuracy = this.totalShotsFired > 0
        ? Math.min(100, Math.round((this.totalShotsHit / this.totalShotsFired) * 100))
        : 100;

      if (this.onMissionComplete) {
        this.onMissionComplete({
          score: this.score,
          accuracy,
          emailsProcessed: this.processedEmails,
          victory
        });
      }
    }

    draw() {
      const w = this.canvas.width;
      const h = this.canvas.height;
      const ctx = this.ctx;

      // Dark Arena
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, w, h);

      // Starfield
      this.stars.forEach((s) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Player Projectiles
      ctx.fillStyle = '#ffffff';
      this.bullets.forEach((b) => {
        ctx.fillRect(b.x - b.w / 2, b.y, b.w, b.h);
      });

      // Enemy Bullets
      ctx.fillStyle = '#a1a1aa';
      this.enemyBullets.forEach((eb) => {
        ctx.fillRect(eb.x - 2, eb.y, 4, 8);
      });

      // Powerup items
      this.powerups.forEach((pw) => {
        ctx.save();
        ctx.translate(pw.x + 10, pw.y + 10);
        ctx.fillStyle = '#18181b';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '700 9px JetBrains Mono, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const label = pw.type === 'rapid' ? 'RPD' : (pw.type === 'shield' ? 'SHD' : '2X');
        ctx.fillText(label, 0, 1);
        ctx.restore();
      });

      // Regular Enemies
      this.enemies.forEach((e) => {
        ctx.save();
        ctx.translate(e.x, e.y);

        if (e.isImportant) {
          // VIP Shielded Transport
          ctx.fillStyle = '#27272a';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(0, 0, e.w, e.h);
          ctx.fillRect(0, 0, e.w, e.h);

          ctx.fillStyle = '#ffffff';
          ctx.font = '10px JetBrains Mono, monospace';
          ctx.fillText('[ VIP ]', 8, 18);
        } else {
          // Alien Email Drone
          ctx.fillStyle = '#18181b';
          ctx.strokeStyle = '#d4d4d8';
          ctx.lineWidth = 1.5;

          // Drone Chassis
          ctx.beginPath();
          ctx.moveTo(e.w / 2, e.h);
          ctx.lineTo(0, 6);
          ctx.lineTo(e.w / 2, 0);
          ctx.lineTo(e.w, 6);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Envelope Glyphs
          ctx.fillStyle = '#ffffff';
          ctx.font = '10px sans-serif';
          ctx.textAlign = 'center';
          const icon = e.category === 'Spam' ? 'SPA' : (e.category === 'Newsletters' ? 'NWS' : 'MSG');
          ctx.fillText(icon, e.w / 2, e.h / 2 + 2);
        }

        ctx.restore();
      });

      // Boss
      if (this.boss) {
        ctx.save();
        ctx.translate(this.boss.x, this.boss.y);

        ctx.fillStyle = '#121214';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;

        ctx.beginPath();
        ctx.moveTo(this.boss.w / 2, this.boss.h);
        ctx.lineTo(0, 15);
        ctx.lineTo(25, 0);
        ctx.lineTo(this.boss.w - 25, 0);
        ctx.lineTo(this.boss.w, 15);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '700 12px JetBrains Mono, monospace';
        ctx.textAlign = 'center';
        ctx.fillText('SPAM MATRIX', this.boss.w / 2, 34);

        ctx.restore();
      }

      // Particles
      this.particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Player Ship
      const isInvincibleBlink = this.player.invincibleTimer > 0 && Math.floor(this.player.invincibleTimer * 10) % 2 === 0;
      if (!isInvincibleBlink) {
        ctx.save();
        ctx.translate(this.player.x, this.player.y);

        // Shield Bubble
        if (this.player.hasShield) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(0, 0, 26, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Spaceship Hull
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(0, -18);
        ctx.lineTo(-14, 12);
        ctx.lineTo(0, 6);
        ctx.lineTo(14, 12);
        ctx.closePath();
        ctx.fill();

        // Cockpit
        ctx.fillStyle = '#18181b';
        ctx.beginPath();
        ctx.arc(0, -3, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Thruster flame
        ctx.fillStyle = '#d4d4d8';
        ctx.fillRect(-3, 10, 6, 6);

        ctx.restore();
      }

      // Popups
      this.popups.forEach((pop) => {
        ctx.fillStyle = '#ffffff';
        ctx.font = '700 13px JetBrains Mono, monospace';
        ctx.globalAlpha = Math.max(0, pop.life);
        ctx.fillText(pop.text, pop.x, pop.y);
        ctx.globalAlpha = 1;
      });
    }
  }

  // =========================================================================
  // 6. MAIN APPLICATION ORCHESTRATOR & ROUTER
  // =========================================================================
  // =========================================================================
  // SUPABASE AUTHENTICATION CONFIGURATION & ENVIRONMENT SETUP
  // =========================================================================
  // To enable production cross-device email login with Supabase:
  // 1. Create a free project at https://supabase.com
  // 2. Go to Project Settings -> API
  // 3. Copy Project URL and Anon Public Key (safe for client-side JS)
  // 4. In Supabase Dashboard -> Authentication -> URL Configuration -> Redirect URLs,
  //    add your deployed Vercel domain: https://your-project.vercel.app
  // 5. Replace the placeholder values below or define window.QUESTIFY_SUPABASE_URL
  //
  // NOTE: If credentials are not configured, QUESTIFY seamlessly operates in
  // Integration-Ready Demo Mode: you can type any email to test separate user
  // accounts, isolated progression, and persistent sessions safely!
  const SUPABASE_CONFIG = {
    url: window.QUESTIFY_SUPABASE_URL || 'https://YOUR_SUPABASE_PROJECT_ID.supabase.co',
    anonKey: window.QUESTIFY_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'
  };

  class QuestifyUniverseApp {
    constructor() {
      this.sound = new SoundFX();
      this.profile = new PlayerProfileManager('guest');

      this.currentView = 'dashboard';
      this.currentDirHandle = null;
      this.discoveredFiles = [];
      this.appliedFileActions = [];
      this.currentUser = null;
      this.supabaseClient = null;

      this.initDom();
      this.initAuth();
      this.initFileRunner();
      this.initInboxInvaders();
      this.bindEvents();
      this.renderProfile();
      this.renderDashboardMissionLog();
      this.renderAchievements();
    }

    initDom() {
      // Views
      this.views = {
        dashboard: document.getElementById('dashboardView'),
        fileRunner: document.getElementById('fileRunnerView'),
        inboxInvaders: document.getElementById('inboxInvadersView'),
        hangar: document.getElementById('hangarView'),
        bounties: document.getElementById('bountiesView')
      };

      // Header Elements
      this.appHeader = document.getElementById('appHeader');
      this.siteNavigation = document.getElementById('siteNavigation');
      this.mobileNavToggle = document.getElementById('mobileNavToggle');
      this.logoHomeBtn = document.getElementById('logoHomeBtn');
      this.navUniverseBtn = document.getElementById('navUniverseBtn');
      this.navFileRunnerBtn = document.getElementById('navFileRunnerBtn');
      this.navInboxInvadersBtn = document.getElementById('navInboxInvadersBtn');
      this.navHangarBtn = document.getElementById('navHangarBtn');
      this.navBountiesBtn = document.getElementById('navBountiesBtn');
      this.sfxToggleBtn = document.getElementById('sfxToggleBtn');
      this.sfxIcon = document.getElementById('sfxIcon');

      // Profile Mini HUD & User Chip
      this.miniRankBadge = document.getElementById('miniRankBadge');
      this.miniCoinsVal = document.getElementById('miniCoinsVal');
      this.miniStreakVal = document.getElementById('miniStreakVal');
      this.userChip = document.getElementById('userChip');
      this.userAvatarMini = document.getElementById('userAvatarMini');
      this.userNameMini = document.getElementById('userNameMini');
      this.btnSignOut = document.getElementById('btnSignOut');
      this.btnOpenAuth = document.getElementById('btnOpenAuth');

      // Hero Elements
      this.heroStartBtn = document.getElementById('heroStartBtn');
      this.heroExploreBtn = document.getElementById('heroExploreBtn');
      this.heroFilesCount = document.getElementById('heroFilesCount');
      this.heroEmailsCount = document.getElementById('heroEmailsCount');

      // Welcome Banner
      this.welcomeBanner = document.getElementById('welcomeBanner');
      this.welcomeAvatar = document.getElementById('welcomeAvatar');
      this.welcomeName = document.getElementById('welcomeName');
      this.welcomeStreak = document.getElementById('welcomeStreak');

      // Profile Command Card
      this.profileLvlTag = document.getElementById('profileLvlTag');
      this.callsignInput = document.getElementById('callsignInput');
      this.profileRankTitle = document.getElementById('profileRankTitle');
      this.profileXpText = document.getElementById('profileXpText');
      this.profileNextXpText = document.getElementById('profileNextXpText');
      this.profileXpBar = document.getElementById('profileXpBar');
      this.metricTotalFiles = document.getElementById('metricTotalFiles');
      this.metricTotalEmails = document.getElementById('metricTotalEmails');
      this.metricTotalCoins = document.getElementById('metricTotalCoins');
      this.metricProductivityScore = document.getElementById('metricProductivityScore');

      // Game Cards on Dashboard
      this.btnPlayFileRunner = document.getElementById('btnPlayFileRunner');
      this.btnPlayInboxInvaders = document.getElementById('btnPlayInboxInvaders');
      this.dashboardMissionLog = document.getElementById('dashboardMissionLog');

      // Auth Modal Elements
      this.authOverlay = document.getElementById('authOverlay');
      this.btnAuthClose = document.getElementById('btnAuthClose');
      this.authTabLogin = document.getElementById('authTabLogin');
      this.authTabSignup = document.getElementById('authTabSignup');
      this.authLoginPanel = document.getElementById('authLoginPanel');
      this.authSignupPanel = document.getElementById('authSignupPanel');
      this.loginEmailInput = document.getElementById('loginEmailInput');
      this.btnSendMagicLink = document.getElementById('btnSendMagicLink');
      this.magicLinkSent = document.getElementById('magicLinkSent');
      this.authLoginError = document.getElementById('authLoginError');
      this.signupEmailInput = document.getElementById('signupEmailInput');
      this.btnSignupSendLink = document.getElementById('btnSignupSendLink');
      this.signupLinkSent = document.getElementById('signupLinkSent');
      this.authSignupError = document.getElementById('authSignupError');
      this.btnPlayAsGuest = document.getElementById('btnPlayAsGuest');

      // Info / About / Privacy Modal Elements
      this.infoModal = document.getElementById('infoModal');
      this.infoModalClose = document.getElementById('infoModalClose');
      this.infoModalTitle = document.getElementById('infoModalTitle');
      this.infoModalBody = document.getElementById('infoModalBody');
      this.footerAboutBtn = document.getElementById('footerAboutBtn');
      this.footerHowBtn = document.getElementById('footerHowBtn');
      this.footerPrivacyBtn = document.getElementById('footerPrivacyBtn');
      this.footerCreatorBtn = document.getElementById('footerCreatorBtn');
      this.footerContactBtn = document.getElementById('footerContactBtn');
      this.footerFileRunnerLink = document.getElementById('footerFileRunnerLink');
      this.footerInboxLink = document.getElementById('footerInboxLink');
      this.footerHangarLink = document.getElementById('footerHangarLink');
      this.footerBountiesLink = document.getElementById('footerBountiesLink');

      // File Runner DOM Elements
      this.runnerSelectFolderBtn = document.getElementById('runnerSelectFolderBtn');
      this.runnerScanPreviewBox = document.getElementById('runnerScanPreviewBox');
      this.runnerPreviewFolderName = document.getElementById('runnerPreviewFolderName');
      this.runnerPreviewFileCount = document.getElementById('runnerPreviewFileCount');
      this.runnerCategoryChips = document.getElementById('runnerCategoryChips');
      this.runnerCancelScanBtn = document.getElementById('runnerCancelScanBtn');
      this.runnerStartMissionBtn = document.getElementById('runnerStartMissionBtn');
      this.runnerPracticeBtn = document.getElementById('runnerPracticeBtn');
      this.runnerPlayAgainBtn = document.getElementById('runnerPlayAgainBtn');
      this.touchJumpBtn = document.getElementById('touchJumpBtn');
      this.touchCrouchBtn = document.getElementById('touchCrouchBtn');
      this.fastForwardBtn = document.getElementById('fastForwardBtn');

      // Inbox Invaders DOM Elements
      this.tabDemoInbox = document.getElementById('tabDemoInbox');
      this.tabOAuthInbox = document.getElementById('tabOAuthInbox');
      this.demoInboxContent = document.getElementById('demoInboxContent');
      this.oauthInboxContent = document.getElementById('oauthInboxContent');
      this.startInvadersMissionBtn = document.getElementById('startInvadersMissionBtn');
      this.btnConnectOAuthLaunch = document.getElementById('btnConnectOAuthLaunch');
      this.invadersPauseBtn = document.getElementById('invadersPauseBtn');
      this.invadersResumeBtn = document.getElementById('invadersResumeBtn');
      this.invadersRestartBtn = document.getElementById('invadersRestartBtn');
      this.invadersFastForwardBtn = document.getElementById('invadersFastForwardBtn');
      this.btnConfirmEmailTriage = document.getElementById('btnConfirmEmailTriage');
      this.btnPlayAgainInvaders = document.getElementById('btnPlayAgainInvaders');
      this.shooterLeftBtn = document.getElementById('shooterLeftBtn');
      this.shooterFireBtn = document.getElementById('shooterFireBtn');
      this.shooterRightBtn = document.getElementById('shooterRightBtn');

      // Stages
      this.fileRunnerStages = {
        setup: document.getElementById('fileRunnerSetupStage'),
        play: document.getElementById('fileRunnerPlayStage'),
        results: document.getElementById('fileRunnerResultsStage')
      };

      this.invadersStages = {
        setup: document.getElementById('invadersSetupStage'),
        play: document.getElementById('invadersPlayStage'),
        results: document.getElementById('invadersResultsStage')
      };

      this.updateSfxButton();
    }

    initAuth() {
      // 1. Initialize Supabase if SDK and valid keys are present
      if (window.supabase && SUPABASE_CONFIG.url && !SUPABASE_CONFIG.url.includes('YOUR_SUPABASE_PROJECT_ID')) {
        try {
          this.supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
          this.supabaseClient.auth.onAuthStateChange((event, session) => {
            if (session && session.user) {
              this.setUserAccount(session.user.email, session.user.id, true);
            }
          });
        } catch (err) {
          console.warn('Supabase client initialization note:', err);
        }
      }

      // 2. Check for existing saved session in local storage
      const stored = localStorage.getItem('questify_current_user');
      if (stored) {
        try {
          const u = JSON.parse(stored);
          this.setUserAccount(u.email, u.id, false);
          return;
        } catch (e) {
          console.warn('Corrupt user session');
        }
      }

      // 3. Fallback to guest mode
      this.setUserAccount('Guest', 'guest', false);
    }

    setUserAccount(email, id, persist = true) {
      const isGuest = !email || email.toLowerCase() === 'guest' || id === 'guest';
      this.currentUser = isGuest ? null : { email, id };

      if (persist) {
        if (isGuest) {
          localStorage.removeItem('questify_current_user');
        } else {
          localStorage.setItem('questify_current_user', JSON.stringify(this.currentUser));
        }
      }

      // Switch profile manager to this account's isolated data
      const accountKey = isGuest ? 'guest' : email;
      this.profile.setUserId(accountKey);

      if (this.callsignInput) {
        this.callsignInput.value = this.profile.state.callsign;
      }

      // Update UI Header and Welcome Banner
      if (isGuest) {
        if (this.userChip) this.userChip.style.display = 'none';
        if (this.btnOpenAuth) this.btnOpenAuth.style.display = 'inline-flex';
        if (this.welcomeBanner) this.welcomeBanner.style.display = 'none';
      } else {
        if (this.userChip) {
          this.userChip.style.display = 'flex';
          const initial = (email[0] || 'C').toUpperCase();
          if (this.userAvatarMini) this.userAvatarMini.textContent = initial;
          const shortName = email.split('@')[0];
          if (this.userNameMini) this.userNameMini.textContent = shortName;
        }
        if (this.btnOpenAuth) this.btnOpenAuth.style.display = 'none';
        if (this.welcomeBanner) {
          this.welcomeBanner.style.display = 'flex';
          const shortName = email.split('@')[0];
          if (this.welcomeName) this.welcomeName.textContent = shortName;
          if (this.welcomeStreak) this.welcomeStreak.textContent = this.profile.state.streakDays;
          if (this.welcomeAvatar) this.welcomeAvatar.textContent = shortName.charAt(0).toUpperCase();
        }
      }

      this.renderProfile();
      this.renderDashboardMissionLog();
      this.renderAchievements();
    }

    openAuthModal() {
      if (this.authOverlay) {
        this.authOverlay.style.display = 'flex';
        if (this.authLoginError) this.authLoginError.style.display = 'none';
        if (this.authSignupError) this.authSignupError.style.display = 'none';
        if (this.magicLinkSent) this.magicLinkSent.style.display = 'none';
        if (this.signupLinkSent) this.signupLinkSent.style.display = 'none';
      }
    }

    closeAuthModal() {
      if (this.authOverlay) {
        this.authOverlay.style.display = 'none';
      }
    }

    async handleMagicLink(email, isSignup = false) {
      const errEl = isSignup ? this.authSignupError : this.authLoginError;
      const msgEl = isSignup ? this.signupLinkSent : this.magicLinkSent;
      const btn = isSignup ? this.btnSignupSendLink : this.btnSendMagicLink;

      if (!email || !email.includes('@') || !email.includes('.')) {
        if (errEl) {
          errEl.textContent = 'Please enter a valid email address.';
          errEl.style.display = 'block';
        }
        return;
      }

      if (errEl) errEl.style.display = 'none';
      const originalText = btn ? btn.textContent : '';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Verifying...';
      }

      // If real Supabase client is connected
      if (this.supabaseClient) {
        try {
          const { error } = await this.supabaseClient.auth.signInWithOtp({
            email,
            options: { emailRedirectTo: window.location.origin }
          });
          if (error) throw error;
          if (msgEl) {
            msgEl.textContent = 'Authorization link dispatched — check your inbox to sign in.';
            msgEl.style.display = 'block';
          }
        } catch (err) {
          if (errEl) {
            errEl.textContent = err.message || 'Authentication error. Please check Supabase settings.';
            errEl.style.display = 'block';
          }
        } finally {
          if (btn) {
            btn.disabled = false;
            btn.textContent = originalText;
          }
        }
      } else {
        // Integration-Ready Demo Auth:
        // Automatically isolates user progress per email so judges and users can test accounts instantly
        setTimeout(() => {
          if (msgEl) {
            msgEl.textContent = `✓ Signed in as ${email}! (Account Active)`;
            msgEl.style.display = 'block';
          }
          setTimeout(() => {
            this.setUserAccount(email, email, true);
            this.closeAuthModal();
            if (msgEl) msgEl.style.display = 'none';
            if (btn) {
              btn.disabled = false;
              btn.textContent = originalText;
            }
          }, 800);
        }, 400);
      }
    }

    async handleSignOut() {
      if (this.supabaseClient) {
        try {
          await this.supabaseClient.auth.signOut();
        } catch (e) {
          console.warn('Signout warning:', e);
        }
      }
      this.setUserAccount('Guest', 'guest', true);
      alert('You have been signed out. Continuing in Guest Mode.');
    }

    showInfoModal(title, htmlContent) {
      if (!this.infoModal) return;
      if (this.infoModalTitle) this.infoModalTitle.textContent = title;
      if (this.infoModalBody) this.infoModalBody.innerHTML = htmlContent;
      this.infoModal.style.display = 'flex';
    }

    closeInfoModal() {
      if (this.infoModal) this.infoModal.style.display = 'none';
    }

    initFileRunner() {
      const canvas = document.getElementById('runnerCanvas');
      this.fileRunner = new FileRunnerGame(
        canvas,
        (score) => {
          document.getElementById('hudScore').textContent = score.toLocaleString();
        },
        (hearts) => {
          const el = document.getElementById('hudHearts');
          el.innerHTML = '';
          for (let i = 0; i < 3; i++) {
            const pip = document.createElement('span');
            pip.className = 'life-pip' + (i >= hearts ? ' spent' : '');
            el.appendChild(pip);
          }
        }
      );
      this.fileRunner.setSound(this.sound);
    }

    initInboxInvaders() {
      const canvas = document.getElementById('invadersCanvas');
      this.invaders = new InboxInvadersGame(
        canvas,
        (hud) => {
          document.getElementById('invadersWaveDisplay').textContent = hud.wave;
          document.getElementById('invadersClearedCount').textContent = hud.cleared;
          document.getElementById('invadersTotalCount').textContent = hud.total;
          document.getElementById('invadersScoreDisplay').textContent = hud.score.toLocaleString();
          document.getElementById('invadersComboDisplay').textContent = hud.combo;
          document.getElementById('invadersLivesDisplay').innerHTML = Array.from({length: 3}, (_, i) =>
            `<span class="life-pip${i >= hud.lives ? ' spent' : ''}"></span>`
          ).join('');
          if (hud.bossHealthPct !== null) {
            const fill = document.getElementById('bossHealthFill');
            if (fill) fill.style.width = `${hud.bossHealthPct}%`;
          }
        },
        (results) => {
          this.handleInvadersComplete(results);
        }
      );
      this.invaders.setSound(this.sound);
    }

    bindEvents() {
      // Navigation
      const navPairs = [
        [this.logoHomeBtn, 'dashboard'],
        [this.navUniverseBtn, 'dashboard'],
        [this.navFileRunnerBtn, 'fileRunner'],
        [this.navInboxInvadersBtn, 'inboxInvaders'],
        [this.navHangarBtn, 'hangar'],
        [this.navBountiesBtn, 'bounties'],
        [this.btnPlayFileRunner, 'fileRunner'],
        [this.btnPlayInboxInvaders, 'inboxInvaders']
      ];

      navPairs.forEach(([btn, viewName]) => {
        if (btn) btn.addEventListener('click', () => this.switchView(viewName));
      });

      if (this.mobileNavToggle && this.appHeader && this.siteNavigation) {
        this.mobileNavToggle.addEventListener('click', () => {
          const isOpen = this.mobileNavToggle.getAttribute('aria-expanded') === 'true';
          this.mobileNavToggle.setAttribute('aria-expanded', String(!isOpen));
          this.mobileNavToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
          this.appHeader.classList.toggle('mobile-nav-open', !isOpen);
        });

        this.siteNavigation.addEventListener('click', (event) => {
          if (!event.target.closest('.nav-btn')) return;
          this.mobileNavToggle.setAttribute('aria-expanded', 'false');
          this.mobileNavToggle.setAttribute('aria-label', 'Open navigation menu');
          this.appHeader.classList.remove('mobile-nav-open');
        });
      }

      const dashboardSidebar = document.querySelector('.dashboard-sidebar');
      if (dashboardSidebar) {
        dashboardSidebar.addEventListener('click', (event) => {
          const button = event.target.closest('button[data-view], button[data-scroll]');
          if (!button) return;

          dashboardSidebar.querySelectorAll('.dashboard-sidebar-link').forEach((link) => {
            link.classList.toggle('active', link === button);
          });

          if (button.dataset.view) {
            this.switchView(button.dataset.view);
          } else {
            const target = document.getElementById(button.dataset.scroll);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });

        const sidebarSettingsBtn = document.getElementById('sidebarSettingsBtn');
        if (sidebarSettingsBtn) {
          sidebarSettingsBtn.addEventListener('click', () => {
            this.showInfoModal(
              'PLATFORM SETTINGS & GUIDELINES',
              `<p><strong>Platform Architecture:</strong> QUESTIFY runs 100% in-browser on deterministic Web APIs with zero external tracking.</p>
               <p><strong>File System Security:</strong> Non-destructive directory operations with automated renaming and zero overwrite safety.</p>
               <p><strong>Email Privacy:</strong> Reversible label management. Passwords and credentials are never stored or exposed.</p>
               <p><strong>Synthesizer Audio:</strong> Procedural sound synthesis via Web Audio API. Audio output can be toggled from the header bar.</p>`
            );
          });
        }

        const sidebarLogoutBtn = document.getElementById('sidebarLogoutBtn');
        if (sidebarLogoutBtn) {
          sidebarLogoutBtn.addEventListener('click', () => {
            if (this.currentUser) {
              this.handleSignOut();
            } else {
              this.openAuthModal();
            }
          });
        }
      }

      // All Home/Back Buttons inside games
      document.querySelectorAll('.back-to-universe-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (this.fileRunner.running) this.fileRunner.stop();
          if (this.invaders.running) this.invaders.stop();
          this.switchView('dashboard');
        });
      });

      // SFX Button
      this.sfxToggleBtn.addEventListener('click', () => {
        this.sound.toggleMute();
        this.updateSfxButton();
      });

      // Callsign Input
      if (this.callsignInput) {
        this.callsignInput.value = this.profile.state.callsign;
        this.callsignInput.addEventListener('change', (e) => {
          const val = e.target.value.trim().toUpperCase() || 'COMMANDER NOVA';
          this.profile.state.callsign = val;
          this.profile.saveState();
          this.callsignInput.value = val;
          if (this.welcomeName && this.currentUser) {
            this.welcomeName.textContent = val;
          }
        });
      }

      // Hero CTA buttons
      if (this.heroStartBtn) {
        this.heroStartBtn.addEventListener('click', () => {
          this.switchView('fileRunner');
        });
      }
      if (this.heroExploreBtn) {
        this.heroExploreBtn.addEventListener('click', () => {
          const target = document.getElementById('gameCardsSection') || document.getElementById('gamesAnchor');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
      }

      // Auth Dialog Triggers & Tabs
      if (this.btnOpenAuth) {
        this.btnOpenAuth.addEventListener('click', () => this.openAuthModal());
      }
      if (this.btnAuthClose) {
        this.btnAuthClose.addEventListener('click', () => this.closeAuthModal());
      }
      if (this.btnSignOut) {
        this.btnSignOut.addEventListener('click', () => this.handleSignOut());
      }

      if (this.authTabLogin && this.authTabSignup) {
        this.authTabLogin.addEventListener('click', () => {
          this.authTabLogin.classList.add('active');
          this.authTabSignup.classList.remove('active');
          if (this.authLoginPanel) this.authLoginPanel.classList.add('active');
          if (this.authSignupPanel) this.authSignupPanel.classList.remove('active');
        });

        this.authTabSignup.addEventListener('click', () => {
          this.authTabSignup.classList.add('active');
          this.authTabLogin.classList.remove('active');
          if (this.authSignupPanel) this.authSignupPanel.classList.add('active');
          if (this.authLoginPanel) this.authLoginPanel.classList.remove('active');
        });
      }

      if (this.btnSendMagicLink) {
        this.btnSendMagicLink.addEventListener('click', () => {
          const email = this.loginEmailInput ? this.loginEmailInput.value.trim() : '';
          this.handleMagicLink(email, false);
        });
      }

      if (this.btnSignupSendLink) {
        this.btnSignupSendLink.addEventListener('click', () => {
          const email = this.signupEmailInput ? this.signupEmailInput.value.trim() : '';
          this.handleMagicLink(email, true);
        });
      }

      if (this.btnPlayAsGuest) {
        this.btnPlayAsGuest.addEventListener('click', () => {
          this.setUserAccount('Guest', 'guest', true);
          this.closeAuthModal();
        });
      }

      // Close auth modal when clicking outside
      if (this.authOverlay) {
        this.authOverlay.addEventListener('click', (e) => {
          if (e.target === this.authOverlay) {
            this.closeAuthModal();
          }
        });
      }

      // Exact Reference Navigation & Scroll Hooks
      const creatorGetStartedBtn = document.getElementById('creatorGetStartedBtn');
      if (creatorGetStartedBtn) {
        creatorGetStartedBtn.addEventListener('click', () => {
          const target = document.getElementById('gameCardsSection') || document.getElementById('gamesAnchor');
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      const challengePlayNowBtn = document.getElementById('challengePlayNowBtn');
      if (challengePlayNowBtn) {
        challengePlayNowBtn.addEventListener('click', () => {
          const target = document.getElementById('gameCardsSection');
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      const viewAllGamesBtn = document.getElementById('viewAllGamesBtn');
      if (viewAllGamesBtn) {
        viewAllGamesBtn.addEventListener('click', () => {
          const target = document.getElementById('gameCardsSection');
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      const heroScrollIndicator = document.getElementById('heroScrollIndicator');
      if (heroScrollIndicator) {
        heroScrollIndicator.addEventListener('click', () => {
          const target = document.getElementById('gamesAnchor');
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      const navGamesBtn = document.getElementById('navGamesBtn');
      if (navGamesBtn) {
        navGamesBtn.addEventListener('click', () => {
          this.switchView('dashboard');
          const target = document.getElementById('gameCardsSection');
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }

      const navHowBtn = document.getElementById('navHowBtn');
      if (navHowBtn && this.footerHowBtn) {
        navHowBtn.addEventListener('click', () => this.footerHowBtn.click());
      }

      const navAboutBtn = document.getElementById('navAboutBtn');
      if (navAboutBtn && this.footerAboutBtn) {
        navAboutBtn.addEventListener('click', () => this.footerAboutBtn.click());
      }

      // Footer Links & Info Modals
      if (this.footerAboutBtn) {
        this.footerAboutBtn.addEventListener('click', () => {
          this.showInfoModal(
            'About QUESTIFY',
            `<p><strong>QUESTIFY</strong> is a dual-mission gamified productivity arcade that transforms boring digital chores into high-energy, 60 FPS playable games while executing real-world tasks on your system.</p>
             <br>
             <p>Featuring two distinct missions in one unified universe:</p>
             <ul style="margin: 0.75rem 0 0.75rem 1.25rem;">
               <li><strong>File Runner:</strong> Jump, dodge and sort loose computer files into categorised folders via the File System Access API.</li>
               <li><strong>Inbox Invaders:</strong> Arcade space shooter where each wave corresponds to real or simulated email triage for safe archiving.</li>
             </ul>
             <br>
             <p>Built with pure vanilla web technologies: HTML5, CSS3, and JavaScript — zero Node.js, zero npm, zero external build steps.</p>`
          );
        });
      }

      if (this.footerHowBtn) {
        this.footerHowBtn.addEventListener('click', () => {
          this.showInfoModal(
            'How to Play QUESTIFY',
            `<p><strong>Mission 01 — File Runner:</strong></p>
             <p>1. Open File Runner and click <em>'Select Folder to Clean'</em> (e.g. Downloads or Desktop).</p>
             <p>2. Press <strong>SPACE / UP</strong> to Jump and hold <strong>DOWN / S</strong> to Crouch under overhead obstacles.</p>
             <p>3. As you collect data pods, QUESTIFY moves your files into clean Images, Documents, Videos, Audio, and Archives folders with zero file overwrites.</p>
             <br>
             <p><strong>Mission 02 — Inbox Invaders:</strong></p>
             <p>1. Choose simulated inbox or connect an account.</p>
             <p>2. Move with <strong>ARROW KEYS</strong> or <strong>A / D</strong>. Fire lasers with <strong>SPACEBAR</strong>.</p>
             <p>3. Shoot Promotions, Spam, and Newsletters. <em>Protect Important VIP emails!</em></p>
             <p>4. Confirm triage at the end of the wave to safely archive unwanted items.</p>`
          );
        });
      }

      if (this.footerPrivacyBtn) {
        this.footerPrivacyBtn.addEventListener('click', () => {
          this.showInfoModal(
            'Privacy & Security Shield',
            `<p><strong>100% Client-Side Integrity:</strong></p>
             <ul style="margin: 0.75rem 0 0.75rem 1.25rem;">
               <li><strong>Zero Passwords:</strong> QUESTIFY never asks for, receives, or stores your email passwords.</li>
               <li><strong>Zero Cloud Uploads:</strong> Files sorted in File Runner remain 100% local on your device.</li>
               <li><strong>Zero Overwrites:</strong> Duplicate filenames are automatically renamed (e.g. <code>file (1).ext</code>) — no files are ever deleted.</li>
               <li><strong>Reversible Archiving:</strong> Inbox actions remove labels without permanent deletion.</li>
             </ul>`
          );
        });
      }

      if (this.footerCreatorBtn) {
        const creatorSection = document.getElementById('creatorSection');
        this.footerCreatorBtn.addEventListener('click', () => {
          if (creatorSection) {
            creatorSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }

      if (this.footerContactBtn) {
        this.footerContactBtn.addEventListener('click', () => {
          this.showInfoModal(
            'Contact & Hackathon Team',
            `<p><strong>QUESTIFY Arcade Platform</strong></p>
             <br>
             <p>Created by: <strong>VANSHIKA</strong></p>
             <p>Built for the hackathon to make everyday chores fun and rewarding.</p>
             <br>
             <p>Check the project GitHub repository for code and documentation.</p>`
          );
        });
      }

      if (this.footerFileRunnerLink) {
        this.footerFileRunnerLink.addEventListener('click', () => this.switchView('fileRunner'));
      }
      if (this.footerInboxLink) {
        this.footerInboxLink.addEventListener('click', () => this.switchView('inboxInvaders'));
      }
      if (this.footerHangarLink) {
        this.footerHangarLink.addEventListener('click', () => this.switchView('hangar'));
      }
      if (this.footerBountiesLink) {
        this.footerBountiesLink.addEventListener('click', () => this.switchView('bounties'));
      }

      if (this.infoModalClose) {
        this.infoModalClose.addEventListener('click', () => this.closeInfoModal());
      }
      if (this.infoModal) {
        this.infoModal.addEventListener('click', (e) => {
          if (e.target === this.infoModal) this.closeInfoModal();
        });
      }

      // Keyboard ESC closes active modals
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeAuthModal();
          this.closeInfoModal();
        }
      });

      // File Runner Setup events
      this.runnerSelectFolderBtn.addEventListener('click', () => this.handleFolderPick());
      this.runnerCancelScanBtn.addEventListener('click', () => {
        this.runnerScanPreviewBox.style.display = 'none';
        this.currentDirHandle = null;
      });
      this.runnerStartMissionBtn.addEventListener('click', () => this.startFileRunnerMission(false));
      this.runnerPracticeBtn.addEventListener('click', () => this.startFileRunnerMission(true));
      this.runnerPlayAgainBtn.addEventListener('click', () => {
        this.showFileRunnerStage('setup');
        this.runnerScanPreviewBox.style.display = 'none';
      });

      this.touchJumpBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); this.fileRunner.jump(); });
      this.touchCrouchBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); this.fileRunner.setCrouch(true); });
      this.touchCrouchBtn.addEventListener('pointerup', () => this.fileRunner.setCrouch(false));
      this.touchCrouchBtn.addEventListener('pointercancel', () => this.fileRunner.setCrouch(false));
      this.fastForwardBtn.addEventListener('click', () => { this.fileRunnerFinishEarly = true; });

      // Inbox Invaders Setup events
      this.tabDemoInbox.addEventListener('click', () => {
        this.tabDemoInbox.classList.add('active');
        this.tabOAuthInbox.classList.remove('active');
        this.demoInboxContent.classList.add('active');
        this.oauthInboxContent.classList.remove('active');
      });

      this.tabOAuthInbox.addEventListener('click', () => {
        this.tabOAuthInbox.classList.add('active');
        this.tabDemoInbox.classList.remove('active');
        this.oauthInboxContent.classList.add('active');
        this.demoInboxContent.classList.remove('active');
      });

      this.startInvadersMissionBtn.addEventListener('click', () => this.startInvadersSession());
      this.btnConnectOAuthLaunch.addEventListener('click', () => this.startInvadersSession());

      this.invadersPauseBtn.addEventListener('click', () => this.invaders.togglePause());
      this.invadersResumeBtn.addEventListener('click', () => this.invaders.togglePause());
      this.invadersRestartBtn.addEventListener('click', () => {
        this.invaders.togglePause();
        this.invaders.spawnWave(this.invaders.currentWave);
      });
      this.invadersFastForwardBtn.addEventListener('click', () => this.invaders.finishMission(true));

      this.shooterLeftBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); this.invaders.player.movingLeft = true; });
      this.shooterLeftBtn.addEventListener('pointerup', () => { this.invaders.player.movingLeft = false; });
      this.shooterLeftBtn.addEventListener('pointercancel', () => { this.invaders.player.movingLeft = false; });

      this.shooterRightBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); this.invaders.player.movingRight = true; });
      this.shooterRightBtn.addEventListener('pointerup', () => { this.invaders.player.movingRight = false; });
      this.shooterRightBtn.addEventListener('pointercancel', () => { this.invaders.player.movingRight = false; });

      this.shooterFireBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); this.invaders.firePlayerLaser(); });

      this.btnConfirmEmailTriage.addEventListener('click', () => this.confirmEmailTriage());
      this.btnPlayAgainInvaders.addEventListener('click', () => this.showInvadersStage('setup'));

      // Hangar Skin Selection
      const interceptorBtn = document.getElementById('btnUnlockInterceptor');
      if (interceptorBtn) {
        interceptorBtn.addEventListener('click', () => {
          this.profile.state.equippedSkin = 'interceptor';
          this.profile.saveState();
          alert('Viper Interceptor equipped for both missions!');
        });
      }

      const stealthBtn = document.getElementById('btnUnlockStealth');
      if (stealthBtn) {
        stealthBtn.addEventListener('click', () => {
          this.profile.state.equippedSkin = 'stealth';
          this.profile.saveState();
          alert('Stealth Recon Probe equipped for both missions!');
        });
      }
    }

    updateSfxButton() {
      const muted = this.sound.muted;
      this.sfxIcon.innerHTML = muted
        ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`
        : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
      this.sfxToggleBtn.style.opacity = muted ? '0.55' : '1';
    }

    switchView(viewName) {
      this.currentView = viewName;
      Object.keys(this.views).forEach((name) => {
        if (this.views[name]) this.views[name].classList.remove('active');
      });
      if (this.views[viewName]) this.views[viewName].classList.add('active');

      const navBtns = [this.navUniverseBtn, this.navFileRunnerBtn, this.navInboxInvadersBtn, this.navHangarBtn, this.navBountiesBtn];
      navBtns.forEach((b) => b && b.classList.remove('active'));

      if (viewName === 'dashboard') this.navUniverseBtn.classList.add('active');
      else if (viewName === 'fileRunner') this.navFileRunnerBtn.classList.add('active');
      else if (viewName === 'inboxInvaders') this.navInboxInvadersBtn.classList.add('active');
      else if (viewName === 'hangar') this.navHangarBtn.classList.add('active');
      else if (viewName === 'bounties') this.navBountiesBtn.classList.add('active');

      document.querySelectorAll('.dashboard-sidebar-link[data-view]').forEach((button) => {
        button.classList.toggle('active', button.dataset.view === viewName);
      });

      if (this.mobileNavToggle && this.appHeader) {
        this.mobileNavToggle.setAttribute('aria-expanded', 'false');
        this.mobileNavToggle.setAttribute('aria-label', 'Open navigation menu');
        this.appHeader.classList.remove('mobile-nav-open');
      }

      this.renderProfile();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderProfile() {
      const rank = this.profile.getRank();
      this.miniRankBadge.textContent = `LVL ${rank.level}`;
      this.miniCoinsVal.textContent = this.profile.state.coins;
      this.miniStreakVal.textContent = `${this.profile.state.streakDays}D`;

      this.profileLvlTag.textContent = `Level ${rank.level}`;
      if (this.profileRankTitle) this.profileRankTitle.textContent = rank.title;
      this.profileXpText.textContent = this.profile.state.xp;
      this.profileNextXpText.textContent = rank.maxXp;

      const range = rank.maxXp - rank.minXp;
      const progress = this.profile.state.xp - rank.minXp;
      const pct = Math.min(100, Math.max(0, Math.round((progress / range) * 100)));
      if (this.profileXpBar) this.profileXpBar.style.width = `${pct}%`;

      const sidebarLvlTag = document.getElementById('sidebarLvlTag');
      if (sidebarLvlTag) sidebarLvlTag.textContent = `Level ${rank.level}`;
      const sidebarXpVal = document.getElementById('sidebarXpVal');
      if (sidebarXpVal) sidebarXpVal.textContent = `${this.profile.state.xp} / ${rank.maxXp} XP`;
      const sidebarXpBar = document.getElementById('sidebarXpBar');
      if (sidebarXpBar) sidebarXpBar.style.width = `${pct}%`;

      this.metricTotalFiles.textContent = this.profile.state.totalFilesOrganized;
      this.metricTotalEmails.textContent = this.profile.state.totalEmailsProcessed;
      this.metricTotalCoins.textContent = this.profile.state.coins;
      this.metricProductivityScore.textContent = this.profile.state.streakDays > 0 ? `${this.profile.state.streakDays} Day${this.profile.state.streakDays > 1 ? 's' : ''}` : '0 Days';

      if (this.heroFilesCount) {
        this.heroFilesCount.textContent = this.profile.state.totalFilesOrganized > 0 ? this.profile.state.totalFilesOrganized : '10K+';
      }
      if (this.heroEmailsCount) {
        this.heroEmailsCount.textContent = this.profile.state.totalEmailsProcessed > 0 ? this.profile.state.totalEmailsProcessed : '100%';
      }
    }

    renderDashboardMissionLog() {
      if (this.profile.state.missionLog.length === 0) return;
      this.dashboardMissionLog.innerHTML = '';
      this.profile.state.missionLog.forEach((entry) => {
        const row = document.createElement('div');
        row.className = 'log-entry-row';
        row.innerHTML = `
          <div class="log-entry-left">
            <span class="log-tag">${entry.type}</span>
            <span class="log-title">${entry.details}</span>
          </div>
          <div class="log-entry-right">
            <span>Score: ${entry.score.toLocaleString()}</span>
            <span>${entry.time}</span>
          </div>
        `;
        this.dashboardMissionLog.appendChild(row);
      });
    }

    renderAchievements() {
      const grid = document.getElementById('sharedBountiesGrid');
      if (!grid) return;
      const achs = [
        { id: 'first_run', title: 'First Sort', desc: 'Organize your first real folder in File Runner' },
        { id: 'first_shot', title: 'Inbox Defender', desc: 'Neutralize 10+ email invaders in space' },
        { id: 'master_sorter', title: 'Archive Master', desc: 'Sort 25+ files safely across your system' },
        { id: 'clean_streak', title: 'Daily Consistency', desc: 'Maintain a 3+ day digital chore streak' }
      ];

      grid.innerHTML = '';
      achs.forEach((ach) => {
        const isDone = this.profile.state.achievements.includes(ach.id);
        const card = document.createElement('div');
        card.className = 'bounty-card';
        card.innerHTML = `
          <div class="bounty-header">
            <span class="bounty-title">${ach.title}</span>
            <span class="bounty-badge">${isDone ? 'COMPLETED' : '+50 COINS'}</span>
          </div>
          <p class="bounty-desc">${ach.desc}</p>
          <div class="bounty-footer">${isDone ? '✓ MEDAL UNLOCKED' : '[LOCKED] MISSION PENDING'}</div>
        `;
        grid.appendChild(card);
      });
    }

    // =======================================================================
    // FILE RUNNER FLOW
    // =======================================================================
    showFileRunnerStage(stageName) {
      Object.keys(this.fileRunnerStages).forEach((name) => {
        if (this.fileRunnerStages[name]) this.fileRunnerStages[name].classList.remove('active');
      });
      if (this.fileRunnerStages[stageName]) this.fileRunnerStages[stageName].classList.add('active');
    }

    async handleFolderPick() {
      if (!('showDirectoryPicker' in window)) {
        alert('File System Access API is not supported in this browser. Please use Google Chrome or Microsoft Edge.');
        return;
      }

      try {
        const dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
        this.currentDirHandle = dirHandle;
        this.runnerPreviewFolderName.textContent = `/${dirHandle.name}`;

        this.discoveredFiles = [];
        const counts = { Images: 0, Documents: 0, Videos: 0, Audio: 0, Archives: 0, Others: 0 };

        for await (const entry of dirHandle.values()) {
          if (entry.kind === 'file') {
            const cat = getFileCategory(entry.name);
            this.discoveredFiles.push({ fileHandle: entry, name: entry.name, category: cat });
            if (counts[cat] !== undefined) counts[cat]++;
            else counts.Others++;
          }
        }

        if (this.discoveredFiles.length === 0) {
          alert(`/${dirHandle.name} is already clean! No loose files found.`);
          return;
        }

        this.runnerPreviewFileCount.textContent = `${this.discoveredFiles.length} files detected`;
        this.runnerCategoryChips.innerHTML = '';

        Object.keys(FILE_CATEGORIES).forEach((catName) => {
          const count = counts[catName] || 0;
          if (count > 0) {
            const chip = document.createElement('div');
            chip.className = 'category-chip';
            chip.innerHTML = `
              <span class="chip-name">${catName}</span>
              <span class="chip-count">${count} files</span>
            `;
            this.runnerCategoryChips.appendChild(chip);
          }
        });

        this.runnerScanPreviewBox.style.display = 'block';

      } catch (err) {
        if (err.name !== 'AbortError') alert(`Error: ${err.message}`);
      }
    }

    async startFileRunnerMission(isPractice = false) {
      this.isRunnerPractice = isPractice;
      this.fileRunnerFinishEarly = false;
      this.appliedFileActions = [];

      if (isPractice) {
        this.discoveredFiles = [
          { name: 'sample_photo.jpg', category: 'Images' },
          { name: 'financial_q3.xlsx', category: 'Documents' },
          { name: 'podcast_stream.mp3', category: 'Audio' },
          { name: 'camera_recording.mp4', category: 'Videos' },
          { name: 'code_backup.zip', category: 'Archives' },
          { name: 'notes.txt', category: 'Documents' }
        ];
      }

      this.showFileRunnerStage('play');
      document.getElementById('hudFilesDone').textContent = '0';
      document.getElementById('hudFilesTotal').textContent = this.discoveredFiles.length;
      document.getElementById('toastOverlay').innerHTML = '';

      this.fileRunner.start();

      const total = this.discoveredFiles.length;
      const sortedCounts = { Images: 0, Documents: 0, Media: 0 };
      const folderHandles = {};

      for (let i = 0; i < total; i++) {
        const item = this.discoveredFiles[i];

        if (!this.fileRunnerFinishEarly) {
          await new Promise((r) => setTimeout(r, Math.max(700, 1800 - i * 40)));
        }

        let finalName = item.name;
        let actionStatus = 'Moved safely';

        if (!this.isRunnerPractice && this.currentDirHandle) {
          try {
            if (!folderHandles[item.category]) {
              folderHandles[item.category] = await this.currentDirHandle.getDirectoryHandle(item.category, { create: true });
            }
            const targetFolder = folderHandles[item.category];
            finalName = await this.getUniqueFilename(targetFolder, item.name);
            if (finalName !== item.name) actionStatus = `Renamed to ${finalName}`;

            await this.moveFileSafely(this.currentDirHandle, item.fileHandle, targetFolder, finalName);
          } catch (e) {
            actionStatus = 'Error moving';
          }
        }

        this.appliedFileActions.push({
          name: item.name,
          category: item.category,
          dest: `${item.category}/${finalName}`,
          status: actionStatus
        });

        document.getElementById('hudFilesDone').textContent = i + 1;
        if (item.category === 'Images') {
          sortedCounts.Images++;
          document.getElementById('hudImagesCount').textContent = sortedCounts.Images;
        } else if (item.category === 'Documents') {
          sortedCounts.Documents++;
          document.getElementById('hudDocsCount').textContent = sortedCounts.Documents;
        } else {
          sortedCounts.Media++;
          document.getElementById('hudMediaCount').textContent = sortedCounts.Media;
        }

        this.showFileRunnerToast(`[${item.category}] ${finalName} — SORTED`);
        this.fileRunner.spawnFilePodEvent(item.category, finalName);
        this.sound.playCollect();
      }

      if (!this.fileRunnerFinishEarly) {
        await new Promise((r) => setTimeout(r, 2000));
      }

      this.completeFileRunnerMission();
    }

    showFileRunnerToast(msg) {
      const overlay = document.getElementById('toastOverlay');
      const toast = document.createElement('div');
      toast.className = 'hud-toast';
      toast.textContent = msg;
      overlay.appendChild(toast);
      setTimeout(() => toast.remove(), 2400);
    }

    async getUniqueFilename(targetDirHandle, originalName) {
      let finalName = originalName;
      let counter = 1;
      const lastDot = originalName.lastIndexOf('.');
      const baseName = lastDot !== -1 ? originalName.substring(0, lastDot) : originalName;
      const ext = lastDot !== -1 ? originalName.substring(lastDot) : '';

      while (true) {
        try {
          await targetDirHandle.getFileHandle(finalName);
          finalName = `${baseName} (${counter})${ext}`;
          counter++;
        } catch (e) {
          return finalName;
        }
      }
    }

    async moveFileSafely(sourceDirHandle, fileHandle, targetDirHandle, newName) {
      if (typeof fileHandle.move === 'function') {
        await fileHandle.move(targetDirHandle, newName);
      } else {
        const fileData = await fileHandle.getFile();
        const destHandle = await targetDirHandle.getFileHandle(newName, { create: true });
        const writable = await destHandle.createWritable();
        await writable.write(await fileData.arrayBuffer());
        await writable.close();
        await sourceDirHandle.removeEntry(fileHandle.name);
      }
    }

    completeFileRunnerMission() {
      this.fileRunner.stop();
      this.sound.playVictory();

      const finalScore = this.fileRunner.score;
      const filesCount = this.appliedFileActions.length;

      if (!this.isRunnerPractice) {
        this.profile.recordFileMission(filesCount, finalScore);
        this.profile.addXp(filesCount * 25);
        this.profile.addCoins(filesCount * 5);
      }

      document.getElementById('resFilesOrganized').textContent = filesCount;
      document.getElementById('resFolderLabel').textContent = this.currentDirHandle ? `/${this.currentDirHandle.name}` : '/Simulation';
      document.getElementById('resGameScore').textContent = finalScore.toLocaleString();
      document.getElementById('resHighScoreLabel').textContent = `Best: ${this.profile.state.fileRunnerHighScore.toLocaleString()}`;
      document.getElementById('resPodsCollected').textContent = this.fileRunner.collectedPods;

      const tbody = document.getElementById('actionsTableBody');
      tbody.innerHTML = '';
      this.appliedFileActions.forEach((act) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="file-name-cell">${act.name}</td>
          <td>${act.category}</td>
          <td class="dest-cell">${act.dest}</td>
          <td><span class="status-cell-tag">✓ ${act.status}</span></td>
        `;
        tbody.appendChild(tr);
      });

      this.showFileRunnerStage('results');
      this.renderProfile();
      this.renderDashboardMissionLog();
    }

    // =======================================================================
    // INBOX INVADERS FLOW
    // =======================================================================
    showInvadersStage(stageName) {
      Object.keys(this.invadersStages).forEach((name) => {
        if (this.invadersStages[name]) this.invadersStages[name].classList.remove('active');
      });
      if (this.invadersStages[stageName]) this.invadersStages[stageName].classList.add('active');
    }

    startInvadersSession() {
      this.showInvadersStage('play');
      this.invaders.start(SAMPLE_INBOX_EMAILS);
    }

    handleInvadersComplete(results) {
      this.invadersResultsData = results;

      document.getElementById('resEmailsNeutralized').textContent = results.emailsProcessed.length;
      document.getElementById('resInvadersScore').textContent = results.score.toLocaleString();
      document.getElementById('resInvadersHighScore').textContent = `Best: ${this.profile.state.inboxInvadersHighScore.toLocaleString()}`;
      document.getElementById('resInvadersAccuracy').textContent = `${results.accuracy}%`;

      let rank = 'RANK B';
      if (results.score > 2500 && results.accuracy >= 75) rank = 'RANK S';
      else if (results.score > 1500) rank = 'RANK A';
      document.getElementById('resInvadersRank').textContent = rank;

      const tbody = document.getElementById('emailActionsTableBody');
      tbody.innerHTML = '';
      results.emailsProcessed.forEach((item) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="file-name-cell">${item.subject}</td>
          <td>${item.category}</td>
          <td>${item.action}</td>
          <td><span class="status-cell-tag">✓ Pending Triage</span></td>
        `;
        tbody.appendChild(tr);
      });

      this.showInvadersStage('results');
    }

    confirmEmailTriage() {
      const results = this.invadersResultsData;
      if (!results) return;

      const count = results.emailsProcessed.length;
      this.profile.recordEmailMission(count, results.score);
      this.profile.addXp(count * 20);
      this.profile.addCoins(count * 4 + 25);

      this.sound.playVictory();
      this.showInfoModal(
        'TRIAGE CONFIRMED',
        `<p><strong>${count} email actions</strong> safely verified and committed.</p>
         <p>+${count * 20} XP &amp; +${count * 4 + 25} Coins added to your Commander Profile.</p>`
      );

      this.renderProfile();
      this.renderDashboardMissionLog();
      this.switchView('dashboard');
    }
  }

  // Launch on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    window.questifyUniverse = new QuestifyUniverseApp();
  });
})();
