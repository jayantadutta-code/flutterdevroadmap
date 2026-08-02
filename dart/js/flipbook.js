/* ==========================================================================
   Dart Cookbook - 3D FlipBook Physics & Navigation Engine
   ========================================================================== */

class FlipBookEngine {
  constructor() {
    this.currentSheet = 0;
    this.maxSheetIndex = 7;
    this.totalParts = 7;
    this.isFlipping = false;

    this.searchDatabase = [
      // Part 1: Basics
      { id: 1, title: "1.1 Introduction to Dart", sheet: 1, moduleIdx: 0, exp: "Dart origins, client optimization, native & web compilation.", keywords: ["intro", "introduction", "dart", "jit", "aot"] },
      { id: 2, title: "1.2 Comments", sheet: 1, moduleIdx: 0, exp: "Single-line //, multi-line /* */, doc comments ///.", keywords: ["comments", "//", "doc", "documentation"] },
      { id: 3, title: "1.3 Variables and Data Types", sheet: 1, moduleIdx: 0, exp: "var, final, const, explicit types int, String, bool.", keywords: ["variables", "types", "var", "final", "const"] },
      { id: 4, title: "1.4 Number", sheet: 1, moduleIdx: 0, exp: "int, double, num, parsing and rounding methods.", keywords: ["number", "int", "double", "num", "parse"] },
      { id: 5, title: "1.5 String", sheet: 1, moduleIdx: 0, exp: "String interpolation $var, ${expr}, multiline ''' strings.", keywords: ["string", "text", "interpolation", "multiline"] },
      { id: 6, title: "1.6 Regular Expression", sheet: 1, moduleIdx: 0, exp: "RegExp pattern matching, email & text validation.", keywords: ["regex", "regexp", "pattern", "matching"] },
      { id: 7, title: "1.7 String Buffer", sheet: 1, moduleIdx: 0, exp: "StringBuffer for memory-efficient string concatenation.", keywords: ["stringbuffer", "buffer", "write", "performance"] },
      { id: 8, title: "1.8 Operators", sheet: 1, moduleIdx: 0, exp: "Arithmetic, relational, cascade .., null-aware ?? and ??=.", keywords: ["operators", "cascade", "null-coalescing", "arithmetic"] },
      { id: 9, title: "1.9 Conditions", sheet: 1, moduleIdx: 0, exp: "if, else if, else, ternary operator ? :.", keywords: ["conditions", "if", "else", "ternary"] },
      { id: 10, title: "1.10 Loops", sheet: 1, moduleIdx: 0, exp: "for, for-in, forEach, while, do-while, break, continue.", keywords: ["loops", "for", "while", "foreach", "break"] },

      // Part 2: Core Dart
      { id: 11, title: "2.1 Function", sheet: 2, moduleIdx: 1, exp: "Function signatures, parameters, return types, arrow => syntax.", keywords: ["function", "arrow", "return", "params"] },
      { id: 12, title: "2.2 Function Advance", sheet: 2, moduleIdx: 1, exp: "Named params {required}, positional, default values, higher-order.", keywords: ["named parameters", "positional", "required", "closure"] },
      { id: 13, title: "2.3 List", sheet: 2, moduleIdx: 1, exp: "List methods, spread operator ..., collection if/for.", keywords: ["list", "array", "spread", "collection"] },
      { id: 14, title: "2.4 Set", sheet: 2, moduleIdx: 1, exp: "Unordered collection of unique items, set union & intersection.", keywords: ["set", "unique", "union", "intersection"] },
      { id: 15, title: "2.5 Map", sheet: 2, moduleIdx: 1, exp: "Key-value dictionary mapping, putIfAbsent, entries iteration.", keywords: ["map", "dictionary", "key", "value"] },

      // Part 3: OOP
      { id: 16, title: "3.1 Classes and Object", sheet: 3, moduleIdx: 2, exp: "Class fields, methods, instantiation of objects.", keywords: ["class", "object", "instance", "method"] },
      { id: 17, title: "3.2 Constructor", sheet: 3, moduleIdx: 2, exp: "Generative, named, redirecting, const, factory constructors.", keywords: ["constructor", "factory", "named", "const constructor"] },
      { id: 18, title: "3.3 Inheritance", sheet: 3, moduleIdx: 2, exp: "Subclassing with extends, super keyword, @override.", keywords: ["inheritance", "extends", "super", "override"] },
      { id: 19, title: "3.4 Abstract Classes", sheet: 3, moduleIdx: 2, exp: "abstract class blueprints, abstract methods & getters.", keywords: ["abstract", "class", "blueprint", "shape"] },
      { id: 20, title: "3.5 Interfaces", sheet: 3, moduleIdx: 2, exp: "Implicit interfaces, implements keyword, multi-interface contracts.", keywords: ["interface", "implements", "contract"] },
      { id: 21, title: "3.6 Mixins", sheet: 3, moduleIdx: 2, exp: "Code reuse with mixin and with keywords, on constraints.", keywords: ["mixin", "with", "multiple inheritance", "reuse"] },
      { id: 22, title: "3.7 Static and Constant Member", sheet: 3, moduleIdx: 2, exp: "static variables & methods, class-level static const memory.", keywords: ["static", "const member", "class variable"] },

      // Part 4: Safety & Control
      { id: 23, title: "4.1 Null Safety", sheet: 4, moduleIdx: 3, exp: "Sound null safety, nullable ?, late, null assertion !, ??, ?. operators.", keywords: ["null safety", "nullable", "late", "null check"] },
      { id: 24, title: "4.2 Exception Handling", sheet: 4, moduleIdx: 3, exp: "try, on Exception, catch (e, s), finally, throw custom errors.", keywords: ["exception", "try catch", "finally", "throw", "error"] },
      { id: 25, title: "4.3 Enums", sheet: 4, moduleIdx: 3, exp: "Simple enums and enhanced enums with properties, getters & constructors.", keywords: ["enum", "enhanced enum", "values", "switch"] },

      // Part 5: Asynchronous
      { id: 26, title: "5.1 Futures", sheet: 5, moduleIdx: 4, exp: "Future<T>, completed vs uncompleted, delayed, then, catchError.", keywords: ["future", "async", "promise", "delay"] },
      { id: 27, title: "5.2 Async", sheet: 5, moduleIdx: 4, exp: "async keyword returning futures implicitly.", keywords: ["async", "keyword", "function"] },
      { id: 28, title: "5.3 Await", sheet: 5, moduleIdx: 4, exp: "await keyword pausing execution for async completion.", keywords: ["await", "blocking async", "wait"] },
      { id: 29, title: "5.4 Stream", sheet: 5, moduleIdx: 4, exp: "Stream<T>, StreamController, single-subscription vs broadcast.", keywords: ["stream", "streamcontroller", "listen", "reactive"] },
      { id: 30, title: "5.5 Generators (async*)", sheet: 5, moduleIdx: 4, exp: "sync* with yield for Iterable, async* with yield for Stream.", keywords: ["generator", "async*", "sync*", "yield"] },
      { id: 31, title: "5.6 Event Loop", sheet: 5, moduleIdx: 4, exp: "Event loop execution semantics, Microtask queue vs Event queue.", keywords: ["event loop", "microtask", "queue", "scheduleMicrotask"] },

      // Part 6: Advance
      { id: 32, title: "6.1 Generics", sheet: 6, moduleIdx: 5, exp: "Generic type safety <T>, generic classes & methods, bounds T extends num.", keywords: ["generics", "template", "<T>", "type bound"] },
      { id: 33, title: "6.2 Extension", sheet: 6, moduleIdx: 5, exp: "extension on Type syntax adding methods to built-in types.", keywords: ["extension", "extension methods", "utility"] },
      { id: 34, title: "6.3 Lambda + Functional Programming", sheet: 6, moduleIdx: 5, exp: "Higher-order functions, map, where, fold, reduce, immutability.", keywords: ["lambda", "functional programming", "map", "where", "fold"] },
      { id: 35, title: "6.4 File Handling", sheet: 3, moduleIdx: 5, exp: "dart:io File, Directory reading and writing text & bytes.", keywords: ["file handling", "dart:io", "readAsString", "writeAsString"] },
      { id: 36, title: "6.5 Dart 3 Features", sheet: 6, moduleIdx: 5, exp: "Records (a, b), pattern matching, switch expressions, sealed classes.", keywords: ["dart 3", "records", "patterns", "switch expression", "sealed"] },

      // Part 7: Concurrency
      { id: 37, title: "7.1 Isolates", sheet: 7, moduleIdx: 6, exp: "Isolate.run(), ReceivePort, SendPort background thread concurrency.", keywords: ["isolates", "concurrency", "multithreading", "receiveport", "sendport"] }
    ];

    this.init();
  }

  init() {
    this.sheets = Array.from(document.querySelectorAll('.paper-sheet'));
    this.maxSheetIndex = this.sheets.length - 1; // 7 (Sheets 0 to 7)
    this.totalParts = 7;
    this.book3d = document.getElementById('book3d');
    this.prevBtn = document.getElementById('prevPageBtn');
    this.nextBtn = document.getElementById('nextPageBtn');
    this.currentPageNumEl = document.getElementById('currentPageNum');
    this.totalPagesNumEl = document.getElementById('totalPagesNum');

    if (this.totalPagesNumEl) {
      this.totalPagesNumEl.textContent = this.totalParts;
    }

    this.updateBookState();
    this.buildTOCDrawer();
    this.bindEvents();
  }

  updateBookState() {
    if (!this.book3d) return;

    if (this.currentSheet === 0) {
      this.book3d.className = 'book-3d at-cover';
    } else if (this.currentSheet === this.maxSheetIndex) {
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
        sheet.style.zIndex = (this.maxSheetIndex + 1) - idx;
      }
    });

    if (this.currentPageNumEl) {
      if (this.currentSheet === 0) {
        this.currentPageNumEl.textContent = 'Spread 0 (Front Cover)';
      } else {
        this.currentPageNumEl.textContent = `Part ${this.currentSheet} of ${this.totalParts}`;
      }
    }

    if (this.prevBtn) this.prevBtn.disabled = (this.currentSheet === 0);
    if (this.nextBtn) this.nextBtn.disabled = (this.currentSheet === this.maxSheetIndex);
  }

  turnNext() {
    if (this.currentSheet < this.maxSheetIndex && !this.isFlipping) {
      this.isFlipping = true;
      if (window.soundEngine) window.soundEngine.playPageFlip();
      this.currentSheet++;
      this.updateBookState();
      setTimeout(() => { this.isFlipping = false; }, 600);
    }
  }

  nextPage() {
    this.turnNext();
  }

  turnPrev() {
    if (this.currentSheet > 0 && !this.isFlipping) {
      this.isFlipping = true;
      if (window.soundEngine) window.soundEngine.playPageFlip();
      this.currentSheet--;
      this.updateBookState();
      setTimeout(() => { this.isFlipping = false; }, 600);
    }
  }

  prevPage() {
    this.turnPrev();
  }

  jumpToModule(moduleIndex) {
    if (moduleIndex >= 0 && moduleIndex < this.totalParts) {
      if (window.soundEngine) window.soundEngine.playPageFlip();
      this.currentSheet = moduleIndex + 1;
      this.updateBookState();
    }
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
          if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('select') || e.target.closest('textarea')) return;
          const selection = window.getSelection();
          if (selection && selection.toString().length > 0) return;
          this.turnNext();
        });
      }

      if (backFace) {
        backFace.addEventListener('click', (e) => {
          if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('select') || e.target.closest('textarea')) return;
          const selection = window.getSelection();
          if (selection && selection.toString().length > 0) return;
          this.turnPrev();
        });
      }
    });

    // Keyboard Arrow navigation
    document.addEventListener('keydown', (e) => {
      const activeView = document.querySelector('.view-section.active');
      if (activeView && activeView.id === 'view-book') {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') this.turnNext();
        if (e.key === 'ArrowLeft' || e.key === 'PageUp') this.turnPrev();
      }
    });

    // TOC Toggle
    const tocBtn = document.getElementById('toc-toggle-btn');
    const tocDrawer = document.getElementById('toc-drawer');
    const tocCloseBtn = document.getElementById('toc-close-btn');

    if (tocBtn && tocDrawer) {
      tocBtn.addEventListener('click', () => tocDrawer.classList.toggle('open'));
    }
    if (tocCloseBtn && tocDrawer) {
      tocCloseBtn.addEventListener('click', () => tocDrawer.classList.remove('open'));
    }

    // Search Engine
    const searchInput = document.getElementById('commandSearchInput');
    const searchDropdown = document.getElementById('searchSearchResults');

    if (searchInput && searchDropdown) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
          searchDropdown.classList.add('hidden');
          return;
        }

        const matches = this.searchDatabase.filter(item => 
          item.title.toLowerCase().includes(query) ||
          item.exp.toLowerCase().includes(query) ||
          item.keywords.some(k => k.toLowerCase().includes(query))
        );

        if (matches.length === 0) {
          searchDropdown.innerHTML = `<div class="search-item-empty">No matching Dart topic found for "${query}"</div>`;
        } else {
          searchDropdown.innerHTML = matches.map(item => `
            <div class="search-item" onclick="window.flipbookEngine.jumpToModule(${item.moduleIdx}); document.getElementById('searchSearchResults').classList.add('hidden');">
              <div class="search-item-title">${item.title}</div>
              <div class="search-item-exp">${item.exp}</div>
            </div>
          `).join('');
        }
        searchDropdown.classList.remove('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
          searchDropdown.classList.add('hidden');
        }
      });
    }
  }

  buildTOCDrawer() {
    const tocListContainer = document.getElementById('toc-list-container');
    if (!tocListContainer) return;

    tocListContainer.innerHTML = DART_MODULES.map((mod, idx) => `
      <div class="toc-item" onclick="window.flipbookEngine.jumpToModule(${idx}); document.getElementById('toc-drawer').classList.remove('open');">
        <span class="toc-num">${mod.chapterNum}</span>
        <div class="toc-info">
          <div class="toc-title">${mod.title}</div>
          <div class="toc-summary">${mod.summary}</div>
        </div>
      </div>
    `).join('');
  }
}
