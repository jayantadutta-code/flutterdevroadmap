/* ==========================================================================
   Dart Cookbook - Main Entry Point & View Switcher
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Render Dynamic Paper Sheets Content first
  renderPaperSheets();

  // Initialize Core Engines
  window.flipbookEngine = new FlipBookEngine();
  window.playgroundEngine = new PlaygroundEngine();
  window.quizEngine = new QuizEngine();

  // Initialize Sound UI State & Listeners
  updateSoundUI();

  const soundBtns = document.querySelectorAll('#sound-toggle-btn');
  soundBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.soundEngine) {
        window.soundEngine.toggleMute();
        updateSoundUI();
      }
    });
  });

  console.log("Dart Interactive Cookbook & Masterclass Ready!");
});

// Dynamically Render 7 Spreads (Paper Sheets) for the 3D Flipbook
function renderPaperSheets() {
  const bookContainer = document.getElementById('book3d');
  if (!bookContainer) return;

  // Front Cover Sheet
  let sheetsHTML = `
    <div class="paper-sheet cover-sheet" id="sheet-0">
      <div class="page page-front">
        <div class="cover-content">
          <div class="cover-badge">GOOGLE DART 3 MASTERCLASS</div>
          <h1 class="cover-title">DART<br/><span class="cover-highlight">COOKBOOK</span></h1>
          <p class="cover-subtitle">Interactive 3D Guide & 105-Question Quiz Arena</p>
          <div class="cover-meta">
            <span>7 Core Parts</span> • <span>37 Subtopics</span> • <span>Level 1-7 Exams</span>
          </div>
          <button class="btn primary-btn" onclick="window.flipbookEngine.nextPage()">
            <span>Open Cookbook</span> <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="page page-back">
        <div class="page-inner">
          <h2 class="page-h2">Welcome to the Dart Masterclass</h2>
          <p class="page-p">
            This interactive 3D cookbook covers the full Dart language spec from foundational syntax to advanced multithreading with Isolates and modern Dart 3 pattern matching.
          </p>
          <div class="tip-box">
            <i class="fa-solid fa-compass"></i>
            <strong>Navigation Tip:</strong> Use Left & Right Arrow keys on your keyboard or the Index drawer to jump directly to any topic!
          </div>
        </div>
      </div>
    </div>
  `;

  // 7 Module Spreads
  DART_MODULES.forEach((mod, idx) => {
    const sheetNum = idx + 1;
    sheetsHTML += `
      <div class="paper-sheet" id="sheet-${sheetNum}">
        <div class="page page-front">
          <div class="page-header">
            <span class="page-chapter-tag">${mod.chapterNum}</span>
            <span class="page-chapter-title">${mod.title}</span>
          </div>
          <div class="page-inner">
            ${mod.pageLeft}
          </div>
          <div class="page-footer">
            <span>Part ${sheetNum} Left</span>
            <span>Dart Masterclass</span>
          </div>
        </div>

        <div class="page page-back">
          <div class="page-header">
            <span class="page-chapter-tag">${mod.chapterNum} (Cont.)</span>
            <span class="page-chapter-title">${mod.title}</span>
          </div>
          <div class="page-inner">
            ${mod.pageRight}
          </div>
          <div class="page-footer">
            <span>Dart Masterclass</span>
            <span>Part ${sheetNum} Right</span>
          </div>
        </div>
      </div>
    `;
  });

  bookContainer.innerHTML = sheetsHTML;
}

// Update Sound Toggle UI
function updateSoundUI() {
  if (!window.soundEngine) return;
  const isMuted = window.soundEngine.isMuted;

  const soundIcon = document.getElementById('sound-icon');
  const soundText = document.getElementById('sound-text');
  if (soundIcon) soundIcon.className = isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
  if (soundText) soundText.textContent = isMuted ? 'Muted' : 'Sound On';

  const headerBtn = document.getElementById('sound-toggle-btn');
  if (headerBtn) {
    if (isMuted) {
      headerBtn.classList.add('is-muted');
    } else {
      headerBtn.classList.remove('is-muted');
    }
  }
}

// View Switcher Function (FlipBook, Playground, Quiz)
function switchMainView(viewName) {
  const views = ['book', 'playground', 'quiz'];

  views.forEach(v => {
    const sec = document.getElementById(`view-${v}`);
    const tab = document.getElementById(`tab-${v}-btn`);
    if (v === viewName) {
      if (sec) sec.classList.add('active');
      if (tab) tab.classList.add('active');
    } else {
      if (sec) sec.classList.remove('active');
      if (tab) tab.classList.remove('active');
    }
  });
}
