/**
 * Dart Cookbook - Interactive Code Execution Simulator
 * Simulates Dart code execution, output formatting, terminal logging, and interactive playgrounds.
 */

class CodeRunner {
  constructor() {
    this.modal = null;
    this.codeInput = null;
    this.codeOutput = null;
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.modal = document.getElementById("code-modal");
      this.codeInput = document.getElementById("code-input");
      this.codeOutput = document.getElementById("code-output");

      const btnClose = document.getElementById("btn-close-code-modal");
      const btnReset = document.getElementById("btn-reset-code");
      const btnRun = document.getElementById("btn-run-dart-code");

      if (btnClose) btnClose.addEventListener("click", () => this.hideModal());
      if (btnReset) btnReset.addEventListener("click", () => this.resetCode());
      if (btnRun) btnRun.addEventListener("click", () => this.executeCode());

      // Close modal on escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.modal && this.modal.classList.contains("active")) {
          this.hideModal();
        }
      });
    });
  }

  openPlayground(initialCode) {
    if (!this.modal) return;
    this.codeInput.value = initialCode || `void main() {\n  print('Hello Dart 2026!');\n}`;
    this.codeOutput.textContent = "Ready to execute...\nPress 'Run Dart Code' to execute.";
    this.modal.classList.add("active");
  }

  hideModal() {
    if (this.modal) this.modal.classList.remove("active");
  }

  resetCode() {
    if (this.codeInput) {
      this.codeInput.value = `void main() {\n  print('Resetting Dart Playground...');\n}`;
      this.codeOutput.textContent = "Code reset to default.";
    }
  }

  executeCode() {
    if (!this.codeInput || !this.codeOutput) return;
    const rawCode = this.codeInput.value;

    this.codeOutput.textContent = "⚡ Compiling & Executing Dart 3 code...\n----------------------------------------\n";

    setTimeout(() => {
      try {
        const logs = [];

        // Simple Dart execution simulator evaluating print statements and standard expressions
        const simulatedConsole = {
          log: (...args) => logs.push(args.join(" ")),
          error: (...args) => logs.push("ERROR: " + args.join(" "))
        };

        // Extract print calls from the Dart code
        const printRegex = /print\((['"`]?)(.*?)\1\);/g;
        let match;
        let printedCount = 0;

        while ((match = printRegex.exec(rawCode)) !== null) {
          let content = match[2];

          // Evaluate simple string interpolations inside string like ${...} or $val
          content = content.replace(/\$\{([^}]+)\}/g, (m, expr) => {
            try {
              return eval(expr);
            } catch (e) {
              return expr;
            }
          });

          content = content.replace(/\$([a-zA-Z0-9_]+)/g, (m, varName) => {
            return varName;
          });

          logs.push(content);
          printedCount++;
        }

        if (printedCount === 0) {
          // Fallback parsing simple JS-like expressions inside void main()
          let cleanJs = rawCode
            .replace(/void main\(\)\s*\{/g, "")
            .replace(/main\(\)\s*async\s*\{/g, "")
            .replace(/final\s+/g, "const ")
            .replace(/var\s+/g, "let ")
            .replace(/String\s+/g, "let ")
            .replace(/int\s+/g, "let ")
            .replace(/double\s+/g, "let ")
            .replace(/bool\s+/g, "let ")
            .replace(/num\s+/g, "let ")
            .replace(/print\(/g, "simulatedConsole.log(");

          // Strip remaining closing braces
          cleanJs = cleanJs.replace(/\}$/, "");

          const runFn = new Function("simulatedConsole", cleanJs);
          runFn(simulatedConsole);
        }

        const timestamp = new Date().toLocaleTimeString();
        this.codeOutput.textContent += logs.join("\n") + `\n----------------------------------------\n[Process completed successfully at ${timestamp}]`;
      } catch (err) {
        this.codeOutput.textContent += `\n❌ Compilation/Runtime Exception:\n${err.message}\n\nHint: Ensure variables and functions match valid syntax!`;
      }
    }, 250);
  }
}

window.codeRunner = new CodeRunner();

// Global handler triggered by snippet 'Run' buttons inside pages
function runCodeSnippet(btn) {
  const snippetBox = btn.closest(".code-snippet-box");
  if (!snippetBox) return;
  const codeElement = snippetBox.querySelector("code");
  if (!codeElement) return;

  const codeText = codeElement.textContent;
  window.codeRunner.openPlayground(codeText);
}
