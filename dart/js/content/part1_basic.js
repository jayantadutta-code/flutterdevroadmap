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
      pageId: "p1_history",
      header: "0.1 SHORT HISTORY OF DART",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-clock-rotate-left"></i> Short History of Dart Programming Language</h2>
        <p class="topic-paragraph">
          Dart was created by Google to provide a modern, highly performant, and client-optimized programming language capable of targeting multiple platforms seamlessly from a single codebase.
        </p>

        <div class="history-timeline">
          <div class="history-item">
            <div class="history-badge">2010</div>
            <div class="history-content">
              Google began developing <strong>Dart</strong>, led by <strong>Lars Bak</strong> and <strong>Kasper Lund</strong>, two <strong>Danish software engineers</strong>, to create a modern, fast, and scalable programming language.
            </div>
          </div>

          <div class="history-item">
            <div class="history-badge">10–12 Oct 2011</div>
            <div class="history-content">
              Dart was officially announced at the <strong>GOTO Conference</strong> in Aarhus, Denmark.
            </div>
          </div>

          <div class="history-item">
            <div class="history-badge">14 Nov 2013</div>
            <div class="history-content">
              <strong>Dart 1.0</strong>, the first stable version, was officially released.
            </div>
          </div>

          <div class="history-item">
            <div class="history-badge">2015</div>
            <div class="history-content">
              Google shifted Dart's focus from a browser VM to compiling Dart into JavaScript for better web compatibility.
            </div>
          </div>

          <div class="history-item">
            <div class="history-badge">2017</div>
            <div class="history-content">
              Google introduced <strong>Flutter</strong>, making Dart its official language for cross-platform app development.
            </div>
          </div>

          <div class="history-item">
            <div class="history-badge">August 2018</div>
            <div class="history-content">
              <strong>Dart 2.0</strong> introduced a stronger type system and several language improvements.
            </div>
          </div>

          <div class="history-item">
            <div class="history-badge">November 2019</div>
            <div class="history-content">
              <strong>Dart 2.6</strong> introduced <strong>dart2native</strong>, allowing developers to compile Dart applications directly into native executables for Windows, macOS, and Linux.
            </div>
          </div>

          <div class="history-item">
            <div class="history-badge">May 2023</div>
            <div class="history-content">
              <strong>Dart 3</strong> was released with powerful features such as <strong>Records</strong>, <strong>Patterns</strong>, and <strong>Class Modifiers</strong>.
            </div>
          </div>
        </div>
      `
    },
    {
      pageId: "p1_today",
      header: "0.2 DART TODAY & FRAMEWORKS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-layer-group"></i> Today: Modern Dart Ecosystem</h2>
        <p class="topic-paragraph">
          Dart is an open-source, client-optimized programming language developed by Google. Although it is best known as the language behind <strong>Flutter</strong>, it is also used by several other frameworks and platforms, including:
        </p>

        <div class="framework-grid">
          <div class="framework-card">
            <div class="framework-header">
              <i class="fa-solid fa-mobile-screen-button framework-icon"></i>
              <h4>Flutter</h4>
            </div>
            <p>Cross-platform mobile, web, desktop, and embedded apps with high-performance rendering.</p>
          </div>

          <div class="framework-card">
            <div class="framework-header">
              <i class="fa-solid fa-server framework-icon"></i>
              <h4>Serverpod</h4>
            </div>
            <p>Backend development for Dart and Flutter applications with ORM & streaming sockets.</p>
          </div>

          <div class="framework-card">
            <div class="framework-header">
              <i class="fa-solid fa-laptop-code framework-icon"></i>
              <h4>Jaspr</h4>
            </div>
            <p>Modern web application framework inspired by Flutter for building reactive web UIs.</p>
          </div>

          <div class="framework-card">
            <div class="framework-header">
              <i class="fa-solid fa-frog framework-icon"></i>
              <h4>dart_frog</h4>
            </div>
            <p>Lightweight backend web framework for building fast APIs and microservice servers.</p>
          </div>

          <div class="framework-card">
            <div class="framework-header">
              <i class="fa-solid fa-cubes framework-icon"></i>
              <h4>Shelf</h4>
            </div>
            <p>Middleware-based web server framework for composing HTTP services and routing.</p>
          </div>

          <div class="framework-card">
            <div class="framework-header">
              <i class="fa-solid fa-cloud-bolt framework-icon"></i>
              <h4>Angel3</h4>
            </div>
            <p>Full-stack web framework for REST APIs and server-side applications.</p>
          </div>
        </div>

        <div class="callout-box tip" style="margin-top: 0.8rem;">
          <i class="fa-solid fa-globe callout-icon"></i>
          <div>
            <strong>Multi-Platform Reach:</strong> Dart enables developers to build applications for <strong>Android, iOS, Web, Windows, macOS, Linux, servers, and embedded devices</strong> using a modern, fast, and type-safe language.
          </div>
        </div>
      `
    },
    {
      pageId: "p1_compilation",
      header: "0.3 DART ARCHITECTURE & COMPILATION",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-gears"></i> Dart Execution Models: JIT, AOT & Web</h2>
        <p class="topic-paragraph">
          Dart's architecture combines developer velocity with maximum production native performance through its multi-compiler architecture:
        </p>

        <div class="compilation-grid">
          <div class="compilation-card">
            <span class="comp-badge jit">Development</span>
            <h4>Just-In-Time (JIT)</h4>
            <p>Executes code in Dart VM dynamically. Powers sub-second <strong>Stateful Hot Reload</strong> while preserving app state during development.</p>
          </div>

          <div class="compilation-card">
            <span class="comp-badge aot">Production</span>
            <h4>Ahead-Of-Time (AOT)</h4>
            <p>Compiles Dart directly into native machine code (ARM, x64). Guarantees fast startup, zero warm-up, and butter-smooth 60/120 FPS UI.</p>
          </div>

          <div class="compilation-card">
            <span class="comp-badge web">Web Target</span>
            <h4>JS & Wasm Compilers</h4>
            <p><code>dart2js</code> compiles Dart to optimized JavaScript. <code>dart2wasm</code> target generates WebAssembly bytecode for web performance.</p>
          </div>
        </div>

        <div class="code-snippet-box" style="margin-top: 0.8rem;">
          <div class="code-snippet-header">
            <span>dart_history_info.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  const String language = 'Dart';
  const String creator = 'Google (Lars Bak & Kasper Lund)';
  const int announcedYear = 2011;
  const String latestVersion = 'Dart 3.x';

  print('$language created by $creator');
  print('Announced in $announcedYear | Current: $latestVersion');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_philosophy",
      header: "0.4 DART PHILOSOPHY & ADVANTAGES",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-shield-halved"></i> Key Language Philosophies</h2>
        <p class="topic-paragraph">
          Dart was crafted with specific design philosophies to maximize developer efficiency and deliver predictable application safety:
        </p>

        <div class="philosophy-list">
          <div class="philosophy-item">
            <i class="fa-solid fa-shield-cat philosophy-icon"></i>
            <div>
              <strong>100% Sound Null Safety:</strong> Eliminates null pointer crash errors at compile time. Variables default to non-nullable unless explicitly declared optional with <code>?</code>.
            </div>
          </div>

          <div class="philosophy-item">
            <i class="fa-solid fa-bolt philosophy-icon"></i>
            <div>
              <strong>Single-Threaded Event Loop & Isolates:</strong> Asynchronous execution runs efficiently on a single thread event loop. CPU-intensive operations use memory-isolated <strong>Isolates</strong> without data race locks.
            </div>
          </div>

          <div class="philosophy-item">
            <i class="fa-solid fa-cubes-stacked philosophy-icon"></i>
            <div>
              <strong>Rich Package Ecosystem (pub.dev):</strong> Access over 50,000 open-source packages for networking, UI components, state management, database storage, and AI interop.
            </div>
          </div>

          <div class="philosophy-item">
            <i class="fa-solid fa-wand-magic-sparkles philosophy-icon"></i>
            <div>
              <strong>Modern Pattern Matching & Records (Dart 3):</strong> Destructure tuples, enforce exhaustive pattern matching in switches, and utilize sealed class hierarchies for domain modeling.
            </div>
          </div>
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
