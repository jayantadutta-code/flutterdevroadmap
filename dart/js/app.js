/**
 * Dart Cookbook - Main Application Controller
 * Handles global theme toggling, live search engine, sidebars, sound toggle & keyboard shortcuts.
 */

window.appState = {
  currentPart: 1,
  currentFlatIndex: 0
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSidebars();
  initSearch();
  initShortcuts();
});

function initTheme() {
  const themeBtn = document.getElementById("btn-theme-toggle");
  const currentTheme = localStorage.getItem("dart_cookbook_theme") || "dark";
  document.body.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeBtn?.addEventListener("click", () => {
    const nextTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", nextTheme);
    localStorage.setItem("dart_cookbook_theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById("btn-theme-toggle");
  if (themeBtn) {
    themeBtn.innerHTML = theme === "dark" ? `<i class="fa-solid fa-moon"></i>` : `<i class="fa-solid fa-sun"></i>`;
  }
}

function initSidebars() {
  const btnToc = document.getElementById("btn-toggle-toc");
  const btnCloseToc = document.getElementById("btn-close-toc");
  const sidebarToc = document.getElementById("sidebar-toc");

  const btnSearch = document.getElementById("btn-search");
  const btnCloseSearch = document.getElementById("btn-close-search");
  const sidebarSearch = document.getElementById("sidebar-search");

  const btnBookmarks = document.getElementById("btn-bookmarks");
  const btnCloseBookmarks = document.getElementById("btn-close-bookmarks");
  const sidebarBookmarks = document.getElementById("sidebar-bookmarks");

  const btnSound = document.getElementById("btn-sound-toggle");
  const btnMode = document.getElementById("btn-mode-toggle");

  btnToc?.addEventListener("click", () => toggleSidebar(sidebarToc));
  btnCloseToc?.addEventListener("click", () => closeAllSidebars());

  btnSearch?.addEventListener("click", () => {
    toggleSidebar(sidebarSearch);
    document.getElementById("search-input")?.focus();
  });
  btnCloseSearch?.addEventListener("click", () => closeAllSidebars());

  btnBookmarks?.addEventListener("click", () => {
    window.flipbookEngine?.renderBookmarksList();
    toggleSidebar(sidebarBookmarks);
  });
  btnCloseBookmarks?.addEventListener("click", () => closeAllSidebars());

  btnSound?.addEventListener("click", () => {
    const enabled = window.soundEngine.toggle();
    btnSound.innerHTML = enabled ? `<i class="fa-solid fa-volume-high"></i>` : `<i class="fa-solid fa-volume-xmark"></i>`;
  });

  btnMode?.addEventListener("click", () => {
    window.flipbookEngine?.toggleViewMode();
  });
}

function toggleSidebar(targetSidebar) {
  const isActive = targetSidebar.classList.contains("active");
  closeAllSidebars();
  if (!isActive) {
    targetSidebar.classList.add("active");
  }
}

function closeAllSidebars() {
  document.querySelectorAll(".sidebar").forEach(s => s.classList.remove("active"));
}

function initSearch() {
  const input = document.getElementById("search-input");
  const resultsContainer = document.getElementById("search-results-list");

  input?.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      resultsContainer.innerHTML = `<p class="search-hint">Type a keyword to instantly search concepts and code snippets across all 7 parts.</p>`;
      return;
    }

    const matches = [];
    window.flipbookEngine.flatPages.forEach((page, flatIdx) => {
      const plainText = page.content.replace(/<[^>]+>/g, " ");
      if (plainText.toLowerCase().includes(query) || page.header.toLowerCase().includes(query)) {
        // Snippet extraction
        const idx = plainText.toLowerCase().indexOf(query);
        const start = Math.max(0, idx - 40);
        const end = Math.min(plainText.length, idx + 80);
        let snippet = plainText.substring(start, end);
        if (start > 0) snippet = "..." + snippet;
        if (end < plainText.length) snippet = snippet + "...";

        matches.push({
          flatIdx,
          header: page.header,
          partTitle: page.partTitle,
          snippet
        });
      }
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<p class="search-hint">No results found for "${query}". Try searching for 'async', 'mixins', or 'isolates'.</p>`;
      return;
    }

    resultsContainer.innerHTML = "";
    matches.forEach(m => {
      const card = document.createElement("div");
      card.className = "search-result-card";
      card.innerHTML = `
        <div class="search-result-title">${m.header}</div>
        <div class="search-result-snippet"><strong>${m.partTitle}</strong> — ${m.snippet}</div>
      `;
      card.addEventListener("click", () => {
        window.flipbookEngine.goToSheet(Math.floor(m.flatIdx / 2) + 1);
        closeAllSidebars();
      });
      resultsContainer.appendChild(card);
    });
  });
}

function initShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Ctrl+K or Cmd+K for search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const sidebarSearch = document.getElementById("sidebar-search");
      toggleSidebar(sidebarSearch);
      document.getElementById("search-input")?.focus();
    }
  });
}
