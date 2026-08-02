/* ==========================================================================
   Dart Cookbook - Interactive Code Playground Engine
   ========================================================================== */

class PlaygroundEngine {
  constructor() {
    this.snippets = {
      "1.1 Introduction": `void main() {
  print('Hello Dart 3 & Flutter!');
  print('Client-optimized, fast, type-safe, multiplatform language.');
}`,
      "1.2 Comments": `/// Documentation comment for calculating user rank
int calculateXP(int level) => level * 100;

void main() {
  // Single line comment
  /* Multi-line block comment */
  print('XP Level 1: \${calculateXP(1)}');
}`,
      "1.3 Variables & Data Types": `void main() {
  var name = 'Alex';
  int age = 25;
  double score = 98.5;
  final DateTime now = DateTime.now();
  const String platform = 'Flutter';

  print('Developer: $name ($age) - Score: $score');
  print('Built with $platform at $now');
}`,
      "1.4 Number": `void main() {
  int count = int.parse('42');
  double pi = 3.14159;

  print('Parsed Int: $count (IsEven: \${count.isEven})');
  print('Rounded Double: \${pi.toStringAsFixed(2)}');
}`,
      "1.5 String": `void main() {
  String lang = 'Dart';
  String msg = 'Learning $lang is fun!';
  String raw = r'No \\n escaping here';

  print(msg);
  print(raw);
}`,
      "1.6 Regular Expression": `void main() {
  RegExp emailRegex = RegExp(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\$');
  String testEmail = 'alex@flutter.dev';

  print('Email: $testEmail');
  print('Is Valid Email? \${emailRegex.hasMatch(testEmail)}');
}`,
      "1.7 String Buffer": `void main() {
  var buffer = StringBuffer();
  buffer.write('Building ');
  buffer.writeAll(['Flutter ', 'Apps ', 'Fast!']);

  print(buffer.toString());
}`,
      "1.8 Operators": `void main() {
  int div = 10 ~/ 3; // Truncating division
  String? username;
  String displayName = username ?? 'Guest Explorer';

  print('10 ~/ 3 = $div');
  print('User: $displayName');
}`,
      "1.9 Conditions": `void main() {
  int score = 85;
  String grade = (score >= 90) ? 'A' : (score >= 80 ? 'B' : 'C');

  print('Score: $score => Grade: $grade');
}`,
      "1.10 Loops": `void main() {
  List<String> topics = ['Basics', 'Core', 'OOP', 'Async'];

  for (int i = 0; i < topics.length; i++) {
    print('\${i + 1}. \${topics[i]}');
  }
}`,
      "2.1 Function": `int add(int a, int b) => a + b;

void main() {
  print('Sum: \${add(15, 27)}');
}`,
      "2.2 Function Advance": `void greetUser({required String name, String title = 'Developer'}) {
  print('Hello, $title $name!');
}

void main() {
  greetUser(name: 'Alex', title: 'Senior Flutter');
}`,
      "2.3 List": `void main() {
  List<int> numbers = [10, 20, 30];
  List<int> expanded = [0, ...numbers, 40];

  print('Expanded List: $expanded');
  print('Evens: \${expanded.where((n) => n.isEven).toList()}');
}`,
      "2.4 Set": `void main() {
  Set<String> skills = {'Dart', 'Flutter', 'Dart', 'Firebase'};
  print('Unique Skills: $skills (Length: \${skills.length})');
}`,
      "2.5 Map": `void main() {
  Map<String, String> config = {
    'env': 'production',
    'version': '1.0.0'
  };

  config['author'] = 'Alex';
  config.forEach((k, v) => print('$k => $v'));
}`,
      "3.1 Classes and Object": `class Person {
  String name;
  Person(this.name);

  void speak() => print('I am $name');
}

void main() {
  var p = Person('Alex');
  p.speak();
}`,
      "3.2 Constructor": `class Point {
  final double x, y;
  const Point(this.x, this.y);
  Point.origin() : this(0, 0);

  @override
  String toString() => 'Point($x, $y)';
}

void main() {
  print(Point(5, 10));
  print(Point.origin());
}`,
      "3.3 Inheritance": `class Vehicle {
  void start() => print('Engine Started');
}

class Car extends Vehicle {
  @override
  void start() => print('Vroom! Car engine started.');
}

void main() {
  Car().start();
}`,
      "3.4 Abstract Classes": `abstract class Shape {
  double calculateArea();
}

class Square extends Shape {
  final double side;
  Square(this.side);

  @override
  double calculateArea() => side * side;
}

void main() {
  print('Square Area: \${Square(4).calculateArea()}');
}`,
      "3.5 Interfaces": `abstract class Printable {
  void printContent();
}

class Invoice implements Printable {
  @override
  void printContent() => print('Printing Invoice #1001');
}

void main() {
  Invoice().printContent();
}`,
      "3.6 Mixins": `mixin Flying {
  void fly() => print('Flying high in the sky!');
}

class Bird with Flying {}

void main() {
  Bird().fly();
}`,
      "3.7 Static & Const Members": `class Constants {
  static const String appTitle = 'Dart Cookbook';
  static int instances = 0;
}

void main() {
  print(Constants.appTitle);
}`,
      "4.1 Null Safety": `void main() {
  String? nullableText;
  print(nullableText?.length ?? 0);

  nullableText = 'Sound Null Safety';
  print(nullableText.length);
}`,
      "4.2 Exception Handling": `void main() {
  try {
    int res = 12 ~/ 0;
  } on UnsupportedError {
    print('Caught integer division error!');
  } finally {
    print('Execution complete.');
  }
}`,
      "4.3 Enums": `enum Priority { low, medium, high }

void main() {
  Priority p = Priority.high;
  print('Selected Priority: \${p.name}');
}`,
      "5.1 Futures, Async & Await": `Future<String> loadData() async {
  await Future.delayed(Duration(milliseconds: 500));
  return 'Async Data Loaded!';
}

void main() async {
  print('Loading...');
  print(await loadData());
}`,
      "5.4 Stream": `Stream<int> timerStream() async* {
  for (int i = 1; i <= 3; i++) {
    yield i;
  }
}

void main() async {
  await for (var val in timerStream()) {
    print('Stream Value: $val');
  }
}`,
      "6.1 Generics": `class DataBox<T> {
  T item;
  DataBox(this.item);
}

void main() {
  var intBox = DataBox<int>(100);
  var strBox = DataBox<String>('Dart Generics');
  print('Int: \${intBox.item}, String: \${strBox.item}');
}`,
      "6.2 Extension": `extension StringUpper on String {
  String get exclamation => '\$this!';
}

void main() {
  print('Flutter'.exclamation);
}`,
      "6.3 Lambda + FP": `void main() {
  var list = [1, 2, 3, 4];
  var squared = list.map((n) => n * n).toList();
  print('Squared: $squared');
}`,
      "6.5 Dart 3 Features": `(String, int) getInfo() => ('Alex', 2026);

void main() {
  var (name, year) = getInfo();
  print('Developer $name - Year $year');
}`,
      "7.1 Isolates": `void main() {
  print('Isolates process heavy workloads on separate background threads!');
  print('Result: Heavy computation done off main thread.');
}`
    };

    this.init();
  }

  init() {
    this.presetSelect = document.getElementById('playgroundPresetSelect');
    this.codeEditor = document.getElementById('playgroundCodeInput');
    this.runBtn = document.getElementById('runCodeBtn');
    this.clearBtn = document.getElementById('clearConsoleBtn');
    this.copyBtn = document.getElementById('copyPlaygroundCodeBtn');
    this.consoleOutput = document.getElementById('playgroundConsoleOutput');

    if (this.presetSelect) {
      this.populatePresets();
      this.presetSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (this.snippets[val]) {
          this.codeEditor.value = this.snippets[val];
        }
      });
    }

    if (this.runBtn) {
      this.runBtn.addEventListener('click', () => this.runSimulation());
    }
    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => {
        if (this.consoleOutput) this.consoleOutput.textContent = 'Console cleared.';
      });
    }
    if (this.copyBtn) {
      this.copyBtn.addEventListener('click', () => {
        if (this.codeEditor) {
          navigator.clipboard.writeText(this.codeEditor.value);
          this.copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
          setTimeout(() => {
            this.copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy Code';
          }, 2000);
        }
      });
    }
  }

  populatePresets() {
    this.presetSelect.innerHTML = Object.keys(this.snippets).map(key => `
      <option value="${key}">${key}</option>
    `).join('');
    // Default select first snippet
    const firstKey = Object.keys(this.snippets)[0];
    if (firstKey && this.codeEditor) {
      this.codeEditor.value = this.snippets[firstKey];
    }
  }

  runSimulation() {
    if (!this.codeEditor || !this.consoleOutput) return;

    if (window.soundEngine) window.soundEngine.playClick();
    this.consoleOutput.textContent = 'Executing Dart code in simulated environment...\n';

    const code = this.codeEditor.value;
    const printLogs = [];

    try {
      // Extract all print(...) strings in the code and simulate execution output cleanly
      const printRegex = /print\((.*?)\);/g;
      let match;
      while ((match = printRegex.exec(code)) !== null) {
        let rawContent = match[1].trim();
        // Strip outer quotes if simple string literal
        if ((rawContent.startsWith("'") && rawContent.endsWith("'")) || (rawContent.startsWith('"') && rawContent.endsWith('"'))) {
          rawContent = rawContent.slice(1, -1);
        }
        // Simple evaluation replacement for interpolation expressions
        rawContent = rawContent.replace(/\\$\{([^}]+)\}/g, '[eval]')
                               .replace(/\\$([a-zA-Z0-9_]+)/g, '[val]');
        printLogs.push(rawContent);
      }

      setTimeout(() => {
        if (printLogs.length > 0) {
          this.consoleOutput.textContent = '=== DART RUNTIME SIMULATOR OUTPUT ===\n' + printLogs.join('\n') + '\n\nProcess finished with exit code 0';
        } else {
          this.consoleOutput.textContent = '=== DART RUNTIME SIMULATOR OUTPUT ===\nProgram executed cleanly with no print outputs.\nProcess finished with exit code 0';
        }
      }, 300);
    } catch (err) {
      this.consoleOutput.textContent = 'Error parsing script: ' + err.message;
    }
  }
}
