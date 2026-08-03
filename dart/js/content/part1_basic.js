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
      pageId: "p0_language_intro",
      header: "0.1 WHAT IS A PROGRAMMING LANGUAGE?",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-comments"></i> 1. What is a Language?</h2>
        <p class="topic-paragraph">
          A language is a structured system of communication consisting of a specific set of sounds, words, grammar, or symbols, along with the rules for their combination, used by humans to express thoughts, feelings, and ideas.
        </p>
        <p class="topic-paragraph">Languages generally fall into two main categories:</p>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.85rem;">
          <li><strong>Natural:</strong> Evolved organically over centuries for human interaction (e.g., English, Hindi, Spanish).</li>
          <li><strong>Artificial:</strong> Explicitly designed for specific technical purposes (e.g., Programming languages, mathematical notation).</li>
        </ul>

        <h2 class="section-h2" style="margin-top: 1rem;"><i class="fa-solid fa-laptop-code"></i> 2. What is a Computer Programming Language?</h2>
        <p class="topic-paragraph">
          In simple terms, a programming language acts as a bridge, allowing humans to communicate with computers and tell them exactly what tasks to perform.
        </p>

        <h3 class="section-h3">2.1 Definition</h3>
        <p class="topic-paragraph">
          A programming language is a formalized set of rules, keywords, symbols, and syntax used to write software programs that instruct a computer to execute specific tasks.
        </p>

        <h3 class="section-h3">2.2 Why Programming Languages Are Needed</h3>
        <p class="topic-paragraph">
          Computers are fundamentally electronic machines that only understand machine code (binary: <code>0</code>s and <code>1</code>s). Because writing in pure binary is incredibly difficult and error-prone for humans, programming languages allow us to write instructions in a human-readable format.
        </p>
        <p class="topic-paragraph">
          These instructions are then translated into machine code using a translator, such as a <strong>compiler</strong> or an <strong>interpreter</strong>.
        </p>

        <h3 class="section-h3">2.3 Key Classifications</h3>
        <table class="content-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Level</strong></td>
              <td>Low: Harder for humans to write, close to hardware.<br>High: Human-readable, abstracted from hardware.</td>
              <td>Low: Assembly.<br>High: Dart, Python, Java.</td>
            </tr>
            <tr>
              <td><strong>Execution</strong></td>
              <td>Compiled (translates entire codebase upfront) vs. Interpreted (translates line-by-line at runtime).</td>
              <td>C++ (Compiled)<br>Bash (Interpreted)</td>
            </tr>
          </tbody>
        </table>

        <h3 class="section-h3" style="margin-top: 0.8rem;">2.4 Core Characteristics of a Programming Language</h3>
        <p class="topic-paragraph">Every programming language relies on fundamental building blocks:</p>
        <ul style="margin-left: 1.2rem; font-size: 0.82rem; line-height: 1.5;">
          <li><strong>Syntax:</strong> Grammatical rules dictating how code must be structured.</li>
          <li><strong>Keywords:</strong> Reserved words with predefined meanings to the compiler/interpreter (e.g., <code>if</code>, <code>while</code>, <code>return</code>).</li>
          <li><strong>Variables:</strong> Named containers used to store data values in memory.</li>
          <li><strong>Data Types:</strong> Definitions that tell the computer what kind of value a variable holds (e.g., Integers, Strings, Booleans).</li>
          <li><strong>Operators:</strong> Symbols used to perform calculations or logical comparisons (e.g., <code>+</code>, <code>-</code>, <code>==</code>, <code>&gt;</code>).</li>
          <li><strong>Control Flow:</strong> Mechanisms dictating execution order, enabling decisions (Conditionals) or loops.</li>
          <li><strong>Functions / Methods:</strong> Reusable blocks of code designed to perform specific actions, preventing repetition.</li>
        </ul>

        <div class="callout-box tip" style="margin-top: 0.8rem;">
          <i class="fa-solid fa-lightbulb callout-icon"></i>
          <div><strong>Conclusion:</strong> A programming language is a powerful tool that turns abstract logic into functional software—from mobile apps to AI systems.</div>
        </div>
      `
    },
    {
      pageId: "p0_compilers_interpreters",
      header: "0.2 COMPILERS, INTERPRETERS & HYBRID",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-microchip"></i> 3. Languages That Use a Compiler</h2>
        <p class="topic-paragraph">
          A <strong>compiler</strong> translates the entire source code into native machine code (generating a standalone executable file, like an <code>.exe</code> or binary) before the program is executed.
        </p>

        <h3 class="section-h3">3.1 Key Compiled Languages</h3>
        <table class="content-table">
          <thead>
            <tr>
              <th>Language</th>
              <th>Compilers</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>C / C++</strong></td>
              <td>GCC, Clang, MSVC</td>
              <td>Early, highly optimized native languages for system programming.</td>
            </tr>
            <tr>
              <td><strong>Go / Rust</strong></td>
              <td>Go Compiler, rustc</td>
              <td>Modern focus on concurrency, memory safety, and cloud scalability.</td>
            </tr>
          </tbody>
        </table>
        <div class="callout-box" style="background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981; margin: 0.6rem 0; font-size: 0.8rem;">
          <strong>Summary:</strong> The compiler checks the entire codebase for syntax errors upfront. If it passes, it outputs a standalone binary executable that runs directly on the OS at maximum speed.
        </div>

        <h2 class="section-h2" style="margin-top: 1rem;"><i class="fa-solid fa-terminal"></i> 4. Languages That Use an Interpreter</h2>
        <p class="topic-paragraph">
          An <strong>interpreter</strong> does not generate a standalone executable file. Instead, it reads, translates, and executes the source code line by line at runtime.
        </p>
        <h3 class="section-h3">4.1 Key Interpreted Languages</h3>
        <p class="topic-paragraph">Examples include legacy BASIC and Bash (shell scripting language).</p>
        <div class="callout-box tip" style="font-size: 0.8rem;">
          <i class="fa-solid fa-info-circle callout-icon"></i>
          <div><strong>Modern Hybrid Note:</strong> Languages like Ruby, Python, and JavaScript, while historically called interpreted, are modernly classified as <strong>Hybrid</strong> engines using Bytecode or JIT compilation.</div>
        </div>

        <h2 class="section-h2" style="margin-top: 1rem;"><i class="fa-solid fa-network-wired"></i> 5. Hybrid Languages</h2>
        <p class="topic-paragraph">
          Hybrid languages combine compilation and interpretation to achieve cross-platform portability ("write once, run anywhere") alongside high execution performance. They compile human-readable code into intermediate Bytecode, executed by a Virtual Machine via JIT (Just-In-Time) engines.
        </p>
        <table class="content-table">
          <thead>
            <tr>
              <th>Language</th>
              <th>Execution Flow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Java / C#</strong></td>
              <td>Compiles to Bytecode (JVM) or CIL (.NET), executed by a Virtual Machine with JIT compilation.</td>
            </tr>
            <tr>
              <td><strong>Ruby / Python / JS</strong></td>
              <td>Utilizes intermediate representations (P-Code/Bytecode) and Just-In-Time (JIT) runtime optimization engines.</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      pageId: "p0_dart_case_compilers",
      header: "0.3 DEEP DIVE: THE CASE OF DART",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-bolt"></i> 6. Deep Dive: The Case of Dart</h2>
        <p class="topic-paragraph">
          Dart is unique because it uses two different compilation targets depending on where you are in the software development lifecycle.
        </p>

        <div class="compilation-grid">
          <div class="compilation-card">
            <span class="comp-badge jit">Development Mode</span>
            <h4>6.1 JIT Compilation</h4>
            <p><strong>How it works:</strong> Source code is compiled dynamically on-the-fly while the application is running inside the Dart VM.</p>
            <p style="margin-top: 0.4rem;"><strong>The Benefit:</strong> Powers Flutter's sub-second <strong>Stateful Hot Reload</strong>. Update UI code and hit save without restarting app state.</p>
          </div>

          <div class="compilation-card">
            <span class="comp-badge aot">Production Mode</span>
            <h4>6.2 AOT Compilation</h4>
            <p><strong>How it works:</strong> The entire codebase is compiled upfront directly into native machine code (ARM, x64) before release.</p>
            <p style="margin-top: 0.4rem;"><strong>The Benefit:</strong> Zero compiler/VM overhead on user devices. Delivers instant app startup and smooth 60/120 FPS UI.</p>
          </div>
        </div>

        <div class="callout-box tip" style="margin-top: 0.8rem; border-left-color: var(--accent-gold);">
          <i class="fa-solid fa-graduation-cap callout-icon" style="color: var(--accent-gold);"></i>
          <div>
            <strong>6.3 Tutorial Summary Statement:</strong><br>
            <em>"Dart is a versatile, compiled language that uniquely supports both JIT (Just-In-Time) and AOT (Ahead-Of-Time) compilation. During development, Dart leverages JIT to enable lightning-fast sub-second Hot Reloads. When building for production, it switches to AOT compilation, converting source code entirely into native machine code for maximum execution speed."</em>
          </div>
        </div>

        <h3 class="section-h3" style="margin-top: 1rem;">6.4 Key Dart Compilers</h3>
        <table class="content-table" style="margin-top: 0.5rem;">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Development</th>
              <th>Release</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Desktop (Windows/macOS/Linux)</strong></td>
              <td><strong>Dart VM (JIT)</strong></td>
              <td><strong>dart compile exe</strong></td>
            </tr>
            <tr>
              <td><strong>Android</strong></td>
              <td><strong>Dart VM (JIT)</strong></td>
              <td><strong>gen_snapshot (AOT)</strong></td>
            </tr>
            <tr>
              <td><strong>iOS</strong></td>
              <td><strong>Dart VM (JIT)</strong></td>
              <td><strong>gen_snapshot (AOT)</strong></td>
            </tr>
            <tr>
              <td><strong>Web</strong></td>
              <td><strong>dartdevc (DDC)</strong></td>
              <td><strong>dart2js</strong></td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      pageId: "p0_dart_overview_features",
      header: "0.4 DART OVERVIEW & USE CASES",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-bullseye"></i> 7. What is the Dart Programming Language?</h2>
        <p class="topic-paragraph">
          Developed by Google, Dart is a client-optimized, type-safe programming language designed for building fast apps on any platform.
        </p>

        <h3 class="section-h3">Key Features</h3>
        <div class="philosophy-list">
          <div class="philosophy-item">
            <i class="fa-solid fa-code philosophy-icon"></i>
            <div><strong>C-Style Syntax:</strong> Familiar and easy to learn if you have a background in C, C++, Java, C#, or JavaScript.</div>
          </div>
          <div class="philosophy-item">
            <i class="fa-solid fa-shield-halved philosophy-icon"></i>
            <div><strong>Sound Null Safety:</strong> Eliminates null pointer exception crashes by catching null-related errors at compile time rather than runtime.</div>
          </div>
          <div class="philosophy-item">
            <i class="fa-solid fa-sliders philosophy-icon"></i>
            <div><strong>Compilation Flexibility:</strong> Dual-engine setup supporting JIT for rapid development loops and AOT for native production performance.</div>
          </div>
          <div class="philosophy-item">
            <i class="fa-solid fa-cubes philosophy-icon"></i>
            <div><strong>Isolate-Based Concurrency:</strong> Avoids shared-memory multi-threading thread-locks by using independent Isolates communicating via message passing.</div>
          </div>
          <div class="philosophy-item">
            <i class="fa-solid fa-recycle philosophy-icon"></i>
            <div><strong>Garbage-Collected:</strong> Features a fast generational garbage collector optimized for short-lived UI frame workloads.</div>
          </div>
        </div>

        <h3 class="section-h3" style="margin-top: 0.8rem;">Primary Use Cases</h3>
        <ul style="margin-left: 1.2rem; font-size: 0.83rem;">
          <li><strong>Cross-Platform Mobile Apps:</strong> The exclusive language behind Google's Flutter SDK.</li>
          <li><strong>Web Applications:</strong> Compiles to highly optimized JavaScript or WebAssembly (Wasm).</li>
          <li><strong>Desktop & Server:</strong> Compiles to native machine executables for Windows, macOS, Linux, and server microservices.</li>
        </ul>
      `
    },
    {
      pageId: "p0_client_opt_typesafety",
      header: "0.5 CLIENT OPTIMIZATION & TYPE SAFETY",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-mobile-screen"></i> 8. Why is Dart a Client-Optimized Language?</h2>
        <p class="topic-paragraph">
          Dart is called <strong>client-optimized</strong> because its entire runtime, garbage collector, compiler pipeline, and syntax were specifically tailored for building user interfaces across multiple client devices (mobile, web, desktop).
        </p>
        <div class="callout-box tip" style="font-size: 0.82rem;">
          <i class="fa-solid fa-bolt callout-icon"></i>
          <div>It offers rapid development loops through Stateful Hot Reload, generational memory allocation designed for 60/120 FPS UI frames, and direct AOT native machine compilation to ensure instant app launch times on end-user hardware.</div>
        </div>

        <h2 class="section-h2" style="margin-top: 1rem;"><i class="fa-solid fa-lock"></i> 9. Why is Dart a Type-Safe Language?</h2>
        <p class="topic-paragraph">
          Dart is considered <strong>type-safe</strong> because it uses a combination of static type checking at compile time and runtime checks to ensure variables contain values matching their declared types.
        </p>
        <div class="philosophy-item" style="margin-top: 0.6rem;">
          <i class="fa-solid fa-shield-cat philosophy-icon"></i>
          <div>
            <strong>Benefits of Sound Type Safety:</strong> Catches type mismatches and null errors early during development before shipping, making code significantly more reliable, self-documenting, and maintainable.
          </div>
        </div>
      `
    },
    {
      pageId: "p0_concurrency_isolates",
      header: "0.6 CONCURRENCY & ISOLATES",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-diagram-project"></i> 10 & 11. Concurrency & Isolate Architecture</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q1: What is Concurrency?</h4>
          <p>Executing multiple tasks independently so that one long-running task (e.g., file processing or network downloading) does not block another task or freeze the UI thread.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q2: What is an Isolate?</h4>
          <p>An independent worker in Dart with its own private memory heap, event loop, and execution thread. Dart does not share memory between isolates.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q3: Why does Dart use Isolates instead of Threads?</h4>
          <p>Traditional multi-threading suffers from shared memory race conditions, deadlocks, and complex mutex locks. Isolates eliminate these bugs entirely because memory is isolated, communicating solely via message passing.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q4: How do Isolates communicate?</h4>
          <p>Dart uses <code>SendPort</code> to transmit messages and <code>ReceivePort</code> to listen for incoming messages.</p>
        </div>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>isolate_example.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">import 'dart:isolate';

void worker(SendPort sendPort) { 
  sendPort.send("Hello from Worker Isolate!"); 
}

void main() async { 
  ReceivePort receivePort = ReceivePort();
  await Isolate.spawn(worker, receivePort.sendPort);
  receivePort.listen((message) { 
    print(message); 
  }); 
}</code></pre>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q5: When should you use Isolates?</h4>
          <p>Use Isolates for CPU-heavy tasks like image/video encoding, JSON parsing over 5MB, or encryption. Simple API network requests are efficiently handled by Dart's async/await event loop without extra Isolates.</p>
        </div>
      `
    },
    {
      pageId: "p0_garbage_collection",
      header: "0.7 GARBAGE COLLECTION & MEMORY",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-trash-can"></i> 12. Garbage Collection in Dart</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q1: What is "Garbage" in Dart?</h4>
          <p>Objects or data stored in heap memory that are no longer referenced or reachable by the program execution stack.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q2: What is Garbage Collection (GC)?</h4>
          <p>An automatic memory management process in Dart that scans memory, identifies unreachable garbage objects, and deallocates them to free RAM.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q3: Why is Garbage Collection Important?</h4>
          <p>Prevents RAM memory leaks, eliminates manual free/delete bugs, and maintains smooth 60/120 FPS UI rendering by collecting short-lived UI widget instances rapidly.</p>
        </div>

        <h3 class="section-h3" style="margin-top: 0.8rem;">Q4: How Dart Memory Management Works</h3>
        <div class="callout-box tip" style="font-size: 0.8rem;">
          <i class="fa-solid fa-gears callout-icon"></i>
          <div>
            <strong>Heap Memory & Lifecycle Flow:</strong><br>
            <code>Object Created</code> &rarr; <code>Stored in Heap</code> &rarr; <code>Object Becomes Unreachable</code> &rarr; <code>Garbage Collector Detects It</code> &rarr; <code>Memory Released</code>
          </div>
        </div>
      `
    },
    {
      pageId: "p0_lang_vs_framework",
      header: "0.8 DART VS FLUTTER",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-layer-group"></i> 13. Programming Languages vs. Frameworks</h2>
        <p class="topic-paragraph">
          Understanding the distinction between the underlying foundation language and the UI framework is critical for software architects:
        </p>

        <div class="framework-grid">
          <div class="framework-card">
            <div class="framework-header">
              <i class="fa-solid fa-code framework-icon"></i>
              <h4>Dart (Language)</h4>
            </div>
            <p>Provides core syntax, sound null safety, data types, object-oriented logic, isolate concurrency, and compiler targets (AOT/JIT).</p>
          </div>
          <div class="framework-card">
            <div class="framework-header">
              <i class="fa-solid fa-cubes framework-icon"></i>
              <h4>Flutter (Framework)</h4>
            </div>
            <p>UI toolkit built on Dart providing widget trees, rendering engine (Impeller/Skia), animation controllers, and platform integration tools.</p>
          </div>
        </div>

        <div class="callout-box tip" style="margin: 0.8rem 0; border-left-color: var(--accent-cyan);">
          <i class="fa-solid fa-quote-left callout-icon"></i>
          <div>
            <strong>The Dart & Flutter Relationship:</strong><br>
            <em>"Dart is the language you write code in, while Flutter is the framework providing widgets, rendering, and tooling. You cannot use Flutter without Dart, but you can absolutely use Dart without Flutter."</em>
          </div>
        </div>

        <h2 class="section-h2" style="margin-top: 1rem;"><i class="fa-solid fa-feather"></i> 14. The Flutter Framework Deep Dive</h2>
        <p class="topic-paragraph">Flutter is Google’s open-source UI SDK used to build natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase.</p>

        <h3 class="section-h3">Key Architectural Pillars</h3>
        <ul style="margin-left: 1.2rem; font-size: 0.82rem;">
          <li><strong>Widget-Based Architecture:</strong> In Flutter, everything is a widget. The UI is a reactive nested configuration tree.</li>
          <li><strong>Pixel-Perfect Rendering:</strong> Directly draws every pixel using high-performance engines (Impeller & Skia) instead of platform OEM controls.</li>
          <li><strong>No Native Bridge:</strong> Compiles directly to ARM/x64 machine code, eliminating JavaScript runtime bridge bottlenecks.</li>
        </ul>
      `
    },
    {
      pageId: "p0_technical_comparisons",
      header: "0.9 DEEP TECHNICAL COMPARISONS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-scale-balanced"></i> 15. Deep Technical Comparisons</h2>

        <h3 class="section-h3">A. Core Web & Scripting: JS vs Python vs Dart</h3>
        <table class="content-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>JavaScript</th>
              <th>Python</th>
              <th>Dart</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Created By</strong></td>
              <td>Brendan Eich (Netscape)</td>
              <td>Guido van Rossum</td>
              <td>Google (Bak & Lund)</td>
            </tr>
            <tr>
              <td><strong>Typing</strong></td>
              <td>Dynamic & Weak</td>
              <td>Dynamic & Strong</td>
              <td>Strong & Sound Null Safe</td>
            </tr>
            <tr>
              <td><strong>Execution</strong></td>
              <td>JIT Engine (V8)</td>
              <td>Interpreted Bytecode</td>
              <td>Dual Engine: JIT + AOT</td>
            </tr>
          </tbody>
        </table>

        <h3 class="section-h3" style="margin-top: 0.8rem;">B. Cross-Platform Giants: React Native vs Flutter</h3>
        <table class="content-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>React Native</th>
              <th>Flutter (Dart)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Language</strong></td>
              <td>JavaScript / TypeScript</td>
              <td>Dart</td>
            </tr>
            <tr>
              <td><strong>UI Execution</strong></td>
              <td>Maps JS to native OEM widgets via bridge/Fabric.</td>
              <td>Directly draws canvas pixels using Impeller/Skia.</td>
            </tr>
          </tbody>
        </table>

        <h3 class="section-h3" style="margin-top: 0.8rem;">C. App Strategy: Native vs Cross-Platform</h3>
        <table class="content-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Kotlin</th>
              <th>Swift</th>
              <th>Dart</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Primary Target</strong></td>
              <td>Android Native</td>
              <td>iOS & macOS Native</td>
              <td>Cross-Platform (Flutter)</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      pageId: "p0_architectural_kmp_rn",
      header: "0.10 ARCHITECTURAL ANALYSIS: KMP vs FLUTTER vs RN",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-sitemap"></i> 16. Architectural Analysis: KMP vs Flutter vs RN</h2>

        <h3 class="section-h3">16.1 Core Philosophy & UI Approach</h3>
        <ul style="margin-left: 1.2rem; font-size: 0.8rem;">
          <li><strong>KMP:</strong> Shares business logic (networking, DB) while keeping fully native UI (SwiftUI / Jetpack Compose).</li>
          <li><strong>Flutter:</strong> Bypasses native UI controls using Impeller/Skia to render identical pixels across platforms.</li>
          <li><strong>React Native:</strong> Uses JS wrappers to orchestrate native platform components (UITextField / EditText).</li>
        </ul>

        <h3 class="section-h3" style="margin-top: 0.6rem;">16.2 Deep Technical Architecture</h3>
        <table class="content-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>KMP</th>
              <th>Flutter</th>
              <th>React Native</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Compilation</strong></td>
              <td>Native Binaries</td>
              <td>AOT Machine Code</td>
              <td>JIT / Hermes Bytecode</td>
            </tr>
            <tr>
              <td><strong>Performance</strong></td>
              <td>Native Peak</td>
              <td>Excellent (60/120fps)</td>
              <td>Variable (Bridge lag)</td>
            </tr>
          </tbody>
        </table>

        <h3 class="section-h3" style="margin-top: 0.6rem;">16.3 The Communication Layer</h3>
        <p class="topic-paragraph" style="font-size: 0.8rem;">
          <strong>React Native:</strong> Bridge with JSON serialization (transitioning to Fabric/TurboModules).<br>
          <strong>Flutter:</strong> Direct engine access via shared memory without JSON bridges.<br>
          <strong>KMP:</strong> Zero-cost abstraction with direct C/Obj-C interop.
        </p>

        <h3 class="section-h3" style="margin-top: 0.6rem;">16.4 Strategic Choice Matrix</h3>
        <div class="callout-box tip" style="font-size: 0.78rem;">
          <i class="fa-solid fa-check-double callout-icon"></i>
          <div>
            <strong>Choose KMP:</strong> Unifying complex business logic in existing native apps.<br>
            <strong>Choose Flutter:</strong> Rapid time-to-market and high visual UI parity across screens.<br>
            <strong>Choose React Native:</strong> Leveraging web React engineering teams.
          </div>
        </div>
      `
    },
    {
      pageId: "p0_enterprise_career",
      header: "0.11 ENTERPRISE & CAREER OUTLOOK",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-chart-line"></i> 18. Enterprise Adoption & Career Outlook</h2>

        <h3 class="section-h3">Global Enterprise Case Studies</h3>
        <div class="enterprise-grid">
          <div class="enterprise-card">
            <h4>Google Pay</h4>
            <p>Replaced 1.7 million lines of iOS/Android code with single Flutter codebase. Cut codebase footprint by 35%.</p>
          </div>
          <div class="enterprise-card">
            <h4>Nubank</h4>
            <p>Launched a digital life insurance product to millions of users in 3 months using Flutter's rapid cycle.</p>
          </div>
          <div class="enterprise-card">
            <h4>SoFi</h4>
            <p>Deployed enterprise app with over 2.5 million lines of code on weekly production schedules.</p>
          </div>
        </div>

        <h3 class="section-h3" style="margin-top: 0.8rem;">Career Advantages</h3>
        <div class="philosophy-list">
          <div class="philosophy-item">
            <i class="fa-solid fa-coins philosophy-icon"></i>
            <div><strong>High Efficiency = Market Value:</strong> Shipping to iOS, Android, and Web from one codebase drastically reduces team overhead.</div>
          </div>
          <div class="philosophy-item">
            <i class="fa-solid fa-money-bill-trend-up philosophy-icon"></i>
            <div><strong>Premium Salaries:</strong> Senior Flutter/Dart engineers command $135,000 to $180,000+/year in global markets.</div>
          </div>
          <div class="philosophy-item">
            <i class="fa-solid fa-compass philosophy-icon"></i>
            <div><strong>Future-Proofing:</strong> Single-codebase multi-screen development provides a resilient competitive edge.</div>
          </div>
        </div>
      `
    },
    {
      pageId: "p0_limitations",
      header: "0.12 LIMITATIONS OF DART & FLUTTER",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-triangle-exclamation"></i> 19. Limitations of Dart & Flutter</h2>
        <p class="topic-paragraph">
          Dart requires Platform Channels or FFI plugins to communicate with low-level native Java/Kotlin or Swift APIs.
        </p>

        <h3 class="section-h3">Native API & Hardware Access</h3>
        <table class="content-table">
          <thead>
            <tr>
              <th>Feature Area</th>
              <th>Common Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Media</strong></td>
              <td>Camera, Microphone, Hardware Video recording plugins.</td>
            </tr>
            <tr>
              <td><strong>Connectivity</strong></td>
              <td>Bluetooth (<code>flutter_blue_plus</code>), NFC, GPS Location.</td>
            </tr>
            <tr>
              <td><strong>System Services</strong></td>
              <td>Biometrics, Native Push Notifications, Background Alarms.</td>
            </tr>
          </tbody>
        </table>

        <h3 class="section-h3" style="margin-top: 0.8rem;">Execution Differences & Technical Overhead</h3>
        <ul style="margin-left: 1.2rem; font-size: 0.8rem;">
          <li><strong>OS Execution Rules:</strong> Android offers background service flexibility; iOS enforces strict background limits.</li>
          <li><strong>Dependency Risk:</strong> Abandoned third-party plugins can stall updates.</li>
          <li><strong>App Size:</strong> Bundled Flutter rendering engine increases initial app binary size compared to minimal native apps.</li>
        </ul>
      `
    },
    {
      pageId: "p1_history",
      header: "0.13 SHORT HISTORY OF DART",
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
      header: "0.14 DART TODAY & FRAMEWORKS",
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
      header: "0.15 DART ARCHITECTURE & COMPILATION",
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
      header: "0.16 DART PHILOSOPHY & ADVANTAGES",
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
        <p class="topic-paragraph">
          Dart supports single-line, multi-line, documentation comments (which format into markdown for <code>dartdoc</code>), as well as IDE-integrated <strong>TODO</strong> and <strong>FIXME</strong> annotations for tracking upcoming tasks and urgent bug fixes:
        </p>

        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.88rem; line-height: 1.6;">
          <li><code>// Comment</code> &mdash; Single-line comment.</li>
          <li><code>/* Comment */</code> &mdash; Multi-line block comment (can be nested in Dart).</li>
          <li><code>/// Comment</code> &mdash; Documentation comment (supports Markdown & <code>[Symbol]</code> references).</li>
          <li><code>// TODO: ...</code> &mdash; Indicates a planned feature, pending refactor, or future task. Highlighted in IDEs.</li>
          <li><code>// FIXME: ...</code> &mdash; Indicates a known bug, temporary hack, or urgent issue requiring immediate fix.</li>
        </ul>
        
        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>comments.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">// Single-line comment: Program entrypoint
void main() {
  /*
     Multi-line comment:
     Dart programs require a main() top-level function.
  */
  
  /// Documentation comment for [main]
  print('Welcome to Dart Cookbook 2026!');

  // TODO: Add user authentication and profile initialization
  
  // FIXME: Handle potential null values when network drops
}</code></pre>
        </div>

        <div class="callout-box tip">
          <i class="fa-solid fa-lightbulb callout-icon"></i>
          <div><strong>Pro-Tip:</strong> Modern IDEs (VS Code & Android Studio) index <code>// TODO:</code> and <code>// FIXME:</code> tags into a dedicated task list panel. Use <code>///</code> triple slashes for docstrings to generate HTML docs via <code>dart doc</code>.</div>
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
