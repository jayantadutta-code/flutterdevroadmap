/* ==========================================================================
   YAML FlipBook - Gamified Q&A Arena & Achievements Engine (38-Topic Cheat Sheet Edition)
   ========================================================================== */

const QUIZ_QUESTIONS = {
  1: [ // Level 1: Basics, Comments & Data Types
    {
      id: "l1_q1",
      prompt: "What is 'The Golden Rule' of YAML indentation?",
      options: [
        "Use tabs for speed, spaces for alignment",
        "Whitespace indentation must use spaces only; tabs are strictly forbidden",
        "Indentation can mix 2 and 4 spaces freely",
        "Keys must always be enclosed in double quotes"
      ],
      answer: 1,
      xp: 50,
      explanation: "YAML uses spaces ONLY for indentation. Tabs cause immediate parsing errors because tab widths differ across text editors."
    },
    {
      id: "l1_q2",
      prompt: "Which of the following is NOT a valid representation of null in YAML?",
      options: [
        "middleName: null",
        "nickname: ~",
        "city: ",
        "country: nil"
      ],
      answer: 3,
      xp: 50,
      explanation: "YAML uses 'null', '~', or leaving the value blank for null. 'nil' is Ruby syntax and evaluates as the string 'nil' in YAML."
    },
    {
      id: "l1_q3",
      prompt: "What will unquoted 'distance: 2e5' evaluate to in a standard YAML parser?",
      options: [
        "String '2e5'",
        "Float 200000 (Scientific Notation)",
        "Syntax error",
        "Integer 25"
      ],
      answer: 1,
      xp: 50,
      explanation: "YAML automatically parses 2e5 in scientific notation as a float value 200000.0."
    },
    {
      id: "l1_q4",
      prompt: "Which tag explicitly casts a value to a string data type?",
      options: [
        "!!string 123",
        "!!str 123",
        "@str 123",
        "cast:string 123"
      ],
      answer: 1,
      xp: 50,
      explanation: "Double exclamation tag '!!str 123' explicitly forces the integer 123 to be parsed as a string '123'."
    }
  ],

  2: [ // Level 2: Multiline Strings, Lists & Objects
    {
      id: "l2_q1",
      prompt: "What is the difference between Literal '|' and Folded '>' multiline strings?",
      options: [
        "Literal (|) preserves newlines; Folded (>) converts newlines to spaces",
        "Literal (|) converts newlines to spaces; Folded (>) preserves them",
        "Literal (|) only allows numbers",
        "Folded (>) deletes all text"
      ],
      answer: 0,
      xp: 75,
      explanation: "Literal (|) preserves newlines exactly as typed (great for scripts), while Folded (>) folds single newlines into spaces (great for paragraphs)."
    },
    {
      id: "l2_q2",
      prompt: "What does the strip chomping indicator '|-' do?",
      options: [
        "Strips all trailing newlines at the end of the block scalar",
        "Keeps extra newlines at the end",
        "Removes all spaces between words",
        "Converts uppercase letters to lowercase"
      ],
      answer: 0,
      xp: 75,
      explanation: "The '-' chomping indicator (|- or >-) strips all trailing newlines from the block scalar output."
    },
    {
      id: "l2_q3",
      prompt: "What is the correct syntax for an inline Flow Style list in YAML?",
      options: [
        "fruits: (Apple, Mango, Banana)",
        "fruits: [Apple, Mango, Banana]",
        "fruits: {Apple, Mango, Banana}",
        "fruits: <Apple, Mango, Banana>"
      ],
      answer: 1,
      xp: 75,
      explanation: "Flow Style lists use square brackets [Item1, Item2, Item3], identical to JSON arrays."
    }
  ],

  3: [ // Level 3: Anchors, Aliases & Merge Keys
    {
      id: "l3_q1",
      prompt: "Which symbol defines a YAML Anchor for code reusability?",
      options: [
        "An asterisk (*)",
        "An ampersand (&)",
        "A percent sign (%)",
        "An exclamation mark (!)"
      ],
      answer: 1,
      xp: 100,
      explanation: "An ampersand (&name) defines an Anchor. An asterisk (*name) references the alias."
    },
    {
      id: "l3_q2",
      prompt: "What does the merge key '<<: *base' accomplish in a dictionary?",
      options: [
        "Deletes the base object",
        "Merges all key-value pairs from the anchored base dictionary into the current object",
        "Converts the dictionary into a list",
        "Encodes the data into Base64"
      ],
      answer: 1,
      xp: 100,
      explanation: "The merge key '<<: *base' merges the key-value pairs of the referenced anchor into the current dictionary."
    },
    {
      id: "l3_q3",
      prompt: "How are multiple YAML documents separated within a single file?",
      options: [
        "Using triple dashes (---)",
        "Using triple dots (...)",
        "Using equals signs (===)",
        "Using double hashes (##)"
      ],
      answer: 0,
      xp: 100,
      explanation: "YAML uses three dashes '---' to separate multiple documents in a single stream file."
    }
  ],

  4: [ // Level 4: DevOps & Real-World Configurations
    {
      id: "l4_q1",
      prompt: "In Docker Compose, why is port mapping '80:80' usually enclosed in double quotes?",
      options: [
        "To prevent YAML parsers from evaluating 80:80 as a base-60 (sexagesimal) number",
        "Docker will crash without quotes",
        "Quotes make the port run faster",
        "It is required by Linux kernel"
      ],
      answer: 0,
      xp: 150,
      explanation: "Unquoted 80:80 can be interpreted by YAML 1.1 parsers as sexagesimal (base 60) numbers! Quoting '80:80' ensures it remains a string."
    },
    {
      id: "l4_q2",
      prompt: "Which file relies on YAML for Flutter project dependencies and metadata?",
      options: [
        "pubspec.yaml",
        "flutter.config.json",
        "build.gradle.yaml",
        "CMakeLists.yaml"
      ],
      answer: 0,
      xp: 150,
      explanation: "Flutter projects use 'pubspec.yaml' to specify package metadata, Dart SDK requirements, dependencies, and assets."
    },
    {
      id: "l4_q3",
      prompt: "What is a major advantage of YAML over JSON for configuration files?",
      options: [
        "YAML supports single-line (#) comments while standard JSON does not",
        "JSON is faster to read for humans",
        "JSON does not require quotes",
        "YAML can only be used in Python"
      ],
      answer: 0,
      xp: 150,
      explanation: "YAML supports native single-line comments (#) and cleaner indentation without mandatory brackets, making it ideal for human configuration."
    }
  ]
};

const ALL_BADGES = [
  { id: "badge_first", title: "First Step", desc: "Answer your first quiz question correctly", icon: "fa-solid fa-seedling" },
  { id: "badge_indent", title: "Indent Specialist", desc: "Complete Level 1 Basics", icon: "fa-solid fa-ruler-combined" },
  { id: "badge_bug", title: "Multiline Master", desc: "Master block scalars & chomping", icon: "fa-solid fa-align-left" },
  { id: "badge_anchor", title: "Anchor Architect", desc: "Master YAML Anchors & Merge keys", icon: "fa-solid fa-anchor" },
  { id: "badge_devops", title: "DevOps & Flutter Hero", desc: "Conquer K8s, Docker & pubspec.yaml challenges", icon: "fa-solid fa-cubes" },
  { id: "badge_grandmaster", title: "YAML Grandmaster", desc: "Reach 500+ Total XP", icon: "fa-solid fa-crown" }
];

class QuizEngine {
  constructor() {
    this.currentLevel = 1;
    this.currentQuestionIndex = 0;
    this.userXP = parseInt(localStorage.getItem('yaml_user_xp') || '0');
    this.streak = 0;
    this.totalAnswered = 0;
    this.totalCorrect = 0;
    this.unlockedBadges = JSON.parse(localStorage.getItem('yaml_unlocked_badges') || '[]');

    this.init();
  }

  init() {
    this.renderHeaderStats();
    this.renderBadgesGrid();
    this.loadQuestion();
    this.bindEvents();
  }

  setLevel(levelNum) {
    this.currentLevel = levelNum;
    this.currentQuestionIndex = 0;
    this.loadQuestion();
    this.updateLevelTabsUI();
  }

  updateLevelTabsUI() {
    const tabs = document.querySelectorAll('.level-btn');
    tabs.forEach(tab => {
      const level = parseInt(tab.getAttribute('data-level'));
      if (level === this.currentLevel) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  loadQuestion() {
    const levelQuestions = QUIZ_QUESTIONS[this.currentLevel];
    if (!levelQuestions || this.currentQuestionIndex >= levelQuestions.length) {
      this.renderLevelCompletion();
      return;
    }

    const q = levelQuestions[this.currentQuestionIndex];

    // Card elements
    document.getElementById('q-category-tag').textContent = `Level ${this.currentLevel}: Challenge ${this.currentQuestionIndex + 1}`;
    document.getElementById('q-counter-text').textContent = `Question ${this.currentQuestionIndex + 1} of ${levelQuestions.length}`;
    document.getElementById('q-xp-value').textContent = q.xp;
    document.getElementById('q-prompt-text').textContent = q.prompt;

    // Code container
    const codeContainer = document.getElementById('q-code-container');
    const codeBlock = document.getElementById('q-code-block');
    if (q.code) {
      codeBlock.textContent = q.code;
      codeContainer.classList.remove('hidden');
    } else {
      codeContainer.classList.add('hidden');
    }

    // Explanation Box & Next Btn
    document.getElementById('explanation-box').classList.add('hidden');
    document.getElementById('next-q-btn').classList.add('hidden');

    // Options Grid
    const optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';

    q.options.forEach((optText, idx) => {
      const optionCard = document.createElement('div');
      optionCard.className = 'option-card';
      optionCard.innerHTML = `
        <span class="option-prefix">${String.fromCharCode(65 + idx)}</span>
        <span class="option-text">${optText}</span>
      `;
      optionCard.addEventListener('click', () => this.handleOptionClick(idx, optionCard, q));
      optionsGrid.appendChild(optionCard);
    });
  }

  handleOptionClick(selectedIdx, cardElement, q) {
    const cards = document.querySelectorAll('.option-card');
    if (cards[0].classList.contains('disabled')) return;

    cards.forEach(c => c.classList.add('disabled'));
    this.totalAnswered++;

    if (selectedIdx === q.answer) {
      cardElement.classList.add('correct');
      soundEngine.playCorrect();
      this.streak++;
      this.totalCorrect++;

      const earnedXP = q.xp + (this.streak > 1 ? 20 : 0);
      this.addXP(earnedXP);

      if (typeof confetti === 'function') {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      }

      this.checkBadges();
    } else {
      cardElement.classList.add('wrong');
      cards[q.answer].classList.add('correct');
      soundEngine.playWrong();
      this.streak = 0;
    }

    const expBox = document.getElementById('explanation-box');
    const expText = document.getElementById('exp-text');
    expText.textContent = q.explanation;
    expBox.classList.remove('hidden');

    document.getElementById('next-q-btn').classList.remove('hidden');
    this.renderHeaderStats();
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.loadQuestion();
  }

  renderLevelCompletion() {
    const prompt = document.getElementById('q-prompt-text');
    const codeContainer = document.getElementById('q-code-container');
    const optionsGrid = document.getElementById('options-grid');
    const expBox = document.getElementById('explanation-box');
    const nextBtn = document.getElementById('next-q-btn');

    codeContainer.classList.add('hidden');
    expBox.classList.add('hidden');
    nextBtn.classList.add('hidden');

    prompt.innerHTML = `<i class="fa-solid fa-trophy" style="color:#f59e0b;"></i> Level ${this.currentLevel} Completed!`;

    optionsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 1.5rem; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid var(--border-color);">
        <p style="font-size: 1.1rem; margin-bottom: 1rem;">Great job! You have mastered Level ${this.currentLevel}.</p>
        <button class="action-btn primary-btn" onclick="selectNextLevel()">
          Continue to Next Level <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
  }

  addXP(amount) {
    this.userXP += amount;
    localStorage.setItem('yaml_user_xp', this.userXP);
    this.renderHeaderStats();
  }

  checkBadges() {
    const newUnlocked = [];

    if (this.totalCorrect >= 1 && !this.unlockedBadges.includes('badge_first')) {
      newUnlocked.push('badge_first');
    }
    if (this.currentLevel >= 1 && this.totalCorrect >= 3 && !this.unlockedBadges.includes('badge_indent')) {
      newUnlocked.push('badge_indent');
    }
    if (this.currentLevel >= 2 && !this.unlockedBadges.includes('badge_bug')) {
      newUnlocked.push('badge_bug');
    }
    if (this.currentLevel >= 3 && !this.unlockedBadges.includes('badge_anchor')) {
      newUnlocked.push('badge_anchor');
    }
    if (this.currentLevel >= 4 && !this.unlockedBadges.includes('badge_devops')) {
      newUnlocked.push('badge_devops');
    }
    if (this.userXP >= 500 && !this.unlockedBadges.includes('badge_grandmaster')) {
      newUnlocked.push('badge_grandmaster');
    }

    if (newUnlocked.length > 0) {
      this.unlockedBadges.push(...newUnlocked);
      localStorage.setItem('yaml_unlocked_badges', JSON.stringify(this.unlockedBadges));
      this.renderBadgesGrid();
    }
  }

  getUserRank() {
    if (this.userXP >= 600) return "YAML Grandmaster";
    if (this.userXP >= 400) return "DevOps Architect";
    if (this.userXP >= 250) return "Anchor Master";
    if (this.userXP >= 100) return "YAML Apprentice";
    return "YAML Novice";
  }

  renderHeaderStats() {
    document.getElementById('user-xp-display').textContent = this.userXP;
    document.getElementById('user-rank-display').textContent = this.getUserRank();
    document.getElementById('quiz-streak-count').textContent = this.streak;
    document.getElementById('unlocked-badges-count').textContent = `${this.unlockedBadges.length}/${ALL_BADGES.length}`;

    const acc = this.totalAnswered > 0 ? Math.round((this.totalCorrect / this.totalAnswered) * 100) : 100;
    document.getElementById('quiz-accuracy-score').textContent = `${acc}%`;

    const modalXP = document.getElementById('modal-player-xp');
    const modalRank = document.getElementById('modal-player-rank');
    if (modalXP) modalXP.textContent = this.userXP;
    if (modalRank) modalRank.textContent = this.getUserRank();
  }

  renderBadgesGrid() {
    const grid = document.getElementById('badges-grid');
    const modalGrid = document.getElementById('modal-badges-container');
    if (!grid) return;

    let html = '';
    ALL_BADGES.forEach(b => {
      const isUnlocked = this.unlockedBadges.includes(b.id);
      html += `
        <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="badge-icon"><i class="${b.icon}"></i></div>
          <div class="badge-info">
            <div class="badge-name">${b.title}</div>
            <div class="badge-desc">${b.desc}</div>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
    if (modalGrid) modalGrid.innerHTML = html;
  }

  bindEvents() {
    document.getElementById('player-stats-btn').addEventListener('click', () => {
      document.getElementById('badges-modal').classList.remove('hidden');
    });
  }
}

// Global functions for quiz UI controls
function selectQuizLevel(levelNum) {
  if (window.quizEngine) {
    window.quizEngine.setLevel(levelNum);
  }
}

function selectNextLevel() {
  if (window.quizEngine) {
    const nextLvl = Math.min(4, window.quizEngine.currentLevel + 1);
    window.quizEngine.setLevel(nextLvl);
  }
}

function handleNextQuestion() {
  if (window.quizEngine) {
    window.quizEngine.nextQuestion();
  }
}

function closeBadgesModal() {
  document.getElementById('badges-modal').classList.add('hidden');
}
