/* ==========================================================================
   YAML FlipBook - Main Application Entry Point & Navigation Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Engines
  window.flipbookEngine = new FlipBookEngine();
  window.playgroundEngine = new PlaygroundEngine();
  window.quizEngine = new QuizEngine();

  // Initialize Sound UI State & Listeners
  updateSoundUI();

  const soundBtns = document.querySelectorAll('#sound-toggle-btn, #reader-sound-btn');
  soundBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.soundEngine) {
        window.soundEngine.toggleMute();
        updateSoundUI();
      }
    });
  });

  console.log("YAML FlipBook Application Ready!");
});

// Update Sound Toggle UI across all buttons in header and reader toolbar
function updateSoundUI() {
  if (!window.soundEngine) return;
  const isMuted = window.soundEngine.isMuted;

  // Header Sound Button
  const soundIcon = document.getElementById('sound-icon');
  const soundText = document.getElementById('sound-text');
  if (soundIcon) soundIcon.className = isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
  if (soundText) soundText.textContent = isMuted ? 'Muted' : 'Sound On';

  // Reader Toolbar Sound Button
  const readerSoundIcon = document.getElementById('reader-sound-icon');
  const readerSoundText = document.getElementById('reader-sound-text');
  if (readerSoundIcon) readerSoundIcon.className = isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
  if (readerSoundText) readerSoundText.textContent = isMuted ? 'Muted' : 'Sound On';

  // Update button active / muted classes & titles
  const headerBtn = document.getElementById('sound-toggle-btn');
  const readerBtn = document.getElementById('reader-sound-btn');

  [headerBtn, readerBtn].forEach(btn => {
    if (btn) {
      if (isMuted) {
        btn.classList.add('is-muted');
        btn.setAttribute('title', 'Sound Muted - Click to Unmute');
      } else {
        btn.classList.remove('is-muted');
        btn.setAttribute('title', 'Sound Active - Click to Mute');
      }
    }
  });
}

// View Switcher Function
function switchMainView(viewName) {
  const views = ['book', 'playground', 'quiz'];

  views.forEach(v => {
    const sec = document.getElementById(`view-${v}`);
    const tab = document.getElementById(`tab-${v}-btn`);
    if (v === viewName) {
      sec.classList.add('active');
      if (tab) tab.classList.add('active');
    } else {
      sec.classList.remove('active');
      if (tab) tab.classList.remove('active');
    }
  });

  // Re-trigger layout calculations if switching to playground or quiz
  if (viewName === 'playground' && window.playgroundEngine) {
    window.playgroundEngine.validateAndParse();
  }
}
