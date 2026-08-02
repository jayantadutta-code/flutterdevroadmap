/* ==========================================================================
   YAML FlipBook - Dynamic Theme Switcher Engine
   ========================================================================== */

const THEMES = {
  cyberpunk: "Cyberpunk Dark",
  obsidian: "Obsidian Slate",
  solarized: "Solarized Light",
  synthwave: "Synthwave Sunset",
  emerald: "Emerald Forest"
};

class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('yaml_active_theme') || 'cyberpunk';
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    this.bindEvents();
  }

  setTheme(themeId) {
    if (!THEMES[themeId]) themeId = 'cyberpunk';
    this.currentTheme = themeId;
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('yaml_active_theme', themeId);

    // Update Dropdown UI Label
    const themeNameSpan = document.getElementById('current-theme-name');
    if (themeNameSpan) {
      themeNameSpan.textContent = THEMES[themeId];
    }

    // Update active highlight in menu
    document.querySelectorAll('.theme-option').forEach(option => {
      if (option.getAttribute('data-theme-id') === themeId) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  bindEvents() {
    const themeBtn = document.getElementById('theme-btn');
    const themeMenu = document.getElementById('theme-menu');

    if (themeBtn && themeMenu) {
      themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle('show');
      });

      // Close menu when clicking outside
      document.addEventListener('click', () => {
        themeMenu.classList.remove('show');
      });

      // Option selection
      document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
          const themeId = option.getAttribute('data-theme-id');
          this.setTheme(themeId);
          themeMenu.classList.remove('show');
        });
      });
    }
  }
}

const themeManager = new ThemeManager();
