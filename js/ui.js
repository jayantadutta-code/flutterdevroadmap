// Interactive UI Controller for "A Common Man's Journey to Become a Flutter Developer"

class UIController {
  constructor() {
    this.currentMilestone = null;
    this.completedSubMilestones = this.loadProgress();

    this.initElements();
    this.bindEvents();
    this.renderDrawerContent();
    this.updateOverallProgress();
  }

  initElements() {
    this.drawer = document.getElementById('drawer');
    this.openDrawerBtn = document.getElementById('openDrawerBtn');
    this.closeDrawerBtn = document.getElementById('closeDrawerBtn');
    this.drawerContent = document.getElementById('drawerContent');
    this.searchInput = document.getElementById('searchInput');

    this.modalOverlay = document.getElementById('modalOverlay');
    this.closeModalBtn = document.getElementById('closeModalBtn');
    this.modalIcon = document.getElementById('modalIcon');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalBadge = document.getElementById('modalBadge');
    this.modalDescription = document.getElementById('modalDescription');
    this.topicsList = document.getElementById('topicsList');
    this.submilestonesList = document.getElementById('submilestonesList');
    this.codeSnippetBlock = document.getElementById('codeSnippetBlock');
    this.resourcesList = document.getElementById('resourcesList');
    this.copyCodeBtn = document.getElementById('copyCodeBtn');

    this.soundBtn = document.getElementById('soundBtn');
    this.autoDriveBtn = document.getElementById('autoDriveBtn');
  }

  bindEvents() {
    if (this.openDrawerBtn) this.openDrawerBtn.addEventListener('click', () => this.openDrawer());
    if (this.closeDrawerBtn) this.closeDrawerBtn.addEventListener('click', () => this.closeDrawer());
    if (this.searchInput) this.searchInput.addEventListener('input', (e) => this.filterDrawer(e.target.value));

    if (this.closeModalBtn) this.closeModalBtn.addEventListener('click', () => this.closeModal());
    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', (e) => {
        if (e.target === this.modalOverlay) this.closeModal();
      });
    }

    // Modal Tab Switching
    document.querySelectorAll('.modal-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetTab = e.target.getAttribute('data-tab');
        this.switchModalTab(targetTab);
      });
    });

    if (this.copyCodeBtn) {
      this.copyCodeBtn.addEventListener('click', () => this.copyCodeSnippet());
    }

    if (this.soundBtn) {
      this.soundBtn.addEventListener('click', () => {
        const isMuted = soundEngine.toggleMute();
        this.soundBtn.innerText = isMuted ? "🔇 Sound Off" : "🔊 Sound On";
        this.soundBtn.classList.toggle('btn-active', !isMuted);
      });
    }

    if (this.autoDriveBtn) {
      this.autoDriveBtn.addEventListener('click', () => {
        if (window.journeyEngine) {
          const isPlaying = window.journeyEngine.toggleAutoTour();
          this.autoDriveBtn.innerText = isPlaying ? "🎬 Watch Story: ON" : "🎬 Watch Story: OFF";
          this.autoDriveBtn.classList.toggle('btn-active', isPlaying);
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }

  openDrawer() {
    if (this.drawer) this.drawer.classList.add('open');
  }

  closeDrawer() {
    if (this.drawer) this.drawer.classList.remove('open');
  }

  renderDrawerContent() {
    if (!this.drawerContent) return;
    this.drawerContent.innerHTML = '';

    MILESTONES_DATA.forEach((ms, index) => {
      const card = document.createElement('div');
      card.className = 'milestone-item-card';

      card.innerHTML = `
        <div class="milestone-item-icon" style="color: ${ms.color}">
          ${ms.icon}
        </div>
        <div class="milestone-item-info">
          <div class="milestone-item-title">${ms.title}</div>
          <div class="milestone-item-biome">${ms.badge}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        this.closeDrawer();
        if (window.journeyEngine) {
          window.journeyEngine.stopAutoTour();
          window.journeyEngine.navigateToMilestone(index, true);
        }
      });

      this.drawerContent.appendChild(card);
    });
  }

  filterDrawer(query) {
    const q = query.toLowerCase();
    document.querySelectorAll('.milestone-item-card').forEach((card, index) => {
      const ms = MILESTONES_DATA[index];
      const match = ms.title.toLowerCase().includes(q) || ms.badge.toLowerCase().includes(q) || ms.description.toLowerCase().includes(q);
      card.style.display = match ? 'flex' : 'none';
    });
  }

  openMilestoneModal(ms) {
    this.currentMilestone = ms;

    if (this.modalIcon) this.modalIcon.innerText = ms.icon;
    if (this.modalTitle) this.modalTitle.innerText = ms.title;
    if (this.modalBadge) {
      this.modalBadge.innerText = ms.badge;
      this.modalBadge.style.color = ms.color;
    }

    // Dynamic Tab Title for 3rd Tab
    const codeTabHeader = document.getElementById('codeTabHeader');
    if (codeTabHeader) {
      codeTabHeader.innerText = ms.customTabName || "Code Example";
    }

    // Story Card & Digital Book Banner
    const storyCard = document.getElementById('storyCard');
    if (storyCard) {
      let bookBanner = '';
      if (ms.hasDigitalBook || ms.id === 'dart-language' || ms.id === 'flutter-framework' || ms.id === 'git-github') {
        const bookUrl = ms.digitalBookUrl || (ms.id === 'dart-language' ? 'dart/index.html' : (ms.id === 'flutter-framework' ? 'YAML/index.html' : 'git-github/index.html'));
        bookBanner = `
          <div style="margin-top: 12px; padding: 12px 16px; background: linear-gradient(135deg, rgba(1,117,194,0.2), rgba(0,229,255,0.15)); border: 1px solid var(--flutter-sky); border-radius: 10px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
            <div>
              <div style="font-weight: 700; color: #fff; font-size: 0.95rem;">📚 ${ms.customTabName || 'Interactive 3D FlipBook Available'}</div>
              <div style="font-size: 0.8rem; color: #CBD5E1;">Explore 3D flip pages, interactive code simulator & Quest Arena!</div>
            </div>
            <button onclick="uiController.switchModalTab('code')" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.85rem; white-space: nowrap;">
              Open FlipBook 📖
            </button>
          </div>
        `;
      }
      storyCard.innerHTML = `<strong>📖 The Developer Story:</strong> ${ms.story}${bookBanner}`;
    }

    if (this.modalDescription) this.modalDescription.innerText = ms.description;

    // Key Topics
    if (this.topicsList) {
      this.topicsList.innerHTML = ms.topics.map(t => `<li style="margin-bottom: 8px;">🔹 ${t}</li>`).join('');
    }

    // Sub-Milestones Checklist
    if (this.submilestonesList) {
      this.submilestonesList.innerHTML = '';
      ms.subMilestones.forEach(sub => {
        const isChecked = this.completedSubMilestones.includes(sub.id);
        const item = document.createElement('div');
        item.className = `submilestone-item ${isChecked ? 'checked' : ''}`;

        item.innerHTML = `
          <div class="submilestone-checkbox">${isChecked ? '✓' : ''}</div>
          <div class="submilestone-text">${sub.title}</div>
        `;

        item.addEventListener('click', () => {
          this.toggleSubMilestone(sub.id, item);
        });

        this.submilestonesList.appendChild(item);
      });
    }

    // Code Example / Digital Book Tab Content
    const tabCodeEl = document.getElementById('tab-code');
    if (tabCodeEl) {
      if (ms.hasDigitalBook || ms.id === 'git-github' || ms.id === 'flutter-framework' || ms.id === 'dart-language') {
        const bookUrl = ms.digitalBookUrl || (ms.id === 'dart-language' ? 'dart/index.html' : (ms.id === 'flutter-framework' ? 'YAML/index.html' : 'git-github/index.html'));
        let bookTitle = 'Interactive Masterclass 3D FlipBook';
        let bookSubtitle = 'Interactive 3D page-flipping book with live simulator & quest arena';

        if (ms.id === 'dart-language') {
          bookTitle = 'The Dart Masterclass Interactive 3D FlipBook (37 Topics)';
          bookSubtitle = 'Interactive 3D page-flipping book with Dart simulator & 700-question Quiz Arena';
        } else if (ms.id === 'flutter-framework') {
          bookTitle = 'The YAML Interactive 3D FlipBook (38 Topics)';
          bookSubtitle = 'Interactive 3D page-flipping book with YAML parser, validator & quest arena';
        } else if (ms.id === 'git-github') {
          bookTitle = 'The Git & GitHub Flipbook Guide (28 Chapters)';
          bookSubtitle = 'Interactive 3D page-flipping book with live terminal & command quizzes';
        }
        tabCodeEl.innerHTML = `
          <div class="digital-book-modal-wrapper">
            <div class="digital-book-modal-header">
              <div class="digital-book-info">
                <span class="digital-book-title">📚 <strong>${bookTitle}</strong></span>
                <span class="digital-book-subtitle">${bookSubtitle}</span>
              </div>
              <a href="${bookUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-digital-book">
                <span>🚀 Fullscreen Book ↗</span>
              </a>
            </div>
            <iframe src="${bookUrl}" class="digital-book-iframe" title="${bookTitle}"></iframe>
          </div>
        `;
      } else {
        tabCodeEl.innerHTML = `
          <div class="code-wrapper">
            <button id="copyCodeBtn" class="copy-btn">📋 Copy Code</button>
            <pre><code id="codeSnippetBlock" class="code-block"></code></pre>
          </div>
        `;
        this.codeSnippetBlock = document.getElementById('codeSnippetBlock');
        this.copyCodeBtn = document.getElementById('copyCodeBtn');
        if (this.codeSnippetBlock) this.codeSnippetBlock.innerText = ms.codeSnippet;
        if (this.copyCodeBtn) {
          this.copyCodeBtn.addEventListener('click', () => this.copyCodeSnippet());
        }
      }
    }

    // Resources
    if (this.resourcesList) {
      this.resourcesList.innerHTML = ms.resources.map(r => `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-link">
          <span>🔗 ${r.name}</span>
          <span>↗</span>
        </a>
      `).join('');
    }

    if (ms.hasDigitalBook || ms.id === 'dart-language') {
      this.switchModalTab('code');
    } else {
      this.switchModalTab('overview');
    }
    if (this.modalOverlay) this.modalOverlay.classList.add('open');
  }

  closeModal() {
    if (this.modalOverlay) this.modalOverlay.classList.remove('open');
  }

  switchModalTab(tabName) {
    document.querySelectorAll('.modal-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === tabName);
    });

    document.querySelectorAll('.modal-tab-content').forEach(c => {
      c.classList.toggle('active', c.id === `tab-${tabName}`);
    });
  }

  copyCodeSnippet() {
    if (!this.codeSnippetBlock) return;
    const code = this.codeSnippetBlock.innerText;
    navigator.clipboard.writeText(code).then(() => {
      if (this.copyCodeBtn) {
        this.copyCodeBtn.innerText = "✓ Copied!";
        setTimeout(() => {
          this.copyCodeBtn.innerText = "📋 Copy Code";
        }, 2000);
      }
    });
  }

  toggleSubMilestone(subId, element) {
    const index = this.completedSubMilestones.indexOf(subId);
    let isChecked = false;

    if (index > -1) {
      this.completedSubMilestones.splice(index, 1);
      element.classList.remove('checked');
      element.querySelector('.submilestone-checkbox').innerText = '';
    } else {
      this.completedSubMilestones.push(subId);
      element.classList.add('checked');
      element.querySelector('.submilestone-checkbox').innerText = '✓';
      isChecked = true;
      soundEngine.playGemPickup();
    }

    this.saveProgress();
    this.updateOverallProgress();
  }

  updateOverallProgress() {
    let totalSub = 0;
    MILESTONES_DATA.forEach(ms => totalSub += ms.subMilestones.length);

    const completedCount = this.completedSubMilestones.length;
    const progressRatio = totalSub > 0 ? (completedCount / totalSub) : 0;
    const percentage = Math.round(progressRatio * 100);

    const progressFill = document.getElementById('overallProgressFill');
    const progressText = document.getElementById('overallProgressText');

    if (progressFill) progressFill.style.width = `${percentage}%`;
    if (progressText) progressText.innerText = `${percentage}% Complete (${completedCount}/${totalSub} Tasks)`;

    // Calculate Developer Rank & XP
    let currentRank = DEVELOPER_RANKS[0];
    for (let r of DEVELOPER_RANKS) {
      if (percentage >= r.threshold) {
        currentRank = r;
      }
    }

    const xpEl = document.getElementById('xpValue');
    const rankEl = document.getElementById('distValue');
    if (xpEl) xpEl.innerText = `${completedCount * 100} XP`;
    if (rankEl) rankEl.innerText = currentRank.title;
  }

  saveProgress() {
    localStorage.setItem('flutter_roadmap_journey_progress', JSON.stringify(this.completedSubMilestones));
  }

  loadProgress() {
    try {
      const saved = localStorage.getItem('flutter_roadmap_journey_progress');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }
}

window.uiController = new UIController();
