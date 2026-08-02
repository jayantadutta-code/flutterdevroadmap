/* ==========================================================================
   YAML 3D FlipBook Engine - Multi-Sheet 3D Physics & Navigation Engine
   ========================================================================== */

class FlipBookEngine {
  constructor() {
    this.currentSheet = 0;
    this.totalSheets = 12;
    this.isFlipping = false;

    this.searchDatabase = [
      { id: 1, title: "1. YAML Basics", sheet: 2, exp: "YAML Ain't Markup Language introduction and syntax.", keywords: ["yaml", "basics", "extension", "yml"] },
      { id: 2, title: "2. Comments", sheet: 2, exp: "# Single-line and multi-line comment syntax.", keywords: ["comments", "#", "hash", "note"] },
      { id: 3, title: "3. Key-Value Pairs", sheet: 2, exp: "Basic key: value association syntax.", keywords: ["key", "value", "pair", "colon"] },
      { id: 4, title: "4. Strings & Quoting", sheet: 2, exp: "Unquoted, single quotes, double quotes, and escapes.", keywords: ["string", "quotes", "text", "escape"] },
      { id: 5, title: "5. Numbers (Int, Float, Sci)", sheet: 2, exp: "Integers, floats, negative numbers, and scientific 2e5.", keywords: ["number", "int", "float", "scientific", "math"] },
      { id: 6, title: "6. Booleans", sheet: 3, exp: "true, false, yes, no, on, off values.", keywords: ["boolean", "bool", "true", "false", "yes", "no"] },
      { id: 7, title: "7. Null Values", sheet: 3, exp: "null, ~ (tilde), and blank representations.", keywords: ["null", "tilde", "blank", "none", "empty"] },
      { id: 8, title: "8. Lists & Arrays", sheet: 3, exp: "Block style (- item) and flow style [a, b].", keywords: ["list", "array", "dash", "sequence"] },
      { id: 9, title: "9. Nested Lists & Matrices", sheet: 3, exp: "List of lists and multidimensional matrices.", keywords: ["matrix", "nested list", "multidimensional"] },
      { id: 10, title: "10. Dictionaries (Objects)", sheet: 4, exp: "Mapping objects and key-value dictionaries.", keywords: ["object", "dictionary", "map", "dict"] },
      { id: 11, title: "11. Nested Objects", sheet: 4, exp: "Deeply nested key-value objects.", keywords: ["nested object", "hierarchy", "deep"] },
      { id: 12, title: "12. List of Objects", sheet: 4, exp: "Sequence of maps/objects.", keywords: ["list of objects", "records", "items"] },
      { id: 13, title: "13. Inline Objects", sheet: 4, exp: "Flow style object syntax {x: 1, y: 2}.", keywords: ["inline object", "flow object", "braces"] },
      { id: 14, title: "14. Mixed Data Structures", sheet: 4, exp: "Combining lists, scalars, and objects.", keywords: ["mixed", "complex", "schema"] },
      { id: 15, title: "15. Indentation Rules", sheet: 5, exp: "Golden rule: use spaces only, NEVER tabs!", keywords: ["indentation", "spaces", "tabs", "rule"] },
      { id: 16, title: "16. Multi-Document Stream (---)", sheet: 5, exp: "Separating multiple YAML documents with ---.", keywords: ["multi-document", "stream", "---", "separator"] },
      { id: 17, title: "17. Anchors (&anchor)", sheet: 5, exp: "Defining reusable data nodes with &.", keywords: ["anchor", "&", "reuse", "dry"] },
      { id: 18, title: "18. Aliases (*alias)", sheet: 5, exp: "Referencing anchored nodes with *.", keywords: ["alias", "*", "reference", "link"] },
      { id: 19, title: "19. Merge Keys (<<)", sheet: 5, exp: "Merging base maps with <<.", keywords: ["merge", "<<", "combine", "override"] },
      { id: 20, title: "20. Explicit Types (!!)", sheet: 6, exp: "Explicit data tags !!str, !!int, !!float, !!bool.", keywords: ["explicit", "tags", "!!", "type casting"] },
      { id: 21, title: "21. Special Chars & Unicode", sheet: 6, exp: "Escape sequences \\n, \\t, and \\u2764.", keywords: ["unicode", "escape", "special chars"] },
      { id: 22, title: "22. Dates", sheet: 6, exp: "ISO date format YYYY-MM-DD.", keywords: ["date", "calendar", "day"] },
      { id: 23, title: "23. Timestamps", sheet: 6, exp: "ISO-8601 UTC timestamps.", keywords: ["timestamp", "time", "iso8601"] },
      { id: 24, title: "24. Env Vars Templating", sheet: 6, exp: "${DB_HOST} environment variable expansion.", keywords: ["env", "environment", "variable", "template"] },
      { id: 25, title: "25. Kubernetes Pods", sheet: 7, exp: "k8s apiVersion, kind, metadata, spec.", keywords: ["kubernetes", "k8s", "pod", "devops"] },
      { id: 26, title: "26. Docker Compose", sheet: 7, exp: "services, image, ports, docker-compose.", keywords: ["docker", "compose", "container", "services"] },
      { id: 27, title: "27. GitHub Actions Workflow", sheet: 7, exp: "name, on, jobs, steps, action workflows.", keywords: ["github actions", "cicd", "workflow", "jobs"] },
      { id: 28, title: "28. Flutter pubspec.yaml", sheet: 7, exp: "name, version, environment, dependencies.", keywords: ["flutter", "pubspec", "dart", "dependencies"] },
      { id: 29, title: "29. Reserved Characters", sheet: 8, exp: "Special characters requiring quotes.", keywords: ["reserved", "special", "quote rule"] },
      { id: 30, title: "30. Common Mistakes", sheet: 8, exp: "Tabs, missing spaces after colons, indentation errors.", keywords: ["mistakes", "pitfalls", "errors", "bugs"] },
      { id: 31, title: "31. Best Practices", sheet: 8, exp: "Production guidelines and code clean habits.", keywords: ["best practices", "guidelines", "clean code"] },
      { id: 32, title: "32. YAML vs JSON", sheet: 8, exp: "Feature matrix comparison.", keywords: ["json", "vs", "comparison", "contrast"] },
      { id: 33, title: "33. Data Types Summary", sheet: 9, exp: "Complete data types summary table.", keywords: ["types", "summary", "overview"] },
      { id: 34, title: "34. Block vs Flow Style", sheet: 9, exp: "Readability vs inline brevity.", keywords: ["block", "flow", "style", "inline"] },
      { id: 35, title: "35. Multiline Chomping (|- |+)", sheet: 9, exp: "Strip (-) and keep (+) chomping indicators.", keywords: ["chomping", "multiline", "strip", "keep"] },
      { id: 36, title: "36. Ecosystem Uses", sheet: 9, exp: "Real-world tech stack tools.", keywords: ["ecosystem", "ansible", "helm", "devops"] },
      { id: 37, title: "37. Quick Reference", sheet: 10, exp: "All-in-one comprehensive YAML reference code block.", keywords: ["cheat sheet", "reference", "all in one"] },
      { id: 38, title: "38. Learning Roadmap", sheet: 10, exp: "Beginner, Intermediate, Advanced mastery roadmap.", keywords: ["roadmap", "learning", "guide", "mastery"] }
    ];

    this.init();
  }

  init() {
    this.sheets = Array.from(document.querySelectorAll('.paper-sheet'));
    this.totalSheets = this.sheets.length;
    this.book3d = document.getElementById('book3d');
    this.prevBtn = document.getElementById('prevPageBtn');
    this.nextBtn = document.getElementById('nextPageBtn');
    this.currentPageNumEl = document.getElementById('currentPageNum');
    this.totalPagesNumEl = document.getElementById('totalPagesNum');

    if (this.totalPagesNumEl) {
      this.totalPagesNumEl.textContent = this.totalSheets - 1;
    }

    this.updateBookState();
    this.buildTOCDrawer();
    this.bindEvents();
  }

  updateBookState() {
    if (!this.book3d) return;

    if (this.currentSheet === 0) {
      this.book3d.className = 'book-3d at-cover';
    } else if (this.currentSheet === this.totalSheets) {
      this.book3d.className = 'book-3d at-back-cover';
    } else {
      this.book3d.className = 'book-3d';
    }

    this.sheets.forEach((sheet, idx) => {
      if (idx < this.currentSheet) {
        sheet.classList.add('flipped');
        sheet.style.zIndex = idx;
      } else {
        sheet.classList.remove('flipped');
        sheet.style.zIndex = this.totalSheets - idx;
      }
    });

    if (this.currentPageNumEl) {
      if (this.currentSheet === 0) {
        this.currentPageNumEl.textContent = 'Spread 0 (Front Cover)';
      } else if (this.currentSheet === this.totalSheets) {
        this.currentPageNumEl.textContent = 'Book Closed (Rear Cover)';
      } else {
        this.currentPageNumEl.textContent = `Spread ${this.currentSheet}`;
      }
    }

    if (this.prevBtn) this.prevBtn.disabled = (this.currentSheet === 0);
    if (this.nextBtn) this.nextBtn.disabled = (this.currentSheet === this.totalSheets);

    this.updateTOCState();
  }

  turnNext() {
    if (this.isFlipping || this.currentSheet >= this.totalSheets) return;
    this.isFlipping = true;

    if (window.soundEngine) window.soundEngine.playPageTurn();

    this.currentSheet++;
    this.updateBookState();

    setTimeout(() => {
      this.isFlipping = false;
    }, 850);
  }

  turnPrev() {
    if (this.isFlipping || this.currentSheet <= 0) return;
    this.isFlipping = true;

    if (window.soundEngine) window.soundEngine.playPageTurn();

    this.currentSheet--;
    this.updateBookState();

    setTimeout(() => {
      this.isFlipping = false;
    }, 850);
  }

  jumpToSheet(sheetIndex) {
    if (sheetIndex < 0 || sheetIndex > this.totalSheets) return;
    if (this.currentSheet === sheetIndex) return;

    if (window.soundEngine) window.soundEngine.playPageTurn();
    this.currentSheet = sheetIndex;
    this.updateBookState();

    // Close TOC drawer if open
    this.closeTOC();
  }

  bindEvents() {
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.turnPrev());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.turnNext());

    // Page Face & Corner Curl Click Listeners
    this.sheets.forEach((sheet) => {
      const frontFace = sheet.querySelector('.page-front');
      const backFace = sheet.querySelector('.page-back');

      if (frontFace) {
        frontFace.addEventListener('click', (e) => {
          if (e.target.closest('button') || 
              e.target.closest('input') || 
              e.target.closest('a') || 
              e.target.closest('select') || 
              e.target.closest('textarea') || 
              e.target.closest('.code-actions') || 
              e.target.closest('.toc-card') || 
              e.target.closest('.search-box')) return;

          const selection = window.getSelection();
          if (selection && selection.toString().length > 0) return;

          this.turnNext();
        });
      }

      if (backFace) {
        backFace.addEventListener('click', (e) => {
          if (e.target.closest('button') || 
              e.target.closest('input') || 
              e.target.closest('a') || 
              e.target.closest('select') || 
              e.target.closest('textarea') || 
              e.target.closest('.code-actions') || 
              e.target.closest('.toc-card') || 
              e.target.closest('.search-box')) return;

          const selection = window.getSelection();
          if (selection && selection.toString().length > 0) return;

          this.turnPrev();
        });
      }
    });

    // Keyboard Arrow Keys & Page Navigation
    document.addEventListener('keydown', (e) => {
      const activeSection = document.querySelector('.view-section.active');
      if (!activeSection || activeSection.id !== 'view-book') return;

      // Don't trigger if user is typing in search input
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        this.turnNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        this.turnPrev();
      }
    });

    // Mouse Wheel Scroll Page Turning
    let lastWheelTime = 0;
    const wheelCooldown = 550; // ms between wheel page turns

    const handleWheelScroll = (e) => {
      const activeSection = document.querySelector('.view-section.active');
      if (!activeSection || activeSection.id !== 'view-book') return;

      // Don't flip if TOC drawer is open
      if (document.getElementById('toc-drawer')?.classList.contains('open')) return;

      // Check if user is scrolling inside an overflowing page-content div
      const scrollableContent = e.target.closest('.page-content');
      if (scrollableContent) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
        const isOverflowing = scrollHeight > clientHeight + 5;
        if (isOverflowing) {
          const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
          const atTop = scrollTop <= 5;
          if (e.deltaY > 0 && !atBottom) return; // scroll down inside content
          if (e.deltaY < 0 && !atTop) return;    // scroll up inside content
        }
      }

      const now = Date.now();
      if (now - lastWheelTime < wheelCooldown) return;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 15) return; // ignore micro-scrolls

      if (delta > 0) {
        lastWheelTime = now;
        this.turnNext();
      } else if (delta < 0) {
        lastWheelTime = now;
        this.turnPrev();
      }
    };

    const bookContainer = document.querySelector('.flipbook-wrapper') || document;
    bookContainer.addEventListener('wheel', handleWheelScroll, { passive: true });

    // Mouse Drag / Swipe Page Turning
    let dragStartX = 0;
    let dragStartY = 0;
    let isDragging = false;

    const bookViewport = document.querySelector('.book-viewport') || bookContainer;

    bookViewport.addEventListener('mousedown', (e) => {
      if (e.target.closest('button, input, select, textarea, a, .code-actions, .toc-card')) return;
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) return;

      isDragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
    });

    document.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = e.clientX - dragStartX;
      const diffY = e.clientY - dragStartY;

      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          this.turnNext();
        } else {
          this.turnPrev();
        }
      }
    });

    // TOC Toggle
    const tocBtn = document.getElementById('toc-toggle-btn');
    const tocCloseBtn = document.getElementById('toc-close-btn');
    const tocBackdrop = document.getElementById('toc-backdrop');

    if (tocBtn) tocBtn.addEventListener('click', () => this.toggleTOC());
    if (tocCloseBtn) tocCloseBtn.addEventListener('click', () => this.closeTOC());
    if (tocBackdrop) tocBackdrop.addEventListener('click', () => this.closeTOC());

    // Search Input Logic
    const searchInput = document.getElementById('commandSearchInput');
    const searchResults = document.getElementById('searchSearchResults');

    if (searchInput && searchResults) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
          searchResults.classList.add('hidden');
          return;
        }

        const matches = this.searchDatabase.filter(item => 
          item.title.toLowerCase().includes(query) ||
          item.exp.toLowerCase().includes(query) ||
          item.keywords.some(k => k.toLowerCase().includes(query))
        );

        if (matches.length === 0) {
          searchResults.innerHTML = `<div class="search-item"><small>No matching YAML topic found.</small></div>`;
        } else {
          searchResults.innerHTML = matches.map(item => `
            <div class="search-item" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToSheet(${item.sheet})">
              <code>${item.title}</code>
              <small>${item.exp} (Sheet ${item.sheet})</small>
            </div>
          `).join('');
        }

        searchResults.classList.remove('hidden');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
          searchResults.classList.add('hidden');
        }
      });
    }
  }

  toggleTOC() {
    const drawer = document.getElementById('toc-drawer');
    const backdrop = document.getElementById('toc-backdrop');
    if (drawer && backdrop) {
      drawer.classList.toggle('open');
      backdrop.classList.toggle('open');
    }
  }

  closeTOC() {
    const drawer = document.getElementById('toc-drawer');
    const backdrop = document.getElementById('toc-backdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
    }
  }

  buildTOCDrawer() {
    const list = document.getElementById('toc-list');
    if (!list) return;

    const modules = [
      { num: "Cover", title: "Book Cover & Preface", sheet: 0 },
      { num: "Index", title: "Master Table of Contents", sheet: 1 },
      { num: "Mod 1", title: "Basics, Comments & Numbers", sheet: 2 },
      { num: "Mod 2", title: "Booleans, Nulls & Lists", sheet: 3 },
      { num: "Mod 3", title: "Dictionaries & Mixed Data", sheet: 4 },
      { num: "Mod 4", title: "Indentation, Anchors & Merges", sheet: 5 },
      { num: "Mod 5", title: "Explicit Types & Timestamps", sheet: 6 },
      { num: "Mod 6", title: "K8s, Docker, GitHub & Flutter", sheet: 7 },
      { num: "Mod 7", title: "Mistakes, Best Practices & JSON", sheet: 8 },
      { num: "Mod 8", title: "Data Types & Multiline Chomping", sheet: 9 },
      { num: "Mod 9", title: "Quick Reference & Roadmap", sheet: 10 },
      { num: "Rear", title: "Rear Cover & Credits", sheet: 11 }
    ];

    list.innerHTML = modules.map(m => `
      <li class="toc-item" id="toc-item-${m.sheet}" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToSheet(${m.sheet})">
        <div class="toc-item-title">${m.num}: ${m.title}</div>
        <div class="toc-item-meta">Spread ${m.sheet}</div>
      </li>
    `).join('');
  }

  updateTOCState() {
    const percent = Math.round((this.currentSheet / (this.totalSheets - 1)) * 100);
    const percentSpan = document.getElementById('toc-progress-percent');
    const barFill = document.getElementById('toc-progress-bar');

    if (percentSpan) percentSpan.textContent = `${percent}%`;
    if (barFill) barFill.style.width = `${percent}%`;

    document.querySelectorAll('.toc-item').forEach((item, idx) => {
      if (idx === this.currentSheet) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   Global Code Action Helpers (Copy & Try in Playground)
   -------------------------------------------------------------------------- */
function copyCodeBlock(btn) {
  const codeBlock = btn.closest('.book-code-block');
  if (!codeBlock) return;
  const codeText = codeBlock.querySelector('code').innerText;

  navigator.clipboard.writeText(codeText).then(() => {
    showToast('<i class="fa-solid fa-check"></i> Code copied to clipboard!');
  }).catch(() => {
    showToast('Failed to copy code.');
  });
}

function tryCodeInPlayground(btn) {
  const codeBlock = btn.closest('.book-code-block');
  if (!codeBlock) return;
  const codeText = codeBlock.querySelector('code').innerText;

  // Switch View to Playground
  switchMainView('playground');

  // Populate Editor & Validate
  const editor = document.getElementById('yaml-input-editor');
  if (editor) {
    editor.value = codeText;
    if (window.playgroundEngine) {
      window.playgroundEngine.validateAndParse();
    }
  }

  showToast('<i class="fa-solid fa-flask"></i> Loaded snippet into Live Playground!');
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = msg;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
