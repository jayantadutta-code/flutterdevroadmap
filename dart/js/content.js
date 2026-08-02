/* ==========================================================================
   Dart Cookbook - 7 Main Parts & 37 Subtopics Curriculum Data
   ========================================================================== */

const DART_MODULES = [
  {
    id: 1,
    chapterNum: "Part 1",
    title: "Basics (10 Topics)",
    summary: "Introduction, Comments, Variables, Numbers, Strings, RegEx, StringBuffer, Operators, Conditions, Loops.",
    pageLeft: `
      <div class="context-index-card">
        <h3><i class="fa-solid fa-list-ol"></i> Table of Contents (7 Parts)</h3>
        <div class="context-grid">
          <button class="context-btn active" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(0)">Part 1: Basics</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(1)">Part 2: Core Dart</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(2)">Part 3: OOP</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(3)">Part 4: Safety & Control</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(4)">Part 5: Asynchronous</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(5)">Part 6: Advance</button>
          <button class="context-btn" onclick="if(window.flipbookEngine) window.flipbookEngine.jumpToModule(6)">Part 7: Concurrency</button>
        </div>
      </div>

      <h2 class="page-h2">1.1 Introduction to Dart</h2>
      <p class="page-p">
        <strong>Dart</strong> is a client-optimized, strongly-typed programming language developed by Google. It powers Flutter for building multi-platform apps (iOS, Android, Web, Desktop). Dart compiles to ARM/x64 machine code for native performance and JavaScript/WebAssembly for web.
      </p>

      <pre class="book-code-block"><span class="code-header-badge">Hello World</span><code>void main() {
  print('Welcome to Dart Programming!');
}</code></pre>

      <h2 class="page-h2">1.2 Comments</h2>
      <p class="page-p">Dart supports single-line, multi-line, and documentation comments.</p>
      <pre class="book-code-block"><span class="code-header-badge">Comment Types</span><code>// Single-line comment

/* Multi-line
   comment block */

/// Documentation comment for doc generators
void calculateScore() {}</code></pre>

      <h2 class="page-h2">1.3 Variables & Data Types</h2>
      <p class="page-p">Dart features sound type inference with <code>var</code>, plus explicit types (<code>int</code>, <code>String</code>, <code>bool</code>), <code>final</code> (single assignment at runtime), and <code>const</code> (compile-time constant).</p>
      <pre class="book-code-block"><span class="code-header-badge">Variables</span><code>var name = 'Alex'; // Inferred as String
int age = 25;
final DateTime createdAt = DateTime.now(); // Runtime const
const double pi = 3.14159; // Compile-time const</code></pre>

      <h2 class="page-h2">1.4 Numbers</h2>
      <p class="page-p">Dart numbers inherit from <code>num</code>: <code>int</code> (64-bit integer) and <code>double</code> (64-bit IEEE 754 float).</p>
      <pre class="book-code-block"><span class="code-header-badge">Number Methods</span><code>int val = int.parse('42');
double rate = 9.99;
print(val.isEven); // true
print(rate.round()); // 10</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">1.5 Strings</h2>
      <p class="page-p">Strings are UTF-16 code unit sequences. Supports string interpolation (<code>$var</code>, <code>${expr}</code>) and raw strings (<code>r'...'</code>).</p>
      <pre class="book-code-block"><span class="code-header-badge">String Interpolation</span><code>String framework = 'Flutter';
String msg = 'I love $framework and Dart ${2 + 1}.0!';
String multiline = '''
Line 1
Line 2''';</code></pre>

      <h2 class="page-h2">1.6 Regular Expressions (RegExp)</h2>
      <p class="page-p">Dart uses <code>RegExp</code> for pattern matching, validation, and search/replace.</p>
      <pre class="book-code-block"><span class="code-header-badge">RegExp Example</span><code>final emailRegExp = RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
bool isValid = emailRegExp.hasMatch('dev@flutter.dev'); // true</code></pre>

      <h2 class="page-h2">1.7 StringBuffer</h2>
      <p class="page-p">Efficiently constructs strings inside loops without creating intermediate string objects in memory.</p>
      <pre class="book-code-block"><span class="code-header-badge">StringBuffer</span><code>var sb = StringBuffer();
sb.write('Flutter ');
sb.writeAll(['is ', 'awesome!']);
print(sb.toString()); // Flutter is awesome!</code></pre>

      <h2 class="page-h2">1.8 Operators</h2>
      <p class="page-p">Includes arithmetic, equality, relational, cascade (<code>..</code>), null-aware (<code>??</code>, <code>??=</code>, <code>?.</code>).</p>
      <pre class="book-code-block"><span class="code-header-badge">Operators</span><code>int a = 10 ~/ 3; // Truncating division = 3
String? name;
String user = name ?? 'Guest'; // Null-coalescing</code></pre>

      <h2 class="page-h2">1.9 Conditions & 1.10 Loops</h2>
      <pre class="book-code-block"><span class="code-header-badge">Control Flow</span><code>// Condition
if (age >= 18) print('Adult'); else print('Minor');

// Loops
for (var i = 0; i < 3; i++) { print('Count: $i'); }
for (var item in ['A', 'B']) { print(item); }</code></pre>
    `
  },
  {
    id: 2,
    chapterNum: "Part 2",
    title: "Core Dart (5 Topics)",
    summary: "Function, Function Advance, List, Set, Map.",
    pageLeft: `
      <h2 class="page-h2">2.1 Functions</h2>
      <p class="page-p">Functions are first-class objects in Dart. They can be assigned to variables or passed as parameters.</p>
      <pre class="book-code-block"><span class="code-header-badge">Function & Arrow Syntax</span><code>int add(int a, int b) {
  return a + b;
}

// Arrow Syntax (single line expressions)
int multiply(int a, int b) => a * b;</code></pre>

      <h2 class="page-h2">2.2 Function Advance</h2>
      <p class="page-p">Dart supports positional parameters, named parameters (with <code>required</code> & default values), and higher-order functions.</p>
      <pre class="book-code-block"><span class="code-header-badge">Named & Optional Parameters</span><code>// Named parameters with default values
void createUser({required String name, int age = 18, String? role}) {
  print('$name ($age) - Role: ${role ?? "User"}');
}

void main() {
  createUser(name: 'Alex', role: 'Admin');
}</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">2.3 Lists</h2>
      <p class="page-p">An ordered collection of objects (Arrays). Supports collection <code>if</code>, collection <code>for</code>, and spread operator (<code>...</code>).</p>
      <pre class="book-code-block"><span class="code-header-badge">List Methods & Spreads</span><code>List<int> nums = [1, 2, 3];
nums.add(4);

bool includeExtra = true;
List<int> combined = [
  0,
  ...nums,
  if (includeExtra) 5
]; // [0, 1, 2, 3, 4, 5]</code></pre>

      <h2 class="page-h2">2.4 Sets</h2>
      <p class="page-p">An unordered collection of unique items.</p>
      <pre class="book-code-block"><span class="code-header-badge">Set Operations</span><code>Set<String> tags = {'dart', 'flutter', 'dart'};
print(tags.length); // 2 (duplicates ignored)

Set<String> extra = {'flutter', 'web'};
print(tags.union(extra)); // {'dart', 'flutter', 'web'}</code></pre>

      <h2 class="page-h2">2.5 Maps</h2>
      <p class="page-p">An object that associates keys and values. Keys must be unique.</p>
      <pre class="book-code-block"><span class="code-header-badge">Map Manipulation</span><code>Map<String, int> scores = {'Alex': 95, 'Sam': 88};
scores['Taylor'] = 92;
scores.putIfAbsent('Jordan', () => 90);

scores.forEach((key, val) => print('$key: $val'));</code></pre>
    `
  },
  {
    id: 3,
    chapterNum: "Part 3",
    title: "OOP (7 Topics)",
    summary: "Classes & Objects, Constructors, Inheritance, Abstract classes, Interfaces, Mixins, Static & Constant members.",
    pageLeft: `
      <h2 class="page-h2">3.1 Classes and Objects</h2>
      <p class="page-p">Dart is an object-oriented language with classes and mixin-based inheritance.</p>
      <pre class="book-code-block"><span class="code-header-badge">Class Declaration</span><code>class Car {
  String brand;
  int speed;

  Car(this.brand, this.speed);

  void drive() => print('$brand driving at $speed km/h');
}</code></pre>

      <h2 class="page-h2">3.2 Constructors</h2>
      <p class="page-p">Supports generative, named, redirecting, <code>const</code>, and <code>factory</code> constructors.</p>
      <pre class="book-code-block"><span class="code-header-badge">Constructor Types</span><code>class Point {
  final double x, y;
  const Point(this.x, this.y); // Const constructor

  Point.origin() : this(0, 0); // Named & redirecting

  factory Point.fromJson(Map<String, dynamic> json) {
    return Point(json['x'] as double, json['y'] as double);
  }
}</code></pre>

      <h2 class="page-h2">3.3 Inheritance</h2>
      <p class="page-p">Use <code>extends</code> to create a subclass, and <code>super</code> to access parent members.</p>
      <pre class="book-code-block"><span class="code-header-badge">Subclassing</span><code>class Animal {
  void speak() => print('Animal sound');
}

class Dog extends Animal {
  @override
  void speak() => print('Bark!');
}</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">3.4 Abstract Classes & 3.5 Interfaces</h2>
      <p class="page-p">Abstract classes cannot be instantiated. Every class implicitly defines an interface!</p>
      <pre class="book-code-block"><span class="code-header-badge">Abstract & Interface</span><code>abstract class Shape {
  double get area; // Abstract getter
}

class Circle implements Shape {
  final double radius;
  Circle(this.radius);

  @override
  double get area => 3.14159 * radius * radius;
}</code></pre>

      <h2 class="page-h2">3.6 Mixins</h2>
      <p class="page-p">Mixins allow reusing code in multiple class hierarchies without subclassing. Use <code>mixin</code> and <code>with</code>.</p>
      <pre class="book-code-block"><span class="code-header-badge">Mixin Example</span><code>mixin Swimmer {
  void swim() => print('Swimming fast!');
}

class Duck extends Animal with Swimmer {}

void main() {
  Duck().swim(); // Swimming fast!
}</code></pre>

      <h2 class="page-h2">3.7 Static and Constant Members</h2>
      <p class="page-p"><code>static</code> variables and methods are shared across all instances of a class.</p>
      <pre class="book-code-block"><span class="code-header-badge">Static Members</span><code>class AppConfig {
  static const String appName = 'Flutter Roadmap';
  static int buildNumber = 101;

  static void printVersion() => print('$appName v$buildNumber');
}</code></pre>
    `
  },
  {
    id: 4,
    chapterNum: "Part 4",
    title: "Safety & Control (3 Topics)",
    summary: "Null Safety, Exception Handling, Enums.",
    pageLeft: `
      <h2 class="page-h2">4.1 Sound Null Safety</h2>
      <p class="page-p">Dart's null safety is sound: types are non-nullable by default unless explicitly marked with <code>?</code>.</p>
      <pre class="book-code-block"><span class="code-header-badge">Null Safety Operators</span><code>String? nickname; // Nullable String
late String description; // Initialized later

void init() {
  description = 'Dart Cookbook';
}

print(nickname?.length); // Null-aware call
String display = nickname ?? 'No Nickname'; // Coalescing
// String forced = nickname!; // Assertion operator (throws if null)</code></pre>

      <h2 class="page-h2">4.2 Exception Handling</h2>
      <p class="page-p">Dart provides <code>try</code>, <code>on</code>, <code>catch</code>, <code>finally</code>, and <code>throw</code> for robust error management.</p>
      <pre class="book-code-block"><span class="code-header-badge">Try-Catch-Finally</span><code>try {
  int result = 10 ~/ 0;
} on IntegerDivisionByZeroException catch (e) {
  print('Caught division by zero!');
} catch (e, stackTrace) {
  print('Unexpected error: $e');
} finally {
  print('Cleanup executed always.');
}</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">4.3 Enums & Enhanced Enums</h2>
      <p class="page-p">Enhanced enums (Dart 2.17+) support custom fields, constructors, getters, and methods!</p>
      <pre class="book-code-block"><span class="code-header-badge">Enhanced Enum</span><code>enum Status {
  pending(100, 'Processing'),
  success(200, 'Completed'),
  error(500, 'Failed');

  final int code;
  final String label;
  const Status(this.code, this.label);

  bool get isDone => this == Status.success || this == Status.error;
}

void main() {
  var st = Status.success;
  print('${st.label} (Code ${st.code}) - Done? ${st.isDone}');
}</code></pre>

      <div class="tip-box">
        <i class="fa-solid fa-lightbulb"></i>
        <strong>Best Practice:</strong> Always handle all enum values in <code>switch</code> statements so compiler checks enforce completeness.
      </div>
    `
  },
  {
    id: 5,
    chapterNum: "Part 5",
    title: "Asynchronous (6 Topics)",
    summary: "Futures, Async, Await, Stream, Generators async*, Event loop.",
    pageLeft: `
      <h2 class="page-h2">5.1 Futures, 5.2 Async & 5.3 Await</h2>
      <p class="page-p">A <code>Future</code> represents a computation that completes asynchronously with a value or error.</p>
      <pre class="book-code-block"><span class="code-header-badge">Future & Async/Await</span><code>Future<String> fetchUserData() async {
  await Future.delayed(Duration(seconds: 1));
  return 'User: Alex';
}

void main() async {
  print('Fetching...');
  String user = await fetchUserData();
  print('Result: $user');
}</code></pre>

      <h2 class="page-h2">5.4 Streams</h2>
      <p class="page-p">A <code>Stream</code> is an asynchronous sequence of data events (single-subscription or broadcast).</p>
      <pre class="book-code-block"><span class="code-header-badge">Stream & Controller</span><code>import 'dart:async';

final controller = StreamController<int>();

controller.stream.listen((data) => print('Stream Data: $data'));

controller.add(10);
controller.add(20);
controller.close();</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">5.5 Generators (sync* & async*)</h2>
      <p class="page-p">Generators produce sequences lazily: <code>sync*</code> returns <code>Iterable</code>, <code>async*</code> returns <code>Stream</code>.</p>
      <pre class="book-code-block"><span class="code-header-badge">Async Generator</span><code>Stream<int> countStream(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(milliseconds: 300));
    yield i; // Emit item to stream
  }
}

void main() async {
  await for (var num in countStream(3)) {
    print('Yielded: $num');
  }
}</code></pre>

      <h2 class="page-h2">5.6 The Event Loop</h2>
      <p class="page-p">Dart runs single-threaded with an Event Loop managing <strong>Microtask Queue</strong> (higher priority) and <strong>Event Queue</strong> (I/O, timers).</p>
      <pre class="book-code-block"><span class="code-header-badge">Queue Execution Order</span><code>void main() {
  print('1. Sync Start');
  Future(() => print('4. Event Queue'));
  scheduleMicrotask(() => print('3. Microtask Queue'));
  print('2. Sync End');
}
// Output order: 1, 2, 3, 4</code></pre>
    `
  },
  {
    id: 6,
    chapterNum: "Part 6",
    title: "Advance (5 Topics)",
    summary: "Generics, Extension, Lambda + FP, File handling, Dart 3 features.",
    pageLeft: `
      <h2 class="page-h2">6.1 Generics</h2>
      <p class="page-p">Generics ensure type safety across classes, methods, and data structures with optional bounds.</p>
      <pre class="book-code-block"><span class="code-header-badge">Generic Class</span><code>class Box<T extends num> {
  T value;
  Box(this.value);

  T add(T other) => (value + other) as T;
}</code></pre>

      <h2 class="page-h2">6.2 Extension Methods</h2>
      <p class="page-p">Add new functionality to existing libraries and types without inheritance.</p>
      <pre class="book-code-block"><span class="code-header-badge">Extension on String</span><code>extension StringUtils on String {
  String get capitalize => 
    isEmpty ? '' : '${this[0].toUpperCase()}${substring(1)}';
}

print('flutter'.capitalize); // Flutter</code></pre>

      <h2 class="page-h2">6.3 Lambda & Functional Programming</h2>
      <p class="page-p">Higher-order methods like <code>map</code>, <code>where</code>, <code>fold</code>, <code>reduce</code> enable functional pipelines.</p>
      <pre class="book-code-block"><span class="code-header-badge">FP Pipeline</span><code>List<int> numbers = [1, 2, 3, 4, 5];
int sumOfEvens = numbers
  .where((n) => n.isEven)
  .map((n) => n * n)
  .fold(0, (prev, curr) => prev + curr); // 4 + 16 = 20</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">6.4 File Handling (dart:io)</h2>
      <p class="page-p">Read and write files synchronously or asynchronously using <code>dart:io</code>.</p>
      <pre class="book-code-block"><span class="code-header-badge">File Read & Write</span><code>import 'dart:io';

Future<void> saveLog(String message) async {
  final file = File('app.log');
  await file.writeAsString('$message\n', mode: FileMode.append);
  String contents = await file.readAsString();
  print('Log: $contents');
}</code></pre>

      <h2 class="page-h2">6.5 Dart 3 Features</h2>
      <p class="page-p">Dart 3 introduces Records, Patterns, Switch Expressions, and Sealed class hierarchies.</p>
      <pre class="book-code-block"><span class="code-header-badge">Records, Patterns & Switch</span><code>// Records
(String, int) getUser() => ('Alex', 25);

// Switch Expression & Pattern Matching
String describe(Object obj) => switch (obj) {
  (String name, int age) => 'User $name is $age',
  int n when n > 0 => 'Positive integer $n',
  _ => 'Unknown'
};

void main() {
  final user = getUser();
  print(describe(user)); // User Alex is 25
}</code></pre>
    `
  },
  {
    id: 7,
    chapterNum: "Part 7",
    title: "Concurrency (1 Topic)",
    summary: "Isolates & Background Thread Processing.",
    pageLeft: `
      <h2 class="page-h2">7.1 Isolates</h2>
      <p class="page-p">
        Dart isolates are independent threads with their own private memory heaps and event loops. Because isolates share no memory, they communicate exclusively via message passing (ports).
      </p>

      <pre class="book-code-block"><span class="code-header-badge">Isolate.run (Dart 2.19+)</span><code>import 'dart:isolate';

// Heavy CPU computation function
int heavyFibonacci(int n) {
  if (n <= 1) return n;
  return heavyFibonacci(n - 1) + heavyFibonacci(n - 2);
}

void main() async {
  print('Starting heavy computation on background Isolate...');
  
  // Spawns isolate, runs function, returns result without blocking main UI thread
  int result = await Isolate.run(() => heavyFibonacci(40));
  
  print('Fibonacci result: $result');
}</code></pre>
    `,
    pageRight: `
      <h2 class="page-h2">Bi-directional Isolate Communication</h2>
      <p class="page-p">Use <code>ReceivePort</code> and <code>SendPort</code> for persistent long-running background workers.</p>

      <pre class="book-code-block"><span class="code-header-badge">ReceivePort & SendPort</span><code>import 'dart:isolate';

void worker(SendPort mainSendPort) {
  final workerReceivePort = ReceivePort();
  mainSendPort.send(workerReceivePort.sendPort);

  workerReceivePort.listen((message) {
    print('Worker received: $message');
    mainSendPort.send('Processed: $message');
  });
}

void main() async {
  final receivePort = ReceivePort();
  await Isolate.spawn(worker, receivePort.sendPort);

  // Listen for worker's SendPort
  final SendPort workerSendPort = await receivePort.first;
  workerSendPort.send('Parse 10MB JSON Data');
}</code></pre>

      <div class="tip-box">
        <i class="fa-solid fa-bolt"></i>
        <strong>Performance Rule:</strong> Use <code>Isolate.run()</code> for heavy JSON parsing or encryption in Flutter to keep frame rate at 60/120 FPS!
      </div>
    `
  }
];
