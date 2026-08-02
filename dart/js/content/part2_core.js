/**
 * Dart Cookbook - Part 2: Core Dart
 * Topics: Function, Function advance, List, Set, Map
 */
window.part2Content = {
  partId: 2,
  title: "Part 2: Core Dart Engineering",
  pages: [
    {
      pageId: "p2_cover",
      header: "PART 2: CORE DART",
      content: `
        <div class="chapter-title-page">
          <div class="chapter-number">CHAPTER 02</div>
          <h1 class="chapter-heading">Core Dart Data Structures & Functions</h1>
          <p class="chapter-subtitle">Explore first-class functions, anonymous closures, typedefs, and high-performance collection types: Lists, Sets, and Maps.</p>
        </div>
      `
    },
    {
      pageId: "p2_functions",
      header: "2.1 FUNCTIONS & ADVANCED FUNCTIONS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-gears"></i> 1. Functions & Parameters</h2>
        <p class="topic-paragraph">
          Functions in Dart are first-class objects. They can be assigned to variables, passed as arguments, or returned from other functions.
        </p>

        <h3 class="section-h3">Positional vs Named Parameters</h3>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>functions.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">// Named parameters with required and default values
String buildUser({required String name, int age = 25, String role = 'Dev'}) {
  return '$name ($age) - $role';
}

// Arrow function syntax for single expressions
int multiply(int a, int b) => a * b;

void main() {
  print(buildUser(name: 'Alice', role: 'Architect'));
  print('Product: \${multiply(6, 7)}');
}</code></pre>
        </div>

        <h3 class="section-h3">Advanced Functions: Closures & Typedefs</h3>
        <p class="topic-paragraph">
          A <code>closure</code> is a function object that has access to variables in its lexical scope, even when the function is used outside its original scope.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>closures.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">typedef MathOp = int Function(int a, int b);

Function makeAdder(int addBy) {
  return (int i) => i + addBy; // Lexical closure
}

void main() {
  final add5 = makeAdder(5);
  print('Add 5 to 10: \${add5(10)}'); // Outputs 15

  MathOp op = (x, y) => x + y;
  print('Typedef result: \${op(20, 30)}');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p2_collections",
      header: "2.2 LIST, SET & MAP",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-layer-group"></i> 2. Core Collections: List, Set & Map</h2>
        
        <h3 class="section-h3">1. List (Ordered Indexable Group)</h3>
        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>list_operations.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  final numbers = [10, 20, 30, 40];
  numbers.add(50);
  
  // Spread operator (...) and collection if
  bool hasBonus = true;
  final updated = [0, ...numbers, if (hasBonus) 99];
  
  print('List: $updated');
  print('Filtered: \${updated.where((n) => n > 25).toList()}');
}</code></pre>
        </div>

        <h3 class="section-h3">2. Set (Unordered Unique Elements)</h3>
        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>set_operations.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  final tags = {'dart', 'flutter', 'web', 'dart'}; // duplicates ignored
  tags.add('mobile');
  
  final other = {'web', 'backend'};
  print('Intersection: \${tags.intersection(other)}');
  print('Union: \${tags.union(other)}');
}</code></pre>
        </div>

        <h3 class="section-h3">3. Map (Key-Value Associations)</h3>
        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>map_operations.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">void main() {
  final user = <String, dynamic>{
    'name': 'Sarah',
    'score': 98,
    'isAdmin': true
  };
  
  user['level'] = 5;
  user.putIfAbsent('score', () => 100);
  
  user.forEach((key, val) => print('$key: $val'));
}</code></pre>
        </div>
      `
    }
  ]
};
