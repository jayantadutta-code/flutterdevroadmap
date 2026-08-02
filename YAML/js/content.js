/* ==========================================================================
   YAML FlipBook - Complete YAML Cheat Sheet Curriculum (Strict Serial 1 to 38)
   YAML (YAML Ain't Markup Language)
   ========================================================================== */

const YAML_MODULES = [
  {
    id: 1,
    chapterNum: "Module 1",
    title: "Points 1-5: Basics, Comments, Key-Values, Strings & Numbers",
    summary: "YAML basics, single & multi-line comments, key-value pairs, string quoting, and numeric types.",
    pageLeft: `
      <div class="context-index-card">
        <h3><i class="fa-solid fa-list-ol"></i> Table of Contents (Click Topic to Jump)</h3>
        <div class="context-grid">
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(0)">Points 1-5: Basics &amp; Numbers</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(1)">Points 6-9: Booleans &amp; Lists</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(2)">Points 10-14: Objects &amp; Mixed</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(3)">Points 15-19: Indent &amp; Anchors</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(4)">Points 20-24: Types &amp; Dates</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(5)">Points 25-28: K8s &amp; Flutter</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(6)">Points 29-32: Mistakes &amp; JSON</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(7)">Points 33-36: Types &amp; Chomping</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(8)">Points 37-38: Cheat Sheet</button>
        </div>
      </div>

      <h2 class="page-h2">1. YAML Basics</h2>
      <p class="page-p">
        <strong>YAML</strong> (YAML Ain't Markup Language) is a human-readable data serialization language. It is commonly used for configuration files, Kubernetes, Docker Compose, CI/CD pipelines, Ansible, Flutter's <code>pubspec.yaml</code>, GitHub Actions, and many more.
      </p>
      <p class="page-p"><strong>File Extension:</strong> <code>.yaml</code> or <code>.yml</code></p>
      
      <pre class="book-code-block"><span class="code-header-badge">YAML Example</span><code>name: Jayanta
age: 22
country: India</code></pre>

      <pre class="book-code-block"><span class="code-header-badge">Equivalent JSON</span><code>{
  "name": "Jayanta",
  "age": 22,
  "country": "India"
}</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">2. Comments</h2>
      <pre class="book-code-block"><span class="code-header-badge">Comments Syntax</span><code># Single-line comment

name: Jayanta

# Multiple comments
# User Information
# Created by Admin
name: Jayanta</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">3. Key-Value Pair</h2>
      <p class="page-p">Syntax: <code>key: value</code></p>
      <pre class="book-code-block"><span class="code-header-badge">Key-Value Example</span><code>language: YAML
creator: Clark Evans
year: 2001</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">4. Strings</h2>
      <pre class="book-code-block"><span class="code-header-badge">Quotes Comparison</span><code># Without Quotes
name: Jayanta

# Double Quotes
name: "Jayanta Dutta"

# Single Quotes
name: 'Jayanta Dutta'</code></pre>

      <pre class="book-code-block"><span class="code-header-badge">Multiline String (Literal |)</span><code># Keeps line breaks
bio: |
  Flutter Developer
  Dart Programmer
  YouTuber

# Output:
# Flutter Developer
# Dart Programmer
# YouTuber</code></pre>

      <pre class="book-code-block"><span class="code-header-badge">Folded Style (&gt;)</span><code># Converts line breaks into spaces
bio: >
  Flutter Developer
  Dart Programmer
  YouTuber

# Output:
# Flutter Developer Dart Programmer YouTuber</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">5. Numbers</h2>
      <pre class="book-code-block"><span class="code-header-badge">Numbers</span><code># Integer
age: 22

# Float
pi: 3.14159

# Scientific
distance: 2e5

# Negative
temperature: -12</code></pre>
    `
  },

  {
    id: 2,
    chapterNum: "Module 2",
    title: "Points 6-9: Booleans, Nulls & Lists (Arrays)",
    summary: "Boolean values, null representations, single lists, nested lists, and matrices.",
    pageLeft: `
      <h2 class="page-h2">6. Boolean</h2>
      <pre class="book-code-block"><span class="code-header-badge">Booleans</span><code>isAdmin: true
isStudent: false

# Also accepted
yes
no
on
off</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">7. Null</h2>
      <pre class="book-code-block"><span class="code-header-badge">Null Representations</span><code>middleName: null

nickname: ~

city:
# All mean null.</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">8. List (Array)</h2>
      <pre class="book-code-block"><span class="code-header-badge">Dash List</span><code>fruits:
  - Apple
  - Mango
  - Banana</code></pre>

      <pre class="book-code-block"><span class="code-header-badge">Equivalent JSON</span><code>{
  "fruits": [
    "Apple",
    "Mango",
    "Banana"
  ]
}</code></pre>

      <p class="page-p"><strong>Inline List:</strong></p>
      <pre class="book-code-block"><span class="code-header-badge">Inline List</span><code>fruits: [Apple, Mango, Banana]</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">9. Nested List</h2>
      <pre class="book-code-block"><span class="code-header-badge">Nested Items &amp; List of Lists</span><code>students:
  - Jayanta
  - Rahul
  - Amit

# List of Lists (Matrix)
matrix:
  - [1, 2, 3]
  - [4, 5, 6]</code></pre>

      <div class="key-takeaway-card" style="border-left-color: var(--accent-primary); margin-top: 1rem;">
        <strong><i class="fa-solid fa-layer-group"></i> List Tip:</strong><br>
        In YAML, each list item begins with a dash and a space (<code>- </code>). Inline lists use square brackets (<code>[a, b, c]</code>) identical to JSON.
      </div>
    `
  },

  {
    id: 3,
    chapterNum: "Module 3",
    title: "Points 10-14: Dictionaries, Objects & Mixed Data",
    summary: "Dictionaries (objects), nested objects, list of objects, inline objects, and complex mixed structures.",
    pageLeft: `
      <h2 class="page-h2">10. Dictionary (Object)</h2>
      <pre class="book-code-block"><span class="code-header-badge">Dictionary Syntax</span><code>person:
  name: Jayanta
  age: 22
  city: Kolkata</code></pre>

      <pre class="book-code-block"><span class="code-header-badge">Equivalent JSON</span><code>{
  "person": {
    "name": "Jayanta",
    "age": 22,
    "city": "Kolkata"
  }
}</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">11. Nested Objects</h2>
      <pre class="book-code-block"><span class="code-header-badge">Deep Nesting</span><code>person:
  name: Jayanta

  address:
    city: Kolkata
    state: West Bengal
    country: India</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">12. List of Objects</h2>
      <pre class="book-code-block"><span class="code-header-badge">Sequence of Maps</span><code>employees:
  - name: Alice
    age: 25

  - name: Bob
    age: 28

  - name: Charlie
    age: 35</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">13. Inline Object</h2>
      <pre class="book-code-block"><span class="code-header-badge">Flow Style Object</span><code>person: {name: Jayanta, age: 22}</code></pre>

      <h2 class="page-h2" style="margin-top: 1rem;">14. Mixed Data</h2>
      <p class="page-p">Combining scalar values, lists, and nested objects into a cohesive schema:</p>
      <pre class="book-code-block"><span class="code-header-badge">Mixed Data Structure</span><code>user:
  name: Jayanta
  skills:
    - Flutter
    - Dart
    - Firebase

  address:
    city: Kolkata
    country: India</code></pre>
    `
  },

  {
    id: 4,
    chapterNum: "Module 4",
    title: "Points 15-19: Indentation, Documents, Anchors, Aliases & Merges",
    summary: "Golden indentation rules, multi-document streams (---), anchors (&), aliases (*), and merge keys (<<).",
    pageLeft: `
      <h2 class="page-h2">15. Indentation</h2>
      <pre class="book-code-block"><span class="code-header-badge">Correct vs Wrong</span><code># Correct
person:
  name: Jayanta
  age: 22

# Wrong
person:
    name: Jayanta
  age: 22</code></pre>

      <div class="key-takeaway-card" style="border-left-color: #f59e0b;">
        <strong><i class="fa-solid fa-ruler-combined"></i> Rules:</strong>
        <ul style="margin-top: 0.3rem; padding-left: 1.2rem; line-height: 1.5;">
          <li>✔ Use spaces</li>
          <li>❌ Never use tabs</li>
          <li>✔ Usually 2 spaces</li>
        </ul>
      </div>

      <h2 class="page-h2" style="margin-top: 0.8rem;">16. Multiple Documents</h2>
      <p class="page-p">Separate documents using <code>---</code>:</p>
      <pre class="book-code-block"><span class="code-header-badge">Multi-Document Stream</span><code>name: First
---
name: Second
---
name: Third</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">17. Anchors (<code>&amp;</code>)</h2>
      <p class="page-p">Reuse data using an anchor <code>&amp;anchor_name</code>:</p>
      <pre class="book-code-block"><span class="code-header-badge">Anchor Definition</span><code>default: &default

  name: Jayanta
  country: India

user1:
  <<: *default
  age: 22

user2:
  <<: *default
  age: 25</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">18. Alias (<code>*</code>)</h2>
      <p class="page-p">Reference anchored nodes using <code>*alias_name</code>:</p>
      <pre class="book-code-block"><span class="code-header-badge">Alias Example</span><code>developer: &dev

  language: Dart
  framework: Flutter

employee1:
  skills: *dev

employee2:
  skills: *dev</code></pre>

      <h2 class="page-h2" style="margin-top: 1rem;">19. Merge Key (<code>&lt;&lt;</code>)</h2>
      <p class="page-p">Merge base properties into a new map:</p>
      <pre class="book-code-block"><span class="code-header-badge">Merge Key Example</span><code>base: &base

  language: Dart
  framework: Flutter

developer:
  <<: *base
  experience: 3</code></pre>
    `
  },

  {
    id: 5,
    chapterNum: "Module 5",
    title: "Points 20-24: Explicit Types, Special Chars, Dates & Env Vars",
    summary: "Explicit data tags (!!), escaping & unicode, date, timestamp formats, and environment variable expansion.",
    pageLeft: `
      <h2 class="page-h2">20. Explicit Data Types</h2>
      <pre class="book-code-block"><span class="code-header-badge">Explicit Tags (!!)</span><code># String
name: !!str 123

# Integer
age: !!int "22"

# Float
price: !!float "10.5"

# Boolean
active: !!bool "true"</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">21. Special Characters</h2>
      <pre class="book-code-block"><span class="code-header-badge">Escape Sequences &amp; Unicode</span><code># Escape
message: "Hello\\nWorld"

# Tab
message: "Hello\\tWorld"

# Unicode
heart: "\\u2764"</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">22. Date</h2>
      <pre class="book-code-block"><span class="code-header-badge">Date Format</span><code>today: 2025-06-10</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">23. Timestamp</h2>
      <pre class="book-code-block"><span class="code-header-badge">ISO Timestamp</span><code>created: 2025-06-10T18:45:00Z</code></pre>

      <h2 class="page-h2" style="margin-top: 1rem;">24. Environment Variables (Common Pattern)</h2>
      <p class="page-p">
        YAML itself doesn't expand environment variables, but many tools (Docker Compose, Helm, etc.) do:
      </p>
      <pre class="book-code-block"><span class="code-header-badge">Env Var Templating</span><code>database:
  host: \${DB_HOST}
  user: \${DB_USER}</code></pre>
    `
  },

  {
    id: 6,
    chapterNum: "Module 6",
    title: "Points 25-28: Kubernetes, Docker, GitHub Actions & Flutter",
    summary: "Real-world production configs for Kubernetes, Docker Compose, GitHub Actions, and Flutter pubspec.yaml.",
    pageLeft: `
      <h2 class="page-h2">25. Kubernetes Example</h2>
      <pre class="book-code-block"><span class="code-header-badge">pod.yaml</span><code>apiVersion: v1

kind: Pod

metadata:
  name: nginx

spec:
  containers:
    - name: nginx
      image: nginx:latest</code></pre>

      <h2 class="page-h2" style="margin-top: 1rem;">26. Docker Compose Example</h2>
      <pre class="book-code-block"><span class="code-header-badge">docker-compose.yml</span><code>services:

  web:
    image: nginx

  db:
    image: mysql</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">27. GitHub Actions Example</h2>
      <pre class="book-code-block"><span class="code-header-badge">.github/workflows/build.yml</span><code>name: Build

on:
  push:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - run: echo "Hello YAML"</code></pre>

      <h2 class="page-h2" style="margin-top: 1rem;">28. Flutter pubspec.yaml</h2>
      <pre class="book-code-block"><span class="code-header-badge">pubspec.yaml</span><code>name: learn_dart

version: 1.0.0

environment:
  sdk: ">=3.0.0 <4.0.0"

dependencies:
  flutter:
    sdk: flutter</code></pre>
    `
  },

  {
    id: 7,
    chapterNum: "Module 7",
    title: "Points 29-32: Reserved Chars, Mistakes, Best Practices & YAML vs JSON",
    summary: "Reserved characters, common syntax mistakes, production best practices, and YAML vs JSON matrix.",
    pageLeft: `
      <h2 class="page-h2">29. Reserved Characters</h2>
      <p class="page-p">
        Reserved characters: <code>: # - ? &amp; * ! | &gt; @ &#96; % {} [] ,</code><br>
        <strong>Rule:</strong> Quote values if they contain reserved characters.
      </p>
      <pre class="book-code-block"><span class="code-header-badge">Quoted Reserved String</span><code>password: "abc:123"</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">30. Common Mistakes</h2>
      <pre class="book-code-block"><span class="code-header-badge">Common Pitfalls</span><code>❌ Using tabs
name:
<TAB>Jayanta

✅ Correct spaces
name:
  Jayanta

❌ Missing space after colon
name:Jayanta

✅ Space after colon
name: Jayanta

❌ Wrong indentation
person:
 name: Jayanta
   age: 22</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">31. Best Practices</h2>
      <ul style="padding-left: 1.2rem; font-size: 0.85rem; line-height: 1.6;">
        <li>✔ Use 2 spaces</li>
        <li>✔ Use meaningful keys</li>
        <li>✔ Keep nesting shallow</li>
        <li>✔ Quote special strings</li>
        <li>✔ Use comments</li>
        <li>✔ Validate YAML</li>
        <li>✔ Keep files modular</li>
      </ul>

      <h2 class="page-h2" style="margin-top: 0.8rem;">32. YAML vs JSON</h2>
      <table class="comparison-table" style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
        <thead>
          <tr style="background: rgba(255,255,255,0.05); text-align: left;">
            <th style="padding: 5px; border: 1px solid var(--border-color);">Feature</th>
            <th style="padding: 5px; border: 1px solid var(--border-color);">YAML</th>
            <th style="padding: 5px; border: 1px solid var(--border-color);">JSON</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Human Readable</td><td style="padding: 4px; border: 1px solid var(--border-color);">✅</td><td style="padding: 4px; border: 1px solid var(--border-color);">❌</td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Comments</td><td style="padding: 4px; border: 1px solid var(--border-color);">✅</td><td style="padding: 4px; border: 1px solid var(--border-color);">❌</td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Less Syntax</td><td style="padding: 4px; border: 1px solid var(--border-color);">✅</td><td style="padding: 4px; border: 1px solid var(--border-color);">❌</td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Curly Braces</td><td style="padding: 4px; border: 1px solid var(--border-color);">❌</td><td style="padding: 4px; border: 1px solid var(--border-color);">✅</td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Lists</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>- item</code></td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>[]</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Objects</td><td style="padding: 4px; border: 1px solid var(--border-color);">Indentation</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>{}</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Used For</td><td style="padding: 4px; border: 1px solid var(--border-color);">Configurations</td><td style="padding: 4px; border: 1px solid var(--border-color);">APIs, Data</td></tr>
        </tbody>
      </table>
    `
  },

  {
    id: 8,
    chapterNum: "Module 8",
    title: "Points 33-36: Data Types, Flow Style, Multiline Chomping & Ecosystem",
    summary: "Data types summary, flow style vs block style, advanced multiline chomping, and real-world usage.",
    pageLeft: `
      <h2 class="page-h2">33. YAML Data Types</h2>
      <table class="comparison-table" style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
        <thead>
          <tr style="background: rgba(255,255,255,0.05); text-align: left;">
            <th style="padding: 5px; border: 1px solid var(--border-color);">Type</th>
            <th style="padding: 5px; border: 1px solid var(--border-color);">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">String</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>"Hello"</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Integer</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>42</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Float</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>3.14</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Boolean</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>true</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Null</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>null, ~</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">List</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>- Apple</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Object</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>name: John</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Date</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>2026-08-02</code></td></tr>
          <tr><td style="padding: 4px; border: 1px solid var(--border-color);">Timestamp</td><td style="padding: 4px; border: 1px solid var(--border-color);"><code>2026-08-02T12:30:00Z</code></td></tr>
        </tbody>
      </table>

      <h2 class="page-h2" style="margin-top: 0.8rem;">34. YAML Flow Style</h2>
      <pre class="book-code-block"><span class="code-header-badge">Block vs Flow Style</span><code># Block style (most common):
colors:
  - red
  - green
  - blue

# Flow style:
colors: [red, green, blue]

# Objects:
user: {name: Jayanta, age: 22}</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">35. Advanced Multiline Strings</h2>
      <pre class="book-code-block"><span class="code-header-badge">Chomping Controls</span><code># Strip final newline (|-):
message: |-
  Line 1
  Line 2

# Keep extra newlines (|+):
message: |+
  Line 1
  Line 2

# Fold with strip (>-):
message: >-
  This long
  sentence becomes
  one line.</code></pre>

      <h2 class="page-h2" style="margin-top: 0.8rem;">36. Common Real-World Uses</h2>
      <ul style="padding-left: 1.2rem; font-size: 0.82rem; line-height: 1.6;">
        <li>✅ Kubernetes manifests</li>
        <li>✅ Docker Compose (<code>docker-compose.yml</code>)</li>
        <li>✅ GitHub Actions workflows</li>
        <li>✅ GitLab CI/CD</li>
        <li>✅ Azure Pipelines</li>
        <li>✅ CircleCI</li>
        <li>✅ Ansible playbooks</li>
        <li>✅ Flutter pubspec.yaml</li>
        <li>✅ Home Assistant</li>
        <li>✅ Helm charts</li>
        <li>✅ Static site generators (Jekyll, Hugo)</li>
        <li>✅ Application configuration files</li>
      </ul>
    `
  },

  {
    id: 9,
    chapterNum: "Module 9",
    title: "Points 37-38: Quick Reference, Roadmap & Cheat Sheet Summary",
    summary: "All-in-one quick reference code block, learning roadmap, and complete summary takeaway.",
    pageLeft: `
      <h2 class="page-h2">37. Quick Reference</h2>
      <pre class="book-code-block"><span class="code-header-badge">All-In-One Code Reference</span><code># Comment

name: John           # String
age: 25              # Integer
price: 19.99         # Float
active: true         # Boolean
empty: null          # Null

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
  name: Alice

---
name: Another Document</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">38. YAML Learning Roadmap</h2>
      <div style="font-size: 0.82rem; line-height: 1.5;">
        <div style="background: rgba(56, 189, 248, 0.1); border-left: 3px solid #38bdf8; padding: 0.4rem 0.6rem; border-radius: 4px; margin-bottom: 0.4rem;">
          <strong style="color: #38bdf8;">Beginner:</strong> What YAML is, syntax, comments, key-value pairs, strings, numbers, booleans, null, lists, objects, indentation.
        </div>
        <div style="background: rgba(245, 158, 11, 0.1); border-left: 3px solid #f59e0b; padding: 0.4rem 0.6rem; border-radius: 4px; margin-bottom: 0.4rem;">
          <strong style="color: #f59e0b;">Intermediate:</strong> Nested structures, multiline strings, flow style, multiple documents, anchors, aliases, merge keys, explicit types.
        </div>
        <div style="background: rgba(168, 85, 247, 0.1); border-left: 3px solid #a855f7; padding: 0.4rem 0.6rem; border-radius: 4px;">
          <strong style="color: #a855f7;">Advanced:</strong> Kubernetes, Docker Compose, GitHub Actions, CI/CD pipelines, Flutter pubspec.yaml, YAML validation &amp; linting, Helm/Ansible templating.
        </div>
      </div>

      <h2 class="page-h2" style="margin-top: 0.8rem;">Cheat Sheet Summary</h2>
      <pre class="book-code-block"><span class="code-header-badge">Cheat Sheet Summary</span><code># Comment
key: value
list:
  - item1
  - item2
object:
  key: value
inlineList: [a, b, c]
inlineObject: {x: 1, y: 2}
literal: |
  Keep Newlines
folded: >
  Join Lines
anchor: &base
  language: Dart
copy:
  <<: *base
---
another: document</code></pre>

      <div style="margin-top: 1rem; text-align: center; padding: 0.85rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--accent-primary); border-radius: 8px;">
        <p style="font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--text-main);"><strong>🎉 End of YAML Masterclass &amp; Cheat Sheet!</strong></p>
        <button class="action-btn primary-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.closeBook()">
          <i class="fa-solid fa-book-bookmark"></i> Finish &amp; Close Book
        </button>
      </div>
    `
  }
];
