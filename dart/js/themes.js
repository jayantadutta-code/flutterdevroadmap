/* ==========================================================================
   Dart Cookbook - Dynamic Theme Engine
   ========================================================================== */

class ThemeEngine {
  constructor() {
    this.currentTheme = localStorage.getItem('dart_cookbook_theme') || 'cyberpunk';
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.bindThemeDropdown();
  }

  applyTheme(themeId) {
    this.currentTheme = themeId;
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('dart_cookbook_theme', themeId);

    const currentThemeNameEl = document.getElementById('current-theme-name');
    if (currentThemeNameEl) {
      const names = {
        'cyberpunk': 'Cyberpunk Dark',
        'fluttersky': 'Flutter Sky',
        'obsidian': 'Obsidian Slate',
        'solarized': 'Solarized Light'
      };
      currentThemeNameEl.textContent = names[themeId] || 'Cyberpunk Dark';
    }

    // Update active dropdown items
    document.querySelectorAll('.theme-option').forEach(opt => {
      if (opt.getAttribute('data-theme-id') === themeId) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  }

  bindThemeDropdown() {
    const themeBtn = document.getElementById('theme-btn');
    const themeMenu = document.getElementById('theme-menu');

    if (themeBtn && themeMenu) {
      themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle('show');
      });

      document.addEventListener('click', () => {
        themeMenu.classList.remove('show');
      });

      document.querySelectorAll('.theme-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          const themeId = opt.getAttribute('data-theme-id');
          this.applyTheme(themeId);
          themeMenu.classList.remove('show');
        });
      });
    }
  }
}

window.themeEngine = new ThemeEngine();
