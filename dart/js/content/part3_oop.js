/**
 * Dart Cookbook - Part 3: OOP
 * Topics: Classes and object, Constructor, Inheritance, Abstract classes, Interfaces, Mixins, Static and constant member
 */
window.part3Content = {
  partId: 3,
  title: "Part 3: Object-Oriented Dart",
  pages: [
    {
      pageId: "p3_cover",
      header: "PART 3: OOP",
      content: `
        <div class="chapter-title-page">
          <div class="chapter-number">CHAPTER 03</div>
          <h1 class="chapter-heading">Object-Oriented Programming in Dart</h1>
          <p class="chapter-subtitle">Master class structures, generative/factory/const constructors, single inheritance, implicit interfaces, mixin composition, and static members.</p>
        </div>
      `
    },
    {
      pageId: "p3_classes",
      header: "3.1 CLASSES & CONSTRUCTORS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-sitemap"></i> 1. Classes, Objects & Constructors</h2>
        <p class="topic-paragraph">
          Dart is a pure object-oriented language where every object is an instance of a class, and all classes descend from <code>Object</code> (except <code>Null</code>).
        </p>

        <h3 class="section-h3">Constructor Varieties in Dart</h3>
        <ul style="margin-left: 1.2rem; margin-bottom: 0.8rem; font-size: 0.88rem;">
          <li><strong>Generative:</strong> Standard constructor creating a new instance.</li>
          <li><strong>Named Constructor:</strong> Provides explicit intent (e.g., <code>Point.origin()</code>).</li>
          <li><strong>Redirecting:</strong> Forwards to another constructor in the same class.</li>
          <li><strong>Factory:</strong> Can return cached instances or subtypes instead of creating a raw instance.</li>
          <li><strong>Const Constructor:</strong> Creates canonical compile-time constant instances.</li>
        </ul>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>constructors.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">class Point {
  final double x;
  final double y;

  // Generative constructor with initializing formal parameters
  const Point(this.x, this.y);

  // Named constructor
  Point.origin() : x = 0, y = 0;

  // Redirecting constructor
  Point.alongX(double x) : this(x, 0);

  @override
  String toString() => 'Point($x, $y)';
}

void main() {
  const p1 = Point(2, 3);
  final p2 = Point.origin();
  final p3 = Point.alongX(5);
  
  print('$p1 | $p2 | $p3');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p3_inheritance_interfaces",
      header: "3.2 INHERITANCE, ABSTRACT & INTERFACES",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-diagram-project"></i> 2. Inheritance & Implicit Interfaces</h2>
        <p class="topic-paragraph">
          Dart supports single class inheritance using <code>extends</code>. Every class in Dart implicitly defines an interface containing all its instance members!
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>oop_principles.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">abstract class Shape {
  double get area; // Abstract getter
  void draw();
}

class Circle extends Shape {
  final double radius;
  Circle(this.radius);

  @override
  double get area => 3.14159 * radius * radius;

  @override
  void draw() => print('Drawing Circle (Area: $area)');
}

// Interface implementation (must override all members)
class MockShape implements Shape {
  @override
  double get area => 0.0;
  @override
  void draw() => print('Mock shape draw');
}

void main() {
  Shape c = Circle(5);
  c.draw();
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p3_mixins_statics",
      header: "3.3 MIXINS & STATIC MEMBERS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-puzzle-piece"></i> 3. Mixins & Static Members</h2>
        <p class="topic-paragraph">
          <code>Mixins</code> are a way of reusing a class's code in multiple class hierarchies without requiring multiple inheritance.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>mixins.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">mixin Logger {
  void log(String msg) => print('[LOG \${DateTime.now().second}s]: $msg');
}

mixin Authenticator {
  bool authenticate(String token) => token == 'secret_key';
}

class ApiService with Logger, Authenticator {
  static const String apiVersion = 'v3.2.0';
  static int requestCount = 0;

  void fetchData(String token) {
    if (authenticate(token)) {
      requestCount++;
      log('Data fetched successfully. Total requests: $requestCount');
    } else {
      log('Authentication failed!');
    }
  }
}

void main() {
  final service = ApiService();
  service.fetchData('secret_key');
  print('API Version: \${ApiService.apiVersion}');
}</code></pre>
        </div>
      `
    }
  ]
};
