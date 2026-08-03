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
            <h4 style="font-size: 1.05rem; color: var(--primary-accent); margin-bottom: 0.5rem;"><i class="fa-solid fa-bolt"></i> 6.1 JIT Compilation (Just-In-Time)</h4>
            <p><strong>Definition:</strong> Dynamic compilation mode used during application development.</p>
            <p style="margin-top: 0.3rem;"><strong>How it works:</strong> Source code is compiled dynamically on-the-fly while the application runs inside the Dart VM.</p>
            <p style="margin-top: 0.3rem;"><strong>Key Benefit:</strong> Powers Flutter's sub-second <strong>Stateful Hot Reload</strong>—update code &amp; UI instantly without losing app state.</p>
          </div>

          <div class="compilation-card">
            <span class="comp-badge aot">Production Mode</span>
            <h4 style="font-size: 1.05rem; color: var(--primary-accent); margin-bottom: 0.5rem;"><i class="fa-solid fa-shield-halved"></i> 6.2 AOT Compilation (Ahead-Of-Time)</h4>
            <p><strong>Definition:</strong> Native static compilation mode used when building release artifacts.</p>
            <p style="margin-top: 0.3rem;"><strong>How it works:</strong> The entire codebase is compiled upfront directly into ARM or x64 native machine code before release.</p>
            <p style="margin-top: 0.3rem;"><strong>Key Benefit:</strong> Eliminates VM compiler overhead on user devices, delivering instant app launch and smooth 60/120 FPS UI.</p>
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
        <h2 class="section-h2"><i class="fa-solid fa-diagram-project"></i> 10. Concurrency in Dart</h2>
        <p class="topic-paragraph">
          Concurrency is the ability of an application to execute multiple tasks independently so that intensive background work does not freeze the main user interface.
        </p>

        <h2 class="section-h2" style="margin-top: 1rem;"><i class="fa-solid fa-cubes"></i> 11. Isolate Architecture</h2>

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
        <h2 class="section-h2"><i class="fa-solid fa-chart-line"></i> 17. Enterprise Adoption & Career Outlook</h2>

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
        <h2 class="section-h2"><i class="fa-solid fa-triangle-exclamation"></i> 18. Limitations of Dart & Flutter</h2>
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
        <h2 class="section-h2"><i class="fa-solid fa-clock-rotate-left"></i> 19. Short History of Dart Programming Language</h2>
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
        <h2 class="section-h2"><i class="fa-solid fa-layer-group"></i> 20. Modern Dart Ecosystem & Frameworks</h2>
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
        <h2 class="section-h2"><i class="fa-solid fa-gears"></i> 21. Dart Execution Models (JIT, AOT & Web)</h2>
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
        <h2 class="section-h2"><i class="fa-solid fa-shield-halved"></i> 22. Key Language Philosophies</h2>
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
        <h2 class="section-h2"><i class="fa-solid fa-code"></i> 23. Introduction & Comments in Dart</h2>
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
      header: "1.2.1 VARIABLES DEFINITION, NAMING & PATTERNS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-cube"></i> 24. Variables: Definition, Naming & Creation Patterns</h2>
        <p class="topic-paragraph">
          In Dart, a <strong>variable</strong> is a named reference to a memory location used to store values during program execution. Since everything in Dart is an object, a variable stores a reference pointing to an object in memory.
        </p>
        <p class="topic-paragraph">Standard Declaration Formula: <code>DataType variableName = initialValue;</code></p>

        <h3 class="section-h3">Naming Rules & Allowed Special Characters</h3>
        <p class="topic-paragraph">Dart enforces strict rules for variable identifiers to guarantee compiler syntax validity and code readability:</p>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.88rem; line-height: 1.6;">
          <li><strong>lowerCamelCase:</strong> Variable names should start with a lowercase letter and capitalize subsequent words (e.g. <code>userName</code>, <code>totalInvoiceAmount</code>).</li>
          <li><strong>Allowed Special Characters:</strong> Identifiers can contain letters (<code>a-z</code>, <code>A-Z</code>), digits (<code>0-9</code>), underscore (<code>_</code>), and dollar sign (<code>$</code>).</li>
          <li><strong>Rule 1: No Leading Digits:</strong> A variable name <em>cannot</em> start with a number (e.g., <code>123count</code> is illegal).</li>
          <li><strong>Rule 2: No Spaces or Hyphens:</strong> Spaces or hyphens (<code>-</code>) are invalid in variable names.</li>
          <li><strong>Rule 3: Reserved Keywords:</strong> Cannot use Dart keywords (e.g., <code>class</code>, <code>var</code>, <code>for</code>, <code>void</code>) as identifiers.</li>
          <li><strong>Rule 4: Case Sensitivity:</strong> <code>userAge</code>, <code>UserAge</code>, and <code>USERAGE</code> are three distinct variables.</li>
        </ul>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
          <div>
            <h4 style="color: var(--accent-error); font-size: 0.85rem; margin-bottom: 6px;"><i class="fa-solid fa-xmark"></i> Invalid Variable Names</h4>
            <table class="content-table" style="font-size: 0.78rem;">
              <thead><tr><th>Name</th><th>Violation Reason</th></tr></thead>
              <tbody>
                <tr><td><code>123count</code></td><td>Starts with a digit</td></tr>
                <tr><td><code>user-name</code></td><td>Contains hyphen (-)</td></tr>
                <tr><td><code>user name</code></td><td>Contains spaces</td></tr>
                <tr><td><code>class</code></td><td>Reserved keyword</td></tr>
                <tr><td><code>final</code></td><td>Reserved keyword</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 style="color: var(--accent-success); font-size: 0.85rem; margin-bottom: 6px;"><i class="fa-solid fa-check"></i> Valid Variable Names</h4>
            <table class="content-table" style="font-size: 0.78rem;">
              <thead><tr><th>Name</th><th>Usage Description</th></tr></thead>
              <tbody>
                <tr><td><code>userName</code></td><td>Standard lowerCamelCase</td></tr>
                <tr><td><code>_apiKey</code></td><td>Private variable (starts with <code>_</code>)</td></tr>
                <tr><td><code>$priceInUSD</code></td><td>Allowed dollar sign prefix</td></tr>
                <tr><td><code>totalScore2026</code></td><td>Contains trailing numbers</td></tr>
                <tr><td><code>max_length</code></td><td>Valid underscore identifier</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="section-h3">Three Patterns to Create Variables in Dart</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.88rem; line-height: 1.6;">
          <li><strong>Pattern 1: Explicit Type Annotation &mdash;</strong> Specify the exact type explicitly: <code>String name = 'Alex';</code>. Recommended for public APIs and field declarations.</li>
          <li><strong>Pattern 2: Type Inference via <code>var</code> &mdash;</strong> Allow Dart to automatically infer the type at compile-time based on the initial value: <code>var count = 10;</code> (Infers <code>int</code> and locks it).</li>
          <li><strong>Pattern 3: Dynamic Typing via <code>dynamic</code> &mdash;</strong> Opt out of static type checking: <code>dynamic data = 100; data = 'One Hundred';</code>. Allows type mutation at runtime.</li>
        </ul>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>creation_patterns.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  // Pattern 1: Explicit Type Annotation
  String appTitle = 'Dart Cookbook 2026';
  int totalChapters = 7;
  double version = 3.4;

  // Pattern 2: var (Compile-time type inference)
  var authorName = 'Google DeepMind Team'; // Inferred as String
  // authorName = 42; // ERROR: Cannot assign int to String variable!

  // Pattern 3: dynamic (Runtime flexible typing)
  dynamic payload = 200; // Starts as int
  print('Payload as int: \$payload (\${payload.runtimeType})');
  payload = 'OK - Status 200'; // Reassigned to String
  print('Payload as String: \$payload (\${payload.runtimeType})');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_vars_types",
      header: "1.2.2 DATA TYPES, SINGLE VS MULTIPLE VALUES & DIFFERENCE",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-layer-group"></i> 25. Data Types: Definitions & Classifications</h2>
        <p class="topic-paragraph">
          A <strong>Data Type</strong> is an attribute of data that tells the compiler or interpreter how the programmer intends to use the data, how much memory space to allocate, and what operations can be legally performed on it.
        </p>

        <h3 class="section-h3">Single Value (Scalar) vs Multiple Value (Collection) Types</h3>
        <p class="topic-paragraph">Dart categorizes data types based on structural cardinality:</p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
          <div class="quick-guide-box">
            <h4><i class="fa-solid fa-atom"></i> Single Value (Scalar) Types</h4>
            <p style="font-size: 0.8rem; margin-bottom: 6px;">Holds a single, atomic unit of data value:</p>
            <ul style="font-size: 0.78rem; margin-left: 1rem;">
              <li><code>int</code> &mdash; 64-bit integer values (e.g. <code>42</code>, <code>-10</code>)</li>
              <li><code>double</code> &mdash; 64-bit floating-point numbers (e.g. <code>3.14159</code>)</li>
              <li><code>String</code> &mdash; Sequence of UTF-16 characters (e.g. <code>'Hello'</code>)</li>
              <li><code>bool</code> &mdash; Boolean values (<code>true</code> or <code>false</code>)</li>
              <li><code>Symbol</code> &mdash; Compile-time identifier symbol (e.g. <code>#mySymbol</code>)</li>
            </ul>
          </div>
          <div class="quick-guide-box">
            <h4><i class="fa-solid fa-boxes-stacked"></i> Multiple Value (Collection) Types</h4>
            <p style="font-size: 0.8rem; margin-bottom: 6px;">Holds groupings or structures of zero or more values:</p>
            <ul style="font-size: 0.78rem; margin-left: 1rem;">
              <li><code>List&lt;T&gt;</code> &mdash; Ordered sequence of items (e.g. <code>[1, 2, 3]</code>)</li>
              <li><code>Set&lt;T&gt;</code> &mdash; Unordered collection of unique items (e.g. <code>{1, 2, 3}</code>)</li>
              <li><code>Map&lt;K, V&gt;</code> &mdash; Unordered key-value pairs (e.g. <code>{'a': 1}</code>)</li>
              <li><code>Record</code> &mdash; An anonymous, aggregate tuple (e.g. <code>(10, 'Alex')</code>)</li>
            </ul>
          </div>
        </div>

        <h3 class="section-h3">Difference between Variable and Data Type</h3>
        <table class="content-table" style="font-size: 0.8rem;">
          <thead>
            <tr>
              <th>Comparison Aspect</th>
              <th>Variable</th>
              <th>Data Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Core Definition</strong></td>
              <td>A named container / slot in memory storing data.</td>
              <td>A classification rule defining the format & operations of data.</td>
            </tr>
            <tr>
              <td><strong>Primary Role</strong></td>
              <td>Holds and tracks dynamic application state.</td>
              <td>Restricts and validates what kind of values can fit into memory.</td>
            </tr>
            <tr>
              <td><strong>Mutability</strong></td>
              <td>The stored value can change during program execution.</td>
              <td>The data type rule itself is fixed and defined by the language.</td>
            </tr>
            <tr>
              <td><strong>Analogy</strong></td>
              <td>The storage box with a written label (e.g. <code>userAgeBox</code>).</td>
              <td>The shape/spec of object allowed in box (e.g. <code>Integer Only</code>).</td>
            </tr>
            <tr>
              <td><strong>Dart Example</strong></td>
              <td><code>score</code>, <code>userName</code>, <code>itemsList</code></td>
              <td><code>int</code>, <code>String</code>, <code>List&lt;double&gt;</code></td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      pageId: "p1_vars_flex",
      header: "1.2.3 VAR VS DYNAMIC VS OBJECT",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-diagram-project"></i> 26. Type Flexibility: var vs dynamic vs Object</h2>
        <p class="topic-paragraph">
          Understanding the differences between <code>var</code>, <code>dynamic</code>, and <code>Object</code> is essential for writing robust, type-safe Dart code.
        </p>

        <h3 class="section-h3">Difference between <code>var</code> and <code>dynamic</code></h3>
        <table class="content-table" style="font-size: 0.8rem; margin-bottom: 12px;">
          <thead>
            <tr>
              <th>Feature</th>
              <th><code>var</code> Keyword</th>
              <th><code>dynamic</code> Keyword</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Type Checking Time</strong></td>
              <td>Compile-time static type inference.</td>
              <td>Runtime deferred type resolution (disables static checks).</td>
            </tr>
            <tr>
              <td><strong>Type Re-assignability</strong></td>
              <td>Type is locked upon initialization; cannot change.</td>
              <td>Variable can be reassigned to any type at any time.</td>
            </tr>
            <tr>
              <td><strong>IDE Autocomplete</strong></td>
              <td>Full autocomplete & static analysis tooling.</td>
              <td>No autocomplete support (calls bypass static verification).</td>
            </tr>
            <tr>
              <td><strong>Performance</strong></td>
              <td>Zero runtime cost (compiles directly to native code).</td>
              <td>Incurs minor runtime method lookup overhead.</td>
            </tr>
          </tbody>
        </table>

        <h3 class="section-h3">The <code>Object</code> & <code>Object?</code> Root Data Type</h3>
        <p class="topic-paragraph">
          In Dart, <code>Object</code> is the non-nullable root superclass of all non-null Dart classes (integers, strings, lists, functions, etc.). <code>Object?</code> is the root of the entire type system including null.
        </p>

        <h3 class="section-h3">Difference between <code>Object</code> and <code>dynamic</code></h3>
        <table class="content-table" style="font-size: 0.8rem;">
          <thead>
            <tr>
              <th>Aspect</th>
              <th><code>Object</code> Data Type</th>
              <th><code>dynamic</code> Data Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Static Safety</strong></td>
              <td>Strictly type-safe. Compiler checks method existence.</td>
              <td>Unsafe. Bypasses compiler static checks entirely.</td>
            </tr>
            <tr>
              <td><strong>Calling Custom Methods</strong></td>
              <td>Can only call <code>Object</code> methods (e.g. <code>toString()</code>) unless cast.</td>
              <td>Allows calling ANY arbitrary method name.</td>
            </tr>
            <tr>
              <td><strong>Failure Mode</strong></td>
              <td>Fails safely at <strong>Compile Time</strong> if method missing.</td>
              <td>Fails catastrophically at <strong>Runtime</strong> (<code>NoSuchMethodError</code>).</td>
            </tr>
          </tbody>
        </table>

        <div class="code-snippet-box" style="margin-top: 12px;">
          <div class="code-snippet-header">
            <span>object_vs_dynamic.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  Object safeObj = 'Hello Dart';
  dynamic dynObj = 'Hello Dart';

  print('Object String Length (after cast): \${(safeObj as String).length}');
  print('Dynamic String Length: \${dynObj.length}'); // Resolved at runtime

  // safeObj.toLowerCase(); // COMPILE-TIME ERROR: Method not defined on Object!
  
  try {
    dynObj.nonExistentMethod(); // Compiles! Fails at runtime.
  } catch (e) {
    print('Caught Dynamic Runtime Error: \$e');
  }
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_vars_scopes",
      header: "1.2.4 VARIABLE SCOPES: LOCAL, GLOBAL & STATIC",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-eye"></i> 27. Variable Scopes: Local, Global & Static</h2>
        <p class="topic-paragraph">
          The <strong>scope</strong> of a variable defines where in the codebase the variable can be accessed for reading or writing.
        </p>

        <h3 class="section-h3">1. Local Variables</h3>
        <p class="topic-paragraph">
          Declared inside a function, loop, or block enclosed by curly braces <code>{}</code>. Created when execution enters the block, destroyed when the block finishes. Accessible only within that specific block.
        </p>

        <h3 class="section-h3">2. Top-Level (Global) Variables</h3>
        <p class="topic-paragraph">
          Declared outside any function or class at the root library level. Accessible from any function within the same library (or imported files). Persists throughout the entire execution duration of the program.
        </p>

        <h3 class="section-h3">3. Static Variables</h3>
        <p class="topic-paragraph">
          Declared inside a class using the <code>static</code> modifier. Belongs to the class itself rather than individual instances. Shared across all instances of the class and lazily initialized on first access.
        </p>

        <table class="content-table" style="font-size: 0.8rem; margin-top: 8px; margin-bottom: 12px;">
          <thead>
            <tr>
              <th>Scope Type</th>
              <th>Declaration Location</th>
              <th>Accessibility Scope</th>
              <th>Lifetime & Memory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Local</strong></td>
              <td>Inside function / block <code>{}</code></td>
              <td>Only within enclosing block</td>
              <td>Short-lived; stack allocated per invocation</td>
            </tr>
            <tr>
              <td><strong>Global</strong></td>
              <td>Top-level outside classes/funcs</td>
              <td>Library-wide & imported files</td>
              <td>Entire application runtime duration</td>
            </tr>
            <tr>
              <td><strong>Static</strong></td>
              <td>Inside class with <code>static</code> keyword</td>
              <td>Class-level (via <code>ClassName.var</code>)</td>
              <td>Lazily allocated; lives for app duration</td>
            </tr>
          </tbody>
        </table>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>variable_scopes.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">// Top-level (Global) variable
String globalAppName = 'Dart Cookbook App';

class AppConfig {
  // Static variable (shared across all instances)
  static int maxConnections = 5;
}

void calculateScore() {
  // Local variable (accessible only in calculateScore)
  int localBonus = 50;
  print('Score Bonus: \$localBonus | Global App: \$globalAppName');
}

void main() {
  calculateScore();
  print('Static Max Connections: \${AppConfig.maxConnections}');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_vars_qa1",
      header: "1.2.5 CONCEPT CLEARING Q&A ARENA (Q1 - Q10)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> 28. Variables Master Q&A Arena: Part 1 (Q1 &ndash; Q10)</h2>
        <p class="topic-paragraph">Test and clear your fundamental concepts on variable definitions, memory layout, and naming rules:</p>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q1. What is a variable in Dart?</h4>
          <p><strong>Answer:</strong> A variable is a named reference pointing to a memory location that stores an object reference. In Dart, everything is an object, so variables store object references rather than raw primitive bytes.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q2. What is the standard formula for declaring a variable with an explicit type?</h4>
          <p><strong>Answer:</strong> <code>DataType variableName = initialValue;</code> (e.g. <code>int userAge = 25;</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q3. What naming convention is standard for variables in Dart?</h4>
          <p><strong>Answer:</strong> <code>lowerCamelCase</code> (e.g., <code>userName</code>, <code>itemPriceUSD</code>). Private library variables start with an underscore (<code>_privateVariable</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q4. Which special characters are allowed in Dart variable names?</h4>
          <p><strong>Answer:</strong> Only the underscore (<code>_</code>) and dollar sign (<code>$</code>) are allowed alongside letters and numbers.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q5. Why cannot a variable name start with a number (0-9)?</h4>
          <p><strong>Answer:</strong> To prevent lexical ambiguity in compilers. If identifiers could start with numbers, <code>123</code> could not be distinguished from numeric literal values during token parsing.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q6. What happens if you use a reserved keyword like "class" as a variable name?</h4>
          <p><strong>Answer:</strong> The Dart analyzer emits a compile-time syntax error because reserved keywords are used by the grammar parser to construct class, loop, and control flow nodes.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q7. Are Dart variable identifiers case-sensitive?</h4>
          <p><strong>Answer:</strong> Yes. <code>score</code>, <code>Score</code>, and <code>SCORE</code> are three completely distinct variables stored in separate memory locations.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q8. List 5 invalid variable names in Dart and state why they fail.</h4>
          <p><strong>Answer:</strong> (1) <code>10X</code> (starts with digit), (2) <code>first-name</code> (illegal hyphen), (3) <code>first name</code> (illegal space), (4) <code>void</code> (reserved keyword), (5) <code>user@name</code> (illegal <code>@</code> character).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q9. List 5 valid variable names in Dart and explain their context.</h4>
          <p><strong>Answer:</strong> (1) <code>totalAmount</code> (lowerCamel), (2) <code>_internalId</code> (private library variable), (3) <code>$amountUSD</code> (starts with <code>$</code>), (4) <code>val2026</code> (contains trailing digits), (5) <code>max_size</code> (valid underscore identifier).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q10. What does a leading underscore <code>_</code> signify on a variable, function, or class name in Dart?</h4>
          <p><strong>Answer:</strong> In Dart, a leading underscore <code>_</code> marks an identifier as <strong>library-private</strong>, restricting its access strictly to the defining <code>.dart</code> file.</p>
        </div>
      `
    },
    {
      pageId: "p1_vars_qa2",
      header: "1.2.5 CONCEPT CLEARING Q&A ARENA (Q11 - Q20)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Variables Master Q&A Arena: Part 2 (Q11 &ndash; Q20)</h2>
        <p class="topic-paragraph">Deep-dive into variable creation patterns and type inference rules:</p>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q11. What are the 3 main patterns used to create variables in Dart?</h4>
          <p><strong>Answer:</strong> (1) Explicit Type Annotations (<code>int x = 5;</code>), (2) Static Inference via <code>var</code> (<code>var x = 5;</code>), (3) Dynamic Typing via <code>dynamic</code> (<code>dynamic x = 5;</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q12. How does Pattern 1 (Explicit Type Annotation) help maintain code quality?</h4>
          <p><strong>Answer:</strong> It provides unambiguous self-documentation, enforces strict compile-time type verification, and improves readability in public class fields and API parameters.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q13. How does Pattern 2 (using <code>var</code>) infer variable types?</h4>
          <p><strong>Answer:</strong> Dart's static analyzer looks at the right-hand initial value during compilation. For <code>var x = 'hello';</code>, it infers <code>String</code> and locks <code>x</code> to <code>String</code> permanently.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q14. Can you assign an integer <code>int</code> value to a variable declared with <code>var</code> and initialized with a <code>String</code>?</h4>
          <p><strong>Answer:</strong> No. Once initialized, the variable's type is locked to <code>String</code> by static inference. Assigning an <code>int</code> value produces a compile-time error.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q15. How does Pattern 3 (using <code>dynamic</code>) differ from <code>var</code>?</h4>
          <p><strong>Answer:</strong> <code>dynamic</code> turns off static type checking. A <code>dynamic</code> variable can store an <code>int</code>, be reassigned to a <code>String</code>, and then to a <code>List</code> at runtime.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q16. Why should <code>dynamic</code> be used sparingly in Dart codebases?</h4>
          <p><strong>Answer:</strong> It bypasses compiler safety checks, disables IDE autocompletion, hides bugs until runtime (causing <code>NoSuchMethodError</code> crashes), and reduces performance.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q17. What data type and initial value are inferred if you declare <code>var x;</code> without an initial value?</h4>
          <p><strong>Answer:</strong> If declared without an initializer, <code>var x;</code> defaults to the <code>dynamic</code> data type and an initial value of <code>null</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q18. What is the difference between variable declaration and variable initialization?</h4>
          <p><strong>Answer:</strong> Declaration introduces the variable name and type to the compiler (<code>int age;</code>). Initialization assigns its first value (<code>age = 25;</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q19. What happens if a non-nullable variable is declared without an initializer?</h4>
          <p><strong>Answer:</strong> If it's a non-nullable local variable, you must assign a value before reading it; otherwise, the compiler emits a <em>Non-nullable local variable must be assigned before use</em> error.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q20. Can you reassign a new value to a <code>var</code> variable if the value is of the same type?</h4>
          <p><strong>Answer:</strong> Yes. <code>var count = 1; count = 2; count = 3;</code> is completely valid because all assigned values are integers.</p>
        </div>
      `
    },
    {
      pageId: "p1_vars_qa3",
      header: "1.2.5 CONCEPT CLEARING Q&A ARENA (Q21 - Q30)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Variables Master Q&A Arena: Part 3 (Q21 &ndash; Q30)</h2>
        <p class="topic-paragraph">Clarify Data Types, Single vs Multiple values, and comparison tables:</p>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q21. What is a data type in Dart?</h4>
          <p><strong>Answer:</strong> A classification attribute that specifies what type of data a variable holds, how much memory it occupies, and what legal methods and operators can act on it.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q22. What is the difference between single-value (scalar) and multiple-value (collection) data types?</h4>
          <p><strong>Answer:</strong> Single-value types store a single atomic value (e.g., <code>int</code>, <code>String</code>, <code>bool</code>). Multiple-value types store groups/collections of values (e.g., <code>List</code>, <code>Set</code>, <code>Map</code>, <code>Record</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q23. List all built-in single-value (scalar) types in Dart.</h4>
          <p><strong>Answer:</strong> <code>int</code>, <code>double</code>, <code>String</code>, <code>bool</code>, <code>Symbol</code>, and <code>Null</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q24. List the core multiple-value (collection) types in Dart.</h4>
          <p><strong>Answer:</strong> <code>List&lt;T&gt;</code> (ordered sequence), <code>Set&lt;T&gt;</code> (unique unordered collection), <code>Map&lt;K, V&gt;</code> (key-value pairs), and <code>Record</code> (typed tuples).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q25. What is the fundamental difference between a Variable and a Data Type?</h4>
          <p><strong>Answer:</strong> A variable is the memory container that holds data. A data type is the rule/schema that governs what kind of data can legally enter that container.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q26. Is Dart a strongly typed language?</h4>
          <p><strong>Answer:</strong> Yes. Dart is a strongly typed language, meaning the compiler verifies type correctness at build time and prevents illegal type assignments.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q27. What does "Sound Type Safety" mean in Dart?</h4>
          <p><strong>Answer:</strong> Soundness guarantees that an expression evaluated to type <code>T</code> will ALWAYS produce a value of type <code>T</code> at runtime, completely eliminating runtime type corruption errors.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q28. Are there primitive data types in Dart like in Java/C++?</h4>
          <p><strong>Answer:</strong> No. In Dart, there are no primitive types. Numbers, booleans, and functions are all full objects extending classes.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q29. What is the default value of an uninitialized nullable variable in Dart?</h4>
          <p><strong>Answer:</strong> Every uninitialized nullable variable (e.g. <code>int? score;</code>) defaults to <code>null</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q30. How do Dart generic collection types enforce element type safety?</h4>
          <p><strong>Answer:</strong> Generic annotations like <code>List&lt;String&gt;</code> restrict elements to <code>String</code>. Attempting to add an <code>int</code> yields a compile-time error.</p>
        </div>
      `
    },
    {
      pageId: "p1_vars_qa4",
      header: "1.2.5 CONCEPT CLEARING Q&A ARENA (Q31 - Q40)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Variables Master Q&A Arena: Part 4 (Q31 &ndash; Q40)</h2>
        <p class="topic-paragraph">Master <code>var</code>, <code>dynamic</code>, <code>Object</code>, and <code>Object?</code> distinctions:</p>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q31. What is the key difference between <code>var</code> and <code>dynamic</code>?</h4>
          <p><strong>Answer:</strong> <code>var</code> locks the variable's type at initialization via static inference. <code>dynamic</code> permits runtime type mutation and disables static type checking.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q32. What is the <code>Object</code> data type in Dart?</h4>
          <p><strong>Answer:</strong> <code>Object</code> is the non-nullable root class of all Dart objects (except null). All non-null types inherit from <code>Object</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q33. What is the structural difference between <code>Object</code> and <code>Object?</code> in Dart?</h4>
          <p><strong>Answer:</strong> <code>Object</code> represents the root superclass of all non-nullable types. <code>Object?</code> represents the root of the entire type system including <code>null</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q34. How do <code>Object</code> and <code>dynamic</code> compare regarding static compile-time type safety?</h4>
          <p><strong>Answer:</strong> <code>Object</code> is statically checked for method existence at compile time. <code>dynamic</code> completely disables compile-time type verification.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q35. What occurs if you call <code>toUpperCase()</code> directly on an <code>Object x = 'hello';</code> variable without casting?</h4>
          <p><strong>Answer:</strong> Emits a compile-time error because <code>toUpperCase()</code> is not defined on <code>Object</code>. You must cast it first via <code>(x as String).toUpperCase()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q36. What occurs if you call a non-existent method on a <code>dynamic</code> variable?</h4>
          <p><strong>Answer:</strong> It compiles without any error, but throws a <code>NoSuchMethodError</code> exception at runtime when executed.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q37. Why is <code>Object?</code> preferred over <code>dynamic</code> when receiving arbitrary JSON payloads?</h4>
          <p><strong>Answer:</strong> <code>Object?</code> forces explicit type checks or type casting before accessing properties, preventing unexpected <code>NoSuchMethodError</code> runtime crashes.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q38. Can a variable typed as <code>Object</code> be reassigned to a value of a different data type?</h4>
          <p><strong>Answer:</strong> Yes. <code>Object x = 10; x = 'Dart';</code> is valid because both <code>int</code> and <code>String</code> inherit from <code>Object</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q39. Does <code>dynamic</code> provide IDE code autocompletion support?</h4>
          <p><strong>Answer:</strong> No. Because the static analyzer cannot infer the runtime type of a <code>dynamic</code> variable during editing, IDEs cannot offer method autocompletion hints.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q40. How does method call performance compare between <code>Object</code> and <code>dynamic</code>?</h4>
          <p><strong>Answer:</strong> Calls on <code>Object</code> (or cast types) use fast direct vtable method dispatch. Calls on <code>dynamic</code> use dynamic call sites with runtime lookups.</p>
        </div>
      `
    },
    {
      pageId: "p1_vars_qa5",
      header: "1.2.5 CONCEPT CLEARING Q&A ARENA (Q41 - Q50)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Variables Master Q&A Arena: Part 5 (Q41 &ndash; Q50)</h2>
        <p class="topic-paragraph">Conclude with variable scopes, lifetimes, <code>late</code> modifier, and best practices:</p>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q41. What is a local variable in Dart?</h4>
          <p><strong>Answer:</strong> A variable declared inside a function or code block <code>{}</code>. It exists on the stack only while the function/block is executing.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q42. What is a top-level (global) variable in Dart?</h4>
          <p><strong>Answer:</strong> A variable declared outside any class or function at the library level. Accessible file-wide and lives for the app's entire duration.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q43. What is a static variable in Dart?</h4>
          <p><strong>Answer:</strong> A variable declared inside a class using the <code>static</code> keyword. It belongs to the class itself rather than individual instances.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q44. How does a static variable differ from an instance variable?</h4>
          <p><strong>Answer:</strong> Instance variables have separate copies per object instance. Static variables have a single shared copy across all instances accessed via <code>ClassName.variable</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q45. When are top-level and static variables initialized in Dart?</h4>
          <p><strong>Answer:</strong> Top-level and static variables are <strong>lazily initialized</strong>. They are not evaluated until the code accesses them for the first time.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q46. What is scope shadowing?</h4>
          <p><strong>Answer:</strong> Scope shadowing occurs when a local variable in an inner block has the same identifier as a variable in an outer scope, masking the outer variable.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q47. What is the <code>late</code> keyword modifier used for?</h4>
          <p><strong>Answer:</strong> <code>late</code> declares a non-nullable variable that will be initialized after its declaration, or defers expensive initialization until first read.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q48. What happens if you read a <code>late</code> variable before initializing it?</h4>
          <p><strong>Answer:</strong> Throws a runtime <code>LateInitializationError</code> exception (e.g. <code>LateInitializationError: Field 'x' has not been initialized</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q49. Why are global mutable variables discouraged in production Flutter apps?</h4>
          <p><strong>Answer:</strong> Global mutable state makes code unpredictable, breaks test isolation, introduces concurrency bugs, and hinders clean state management.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q50. What are the top 3 best practices for declaring variables in Dart 3+?</h4>
          <p><strong>Answer:</strong> (1) Use <code>final</code> or <code>const</code> by default for immutability, (2) Use <code>var</code> for local variables with obvious initializers, (3) Avoid <code>dynamic</code> and specify explicit types for public APIs.</p>
        </div>
      `
    },
    {
      pageId: "p1_num_str",
      header: "1.4.1 NUMBERS IN DART (num, int, double)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-hashtag"></i> 29. Numbers in Dart (num, int, double)</h2>
        <p class="topic-paragraph">
          Numbers in Dart are represented by the <code>num</code> type, which has two primary subtypes: <code>int</code> and <code>double</code>.
        </p>

        <h3 class="section-h3">1. int (Integer)</h3>
        <p class="topic-paragraph">
          Stores whole numbers (no decimal point). Can store positive, negative, and zero values.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>int_examples.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  int age = 25;
  int temperature = -10;
  int count = 0;

  print('Age: \$age, Temperature: \$temperature, Count: \$count');
}</code></pre>
        </div>

        <h3 class="section-h3">2. double (Floating-Point Number)</h3>
        <p class="topic-paragraph">
          Stores decimal (fractional) numbers. Used for values that require a decimal point.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>double_examples.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  double price = 99.99;
  double pi = 3.14159;
  double temperature = -12.5;

  print('Price: \$price, Pi: \$pi, Temp: \$temperature');
}</code></pre>
        </div>

        <h3 class="section-h3">3. num (Parent Numeric Type)</h3>
        <p class="topic-paragraph">
          Base type of both <code>int</code> and <code>double</code>. Can store either an integer or a decimal value.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>num_examples.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  num a = 100;      // int
  num b = 99.99;    // double

  print('num a: \$a (\${a.runtimeType})');
  print('num b: \$b (\${b.runtimeType})');
}</code></pre>
        </div>

        <h3 class="section-h3"><i class="fa-solid fa-sitemap"></i> Class Hierarchy</h3>
        <div class="callout-box info" style="font-family: monospace; white-space: pre; line-height: 1.5; background: rgba(1, 117, 194, 0.12); border-left: 4px solid var(--accent-cyan); font-size: 0.88rem; margin: 0.8rem 0;">
Object
   │
   └── num
       ├── int
       └── double
        </div>

        <h3 class="section-h3"><i class="fa-solid fa-list-check"></i> Summary</h3>
        <table class="content-table" style="margin-bottom: 0.8rem;">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>int</code></td>
              <td>Stores whole numbers (e.g., 25, -10, 0).</td>
            </tr>
            <tr>
              <td><code>double</code></td>
              <td>Stores decimal numbers (e.g., 99.99, 3.14159).</td>
            </tr>
            <tr>
              <td><code>num</code></td>
              <td>Parent type that can store both <code>int</code> and <code>double</code>.</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      pageId: "p1_string_fundamentals",
      header: "1.4.2 STRING IN DART: FUNDAMENTALS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-font"></i> 30. String in Dart: Fundamentals</h2>
        <p class="topic-paragraph">
          A <code>String</code> is a sequence of characters used to store text in Dart. Strings are enclosed in single quotes (<code>' '</code>), double quotes (<code>" "</code>), triple single quotes (<code>''' '''</code>), or triple double quotes (<code>""" """</code>).
        </p>

        <h3 class="section-h3">Subtopics of String in Dart</h3>

        <h3 class="section-h3">1. String Definition</h3>
        <p class="topic-paragraph">
          A String stores text (characters). It is an object of the <code>String</code> class.
        </p>
        <p class="topic-paragraph">
          <strong>Example:</strong> <code>String name = "Jayanta";</code>
        </p>

        <h3 class="section-h3">2. Creating Strings</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.6rem; font-size: 0.85rem;">
          <li>Using single quotes (<code>' '</code>)</li>
          <li>Using double quotes (<code>" "</code>)</li>
          <li>Using triple single quotes (<code>''' '''</code>)</li>
          <li>Using triple double quotes (<code>""" """</code>)</li>
        </ul>
        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>creating_strings.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  String a = 'Hello';
  String b = "World";
  String c = '''Multi-line
String''';
  String d = """Another
Multi-line String""";

  print(a);
  print(b);
  print(c);
  print(d);
}</code></pre>
        </div>

        <h3 class="section-h3">3. String Interpolation</h3>
        <p class="topic-paragraph">
          Insert variables or expressions into a string using <code>$</code> and <code>\${}</code>.
        </p>
        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>string_interpolation.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  String name = "Rahul";
  int age = 20;

  print("Name: \$name");
  print("Age next year: \${age + 1}");
}</code></pre>
        </div>

        <h3 class="section-h3">4. String Concatenation</h3>
        <p class="topic-paragraph">
          Combine two or more strings using <code>+</code> or adjacent string literals.
        </p>

        <h3 class="section-h3">5. Escape Characters</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.6rem; font-size: 0.85rem; line-height: 1.5;">
          <li><code>\\n</code> → New line</li>
          <li><code>\\t</code> → Tab</li>
          <li><code>\\'</code> → Single quote</li>
          <li><code>\\"</code> → Double quote</li>
          <li><code>\\\\</code> → Backslash</li>
        </ul>

        <h3 class="section-h3">6. Raw String</h3>
        <p class="topic-paragraph">
          Prefix the string with <code>r</code> to ignore escape sequences.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>string_basics.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  // Concatenation
  String first = "Hello";
  String second = "World";
  print(first + " " + second);

  // Escape Characters
  print("Hello\\nWorld");
  print("Flutter\\tDart");

  // Raw String
  String path = r"C:\\Users\\Jayanta\\Documents";
  print(path);
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_string_methods_conversions",
      header: "1.4.3 STRING PROPERTIES, METHODS & CONVERSIONS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-sliders"></i> 31. String Properties, Methods & Conversions</h2>

        <h3 class="section-h3">7. Common String Properties</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.6rem; font-size: 0.85rem;">
          <li><code>length</code></li>
          <li><code>isEmpty</code></li>
          <li><code>isNotEmpty</code></li>
        </ul>
        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>string_properties.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  String text = "Flutter";

  print(text.length);     // 7
  print(text.isEmpty);    // false
  print(text.isNotEmpty); // true
}</code></pre>
        </div>

        <h3 class="section-h3">8. Common String Methods</h3>
        <p class="topic-paragraph">
          Dart provides rich built-in utility methods on the <code>String</code> class:
        </p>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.4rem; font-size: 0.82rem; margin-bottom: 0.8rem; background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
          <div><code>toUpperCase()</code></div>
          <div><code>toLowerCase()</code></div>
          <div><code>trim()</code></div>
          <div><code>trimLeft()</code></div>
          <div><code>trimRight()</code></div>
          <div><code>contains()</code></div>
          <div><code>startsWith()</code></div>
          <div><code>endsWith()</code></div>
          <div><code>replaceAll()</code></div>
          <div><code>replaceFirst()</code></div>
          <div><code>split()</code></div>
          <div><code>substring()</code></div>
          <div><code>indexOf()</code></div>
          <div><code>lastIndexOf()</code></div>
          <div><code>codeUnitAt()</code></div>
          <div><code>compareTo()</code></div>
          <div><code>padLeft()</code></div>
          <div><code>padRight()</code></div>
        </div>

        <h3 class="section-h3">9. Converting Between String and Other Types</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.6rem; font-size: 0.85rem; line-height: 1.6;">
          <li>String → int: <code>int.parse("25")</code></li>
          <li>String → double: <code>double.parse("99.99")</code></li>
          <li>int → String: <code>100.toString()</code></li>
          <li>double → String: <code>3.14.toString()</code></li>
        </ul>

        <h3 class="section-h3">10. String Comparison</h3>
        <p class="topic-paragraph">
          Compare strings using <code>==</code> or <code>compareTo()</code>.
        </p>
        <p class="topic-paragraph">
          <strong>Example:</strong> <code>print("Dart" == "Dart");</code>
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>string_methods_conversions.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  // Type Conversions
  int age = int.parse("25");
  double price = double.parse("99.99");

  String a = 100.toString();
  String b = 3.14.toString();

  print('Parsed int: \$age, double: \$price');
  print('Converted to String: \$a, \$b');

  // String Comparison
  print("Dart" == "Dart");
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_string_buffer",
      header: "1.4.4 STRINGBUFFER IN DART",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-layer-group"></i> 32. StringBuffer in Dart</h2>

        <h3 class="section-h3">Definition</h3>
        <p class="topic-paragraph">
          <code>StringBuffer</code> is a class in Dart used to efficiently build and modify strings. It is faster than repeatedly concatenating strings using the <code>+</code> operator because it avoids creating multiple temporary string objects in memory.
        </p>

        <h3 class="section-h3">Why Use StringBuffer?</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.85rem; line-height: 1.5;">
          <li><strong>Efficient for creating large strings:</strong> Minimizes garbage collection overhead.</li>
          <li><strong>Reduces memory usage:</strong> Reuses internal buffers.</li>
          <li><strong>Improves performance:</strong> Fast appending inside loops.</li>
        </ul>

        <h3 class="section-h3">Creating a StringBuffer</h3>
        <p class="topic-paragraph">
          <code>StringBuffer buffer = StringBuffer();</code><br>
          Or with an initial value:<br>
          <code>StringBuffer buffer = StringBuffer("Hello");</code>
        </p>

        <h3 class="section-h3">Writing Text</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.6rem; font-size: 0.85rem; line-height: 1.6;">
          <li><code>write()</code> — Adds text without a newline.</li>
          <li><code>writeln()</code> — Adds text followed by a newline.</li>
          <li><code>writeAll()</code> — Writes all elements of an iterable with an optional separator.</li>
          <li><code>writeCharCode()</code> — Writes a character using its Unicode value (e.g. 65 for 'A').</li>
        </ul>

        <h3 class="section-h3">Common Methods & Properties</h3>
        <table class="content-table" style="margin-bottom: 0.8rem;">
          <thead>
            <tr>
              <th>Method / Property</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>write()</code></td><td>Appends text without newline</td></tr>
            <tr><td><code>writeln()</code></td><td>Appends text with a newline</td></tr>
            <tr><td><code>writeAll()</code></td><td>Appends all elements from an iterable</td></tr>
            <tr><td><code>writeCharCode()</code></td><td>Appends a Unicode character</td></tr>
            <tr><td><code>toString()</code></td><td>Returns the final concatenated String</td></tr>
            <tr><td><code>clear()</code></td><td>Removes all contents (resets buffer)</td></tr>
            <tr><td><code>length</code></td><td>Number of characters currently in buffer</td></tr>
            <tr><td><code>isEmpty</code> / <code>isNotEmpty</code></td><td>Checks if buffer has 0 or &gt;0 characters</td></tr>
          </tbody>
        </table>

        <h3 class="section-h3">String vs StringBuffer</h3>
        <table class="content-table" style="margin-bottom: 0.8rem;">
          <thead>
            <tr>
              <th>Feature</th>
              <th>String</th>
              <th>StringBuffer</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Mutability</strong></td><td>Immutable (No)</td><td>Mutable (Yes)</td></tr>
            <tr><td><strong>Performance</strong></td><td>Slower for many appends</td><td>Faster for repeated appends</td></tr>
            <tr><td><strong>Memory Usage</strong></td><td>Creates temporary objects</td><td>Memory-efficient buffer</td></tr>
            <tr><td><strong>Best Use</strong></td><td>Small or fixed text</td><td>Large or dynamically built text</td></tr>
          </tbody>
        </table>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>string_buffer_demo.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  StringBuffer buffer = StringBuffer();

  buffer.writeln("Welcome");
  buffer.write("Learn ");
  buffer.write("Dart ");
  buffer.writeAll(["with", "Flutter"], " ");
  buffer.write(" ");
  buffer.writeCharCode(65); // 'A'

  print(buffer.toString());
  print("Length: \${buffer.length}");

  buffer.clear();
  print("Is Empty after clear? \${buffer.isEmpty}");
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_regexp_fundamentals",
      header: "1.4.5 REGULAR EXPRESSION (REGEXP): FUNDAMENTALS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-magnifying-glass"></i> 33. Regular Expression (RegExp) in Dart</h2>

        <h3 class="section-h3">Definition</h3>
        <p class="topic-paragraph">
          A Regular Expression (<code>RegExp</code>) is a sequence of characters that defines a search pattern. In Dart, the <code>RegExp</code> class is used to search, validate, extract, replace, or split text based on specific patterns.
        </p>

        <h3 class="section-h3">Why Use RegExp?</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.85rem; line-height: 1.5;">
          <li>Validate user input (email, phone number, password, etc.)</li>
          <li>Search for specific text or find all matches in a string</li>
          <li>Replace or sanitize text</li>
          <li>Split strings using dynamic patterns</li>
        </ul>

        <h3 class="section-h3">Creating a RegExp & Raw String (r'')</h3>
        <p class="topic-paragraph">
          It is recommended to use raw strings (<code>r''</code>) because backslashes (<code>\\</code>) are treated literally without needing double escapes.
        </p>
        <p class="topic-paragraph">
          <strong>Example:</strong> <code>RegExp regExp = RegExp(r'\\d');</code>
        </p>

        <h3 class="section-h3">Common RegExp Methods</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.85rem; line-height: 1.6;">
          <li><code>hasMatch(String)</code> — Checks whether a pattern exists (returns <code>bool</code>).</li>
          <li><code>firstMatch(String)</code> — Returns the first match object (<code>Match?</code>).</li>
          <li><code>allMatches(String)</code> — Returns all matches (<code>Iterable&lt;Match&gt;</code>).</li>
          <li><code>stringMatch(String)</code> — Returns the matched string directly (<code>String?</code>).</li>
        </ul>

        <h3 class="section-h3">Using RegExp with String Methods</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.85rem; line-height: 1.6;">
          <li><code>text.replaceAll(RegExp(r'\\d'), '*')</code> — Replaces all digits with asterisks.</li>
          <li><code>text.split(RegExp(r'[,;]'))</code> — Splits string by multiple delimiters.</li>
        </ul>

        <h3 class="section-h3">Common Match Methods</h3>
        <table class="content-table" style="margin-bottom: 0.8rem;">
          <thead>
            <tr>
              <th>Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>group(0)</code></td><td>Entire matched text</td></tr>
            <tr><td><code>group(1)</code></td><td>First captured group</td></tr>
            <tr><td><code>start</code></td><td>Starting index of match in input string</td></tr>
            <tr><td><code>end</code></td><td>Ending index of match in input string</td></tr>
            <tr><td><code>groups(List&lt;int&gt;)</code></td><td>Returns multiple specified captured groups</td></tr>
          </tbody>
        </table>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>regexp_fundamentals_demo.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  RegExp regExp = RegExp(r'\\d+');

  // hasMatch & firstMatch
  print('hasMatch ("Age: 25"): \${regExp.hasMatch("Age: 25")}');
  Match? match = regExp.firstMatch("Age: 25");
  print('firstMatch group(0): \${match?.group(0)}');

  // allMatches
  Iterable<Match> matches = regExp.allMatches("10 20 30");
  for (var m in matches) {
    print('Match: \${m.group(0)} (from \${m.start} to \${m.end})');
  }

  // String integration
  String text = "Apple,Banana;Orange";
  List<String> fruits = text.split(RegExp(r'[,;]'));
  print('Split Fruits: \$fruits');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_regexp_patterns_options",
      header: "1.4.6 REGEXP PATTERNS, CONSTRUCTOR & VALIDATION",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-code"></i> 34. RegExp Patterns, Options & Practical Examples</h2>

        <h3 class="section-h3">Common RegExp Patterns</h3>
        <div style="max-height: 220px; overflow-y: auto; margin-bottom: 0.8rem;">
          <table class="content-table">
            <thead>
              <tr>
                <th>Pattern</th>
                <th>Meaning</th>
                <th>Example Match</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>.</code></td><td>Any character</td><td>a, 1, @</td></tr>
              <tr><td><code>\\d</code></td><td>Digit (0–9)</td><td>5</td></tr>
              <tr><td><code>\\D</code></td><td>Non-digit</td><td>A</td></tr>
              <tr><td><code>\\w</code></td><td>Word character</td><td>A, a, 0, _</td></tr>
              <tr><td><code>\\W</code></td><td>Non-word character</td><td>@, #</td></tr>
              <tr><td><code>\\s</code></td><td>Whitespace</td><td>Space, Tab</td></tr>
              <tr><td><code>\\S</code></td><td>Non-whitespace</td><td>A, 5</td></tr>
              <tr><td><code>[abc]</code></td><td>a, b, or c</td><td>a</td></tr>
              <tr><td><code>[^abc]</code></td><td>Not a, b, or c</td><td>d</td></tr>
              <tr><td><code>[A-Z]</code></td><td>Uppercase letter</td><td>G</td></tr>
              <tr><td><code>[a-z]</code></td><td>Lowercase letter</td><td>m</td></tr>
              <tr><td><code>[0-9]</code></td><td>Digit</td><td>7</td></tr>
              <tr><td><code>+</code></td><td>One or more</td><td>123</td></tr>
              <tr><td><code>*</code></td><td>Zero or more</td><td>"", aaa</td></tr>
              <tr><td><code>?</code></td><td>Zero or one</td><td>a</td></tr>
              <tr><td><code>{3}</code></td><td>Exactly 3 times</td><td>111</td></tr>
              <tr><td><code>{2,5}</code></td><td>2 to 5 times</td><td>1234</td></tr>
              <tr><td><code>^</code></td><td>Start of string</td><td>Hello</td></tr>
              <tr><td><code>$</code></td><td>End of string</td><td>World</td></tr>
              <tr><td><code>|</code></td><td>OR operator</td><td>cat|dog</td></tr>
              <tr><td><code>()</code></td><td>Grouping</td><td>(ab)+</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="section-h3">RegExp Constructor Options</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.85rem; line-height: 1.6;">
          <li><code>caseSensitive: false</code> — Ignores letter casing (matches <code>dart</code>, <code>DART</code>, <code>Dart</code>).</li>
          <li><code>multiLine: true</code> — Allows <code>^</code> and <code>$</code> to match start/end of each line.</li>
          <li><code>unicode: true</code> — Enables Unicode character support.</li>
          <li><code>dotAll: true</code> — Makes <code>.</code> match newline characters (<code>\\n</code>) as well.</li>
        </ul>

        <h3 class="section-h3">Practical Real-World Validations</h3>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>regexp_validations.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  // 1. Email Validation
  String email = "user@gmail.com";
  bool validEmail = RegExp(r'^[\\w.-]+@[\\w-]+\\.[A-Za-z]{2,}\$').hasMatch(email);
  print('Valid Email? \$validEmail');

  // 2. Phone Number Validation
  String phone = "9876543210";
  bool validPhone = RegExp(r'^\\d{10}\$').hasMatch(phone);
  print('Valid 10-digit Phone? \$validPhone');

  // 3. Password Validation (min 8 chars, 1 uppercase, 1 lowercase, 1 digit)
  String password = "Flutter@123";
  bool validPassword = RegExp(r'^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}\$').hasMatch(password);
  print('Valid Password? \$validPassword');

  // 4. Remove All Digits
  String text = "A1B2C3";
  String cleanText = text.replaceAll(RegExp(r'\\d'), "");
  print('Removed Digits: \$cleanText');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_qa_numbers_1",
      header: "1.5.1 NUMBERS MASTERY Q&A (Q1 – Q25)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> 35. Numbers, Strings, StringBuffer & RegExp Q&A: Part 1 (Q1–Q25)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q1. What is the base class for all numeric types in Dart?</h4>
          <p><strong>Answer:</strong> <code>num</code> is the abstract base class for numeric types in Dart, which is directly extended by <code>int</code> and <code>double</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q2. What are the two main concrete numeric subtypes in Dart?</h4>
          <p><strong>Answer:</strong> <code>int</code> (for 64-bit signed integers) and <code>double</code> (for 64-bit IEEE 754 floating-point numbers).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q3. What is the difference between <code>/</code> and <code>~/</code> in Dart?</h4>
          <p><strong>Answer:</strong> <code>/</code> performs standard division and always returns a <code>double</code>, whereas <code>~/</code> performs integer truncating division and returns an <code>int</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q4. How do you safely parse a String into an integer without throwing FormatException?</h4>
          <p><strong>Answer:</strong> Use <code>int.tryParse("123")</code> which returns <code>null</code> instead of throwing an exception if parsing fails.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q5. How does <code>clamp()</code> work on numbers in Dart?</h4>
          <p><strong>Answer:</strong> <code>number.clamp(lower, upper)</code> bounds a value within the specified minimum and maximum range.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q6. What does <code>ceil()</code> do?</h4>
          <p><strong>Answer:</strong> Returns the smallest integer that is not less than the current number (rounds up).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q7. What does <code>floor()</code> do?</h4>
          <p><strong>Answer:</strong> Returns the largest integer that is not greater than the current number (rounds down).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q8. What does <code>round()</code> do?</h4>
          <p><strong>Answer:</strong> Returns the integer closest to the current number.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q9. What does <code>truncate()</code> do?</h4>
          <p><strong>Answer:</strong> Discards fractional digits and returns the integer part without rounding.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q10. How do you format a double to a specific number of decimal places?</h4>
          <p><strong>Answer:</strong> Use <code>doubleVal.toStringAsFixed(fractionDigits)</code> (e.g. <code>3.14159.toStringAsFixed(2)</code> returns <code>"3.14"</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q11. What is <code>double.nan</code>?</h4>
          <p><strong>Answer:</strong> Represents "Not a Number" resulting from undefined operations like <code>0.0 / 0.0</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q12. How do you check if a double value is <code>NaN</code>?</h4>
          <p><strong>Answer:</strong> Use <code>val.isNaN</code> property (Note: <code>val == double.nan</code> returns false because NaN is not equal to anything).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q13. How do you check if a double value is infinite?</h4>
          <p><strong>Answer:</strong> Use <code>val.isInfinite</code> or <code>val.isFinite</code> properties.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q14. What are <code>isEven</code> and <code>isOdd</code>?</h4>
          <p><strong>Answer:</strong> Properties on <code>int</code> returning boolean flags for parity (e.g. <code>4.isEven</code> is true).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q15. How do you get the absolute value of a number?</h4>
          <p><strong>Answer:</strong> Call <code>numVal.abs()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q16. What is the return type of <code>abs()</code> when called on an <code>int</code> vs <code>double</code>?</h4>
          <p><strong>Answer:</strong> Calling <code>abs()</code> on an <code>int</code> returns an <code>int</code>; calling it on a <code>double</code> returns a <code>double</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q17. How do you parse hexadecimal integer strings in Dart?</h4>
          <p><strong>Answer:</strong> Use <code>int.parse("0xFF")</code> or <code>int.parse("FF", radix: 16)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q18. How do you convert an integer to a binary or hex String?</h4>
          <p><strong>Answer:</strong> Use <code>number.toRadixString(2)</code> for binary or <code>number.toRadixString(16)</code> for hex.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q19. What is the <code>sign</code> property on Dart numbers?</h4>
          <p><strong>Answer:</strong> Returns <code>-1</code> for negative numbers, <code>1</code> for positive numbers, and <code>0</code> for zero.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q20. How do you compute the Greatest Common Divisor of two integers?</h4>
          <p><strong>Answer:</strong> Use <code>a.gcd(b)</code> (e.g. <code>12.gcd(18)</code> returns <code>6</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q21. What does <code>bitLength</code> return on an integer?</h4>
          <p><strong>Answer:</strong> Returns the minimum number of bits required to store the integer value.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q22. What happens when dividing a positive double by <code>0.0</code> in Dart?</h4>
          <p><strong>Answer:</strong> It evaluates to <code>double.infinity</code> without throwing a division by zero error.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q23. What happens when dividing a negative double by <code>0.0</code> in Dart?</h4>
          <p><strong>Answer:</strong> It evaluates to <code>-double.infinity</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q24. How does <code>%</code> (modulo) differ from <code>remainder()</code> in Dart?</h4>
          <p><strong>Answer:</strong> <code>%</code> always returns a result with the sign of the divisor, while <code>remainder()</code> returns a result with the sign of the dividend.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q25. Why is <code>0.1 + 0.2 != 0.3</code> in Dart?</h4>
          <p><strong>Answer:</strong> IEEE 754 binary floating-point representation cannot represent 0.1 or 0.2 with exact binary precision, resulting in <code>0.30000000000000004</code>.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_numbers_2",
      header: "1.5.2 NUMBERS ADVANCED Q&A (Q26 – Q50)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Numbers in Dart: Q&A (Part 2: Q26–Q50)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q26. Can a variable declared as <code>num</code> hold an integer and later be assigned a double?</h4>
          <p><strong>Answer:</strong> Yes, because <code>num</code> is the superclass of both <code>int</code> and <code>double</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q27. What is the size of an <code>int</code> in the Native Dart VM?</h4>
          <p><strong>Answer:</strong> 64-bit signed integer (from -2^63 to 2^63 - 1).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q28. What is the range of an <code>int</code> when compiled to JavaScript (Dart Web)?</h4>
          <p><strong>Answer:</strong> Represented as IEEE 754 double precision floats (exact integers from -2^53 + 1 to 2^53 - 1).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q29. How do you convert a double to an exponential String format?</h4>
          <p><strong>Answer:</strong> Call <code>val.toStringAsExponential(fractionDigits)</code> (e.g., <code>1000.toStringAsExponential(2)</code> returns <code>"1.00e+3"</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q30. How do you format a number to a significant precision length?</h4>
          <p><strong>Answer:</strong> Use <code>val.toStringAsPrecision(precisionLength)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q31. What is <code>BigInt</code> in Dart?</h4>
          <p><strong>Answer:</strong> A class representing arbitrary-precision integers for working with numbers larger than 64-bit limits.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q32. How do you create a <code>BigInt</code> from a String?</h4>
          <p><strong>Answer:</strong> Use <code>BigInt.parse("922337203685477580799999")</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q33. What are the bitwise operators supported by Dart integers?</h4>
          <p><strong>Answer:</strong> AND (<code>&</code>), OR (<code>|</code>), XOR (<code>^</code>), NOT (<code>~</code>), Left Shift (<code>&lt;&lt;</code>), Right Shift (<code>&gt;&gt;</code>), Unsigned Right Shift (<code>&gt;&gt;&gt;</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q34. What does <code>~</code> (bitwise NOT) do to an integer?</h4>
          <p><strong>Answer:</strong> Inverts all bits of the 2's complement representation (i.e. <code>~x == -x - 1</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q35. What is the difference between <code>&gt;&gt;</code> and <code>&gt;&gt;&gt;</code> in Dart 2.14+?</h4>
          <p><strong>Answer:</strong> <code>&gt;&gt;</code> performs sign-extending right shift; <code>&gt;&gt;&gt;</code> performs zero-fill unsigned right shift.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q36. How do you check if a <code>num</code> variable contains a double at runtime?</h4>
          <p><strong>Answer:</strong> Use type test operator: <code>val is double</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q37. What happens when calling <code>int.parse()</code> on a String containing decimal numbers like <code>"12.34"</code>?</h4>
          <p><strong>Answer:</strong> It throws a <code>FormatException</code>. Use <code>double.parse()</code> or <code>num.parse()</code> instead.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q38. What does <code>num.parse()</code> return when parsing <code>"42"</code> vs <code>"42.5"</code>?</h4>
          <p><strong>Answer:</strong> It returns an <code>int</code> (42) for <code>"42"</code> and a <code>double</code> (42.5) for <code>"42.5"</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q39. How do you calculate powers of numbers in Dart?</h4>
          <p><strong>Answer:</strong> Import <code>dart:math</code> and use <code>pow(base, exponent)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q40. How do you compute square roots in Dart?</h4>
          <p><strong>Answer:</strong> Import <code>dart:math</code> and call <code>sqrt(number)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q41. What is <code>double.minPositive</code> in <code>dart:math</code>?</h4>
          <p><strong>Answer:</strong> The smallest positive non-zero value representable by a 64-bit float (approx 5e-324).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q42. What is <code>double.maxFinite</code> in <code>dart:math</code>?</h4>
          <p><strong>Answer:</strong> The maximum finite value representable by a 64-bit float (approx 1.79e+308).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q43. How do you generate random numbers in Dart?</h4>
          <p><strong>Answer:</strong> Import <code>dart:math</code> and instantiate <code>Random().nextInt(max)</code> or <code>Random().nextDouble()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q44. How do you compare two doubles for approximate equality?</h4>
          <p><strong>Answer:</strong> Check if <code>(a - b).abs() &lt; epsilon</code> (where epsilon is a small threshold like <code>1e-9</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q45. What does <code>compareTo()</code> return for numbers?</h4>
          <p><strong>Answer:</strong> Returns <code>-1</code> if self &lt; other, <code>0</code> if equal, and <code>1</code> if self &gt; other.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q46. How does Dart handle <code>NaN</code> in <code>compareTo()</code>?</h4>
          <p><strong>Answer:</strong> In <code>compareTo()</code>, <code>NaN</code> is considered greater than all numbers, including <code>double.infinity</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q47. How does Dart handle <code>-0.0</code> vs <code>0.0</code> in <code>compareTo()</code>?</h4>
          <p><strong>Answer:</strong> In <code>compareTo()</code>, <code>-0.0</code> is considered smaller than <code>0.0</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q48. Is <code>int</code> an object in Dart?</h4>
          <p><strong>Answer:</strong> Yes! Everything in Dart is an object, including primitive numeric types.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q49. How do you convert a double to an int safely?</h4>
          <p><strong>Answer:</strong> Use <code>doubleVal.toInt()</code>, <code>doubleVal.toInt().floor()</code>, or <code>doubleVal.round()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q50. How do you convert an int to a double?</h4>
          <p><strong>Answer:</strong> Use <code>intVal.toDouble()</code>.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_strings_1",
      header: "1.5.3 STRINGS FUNDAMENTALS Q&A (Q51 – Q75)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Strings in Dart: Q&A (Part 1: Q51–Q75)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q51. What is a String in Dart?</h4>
          <p><strong>Answer:</strong> A sequence of UTF-16 (16-bit code units) characters used to represent text.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q52. Are Strings in Dart mutable or immutable?</h4>
          <p><strong>Answer:</strong> Immutable. Once created, a String object's content cannot be altered.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q53. What are the four valid syntax ways to create String literals in Dart?</h4>
          <p><strong>Answer:</strong> Single quotes (<code>' '</code>), double quotes (<code>" "</code>), triple single quotes (<code>''' '''</code>), and triple double quotes (<code>""" """</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q54. What are triple quotes used for?</h4>
          <p><strong>Answer:</strong> Creating multi-line string literals without needing explicit <code>\\n</code> escape characters.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q55. What is String Interpolation in Dart?</h4>
          <p><strong>Answer:</strong> Embedding variable values or expressions inside string literals using <code>$variable</code> or <code>\${expression}</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q56. When must you use curly braces <code>\${}</code> in String interpolation?</h4>
          <p><strong>Answer:</strong> When evaluating complex expressions, property lookups, or method calls (e.g. <code>\${user.name}</code>, <code>\${1 + 1}</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q57. What is a Raw String in Dart?</h4>
          <p><strong>Answer:</strong> A string prefixed with <code>r</code> (e.g. <code>r"C:\\path"</code>) where escape characters like <code>\\n</code> are treated as literal characters.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q58. What escape character represents a newline?</h4>
          <p><strong>Answer:</strong> <code>\\n</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q59. What escape character represents a tab space?</h4>
          <p><strong>Answer:</strong> <code>\\t</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q60. How do you escape a dollar sign inside a string literal?</h4>
          <p><strong>Answer:</strong> Use backslash: <code>\\$</code> (e.g. <code>"Price: \\$100"</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q61. How do you concatenate adjacent string literals without using <code>+</code>?</h4>
          <p><strong>Answer:</strong> Simply place string literals next to each other: <code>String s = 'Hello' ' ' 'World';</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q62. What does <code>string.length</code> return?</h4>
          <p><strong>Answer:</strong> The number of UTF-16 code units in the string.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q63. What is the difference between UTF-16 code units and Runes (Unicode code points)?</h4>
          <p><strong>Answer:</strong> UTF-16 code units are 16-bit values; emojis and extended characters use surrogate pairs (2 code units) for a single Rune (code point).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q64. How do you access the Unicode code points (Runes) of a String?</h4>
          <p><strong>Answer:</strong> Use the <code>string.runes</code> property.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q65. What does <code>string.isEmpty</code> check?</h4>
          <p><strong>Answer:</strong> Returns <code>true</code> if <code>length == 0</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q66. What does <code>string.isNotEmpty</code> check?</h4>
          <p><strong>Answer:</strong> Returns <code>true</code> if <code>length &gt; 0</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q67. How do you get the UTF-16 code unit at a specific index?</h4>
          <p><strong>Answer:</strong> Call <code>string.codeUnitAt(index)</code> or access <code>string.codeUnits[index]</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q68. How do you create a String from a list of Unicode code points (Runes)?</h4>
          <p><strong>Answer:</strong> Use <code>String.fromCharCodes(iterable)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q69. How do you create a String from a single Unicode character code?</h4>
          <p><strong>Answer:</strong> Use <code>String.fromCharCode(charCode)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q70. Does Dart support indexing characters directly with bracket operator <code>s[0]</code>?</h4>
          <p><strong>Answer:</strong> Yes, <code>s[0]</code> returns a 1-character String representing the UTF-16 code unit at index 0.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q71. What happens if you index out of bounds on a String <code>s[99]</code>?</h4>
          <p><strong>Answer:</strong> Throws a <code>RangeError</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q72. How do compile-time <code>const</code> strings behave in Dart?</h4>
          <p><strong>Answer:</strong> They are canonicalized in memory so identical <code>const</code> strings share the exact same memory instance.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q73. Can String interpolation be evaluated in a <code>const</code> context?</h4>
          <p><strong>Answer:</strong> Yes, provided all interpolated values are also compile-time constants (e.g. <code>const greeting = "Hello \$name";</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q74. What escape sequence represents a backslash character?</h4>
          <p><strong>Answer:</strong> <code>\\\\</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q75. What escape sequence represents a carriage return?</h4>
          <p><strong>Answer:</strong> <code>\\r</code>.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_strings_2",
      header: "1.5.4 STRING METHODS & MANIPULATION Q&A (Q76 – Q100)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Strings in Dart: Q&A (Part 2: Q76–Q100)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q76. How do you convert a string to uppercase in Dart?</h4>
          <p><strong>Answer:</strong> Use <code>string.toUpperCase()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q77. How do you convert a string to lowercase in Dart?</h4>
          <p><strong>Answer:</strong> Use <code>string.toLowerCase()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q78. How do you remove leading and trailing whitespace from a String?</h4>
          <p><strong>Answer:</strong> Use <code>string.trim()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q79. How do you remove only leading whitespace?</h4>
          <p><strong>Answer:</strong> Use <code>string.trimLeft()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q80. How do you remove only trailing whitespace?</h4>
          <p><strong>Answer:</strong> Use <code>string.trimRight()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q81. How do you check if a String contains a specific substring?</h4>
          <p><strong>Answer:</strong> Call <code>string.contains("substring")</code> which returns a boolean.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q82. How do you check if a String starts with a prefix?</h4>
          <p><strong>Answer:</strong> Use <code>string.startsWith("prefix")</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q83. How do you check if a String ends with a suffix?</h4>
          <p><strong>Answer:</strong> Use <code>string.endsWith("suffix")</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q84. How do you find the first index of a substring?</h4>
          <p><strong>Answer:</strong> Call <code>string.indexOf("pattern")</code> (returns <code>-1</code> if not found).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q85. How do you find the last index of a substring?</h4>
          <p><strong>Answer:</strong> Call <code>string.lastIndexOf("pattern")</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q86. How do you extract a substring between start and end indices?</h4>
          <p><strong>Answer:</strong> Call <code>string.substring(startIndex, endIndex)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q87. What happens if <code>endIndex</code> is omitted in <code>substring(startIndex)</code>?</h4>
          <p><strong>Answer:</strong> It extracts from <code>startIndex</code> up to the end of the string.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q88. How do you split a String into a List of substrings?</h4>
          <p><strong>Answer:</strong> Use <code>string.split(pattern)</code> (e.g. <code>"a,b,c".split(",")</code> returns <code>['a', 'b', 'c']</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q89. What does <code>string.split('')</code> (empty string delimiter) do?</h4>
          <p><strong>Answer:</strong> Splits the String into a list of individual 1-character String elements.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q90. How do you replace all occurrences of a pattern in a String?</h4>
          <p><strong>Answer:</strong> Call <code>string.replaceAll(from, to)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q91. How do you replace only the first occurrence of a pattern?</h4>
          <p><strong>Answer:</strong> Call <code>string.replaceFirst(from, to)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q92. How do you replace a specific index range in a String?</h4>
          <p><strong>Answer:</strong> Call <code>string.replaceRange(start, end, replacement)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q93. How do you dynamically compute replacements using a callback function?</h4>
          <p><strong>Answer:</strong> Use <code>string.replaceAllMapped(pattern, (Match match) =&gt; ...)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q94. How do you pad the left side of a String to a target width?</h4>
          <p><strong>Answer:</strong> Call <code>string.padLeft(width, paddingChar)</code> (e.g. <code>"5".padLeft(3, '0')</code> returns <code>"005"</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q95. How do you pad the right side of a String?</h4>
          <p><strong>Answer:</strong> Call <code>string.padRight(width, paddingChar)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q96. What does <code>splitMapJoin()</code> do on a String?</h4>
          <p><strong>Answer:</strong> Splits the string by pattern, converts matches and non-matches using callbacks, and joins them back together.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q97. How do you check if two Strings are equal in value?</h4>
          <p><strong>Answer:</strong> Use the <code>==</code> operator (e.g. <code>str1 == str2</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q98. How do you perform case-insensitive string equality comparison?</h4>
          <p><strong>Answer:</strong> Compare their lowercased values: <code>str1.toLowerCase() == str2.toLowerCase()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q99. What does <code>compareTo()</code> return for Strings?</h4>
          <p><strong>Answer:</strong> Returns <code>0</code> if equal, negative if self precedes other alphabetically (lexicographically), and positive if self follows other.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q100. How do you join a List of Strings into a single String?</h4>
          <p><strong>Answer:</strong> Call <code>list.join(separator)</code> (e.g. <code>['A', 'B'].join('-')</code> returns <code>"A-B"</code>).</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_strings_3",
      header: "1.5.5 STRING CONVERSIONS & ADVANCED Q&A (Q101 – Q125)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Strings in Dart: Q&A (Part 3: Q101–Q125)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q101. How do you convert an integer to a String?</h4>
          <p><strong>Answer:</strong> Call <code>intVal.toString()</code> or use string interpolation <code>"\$intVal"</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q102. How do you convert a double to a String?</h4>
          <p><strong>Answer:</strong> Call <code>doubleVal.toString()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q103. How do you convert a String to a List of UTF-16 code units?</h4>
          <p><strong>Answer:</strong> Access <code>string.codeUnits</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q104. How do you convert a String to UTF-8 bytes in Dart?</h4>
          <p><strong>Answer:</strong> Import <code>dart:convert</code> and call <code>utf8.encode(string)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q105. How do you decode UTF-8 bytes back into a String?</h4>
          <p><strong>Answer:</strong> Import <code>dart:convert</code> and call <code>utf8.decode(bytesList)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q106. How do you encode a String to Base64 in Dart?</h4>
          <p><strong>Answer:</strong> Import <code>dart:convert</code> and use <code>base64.encode(utf8.encode(text))</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q107. How do you decode a Base64 String back to text?</h4>
          <p><strong>Answer:</strong> Use <code>utf8.decode(base64.decode(base64String))</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q108. How do you check if a String contains only whitespace?</h4>
          <p><strong>Answer:</strong> Check <code>string.trim().isEmpty</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q109. What happens when calling <code>int.parse()</code> on a String with leading/trailing spaces?</h4>
          <p><strong>Answer:</strong> It throws a <code>FormatException</code>. You must call <code>int.parse(str.trim())</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q110. How do you repeat a String N times in Dart?</h4>
          <p><strong>Answer:</strong> Call <code>string * N</code> (e.g. <code>"Hi" * 3</code> returns <code>"HiHiHi"</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q111. What operator is overloaded on String to perform repetition?</h4>
          <p><strong>Answer:</strong> The multiplication operator <code>*</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q112. Is String comparison in Dart case-sensitive by default?</h4>
          <p><strong>Answer:</strong> Yes, <code>"Dart" == "dart"</code> evaluates to <code>false</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q113. How does <code>indexOf()</code> behave if a start index is specified?</h4>
          <p><strong>Answer:</strong> <code>string.indexOf("a", 3)</code> starts searching for "a" beginning at index 3.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q114. What does <code>compareTo()</code> return when comparing <code>"Apple"</code> and <code>"Banana"</code>?</h4>
          <p><strong>Answer:</strong> Returns a negative integer because <code>"Apple"</code> comes before <code>"Banana"</code> lexicographically.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q115. What does <code>compareTo()</code> return when comparing <code>"Cat"</code> and <code>"Apple"</code>?</h4>
          <p><strong>Answer:</strong> Returns a positive integer because <code>"Cat"</code> comes after <code>"Apple"</code>. </p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q116. How does Dart evaluate String comparison for uppercase vs lowercase letters?</h4>
          <p><strong>Answer:</strong> Uppercase letters have smaller ASCII/Unicode values than lowercase letters (e.g., <code>'Z'.compareTo('a') &lt; 0</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q117. What is the efficiency of string concatenation inside a loop using <code>+</code>?</h4>
          <p><strong>Answer:</strong> O(N^2) time complexity due to creating a new String instance on every iteration.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q118. What class should be used for efficient string building inside loops?</h4>
          <p><strong>Answer:</strong> <code>StringBuffer</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q119. Can a <code>String?</code> (nullable string) call string methods directly without null checks?</h4>
          <p><strong>Answer:</strong> No, you must use null-aware operator <code>str?.toUpperCase()</code> or null check <code>if (str != null)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q120. How do you capitalize the first letter of a String in Dart?</h4>
          <p><strong>Answer:</strong> <code>str.isEmpty ? str : str[0].toUpperCase() + str.substring(1)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q121. How do you reverse a String in Dart?</h4>
          <p><strong>Answer:</strong> <code>str.split('').reversed.join('')</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q122. How do you check if a String is a palindrome?</h4>
          <p><strong>Answer:</strong> Check if <code>str == str.split('').reversed.join('')</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q123. What is the difference between <code>contains()</code> with String vs RegExp?</h4>
          <p><strong>Answer:</strong> String checks exact substring literal; RegExp matches against a dynamic regular expression pattern.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q124. How do you format JSON Strings in Dart?</h4>
          <p><strong>Answer:</strong> Use <code>JsonEncoder.withIndent('  ').convert(jsonObject)</code> from <code>dart:convert</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q125. How do you parse a JSON String into a Dart Map/List?</h4>
          <p><strong>Answer:</strong> Call <code>jsonDecode(jsonString)</code> from <code>dart:convert</code>.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_string_buffer",
      header: "1.5.6 STRINGBUFFER MASTERY Q&A (Q126 – Q160)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> StringBuffer in Dart: Q&A (Q126–Q160)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q126. What is <code>StringBuffer</code> in Dart?</h4>
          <p><strong>Answer:</strong> A mutable buffer class designed for efficiently building and appending String data incrementally.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q127. Why is <code>StringBuffer</code> faster than <code>+</code> string concatenation in loops?</h4>
          <p><strong>Answer:</strong> It appends data into a reusable internal buffer without creating intermediate String objects on every iteration.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q128. What is the time complexity of appending N strings with <code>StringBuffer</code>?</h4>
          <p><strong>Answer:</strong> Amortized O(N) linear time.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q129. How do you create an empty <code>StringBuffer</code>?</h4>
          <p><strong>Answer:</strong> <code>StringBuffer buffer = StringBuffer();</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q130. How do you initialize a <code>StringBuffer</code> with starting content?</h4>
          <p><strong>Answer:</strong> Pass content to the constructor: <code>StringBuffer buffer = StringBuffer("Initial");</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q131. What method appends an object's string representation without adding a newline?</h4>
          <p><strong>Answer:</strong> <code>buffer.write(object)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q132. What method appends an object followed by a newline character?</h4>
          <p><strong>Answer:</strong> <code>buffer.writeln(object)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q133. What happens if <code>buffer.writeln()</code> is called with no arguments?</h4>
          <p><strong>Answer:</strong> It appends just a single newline character (<code>\\n</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q134. How do you append all elements of an Iterable to a <code>StringBuffer</code>?</h4>
          <p><strong>Answer:</strong> Use <code>buffer.writeAll(objects, [separator])</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q135. What is the default separator if <code>separator</code> is omitted in <code>writeAll()</code>?</h4>
          <p><strong>Answer:</strong> An empty string <code>""</code> (elements are concatenated directly).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q136. How do you append a character code (Unicode code point) to a <code>StringBuffer</code>?</h4>
          <p><strong>Answer:</strong> Use <code>buffer.writeCharCode(charCode)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q137. How do you convert the accumulated content of a <code>StringBuffer</code> into a String?</h4>
          <p><strong>Answer:</strong> Call <code>buffer.toString()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q138. How do you clear all accumulated content in a <code>StringBuffer</code>?</h4>
          <p><strong>Answer:</strong> Call <code>buffer.clear()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q139. What does <code>buffer.length</code> return?</h4>
          <p><strong>Answer:</strong> The total number of characters currently stored in the buffer.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q140. What does <code>buffer.isEmpty</code> return?</h4>
          <p><strong>Answer:</strong> Returns <code>true</code> if <code>length == 0</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q141. What does <code>buffer.isNotEmpty</code> return?</h4>
          <p><strong>Answer:</strong> Returns <code>true</code> if <code>length &gt; 0</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q142. Is <code>StringBuffer</code> thread-safe in Dart?</h4>
          <p><strong>Answer:</strong> Dart is single-threaded (event loop based per isolate), so thread safety is guaranteed within an isolate.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q143. Does <code>StringBuffer</code> implement <code>StringSink</code>?</h4>
          <p><strong>Answer:</strong> Yes, <code>StringBuffer</code> implements <code>StringSink</code> interface.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q144. Can non-string objects be passed to <code>buffer.write()</code>?</h4>
          <p><strong>Answer:</strong> Yes, <code>write()</code> automatically converts any Object to a String by calling its <code>toString()</code> method.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q145. What happens if <code>null</code> is passed to <code>buffer.write(null)</code>?</h4>
          <p><strong>Answer:</strong> It appends the string <code>"null"</code> to the buffer.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q146. How does <code>StringBuffer</code> reduce garbage collector (GC) pressure?</h4>
          <p><strong>Answer:</strong> By eliminating temporary short-lived String allocations created during intermediate concatenation steps.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q147. What is the primary use case for <code>StringBuffer</code> in Flutter/Dart development?</h4>
          <p><strong>Answer:</strong> Generating large text files, building dynamic HTML/XML markup, constructing SQL queries, or formatting log streams.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q148. Does calling <code>buffer.toString()</code> clear the buffer?</h4>
          <p><strong>Answer:</strong> No, calling <code>toString()</code> returns a String snapshot while leaving the buffer contents intact.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q149. Can you append to a <code>StringBuffer</code> after calling <code>toString()</code>?</h4>
          <p><strong>Answer:</strong> Yes, you can continue appending additional content with <code>write()</code> after <code>toString()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q150. How do you append a list of integers as CSV formatted text using <code>writeAll()</code>?</h4>
          <p><strong>Answer:</strong> <code>buffer.writeAll([10, 20, 30], ", ")</code> resulting in <code>"10, 20, 30"</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q151. Is <code>StringBuffer</code> suitable for small 2-string concatenations like <code>a + b</code>?</h4>
          <p><strong>Answer:</strong> No, standard interpolation <code>"\$a\$b"</code> or <code>a + b</code> is cleaner and optimized by Dart compiler for simple cases.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q152. Does <code>StringBuffer</code> support index access like <code>buffer[0]</code>?</h4>
          <p><strong>Answer:</strong> No, you must call <code>toString()</code> first to inspect or slice characters.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q153. Does <code>StringBuffer</code> support <code>substring()</code> directly?</h4>
          <p><strong>Answer:</strong> No, <code>StringBuffer</code> does not implement string slicing methods directly.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q154. How do you reset a <code>StringBuffer</code> to re-use it for another task?</h4>
          <p><strong>Answer:</strong> Call <code>buffer.clear()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q155. Can <code>StringBuffer</code> be passed directly to functions accepting <code>StringSink</code>?</h4>
          <p><strong>Answer:</strong> Yes, because <code>StringBuffer</code> implements <code>StringSink</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q156. What does <code>writeCharCode(66)</code> append?</h4>
          <p><strong>Answer:</strong> The letter <code>"B"</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q157. What does <code>writeCharCode(10)</code> append?</h4>
          <p><strong>Answer:</strong> A linefeed (newline) character <code>\\n</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q158. What happens when <code>buffer.clear()</code> is called on an already empty <code>StringBuffer</code>?</h4>
          <p><strong>Answer:</strong> Nothing, it safely remains empty without error.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q159. Can <code>StringBuffer</code> hold multiline strings appended via <code>writeln()</code>?</h4>
          <p><strong>Answer:</strong> Yes, multiple <code>writeln()</code> calls create a multiline string structure.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q160. Summary of <code>StringBuffer</code> best practice:</h4>
          <p><strong>Answer:</strong> Use <code>StringBuffer</code> whenever constructing text dynamically in loops or across multiple operational steps.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_regexp_1",
      header: "1.5.7 REGEXP FUNDAMENTALS Q&A (Q161 – Q180)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Regular Expressions in Dart: Q&A (Part 1: Q161–Q180)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q161. What is the <code>RegExp</code> class in Dart?</h4>
          <p><strong>Answer:</strong> A class representing regular expressions used for pattern matching, validation, text searching, and string manipulation.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q162. Why should raw strings <code>r'...'</code> be used when defining <code>RegExp</code> patterns?</h4>
          <p><strong>Answer:</strong> Raw strings treat backslashes literally, avoiding double-escaping issues (e.g. <code>r'\\d'</code> instead of <code>'\\\\d'</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q163. What does <code>regExp.hasMatch(string)</code> return?</h4>
          <p><strong>Answer:</strong> Returns a boolean <code>true</code> if the pattern matches anywhere within the target string.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q164. What does <code>regExp.firstMatch(string)</code> return?</h4>
          <p><strong>Answer:</strong> Returns the first <code>Match?</code> object found, or <code>null</code> if no match exists.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q165. What does <code>regExp.allMatches(string)</code> return?</h4>
          <p><strong>Answer:</strong> Returns a lazy <code>Iterable&lt;Match&gt;</code> containing all non-overlapping matches found in the input string.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q166. What does <code>regExp.stringMatch(string)</code> return?</h4>
          <p><strong>Answer:</strong> Returns the matched substring directly (<code>String?</code>), or <code>null</code> if no match is found.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q167. How do you access the entire matched text from a <code>Match</code> object?</h4>
          <p><strong>Answer:</strong> Call <code>match.group(0)</code> or <code>match[0]</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q168. How do you access specific captured groups from a <code>Match</code> object?</h4>
          <p><strong>Answer:</strong> Call <code>match.group(1)</code>, <code>match.group(2)</code> for 1-based index captured groups.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q169. What property returns the start index of a <code>Match</code> in the original string?</h4>
          <p><strong>Answer:</strong> <code>match.start</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q170. What property returns the end index of a <code>Match</code> in the original string?</h4>
          <p><strong>Answer:</strong> <code>match.end</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q171. How do you replace all regex pattern occurrences in a String?</h4>
          <p><strong>Answer:</strong> Call <code>text.replaceAll(RegExp(r'pattern'), replacement)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q172. How do you split a String using a <code>RegExp</code> pattern as delimiter?</h4>
          <p><strong>Answer:</strong> Call <code>text.split(RegExp(r'pattern'))</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q173. What character class in <code>RegExp</code> matches any single digit (0–9)?</h4>
          <p><strong>Answer:</strong> <code>\\d</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q174. What character class matches any non-digit?</h4>
          <p><strong>Answer:</strong> <code>\\D</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q175. What character class matches word characters (letters, digits, underscores)?</h4>
          <p><strong>Answer:</strong> <code>\\w</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q176. What character class matches non-word characters?</h4>
          <p><strong>Answer:</strong> <code>\\W</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q177. What character class matches whitespace (spaces, tabs, line breaks)?</h4>
          <p><strong>Answer:</strong> <code>\\s</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q178. What character class matches non-whitespace?</h4>
          <p><strong>Answer:</strong> <code>\\S</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q179. What does the dot <code>.</code> metacharacter match by default?</h4>
          <p><strong>Answer:</strong> Any single character except newline characters (unless <code>dotAll: true</code> is enabled).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q180. How do you match a literal dot <code>.</code> in <code>RegExp</code>?</h4>
          <p><strong>Answer:</strong> Escape it with a backslash: <code>\\.</code>.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_regexp_2",
      header: "1.5.8 REGEXP ADVANCED & VALIDATIONS Q&A (Q181 – Q200)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Regular Expressions in Dart: Q&A (Part 2: Q181–Q200)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q181. What does the <code>^</code> anchor represent in <code>RegExp</code>?</h4>
          <p><strong>Answer:</strong> Matches the beginning of the string (or line if <code>multiLine: true</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q182. What does the <code>$</code> anchor represent in <code>RegExp</code>?</h4>
          <p><strong>Answer:</strong> Matches the end of the string (or line if <code>multiLine: true</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q183. What does the <code>+</code> quantifier mean?</h4>
          <p><strong>Answer:</strong> Matches 1 or more occurrences of the preceding element.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q184. What does the <code>*</code> quantifier mean?</h4>
          <p><strong>Answer:</strong> Matches 0 or more occurrences of the preceding element.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q185. What does the <code>?</code> quantifier mean?</h4>
          <p><strong>Answer:</strong> Matches 0 or 1 occurrence of the preceding element (optional).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q186. What does <code>{n}</code> quantifier mean?</h4>
          <p><strong>Answer:</strong> Matches exactly <code>n</code> occurrences (e.g. <code>\\d{4}</code> matches 4 digits).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q187. What does <code>{n,m}</code> quantifier mean?</h4>
          <p><strong>Answer:</strong> Matches between <code>n</code> and <code>m</code> occurrences inclusive (e.g. <code>\\d{2,4}</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q188. How do you make a <code>RegExp</code> search case-insensitive?</h4>
          <p><strong>Answer:</strong> Pass option <code>caseSensitive: false</code> to <code>RegExp</code> constructor.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q189. What does <code>multiLine: true</code> option enable in <code>RegExp</code>?</h4>
          <p><strong>Answer:</strong> Allows <code>^</code> and <code>$</code> to match the start and end of each line within a multiline string.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q190. What does <code>dotAll: true</code> option enable in <code>RegExp</code>?</h4>
          <p><strong>Answer:</strong> Allows the dot <code>.</code> character class to match newline characters (<code>\\n</code>) as well.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q191. How do character sets <code>[abc]</code> work?</h4>
          <p><strong>Answer:</strong> Matches any single character that is either <code>a</code>, <code>b</code>, or <code>c</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q192. How do negated character sets <code>[^abc]</code> work?</h4>
          <p><strong>Answer:</strong> Matches any single character that is NOT <code>a</code>, <code>b</code>, or <code>c</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q193. What <code>RegExp</code> pattern matches a standard 10-digit phone number?</h4>
          <p><strong>Answer:</strong> <code>RegExp(r'^\\d{10}\$')</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q194. What <code>RegExp</code> pattern matches basic email addresses?</h4>
          <p><strong>Answer:</strong> <code>RegExp(r'^[\\w.-]+@[\\w-]+\\.[A-Za-z]{2,}\$')</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q195. How do you extract all numbers from a String using <code>RegExp</code>?</h4>
          <p><strong>Answer:</strong> <code>RegExp(r'\\d+').allMatches(str).map((m) =&gt; m.group(0))</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q196. How do you remove all non-alphanumeric characters from a String?</h4>
          <p><strong>Answer:</strong> <code>str.replaceAll(RegExp(r'[^a-zA-Z0-9]'), '')</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q197. What does the <code>|</code> operator in <code>RegExp</code> represent?</h4>
          <p><strong>Answer:</strong> Alternation / OR operator (e.g. <code>RegExp(r'cat|dog')</code> matches "cat" or "dog").</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q198. What do parentheses <code>()</code> represent in <code>RegExp</code>?</h4>
          <p><strong>Answer:</strong> Grouping and capturing sub-patterns.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q199. How do non-capturing groups <code>(?:...)</code> work?</h4>
          <p><strong>Answer:</strong> Groups elements for quantifier application without capturing them into match group indexes.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q200. What is a lookahead assertion <code>(?=...)</code> in <code>RegExp</code>?</h4>
          <p><strong>Answer:</strong> A zero-width assertion ensuring that the enclosed pattern matches ahead without including it in the matched result (e.g. checking password strength requirements).</p>
        </div>
      `
    },
    {
      pageId: "p1_operators_fundamentals",
      header: "1.6.1 OPERATORS IN DART (PART 1)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-calculator"></i> 36. Operators in Dart (Part 1: Types 1 to 6)</h2>
        
        <h3 class="section-h3">Definition</h3>
        <p class="topic-paragraph">
          An <strong>operator</strong> is a special symbol that performs an operation on one or more operands and produces a result.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>operator_concept.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  int sum = 10 + 20; // 10 and 20 are operands, + is operator, 10 + 20 is expression, 30 is result
  print('Sum: \$sum');
}</code></pre>
        </div>

        <h3 class="section-h3">Types of Operators in Dart (Types 1 to 6)</h3>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">1. Arithmetic Operators</h4>
        <p class="topic-paragraph">Perform mathematical calculations.</p>
        <table class="content-table">
          <thead>
            <tr>
              <th>Operator</th>
              <th>Name</th>
              <th>Description &amp; Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>+</code></td>
              <td>Addition</td>
              <td>Adds two numbers (<code>10 + 5 == 15</code>)</td>
            </tr>
            <tr>
              <td><code>-</code></td>
              <td>Subtraction</td>
              <td>Subtracts right from left (<code>10 - 5 == 5</code>)</td>
            </tr>
            <tr>
              <td><code>*</code></td>
              <td>Multiplication</td>
              <td>Multiplies two numbers (<code>10 * 5 == 50</code>)</td>
            </tr>
            <tr>
              <td><code>/</code></td>
              <td>Division</td>
              <td>Divides and returns a <code>double</code> (<code>10 / 4 == 2.5</code>)</td>
            </tr>
            <tr>
              <td><code>%</code></td>
              <td>Modulus</td>
              <td>Returns remainder of integer division (<code>10 % 3 == 1</code>)</td>
            </tr>
            <tr>
              <td><code>~/</code></td>
              <td>Integer Division</td>
              <td>Divides and returns truncated integer (<code>10 ~/ 4 == 2</code>)</td>
            </tr>
            <tr>
              <td><code>++</code></td>
              <td>Increment</td>
              <td>Increases value by 1 (<code>a++</code> or <code>++a</code>)</td>
            </tr>
            <tr>
              <td><code>--</code></td>
              <td>Decrement</td>
              <td>Decreases value by 1 (<code>a--</code> or <code>--a</code>)</td>
            </tr>
          </tbody>
        </table>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">2. Assignment Operators</h4>
        <p class="topic-paragraph">Assign values to variables, with shorthand compound variations.</p>
        <p class="topic-paragraph">
          <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>, <code>~/=</code>, <code>&amp;=</code>, <code>|=</code>, <code>^=</code>, <code>&lt;&lt;=</code>, <code>&gt;&gt;=</code>, <code>??=</code>
        </p>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">3. Relational (Comparison) Operators</h4>
        <p class="topic-paragraph">Compare two values and return a boolean result (<code>true</code> / <code>false</code>).</p>
        <p class="topic-paragraph">
          <code>==</code> (Equal), <code>!=</code> (Not Equal), <code>&gt;</code> (Greater than), <code>&lt;</code> (Less than), <code>&gt;=</code> (Greater or equal), <code>&lt;=</code> (Less or equal)
        </p>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">4. Logical Operators</h4>
        <p class="topic-paragraph">Combine or negate boolean expressions.</p>
        <p class="topic-paragraph">
          <code>&amp;&amp;</code> (Logical AND), <code>||</code> (Logical OR), <code>!</code> (Logical NOT)
        </p>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">5. Bitwise Operators</h4>
        <p class="topic-paragraph">Perform operations on individual bits of binary numbers.</p>
        <p class="topic-paragraph">
          <code>&amp;</code> (AND), <code>|</code> (OR), <code>^</code> (XOR), <code>~</code> (NOT), <code>&lt;&lt;</code> (Left Shift), <code>&gt;&gt;</code> (Right Shift), <code>&gt;&gt;&gt;</code> (Unsigned Right Shift)
        </p>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">6. Conditional (Ternary) Operators</h4>
        <p class="topic-paragraph">
          <code>condition ? value1 : value2</code> (Evaluates condition and returns value1 if true, value2 if false)<br>
          <code>??</code> (Null-Coalescing: returns left operand if non-null, else right operand)
        </p>
      `
    },
    {
      pageId: "p1_operators_advanced",
      header: "1.6.2 ADVANCED OPERATORS IN DART (PART 2)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-wand-magic-sparkles"></i> 37. Advanced & Specialized Operators (Part 2: Types 7 to 12)</h2>
        
        <h4 style="color: var(--primary-accent); margin-top: 1rem;">7. Null-Aware Operators</h4>
        <p class="topic-paragraph">Work safely with nullable values to prevent Null Pointer Exceptions.</p>
        <table class="content-table">
          <thead>
            <tr>
              <th>Operator</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>?.</code></td>
              <td>Null-aware Access</td>
              <td>Accesses property/method only if target is not null (e.g. <code>user?.name</code>)</td>
            </tr>
            <tr>
              <td><code>?[]</code></td>
              <td>Null-aware Index Access</td>
              <td>Accesses collection index only if target is not null (e.g. <code>list?[0]</code>)</td>
            </tr>
            <tr>
              <td><code>??</code></td>
              <td>Default Value</td>
              <td>Returns default fallback if left operand is null (e.g. <code>name ?? "Guest"</code>)</td>
            </tr>
            <tr>
              <td><code>??=</code></td>
              <td>Assign if Null</td>
              <td>Assigns value to variable only if it currently holds null (e.g. <code>name ??= "Guest"</code>)</td>
            </tr>
            <tr>
              <td><code>!</code></td>
              <td>Null Assertion</td>
              <td>Casts nullable expression to non-null type (throws runtime error if null)</td>
            </tr>
            <tr>
              <td><code>...?</code></td>
              <td>Null-aware Spread</td>
              <td>Spreads collection elements into another only if list is non-null</td>
            </tr>
          </tbody>
        </table>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">8. Type Test &amp; Cast Operators</h4>
        <p class="topic-paragraph">Check or cast object types at runtime.</p>
        <p class="topic-paragraph">
          <code>is</code> (True if object has specified type), <code>is!</code> (True if object does NOT have type), <code>as</code> (Typecast object to specified subtype)
        </p>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">9. Cascade Operators</h4>
        <p class="topic-paragraph">Perform a sequence of operations on members of the same object without temporary variables.</p>
        <p class="topic-paragraph">
          <code>..</code> (Cascade notation), <code>?..</code> (Null-aware cascade notation)
        </p>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">10. Spread Operators</h4>
        <p class="topic-paragraph">Insert all elements from one collection into another collection.</p>
        <p class="topic-paragraph">
          <code>...</code> (Spread operator), <code>...?</code> (Null-aware spread operator)
        </p>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">11. Object &amp; Member Access Operators</h4>
        <p class="topic-paragraph">
          <code>.</code> (Member access), <code>?.</code> (Null-aware member access), <code>[]</code> (Index access), <code>?[]</code> (Null-aware index access), <code>()</code> (Function call invocation)
        </p>

        <h4 style="color: var(--primary-accent); margin-top: 1rem;">12. Other Operators</h4>
        <p class="topic-paragraph">
          <code>const</code> (Compile-time constant creation), <code>await</code> (Asynchronous Future resolution), <code>=&gt;</code> (Arrow function single-expression return), <code>[]</code> (List/Map index), <code>[]=</code> (Index assignment)
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>advanced_operators.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  // 1. Null-aware assignment
  String? username;
  username ??= 'GuestUser';
  print('Username: \$username');

  // 2. Cascade operator
  final buffer = StringBuffer()
    ..write('Flutter ')
    ..write('Dart ')
    ..writeln('3.0');
  print('Cascade Output:\n\$buffer');

  // 3. Type test
  dynamic val = 42;
  if (val is int) {
    print('Value is integer: \${val.abs()}');
  }
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_conditions_mastery",
      header: "1.6.3 CONDITIONS & DECISION MAKING",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-code-branch"></i> 38. Conditions & Decision Making in Dart</h2>
        
        <h3 class="section-h3">Definition</h3>
        <p class="topic-paragraph">
          <strong>Conditions</strong> are used to make decisions in a program. They evaluate a Boolean expression (<code>true</code> or <code>false</code>) and execute different blocks of code based on the result.
        </p>

        <h3 class="section-h3">Types of Conditional Statements in Dart</h3>

        <div class="qa-card">
          <h4>1. if Statement</h4>
          <p>Executes a block of code only if the condition is <code>true</code>.</p>
          <pre><code class="language-dart">if (condition) {
  // code executed if condition is true
}</code></pre>
        </div>

        <div class="qa-card">
          <h4>2. if...else Statement</h4>
          <p>Executes one block if the condition is <code>true</code>; otherwise, executes another block.</p>
          <pre><code class="language-dart">if (condition) {
  // code if true
} else {
  // code if false
}</code></pre>
        </div>

        <div class="qa-card">
          <h4>3. if...else if...else Statement</h4>
          <p>Checks multiple conditions sequentially.</p>
          <pre><code class="language-dart">if (score &gt;= 90) {
  print('Grade A');
} else if (score &gt;= 80) {
  print('Grade B');
} else {
  print('Grade C');
}</code></pre>
        </div>

        <div class="qa-card">
          <h4>4. Nested if Statement</h4>
          <p>Places one <code>if</code> statement inside another <code>if</code> statement.</p>
          <pre><code class="language-dart">if (isLoggedIn) {
  if (hasPermission) {
    print('Access Granted');
  }
}</code></pre>
        </div>

        <div class="qa-card">
          <h4>5. switch Statement</h4>
          <p>Compares a single expression against multiple matching cases using <code>break</code>.</p>
          <pre><code class="language-dart">switch (day) {
  case 1:
    print('Monday');
    break;
  case 2:
    print('Tuesday');
    break;
  default:
    print('Weekend');
}</code></pre>
        </div>

        <div class="qa-card">
          <h4>6. switch Expression (Dart 3)</h4>
          <p>Returns a value directly from a pattern-matching <code>switch</code> expression.</p>
          <pre><code class="language-dart">String result = switch (day) {
  1 =&gt; "Monday",
  2 =&gt; "Tuesday",
  _ =&gt; "Unknown",
};</code></pre>
        </div>

        <div class="qa-card">
          <h4>7. Ternary (Conditional) Operator (?:)</h4>
          <p>A concise inline form of <code>if...else</code>.</p>
          <pre><code class="language-dart">String result = age &gt;= 18 ? "Adult" : "Minor";</code></pre>
        </div>

        <div class="qa-card">
          <h4>8. Null-Coalescing Operator (??)</h4>
          <p>Returns a fallback value if the left operand evaluates to <code>null</code>.</p>
          <pre><code class="language-dart">String name = userName ?? "Guest";</code></pre>
        </div>

        <div class="qa-card">
          <h4>9. Null-Aware Assignment (??=)</h4>
          <p>Assigns a value to a variable only if it currently holds <code>null</code>.</p>
          <pre><code class="language-dart">name ??= "Guest";</code></pre>
        </div>

        <h3 class="section-h3">Comparison &amp; Logical Operators Summary</h3>
        <table class="content-table">
          <thead>
            <tr>
              <th>Comparison Operator</th>
              <th>Meaning</th>
              <th>Logical Operator</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>==</code></td>
              <td>Equal to</td>
              <td><code>&amp;&amp;</code></td>
              <td>Logical AND</td>
            </tr>
            <tr>
              <td><code>!=</code></td>
              <td>Not equal to</td>
              <td><code>||</code></td>
              <td>Logical OR</td>
            </tr>
            <tr>
              <td><code>&gt;</code></td>
              <td>Greater than</td>
              <td><code>!</code></td>
              <td>Logical NOT</td>
            </tr>
            <tr>
              <td><code>&lt;</code></td>
              <td>Less than</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>&gt;=</code></td>
              <td>Greater than or equal to</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>&lt;=</code></td>
              <td>Less than or equal to</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>conditions.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  int day = 2;
  
  // Dart 3 switch expression
  String dayName = switch (day) {
    1 =&gt; 'Monday',
    2 =&gt; 'Tuesday',
    _ =&gt; 'Other Day',
  };
  print('Day \$day is \$dayName');

  // Ternary check
  int age = 20;
  print('Status: \${age &gt;= 18 ? "Adult" : "Minor"}');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_loops_mastery",
      header: "1.6.4 LOOPS & ITERATION IN DART",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-rotate"></i> 39. Loops & Iteration in Dart</h2>
        
        <h3 class="section-h3">Definition</h3>
        <p class="topic-paragraph">
          A <strong>loop</strong> is a control flow statement that repeatedly executes a block of code as long as a specified condition is <code>true</code> or until all elements in a collection have been processed.
        </p>

        <h3 class="section-h3">Types of Loops in Dart</h3>

        <div class="qa-card">
          <h4>1. for Loop</h4>
          <p>Used when the exact number of iterations is known in advance.</p>
          <pre><code class="language-dart">for (int i = 0; i &lt; 5; i++) {
  print('Iteration \$i');
}</code></pre>
        </div>

        <div class="qa-card">
          <h4>2. for-in Loop</h4>
          <p>Iterates over elements of an Iterable collection (List, Set, etc.).</p>
          <pre><code class="language-dart">final fruits = ['Apple', 'Banana', 'Mango'];
for (var fruit in fruits) {
  print('Fruit: \$fruit');
}</code></pre>
        </div>

        <div class="qa-card">
          <h4>3. forEach() Method</h4>
          <p>Higher-order method provided by iterable collections to execute a function for each element.</p>
          <pre><code class="language-dart">fruits.forEach((fruit) =&gt; print('Item: \$fruit'));</code></pre>
        </div>

        <div class="qa-card">
          <h4>4. while Loop</h4>
          <p>Repeatedly executes code while the condition evaluates to <code>true</code> (condition tested BEFORE execution).</p>
          <pre><code class="language-dart">int count = 0;
while (count &lt; 3) {
  print('Count: \$count');
  count++;
}</code></pre>
        </div>

        <div class="qa-card">
          <h4>5. do...while Loop</h4>
          <p>Executes code block at least once, then continues repeating while condition evaluates to <code>true</code> (condition tested AFTER execution).</p>
          <pre><code class="language-dart">int num = 5;
do {
  print('Number: \$num');
  num++;
} while (num &lt; 5); // Executes 1 time</code></pre>
        </div>

        <h3 class="section-h3">Loop Control Statements</h3>
        <p class="topic-paragraph">
          <strong>1. break:</strong> Immediately terminates loop execution and transfers control to statement following the loop.<br>
          <strong>2. continue:</strong> Skips remaining statements in current iteration and moves directly to next iteration update.
        </p>

        <h3 class="section-h3">Nested Loops &amp; Labeled Loops</h3>
        <p class="topic-paragraph">
          A loop can be placed inside another loop. <strong>Labeled Loops</strong> assign an identifier to an outer loop so <code>break</code> or <code>continue</code> can target a specific outer loop hierarchy.
        </p>

        <pre><code class="language-dart">outerLoop:
for (int i = 1; i &lt;= 3; i++) {
  for (int j = 1; j &lt;= 3; j++) {
    if (i == 2 &amp;&amp; j == 2) break outerLoop; // Breaks entire outer loop!
    print('i=\$i, j=\$j');
  }
}</code></pre>

        <h3 class="section-h3">Asynchronous Loops (await for)</h3>
        <p class="topic-paragraph">
          Iterates asynchronously over events emitted by a Dart <code>Stream</code>.
        </p>

        <pre><code class="language-dart">await for (var value in stream) {
  print('Received Stream Event: \$value');
}</code></pre>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>loops.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  // Labeled loop demo
  outerLoop:
  for (int r = 1; r &lt;= 3; r++) {
    for (int c = 1; c &lt;= 3; c++) {
      if (r == 2 &amp;&amp; c == 2) break outerLoop;
      print('Row \$r - Col \$c');
    }
  }

  // for-in loop over List
  final languages = ['Dart', 'Flutter', 'C++'];
  for (final lang in languages) {
    print('Lang: \$lang');
  }
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p1_qa_operators_1",
      header: "1.7.1 OPERATORS MASTERY Q&A (Q1 – Q25)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> 40. Operators, Conditions & Loops Q&A: Part 1 (Q1–Q25)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q1. What is an operator in Dart?</h4>
          <p><strong>Answer:</strong> A special symbol that performs an operation on one or more operands to produce a calculated result.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q2. What is an operand?</h4>
          <p><strong>Answer:</strong> The data values or variables on which an operator performs its operation (e.g. in <code>a + b</code>, <code>a</code> and <code>b</code> are operands).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q3. What is an expression?</h4>
          <p><strong>Answer:</strong> A combination of operands and operators that evaluates to a single value (e.g. <code>10 + 20</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q4. What are the two unary arithmetic increment operators in Dart?</h4>
          <p><strong>Answer:</strong> Prefix increment (<code>++a</code>) and postfix increment (<code>a++</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q5. What is the difference between prefix <code>++a</code> and postfix <code>a++</code>?</h4>
          <p><strong>Answer:</strong> Prefix <code>++a</code> increments value before returning it; postfix <code>a++</code> returns original value before incrementing.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q6. What return type does division operator <code>/</code> always produce in Dart?</h4>
          <p><strong>Answer:</strong> Always returns a <code>double</code>, even if both operands are integers (e.g. <code>10 / 2 == 5.0</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q7. Which operator performs integer truncating division (<code>~/</code>) in Dart?</h4>
          <p><strong>Answer:</strong> <code>~/</code> (e.g. <code>10 ~/ 3 == 3</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q8. What does the modulus operator <code>%</code> return in Dart?</h4>
          <p><strong>Answer:</strong> Returns the remainder of division (e.g. <code>10 % 3 == 1</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q9. How does the compound assignment operator <code>+=</code> work?</h4>
          <p><strong>Answer:</strong> Adds right value to left variable and assigns result (e.g. <code>a += 5</code> is shorthand for <code>a = a + 5</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q10. How does the compound integer division assignment operator <code>~/=</code> work?</h4>
          <p><strong>Answer:</strong> Performs integer division and assigns truncated result to variable (e.g. <code>a ~/= 2</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q11. What is the return type of relational operators (<code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>)?</h4>
          <p><strong>Answer:</strong> Always returns a <code>bool</code> (<code>true</code> or <code>false</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q12. How does the equality operator <code>==</code> evaluate object value equality in Dart?</h4>
          <p><strong>Answer:</strong> Tests value equality by invoking <code>operator ==</code> method on left operand.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q13. How do you check reference identity to verify if two variables point to the exact same memory instance?</h4>
          <p><strong>Answer:</strong> Use <code>identical(a, b)</code> function from core library.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q14. How does the logical AND operator <code>&amp;&amp;</code> evaluate expressions?</h4>
          <p><strong>Answer:</strong> Returns <code>true</code> only if both operands evaluate to <code>true</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q15. How does the logical OR operator <code>||</code> evaluate expressions?</h4>
          <p><strong>Answer:</strong> Returns <code>true</code> if at least one operand evaluates to <code>true</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q16. What does the logical NOT operator <code>!</code> do in Dart?</h4>
          <p><strong>Answer:</strong> Inverts boolean value (<code>!true == false</code>, <code>!false == true</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q17. How does short-circuit evaluation work with logical AND (<code>&amp;&amp;</code>)?</h4>
          <p><strong>Answer:</strong> If left operand is <code>false</code>, right operand is never evaluated.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q18. How does short-circuit evaluation work with logical OR (<code>||</code>)?</h4>
          <p><strong>Answer:</strong> If left operand is <code>true</code>, right operand is never evaluated.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q19. Which operator performs bitwise AND (<code>&amp;</code>) in Dart?</h4>
          <p><strong>Answer:</strong> <code>&amp;</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q20. Which operator performs bitwise OR (<code>|</code>) in Dart?</h4>
          <p><strong>Answer:</strong> <code>|</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q21. Which operator performs bitwise XOR (<code>^</code>) in Dart?</h4>
          <p><strong>Answer:</strong> <code>^</code> (returns 1 if bits differ, 0 if identical).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q22. Which operator performs bitwise NOT (<code>~</code>) in Dart?</h4>
          <p><strong>Answer:</strong> <code>~</code> (inverts all bits).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q23. What does the bitwise left shift operator <code>&lt;&lt;</code> do?</h4>
          <p><strong>Answer:</strong> Shifts binary bits left by specified count, padding with 0s (equivalent to multiplying by 2^n).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q24. What does the bitwise right shift operator <code>&gt;&gt;</code> do?</h4>
          <p><strong>Answer:</strong> Shifts binary bits right, preserving sign bit (equivalent to integer division by 2^n).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q25. What does the triple-shift unsigned right shift operator <code>&gt;&gt;&gt;</code> do in Dart 2.14+?</h4>
          <p><strong>Answer:</strong> Shifts bits right filling leftmost positions with zeros regardless of sign.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_operators_2",
      header: "1.7.2 NULL-AWARE & SPECIAL OPERATORS Q&A (Q26 – Q50)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Operators in Dart: Q&A (Part 2: Q26–Q50)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q26. What is the ternary operator syntax in Dart?</h4>
          <p><strong>Answer:</strong> <code>condition ? valueIfTrue : valueIfFalse</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q27. What does the null-coalescing operator <code>??</code> do in Dart?</h4>
          <p><strong>Answer:</strong> Returns left operand if not null, otherwise returns right fallback operand (e.g. <code>a ?? b</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q28. What does the null-aware assignment operator <code>??=</code> do?</h4>
          <p><strong>Answer:</strong> Assigns right value to variable only if variable is currently null (e.g. <code>x ??= 10</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q29. What does the null-aware member access operator <code>?.</code> do?</h4>
          <p><strong>Answer:</strong> Accesses member only if target is non-null, evaluating to null if target is null (e.g. <code>user?.name</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q30. What does the null-aware index access operator <code>?[]</code> do?</h4>
          <p><strong>Answer:</strong> Accesses collection element only if collection reference is non-null (e.g. <code>list?[0]</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q31. What is the null assertion operator <code>!</code> (bang operator) in Dart?</h4>
          <p><strong>Answer:</strong> Casts nullable expression <code>T?</code> to non-nullable type <code>T</code> (throws <code>TypeError</code> if null).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q32. What does the null-aware spread operator <code>...?</code> do?</h4>
          <p><strong>Answer:</strong> Spreads collection items into another collection only if collection is non-null.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q33. How does the type test operator <code>is</code> work in Dart?</h4>
          <p><strong>Answer:</strong> Checks if object is an instance of specified type (e.g. <code>obj is String</code> returns bool).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q34. How does the negated type test operator <code>is!</code> work?</h4>
          <p><strong>Answer:</strong> Checks if object is NOT an instance of specified type (e.g. <code>obj is! int</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q35. What does the typecast operator <code>as</code> do in Dart?</h4>
          <p><strong>Answer:</strong> Casts object to target type (throws <code>TypeError</code> if object is incompatible).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q36. Does Dart perform automatic type promotion after a successful <code>is</code> check?</h4>
          <p><strong>Answer:</strong> Yes! After <code>if (x is String)</code>, Dart automatically promotes <code>x</code> to <code>String</code> in that scope.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q37. How does the cascade operator <code>..</code> work in Dart?</h4>
          <p><strong>Answer:</strong> Allows chaining multiple operations on member properties/methods of the same object.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q38. What does the null-aware cascade operator <code>?..</code> do?</h4>
          <p><strong>Answer:</strong> Performs cascade operations only if target object reference is non-null.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q39. What is the collection spread operator <code>...</code> used for?</h4>
          <p><strong>Answer:</strong> Unpacks and inserts all elements of an iterable into another collection literal.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q40. Which operator accesses instance members or calls methods on an object?</h4>
          <p><strong>Answer:</strong> Dot operator <code>.</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q41. Which operator invokes a function or instantiates a constructor?</h4>
          <p><strong>Answer:</strong> Parentheses <code>()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q42. Which operator accesses or assigns values in a List or Map by index/key?</h4>
          <p><strong>Answer:</strong> Index bracket operator <code>[]</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q43. Which operator assigns a value at a specific collection index?</h4>
          <p><strong>Answer:</strong> Index assignment operator <code>[]=</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q44. Which operator defines single-expression arrow functions (<code>=&gt;</code>)?</h4>
          <p><strong>Answer:</strong> Arrow operator <code>=&gt;</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q45. Which keyword operator creates compile-time constant objects and collections?</h4>
          <p><strong>Answer:</strong> <code>const</code> keyword operator.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q46. Which keyword operator pauses execution until a <code>Future</code> completes in an <code>async</code> function?</h4>
          <p><strong>Answer:</strong> <code>await</code> keyword operator.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q47. Can custom Dart classes overload operators using the <code>operator</code> keyword?</h4>
          <p><strong>Answer:</strong> Yes, using <code>operator</code> keyword (e.g. <code>Vector operator +(Vector v)</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q48. Which built-in operators CANNOT be overloaded in Dart?</h4>
          <p><strong>Answer:</strong> <code>!=</code>, <code>&amp;&amp;</code>, <code>||</code>, <code>?.</code>, <code>??</code>, <code>is</code>, <code>as</code>, <code>..</code>, <code>=</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q49. What is the precedence order between arithmetic multiplication <code>*</code> and addition <code>+</code>?</h4>
          <p><strong>Answer:</strong> Multiplication <code>*</code> has higher precedence and is evaluated before addition <code>+</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q50. How can you override operator precedence rules in complex expressions?</h4>
          <p><strong>Answer:</strong> Wrap sub-expressions in parentheses <code>()</code>.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_operators_3",
      header: "1.7.3 OPERATOR PRECEDENCE & OVERLOADING Q&A (Q51 – Q75)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Operators in Dart: Q&A (Part 3: Q51–Q75)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q51. What happens when chaining null-aware accesses like <code>user?.address?.city</code>?</h4>
          <p><strong>Answer:</strong> Short-circuits: if any property in chain is null, entire expression safely evaluates to null.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q52. What is the evaluation result of <code>true || false &amp;&amp; false</code> in Dart?</h4>
          <p><strong>Answer:</strong> Evaluates to <code>true</code> because <code>&amp;&amp;</code> has higher precedence than <code>||</code> (evaluates <code>false &amp;&amp; false</code> first).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q53. What does <code>5 &amp; 3</code> evaluate to in bitwise AND?</h4>
          <p><strong>Answer:</strong> <code>1</code> (binary <code>0101 &amp; 0011 == 0001</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q54. What does <code>5 | 3</code> evaluate to in bitwise OR?</h4>
          <p><strong>Answer:</strong> <code>7</code> (binary <code>0101 | 0011 == 0111</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q55. What does <code>5 ^ 3</code> evaluate to in bitwise XOR?</h4>
          <p><strong>Answer:</strong> <code>6</code> (binary <code>0101 ^ 0011 == 0110</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q56. What does <code>1 &lt;&lt; 3</code> evaluate to in bitwise left shift?</h4>
          <p><strong>Answer:</strong> <code>8</code> (shifts 1 left by 3 bits: <code>1 * 2^3</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q57. What does <code>16 &gt;&gt; 2</code> evaluate to in bitwise right shift?</h4>
          <p><strong>Answer:</strong> <code>4</code> (shifts 16 right by 2 bits: <code>16 / 2^2</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q58. Can operator overloading change the arity (number of operands) of an operator?</h4>
          <p><strong>Answer:</strong> No, binary operators must remain binary and unary operators must remain unary.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q59. What method signature overloads the <code>+</code> operator in a custom class <code>Point</code>?</h4>
          <p><strong>Answer:</strong> <code>Point operator +(Point other) =&gt; Point(x + other.x, y + other.y);</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q60. What method signature overloads the equality operator <code>==</code> in Dart?</h4>
          <p><strong>Answer:</strong> <code>@override bool operator ==(Object other)</code> (must also override <code>hashCode</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q61. What runtime issues occur if you override <code>==</code> without overriding <code>hashCode</code>?</h4>
          <p><strong>Answer:</strong> Causes bugs in hash-based collections like <code>Set</code> and <code>Map</code> (violates hash contract).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q62. What does the <code>identical(a, b)</code> function check in Dart?</h4>
          <p><strong>Answer:</strong> Checks whether two references point to the exact same object instance in memory.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q63. What is the evaluation order of cascade operations (<code>..</code>)?</h4>
          <p><strong>Answer:</strong> From top-to-bottom / left-to-right, returning original target object instance after each member call.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q64. Can cascade operations (<code>..</code>) be nested inside object initialization?</h4>
          <p><strong>Answer:</strong> Yes, nested cascades allow complex object graph initialization.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q65. What is the evaluated result of a cascade expression like <code>obj..doA()..doB()</code>?</h4>
          <p><strong>Answer:</strong> Evaluates to <code>obj</code> instance, ignoring return values of <code>doA()</code> and <code>doB()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q66. What happens if the null assertion operator <code>!</code> is called on a <code>null</code> variable at runtime?</h4>
          <p><strong>Answer:</strong> Throws a runtime <code>TypeError</code> (or <code>NullThrownError</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q67. What is the difference between null-coalescing <code>??</code> and logical OR <code>||</code>?</h4>
          <p><strong>Answer:</strong> <code>??</code> checks for <code>null</code>; <code>||</code> checks for boolean <code>false</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q68. Which operator is used to explicitly cast an object to a subtype?</h4>
          <p><strong>Answer:</strong> Typecast operator <code>as</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q69. What exception is thrown if an <code>as</code> typecast fails at runtime?</h4>
          <p><strong>Answer:</strong> Throws a <code>TypeError</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q70. Why is the <code>is</code> operator preferred over <code>as</code> for safe type checking?</h4>
          <p><strong>Answer:</strong> <code>is</code> returns a boolean flag safely without throwing an exception.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q71. How does type promotion work with an early return check like <code>if (x is! String) return;</code>?</h4>
          <p><strong>Answer:</strong> Dart promotes <code>x</code> to <code>String</code> for all statements following the <code>if</code> block.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q72. Can custom operator overloading alter built-in operator precedence rules?</h4>
          <p><strong>Answer:</strong> Fixed precedence: overloaded operators retain built-in operator precedence rules.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q73. What method signature defines subscript index access <code>[]</code> in custom classes?</h4>
          <p><strong>Answer:</strong> <code>operator [](int index)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q74. What method signature defines subscript assignment <code>[]=</code> in custom classes?</h4>
          <p><strong>Answer:</strong> <code>operator []=(int index, ValueType value)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q75. What is the best practice for using operators in modern Dart code?</h4>
          <p><strong>Answer:</strong> Use null-aware operators (<code>?.</code>, <code>??</code>, <code>??=</code>) and cascades (<code>..</code>) to write clean, crash-resilient code.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_conditions_1",
      header: "1.7.4 CONDITIONS & DECISION MAKING Q&A (Q76 – Q100)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Conditions in Dart: Q&A (Part 1: Q76–Q100)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q76. What is a condition in programming?</h4>
          <p><strong>Answer:</strong> A control statement that evaluates a boolean expression to decide which code path to execute.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q77. Does Dart allow non-boolean truthy/falsy values (like <code>1</code>, <code>0</code>, <code>null</code>, <code>""</code>) in <code>if</code> conditions?</h4>
          <p><strong>Answer:</strong> No! Dart strictly enforces boolean types (<code>bool</code>) in condition expressions (compilation error otherwise).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q78. What is the basic syntax of an <code>if</code> statement in Dart?</h4>
          <p><strong>Answer:</strong> <code>if (condition) { /* code */ }</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q79. When does the <code>else</code> block execute in an <code>if...else</code> statement?</h4>
          <p><strong>Answer:</strong> Executes when the <code>if</code> condition evaluates to <code>false</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q80. How does an <code>if...else if...else</code> conditional chain execute?</h4>
          <p><strong>Answer:</strong> Tests conditions sequentially from top to bottom, executing the first matching <code>true</code> block and skipping the rest.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q81. Is the final <code>else</code> fallback block mandatory in an <code>if...else if</code> structure?</h4>
          <p><strong>Answer:</strong> No, the default <code>else</code> fallback block is optional.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q82. What is a nested <code>if</code> statement in Dart?</h4>
          <p><strong>Answer:</strong> An <code>if</code> statement placed inside the body of another <code>if</code> statement.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q83. Can single-line <code>if</code> statements omit curly braces <code>{}</code> in Dart?</h4>
          <p><strong>Answer:</strong> Yes (e.g. <code>if (isReady) print('Go');</code>), but curly braces are recommended for style guidelines.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q84. What is dead code in conditional statements and how does Dart detect it?</h4>
          <p><strong>Answer:</strong> Code inside a block that can never be reached/executed (e.g. <code>if (false) { ... }</code> generates analyzer warnings).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q85. How do you rewrite <code>if (x != null) y = x;</code> using null-aware operators?</h4>
          <p><strong>Answer:</strong> Use null-coalescing assignment: <code>y ??= x;</code> or <code>y = x ?? defaultVal;</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q86. What is the syntax of the ternary operator (<code>?:</code>) as an inline conditional?</h4>
          <p><strong>Answer:</strong> <code>var result = condition ? expr1 : expr2;</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q87. Can ternary operators (<code>?:</code>) be nested inside one another in Dart?</h4>
          <p><strong>Answer:</strong> Yes (e.g. <code>cond1 ? val1 : (cond2 ? val2 : val3)</code>), though complex nesting reduces readability.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q88. What data types could be evaluated in traditional Dart <code>switch</code> statements?</h4>
          <p><strong>Answer:</strong> Compile-time constants of <code>int</code>, <code>String</code>, <code>enum</code>, or objects implementing <code>==</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q89. Why was the <code>break</code> statement mandatory in traditional Dart <code>switch</code> cases?</h4>
          <p><strong>Answer:</strong> Prevents non-empty case fall-through to subsequent case blocks.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q90. How do empty <code>switch</code> case clauses behave in Dart?</h4>
          <p><strong>Answer:</strong> Empty case statements naturally fall through to the next case (combining multiple match values).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q91. Which keyword specifies the fallback branch in a <code>switch</code> statement?</h4>
          <p><strong>Answer:</strong> <code>default:</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q92. What major enhancements were introduced to <code>switch</code> statements in Dart 3.0?</h4>
          <p><strong>Answer:</strong> Pattern matching, pattern matching expressions (<code>switch</code> expressions), and break elimination.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q93. Is the <code>break</code> statement required in Dart 3 <code>switch</code> statements or expressions?</h4>
          <p><strong>Answer:</strong> No! Fall-through is disabled by default in Dart 3, so <code>break</code> is unnecessary.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q94. What symbol represents the default wildcard match in a Dart 3 <code>switch</code> expression?</h4>
          <p><strong>Answer:</strong> The underscore wildcard <code>_</code> (e.g. <code>_ =&gt; defaultValue</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q95. Which arrow operator is used in Dart 3 <code>switch</code> expressions?</h4>
          <p><strong>Answer:</strong> Fat arrow <code>=&gt;</code> (e.g. <code>case 1 =&gt; "One"</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q96. How do guard clauses using <code>when</code> work in Dart 3 <code>switch</code> patterns?</h4>
          <p><strong>Answer:</strong> Append <code>when</code> clause to case pattern (e.g. <code>case int n when n &gt; 10 =&gt; ...</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q97. Are Dart 3 <code>switch</code> expressions required to be exhaustive?</h4>
          <p><strong>Answer:</strong> Yes! Switch expressions must cover all possible values of input type or include a <code>_</code> wildcard.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q98. How does compiler exhaustiveness checking work for <code>enum</code> types in <code>switch</code>?</h4>
          <p><strong>Answer:</strong> The compiler verifies that every enum value has a corresponding matching case.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q99. What happens if an <code>enum</code> case is omitted from an exhaustive <code>switch</code> expression without a default wildcard?</h4>
          <p><strong>Answer:</strong> Triggers a compile-time error: "The type is not exhaustively matched".</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q100. How do you combine multiple boolean conditions with logical AND (<code>&amp;&amp;</code>) in an <code>if</code> statement?</h4>
          <p><strong>Answer:</strong> Use <code>&amp;&amp;</code> (e.g. <code>if (age &gt;= 18 &amp;&amp; hasId) { ... }</code>).</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_conditions_2",
      header: "1.7.5 ADVANCED CONDITIONS & SWITCH Q&A (Q101 – Q125)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Conditions in Dart: Q&A (Part 2: Q101–Q125)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q101. How do you combine multiple boolean conditions with logical OR (<code>||</code>) in an <code>if</code> statement?</h4>
          <p><strong>Answer:</strong> Use <code>||</code> (e.g. <code>if (isAdmin || isSuperUser) { ... }</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q102. What occurs when short-circuit evaluation triggers in <code>if (A || B)</code>?</h4>
          <p><strong>Answer:</strong> If <code>A</code> evaluates to <code>true</code>, <code>B</code> is never executed/evaluated.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q103. What occurs when short-circuit evaluation triggers in <code>if (A &amp;&amp; B)</code>?</h4>
          <p><strong>Answer:</strong> If <code>A</code> evaluates to <code>false</code>, <code>B</code> is never executed/evaluated.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q104. How do null checks in <code>if</code> statements trigger automatic type promotion?</h4>
          <p><strong>Answer:</strong> <code>if (name != null)</code> automatically promotes <code>String?</code> to non-nullable <code>String</code> inside the block.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q105. Can local variables declared inside an <code>if</code> block be accessed outside that block scope?</h4>
          <p><strong>Answer:</strong> No, local variables are lexically scoped to the block in which they are declared.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q106. What is a guard clause in function control flow?</h4>
          <p><strong>Answer:</strong> Early return check at beginning of function (e.g. <code>if (input == null) return;</code>) to avoid nested <code>if</code> trees.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q107. How does <code>continue labelName;</code> function inside traditional <code>switch</code> cases?</h4>
          <p><strong>Answer:</strong> <code>continue labelName;</code> jumps execution directly to another labeled case in traditional switch statements.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q108. How do relational comparison patterns work in Dart 3 <code>switch</code> cases?</h4>
          <p><strong>Answer:</strong> Matches numbers against comparative operators (e.g. <code>case &gt;= 90 =&gt; 'A'</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q109. How do logical OR (<code>|</code>) patterns work in Dart 3 <code>switch</code> cases?</h4>
          <p><strong>Answer:</strong> Combine multiple patterns using <code>|</code> (e.g. <code>case 'Mon' | 'Tue' =&gt; 'Workday'</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q110. How do logical AND (<code>&amp;</code>) patterns work in Dart 3 <code>switch</code> cases?</h4>
          <p><strong>Answer:</strong> Combine patterns using <code>&amp;</code> (e.g. <code>case int n &amp; &gt; 0 =&gt; 'Positive Int'</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q111. What is pattern destructuring in Dart 3 <code>switch</code> statements?</h4>
          <p><strong>Answer:</strong> Unpacks complex records/objects directly into local variables (e.g. <code>case (var x, var y) =&gt; ...</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q112. Can a Dart 3 <code>switch</code> expression assign its evaluated result directly to a variable?</h4>
          <p><strong>Answer:</strong> Yes! (e.g. <code>final status = switch(code) { 200 =&gt; 'OK', _ =&gt; 'Error' };</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q113. What happens if a traditional <code>switch</code> statement matches no cases and omits a <code>default</code> clause?</h4>
          <p><strong>Answer:</strong> Execution silently falls through past the switch statement without doing anything.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q114. How do <code>sealed</code> class hierarchies enforce exhaustiveness in Dart 3 <code>switch</code> statements?</h4>
          <p><strong>Answer:</strong> The compiler verifies that all direct subtypes of a <code>sealed</code> class are covered in the switch cases.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q115. Can conditions inside <code>if</code> statements perform inline variable assignments?</h4>
          <p><strong>Answer:</strong> Assignment expressions return assigned values, but Dart requires explicit boolean conditions in <code>if(...)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q116. How does collection <code>if</code> function inside List literals?</h4>
          <p><strong>Answer:</strong> Dynamically includes elements based on condition (e.g. <code>[1, 2, if (hasBonus) 3]</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q117. How does collection <code>if-else</code> function inside List literals?</h4>
          <p><strong>Answer:</strong> Chooses between elements (e.g. <code>[if (isAdmin) 'Delete' else 'View']</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q118. What is the operator precedence of logical NOT (<code>!</code>) relative to <code>&amp;&amp;</code> and <code>||</code>?</h4>
          <p><strong>Answer:</strong> <code>!</code> has higher precedence than both <code>&amp;&amp;</code> and <code>||</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q119. What is De Morgan's Law for simplifying <code>!(A &amp;&amp; B)</code>?</h4>
          <p><strong>Answer:</strong> <code>!(A &amp;&amp; B)</code> is logically equivalent to <code>!A || !B</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q120. What is De Morgan's Law for simplifying <code>!(A || B)</code>?</h4>
          <p><strong>Answer:</strong> <code>!(A || B)</code> is logically equivalent to <code>!A &amp;&amp; !B</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q121. Is evaluating <code>flag != false</code> equivalent to <code>flag == true</code>?</h4>
          <p><strong>Answer:</strong> Yes, <code>flag != false</code> is equivalent to <code>flag == true</code> or simply <code>flag</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q122. How do you check if a nullable <code>String?</code> is neither null nor empty?</h4>
          <p><strong>Answer:</strong> <code>if (str != null &amp;&amp; str.isNotEmpty) { ... }</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q123. How does <code>str?.isNotEmpty == true</code> evaluate safely inside an <code>if</code> condition?</h4>
          <p><strong>Answer:</strong> Yes, evaluates to true only if <code>str</code> is non-null AND non-empty.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q124. What does the null-coalescing expression <code>(x ?? false)</code> accomplish inside an <code>if</code> condition?</h4>
          <p><strong>Answer:</strong> Converts nullable boolean <code>bool? x</code> safely to non-null bool defaulting to <code>false</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q125. What is the best practice for writing conditional logic in modern Dart 3?</h4>
          <p><strong>Answer:</strong> Leverage Dart 3 switch expressions, pattern matching, and guard clauses for concise decision-making.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_loops_1",
      header: "1.7.6 LOOPS FUNDAMENTALS Q&A (Q126 – Q150)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Loops in Dart: Q&A (Part 1: Q126–Q150)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q126. What is a loop in programming?</h4>
          <p><strong>Answer:</strong> A control structure that repeatedly executes a block of code based on a condition or collection iteration.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q127. What are the three clauses in a standard <code>for</code> loop header?</h4>
          <p><strong>Answer:</strong> Initialization, condition test, and iteration update (e.g. <code>for (int i = 0; i &lt; 10; i++)</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q128. Is the loop index variable declared in a <code>for</code> loop header scoped locally to that loop?</h4>
          <p><strong>Answer:</strong> Yes, <code>i</code> is scoped locally to the loop block and cannot be accessed outside it.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q129. What happens if the continuation condition in a <code>for</code> loop evaluates to <code>false</code> initially?</h4>
          <p><strong>Answer:</strong> The loop body is skipped entirely and executes 0 times.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q130. How does a <code>for-in</code> loop iterate over collections in Dart?</h4>
          <p><strong>Answer:</strong> A specialized loop for sequentially iterating over elements of an Iterable (e.g. List, Set).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q131. Which collection types can be iterated using <code>for-in</code> loops?</h4>
          <p><strong>Answer:</strong> Any class implementing <code>Iterable&lt;E&gt;</code> interface (List, Set, Queue, etc.).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q132. Can a <code>Map</code> object be iterated directly using <code>for (var x in map)</code>?</h4>
          <p><strong>Answer:</strong> No, you must iterate over <code>map.keys</code>, <code>map.values</code>, or <code>map.entries</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q133. What is the <code>forEach()</code> higher-order method on Dart <code>Iterable</code> collections?</h4>
          <p><strong>Answer:</strong> Higher-order collection method taking a callback function executed for every element.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q134. Can <code>break</code> or <code>continue</code> statements be used inside a <code>forEach()</code> callback function?</h4>
          <p><strong>Answer:</strong> No! <code>break</code> and <code>continue</code> are loop statements and cannot be used inside anonymous callback functions.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q135. How do you skip the rest of a current item iteration inside a <code>forEach()</code> callback?</h4>
          <p><strong>Answer:</strong> Using <code>return;</code> inside callback skips remainder of current element function (acts like <code>continue</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q136. How does an entry-controlled <code>while</code> loop operate in Dart?</h4>
          <p><strong>Answer:</strong> An entry-controlled loop that repeats code while its condition evaluates to <code>true</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q137. When is the continuation condition tested in a <code>while</code> loop?</h4>
          <p><strong>Answer:</strong> Before each iteration (at top of loop).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q138. How does an exit-controlled <code>do-while</code> loop operate in Dart?</h4>
          <p><strong>Answer:</strong> An exit-controlled loop that executes body first, then tests condition.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q139. What is the guaranteed minimum number of times a <code>do-while</code> loop will execute?</h4>
          <p><strong>Answer:</strong> Guaranteed to execute at least 1 time regardless of condition initial value.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q140. What effect does the <code>break</code> statement have when executed inside a loop?</h4>
          <p><strong>Answer:</strong> Immediately terminates loop execution and jumps to statement after loop body.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q141. What effect does the <code>continue</code> statement have when executed inside a loop?</h4>
          <p><strong>Answer:</strong> Skips remaining statements in current iteration and moves directly to next iteration check/update.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q142. What happens if the iteration update step in a <code>for</code> loop is omitted or misconfigured?</h4>
          <p><strong>Answer:</strong> Can cause an infinite loop if termination condition is never reached.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q143. How do you construct an intentional infinite loop in Dart?</h4>
          <p><strong>Answer:</strong> <code>while (true) { /* ... */ }</code> or <code>for (;;) { /* ... */ }</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q144. How do you safely break out of an intentional infinite loop?</h4>
          <p><strong>Answer:</strong> Execute a <code>break;</code> or <code>return;</code> statement conditionally inside body.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q145. What naming convention is standard for index variables in nested loops?</h4>
          <p><strong>Answer:</strong> Outer loop uses <code>i</code>, inner loop uses <code>j</code>, <code>k</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q146. How does <code>break</code> behave inside an un-labeled nested loop?</h4>
          <p><strong>Answer:</strong> Terminates only the innermost loop in which the <code>break</code> statement appears.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q147. How does <code>continue</code> behave inside an un-labeled nested loop?</h4>
          <p><strong>Answer:</strong> Skips to next iteration of innermost loop only.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q148. What is a collection <code>for</code> element inside a List literal?</h4>
          <p><strong>Answer:</strong> Constructs collection elements dynamically by iterating (e.g. <code>[for (var i in items) i * 2]</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q149. Can collection <code>for</code> and collection <code>if</code> expressions be combined in a single List literal?</h4>
          <p><strong>Answer:</strong> Yes! (e.g. <code>[for (var n in list) if (n.isEven) n]</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q150. Why is collection <code>for</code> preferred over <code>list.map().toList()</code> in Flutter UI trees?</h4>
          <p><strong>Answer:</strong> Yes, Flutter design guidelines prefer collection <code>for</code> inside widget lists.</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_loops_2",
      header: "1.7.7 LABELED & ADVANCED LOOPS Q&A (Q151 – Q175)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Loops in Dart: Q&A (Part 2: Q151–Q175)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q151. What is a labeled loop in Dart?</h4>
          <p><strong>Answer:</strong> Assigning an identifier label to a loop (e.g. <code>myLabel: for (...)</code>) to target it with <code>break</code> or <code>continue</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q152. How do you break out of an outer loop from inside a deeply nested inner loop?</h4>
          <p><strong>Answer:</strong> Use labeled break: <code>break outerLoopLabel;</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q153. How do you trigger the next iteration of an outer loop from within an inner loop?</h4>
          <p><strong>Answer:</strong> Use labeled continue: <code>continue outerLoopLabel;</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q154. What exception is thrown if a collection size is modified during <code>for-in</code> iteration?</h4>
          <p><strong>Answer:</strong> Throws a <code>ConcurrentModificationError</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q155. How can you safely remove elements from a List during iteration?</h4>
          <p><strong>Answer:</strong> Use <code>list.removeWhere((item) =&gt; condition)</code> or iterate backwards with index for loop.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q156. How do you iterate over a List accessing both the element index and value simultaneously?</h4>
          <p><strong>Answer:</strong> Use indexed loop <code>for (int i=0; i&lt;list.length; i++)</code> or <code>list.asMap().entries</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q157. What is an asynchronous <code>await for</code> loop in Dart?</h4>
          <p><strong>Answer:</strong> A loop using <code>await for</code> to process values emitted by a <code>Stream</code> asynchronously.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q158. Which keyword must precede <code>for</code> when iterating asynchronously over a <code>Stream</code>?</h4>
          <p><strong>Answer:</strong> <code>await</code> (e.g. <code>await for (var event in stream) { ... }</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q159. Must a function containing an <code>await for</code> loop be marked with the <code>async</code> keyword?</h4>
          <p><strong>Answer:</strong> Yes, function header must have <code>async</code> modifier.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q160. How does executing <code>break</code> inside an <code>await for</code> loop affect stream subscription?</h4>
          <p><strong>Answer:</strong> Immediately cancels stream subscription and exits loop.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q161. How does a synchronous generator function marked with <code>sync*</code> operate?</h4>
          <p><strong>Answer:</strong> Function marked with <code>sync*</code> returning an <code>Iterable</code> using <code>yield</code> statements.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q162. How does an asynchronous generator function marked with <code>async*</code> operate?</h4>
          <p><strong>Answer:</strong> Function marked with <code>async*</code> returning a <code>Stream</code> using <code>yield</code> statements.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q163. What does the <code>yield</code> statement do inside generator loop functions?</h4>
          <p><strong>Answer:</strong> Emits a single value to caller while pausing function execution until next value is requested.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q164. What does the <code>yield*</code> delegate statement do in generator loops?</h4>
          <p><strong>Answer:</strong> Delegates generation by yielding all elements of another Iterable or Stream recursively.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q165. What is the time complexity comparison for iterating N elements between a <code>List</code> and a <code>Set</code>?</h4>
          <p><strong>Answer:</strong> Iteration time complexity is O(N) for both <code>List</code> and <code>Set</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q166. What occurs if the continuation condition is never updated inside a <code>while</code> loop?</h4>
          <p><strong>Answer:</strong> Causes infinite loop that freezes thread/event loop unless interrupted.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q167. Can multiple variables be initialized simultaneously in a <code>for</code> loop header?</h4>
          <p><strong>Answer:</strong> Yes (e.g. <code>for (int i = 0, j = 10; i &lt; j; i++, j--)</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q168. How do you configure a step increment of 2 (e.g., <code>i += 2</code>) in a <code>for</code> loop?</h4>
          <p><strong>Answer:</strong> Update with <code>i += 2</code> (e.g. <code>for (int i = 0; i &lt; 10; i += 2)</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q169. How do you construct a decrementing <code>for</code> loop to iterate backwards from N down to 0?</h4>
          <p><strong>Answer:</strong> <code>for (int i = n; i &gt;= 0; i--)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q170. What is the functional difference between a <code>for-in</code> loop and <code>list.map()</code>?</h4>
          <p><strong>Answer:</strong> <code>for-in</code> executes imperative side-effects; <code>map()</code> lazily transforms elements returning a new Iterable.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q171. Why are transformation operations returned by <code>map()</code> lazily evaluated in Dart?</h4>
          <p><strong>Answer:</strong> Functional operators in Dart evaluate on-demand to save memory allocations.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q172. How do you force the immediate evaluation of a lazily mapped <code>Iterable</code>?</h4>
          <p><strong>Answer:</strong> Call <code>.toList()</code> or <code>.toSet()</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q173. What is the algorithmic time complexity of nested loops with N outer and M inner iterations?</h4>
          <p><strong>Answer:</strong> O(N * M) time complexity.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q174. What is the algorithmic time complexity of quadratic nested loops where N equals M?</h4>
          <p><strong>Answer:</strong> O(N^2) quadratic time complexity.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q175. How can an O(N^2) nested search loop be optimized using <code>Set</code> or <code>Map</code> lookup structures?</h4>
          <p><strong>Answer:</strong> Use a <code>Set</code> or <code>Map</code> lookup to reduce inner loop time from O(N) to O(1).</p>
        </div>
      `
    },
    {
      pageId: "p1_qa_loops_3",
      header: "1.7.8 ADVANCED ITERATION & STREAM LOOPS Q&A (Q176 – Q200)",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-circle-question"></i> Loops in Dart: Q&A (Part 3: Q176–Q200)</h2>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q176. Can a <code>continue</code> statement target another case label inside traditional <code>switch</code> statements?</h4>
          <p><strong>Answer:</strong> Yes, <code>continue caseLabel;</code> jumps execution to another case within traditional switch statements.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q177. How does the Dart garbage collector handle variables declared inside iteration blocks?</h4>
          <p><strong>Answer:</strong> Fresh variable instance is bound per iteration, garbage collected efficiently once iteration scope exits.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q178. What value is captured when an anonymous closure captures a <code>for</code> loop index variable?</h4>
          <p><strong>Answer:</strong> Dart creates a fresh binding per iteration, so each closure captures its iteration's specific value.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q179. How do you iterate over Map entries accessing both keys and values with a <code>for-in</code> loop?</h4>
          <p><strong>Answer:</strong> <code>for (var entry in map.entries) { print('\${entry.key}: \${entry.value}'); }</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q180. How do you iterate over Map entries using the <code>map.forEach()</code> method?</h4>
          <p><strong>Answer:</strong> <code>map.forEach((key, value) =&gt; print('\$key: \$value'));</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q181. What happens to loop execution if an unhandled exception is thrown inside a loop body?</h4>
          <p><strong>Answer:</strong> Unless caught by <code>try-catch</code> inside body, exception unwinds stack and terminates loop immediately.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q182. How do you catch per-item iteration errors without terminating the entire loop?</h4>
          <p><strong>Answer:</strong> Wrap loop body interior code in a <code>try-catch</code> block.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q183. What does the <code>fold()</code> accumulation method do on Dart <code>Iterable</code> collections?</h4>
          <p><strong>Answer:</strong> Iterates collection accumulating a single result starting from an initial value.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q184. How do you calculate the sum of numbers in a list using the <code>fold()</code> method?</h4>
          <p><strong>Answer:</strong> <code>numbers.fold(0, (prev, element) =&gt; prev + element);</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q185. How does the <code>reduce()</code> accumulation method differ from <code>fold()</code> on Iterables?</h4>
          <p><strong>Answer:</strong> Combines elements using first item as initial accumulator (throws error if collection is empty).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q186. How do you verify if ALL elements in a collection satisfy a predicate using <code>every()</code>?</h4>
          <p><strong>Answer:</strong> Use <code>every()</code> method (e.g. <code>numbers.every((n) =&gt; n &gt; 0)</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q187. How do you verify if AT LEAST ONE element satisfies a predicate using <code>any()</code>?</h4>
          <p><strong>Answer:</strong> Use <code>any()</code> method (e.g. <code>numbers.any((n) =&gt; n.isEven)</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q188. How do you filter elements from an <code>Iterable</code> without writing imperative loops?</h4>
          <p><strong>Answer:</strong> Use <code>where()</code> method (e.g. <code>list.where((item) =&gt; condition).toList()</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q189. What does <code>firstWhere()</code> return if no element satisfies the predicate condition?</h4>
          <p><strong>Answer:</strong> Throws <code>StateError</code> unless <code>orElse</code> callback parameter is provided.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q190. How does <code>singleWhere()</code> evaluate element uniqueness in an <code>Iterable</code>?</h4>
          <p><strong>Answer:</strong> Returns single matching element (throws error if 0 or more than 1 elements match).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q191. How do you retrieve the first N items from an <code>Iterable</code> using <code>take()</code>?</h4>
          <p><strong>Answer:</strong> Use <code>list.take(N)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q192. How do you skip the first N items of an <code>Iterable</code> using <code>skip()</code>?</h4>
          <p><strong>Answer:</strong> Use <code>list.skip(N)</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q193. What does the <code>takeWhile()</code> method do on Dart <code>Iterable</code> collections?</h4>
          <p><strong>Answer:</strong> Takes leading elements as long as condition remains true, stopping at first false element.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q194. What does the <code>skipWhile()</code> method do on Dart <code>Iterable</code> collections?</h4>
          <p><strong>Answer:</strong> Skips leading elements as long as condition is true, returning rest of collection starting from first false element.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q195. Can an asynchronous <code>await for</code> stream loop block the main UI thread in Flutter?</h4>
          <p><strong>Answer:</strong> No, because <code>await</code> yields control back to event loop while waiting for stream events.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q196. How do broadcast streams handle multiple simultaneous <code>await for</code> loops?</h4>
          <p><strong>Answer:</strong> Broadcast streams allow multiple listeners to listen asynchronously simultaneously.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q197. What occurs if a single-subscription stream is listened to by multiple <code>await for</code> loops?</h4>
          <p><strong>Answer:</strong> Throws a <code>StateError: Stream has already been listened to</code>.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q198. How do collection spread operators (<code>...</code>) and collection <code>for</code> loops interact inside List literals?</h4>
          <p><strong>Answer:</strong> You can embed spread operators inside collection for loops (e.g. <code>[for (var sub in lists) ...sub]</code>).</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q199. What is recursive function execution and how does it compare to iterative loops?</h4>
          <p><strong>Answer:</strong> A function calling itself; can replace loops but risks <code>StackOverflowError</code> if call depth is large.</p>
        </div>

        <div class="qa-card">
          <h4><i class="fa-solid fa-circle-question"></i> Q200. What is the comprehensive summary of control flow best practices in Dart?</h4>
          <p><strong>Answer:</strong> Combine modern operators, sound boolean conditions, collection loops, and functional methods to build performant, readable applications.</p>
        </div>
      `
    }
  ]
};
