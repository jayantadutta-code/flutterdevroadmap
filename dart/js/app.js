/* ==========================================================================
   Dart Cookbook - Main Entry Point & View Switcher
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
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

  console.log("Dart Interactive 3D Cookbook Application Ready!");
});

// Update Sound Toggle UI across all buttons
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
