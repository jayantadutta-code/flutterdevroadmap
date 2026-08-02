/**
 * Dart Cookbook - Part 6: Advance
 * Topics: Generics, Extension, Lambda + functional programming, File handling, Dart 3 features (Records, Patterns, Class Modifiers, Sealed Classes)
 */
window.part6Content = {
  partId: 6,
  title: "Part 6: Advance",
  pages: [
    {
      pageId: "p6_cover",
      header: "PART 6: ADVANCE",
      content: `
        <div class="chapter-title-page">
          <div class="chapter-number">CHAPTER 06</div>
          <h1 class="chapter-heading">Advanced Dart & Dart 3 Architecture</h1>
          <p class="chapter-subtitle">Unlock compile-time generics, extension methods, functional collection pipelines, file I/O operations, and cutting-edge Dart 3 Records, Patterns, and Sealed Class Modifiers.</p>
        </div>
      `
    },
    {
      pageId: "p6_generics_extensions",
      header: "6.1 GENERICS & EXTENSION METHODS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-shapes"></i> 1. Generics & Extension Methods</h2>
        <p class="topic-paragraph">
          Generics enforce type safety while allowing code reuse. Extension methods extend existing classes with custom functionality without subclassing.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>generics_extensions.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">// Generic Stack class with bounds
class DataStack<T extends num> {
  final List<T> _items = [];
  void push(T item) => _items.add(item);
  T pop() => _items.removeLast();
}

// Extension on String
extension StringUtils on String {
  String toTitleCase() => '\${this[0].toUpperCase()}\${substring(1)}';
  bool get isNumerical => int.tryParse(this) != null;
}

void main() {
  final stack = DataStack<double>();
  stack.push(10.5);
  print('Popped: \${stack.pop()}');

  print('dart'.toTitleCase()); // 'Dart'
  print('42'.isNumerical); // true
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p6_functional_file",
      header: "6.2 FUNCTIONAL PROGRAMMING & FILE HANDLING",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-filter"></i> 2. Functional Programming & File I/O</h2>
        <p class="topic-paragraph">
          Use higher-order functions like <code>map</code>, <code>where</code>, <code>fold</code>, <code>reduce</code>, and <code>expand</code> for clean declarative data pipelines.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>functional_pipeline.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  final numbers = [1, 2, 3, 4, 5, 6];

  // Pipeline: filter evens -> square -> sum
  final sumOfSquaredEvens = numbers
      .where((n) => n % 2 == 0)
      .map((n) => n * n)
      .fold(0, (prev, curr) => prev + curr);

  print('Result: $sumOfSquaredEvens'); // 4 + 16 + 36 = 56
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p6_dart3_features",
      header: "6.3 DART 3: RECORDS, PATTERNS & SEALED CLASSES",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-bolt"></i> 3. Dart 3 Features: Modern Language Features</h2>
        <p class="topic-paragraph">
          Dart 3 introduced anonymous multi-value <strong>Records</strong>, powerful <strong>Pattern Matching</strong>, and structural class modifiers (<code>sealed</code>, <code>final</code>, <code>base</code>, <code>interface</code>).
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>dart3_features.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">// Sealed class for exhaustive pattern matching
sealed class ApiResponse {}

class Success extends ApiResponse {
  final String data;
  Success(this.data);
}

class Failure extends ApiResponse {
  final String error;
  Failure(this.error);
}

// Record return type: (int, String)
(int code, String msg) getHttpResponse() {
  return (200, 'OK');
}

void main() {
  // Destructuring Record
  final (code, msg) = getHttpResponse();
  print('HTTP Response: $code $msg');

  // Exhaustive Switch Pattern Matching (No default needed!)
  ApiResponse response = Success('Payload loaded');
  
  final statusMsg = switch (response) {
    Success(data: final d) => 'Success: $d',
    Failure(error: final e) => 'Failed with: $e',
  };

  print(statusMsg);
}</code></pre>
        </div>
      `
    }
  ]
};
