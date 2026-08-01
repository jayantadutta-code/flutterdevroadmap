// Game Engine & Parallax Road Renderer

class GameEngine {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');

    this.car = {
      x: 100,
      y: 0,
      lane: 1, // 0: top, 1: middle, 2: bottom
      targetY: 0,
      speed: 0,
      maxSpeed: 14,
      acceleration: 0.25,
      friction: 0.96,
      width: 80,
      height: 42,
      boost: false,
      angle: 0,
      wheelsAngle: 0
    };

    this.roadTotalLength = 18500;
    this.controls = {
      up: false,
      down: false,
      left: false,
      right: false,
      gas: false,
      brake: false,
      boost: false
    };

    this.isAutoDrive = true; // Enabled by default so visitor gets an immediate guided tour!
    this.xpScore = 0;
    this.gems = [];
    this.particles = [];
    this.lastTriggeredMilestone = -1;

    this.initCanvasSize();
    this.generateGems();
    this.setupInputs();

    window.addEventListener('resize', () => this.initCanvasSize());
  }

  initCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.roadY = this.canvas.height * 0.65;
    this.laneHeight = 40;
    this.car.y = this.roadY + (this.car.lane * this.laneHeight);
    this.car.targetY = this.car.y;
  }

  generateGems() {
    this.gems = [];
    for (let x = 800; x < this.roadTotalLength; x += 350) {
      // Avoid placing directly on milestones
      const isNearMilestone = MILESTONES_DATA.some(m => Math.abs(m.xPos - x) < 150);
      if (!isNearMilestone) {
        this.gems.push({
          x: x,
          lane: Math.floor(Math.random() * 3),
          collected: false,
          size: 14,
          rotation: 0
        });
      }
    }
  }

  setupInputs() {
    window.addEventListener('keydown', (e) => {
      soundEngine.ensureContext();
      soundEngine.startEngine();

      switch (e.key) {
        case 'ArrowUp': case 'w': case 'W': this.controls.up = true; break;
        case 'ArrowDown': case 's': case 'S': this.controls.down = true; break;
        case 'ArrowRight': case 'd': case 'D': this.controls.gas = true; break;
        case 'ArrowLeft': case 'a': case 'A': this.controls.brake = true; break;
        case ' ': this.controls.boost = true; soundEngine.playBoostSound(); break;
      }
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'w', 'a', 's', 'd'].includes(e.key)) {
        if (this.isAutoDrive) {
          this.toggleAutoDrive(false);
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowUp': case 'w': case 'W': this.controls.up = false; break;
        case 'ArrowDown': case 's': case 'S': this.controls.down = false; break;
        case 'ArrowRight': case 'd': case 'D': this.controls.gas = false; break;
        case 'ArrowLeft': case 'a': case 'A': this.controls.brake = false; break;
        case ' ': this.controls.boost = false; break;
      }
    });
  }

  setControlState(keyName, active) {
    this.controls[keyName] = active;
    if (active && this.isAutoDrive) {
      this.toggleAutoDrive(false);
    }
  }

  toggleAutoDrive(forceState) {
    this.isAutoDrive = forceState !== undefined ? forceState : !this.isAutoDrive;
    return this.isAutoDrive;
  }

  teleportToMilestone(index) {
    if (index >= 0 && index < MILESTONES_DATA.length) {
      const ms = MILESTONES_DATA[index];
      this.car.x = ms.xPos - 300;
      this.car.speed = 4;
      soundEngine.playBiomeWarp();
    }
  }

  getCurrentBiome() {
    const currentX = this.car.x;
    for (let i = MILESTONES_DATA.length - 1; i >= 0; i--) {
      if (currentX >= MILESTONES_DATA[i].xPos - 400) {
        return BIOMES[MILESTONES_DATA[i].biomeId];
      }
    }
    return BIOMES[0];
  }

  start() {
    const loop = () => {
      this.update();
      this.render();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  update() {
    // Controls & Auto-Drive Logic
    if (this.isAutoDrive) {
      this.car.speed += 0.15;
      if (this.car.speed > 8) this.car.speed = 8;
    } else {
      if (this.controls.gas || this.controls.right) {
        const topSpeed = this.controls.boost ? this.car.maxSpeed * 1.4 : this.car.maxSpeed;
        this.car.speed += this.car.acceleration;
        if (this.car.speed > topSpeed) this.car.speed = topSpeed;
      } else if (this.controls.brake || this.controls.left) {
        this.car.speed -= this.car.acceleration * 1.5;
        if (this.car.speed < -3) this.car.speed = -3;
      } else {
        this.car.speed *= this.car.friction;
      }
    }

    // Lane Shifting
    if (this.controls.up && this.car.lane > 0) {
      this.car.lane--;
      this.controls.up = false;
    } else if (this.controls.down && this.car.lane < 2) {
      this.car.lane++;
      this.controls.down = false;
    }

    this.car.x += this.car.speed;
    if (this.car.x < 100) this.car.x = 100;
    if (this.car.x > this.roadTotalLength) this.car.x = 100; // Loop road

    // Smooth Y transition for lane shift
    this.car.targetY = this.roadY - 20 + (this.car.lane * this.laneHeight);
    this.car.y += (this.car.targetY - this.car.y) * 0.2;

    // Update sound engine pitch
    soundEngine.updateEngine(Math.abs(this.car.speed) / this.car.maxSpeed);

    // Gem Collision
    this.gems.forEach(gem => {
      if (!gem.collected && gem.lane === this.car.lane && Math.abs(gem.x - this.car.x) < 45) {
        gem.collected = true;
        this.xpScore += 50;
        soundEngine.playGemPickup();
        this.createParticles(gem.x, this.car.y, "#00E5FF", 12);
      }
      gem.rotation += 0.05;
    });

    // Milestone Trigger Collision
    MILESTONES_DATA.forEach((ms, index) => {
      if (Math.abs(this.car.x - ms.xPos) < 40 && this.lastTriggeredMilestone !== index) {
        this.lastTriggeredMilestone = index;
        uiController.openMilestoneModal(ms);
        this.car.speed = 2; // Slow down slightly for smooth reading
      }
    });

    this.updateParticles();
    this.updateHUD();
  }

  updateHUD() {
    const currentBiome = this.getCurrentBiome();

    // Biome Card
    const nameEl = document.getElementById('currentBiomeName');
    const subEl = document.getElementById('currentBiomeSubtitle');
    const badgeEl = document.getElementById('currentBiomeBadge');
    if (nameEl) nameEl.innerText = currentBiome.name;
    if (subEl) subEl.innerText = currentBiome.subtitle;
    if (badgeEl) badgeEl.innerText = currentBiome.name.charAt(0);

    // Speedometer & Distance
    const speedKm = Math.round(Math.abs(this.car.speed) * 12);
    const distMeters = Math.round(this.car.x);
    const speedEl = document.getElementById('speedValue');
    const distEl = document.getElementById('distValue');
    const xpEl = document.getElementById('xpValue');
    if (speedEl) speedEl.innerText = `${speedKm} km/h`;
    if (distEl) distEl.innerText = `${distMeters} m`;
    if (xpEl) xpEl.innerText = `${this.xpScore} XP`;

    // Car Icon position on bottom minimap
    const carIcon = document.getElementById('minimapCarIcon');
    if (carIcon) {
      const progressRatio = Math.min(1, Math.max(0, this.car.x / this.roadTotalLength));
      carIcon.style.left = `${progressRatio * 100}%`;
    }
  }

  createParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        color: color,
        life: 1.0,
        size: Math.random() * 4 + 2
      });
    }
  }

  updateParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.04;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  // --- CANVAS RENDERERS FOR THE 7 BIOMES ---
  render() {
    const W = this.canvas.width;
    const H = this.canvas.height;
    const cameraX = this.car.x - 200;

    const biome = this.getCurrentBiome();

    // 1. Sky & Background Gradient
    const skyGrad = this.ctx.createLinearGradient(0, 0, 0, this.roadY);
    skyGrad.addColorStop(0, biome.skyGradient[0]);
    skyGrad.addColorStop(0.5, biome.skyGradient[1]);
    skyGrad.addColorStop(1, biome.skyGradient[2]);
    this.ctx.fillStyle = skyGrad;
    this.ctx.fillRect(0, 0, W, H);

    // Biome-specific background features
    this.renderBiomeParallax(cameraX, biome);

    // 2. Ground & Terrain Below Horizon
    const groundGrad = this.ctx.createLinearGradient(0, this.roadY, 0, H);
    groundGrad.addColorStop(0, biome.groundColor);
    groundGrad.addColorStop(1, '#05070E');
    this.ctx.fillStyle = groundGrad;
    this.ctx.fillRect(0, this.roadY - 20, W, H - (this.roadY - 20));

    // 3. Road Surface & Lanes
    const roadTop = this.roadY - 30;
    const roadHeight = 140;

    this.ctx.fillStyle = biome.roadColor;
    this.ctx.fillRect(0, roadTop, W, roadHeight);

    // Road Borders & Glowing Lines
    this.ctx.strokeStyle = biome.laneColor;
    this.ctx.lineWidth = 4;
    this.ctx.shadowBlur = 12;
    this.ctx.shadowColor = biome.laneColor;

    this.ctx.beginPath();
    this.ctx.moveTo(0, roadTop);
    this.ctx.lineTo(W, roadTop);
    this.ctx.moveTo(0, roadTop + roadHeight);
    this.ctx.lineTo(W, roadTop + roadHeight);
    this.ctx.stroke();

    // Dashed Lane Dividers
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([30, 25]);
    this.ctx.lineDashOffset = -cameraX % 55;

    for (let lane = 1; lane < 3; lane++) {
      const laneY = roadTop + (lane * (roadHeight / 3));
      this.ctx.beginPath();
      this.ctx.moveTo(0, laneY);
      this.ctx.lineTo(W, laneY);
      this.ctx.stroke();
    }
    this.ctx.setLineDash([]); // Reset dash
    this.ctx.shadowBlur = 0;

    // 4. Render Gems / Collectibles
    this.renderGems(cameraX);

    // 5. Render Milestones Gates / Pillars
    this.renderMilestoneGates(cameraX);

    // 6. Render Player Car
    this.renderCar(cameraX);

    // 7. Render Environment Particles (Snow, Leaves, Bubbles, Stars, Sparks)
    this.renderEnvironmentalEffects(biome);

    // 8. Custom Particles
    this.particles.forEach(p => {
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.life;
      this.ctx.beginPath();
      this.ctx.arc(p.x - cameraX, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1.0;
  }

  renderBiomeParallax(cameraX, biome) {
    const W = this.canvas.width;

    if (biome.theme === 'canyon') {
      // Mountain Silhouettes
      this.drawMountains(cameraX * 0.2, "#1B0F2B", 120);
      this.drawMountains(cameraX * 0.5, "#2A183D", 80);
    } else if (biome.theme === 'cave') {
      // Cavern Archway Ceiling & Stalactites
      this.ctx.fillStyle = "#120B24";
      for (let x = - (cameraX * 0.8) % 100; x < W; x += 100) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x + 50, 90 + Math.sin(x) * 30);
        this.ctx.lineTo(x + 100, 0);
        this.ctx.fill();
      }
    } else if (biome.theme === 'river') {
      // Cascading Waterfall backdrop
      this.drawWaterfalls(cameraX * 0.3);
    } else if (biome.theme === 'forest') {
      // Canopy Trees
      this.drawTrees(cameraX * 0.4, "#0A2414", 160);
      this.drawTrees(cameraX * 0.7, "#143D23", 110);
    } else if (biome.theme === 'snow') {
      // Snow Peaks & Aurora Glow
      this.drawSnowPeaks(cameraX * 0.3);
    } else if (biome.theme === 'underwater') {
      // Glowing Coral & Sea arches
      this.drawCorals(cameraX * 0.5);
    } else if (biome.theme === 'space') {
      // Cosmic Stars & Nebula
      this.drawStarfield(cameraX * 0.1);
    }
  }

  drawMountains(offsetX, color, height) {
    const W = this.canvas.width;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.roadY);
    for (let x = 0; x <= W + 100; x += 100) {
      const worldX = x + offsetX;
      const h = Math.abs(Math.sin(worldX * 0.005) * Math.cos(worldX * 0.002)) * height;
      this.ctx.lineTo(x, this.roadY - h);
    }
    this.ctx.lineTo(W, this.roadY);
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawTrees(offsetX, color, height) {
    const W = this.canvas.width;
    this.ctx.fillStyle = color;
    for (let x = -offsetX % 60; x < W; x += 60) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, this.roadY - 10);
      this.ctx.lineTo(x + 25, this.roadY - 10 - height);
      this.ctx.lineTo(x + 50, this.roadY - 10);
      this.ctx.fill();
    }
  }

  drawSnowPeaks(offsetX) {
    this.drawMountains(offsetX, "#182C40", 140);
    // Aurora Line
    const time = Date.now() * 0.001;
    this.ctx.strokeStyle = "rgba(0, 229, 255, 0.25)";
    this.ctx.lineWidth = 20;
    this.ctx.beginPath();
    for (let x = 0; x < this.canvas.width; x += 50) {
      const y = 80 + Math.sin(x * 0.01 + time) * 30;
      if (x === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();
  }

  drawWaterfalls(offsetX) {
    this.drawMountains(offsetX, "#052D3D", 100);
    // Waterfall streams
    this.ctx.fillStyle = "rgba(0, 229, 255, 0.4)";
    for (let x = -offsetX % 300; x < this.canvas.width; x += 300) {
      this.ctx.fillRect(x + 80, 80, 16, this.roadY - 80);
    }
  }

  drawCorals(offsetX) {
    const W = this.canvas.width;
    this.ctx.fillStyle = "rgba(0, 229, 255, 0.15)";
    for (let x = -offsetX % 150; x < W; x += 150) {
      this.ctx.beginPath();
      this.ctx.arc(x, this.roadY - 20, 45, Math.PI, 0);
      this.ctx.fill();
    }
  }

  drawStarfield(offsetX) {
    const W = this.canvas.width;
    this.ctx.fillStyle = "#FFFFFF";
    for (let i = 0; i < 60; i++) {
      const x = (i * 37 - offsetX) % W;
      const y = (i * 19) % (this.roadY - 40);
      const starX = x < 0 ? x + W : x;
      this.ctx.fillRect(starX, y, (i % 3) + 1, (i % 3) + 1);
    }
  }

  renderGems(cameraX) {
    this.gems.forEach(gem => {
      if (gem.collected) return;
      const screenX = gem.x - cameraX;
      if (screenX < -50 || screenX > this.canvas.width + 50) return;

      const roadTop = this.roadY - 30;
      const gemY = roadTop + 25 + (gem.lane * (140 / 3));

      this.ctx.save();
      this.ctx.translate(screenX, gemY);
      this.ctx.rotate(gem.rotation);

      this.ctx.fillStyle = "#00E5FF";
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = "#00E5FF";

      this.ctx.beginPath();
      this.ctx.moveTo(0, -gem.size);
      this.ctx.lineTo(gem.size, 0);
      this.ctx.lineTo(0, gem.size);
      this.ctx.lineTo(-gem.size, 0);
      this.ctx.closePath();
      this.ctx.fill();

      this.ctx.restore();
    });
  }

  renderMilestoneGates(cameraX) {
    MILESTONES_DATA.forEach((ms, index) => {
      const screenX = ms.xPos - cameraX;
      if (screenX < -150 || screenX > this.canvas.width + 150) return;

      const roadTop = this.roadY - 30;
      const gateY = roadTop - 40;

      // Gate Arch Pillars
      this.ctx.fillStyle = ms.color;
      this.ctx.shadowBlur = 20;
      this.ctx.shadowColor = ms.color;

      // Left Pillar
      this.ctx.fillRect(screenX - 10, gateY - 80, 16, 220);
      // Right Pillar
      this.ctx.fillRect(screenX + 160, gateY - 80, 16, 220);
      // Top Arch Bar
      this.ctx.fillRect(screenX - 10, gateY - 80, 186, 20);

      // Milestone Banner Label
      this.ctx.fillStyle = "rgba(10, 14, 26, 0.9)";
      this.ctx.fillRect(screenX, gateY - 55, 166, 45);

      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.font = "bold 14px Outfit, sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.fillText(`${ms.icon} ${ms.title}`, screenX + 83, gateY - 28);

      this.ctx.shadowBlur = 0;
    });
  }

  renderCar(cameraX) {
    const screenX = this.car.x - cameraX;
    const carY = this.car.y;

    this.ctx.save();
    this.ctx.translate(screenX, carY);

    // Car Body Gradient (Sleek Flutter Cyberpunk Sports Car)
    const bodyGrad = this.ctx.createLinearGradient(0, 0, this.car.width, 0);
    bodyGrad.addColorStop(0, '#0175C2');
    bodyGrad.addColorStop(0.5, '#13B9FD');
    bodyGrad.addColorStop(1, '#00E5FF');

    this.ctx.fillStyle = bodyGrad;
    this.ctx.shadowBlur = 15;
    this.ctx.shadowColor = "#13B9FD";

    // Main Chassis
    this.ctx.beginPath();
    this.ctx.roundRect(0, 0, this.car.width, this.car.height, 10);
    this.ctx.fill();

    // Roof & Cabin
    this.ctx.fillStyle = "#0A0E1A";
    this.ctx.beginPath();
    this.ctx.roundRect(20, 6, 36, 30, 6);
    this.ctx.fill();

    // Headlight Beams
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    this.ctx.fillRect(this.car.width - 4, 4, 4, 10);
    this.ctx.fillRect(this.car.width - 4, this.car.height - 14, 4, 10);

    // Headlight Illumination Cone
    const headGrad = this.ctx.createLinearGradient(this.car.width, 0, this.car.width + 180, 0);
    headGrad.addColorStop(0, "rgba(0, 229, 255, 0.4)");
    headGrad.addColorStop(1, "rgba(0, 229, 255, 0)");
    this.ctx.fillStyle = headGrad;
    this.ctx.beginPath();
    this.ctx.moveTo(this.car.width, 10);
    this.ctx.lineTo(this.car.width + 180, -30);
    this.ctx.lineTo(this.car.width + 180, this.car.height + 30);
    this.ctx.lineTo(this.car.width, this.car.height - 10);
    this.ctx.closePath();
    this.ctx.fill();

    // Wheels
    this.ctx.fillStyle = "#1E293B";
    this.ctx.shadowBlur = 0;
    this.ctx.fillRect(10, -5, 18, 6);
    this.ctx.fillRect(this.car.width - 24, -5, 18, 6);
    this.ctx.fillRect(10, this.car.height - 1, 18, 6);
    this.ctx.fillRect(this.car.width - 24, this.car.height - 1, 18, 6);

    // Boost Exhaust Thruster Flare
    if (this.controls.boost || this.car.speed > 10) {
      this.ctx.fillStyle = "#FF4081";
      this.ctx.shadowBlur = 15;
      this.ctx.shadowColor = "#FF4081";
      this.ctx.beginPath();
      this.ctx.moveTo(-5, 14);
      this.ctx.lineTo(-25, 21);
      this.ctx.lineTo(-5, 28);
      this.ctx.closePath();
      this.ctx.fill();
    }

    this.ctx.restore();
  }

  renderEnvironmentalEffects(biome) {
    const W = this.canvas.width;
    const H = this.canvas.height;
    const time = Date.now() * 0.002;

    this.ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    for (let i = 0; i < 25; i++) {
      const x = (i * 67 + time * 120) % W;
      const y = (i * 43 + Math.sin(time + i) * 30) % H;

      if (biome.particles === 'snow') {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 3, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (biome.particles === 'bubbles') {
        this.ctx.strokeStyle = "rgba(0, 229, 255, 0.5)";
        this.ctx.beginPath();
        this.ctx.arc(x, y, 4, 0, Math.PI * 2);
        this.ctx.stroke();
      } else if (biome.particles === 'leaves') {
        this.ctx.fillStyle = "rgba(118, 255, 3, 0.6)";
        this.ctx.fillRect(x, y, 6, 4);
      }
    }
  }
}
