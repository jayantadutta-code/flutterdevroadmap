// Interactive Animated Roadmap Journey Engine - "A Common Man's Journey to Become a Flutter Developer"

class JourneyEngine {
  constructor() {
    this.container = document.getElementById('roadmapJourneyContainer');
    this.svgPath = document.getElementById('journeySvgPath');
    this.avatar = document.getElementById('developerAvatar');
    this.nodesContainer = document.getElementById('journeyNodes');

    this.currentMilestoneIndex = 0;
    this.isAutoTour = true;
    this.autoTourTimer = null;
    this.characterPos = { x: 5, y: 20 };

    this.renderJourneyPath();
    this.renderMilestoneNodes();
    this.setupAutoTour();

    window.addEventListener('resize', () => {
      this.renderJourneyPath();
      this.renderMilestoneNodes();
    });
  }

  // --- DRAW WINDING ROADMAP SVG PATH ---
  renderJourneyPath() {
    if (!this.svgPath || !this.container) return;

    const W = this.container.clientWidth || window.innerWidth;
    const H = this.container.clientHeight || 500;

    let pathD = "";
    MILESTONES_DATA.forEach((ms, index) => {
      const px = (ms.xPos / 100) * W;
      const py = (ms.yPos / 100) * H;

      if (index === 0) {
        pathD += `M ${px} ${py}`;
      } else {
        const prev = MILESTONES_DATA[index - 1];
        const prevX = (prev.xPos / 100) * W;
        const prevY = (prev.yPos / 100) * H;
        const cpX1 = prevX + (px - prevX) * 0.5;
        const cpY1 = prevY;
        const cpX2 = prevX + (px - prevX) * 0.5;
        const cpY2 = py;

        pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${px} ${py}`;
      }
    });

    this.svgPath.setAttribute('d', pathD);
  }

  // --- RENDER 13 MILESTONE NODES ALONG PATH ---
  renderMilestoneNodes() {
    if (!this.nodesContainer || !this.container) return;
    this.nodesContainer.innerHTML = '';

    const W = this.container.clientWidth || window.innerWidth;
    const H = this.container.clientHeight || 500;

      // Smart badge vertical position (above vs below icon) to prevent text collision
      let isAbove = false;
      if (ms.yPos >= 60) {
        isAbove = true;
      } else if (ms.yPos <= 35) {
        isAbove = false;
      } else {
        isAbove = (index % 2 === 1);
      }

      const nodeEl = document.createElement('div');
      nodeEl.className = `journey-node ${isAbove ? 'badge-above' : 'badge-below'}`;
      nodeEl.style.left = `${ms.xPos}%`;
      nodeEl.style.top = `${ms.yPos}%`;
      nodeEl.style.borderColor = ms.color;

      nodeEl.innerHTML = `
        <div class="journey-node-icon" style="background:${ms.color}22; color:${ms.color}">
          ${ms.icon}
        </div>
        <div class="journey-node-badge" style="border-color:${ms.color}">
          ${ms.title}
        </div>
      `;

      nodeEl.addEventListener('click', () => {
        this.stopAutoTour();
        this.navigateToMilestone(index, true);
      });

      this.nodesContainer.appendChild(nodeEl);
    });

    // Update avatar position to current active milestone
    this.updateAvatarPosition(this.currentMilestoneIndex);
  }

  // --- NAVIGATE & ANIMATE AVATAR TO MILESTONE ---
  navigateToMilestone(index, openModal = false) {
    if (index < 0 || index >= MILESTONES_DATA.length) return;

    this.currentMilestoneIndex = index;
    const ms = MILESTONES_DATA[index];

    // Move avatar smoothly
    this.updateAvatarPosition(index);

    // Play chime sound & update HUD
    soundEngine.playMilestoneChime();
    this.updateHUD(ms);

    if (openModal) {
      uiController.openMilestoneModal(ms);
    }
  }

  updateAvatarPosition(index) {
    if (!this.avatar) return;
    const ms = MILESTONES_DATA[index];
    this.avatar.style.left = `${ms.xPos}%`;
    this.avatar.style.top = `${ms.yPos}%`;

    // Highlight active milestone node
    document.querySelectorAll('.journey-node').forEach((node, i) => {
      node.classList.toggle('active', i === index);
    });
  }

  setupAutoTour() {
    this.stopAutoTour();
    if (this.isAutoTour) {
      this.autoTourTimer = setInterval(() => {
        let nextIndex = (this.currentMilestoneIndex + 1) % MILESTONES_DATA.length;
        this.navigateToMilestone(nextIndex, false);
      }, 4000);
    }
  }

  toggleAutoTour() {
    this.isAutoTour = !this.isAutoTour;
    if (this.isAutoTour) {
      this.setupAutoTour();
    } else {
      this.stopAutoTour();
    }
    return this.isAutoTour;
  }

  stopAutoTour() {
    if (this.autoTourTimer) {
      clearInterval(this.autoTourTimer);
      this.autoTourTimer = null;
    }
  }

  updateHUD(ms) {
    const nameEl = document.getElementById('currentBiomeName');
    const subEl = document.getElementById('currentBiomeSubtitle');
    const badgeEl = document.getElementById('currentBiomeBadge');

    if (nameEl) nameEl.innerText = ms.title;
    if (subEl) subEl.innerText = ms.badge;
    if (badgeEl) badgeEl.innerText = ms.icon;

    // Update bottom car/avatar icon on progress bar
    const carIcon = document.getElementById('minimapCarIcon');
    if (carIcon) {
      const progressRatio = (index => index / (MILESTONES_DATA.length - 1))(this.currentMilestoneIndex);
      carIcon.style.left = `${progressRatio * 100}%`;
    }
  }
}
