// A Common Man's Journey to Become a Flutter Developer - Milestones & Story Data

const MILESTONES_DATA = [
  {
    id: "dart-language",
    title: "1. Dart Language",
    badge: "Chapter 1 • The First Spark",
    icon: "🎯",
    color: "#0175C2",
    xPos: 4.0,
    yPos: 22,
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
    customTabName: "Dart FlipBook 📚",
    hasDigitalBook: true,
    digitalBookUrl: "dart/index.html",
    codeSnippet: `// Chapter 1: Google Dart Masterclass & 3D FlipBook Guide
// Open the interactive Dart 3D FlipBook to explore 37 topics, playground simulator, and 105-question Quiz Arena!
URL: dart/index.html`,
    resources: [
      { name: "📖 Interactive Dart 3D FlipBook (37 Topics & 105-Question Quiz Arena)", url: "dart/index.html" },
      { name: "Dart Official Documentation", url: "https://dart.dev/guides" },
      { name: "Dart Language Tour", url: "https://dart.dev/language" },
      { name: "Dart Pad (Interactive Sandbox)", url: "https://dartpad.dev" }
    ]
  },
  {
    id: "discrete-math",
    title: "2. Discrete Mathematics & Logic",
    badge: "Chapter 2 • Mathematical Mind",
    icon: "📐",
    color: "#E91E63",
    xPos: 10.0,
    yPos: 76,
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
    codeSnippet: `// Chapter 2: State Machine Logic & Set Algebra in Dart
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
    title: "3. DSA in Dart",
    badge: "Chapter 3 • The Brain Gym",
    icon: "🔮",
    color: "#9C27B0",
    xPos: 16.0,
    yPos: 50,
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
    codeSnippet: `// Chapter 3: Custom Stack for Undo History
class Stack<T> {
  final List<T> _items = [];

  void push(T value) => _items.add(value);
  T pop() => _items.removeLast();
  bool get isEmpty => _items.isEmpty;
}

void main() {
  final history = Stack<String>();
  history.push('Chapter 1: Dart');
  history.push('Chapter 2: Discrete Math');
  print('Current Learning: \${history.pop()}');
}`,
    resources: [
      { name: "Data Structures & Algorithms in Dart", url: "https://www.raywenderlich.com/books/data-structures-algorithms-in-dart" }
    ]
  },
  {
    id: "flutter-framework",
    title: "4. Flutter Framework & YAML Config",
    badge: "Chapter 4 • Building UI & Config",
    icon: "💙",
    color: "#02569B",
    xPos: 22.0,
    yPos: 22,
    story: "Alex opens Flutter for the first time! He learns that 'Everything is a Widget' and masters project configuration via `pubspec.yaml`, `analysis_options.yaml`, and `l10n.yaml` for assets, fonts, dependencies, and lint rules.",
    description: "Understand the core UI framework and project configuration: Widgets, Constraints, Layouts, RenderTree, and project configuration using YAML files.",
    topics: [
      "Stateless vs Stateful Widgets & Lifecycle (`initState`, `dispose`)",
      "Widget, Element & RenderObject Trees",
      "Project Config: `pubspec.yaml` (Dependencies, Assets, Fonts, Versioning)",
      "Static Analysis & Linter Config (`analysis_options.yaml`)",
      "Internationalization Setup (`l10n.yaml` & ARB files)",
      "Layout Widgets (Row, Column, Stack, Flex, Wrap, ListView, GridView)",
      "Custom Painter & Canvas API"
    ],
    subMilestones: [
      { id: "flutter-1", title: "StatefulWidget Lifecycle (`initState`, `didUpdateWidget`, `dispose`)", completed: false },
      { id: "flutter-2", title: "Mastering `pubspec.yaml` (Assets, Fonts, Dependency Constraints)", completed: false },
      { id: "flutter-3", title: "Configuring Lints via `analysis_options.yaml`", completed: false },
      { id: "flutter-4", title: "Understanding Constraints (Constraints Go Down, Sizes Go Up)", completed: false },
      { id: "flutter-5", title: "Custom Painter & Canvas API for Dynamic Graphics", completed: false }
    ],
    customTabName: "YAML FlipBook 📚",
    hasDigitalBook: true,
    digitalBookUrl: "YAML/index.html",
    codeSnippet: `# Chapter 4: YAML Project Configuration & 3D FlipBook Guide
# Open the interactive YAML 3D FlipBook to learn syntax, anchors, chomping & validator!
URL: YAML/index.html`,
    resources: [
      { name: "📖 Interactive YAML 3D FlipBook (38 Topics & Playground)", url: "YAML/index.html" },
      { name: "Flutter Official Docs", url: "https://docs.flutter.dev" },
      { name: "Pubspec.yaml Specification", url: "https://dart.dev/tools/pub/pubspec" },
      { name: "Flutter Widget Catalog", url: "https://docs.flutter.dev/ui/widgets" }
    ]
  },
  {
    id: "native-interop",
    title: "5. Native Platform Integration & Interop",
    badge: "Chapter 5 • Bridging Native Power",
    icon: "🔌",
    color: "#FF6F00",
    xPos: 28.0,
    yPos: 50,
    story: "Alex encounters a challenge: his app requires custom hardware sensors, iOS Live Activities, and Android Foreground Services. He masters `MethodChannel` & `EventChannel`, type-safe interop with `Pigeon`, and C/C++ interop via `dart:ffi`!",
    description: "Bridge Flutter with native Swift/Objective-C (iOS) and Kotlin/Java (Android) codebases using Method Channels, Event Channels, Pigeon, and FFI.",
    topics: [
      "Platform Channels (`MethodChannel` for async calls, `EventChannel` for streams)",
      "Type-Safe Platform Code Generation with `Pigeon`",
      "Native iOS Integration (Swift, ActivityKit / Live Activities)",
      "Native Android Integration (Kotlin, Foreground Services, BroadcastReceivers)",
      "Foreign Function Interface (`dart:ffi` for C/C++ Interop)",
      "Handling Platform Exceptions & Native Permissions"
    ],
    subMilestones: [
      { id: "native-1", title: "Writing Custom `MethodChannel` in Kotlin & Swift", completed: false },
      { id: "native-2", title: "Streaming Native Events with `EventChannel`", completed: false },
      { id: "native-3", title: "Type-safe native communication using `Pigeon`", completed: false },
      { id: "native-4", title: "Android Foreground Services & iOS Live Activities", completed: false },
      { id: "native-5", title: "Calling C/C++ Native Code using `dart:ffi`", completed: false }
    ],
    codeSnippet: `// Chapter 5: Flutter MethodChannel Native Integration
import 'package:flutter/services.dart';

class BatteryService {
  static const _channel = MethodChannel('com.alex.app/battery');

  static Future<int> getBatteryLevel() async {
    try {
      final int level = await _channel.invokeMethod('getBatteryLevel');
      return level;
    } on PlatformException catch (e) {
      print("Failed to get battery: '\${e.message}'.");
      return -1;
    }
  }
}`,
    resources: [
      { name: "Writing Custom Platform Code", url: "https://docs.flutter.dev/platform-integration/platform-channels" },
      { name: "Pigeon Package Docs", url: "https://pub.dev/packages/pigeon" },
      { name: "C Interop with dart:ffi", url: "https://dart.dev/guides/libraries/c-interop" }
    ]
  },
  {
    id: "clean-architecture",
    title: "6. Clean Architecture & Modularization",
    badge: "Chapter 6 • Enterprise Scalability",
    icon: "🏛️",
    color: "#673AB7",
    xPos: 34.0,
    yPos: 76,
    story: "Alex lands a role on a large engineering team! To keep code clean and scalable, he structures the app into Presentation, Domain, and Data layers. He uses `get_it` for Dependency Injection and structures multi-package workspaces with `melos`.",
    description: "Architect production Flutter applications using 3-layer Clean Architecture (Presentation, Domain, Data), Dependency Injection, and Multi-Package Monorepos.",
    topics: [
      "3-Layer Clean Architecture: Presentation, Domain (Entities/UseCases), Data (DTOs/Repositories)",
      "SOLID Principles applied to Dart & Flutter",
      "Repository Pattern & Data Source Abstraction",
      "Dependency Injection using `get_it` & `injectable`",
      "Monorepo Architecture & Package Modularization (`melos` / Dart Workspaces)",
      "Feature-First vs Layer-First Folder Structure"
    ],
    subMilestones: [
      { id: "clean-1", title: "Defining Domain Layer (Entities, Value Objects & Use Cases)", completed: false },
      { id: "clean-2", title: "Implementing Data Layer (Repositories, Remote/Local DataSources, DTOs)", completed: false },
      { id: "clean-3", title: "Dependency Injection Setup using `get_it` and `injectable`", completed: false },
      { id: "clean-4", title: "Feature-First Project Directory Structure", completed: false },
      { id: "clean-5", title: "Modularizing Large Apps into Monorepos with `melos`", completed: false }
    ],
    codeSnippet: `// Chapter 6: Dependency Injection & Use Case Contract
abstract class UserRepository {
  Future<User> getUserProfile(String userId);
}

class GetUserProfileUseCase {
  final UserRepository repository;
  GetUserProfileUseCase(this.repository);

  Future<User> call(String userId) => repository.getUserProfile(userId);
}

// Service Locator Registration with get_it
final sl = GetIt.instance;
void setupLocator() {
  sl.registerLazySingleton<UserRepository>(() => UserRepositoryImpl(sl()));
  sl.registerFactory(() => GetUserProfileUseCase(sl()));
}`,
    resources: [
      { name: "Flutter Clean Architecture Guide (ResoCoder)", url: "https://resocoder.com/flutter-clean-architecture-tdd/" },
      { name: "GetIt Package Documentation", url: "https://pub.dev/packages/get_it" },
      { name: "Melos Monorepo Tooling", url: "https://melos.invertase.dev" }
    ]
  },
  {
    id: "state-management",
    title: "7. State Management",
    badge: "Chapter 7 • Architecting Control",
    icon: "🧠",
    color: "#00B0FF",
    xPos: 40.0,
    yPos: 50,
    story: "As Alex's app grows, passing variables down 10 widget levels becomes messy. Alex learns Riverpod and BLoC to separate UI from business logic cleanly.",
    description: "Manage global application state cleanly, decouple business logic from presentation, and optimize UI re-rendering efficiency.",
    topics: [
      "Episodic vs App-Wide State",
      "InheritedWidget & `Provider`",
      "Riverpod 2.0 (Functional, Safe & Reactive State)",
      "BLoC / Cubit (Business Logic Component)",
      "Clean Architecture Integration with State Managers"
    ],
    subMilestones: [
      { id: "state-1", title: "`setState()` vs `InheritedWidget` & `InheritedNotifier`", completed: false },
      { id: "state-2", title: "Provider & ChangeNotifier Patterns", completed: false },
      { id: "state-3", title: "Riverpod 2.0 (`NotifierProvider`, `AsyncNotifierProvider`)", completed: false },
      { id: "state-4", title: "BLoC Architecture (Events, States, Transitions)", completed: false },
      { id: "state-5", title: "Cubit for Streamlined State Transitions", completed: false }
    ],
    codeSnippet: `// Chapter 7: Riverpod 2.0 State Notifier
@riverpod
class LearningProgressNotifier extends _$LearningProgressNotifier {
  @override
  int build() => 7;

  void nextChapter() => state++;
}`,
    resources: [
      { name: "Riverpod Official Guide", url: "https://riverpod.dev" },
      { name: "Bloc Library Docs", url: "https://bloclibrary.dev" }
    ]
  },
  {
    id: "local-database",
    title: "8. Local DB & Offline-First Strategy",
    badge: "Chapter 8 • Offline Storage & Sync",
    icon: "💾",
    color: "#4CAF50",
    xPos: 46.0,
    yPos: 22,
    story: "Alex wants his users to access their data seamless offline. He masters `shared_preferences`, secure encrypted storage, relational SQLite (`drift`), fast NoSQL (`Hive` & `Isar`), and cache-first offline synchronization.",
    description: "Store persistent user data locally using key-value stores, relational databases, fast NoSQL databases, and implement cache-first sync.",
    topics: [
      "Key-Value Storage (`shared_preferences`)",
      "Encrypted Storage (`flutter_secure_storage`)",
      "Relational SQLite Databases (`sqflite`, `drift / moor`)",
      "High-Performance NoSQL (`Hive`, `Isar`)",
      "Offline-First Architecture & Cache-First Syncing"
    ],
    subMilestones: [
      { id: "db-1", title: "`shared_preferences` & `flutter_secure_storage`", completed: false },
      { id: "db-2", title: "SQLite with `sqflite` (SQL Queries, Transactions)", completed: false },
      { id: "db-3", title: "Type-Safe Relational DB with `drift`", completed: false },
      { id: "db-4", title: "High-Speed NoSQL with `Hive` & `Isar`", completed: false },
      { id: "db-5", title: "Offline Syncing & Cache-First Repository Patterns", completed: false }
    ],
    codeSnippet: `// Chapter 8: Hive Local Storage Initialization
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
    id: "rest-api-deep-links",
    title: "9. REST APIs, Deep Links & Payments",
    badge: "Chapter 9 • Connecting & Monetizing",
    icon: "🌐",
    color: "#26A69A",
    xPos: 52.0,
    yPos: 50,
    story: "Alex connects his app to cloud web servers, adds deep linking for marketing campaigns, configures multi-environment YAML configurations (`env.yaml`), and implements in-app purchases!",
    description: "Connect to REST APIs with Dio, handle immutable JSON code generation (`freezed`), support Universal Deep Links, multi-environment YAML configs, and RevenueCat payments.",
    topics: [
      "HTTP Requests & Interceptors (`http`, `dio`)",
      "JSON Serialization & Immutable Models (`freezed`, `json_serializable`)",
      "Multi-Environment YAML Configs (`env.yaml`, `flutter_dotenv`)",
      "Deep Linking & Universal Links (`app_links`, `go_router`)",
      "In-App Purchases & Subscriptions (`RevenueCat` / `in_app_purchase`)",
      "OAuth2 Authentication Headers & JWT Refresh Tokens"
    ],
    subMilestones: [
      { id: "api-1", title: "HTTP Requests & Dio Interceptors (JWT Token Refresh)", completed: false },
      { id: "api-2", title: "Immutable Data Models with `Freezed` Code Generation", completed: false },
      { id: "api-3", title: "Multi-Environment YAML Configuration (`env.yaml`)", completed: false },
      { id: "api-4", title: "Deep Linking & Universal Links Handling (`app_links`)", completed: false },
      { id: "api-5", title: "In-App Subscriptions & Monetization with RevenueCat", completed: false }
    ],
    codeSnippet: `# Chapter 9: Multi-Environment env.yaml & Dio Client
# env.yaml
API_BASE_URL: "https://api.alexapp.com/v1"
TIMEOUT_SECONDS: 30
ENABLE_PAYMENTS: true

// Dio Interceptor Code
final dio = Dio(BaseOptions(baseUrl: env['API_BASE_URL']));
dio.interceptors.add(InterceptorsWrapper(
  onRequest: (options, handler) {
    options.headers['Authorization'] = 'Bearer ALEX_TOKEN';
    return handler.next(options);
  },
));`,
    resources: [
      { name: "Dio HTTP Client", url: "https://pub.dev/packages/dio" },
      { name: "Freezed Code Generation", url: "https://pub.dev/packages/freezed" },
      { name: "App Links Deep Linking Guide", url: "https://docs.flutter.dev/ui/navigation/deep-linking" }
    ]
  },
  {
    id: "firebase-supabase",
    title: "10. Firebase & Supabase",
    badge: "Chapter 10 • Cloud Superpowers",
    icon: "🔥",
    color: "#FF9800",
    xPos: 58.0,
    yPos: 76,
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
    codeSnippet: `// Chapter 10: Real-Time Stream Listener with Supabase
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
    title: "11. Git & GitHub",
    badge: "Chapter 11 • Team Collaboration",
    icon: "🐙",
    color: "#E0E0E0",
    xPos: 64.0,
    yPos: 50,
    story: "Alex collaborates seamlessly using Git branching strategies, opening Pull Requests on GitHub, resolving merge conflicts, and conducting code reviews.",
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
    id: "performance-devtools",
    title: "12. Performance & DevTools Profiling",
    badge: "Chapter 12 • Speed & Memory Mastery",
    icon: "⚡",
    color: "#FF4081",
    xPos: 70.0,
    yPos: 22,
    story: "Alex becomes a master of performance! He uses Flutter DevTools to profile CPU usage, inspect memory allocations, track widget rebuilds, and eliminate UI jank. He optimizes app bundle size down to perfection.",
    description: "Profile, debug, and optimize Flutter applications using DevTools, timeline analysis, memory leak detection, RepaintBoundary, and R8/Proguard binary shrinking.",
    topics: [
      "Flutter DevTools (CPU Profiler, Memory Inspector, Timeline, Network)",
      "Diagnosing UI Jank & Frame Drops (target 60fps/120fps)",
      "Optimizing Widget Rebuilds (`const` constructors, RepaintBoundary)",
      "Memory Leak Detection & Disposal of Controllers",
      "Reducing APK & IPA Binary Size (R8/Proguard, deferred loading, SVG optimization)"
    ],
    subMilestones: [
      { id: "perf-1", title: "Profiling App Performance using Flutter DevTools", completed: false },
      { id: "perf-2", title: "Eliminating Frame Drops & Jank using Timeline View", completed: false },
      { id: "perf-3", title: "Isolating Heavy Paints with `RepaintBoundary`", completed: false },
      { id: "perf-4", title: "Detecting & Fixing Memory Leaks in ViewModels", completed: false },
      { id: "perf-5", title: "Minifying APK/IPA sizes with R8, Proguard & Deferred Loading", completed: false }
    ],
    codeSnippet: `// Chapter 12: RepaintBoundary & Performance Optimization
import 'package:flutter/material.dart';

class HeavySubtree extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RepaintBoundary( // Prevents unnecessary repaints of complex subtree
      child: Container(
        decoration: BoxDecoration(
          boxShadow: [BoxShadow(blurRadius: 20, color: Colors.blue)],
        ),
        child: const Text('Optimized 120fps Rendering'),
      ),
    );
  }
}`,
    resources: [
      { name: "Flutter DevTools Documentation", url: "https://docs.flutter.dev/tools/devtools/overview" },
      { name: "Performance Best Practices", url: "https://docs.flutter.dev/perf/best-practices" }
    ]
  },
  {
    id: "ci-cd-github-actions",
    title: "13. CI / CD GitHub Actions & YAML",
    badge: "Chapter 13 • Automation Robot",
    icon: "🚀",
    color: "#2088FF",
    xPos: 76.0,
    yPos: 50,
    story: "No more manual building! Alex writes GitHub Actions YAML workflows (`.github/workflows/*.yml`) so every push runs `dart analyze`, executes tests, and auto-builds APK/IPA files using Fastlane.",
    description: "Automate code quality checks, static analysis, unit test runs, and APK/IPA build deployments using GitHub Actions YAML workflow pipelines.",
    topics: [
      "CI/CD Fundamentals for Mobile Applications",
      "GitHub Workflow YAML Syntax (`.github/workflows/*.yml`)",
      "Flutter Setup Actions (`subosito/flutter-action`)",
      "Automated Formatting, `dart analyze`, and Test Execution",
      "Fastlane Integration & Firebase App Distribution Uploads"
    ],
    subMilestones: [
      { id: "cicd-1", title: "Creating basic GitHub Actions `.yml` Workflow for Flutter", completed: false },
      { id: "cicd-2", title: "Automating Static Analysis & Unit Test Runs", completed: false },
      { id: "cicd-3", title: "Secure Secret Management for Keystores & API Keys in YAML", completed: false },
      { id: "cicd-4", title: "Building Android APK & iOS IPA automatically in Cloud CI", completed: false },
      { id: "cicd-5", title: "Integrating Fastlane to auto-deploy to Play Store & TestFlight", completed: false }
    ],
    codeSnippet: `# Chapter 13: .github/workflows/flutter_ci.yml
name: Flutter CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  analyze_and_test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.x'
          channel: 'stable'
      - run: flutter pub get
      - run: flutter analyze
      - run: flutter test --coverage`,
    resources: [
      { name: "GitHub Actions for Flutter", url: "https://docs.github.com/en/actions" },
      { name: "Flutter Continuous Delivery Guide", url: "https://docs.flutter.dev/deployment/cd" }
    ]
  },
  {
    id: "docker-kubernetes",
    title: "14. Docker, Kubernetes & DevOps YAML",
    badge: "Chapter 14 • Cloud DevOps YAML",
    icon: "🐳",
    color: "#0288D1",
    xPos: 82.0,
    yPos: 76,
    story: "Alex expands his skills into Full-Stack DevOps! He packages Flutter Web apps into Docker containers, writes `docker-compose.yml`, and deploys them to Kubernetes clusters using YAML manifests.",
    description: "Containerize Flutter Web apps and backend APIs with Docker, write compose configurations, and orchestrate cloud deployments with Kubernetes YAML manifests.",
    topics: [
      "Docker Concepts: Containers vs VMs, Images, Dockerfiles",
      "Multi-stage Docker Builds for Flutter Web (Nginx web server)",
      "Docker Compose Configuration (`docker-compose.yml`)",
      "Kubernetes YAML Architecture (`deployment.yaml`, `service.yaml`, `ingress.yaml`)",
      "Helm Charts for Kubernetes Package Management"
    ],
    subMilestones: [
      { id: "docker-1", title: "Multi-Stage Dockerfiles for Flutter Web & Nginx", completed: false },
      { id: "docker-2", title: "Configuring `docker-compose.yml` for Local Stack", completed: false },
      { id: "docker-3", title: "Writing Kubernetes YAML Manifests (`deployment.yaml`)", completed: false },
      { id: "docker-4", title: "Nginx Ingress Controller & Auto TLS Certificates", completed: false },
      { id: "docker-5", title: "Deployment Auto-Scaling (HPA) and Rolling Updates", completed: false }
    ],
    codeSnippet: `# Chapter 14: Kubernetes deployment.yaml for Flutter Web
apiVersion: apps/v1
kind: Deployment
metadata:
  name: flutter-web-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: flutter-web
  template:
    metadata:
      labels:
        app: flutter-web
    spec:
      containers:
      - name: flutter-web
        image: alex/flutter-web-app:latest
        ports:
        - containerPort: 80`,
    resources: [
      { name: "Docker Official Docs", url: "https://docs.docker.com" },
      { name: "Kubernetes Basics Tutorial", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" }
    ]
  },
  {
    id: "app-publishing",
    title: "15. Testing, Publishing & Launch",
    badge: "Chapter 15 • Victory & App Launch",
    icon: "🏆",
    color: "#FFD700",
    xPos: 88.0,
    yPos: 48,
    story: "The ultimate milestone! Alex writes robust test suites, generates release keystores, signs Android AAB & iOS IPA packages, and launches his app on Google Play Store & Apple App Store. Millions of users now enjoy his app daily!",
    description: "Ensure complete quality with Unit/Widget/Golden tests, sign production packages, submit to Google Play Store & Apple App Store, and monitor Crashlytics.",
    topics: [
      "The Testing Pyramid (Unit, Widget, Golden Visual Tests, Integration)",
      "App Icons, Splash Screens & Store Listing Graphics",
      "Android Keystore Generation & Release Signing (`build.gradle`)",
      "iOS Provisioning Profiles, Certificates & App Store Connect Upload",
      "Crash Reporting & Telemetry (`Firebase Crashlytics`, `Sentry`)"
    ],
    subMilestones: [
      { id: "pub-1", title: "Unit, Widget & Golden UI Image Regression Testing", completed: false },
      { id: "pub-2", title: "Configuring App Icons & Splash Screens (`flutter_native_splash`)", completed: false },
      { id: "pub-3", title: "Android Release Build Signing (Keystore, AAB bundle)", completed: false },
      { id: "pub-4", title: "iOS Xcode Release Signing & App Store Connect Upload", completed: false },
      { id: "pub-5", title: "Integrating Firebase Crashlytics & Real-time Telemetry", completed: false }
    ],
    codeSnippet: `# Chapter 15: Building Production Release Assets
# Android App Bundle (.aab)
flutter build appbundle --release

# iOS App Store Package (.ipa)
flutter build ipa --release

# Web Production Release
flutter build web --release`,
    resources: [
      { name: "Publishing Android Apps", url: "https://docs.flutter.dev/deployment/android" },
      { name: "Publishing iOS Apps", url: "https://docs.flutter.dev/deployment/ios" },
      { name: "Flutter Testing Guide", url: "https://docs.flutter.dev/testing" }
    ]
  }
];

const DEVELOPER_RANKS = [
  { threshold: 0, title: "Beginner Explorer 🐣", badge: "Chapter 1-3" },
  { threshold: 20, title: "Math & Dart Specialist 📐", badge: "Chapter 4-6" },
  { threshold: 45, title: "Flutter Architect 💙", badge: "Chapter 7-9" },
  { threshold: 70, title: "Full-Stack & DevOps Engineer 🚀", badge: "Chapter 10-13" },
  { threshold: 90, title: "Senior Flutter Leader 🏆", badge: "Mastery Completed" }
];
