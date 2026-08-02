/* ==========================================================================
   YAML FlipBook - Live Playground & Validator Engine (Cheat Sheet Edition)
   ========================================================================== */

const PLAYGROUND_PRESETS = {
  basic: `# Module 1: Basics, Comments & Key-Value Pairs
# Single line comment
name: Jayanta
age: 22
country: India

# Nested object with 2 spaces indentation
person:
  name: Jayanta
  city: Kolkata
  state: West Bengal`,

  scalars: `# Module 2: Scalar Data Types & Explicit Casting
# Numbers
age: 22
pi: 3.14159
distance: 2e5
temperature: -12

# Booleans
isAdmin: true
isStudent: false

# Nulls
middleName: null
nickname: ~
city:

# Explicit Data Tags (!!)
forced_str: !!str 123
forced_int: !!int "22"
forced_float: !!float "10.5"
forced_bool: !!bool "true"`,

  multiline: `# Module 3: Multiline Strings & Chomping
# Literal Style (|) - Keeps newlines
literal_bio: |
  Flutter Developer
  Dart Programmer
  YouTuber

# Folded Style (>) - Converts newlines into spaces
folded_bio: >
  Flutter Developer
  Dart Programmer
  YouTuber

# Strip Chomping (|-)
strip_script: |-
  Line 1
  Line 2

# Keep Chomping (|+ )
keep_script: |+
  Line 1
  Line 2`,

  lists_objects: `# Module 4 & 5: Lists, Objects & Flow Style
# Block List
fruits:
  - Apple
  - Mango
  - Banana

# Inline Flow List
inline_fruits: [Apple, Mango, Banana]

# Matrix / Nested List
matrix:
  - [1, 2, 3]
  - [4, 5, 6]

# List of Objects
employees:
  - name: Alice
    age: 25
  - name: Bob
    age: 28

# Inline Object
user: {name: Jayanta, age: 22}`,

  anchors: `# Module 6: Anchors (&), Aliases (*), and Merge Keys (<<)
default: &default
  name: Jayanta
  country: India

user1:
  <<: *default
  age: 22

user2:
  <<: *default
  age: 25

developer: &dev
  language: Dart
  framework: Flutter

employee1:
  skills: *dev`,

  devops: `# Module 8: Real-World DevOps (Kubernetes & Docker Compose)
# Kubernetes Pod
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx:latest

---
# Docker Compose Services
services:
  web:
    image: nginx
    ports:
      - "80:80"
  db:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret`,

  cicd_flutter: `# Module 9: GitHub Actions & Flutter pubspec.yaml
# GitHub Actions Workflow
name: Build
on:
  push:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Hello YAML"

---
# Flutter pubspec.yaml
name: learn_dart
version: 1.0.0
environment:
  sdk: ">=3.0.0 <4.0.0"
dependencies:
  flutter:
    sdk: flutter`,

  cheatsheet: `# Module 11: Complete Quick Reference Cheat Sheet
name: John
age: 25
price: 19.99
active: true
empty: null

skills:
  - Dart
  - Flutter

address:
  city: Kolkata
  country: India

colors: [Red, Green, Blue]
user: {name: John, age: 25}

message: |
  Multiple
  Lines

summary: >
  Folded
  Text

default: &default
  country: India

user1:
  <<: *default
  name: Alice`
};

class PlaygroundEngine {
  constructor() {
    this.editor = document.getElementById('yaml-input-editor');
    this.jsonDisplay = document.getElementById('json-output-display');
    this.treeDisplay = document.getElementById('tree-output-display');
    this.errorBox = document.getElementById('yaml-error-box');
    this.errorMsg = document.getElementById('yaml-error-msg');
    this.statusIndicator = document.getElementById('editor-status');

    this.activeOutputTab = 'json';
    this.init();
  }

  init() {
    if (!this.editor) return;

    // Load initial code
    this.editor.value = PLAYGROUND_PRESETS.cheatsheet;
    this.validateAndParse();

    // Event listeners
    this.editor.addEventListener('input', () => this.validateAndParse());
    this.editor.addEventListener('keyup', () => this.updateCursorPos());
    this.editor.addEventListener('click', () => this.updateCursorPos());
  }

  setCode(codeString) {
    if (this.editor) {
      this.editor.value = codeString;
      this.validateAndParse();
    }
  }

  validateAndParse() {
    const rawYaml = this.editor.value;

    if (!rawYaml.trim()) {
      this.jsonDisplay.textContent = "// Empty YAML input";
      this.showValidStatus();
      this.hideError();
      return;
    }

    try {
      // Parse using js-yaml library
      const parsedObj = jsyaml.load(rawYaml);
      const jsonString = JSON.stringify(parsedObj, null, 2);

      this.jsonDisplay.textContent = jsonString;
      this.renderTree(parsedObj);

      this.showValidStatus();
      this.hideError();
    } catch (e) {
      this.showInvalidStatus();
      this.showError(e);
    }
  }

  renderTree(obj) {
    if (!this.treeDisplay) return;
    this.treeDisplay.innerHTML = this.buildHtmlTree(obj);
  }

  buildHtmlTree(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return `<span style="color:var(--accent-primary);">${String(obj)}</span>`;
    }

    let html = '<ul style="list-style:none; padding-left:1.2rem; font-family:var(--font-mono); font-size:0.85rem;">';
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const val = obj[key];
        const isObj = typeof val === 'object' && val !== null;
        html += `<li style="margin:4px 0;">
          <strong style="color:#f59e0b;">${key}:</strong> ${isObj ? this.buildHtmlTree(val) : `<span style="color:#38bdf8;">${JSON.stringify(val)}</span>`}
        </li>`;
      }
    }
    html += '</ul>';
    return html;
  }

  showValidStatus() {
    if (!this.statusIndicator) return;
    this.statusIndicator.innerHTML = `
      <span class="status-indicator status-valid"><i class="fa-solid fa-circle-check"></i> Valid YAML</span>
      <span id="editor-cursor-pos">${this.getCursorPosText()}</span>
    `;
  }

  showInvalidStatus() {
    if (!this.statusIndicator) return;
    this.statusIndicator.innerHTML = `
      <span class="status-indicator status-invalid"><i class="fa-solid fa-circle-xmark"></i> Syntax Error</span>
      <span id="editor-cursor-pos">${this.getCursorPosText()}</span>
    `;
  }

  showError(err) {
    if (!this.errorBox || !this.errorMsg) return;
    this.errorBox.classList.remove('hidden');
    let message = err.message || String(err);
    if (err.mark) {
      message = `Line ${err.mark.line + 1}, Column ${err.mark.column + 1}: ${err.reason || err.message}`;
    }
    this.errorMsg.textContent = message;
  }

  hideError() {
    if (this.errorBox) {
      this.errorBox.classList.add('hidden');
    }
  }

  updateCursorPos() {
    const el = document.getElementById('editor-cursor-pos');
    if (el) el.textContent = this.getCursorPosText();
  }

  getCursorPosText() {
    if (!this.editor) return 'Ln 1, Col 1';
    const text = this.editor.value.substring(0, this.editor.selectionStart);
    const lines = text.split('\n');
    const line = lines.length;
    const col = lines[lines.length - 1].length + 1;
    return `Ln ${line}, Col ${col}`;
  }
}

// Global Actions
function loadPlaygroundPreset(key) {
  if (PLAYGROUND_PRESETS[key] && window.playgroundEngine) {
    window.playgroundEngine.setCode(PLAYGROUND_PRESETS[key]);
  }
}

function formatYamlInPlayground() {
  if (!window.playgroundEngine) return;
  const raw = window.playgroundEngine.editor.value;
  try {
    const parsed = jsyaml.load(raw);
    const formatted = jsyaml.dump(parsed, { indent: 2, lineWidth: -1 });
    window.playgroundEngine.setCode(formatted);
  } catch (e) {
    alert("Cannot format invalid YAML code. Fix syntax errors first!");
  }
}

function clearPlayground() {
  if (window.playgroundEngine) {
    window.playgroundEngine.setCode('');
  }
}

function switchOutputTab(tab) {
  const jsonBtn = document.getElementById('tab-json-btn');
  const astBtn = document.getElementById('tab-ast-btn');
  const jsonDisplay = document.getElementById('json-output-display');
  const treeDisplay = document.getElementById('tree-output-display');

  if (tab === 'json') {
    jsonBtn.classList.add('active');
    astBtn.classList.remove('active');
    jsonDisplay.classList.remove('hidden');
    treeDisplay.classList.add('hidden');
  } else {
    astBtn.classList.add('active');
    jsonBtn.classList.remove('active');
    treeDisplay.classList.remove('hidden');
    jsonDisplay.classList.add('hidden');
  }
}

function copyParsedOutput() {
  const text = document.getElementById('json-output-display').textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Parsed JSON copied to clipboard!");
  });
}
