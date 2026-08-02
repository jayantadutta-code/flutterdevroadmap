/**
 * Dart Cookbook - Part 1: Basic
 * Topics: Introduction, Comments, Variables & Data Types, Number, String, Regular Expression, String Buffer, Operators, Conditions, Loops
 */
window.part1Content = {
  partId: 1,
  title: "Part 1: Basic Dart Engineering",
  pages: [
    {
      pageId: "p1_cover",
      header: "PART 1: BASIC",
      content: `
        <div class="chapter-title-page">
          <div class="chapter-number">CHAPTER 01</div>
          <h1 class="chapter-heading">Basic Dart Engineering</h1>
          <p class="chapter-subtitle">Master the core syntax, data types, numbers, strings, regex, operators, and control flows that underpin modern Dart 3 applications.</p>
        </div>
      `
    },
    {
      pageId: "p1_intro",
      header: "1.1 INTRODUCTION & COMMENTS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-code"></i> 1. Introduction to Dart</h2>
        <p class="topic-paragraph">
          Dart is a client-optimized, object-oriented language developed by Google. Designed for multi-platform development (mobile, web, desktop, and server), Dart features Ahead-Of-Time (AOT) compilation for fast native machine code performance and Just-In-Time (JIT) compilation for lightning-fast hot reload during development.
        </p>

        <h3 class="section-h3">Comments in Dart</h3>
        <p class="topic-paragraph">Dart supports single-line, multi-line, and documentation comments (which format into markdown for dartdoc):</p>
        
        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>comments.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">// Single-line comment: Execution starts here
void main() {
  /*
     Multi-line comment:
     Dart programs require a main() top-level function.
  */
  
  /// Documentation comment for [greetUser]
  print('Welcome to Dart Cookbook 2026!');
}</code></pre>
        </div>

        <div class="callout-box tip">
          <i class="fa-solid fa-lightbulb callout-icon"></i>
          <div><strong>Pro-Tip:</strong> Always use triple slashes <code>///</code> for docstrings. References inside square brackets like <code>[greetUser]</code> will be automatically hyperlinked in generated documentation.</div>
        </div>
      `
    },
    {
      pageId: "p1_vars",
      header: "1.2 VARIABLES & DATA TYPES",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-cube"></i> 2. Variables & Data Types</h2>
        <p class="topic-paragraph">
          Dart is a strongly typed language with static type inference. You can explicitly specify types or use <code>var</code>, <code>final</code>, and <code>const</code>.
        </p>

        <h3 class="section-h3">var vs final vs const vs Object vs dynamic</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.9rem;">
          <li><strong>var:</strong> Inferred type locked at initialization.</li>
          <li><strong>final:</strong> Single assignment at runtime.</li>
          <li><strong>const:</strong> Compile-time constant (evaluated at build time).</li>
          <li><strong>dynamic:</strong> Disables static type checking (use sparingly).</li>
        </ul>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>variables.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  var name = 'Dart Cookbook'; // String type inferred
  final DateTime now = DateTime.now(); // Runtime constant
  const double pi = 3.1415926535; // Compile-time constant
  
  Object obj = 'I am safely typed';
  dynamic dyn = 42;
  dyn = 'Now I am a String!'; // Dynamic allows type changes

  print('Name: $name | Pi: $pi | Dyn: $dyn');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_num_str",
      header: "1.3 NUMBERS & STRINGS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-hashtag"></i> 3. Numbers, Strings & StringBuffer</h2>
        <p class="topic-paragraph">
          Dart numbers are represented by <code>int</code> (64-bit integer) and <code>double</code> (64-bit IEEE double-precision float), both extending <code>num</code>.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>numbers.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  int count = 10;
  double price = 99.99;
  num val = 12; // can hold int or double
  
  print('Bitwise AND: \${count & 3}');
  print('Parsed int: \${int.parse(\'42\')}');
  print('Formatted double: \${price.toStringAsFixed(1)}');
}</code></pre>
        </div>

        <h3 class="section-h3">Strings & StringBuffer</h3>
        <p class="topic-paragraph">
          Strings are UTF-16 code units. For high-performance repetitive concatenation, use <code>StringBuffer</code> instead of repeatedly using <code>+</code> operator.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>string_buffer.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  final buffer = StringBuffer();
  buffer.write('Dart ');
  buffer.writeAll(['Cookbook ', '2026']);
  
  String result = buffer.toString();
  print('Result: $result (Length: \${buffer.length})');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_regex_ops",
      header: "1.4 REGEX & OPERATORS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-calculator"></i> 4. Regular Expressions & Operators</h2>
        <p class="topic-paragraph">
          Dart features <code>RegExp</code> for pattern matching, validation, and string parsing.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>regex.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  final emailRegex = RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
  print('Valid email? \${emailRegex.hasMatch(\'dart@dev.org\')}');
  
  final numPattern = RegExp(r'\d+');
  final matches = numPattern.allMatches('App v3 built with Dart 2026');
  for (final m in matches) {
    print('Match: \${m.group(0)}');
  }
}</code></pre>
        </div>

        <h3 class="section-h3">Key Dart Operators</h3>
        <p class="topic-paragraph">
          Dart includes standard arithmetic, relational, type test (<code>is</code>, <code>is!</code>), cascade (<code>..</code>), and null-aware operators.
        </p>
      `
    },
    {
      pageId: "p1_loops_cond",
      header: "1.5 CONDITIONS & LOOPS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-rotate"></i> 5. Control Flow: Conditions & Loops</h2>
        <p class="topic-paragraph">
          Standard flow statements include <code>if/else</code>, ternary <code>?:</code>, <code>switch</code>, <code>for</code>, <code>for-in</code>, <code>while</code>, and <code>do-while</code>.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>control_flow.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  final items = ['Basic', 'Core', 'OOP', 'Safety'];
  
  // Standard for-in loop
  for (final item in items) {
    if (item == 'OOP') break;
    print('Item: $item');
  }

  // Switch statement
  String mode = 'active';
  switch (mode) {
    case 'active':
      print('Status: System Active');
      break;
    default:
      print('Status: Idle');
  }
}</code></pre>
        </div>
      `
    }
  ]
};
