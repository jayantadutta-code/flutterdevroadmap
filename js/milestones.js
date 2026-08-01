// A Common Man's Journey to Become a Flutter Developer - Milestones & Story Data

const MILESTONES_DATA = [
  {
    id: "dart-language",
    title: "1. Dart Language",
    badge: "Chapter 1 • The First Spark",
    icon: "🎯",
    color: "#0175C2",
    xPos: 5.5,
    yPos: 34,
    story: "Meet Alex, a common man working a 9-to-5 job with no prior programming experience. One rainy evening, inspired to build his own mobile app, Alex opens a laptop and writes his very first 'Hello World' in Dart. He discovers Dart's clean syntax, strong type safety, and sound null safety.",
    description: "Master Dart - the fast, object-oriented, type-safe language optimized for client applications across mobile, web, and desktop.",
    topics: [
      "Variables, Data Types & Type Safety",
      "Control Flow & Loops",
      "Functions & Higher-Order Functions",
      "OOP: Classes, Interfaces, Mixins & Inheritance",
      "Null Safety & Sound Type System",
      "Generics & Collections (Lists, Sets, Maps)"
    ],
    subMilestones: [
      { id: "dart-1", title: "Variables & Sound Null Safety (`String?`, `late`, `final`, `const`)", completed: false },
      { id: "dart-2", title: "Object-Oriented Programming (Classes, Abstract, Interfaces & Mixins)", completed: false },
      { id: "dart-3", title: "Functions, Parameters (`named`, `positional`, `required`) & Lambdas", completed: false },
      { id: "dart-4", title: "Dart Collections & Collection Methods (`map`, `where`, `reduce`, `fold`)", completed: false },
      { id: "dart-5", title: "Records, Patterns & Switch Expressions (Dart 3+ features)", completed: false }
    ],
    codeSnippet: `// Chapter 1: Alex's First Dart 3 Script
(String, int) getDeveloperInfo() => ('Alex (Common Man)', 1);

void main() {
  final (name, level) = getDeveloperInfo();
  print('Developer Journey Started: $name, Chapter: $level');

  switch (name) {
    case 'Alex (Common Man)': print('Welcome to the Flutter World!');
    case _: print('Keep Learning!');
  }
}`,
    resources: [
      { name: "Dart Official Documentation", url: "https://dart.dev/guides" },
      { name: "Dart Language Tour", url: "https://dart.dev/language" },
      { name: "Dart Pad (Interactive Sandbox)", url: "https://dartpad.dev" }
    ]
  },
  {
    id: "async-programming",
    title: "2. Asynchronous Programming",
    badge: "Chapter 2 • Mastering Time",
    icon: "⚡",
    color: "#0288D1",
    xPos: 12,
    yPos: 53,
    story: "Alex learns that real-world apps must fetch data without freezing the screen. He conquers Futures, async/await, and Streams. Now, when data arrives from the web, his app stays smooth and responsive!",
    description: "Handle non-blocking operations in Dart using Futures, async/await, Streams, StreamControllers, and Isolates for high performance.",
    topics: [
      "The Event Loop & Microtask Queue",
      "Futures & `async` / `await` Syntax",
      "Single-Subscription vs Broadcast Streams",
      "StreamControllers & Stream Transformers",
      "Isolates & Background Thread Processing"
    ],
    subMilestones: [
      { id: "async-1", title: "Understanding Event Loop, Event Queue & Microtasks", completed: false },
      { id: "async-2", title: "Futures, `then()`, `catchError()`, and `async/await` syntax", completed: false },
      { id: "async-3", title: "Streams & StreamControllers (Sink & Stream listeners)", completed: false },
      { id: "async-4", title: "Stream Transformers (`asyncMap`, `debounce`, `distinct`)", completed: false },
      { id: "async-5", title: "Multithreading using `Isolate.run()` and `ReceivePort`", completed: false }
    ],
    codeSnippet: `// Chapter 2: Reactive Stream Example
Stream<int> studySessionTracker(int hours) async* {
  for (int i = 1; i <= hours; i++) {
    await Future.delayed(Duration(milliseconds: 500));
    yield i;
  }
}

void main() async {
  await for (final hour in studySessionTracker(5)) {
    print('Alex studied Async Dart for $hour hour(s)');
  }
}`,
    resources: [
      { name: "Asynchronous Programming in Dart", url: "https://dart.dev/codelabs/async-await" },
      { name: "Streams in Dart Guide", url: "https://dart.dev/articles/libraries/creating-streams" }
    ]
  },
  {
    id: "discrete-math",
    title: "3. Discrete Mathematics & Logic",
    badge: "Chapter 3 • Mathematical Mind",
    icon: "📐",
    color: "#E91E63",
    xPos: 18.5,
    yPos: 69,
    story: "To understand complex algorithms, computer architecture, and state machines, Alex dives into Discrete Mathematics! He masters Mathematical Logic, Set Theory, Combinatorics, Boolean Algebra, and Finite State Machines.",
    description: "Build the foundational mathematical mindset: Propositional Logic, Truth Tables, Set Operations, Combinatorics, Graph Theory, and Finite Automata.",
    topics: [
      "Propositional Logic, Predicates & Truth Tables",
      "Set Theory, Venn Diagrams & Relations",
      "Functions: Injective, Surjective & Bijective",
      "Combinatorics, Permutations & Combinations",
      "Boolean Algebra & Logical Gates",
      "Graph Theory & Finite State Machines (FSM)"
    ],
    subMilestones: [
      { id: "math-1", title: "Propositional Logic (AND, OR, NOT, IMPLIES, Truth Tables)", completed: false },
      { id: "math-2", title: "Set Operations (Union, Intersection, Difference, Cartesian Product)", completed: false },
      { id: "math-3", title: "Combinatorics & Counting Principles (nCr, nPr, Pigeonhole Principle)", completed: false },
      { id: "math-4", title: "Boolean Algebra, De Morgan's Laws & Logic Simplification", completed: false },
      { id: "math-5", title: "Graph Theory (Nodes, Edges, Paths) & Finite State Machines", completed: false }
    ],
    codeSnippet: `// Chapter 3: State Machine Logic & Set Algebra in Dart
class StateMachine {
  final Set<String> states = {'Idle', 'Loading', 'Success', 'Error'};
  final Map<String, String> transitions = {
    'Idle': 'Loading',
    'Loading': 'Success'
  };

  String next(String current) => transitions[current] ?? 'Idle';
}

void main() {
  final fsm = StateMachine();
  print('Current State: Idle -> Next: \${fsm.next("Idle")}');
}`,
    resources: [
      { name: "Discrete Mathematics Tutorial (GeeksforGeeks)", url: "https://www.geeksforgeeks.org/discrete-mathematics-tutorial/" },
      { name: "MIT OpenCourseWare: Mathematics for Computer Science", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/" }
    ]
  },
  {
    id: "dsa-in-dart",
    title: "4. DSA in Dart",
    badge: "Chapter 4 • The Brain Gym",
    icon: "🔮",
    color: "#9C27B0",
    xPos: 25,
    yPos: 49,
    story: "Armed with Discrete Math logic, Alex trains in Data Structures & Algorithms. He implements Stacks, Queues, Binary Search Trees, and Graph traversals natively in Dart.",
    description: "Master Data Structures and Algorithms implemented natively in Dart to solve complex problems and optimize Flutter app performance.",
    topics: [
      "Big O Notation & Time/Space Complexity",
      "Linear Structures: Arrays, Linked Lists, Stacks, Queues",
      "Trees & Binary Search Trees (BST)",
      "Graphs, BFS & DFS Traversals",
      "Sorting & Searching Algorithms",
      "Dynamic Programming & Recursion"
    ],
    subMilestones: [
      { id: "dsa-1", title: "Complexity Analysis (O(1), O(n), O(log n), O(n²))", completed: false },
      { id: "dsa-2", title: "Custom Stack & Queue Implementation in Dart", completed: false },
      { id: "dsa-3", title: "Singly & Doubly Linked Lists", completed: false },
      { id: "dsa-4", title: "Binary Trees & BST Search/Insert Algorithms", completed: false },
      { id: "dsa-5", title: "Graph Adjacency Lists, BFS & DFS Traversals", completed: false }
    ],
    codeSnippet: `// Chapter 4: Custom Stack for Undo History
class Stack<T> {
  final List<T> _items = [];

  void push(T value) => _items.add(value);
  T pop() => _items.removeLast();
  bool get isEmpty => _items.isEmpty;
}

void main() {
  final history = Stack<String>();
  history.push('Chapter 1: Dart');
  history.push('Chapter 3: Discrete Math');
  print('Current Learning: \${history.pop()}');
}`,
    resources: [
      { name: "Data Structures & Algorithms in Dart", url: "https://www.raywenderlich.com/books/data-structures-algorithms-in-dart" }
    ]
  },
  {
    id: "flutter-framework",
    title: "5. Flutter Framework",
    badge: "Chapter 5 • Building UI Dreams",
    icon: "💙",
    color: "#02569B",
    xPos: 31.5,
    yPos: 28,
    story: "Alex opens Flutter for the first time! He is wowed by the philosophy: 'Everything is a Widget'. He crafts beautiful UI layouts using Rows, Columns, Stacks, and CustomPainters.",
    description: "Understand the core UI framework: Everything is a Widget. Master Layouts, RenderTree, State, Gestures, Animations, and Navigation.",
    topics: [
      "Stateless vs Stateful Widgets & Lifecycle (`initState`, `dispose`)",
      "Widget, Element & RenderObject Trees",
      "Layout Widgets (Row, Column, Stack, Flex, Wrap, ListView, GridView)",
      "Material 3 & Cupertino Widget Libraries",
      "Custom Painter & Canvas API",
      "Implicit & Explicit Animations (`AnimationController`, `Hero`)"
    ],
    subMilestones: [
      { id: "flutter-1", title: "StatefulWidget Lifecycle (`initState`, `didUpdateWidget`, `dispose`)", completed: false },
      { id: "flutter-2", title: "Understanding Constraints (Constraints Go Down, Sizes Go Up)", completed: false },
      { id: "flutter-3", title: "Custom Single & Multi-child Layouts", completed: false },
      { id: "flutter-4", title: "CustomPainter & Canvas API for Drawing", completed: false },
      { id: "flutter-5", title: "Hero Animations & Explicit Controllers", completed: false }
    ],
    codeSnippet: `// Chapter 5: Alex's First Flutter Widget
import 'package:flutter/material.dart';

class DeveloperCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: Icon(Icons.code, color: Colors.blue),
        title: Text('Alex - Flutter Apprentice'),
        subtitle: Text('Building cross-platform apps!'),
      ),
    );
  }
}`,
    resources: [
      { name: "Flutter Official Docs", url: "https://docs.flutter.dev" },
      { name: "Flutter Widget Catalog", url: "https://docs.flutter.dev/ui/widgets" }
    ]
  },
  {
    id: "state-management",
    title: "6. State Management",
    badge: "Chapter 6 • Architecting Control",
    icon: "🧠",
    color: "#00B0FF",
    xPos: 38,
    yPos: 49,
    story: "As Alex's app grows, passing variables down 10 widget levels becomes messy. Alex learns Riverpod and BLoC to separate UI from business logic cleanly.",
    description: "Manage global application state cleanly, decouple business logic from presentation, and optimize UI re-rendering efficiency.",
    topics: [
      "Episodic vs App-Wide State",
      "InheritedWidget & `Provider`",
      "Riverpod 2.0 (Functional, Safe & Reactive State)",
      "BLoC / Cubit (Business Logic Component)",
      "Clean Architecture & Dependency Injection (`get_it`)"
    ],
    subMilestones: [
      { id: "state-1", title: "`setState()` vs `InheritedWidget` & `InheritedNotifier`", completed: false },
      { id: "state-2", title: "Provider & ChangeNotifier Patterns", completed: false },
      { id: "state-3", title: "Riverpod 2.0 (`NotifierProvider`, `AsyncNotifierProvider`)", completed: false },
      { id: "state-4", title: "BLoC Architecture (Events, States, Transitions)", completed: false },
      { id: "state-5", title: "Dependency Injection with `get_it` & Service Locators", completed: false }
    ],
    codeSnippet: `// Chapter 6: Riverpod 2.0 State Notifier
@riverpod
class LearningProgressNotifier extends _$LearningProgressNotifier {
  @override
  int build() => 6;

  void nextChapter() => state++;
}`,
    resources: [
      { name: "Riverpod Official Guide", url: "https://riverpod.dev" },
      { name: "Bloc Library Docs", url: "https://bloclibrary.dev" }
    ]
  },
  {
    id: "local-database",
    title: "7. Local Database Management",
    badge: "Chapter 7 • Offline Storage",
    icon: "💾",
    color: "#4CAF50",
    xPos: 44.5,
    yPos: 69,
    story: "Alex wants his users to access their notes offline. He masters `shared_preferences`, encrypted storage, SQLite (`drift`), and lightning-fast NoSQL (`Hive` & `Isar`).",
    description: "Store persistent user data locally using key-value stores, relational databases, fast NoSQL databases, and encrypted storage.",
    topics: [
      "Key-Value Storage (`shared_preferences`)",
      "Encrypted Storage (`flutter_secure_storage`)",
      "Relational SQLite Databases (`sqflite`, `drift / moor`)",
      "High-Performance NoSQL (`Hive`, `Isar`)",
      "Offline Syncing & Repository Cache-First Patterns"
    ],
    subMilestones: [
      { id: "db-1", title: "`shared_preferences` & `flutter_secure_storage`", completed: false },
      { id: "db-2", title: "SQLite with `sqflite` (SQL Queries, Transactions)", completed: false },
      { id: "db-3", title: "Type-Safe Relational DB with `drift`", completed: false },
      { id: "db-4", title: "High-Speed NoSQL with `Hive` & `Isar`", completed: false },
      { id: "db-5", title: "Offline Syncing & Cache-First Patterns", completed: false }
    ],
    codeSnippet: `// Chapter 7: Hive Local Storage Initialization
import 'package:hive_flutter/hive_flutter.dart';

void main() async {
  await Hive.initFlutter();
  var box = await Hive.openBox('user_profile');
  await box.put('name', 'Alex');
  await box.put('role', 'Flutter Developer');
}`,
    resources: [
      { name: "Drift Database Docs", url: "https://drift.simonbinder.eu" },
      { name: "Isar Database Guide", url: "https://isar.dev" }
    ]
  },
  {
    id: "rest-api",
    title: "8. REST API Integration",
    badge: "Chapter 8 • Connecting to World",
    icon: "🌐",
    color: "#26A69A",
    xPos: 51,
    yPos: 49,
    story: "Alex connects his app to cloud web servers! He handles HTTP requests, parses JSON models automatically with `freezed`, and uses `Dio` interceptors to inject JWT authentication tokens.",
    description: "Connect your app to backend services using HTTP protocols, JSON parsing, serialization, Dio interceptors, and WebSockets.",
    topics: [
      "HTTP Requests (`http`, `dio`)",
      "JSON Serialization & Code Generation (`json_serializable`, `freezed`)",
      "API Error Handling & Status Codes",
      "Authentication Headers, OAuth2 & JWT Refresh Tokens",
      "Dio Interceptors, Retries & Dynamic Caching"
    ],
    subMilestones: [
      { id: "api-1", title: "HTTP GET/POST/PUT/DELETE requests via `package:http`", completed: false },
      { id: "api-2", title: "Advanced HTTP client with `Dio` (Interceptors, Auth)", completed: false },
      { id: "api-3", title: "Immutable Data Models with `Freezed`", completed: false },
      { id: "api-4", title: "Handling Network Timeouts & Retries", completed: false },
      { id: "api-5", title: "Real-time communication using WebSockets", completed: false }
    ],
    codeSnippet: `// Chapter 8: Dio Client with Auth Interceptor
final dio = Dio(BaseOptions(baseUrl: 'https://api.flutterdev.com'));

dio.interceptors.add(InterceptorsWrapper(
  onRequest: (options, handler) {
    options.headers['Authorization'] = 'Bearer ALEX_DEV_TOKEN';
    return handler.next(options);
  },
));`,
    resources: [
      { name: "Dio HTTP Client", url: "https://pub.dev/packages/dio" },
      { name: "Freezed Code Generation", url: "https://pub.dev/packages/freezed" }
    ]
  },
  {
    id: "firebase-supabase",
    title: "9. Firebase & Supabase",
    badge: "Chapter 9 • Cloud Superpowers",
    icon: "🔥",
    color: "#FF9800",
    xPos: 57.5,
    yPos: 28,
    story: "Alex discovers BaaS platforms! He adds Google & Apple social sign-in, Cloud Firestore real-time database listeners, FCM push notifications, and Supabase PostgreSQL.",
    description: "Accelerate app development with Backend-as-a-Service platforms for Auth, Cloud Databases, Realtime Streams, Push Notifications, and Storage.",
    topics: [
      "Firebase Core & CLI Initialization (`flutterfire`)",
      "Firebase Authentication (Email, Google, Apple Sign-in)",
      "Cloud Firestore & Realtime Database Listeners",
      "Supabase Setup (PostgreSQL, Row-Level Security, Realtime)",
      "Push Notifications via Firebase Cloud Messaging (FCM)"
    ],
    subMilestones: [
      { id: "baas-1", title: "FlutterFire CLI & Project Initialization", completed: false },
      { id: "baas-2", title: "Firebase Auth (Social Logins & User Sessions)", completed: false },
      { id: "baas-3", title: "Firestore CRUD operations & Real-time Stream Listeners", completed: false },
      { id: "baas-4", title: "Supabase PostgreSQL Database & Auth Setup", completed: false },
      { id: "baas-5", title: "FCM Push Notifications Setup", completed: false }
    ],
    codeSnippet: `// Chapter 9: Real-Time Stream Listener with Supabase
final supabase = Supabase.instance.client;

void listenToCommunityChat() {
  supabase
    .from('flutter_community')
    .stream(primaryKey: ['id'])
    .listen((messages) {
      print('New messages from Flutter devs: \${messages.length}');
    });
}`,
    resources: [
      { name: "FlutterFire Official Docs", url: "https://firebase.flutter.dev" },
      { name: "Supabase Flutter Documentation", url: "https://supabase.com/docs/guides/getting-started/tutorials/with-flutter" }
    ]
  },
  {
    id: "git-github",
    title: "10. Git & GitHub",
    badge: "Chapter 10 • Team Collaboration",
    icon: "🐙",
    color: "#E0E0E0",
    xPos: 64,
    yPos: 49,
    story: "Alex lands his first junior software job! He works in a team using Git branching strategies, opening Pull Requests on GitHub, resolving merge conflicts, and conducting code reviews.",
    description: "Manage source code versions effectively, collaborate using Git workflows, resolve merge conflicts, and utilize GitHub Pull Requests.",
    topics: [
      "Git Core Commands (init, clone, add, commit, push, pull)",
      "Branching Strategies (GitFlow, Trunk-based Development)",
      "Interactive Rebasing, Stashing & Cherry-picking",
      "Resolving Merge Conflicts cleanly",
      "GitHub PR Reviews, Branch Protection Rules & Code Owners"
    ],
    subMilestones: [
      { id: "git-1", title: "Git Basics: Repositories, Commits, Remote Syncing", completed: false },
      { id: "git-2", title: "Branching: Creating Feature Branches & PRs", completed: false },
      { id: "git-3", title: "Rebasing vs Merging & Conflict Resolution", completed: false },
      { id: "git-4", title: "Git Stash, Reset, Revert & Cherry-pick Mastery", completed: false },
      { id: "git-5", title: "GitHub Pull Request Review Workflow", completed: false }
    ],
    customTabName: "Digital Book 📚",
    hasDigitalBook: true,
    digitalBookUrl: "git-github/index.html",
    codeSnippet: `# Interactive 3D Git & GitHub Digital Book (28 Chapters)
# Open the interactive digital book to read chapters, try the terminal, and solve quizzes!
URL: git-github/index.html`,
    resources: [
      { name: "📖 Interactive Git & GitHub Digital Book (28 Chapters)", url: "git-github/index.html" },
      { name: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
      { name: "GitHub Skills & Tutorials", url: "https://skills.github.com" }
    ]
  },
  {
    id: "ci-cd-github-actions",
    title: "11. CI / CD GitHub Actions",
    badge: "Chapter 11 • Automation Robot",
    icon: "🚀",
    color: "#2088FF",
    xPos: 70.5,
    yPos: 69,
    story: "No more manual building! Alex sets up GitHub Actions workflows so every time code is pushed to `main`, an automated pipeline runs `dart analyze`, executes unit tests, and builds APK & IPA files automatically.",
    description: "Automate code quality checks, static analysis, unit test runs, and APK/IPA build deployments using GitHub Actions pipelines.",
    topics: [
      "CI/CD Fundamentals for Mobile Applications",
      "GitHub Workflow Syntax (`.github/workflows/*.yml`)",
      "Flutter Setup Actions (`subosito/flutter-action`)",
      "Automated Formatting, `dart analyze`, and Test Execution",
      "Fastlane Integration & Auto Uploads"
    ],
    subMilestones: [
      { id: "cicd-1", title: "Creating basic GitHub Actions Workflow for Flutter", completed: false },
      { id: "cicd-2", title: "Automating Static Analysis & Unit Test Runs", completed: false },
      { id: "cicd-3", title: "Secure Secret Management for Keystores & API Keys", completed: false },
      { id: "cicd-4", title: "Building Android APK & iOS IPA automatically", completed: false },
      { id: "cicd-5", title: "Integrating Fastlane to auto-deploy to Firebase Distribution", completed: false }
    ],
    codeSnippet: `# Chapter 11: .github/workflows/flutter_ci.yml
name: Flutter CI Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
      - run: flutter pub get
      - run: flutter analyze
      - run: flutter test`,
    resources: [
      { name: "GitHub Actions for Flutter", url: "https://docs.github.com/en/actions" },
      { name: "Flutter CI/CD Guide", url: "https://docs.flutter.dev/deployment/cd" }
    ]
  },
  {
    id: "docker-kubernetes",
    title: "12. Docker & Kubernetes",
    badge: "Chapter 12 • Cloud DevOps",
    icon: "🐳",
    color: "#0288D1",
    xPos: 77,
    yPos: 49,
    story: "Alex expands his skills into Full-Stack DevOps! He packages Flutter Web apps into lightweight Docker containers served via Nginx and deploys them to Kubernetes clusters with auto-scaling.",
    description: "Containerize Flutter Web apps, backend APIs, or microservices with Docker, and orchestrate scalable cloud deployments with Kubernetes.",
    topics: [
      "Docker Concepts: Containers vs VMs, Images, Dockerfiles",
      "Multi-stage Docker Builds for Flutter Web (Nginx web server)",
      "Docker Compose for Local Development",
      "Kubernetes Architecture: Pods, Services, Deployments & Ingress",
      "Helm Charts for Kubernetes Package Management"
    ],
    subMilestones: [
      { id: "docker-1", title: "Multi-Stage Dockerfiles for Flutter Web & Nginx", completed: false },
      { id: "docker-2", title: "Docker Compose for running Flutter Web + API server", completed: false },
      { id: "docker-3", title: "Kubernetes Manifests (Pods, Services, Deployments)", completed: false },
      { id: "docker-4", title: "Nginx Ingress Controller & Auto TLS Certificates", completed: false },
      { id: "docker-5", title: "Deployment Auto-Scaling (HPA) and Rolling Updates", completed: false }
    ],
    codeSnippet: `# Chapter 12: Multi-stage Dockerfile for Flutter Web
FROM plugfox/flutter:stable AS build
WORKDIR /app
COPY . .
RUN flutter build web --release

FROM nginx:alpine
COPY --from=build /app/build/web /usr/share/nginx/html
EXPOSE 80`,
    resources: [
      { name: "Docker Official Docs", url: "https://docs.docker.com" },
      { name: "Kubernetes Basics Tutorial", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" }
    ]
  },
  {
    id: "testing",
    title: "13. Testing & QA",
    badge: "Chapter 13 • Shield of Reliability",
    icon: "🛡️",
    color: "#7E57C2",
    xPos: 83.5,
    yPos: 28,
    story: "Alex becomes a Senior Engineer focused on reliability. He writes unit tests, mocks API dependencies with `mocktail`, pump widget tests, and runs Golden UI visual regression tests.",
    description: "Ensure app stability and performance using Unit Tests, Widget Tests, Integration Tests, Mocking dependencies, and Code Coverage metrics.",
    topics: [
      "The Testing Pyramid (Unit, Widget, Integration Tests)",
      "Unit Testing Logic with `package:test` & Assertions",
      "Mocking Dependencies (`mockito`, `mocktail`)",
      "Widget Testing (`WidgetTester`, `find`, `pumpAndSettle`)",
      "Golden Tests for Visual Regression Prevention"
    ],
    subMilestones: [
      { id: "test-1", title: "Unit Testing Functions, ViewModels & Repositories", completed: false },
      { id: "test-2", title: "Mocking API & Database dependencies with `mocktail`", completed: false },
      { id: "test-3", title: "Widget Testing (`tester.pump()`, `tester.tap()`)", completed: false },
      { id: "test-4", title: "Golden UI Image Tests for Visual Bug Prevention", completed: false },
      { id: "test-5", title: "Integration Testing User Flow Sequences on Real Devices", completed: false }
    ],
    codeSnippet: `// Chapter 13: Widget Test Example
void main() {
  testWidgets('Alex verifies button tap updates UI state', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());
    expect(find.text('Chapter 13'), findsOneWidget);
    await tester.tap(find.byType(ElevatedButton));
    await tester.pump();
  });
}`,
    resources: [
      { name: "Testing Flutter Apps Guide", url: "https://docs.flutter.dev/testing" },
      { name: "Mocktail Package", url: "https://pub.dev/packages/mocktail" }
    ]
  },
  {
    id: "app-publishing",
    title: "14. App Publishing & Launch",
    badge: "Chapter 14 • Victory & Launch",
    icon: "🏆",
    color: "#FFD700",
    xPos: 90,
    yPos: 49,
    story: "The ultimate milestone! Alex generates release keystores, signs Android AAB bundles & iOS IPA packages, and submits his Flutter application to Google Play Store & Apple App Store. Millions of people now use his app every day!",
    description: "Prepare, sign, and release your Flutter app to Google Play Store, Apple App Store, Web hosting, and Desktop distribution platforms.",
    topics: [
      "App Icons, Splash Screens & Store Graphics",
      "Android Keystore Generation & Release Signing (`build.gradle`)",
      "iOS Provisioning Profiles, Certificates & App Store Connect",
      "Google Play Console Tracks (Internal, Alpha, Beta, Production)",
      "Crash Reporting & Analytics (`Firebase Crashlytics`, `Sentry`)"
    ],
    subMilestones: [
      { id: "pub-1", title: "Configuring App Icons (`flutter_launcher_icons`) & Splash Screen", completed: false },
      { id: "pub-2", title: "Android Release Build Signing (Keystore, AAB bundle)", completed: false },
      { id: "pub-3", title: "iOS Xcode Release Signing & App Store Connect Upload", completed: false },
      { id: "pub-4", title: "Setting up Google Play Console & Apple App Store Listings", completed: false },
      { id: "pub-5", title: "Integrating Crashlytics & Real-time Analytics", completed: false }
    ],
    codeSnippet: `# Chapter 14: Building Production Release Assets
# Android App Bundle (.aab)
flutter build appbundle --release

# iOS App Store Package (.ipa)
flutter build ipa --release

# Web Production Release
flutter build web --release`,
    resources: [
      { name: "Publishing Android Apps", url: "https://docs.flutter.dev/deployment/android" },
      { name: "Publishing iOS Apps", url: "https://docs.flutter.dev/deployment/ios" }
    ]
  }
];

const DEVELOPER_RANKS = [
  { threshold: 0, title: "Beginner Explorer 🐣", badge: "Chapter 1-3" },
  { threshold: 20, title: "Math & Dart Specialist 📐", badge: "Chapter 4-6" },
  { threshold: 45, title: "Flutter Developer 💙", badge: "Chapter 7-9" },
  { threshold: 70, title: "Full-Stack Engineer 🚀", badge: "Chapter 10-12" },
  { threshold: 90, title: "Senior Flutter Architect 🏆", badge: "Mastery Completed" }
];
