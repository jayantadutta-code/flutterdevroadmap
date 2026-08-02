/**
 * Dart Cookbook - 3D Flipbook Page Turn Engine
 * Manages dual-page spreads, 3D CSS page flips, scrub slider synchronization, and page rendering.
 */

class FlipbookEngine {
  constructor() {
    this.parts = [];
    this.flatPages = [];
    this.currentSpreadIndex = 0; // 0-based spread index
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
      this.flattenBookPages(); // Ensure all parts are flattened on DOM ready

      this.scrubber = document.getElementById("page-scrubber");
      this.leftBody = document.getElementById("left-page-body");
      this.rightBody = document.getElementById("right-page-body");
      this.leftHeader = document.getElementById("left-header-tag");
      this.rightHeader = document.getElementById("right-header-tag");
      this.leftNum = document.getElementById("left-page-num");
      this.rightNum = document.getElementById("right-page-num");

      // Update Scrubber Max
      const maxSpreads = Math.ceil(this.flatPages.length / 2);
      if (this.scrubber) {
        this.scrubber.max = maxSpreads;
        this.scrubber.addEventListener("input", (e) => {
          const spreadIdx = parseInt(e.target.value) - 1;
          this.goToSpread(spreadIdx);
        });
      }

      // Arrows
      document.getElementById("btn-prev-page")?.addEventListener("click", () => this.prevPage());
      document.getElementById("btn-next-page")?.addEventListener("click", () => this.nextPage());
      document.getElementById("btn-first-page")?.addEventListener("click", () => this.goToSpread(0));
      document.getElementById("btn-last-page")?.addEventListener("click", () => this.goToSpread(maxSpreads - 1));

      // Part Jump Buttons
      document.getElementById("btn-prev-chapter")?.addEventListener("click", () => this.jumpChapter(-1));
      document.getElementById("btn-next-chapter")?.addEventListener("click", () => this.jumpChapter(1));

      // Bookmarks Buttons
      document.getElementById("btn-bookmark-left")?.addEventListener("click", () => this.toggleBookmark(this.currentSpreadIndex * 2));
      document.getElementById("btn-bookmark-right")?.addEventListener("click", () => this.toggleBookmark(this.currentSpreadIndex * 2 + 1));

      // Key Navigation
      document.addEventListener("keydown", (e) => {
        if (document.querySelector(".modal-overlay.active")) return; // Don't trigger when modal open
        if (e.key === "ArrowLeft") this.prevPage();
        if (e.key === "ArrowRight") this.nextPage();
      });

      // Render Initial Spread
      this.renderSpread(0);
      this.buildTOC();
      this.buildReaderView();
    });
  }

  goToSpread(spreadIndex) {
    const maxSpreads = Math.ceil(this.flatPages.length / 2);
    if (spreadIndex < 0 || spreadIndex >= maxSpreads) return;

    window.soundEngine?.playPageFlip();
    this.currentSpreadIndex = spreadIndex;
    this.renderSpread(spreadIndex);
  }

  prevPage() {
    this.goToSpread(this.currentSpreadIndex - 1);
  }

  nextPage() {
    this.goToSpread(this.currentSpreadIndex + 1);
  }

  jumpChapter(direction) {
    const currentFlatIdx = this.currentSpreadIndex * 2;
    const currentPart = this.flatPages[currentFlatIdx]?.partId || 1;
    const targetPart = currentPart + direction;

    if (targetPart < 1 || targetPart > 7) return;

    // Find first page of target part
    const targetIdx = this.flatPages.findIndex(p => p.partId === targetPart);
    if (targetIdx !== -1) {
      const spreadIdx = Math.floor(targetIdx / 2);
      this.goToSpread(spreadIdx);
    }
  }

  renderSpread(spreadIdx) {
    const leftIdx = spreadIdx * 2;
    const rightIdx = leftIdx + 1;

    const leftPage = this.flatPages[leftIdx];
    const rightPage = this.flatPages[rightIdx];

    // Render Left Page
    if (leftPage) {
      this.leftBody.innerHTML = leftPage.content;
      this.leftHeader.textContent = leftPage.header;
      this.leftNum.textContent = leftIdx + 1;
      document.getElementById("btn-bookmark-left")?.classList.toggle("bookmarked", this.bookmarks.includes(leftIdx));
    } else {
      this.leftBody.innerHTML = "";
      this.leftHeader.textContent = "";
      this.leftNum.textContent = "";
    }

    // Render Right Page
    if (rightPage) {
      this.rightBody.innerHTML = rightPage.content;
      this.rightHeader.textContent = rightPage.header;
      this.rightNum.textContent = rightIdx + 1;
      document.getElementById("btn-bookmark-right")?.classList.toggle("bookmarked", this.bookmarks.includes(rightIdx));
    } else {
      this.rightBody.innerHTML = `<div class="chapter-title-page"><h3>End of Chapter</h3></div>`;
      this.rightHeader.textContent = "DART COOKBOOK";
      this.rightNum.textContent = rightIdx + 1;
    }

    // Prism syntax highlighting trigger
    if (window.Prism) {
      window.Prism.highlightAllUnder(this.leftBody);
      window.Prism.highlightAllUnder(this.rightBody);
    }

    // Update Header & Scrubber UI
    const currentPartId = leftPage?.partId || 1;
    const currentPartTitle = leftPage?.partTitle || "Part 1: Basic";
    
    document.getElementById("current-part-label").textContent = currentPartTitle;
    document.getElementById("current-page-num").textContent = `Page ${leftIdx + 1} of ${this.flatPages.length}`;

    if (this.scrubber) {
      this.scrubber.value = spreadIdx + 1;
      document.getElementById("scrubber-val").textContent = `${spreadIdx + 1} / ${Math.ceil(this.flatPages.length / 2)}`;
    }

    // Sync active state with appState
    if (window.appState) {
      window.appState.currentPart = currentPartId;
      window.appState.currentFlatIndex = leftIdx;
    }

    // TOC progress fill
    const progressFill = document.getElementById("toc-progress-fill");
    if (progressFill) {
      const pct = ((leftIdx + 1) / this.flatPages.length) * 100;
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
    this.renderSpread(this.currentSpreadIndex);
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
        this.goToSpread(Math.floor(flatIdx / 2));
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
            this.goToSpread(Math.floor(flatIdx / 2));
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
