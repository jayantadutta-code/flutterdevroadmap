/**
 * Dart Cookbook - MCQ Exam Engine
 * Handles level selection, active quiz sessions, matrix jumps, timer, explanations, scoring & certificate generation.
 */

class QuizEngine {
  constructor() {
    this.currentPart = 1;
    this.currentLevel = 1;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // qIndex -> optionIndex
    this.score = 0;
    this.timerInterval = null;
    this.secondsRemaining = 900; // 15 mins default
    this.startTime = null;
    this.levelProgress = this.loadProgress();

    this.initUI();
  }

  loadProgress() {
    try {
      const saved = localStorage.getItem("dart_cookbook_progress");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  saveProgress(part, level, score, passed) {
    if (!this.levelProgress[part]) this.levelProgress[part] = {};
    const prevBest = this.levelProgress[part][level] ? this.levelProgress[part][level].score : 0;
    
    this.levelProgress[part][level] = {
      score: Math.max(score, prevBest),
      passed: passed || (this.levelProgress[part][level] && this.levelProgress[part][level].passed)
    };

    try {
      localStorage.setItem("dart_cookbook_progress", JSON.stringify(this.levelProgress));
    } catch (e) {}
  }

  initUI() {
    document.addEventListener("DOMContentLoaded", () => {
      this.modal = document.getElementById("quiz-modal");
      this.btnLaunch = document.getElementById("btn-launch-mcq");
      this.btnCloseModal = document.getElementById("btn-close-quiz-modal");

      if (this.btnLaunch) {
        this.btnLaunch.addEventListener("click", () => this.openLevelSelect(window.appState ? window.appState.currentPart : 1));
      }

      if (this.btnCloseModal) {
        this.btnCloseModal.addEventListener("click", () => this.hideModal());
      }

      // Quiz Navigation Buttons
      document.getElementById("btn-prev-question")?.addEventListener("click", () => this.navigateQuestion(-1));
      document.getElementById("btn-next-question")?.addEventListener("click", () => this.navigateQuestion(1));
      document.getElementById("btn-submit-answer")?.addEventListener("click", () => this.submitAnswer());
      document.getElementById("btn-finish-quiz")?.addEventListener("click", () => this.finishExam());

      // Result screen actions
      document.getElementById("btn-retry-level")?.addEventListener("click", () => this.startQuiz(this.currentPart, this.currentLevel));
      document.getElementById("btn-select-level-again")?.addEventListener("click", () => this.openLevelSelect(this.currentPart));
      document.getElementById("btn-view-certificate")?.addEventListener("click", () => this.showCertificate());
      
      // Certificate Modal
      document.getElementById("btn-close-cert-modal")?.addEventListener("click", () => {
        document.getElementById("certificate-modal")?.classList.remove("active");
      });
      document.getElementById("btn-print-cert")?.addEventListener("click", () => window.print());
    });
  }

  openLevelSelect(partId) {
    this.currentPart = partId;
    const partTitles = {
      1: "Part 1: Basic",
      2: "Part 2: Core Dart",
      3: "Part 3: OOP",
      4: "Part 4: Safety Control",
      5: "Part 5: Asynchronous",
      6: "Part 6: Advance",
      7: "Part 7: Concurrency"
    };

    document.getElementById("quiz-part-name").textContent = partTitles[partId] || `Part ${partId}`;
    
    // Build 5 level cards
    const grid = document.getElementById("levels-grid");
    grid.innerHTML = "";

    const levelNames = ["Novice", "Apprentice", "Intermediate", "Advanced", "Master"];
    const levelDescs = ["Fundamental syntax", "Core APIs & Collections", "OOP & Edge cases", "Async & Memory constraints", "Dart 3 & Architecture"];

    for (let l = 1; l <= 5; l++) {
      const isUnlocked = l === 1 || (this.levelProgress[partId] && this.levelProgress[partId][l - 1] && this.levelProgress[partId][l - 1].passed);
      const isPassed = this.levelProgress[partId] && this.levelProgress[partId][l] && this.levelProgress[partId][l].passed;
      const bestScore = this.levelProgress[partId] && this.levelProgress[partId][l] ? this.levelProgress[partId][l].score : 0;

      const card = document.createElement("div");
      card.className = `level-card ${isUnlocked ? 'unlocked' : 'locked'}`;
      card.innerHTML = `
        <span class="level-num-pill">Level ${l}</span>
        <div class="level-card-title">${levelNames[l - 1]}</div>
        <div class="level-card-info">${levelDescs[l - 1]}</div>
        <div class="level-card-info" style="margin-top: 0.2rem;">20 Questions</div>
        ${isPassed ? `<div class="level-status-icon"><i class="fa-solid fa-circle-check"></i> ${bestScore}/20</div>` : 
          (isUnlocked ? `<div class="level-status-icon" style="color: var(--accent-cyan);"><i class="fa-solid fa-play"></i> Start</div>` : 
          `<div class="level-status-icon"><i class="fa-solid fa-lock"></i> Locked</div>`)}
      `;

      card.addEventListener("click", () => {
        if (isUnlocked) {
          this.startQuiz(partId, l);
        } else {
          alert(`Complete Level ${l - 1} first to unlock Level ${l}!`);
        }
      });

      grid.appendChild(card);
    }

    this.showScreen("quiz-level-select-screen");
    this.modal.classList.add("active");
  }

  showScreen(screenId) {
    document.querySelectorAll(".quiz-screen").forEach(s => s.classList.remove("active-screen"));
    document.getElementById(screenId)?.classList.add("active-screen");
  }

  hideModal() {
    this.stopTimer();
    if (this.modal) this.modal.classList.remove("active");
  }

  startQuiz(partId, levelId) {
    this.currentPart = partId;
    this.currentLevel = levelId;
    this.currentQuestions = window.mcqBank.getQuestions(partId, levelId);
    this.currentIndex = 0;
    this.userAnswers = {};
    this.score = 0;

    const levelNames = ["Novice", "Apprentice", "Intermediate", "Advanced", "Master"];
    document.getElementById("quiz-level-badge").textContent = `Level ${levelId}: ${levelNames[levelId - 1]}`;
    document.getElementById("q-total-count").textContent = this.currentQuestions.length;
    document.getElementById("live-score").textContent = "0";

    this.buildMatrix();
    this.renderQuestion(0);
    this.startTimer(900); // 15 mins
    this.showScreen("quiz-active-screen");
  }

  buildMatrix() {
    const matrix = document.getElementById("question-matrix");
    matrix.innerHTML = "";
    for (let i = 0; i < this.currentQuestions.length; i++) {
      const pill = document.createElement("div");
      pill.className = "matrix-pill";
      pill.id = `matrix-pill-${i}`;
      pill.textContent = i + 1;
      pill.addEventListener("click", () => this.renderQuestion(i));
      matrix.appendChild(pill);
    }
  }

  updateMatrixState() {
    for (let i = 0; i < this.currentQuestions.length; i++) {
      const pill = document.getElementById(`matrix-pill-${i}`);
      if (!pill) continue;
      pill.classList.remove("active");
      
      if (i === this.currentIndex) {
        pill.classList.add("active");
      }

      if (this.userAnswers[i] !== undefined) {
        pill.classList.add("answered");
      }
    }
  }

  renderQuestion(index) {
    if (index < 0 || index >= this.currentQuestions.length) return;
    this.currentIndex = index;

    const q = this.currentQuestions[index];
    document.getElementById("q-current-index").textContent = index + 1;
    document.getElementById("question-text").textContent = q.q;

    // Progress bar
    const pct = ((index + 1) / this.currentQuestions.length) * 100;
    document.getElementById("quiz-progress-bar").style.width = `${pct}%`;

    // Options
    const container = document.getElementById("options-container");
    container.innerHTML = "";

    const prefixes = ["A", "B", "C", "D"];
    q.options.forEach((optText, optIndex) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      if (this.userAnswers[index] === optIndex) {
        btn.classList.add("selected");
      }

      btn.innerHTML = `
        <span class="opt-prefix">${prefixes[optIndex]}</span>
        <span>${optText}</span>
      `;

      btn.addEventListener("click", () => {
        container.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        this.userAnswers[index] = optIndex;
        this.updateMatrixState();
      });

      container.appendChild(btn);
    });

    // Explanation Box reset
    const expBox = document.getElementById("explanation-box");
    expBox.classList.remove("active");

    // Action bar buttons
    document.getElementById("btn-prev-question").disabled = (index === 0);
    const isLast = (index === this.currentQuestions.length - 1);

    document.getElementById("btn-next-question").style.display = isLast ? "none" : "inline-flex";
    document.getElementById("btn-finish-quiz").style.display = isLast ? "inline-flex" : "none";

    this.updateMatrixState();
  }

  navigateQuestion(delta) {
    this.renderQuestion(this.currentIndex + delta);
  }

  submitAnswer() {
    const q = this.currentQuestions[this.currentIndex];
    const selected = this.userAnswers[this.currentIndex];

    if (selected === undefined) {
      alert("Please select an answer option first!");
      return;
    }

    const container = document.getElementById("options-container");
    const btns = container.querySelectorAll(".option-btn");

    btns.forEach((b, idx) => {
      if (idx === q.correct) {
        b.classList.add("correct");
      } else if (idx === selected) {
        b.classList.add("incorrect");
      }
    });

    // Show Explanation
    const expBox = document.getElementById("explanation-box");
    document.getElementById("explanation-text").textContent = q.explanation;
    expBox.classList.add("active");

    // Play Sound
    if (selected === q.correct) {
      window.soundEngine?.playSuccess();
    } else {
      window.soundEngine?.playError();
    }

    // Recalculate Live Score
    let correctCount = 0;
    Object.keys(this.userAnswers).forEach(idx => {
      if (this.userAnswers[idx] === this.currentQuestions[idx].correct) {
        correctCount++;
      }
    });
    this.score = correctCount;
    document.getElementById("live-score").textContent = this.score;
  }

  startTimer(durationSeconds) {
    this.stopTimer();
    this.secondsRemaining = durationSeconds;
    this.startTime = Date.now();

    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.secondsRemaining--;
      this.updateTimerDisplay();

      if (this.secondsRemaining <= 0) {
        this.stopTimer();
        alert("Time is up! Submitting exam automatically...");
        this.finishExam();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.secondsRemaining / 60);
    const secs = this.secondsRemaining % 60;
    const str = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    const el = document.getElementById("timer-display");
    if (el) el.textContent = str;
  }

  finishExam() {
    this.stopTimer();

    // Calculate score
    let correctCount = 0;
    for (let i = 0; i < this.currentQuestions.length; i++) {
      if (this.userAnswers[i] === this.currentQuestions[i].correct) {
        correctCount++;
      }
    }

    const total = this.currentQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= 70; // 70% passing threshold

    this.saveProgress(this.currentPart, this.currentLevel, correctCount, passed);

    // Populate Results Screen
    document.getElementById("final-percentage").textContent = `${percentage}%`;
    document.getElementById("stat-correct").textContent = correctCount;
    document.getElementById("stat-wrong").textContent = total - correctCount;

    const timeSpent = 900 - this.secondsRemaining;
    const mins = Math.floor(timeSpent / 60);
    const secs = timeSpent % 60;
    document.getElementById("stat-time").textContent = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    document.getElementById("stat-level-pass").textContent = passed ? `Level ${this.currentLevel} PASSED` : `FAILED`;

    const titleEl = document.getElementById("results-title");
    const subtitleEl = document.getElementById("results-subtitle");
    const iconEl = document.getElementById("results-badge-icon");
    const btnCert = document.getElementById("btn-view-certificate");

    if (passed) {
      titleEl.textContent = "Congratulations! Level Passed!";
      subtitleEl.textContent = `You have demonstrated strong proficiency in Part ${this.currentPart} (Level ${this.currentLevel}).`;
      iconEl.className = "results-badge fa-solid fa-trophy";
      iconEl.style.color = "var(--accent-gold)";
      window.soundEngine?.playSuccess();
    } else {
      titleEl.textContent = "Keep Practicing!";
      subtitleEl.textContent = `You scored ${percentage}%. You need at least 70% to pass Level ${this.currentLevel}. Review the book chapters and try again!`;
      iconEl.className = "results-badge fa-solid fa-circle-xmark";
      iconEl.style.color = "var(--accent-danger)";
      window.soundEngine?.playError();
    }

    // Show certificate button if Level 5 passed
    btnCert.style.display = (passed && this.currentLevel === 5) ? "inline-flex" : "none";

    this.showScreen("quiz-results-screen");
  }

  showCertificate() {
    const certModal = document.getElementById("certificate-modal");
    if (!certModal) return;

    const partTitles = {
      1: "Part 1: Basic Dart Engineering",
      2: "Part 2: Core Dart Data Structures & Functions",
      3: "Part 3: Object-Oriented Architecture",
      4: "Part 4: Sound Null Safety & Exception Control",
      5: "Part 5: Asynchronous Dart & Reactive Streams",
      6: "Part 6: Advanced Dart 3 Architecture",
      7: "Part 7: Multi-Threaded Concurrency & Isolates"
    };

    document.getElementById("cert-part-title").textContent = partTitles[this.currentPart] || `Part ${this.currentPart}`;
    document.getElementById("cert-issue-date").textContent = `Issued: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
    document.getElementById("cert-id").textContent = `ID: DCB-2026-P${this.currentPart}-MASTER`;

    certModal.classList.add("active");
  }
}

window.quizEngine = new QuizEngine();
