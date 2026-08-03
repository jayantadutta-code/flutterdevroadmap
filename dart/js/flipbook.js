/**
 * Dart Cookbook - 3D Physical Flipbook Page Turn Engine
 * Manages 3D CSS physical paper sheets, cover opening/closing, sound effects, scrub slider synchronization, and page rendering.
 */

class FlipbookEngine {
  constructor() {
    this.parts = [];
    this.flatPages = [];
    this.currentSheet = 0; // 0 = Front Cover, 1..N-1 = Spreads, N = Back Cover
    this.totalSheets = 0;
    this.isFlipping = false;
    this.mode = 'flipbook'; // 'flipbook' or 'reader'
    this.bookmarks = this.loadBookmarks();

    this.flattenBookPages();
    this.initUI();
  }

  flattenBookPages() {
    this.parts = [
      window.part1Content,
      window.part2Content,
      window.part3Content,
      window.part4Content,
      window.part5Content,
      window.part6Content,
      window.part7Content
    ].filter(Boolean);

    this.flatPages = [];
    this.parts.forEach(part => {
      if (part && part.pages) {
        part.pages.forEach(pg => {
          this.flatPages.push({
            partId: part.partId,
            partTitle: part.title,
            header: pg.header,
            content: pg.content,
            pageId: pg.pageId
          });
        });
      }
    });
  }

  loadBookmarks() {
    try {
      const b = localStorage.getItem("dart_cookbook_bookmarks");
      return b ? JSON.parse(b) : [];
    } catch (e) {
      return [];
    }
  }

  saveBookmarks() {
    try {
      localStorage.setItem("dart_cookbook_bookmarks", JSON.stringify(this.bookmarks));
    } catch (e) {}
  }

  initUI() {
    document.addEventListener("DOMContentLoaded", () => {
      this.flattenBookPages();
      this.build3DSheets();

      this.scrubber = document.getElementById("page-scrubber");
      if (this.scrubber) {
        this.scrubber.min = 0;
        this.scrubber.max = this.totalSheets;
        this.scrubber.value = 0;
        this.scrubber.addEventListener("input", (e) => {
          const targetSheet = parseInt(e.target.value);
          this.goToSheet(targetSheet);
        });
      }

      // Arrows
      document.getElementById("btn-prev-page")?.addEventListener("click", () => this.prevPage());
      document.getElementById("btn-next-page")?.addEventListener("click", () => this.nextPage());
      document.getElementById("btn-first-page")?.addEventListener("click", () => this.goToSheet(0));
      document.getElementById("btn-last-page")?.addEventListener("click", () => this.goToSheet(this.totalSheets));

      // Part Jump Buttons
      document.getElementById("btn-prev-chapter")?.addEventListener("click", () => this.jumpChapter(-1));
      document.getElementById("btn-next-chapter")?.addEventListener("click", () => this.jumpChapter(1));

      // Key Navigation
      document.addEventListener("keydown", (e) => {
        if (document.querySelector(".sidebar.active") || document.querySelector(".modal-overlay.active")) return;
        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
        if (e.key === "ArrowLeft" || e.key === "PageUp") this.prevPage();
        if (e.key === "ArrowRight" || e.key === "PageDown") this.nextPage();
      });

      // Mouse Wheel Scroll Page Turning
      let lastWheelTime = 0;
      const wheelCooldown = 550;
      const flipbookWrapper = document.getElementById("flipbook-wrapper");

      if (flipbookWrapper) {
        flipbookWrapper.addEventListener("wheel", (e) => {
          if (this.mode !== 'flipbook') return;
          if (document.querySelector(".sidebar.active")) return;

          const scrollableContent = e.target.closest(".page-inner-content, .page-content");
          if (scrollableContent) {
            const { scrollTop, scrollHeight, clientHeight } = scrollableContent;
            const isOverflowing = scrollHeight > clientHeight + 5;
            if (isOverflowing) {
              const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
              const atTop = scrollTop <= 5;
              if (e.deltaY > 0 && !atBottom) return;
              if (e.deltaY < 0 && !atTop) return;
            }
          }

          const now = Date.now();
          if (now - lastWheelTime < wheelCooldown) return;

          const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
          if (Math.abs(delta) < 15) return;

          if (delta > 0) {
            lastWheelTime = now;
            this.nextPage();
          } else if (delta < 0) {
            lastWheelTime = now;
            this.prevPage();
          }
        }, { passive: true });
      }

      // Mouse Drag / Touch Swipe Page Turning
      let dragStartX = 0;
      let dragStartY = 0;
      let isDragging = false;
      const bookViewport = document.querySelector(".book-viewport") || flipbookWrapper;

      if (bookViewport) {
        bookViewport.addEventListener("mousedown", (e) => {
          if (this.mode !== 'flipbook') return;
          if (e.target.closest("button, input, select, textarea, a, .code-runner-box, .playground-box, .btn-bookmark-page")) return;
          const selection = window.getSelection();
          if (selection && selection.toString().length > 0) return;

          isDragging = true;
          dragStartX = e.clientX;
          dragStartY = e.clientY;
        });

        document.addEventListener("mouseup", (e) => {
          if (!isDragging) return;
          isDragging = false;
          const diffX = e.clientX - dragStartX;
          const diffY = e.clientY - dragStartY;

          if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0) {
              this.nextPage();
            } else {
              this.prevPage();
            }
          }
        });
      }

      this.updateBookState();
      this.buildTOC();
      this.buildReaderView();
    });
  }

  build3DSheets() {
    const flipbookEl = document.getElementById("flipbook");
    if (!flipbookEl) return;

    // Clear existing paper sheets while preserving spine & paper stacks
    const existingSheets = flipbookEl.querySelectorAll(".paper-sheet");
    existingSheets.forEach(el => el.remove());

    const numPages = this.flatPages.length;
    const numContentSheets = Math.ceil(numPages / 2);
    const totalSheets = numContentSheets + 1; // +1 for Back Cover sheet
    this.totalSheets = totalSheets;

    // 1. SHEET 0: FRONT COVER
    const sheet0 = document.createElement("div");
    sheet0.className = "paper-sheet sheet-cover";
    sheet0.id = "sheet-0";
    sheet0.style.zIndex = totalSheets + 10;
    sheet0.innerHTML = `
      <div class="page-face page-front cover-front">
        <div class="cover-container">
          <div class="cover-badge"><i class="fa-solid fa-star"></i> Dart 3.x Edition • 2026</div>
          <div class="cover-graphic">
            <div class="dart-logo-wrapper">
              <i class="fa-solid fa-bullseye dart-target-icon"></i>
              <i class="fa-solid fa-code dart-code-icon"></i>
            </div>
          </div>
          <h1 class="cover-title">DART COOKBOOK<br><span class="highlight">INTERACTIVE FLIPBOOK</span></h1>
          <p class="cover-subtitle">Master Modern Dart 3.x from Core Syntax & OOP to Null Safety, Streams & Multi-Isolate Concurrency</p>

          <div class="cover-features">
            <div class="feature-tag"><i class="fa-solid fa-book-open"></i> 7 Core Parts</div>
            <div class="feature-tag"><i class="fa-solid fa-terminal"></i> Interactive Playground</div>
            <div class="feature-tag"><i class="fa-solid fa-graduation-cap"></i> 700 MCQ Arena</div>
            <div class="feature-tag"><i class="fa-solid fa-volume-high"></i> 3D Flip Sound</div>
          </div>

          <div class="cover-actions">
            <button id="startReadingBtn" class="btn btn-primary btn-large">
              Open Book <i class="fa-solid fa-arrow-right"></i>
            </button>
            <button id="coverTakeMcqBtn" class="btn btn-gold btn-large">
              <i class="fa-solid fa-graduation-cap"></i> Take MCQ Exam
            </button>
          </div>
          <span class="keyboard-tip"><i class="fa-solid fa-keyboard"></i> Use Left/Right Arrow Keys or Click Page Corner to Flip</span>
        </div>
        <div class="corner-curl-hint">Flip <i class="fa-solid fa-turn-up"></i></div>
      </div>
      <div class="page-face page-back cover-back">
        <div class="inside-cover-content">
          <h3><i class="fa-solid fa-feather-pointed"></i> Preface & Key Concepts</h3>
          <p>Welcome to the <strong>Dart Cookbook Interactive 3D Flipbook</strong>. This comprehensive guide covers 7 extensive modules of Dart 3 programming with live code runners, instant search, bookmarking, and 700 MCQ level exams.</p>
          <div class="quick-guide-box">
            <h4>Interactive Features Included:</h4>
            <ul>
              <li><i class="fa-solid fa-circle-check"></i> <strong>Real 3D Page Turn:</strong> Physical curl physics with sound feedback.</li>
              <li><i class="fa-solid fa-circle-check"></i> <strong>Live Dart Playground:</strong> Click "Run Code" on any snippet to edit and run live.</li>
              <li><i class="fa-solid fa-circle-check"></i> <strong>700 MCQ Exam Engine:</strong> 5 difficulty levels per part with certificates.</li>
              <li><i class="fa-solid fa-circle-check"></i> <strong>Bookmarks & Search:</strong> Instantly search keywords or save reference pages.</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    flipbookEl.appendChild(sheet0);

    // 2. INNER CONTENT SHEETS (sheet-1 to sheet-numContentSheets)
    for (let i = 1; i <= numContentSheets; i++) {
      const leftIdx = (i - 1) * 2;
      const rightIdx = leftIdx + 1;

      const leftPage = this.flatPages[leftIdx];
      const rightPage = this.flatPages[rightIdx];

      const sheet = document.createElement("div");
      sheet.className = "paper-sheet";
      sheet.id = `sheet-${i}`;
      sheet.style.zIndex = totalSheets + 10 - i;

      const frontContent = leftPage ? `
        <div class="page-header-strip">
          <span class="chapter-tag">${leftPage.header}</span>
          <button class="btn-bookmark-page ${this.bookmarks.includes(leftIdx) ? 'bookmarked' : ''}" data-flat-idx="${leftIdx}" title="Bookmark Page">
            <i class="fa-regular fa-bookmark"></i>
          </button>
        </div>
        <div class="page-inner-content">${leftPage.content}</div>
        <div class="page-footer-strip">
          <span class="page-num">Page ${leftIdx + 1}</span>
        </div>
      ` : `<div class="chapter-title-page"><h3>End of Content</h3></div>`;

      const backContent = rightPage ? `
        <div class="page-header-strip">
          <button class="btn-bookmark-page ${this.bookmarks.includes(rightIdx) ? 'bookmarked' : ''}" data-flat-idx="${rightIdx}" title="Bookmark Page">
            <i class="fa-regular fa-bookmark"></i>
          </button>
          <span class="chapter-tag">${rightPage.header}</span>
        </div>
        <div class="page-inner-content">${rightPage.content}</div>
        <div class="page-footer-strip">
          <span class="page-num">Page ${rightIdx + 1}</span>
        </div>
      ` : `<div class="chapter-title-page"><h3>End of Chapter</h3></div>`;

      sheet.innerHTML = `
        <div class="page-face page-front">
          ${frontContent}
          <div class="corner-curl-hint">Flip <i class="fa-solid fa-turn-up"></i></div>
        </div>
        <div class="page-face page-back">
          ${backContent}
        </div>
      `;
      flipbookEl.appendChild(sheet);
    }

    // 3. BACK COVER SHEET (sheet-totalSheets)
    const backSheet = document.createElement("div");
    backSheet.className = "paper-sheet sheet-cover sheet-back-cover";
    backSheet.id = `sheet-${totalSheets}`;
    backSheet.style.zIndex = 9;
    backSheet.innerHTML = `
      <div class="page-face page-front">
        <div class="chapter-title-page" style="text-align:center; padding: 2rem;">
          <i class="fa-solid fa-graduation-cap" style="font-size: 3rem; color: var(--accent-cyan); margin-bottom: 1rem;"></i>
          <h2>Dart 3 Cookbook Summary</h2>
          <p style="color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">You have explored all 7 key domains of Dart programming: Basic Engineering, Collections & Core APIs, OOP & Mixins, Null Safety & Patterns, Asynchronous Streams, Advanced Metaprogramming & FFI, and Concurrency & Isolates.</p>
          <div class="quick-guide-box" style="margin-top: 1.5rem; text-align: left;">
            <h4>Next Steps for Mastery:</h4>
            <ul>
              <li><i class="fa-solid fa-check"></i> Complete all 5 Level Exams for each Part in the MCQ Arena</li>
              <li><i class="fa-solid fa-check"></i> Practice writing Dart isolates & async generator streams</li>
              <li><i class="fa-solid fa-check"></i> Test your knowledge in the Interactive Dart Playground</li>
            </ul>
          </div>
        </div>
        <div class="corner-curl-hint">Close Book <i class="fa-solid fa-turn-up"></i></div>
      </div>
      <div class="page-face page-back cover-back">
        <div class="cover-container">
          <div class="cover-badge" id="finalResultBadge"><i class="fa-solid fa-award"></i> DART 3.X COOKBOOK • BACK COVER</div>
          <h2 style="font-family:var(--font-heading); font-size: 1.8rem; margin-top: 0.5rem;">Dart Cookbook Completed!</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Mastery across 7 Parts, Code Snippets, and 700 Exam Questions.</p>

          <div class="score-report-card" style="margin-top:12px; width:100%; text-align:center; background:rgba(255,255,255,0.05); padding:14px; border-radius:12px; border:1px solid rgba(255,255,255,0.1);">
            <div style="display:flex; justify-content:space-around; align-items:center; margin-bottom:8px;">
              <div>
                <div style="font-size:1.6rem; font-weight:800; color:var(--accent-cyan);" id="reportScore">7 Parts</div>
                <div style="font-size:0.72rem; color:var(--text-muted);">MASTERED</div>
              </div>
              <div style="width:1px; height:32px; background:rgba(255,255,255,0.1);"></div>
              <div>
                <div style="font-size:1.6rem; font-weight:800; color:var(--accent-success);" id="reportAccuracy">700 Qs</div>
                <div style="font-size:0.72rem; color:var(--text-muted);">MCQ ARENA</div>
              </div>
              <div style="width:1px; height:32px; background:rgba(255,255,255,0.1);"></div>
              <div>
                <div style="font-size:1.6rem; font-weight:800; color:var(--accent-gold);" id="reportMaxStreak">35 Levels</div>
                <div style="font-size:0.72rem; color:var(--text-muted);">EXAM PATH</div>
              </div>
            </div>
          </div>

          <!-- Official Book ISBN Barcode Box -->
          <div class="barcode-box" style="margin-top: 10px; padding: 8px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <div style="font-family: var(--font-code); font-size: 0.72rem; color: var(--text-muted); text-align: left; line-height: 1.4;">
              <div style="font-weight: 600; color: #fff;">ISBN 978-0-321-76784-5</div>
              <div>Google DeepMind • Dart Edition</div>
            </div>
            <div style="display: flex; gap: 3px; height: 26px; align-items: center; padding: 0 4px; background: #ffffff; border-radius: 3px;">
              <span style="width: 3px; height: 22px; background: #000;"></span>
              <span style="width: 1px; height: 22px; background: #000;"></span>
              <span style="width: 4px; height: 22px; background: #000;"></span>
              <span style="width: 2px; height: 22px; background: #000;"></span>
              <span style="width: 1px; height: 22px; background: #000;"></span>
              <span style="width: 3px; height: 22px; background: #000;"></span>
              <span style="width: 2px; height: 22px; background: #000;"></span>
              <span style="width: 4px; height: 22px; background: #000;"></span>
              <span style="width: 1px; height: 22px; background: #000;"></span>
            </div>
          </div>

          <div class="score-report-actions" style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:14px;">
            <button id="restartBookBtn" class="btn btn-primary btn-large">
              <i class="fa-solid fa-rotate-left"></i> Re-Open Book (Front Cover)
            </button>
            <button id="backCoverMcqBtn" class="btn btn-gold btn-large">
              <i class="fa-solid fa-graduation-cap"></i> Launch Part Exam
            </button>
          </div>
        </div>
        <div class="corner-curl-hint" style="left:18px; right:auto;">Flip Open <i class="fa-solid fa-turn-up"></i></div>
      </div>
    `;
    flipbookEl.appendChild(backSheet);

    // Attach button click listeners inside cover sheets
    document.getElementById("startReadingBtn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.goToSheet(1);
    });
    document.getElementById("coverTakeMcqBtn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      window.quizEngine?.openLevelSelect(window.appState.currentPart || 1);
    });
    document.getElementById("restartBookBtn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.goToSheet(0);
    });
    document.getElementById("backCoverMcqBtn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      window.quizEngine?.openLevelSelect(window.appState.currentPart || 1);
    });

    // Bookmark button listeners inside sheets
    flipbookEl.querySelectorAll(".btn-bookmark-page").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const flatIdx = parseInt(btn.getAttribute("data-flat-idx"));
        if (!isNaN(flatIdx)) this.toggleBookmark(flatIdx);
      });
    });

    // Attach page face click handlers for quick flipping on sheet clicks
    const sheets = flipbookEl.querySelectorAll(".paper-sheet");
    sheets.forEach((sheet) => {
      const frontFace = sheet.querySelector(".page-front");
      const backFace = sheet.querySelector(".page-back");

      if (frontFace) {
        frontFace.addEventListener("click", (e) => {
          if (e.target.closest("button") || 
              e.target.closest("a") || 
              e.target.closest("input") || 
              e.target.closest("select") || 
              e.target.closest("textarea") || 
              e.target.closest(".code-snippet-box") || 
              e.target.closest(".code-runner-box") || 
              e.target.closest(".playground-box") ||
              e.target.closest(".quick-guide-box") ||
              e.target.closest(".btn-bookmark-page")) return;

          const selection = window.getSelection();
          if (selection && selection.toString().length > 0) return;

          this.nextPage();
        });
      }

      if (backFace) {
        backFace.addEventListener("click", (e) => {
          if (e.target.closest("button") || 
              e.target.closest("a") || 
              e.target.closest("input") || 
              e.target.closest("select") || 
              e.target.closest("textarea") || 
              e.target.closest(".code-snippet-box") || 
              e.target.closest(".code-runner-box") || 
              e.target.closest(".playground-box") ||
              e.target.closest(".quick-guide-box") ||
              e.target.closest(".btn-bookmark-page")) return;

          const selection = window.getSelection();
          if (selection && selection.toString().length > 0) return;

          this.prevPage();
        });
      }
    });

    // Attach 2-finger MacBook trackpad wheel scroll listener to all inner page containers (both odd & even)
    flipbookEl.querySelectorAll(".page-inner-content, .page-face").forEach(container => {
      container.addEventListener("wheel", (e) => {
        if (container.scrollHeight > container.clientHeight) {
          container.scrollTop += e.deltaY;
          e.stopPropagation();
        }
      }, { passive: true });
    });

    if (window.Prism) {
      window.Prism.highlightAllUnder(flipbookEl);
    }
  }

  goToSheet(targetSheet) {
    if (targetSheet < 0 || targetSheet > this.totalSheets || this.isFlipping) return;
    if (targetSheet === this.currentSheet) return;

    this.isFlipping = true;
    window.soundEngine?.playPageFlip();

    const flipbookEl = document.getElementById("flipbook");
    const sheets = Array.from(flipbookEl.querySelectorAll(".paper-sheet"));

    const flipCount = (targetSheet === this.totalSheets) ? sheets.length : targetSheet;
    const startSheet = Math.min(this.currentSheet, targetSheet);
    const endSheet = Math.max(this.currentSheet, targetSheet);

    sheets.forEach((sheet, i) => {
      const isTurning = i >= startSheet && i < endSheet;
      if (isTurning) {
        sheet.classList.add("turning");
        sheet.style.zIndex = 250 + i; // Raise turning sheet high above stack during 3D arc
      }

      if (i < flipCount) {
        sheet.classList.add("flipped");
        if (!isTurning) sheet.style.zIndex = 10 + i;
      } else {
        sheet.classList.remove("flipped");
        if (!isTurning) sheet.style.zIndex = (sheets.length + 10) - i;
      }
    });

    this.currentSheet = targetSheet;
    this.updateBookState();

    setTimeout(() => {
      sheets.forEach((sheet, i) => {
        sheet.classList.remove("turning");
        if (i < flipCount) {
          sheet.style.zIndex = 10 + i;
        } else {
          sheet.style.zIndex = (sheets.length + 10) - i;
        }
      });
      this.isFlipping = false;
    }, 750);
  }

  prevPage() {
    this.goToSheet(this.currentSheet - 1);
  }

  nextPage() {
    this.goToSheet(this.currentSheet + 1);
  }

  jumpChapter(direction) {
    const currentFlatIdx = Math.max(0, (this.currentSheet - 1) * 2);
    const currentPart = this.flatPages[currentFlatIdx]?.partId || 1;
    const targetPart = currentPart + direction;

    if (targetPart < 1 || targetPart > 7) return;

    const targetIdx = this.flatPages.findIndex(p => p.partId === targetPart);
    if (targetIdx !== -1) {
      const sheetIdx = Math.floor(targetIdx / 2) + 1;
      this.goToSheet(sheetIdx);
    }
  }

  updateBookState() {
    const flipbookEl = document.getElementById("flipbook");
    const prevBtn = document.getElementById("btn-prev-page");
    const nextBtn = document.getElementById("btn-next-page");
    const pageIndicator = document.getElementById("current-page-num");
    const partIndicator = document.getElementById("current-part-label");

    if (!flipbookEl) return;

    flipbookEl.classList.remove("at-cover", "at-back-cover");

    if (this.currentSheet === 0) {
      flipbookEl.classList.add("at-cover");
      if (prevBtn) { prevBtn.style.opacity = '0'; prevBtn.style.pointerEvents = 'none'; }
      if (nextBtn) { nextBtn.style.opacity = '1'; nextBtn.style.pointerEvents = 'auto'; }
      if (pageIndicator) pageIndicator.textContent = "Front Cover";
      if (partIndicator) partIndicator.textContent = "Dart Cookbook";
    } else if (this.currentSheet === this.totalSheets) {
      flipbookEl.classList.add("at-back-cover");
      if (prevBtn) { prevBtn.style.opacity = '1'; prevBtn.style.pointerEvents = 'auto'; }
      if (nextBtn) { nextBtn.style.opacity = '0'; nextBtn.style.pointerEvents = 'none'; }
      if (pageIndicator) pageIndicator.textContent = "Back Cover (Completion)";
      if (partIndicator) partIndicator.textContent = "Dart Mastery";
    } else {
      if (prevBtn) { prevBtn.style.opacity = '1'; prevBtn.style.pointerEvents = 'auto'; }
      if (nextBtn) { nextBtn.style.opacity = '1'; nextBtn.style.pointerEvents = 'auto'; }

      const flatIdx = (this.currentSheet - 1) * 2;
      const pageObj = this.flatPages[flatIdx];

      if (pageIndicator) pageIndicator.textContent = `Page ${flatIdx + 1} of ${this.flatPages.length}`;
      if (partIndicator && pageObj) partIndicator.textContent = pageObj.partTitle;

      if (window.appState && pageObj) {
        window.appState.currentPart = pageObj.partId;
        window.appState.currentFlatIndex = flatIdx;
      }
    }

    if (this.scrubber) {
      this.scrubber.value = this.currentSheet;
      this.scrubber.max = this.totalSheets;
      const scrubberVal = document.getElementById("scrubber-val");
      if (scrubberVal) {
        if (this.currentSheet === 0) scrubberVal.textContent = "Cover";
        else if (this.currentSheet === this.totalSheets) scrubberVal.textContent = "End";
        else scrubberVal.textContent = `${this.currentSheet} / ${this.totalSheets - 1}`;
      }
    }

    // TOC progress fill
    const progressFill = document.getElementById("toc-progress-fill");
    if (progressFill) {
      const pct = (this.currentSheet / this.totalSheets) * 100;
      progressFill.style.width = `${pct}%`;
    }
  }

  toggleBookmark(flatPageIndex) {
    if (flatPageIndex >= this.flatPages.length) return;
    const idx = this.bookmarks.indexOf(flatPageIndex);
    if (idx === -1) {
      this.bookmarks.push(flatPageIndex);
    } else {
      this.bookmarks.splice(idx, 1);
    }
    this.saveBookmarks();
    this.build3DSheets();
    this.renderBookmarksList();
  }

  renderBookmarksList() {
    const list = document.getElementById("bookmarks-list");
    if (!list) return;

    if (this.bookmarks.length === 0) {
      list.innerHTML = `<p class="search-hint">No bookmarks saved yet. Click the ribbon icon on top of any page to bookmark!</p>`;
      return;
    }

    list.innerHTML = "";
    this.bookmarks.sort((a,b) => a - b).forEach(flatIdx => {
      const page = this.flatPages[flatIdx];
      if (!page) return;

      const card = document.createElement("div");
      card.className = "search-result-card";
      card.innerHTML = `
        <div class="search-result-title"><i class="fa-solid fa-bookmark" style="color:var(--accent-gold);"></i> Page ${flatIdx + 1}: ${page.header}</div>
        <div class="search-result-snippet">${page.partTitle}</div>
      `;
      card.addEventListener("click", () => {
        const sheetIdx = Math.floor(flatIdx / 2) + 1;
        this.goToSheet(sheetIdx);
      });
      list.appendChild(card);
    });
  }

  buildTOC() {
    const tree = document.getElementById("toc-tree");
    if (!tree) return;
    tree.innerHTML = "";

    this.parts.forEach(part => {
      if (!part) return;

      const group = document.createElement("div");
      group.className = "toc-part-group";

      const header = document.createElement("div");
      header.className = "toc-part-header";
      header.innerHTML = `
        <span>${part.title}</span>
        <i class="fa-solid fa-chevron-down"></i>
      `;

      const list = document.createElement("div");
      list.className = "toc-chapters-list";

      part.pages.forEach(pg => {
        const item = document.createElement("div");
        item.className = "toc-item";
        item.innerHTML = `
          <span>${pg.header}</span>
          <i class="fa-solid fa-angle-right"></i>
        `;
        item.addEventListener("click", () => {
          const flatIdx = this.flatPages.findIndex(p => p.pageId === pg.pageId);
          if (flatIdx !== -1) {
            const sheetIdx = Math.floor(flatIdx / 2) + 1;
            this.goToSheet(sheetIdx);
          }
        });
        list.appendChild(item);
      });

      header.addEventListener("click", () => {
        list.style.display = list.style.display === "none" ? "flex" : "none";
      });

      group.appendChild(header);
      group.appendChild(list);
      tree.appendChild(group);
    });
  }

  buildReaderView() {
    const container = document.getElementById("reader-container");
    if (!container) return;
    container.innerHTML = "";

    this.flatPages.forEach((page, idx) => {
      const sec = document.createElement("section");
      sec.className = "reader-page-section";
      sec.id = `reader-${page.pageId}`;
      sec.innerHTML = `
        <div class="page-header-strip" style="margin-bottom: 1rem;">
          <span>${page.header}</span>
          <span>PAGE ${idx + 1}</span>
        </div>
        <div>${page.content}</div>
        <hr style="border: none; border-top: 1px dashed var(--border-color); margin: 2.5rem 0;">
      `;
      container.appendChild(sec);
    });

    if (window.Prism) {
      window.Prism.highlightAllUnder(container);
    }
  }

  toggleViewMode() {
    const flipWrapper = document.getElementById("flipbook-wrapper");
    const readWrapper = document.getElementById("reader-wrapper");
    const btn = document.getElementById("btn-mode-toggle");

    if (this.mode === 'flipbook') {
      this.mode = 'reader';
      flipWrapper.classList.remove("active-mode");
      readWrapper.classList.add("active-mode");
      btn.innerHTML = `<i class="fa-solid fa-book"></i> <span class="btn-text">Reader View</span>`;
    } else {
      this.mode = 'flipbook';
      readWrapper.classList.remove("active-mode");
      flipWrapper.classList.add("active-mode");
      btn.innerHTML = `<i class="fa-solid fa-book-open"></i> <span class="btn-text">Flipbook</span>`;
    }
  }
}

window.flipbookEngine = new FlipbookEngine();
