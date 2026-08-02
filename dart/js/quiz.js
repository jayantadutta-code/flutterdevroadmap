/* ==========================================================================
   Dart Cookbook - Gamified Q&A Quest Arena (7 Levels x 15 Questions = 105 MCQs)
   ========================================================================== */

const QUIZ_QUESTIONS = {
  // --------------------------------------------------------------------------
  // Level 1: Basics (15 Questions)
  // --------------------------------------------------------------------------
  1: [
    {
      id: "l1_q1",
      prompt: "Which company developed and maintains the Dart programming language?",
      options: ["Microsoft", "Google", "Apple", "Meta"],
      answer: 1,
      xp: 50,
      explanation: "Dart was created and is actively maintained by Google for client-optimized, multiplatform development."
    },
    {
      id: "l1_q2",
      prompt: "What is the file extension for standard Dart source files?",
      options: [".dart", ".dt", ".drt", ".flutter"],
      answer: 0,
      xp: 50,
      explanation: "Dart source code files use the `.dart` file extension."
    },
    {
      id: "l1_q3",
      prompt: "Which keyword is used to declare a compile-time constant variable in Dart?",
      options: ["final", "const", "static", "var"],
      answer: 1,
      xp: 50,
      explanation: "`const` creates compile-time constants whose values must be known at compile time."
    },
    {
      id: "l1_q4",
      prompt: "What is the difference between 'final' and 'const' in Dart?",
      options: [
        "final is set once at runtime; const is set at compile time",
        "const can be reassigned multiple times; final cannot",
        "final only works for numbers; const works for strings",
        "There is no difference"
      ],
      answer: 0,
      xp: 50,
      explanation: "`final` variables are initialized once at runtime, whereas `const` variables are strictly evaluated at compile time."
    },
    {
      id: "l1_q5",
      prompt: "Which comment syntax is used for generating API documentation tools in Dart?",
      options: ["// Comment", "/* Comment */", "/// Comment", "# Comment"],
      answer: 2,
      xp: 50,
      explanation: "Triple-slash `///` doc comments are parsed by Dartdoc to automatically build public documentation."
    },
    {
      id: "l1_q6",
      prompt: "What does truncating division operator `~/` return in Dart?",
      options: ["Float result", "Integer result truncated towards zero", "Remainder", "String"],
      answer: 1,
      xp: 50,
      explanation: "The `~/` operator divides two numbers and returns an integer truncated towards zero (e.g., `10 ~/ 3` returns `3`)."
    },
    {
      id: "l1_q7",
      prompt: "Which data type is the superclass of both 'int' and 'double' in Dart?",
      options: ["Number", "num", "Object", "Numeric"],
      answer: 1,
      xp: 50,
      explanation: "Both `int` and `double` inherit directly from the `num` superclass."
    },
    {
      id: "l1_q8",
      prompt: "What will `print('Dart' 'Lang');` output in Dart?",
      options: ["Dart Lang", "DartLang", "Syntax error", "Dart"],
      answer: 1,
      xp: 50,
      explanation: "Adjacent string literals in Dart are automatically concatenated together into `'DartLang'`."
    },
    {
      id: "l1_q9",
      prompt: "Which class should be used to efficiently build strings inside intensive loops?",
      options: ["StringBuilder", "StringBuffer", "StringConcat", "StringList"],
      answer: 1,
      xp: 50,
      explanation: "`StringBuffer` prevents allocating intermediate string objects, making iterative string building fast and memory-efficient."
    },
    {
      id: "l1_q10",
      prompt: "What does the raw string prefix `r'...'` do in Dart?",
      options: ["Reverses the string", "Disables escape sequence processing like \\n", "Converts string to uppercase", "Encrypts the string"],
      answer: 1,
      xp: 50,
      explanation: "Prefixing a string literal with `r` treats escape characters like `\\n` as literal text characters."
    },
    {
      id: "l1_q11",
      prompt: "Which RegExp method tests if a regular expression pattern matches a string?",
      options: ["hasMatch()", "isMatching()", "testPattern()", "containsRegExp()"],
      answer: 0,
      xp: 50,
      explanation: "`RegExp.hasMatch(string)` returns `true` if the regular expression matches anywhere in the target string."
    },
    {
      id: "l1_q12",
      prompt: "What does the null-coalescing operator `??` do?",
      options: [
        "Returns the left operand if non-null; otherwise returns the right operand",
        "Checks if two values are equal",
        "Throws a null error",
        "Compares strings"
      ],
      answer: 0,
      xp: 50,
      explanation: "`expr1 ?? expr2` evaluates and returns `expr1` if it is not null; otherwise it returns `expr2`."
    },
    {
      id: "l1_q13",
      prompt: "What does the cascade operator `..` allow you to do in Dart?",
      options: [
        "Perform a sequence of operations on the same object",
        "Concatenate two lists",
        "Divide numbers",
        "Define an asynchronous function"
      ],
      answer: 0,
      xp: 50,
      explanation: "Cascade notation (`..`) allows chaining multiple method calls and field assignments on the same object."
    },
    {
      id: "l1_q14",
      prompt: "Which loop guarantees that its body is executed AT LEAST once?",
      options: ["for loop", "while loop", "do-while loop", "forEach loop"],
      answer: 2,
      xp: 50,
      explanation: "A `do-while` loop evaluates its condition after executing the loop body, ensuring at least one execution."
    },
    {
      id: "l1_q15",
      prompt: "What keyword immediately exits the current enclosing loop in Dart?",
      options: ["continue", "exit", "stop", "break"],
      answer: 3,
      xp: 50,
      explanation: "The `break` statement immediately terminates the nearest enclosing loop or switch statement."
    }
  ],

  // --------------------------------------------------------------------------
  // Level 2: Core Dart (15 Questions)
  // --------------------------------------------------------------------------
  2: [
    {
      id: "l2_q1",
      prompt: "How do you specify a named parameter in a Dart function definition?",
      options: [
        "Enclose parameters in square brackets [ ]",
        "Enclose parameters in curly braces { }",
        "Prefix with @named",
        "Use parentheses ( ) only"
      ],
      answer: 1,
      xp: 60,
      explanation: "Curly braces `{}` define named parameters in Dart function signatures (e.g. `void foo({int? x})`)."
    },
    {
      id: "l2_q2",
      prompt: "What keyword makes a named parameter mandatory to pass when calling the function?",
      options: ["must", "required", "nonnull", "strict"],
      answer: 1,
      xp: 60,
      explanation: "The `required` modifier mandates that a named parameter must be supplied by the caller."
    },
    {
      id: "l2_q3",
      prompt: "What shorthand arrow syntax `=>` represents in Dart functions?",
      options: ["A single expression return statement", "A loop iterator", "A type cast", "An async operation"],
      answer: 0,
      xp: 60,
      explanation: "The arrow `=> expr` notation is shorthand for `{ return expr; }` for single-line functions."
    },
    {
      id: "l2_q4",
      prompt: "What does the spread operator `...` do when placed inside a List literal?",
      options: [
        "Inserts all elements of another collection into the list",
        "Deletes all null values",
        "Reverses the list",
        "Multiplies all list elements"
      ],
      answer: 0,
      xp: 60,
      explanation: "The spread operator `...` unpacks elements of a collection directly into another collection."
    },
    {
      id: "l2_q5",
      prompt: "What is the null-aware spread operator in Dart?",
      options: ["...?", "?...", "..?", "??..."],
      answer: 0,
      xp: 60,
      explanation: "`...?` prevents runtime exceptions by evaluating to nothing if the target collection is null."
    },
    {
      id: "l2_q6",
      prompt: "What is a key property of a Dart Set?",
      options: ["Indexed numbers", "Allows duplicate elements", "Unordered collection of unique items", "Keys and values"],
      answer: 2,
      xp: 60,
      explanation: "A `Set` is an unordered collection containing only unique items (duplicates are automatically discarded)."
    },
    {
      id: "l2_q7",
      prompt: "Which Map method retrieves a value or computes and inserts it if missing?",
      options: ["getOrPut()", "putIfAbsent()", "insertDefault()", "setIfMissing()"],
      answer: 1,
      xp: 60,
      explanation: "`map.putIfAbsent(key, () => defaultValue)` looks up `key` and inserts the computed default if absent."
    },
    {
      id: "l2_q8",
      prompt: "What is collection 'if' in Dart?",
      options: [
        "Conditionally adding an item inside a collection literal",
        "An if statement before a loop",
        "A ternary operator",
        "A type check"
      ],
      answer: 0,
      xp: 60,
      explanation: "Collection `if` lets you conditionally include elements inside list, set, or map literals."
    },
    {
      id: "l2_q9",
      prompt: "What does List method `map()` return in Dart?",
      options: ["List", "Iterable", "Map", "Set"],
      answer: 1,
      xp: 60,
      explanation: "`List.map()` returns a lazy `Iterable<T>`. You must call `.toList()` if a concrete List is required."
    },
    {
      id: "l2_q10",
      prompt: "How do optional positional parameters declared in Dart functions?",
      options: ["Curly braces { }", "Square brackets [ ]", "Angle brackets < >", "Parentheses ( )"],
      answer: 1,
      xp: 60,
      explanation: "Square brackets `[]` define optional positional parameters in function parameter lists."
    },
    {
      id: "l2_q11",
      prompt: "What is a closure in Dart?",
      options: [
        "A function object that has access to variables in its lexical scope",
        "A class constructor",
        "A closed file handle",
        "An abstract class"
      ],
      answer: 0,
      xp: 60,
      explanation: "A closure is a function object that retains access to variables in its surrounding lexical scope even when executed outside."
    },
    {
      id: "l2_q12",
      prompt: "Which method combines all items in a collection into a single value using an accumulator?",
      options: ["map()", "fold()", "where()", "expand()"],
      answer: 1,
      xp: 60,
      explanation: "`fold(initialValue, (previousValue, element) => ...)` reduces a collection starting with an explicit initial seed."
    },
    {
      id: "l2_q13",
      prompt: "What happens if you add a duplicate item to a Dart Set?",
      options: ["Throws runtime error", "Overwrites original item", "Ignored silently without duplicate entry", "Appends at end"],
      answer: 2,
      xp: 60,
      explanation: "Adding a duplicate element to a `Set` returns `false` and does not alter the collection."
    },
    {
      id: "l2_q14",
      prompt: "How do you check if a Map contains a specific key in Dart?",
      options: ["map.has(key)", "map.containsKey(key)", "map.includes(key)", "map.exists(key)"],
      answer: 1,
      xp: 60,
      explanation: "`map.containsKey(key)` checks whether a given key exists in the map."
    },
    {
      id: "l2_q15",
      prompt: "What is the return type of a function that returns no value in Dart?",
      options: ["null", "void", "empty", "Never"],
      answer: 1,
      xp: 60,
      explanation: "`void` specifies that a function completes without returning a value."
    }
  ],

  // --------------------------------------------------------------------------
  // Level 3: OOP (15 Questions)
  // --------------------------------------------------------------------------
  3: [
    {
      id: "l3_q1",
      prompt: "Which keyword is used to inherit from a superclass in Dart?",
      options: ["implements", "extends", "with", "inherits"],
      answer: 1,
      xp: 75,
      explanation: "`extends` creates a subclass relationship in single-inheritance Dart."
    },
    {
      id: "l3_q2",
      prompt: "How do you call a superclass constructor from a subclass initializing list?",
      options: ["parent()", "super()", "base()", "this.super()"],
      answer: 1,
      xp: 75,
      explanation: "`super(...)` invokes the superclass constructor."
    },
    {
      id: "l3_q3",
      prompt: "What keyword is used to apply a mixin to a class?",
      options: ["mixin", "with", "uses", "implements"],
      answer: 1,
      xp: 75,
      explanation: "Mixins are applied using the `with` keyword (e.g. `class Dog extends Animal with Swimmer`)."
    },
    {
      id: "l3_q4",
      prompt: "Can an abstract class in Dart be directly instantiated using `new` or generative constructor?",
      options: ["Yes, always", "No, abstract classes cannot be instantiated directly", "Only if it has no methods", "Only in debug mode"],
      answer: 1,
      xp: 75,
      explanation: "Abstract classes serve as blueprints and cannot be directly instantiated."
    },
    {
      id: "l3_q5",
      prompt: "How does Dart handle interfaces?",
      options: [
        "Every class implicitly defines an interface; use `implements` to implement it",
        "Dart uses the `interface` keyword for all interfaces",
        "Dart does not support interfaces",
        "Only mixins can act as interfaces"
      ],
      answer: 0,
      xp: 75,
      explanation: "Dart has no explicit `interface` keyword for definitions; every class implicitly defines an interface that can be implemented using `implements`."
    },
    {
      id: "l3_q6",
      prompt: "What is a factory constructor in Dart?",
      options: [
        "A constructor that can return an existing instance or subclass instance instead of creating a new one",
        "A constructor that only builds static data",
        "A constructor that runs on worker threads",
        "A private method"
      ],
      answer: 0,
      xp: 75,
      explanation: "`factory` constructors do not necessarily create a fresh instance of their class; they can return cached instances or instances of subclasses."
    },
    {
      id: "l3_q7",
      prompt: "What constraint limits which classes can apply a mixin using `mixin M on SuperClass`?",
      options: ["extends constraint", "on constraint", "where constraint", "with constraint"],
      answer: 1,
      xp: 75,
      explanation: "The `on` clause restricts a mixin so it can only be applied to classes that extend or implement the specified superclass."
    },
    {
      id: "l3_q8",
      prompt: "What annotation should be used when overriding a superclass method?",
      options: ["@override", "@overload", "@super", "@virtual"],
      answer: 0,
      xp: 75,
      explanation: "`@override` tells the compiler that a method is intended to override a member in a superclass."
    },
    {
      id: "l3_q9",
      prompt: "What is a generative constructor?",
      options: [
        "A standard constructor that instantiates and initializes fields of a class",
        "A factory constructor",
        "A static method",
        "An abstract getter"
      ],
      answer: 0,
      xp: 75,
      explanation: "A generative constructor creates a new instance of a class and initializes its instance fields."
    },
    {
      id: "l3_q10",
      prompt: "What is the scope of a `static` member in a Dart class?",
      options: [
        "Class-level (shared across all instances without requiring an instance)",
        "Instance-level (unique per object)",
        "Global script level",
        "Local method level"
      ],
      answer: 0,
      xp: 75,
      explanation: "Static members belong to the class itself rather than any individual instance of the class."
    },
    {
      id: "l3_q11",
      prompt: "What keyword defines getter and setter methods in Dart classes?",
      options: ["get and set", "read and write", "getter and setter", "fetch and store"],
      answer: 0,
      xp: 75,
      explanation: "Dart uses the `get` and `set` keywords to define property accessors and mutators."
    },
    {
      id: "l3_q12",
      prompt: "What is initializer list syntax in Dart constructors?",
      options: [
        "Code after colon `:` before the constructor body to set fields or call super",
        "A list of objects",
        "A factory method",
        "A static const list"
      ],
      answer: 0,
      xp: 75,
      explanation: "Initializer lists execute after parameters are evaluated but before the constructor body runs."
    },
    {
      id: "l3_q13",
      prompt: "Can a Dart class implement multiple interfaces?",
      options: ["Yes, separated by commas (implements A, B, C)", "No, Dart only supports 1 interface", "Only with mixins", "Only for abstract classes"],
      answer: 0,
      xp: 75,
      explanation: "A class can implement multiple interfaces using comma-separated class names following `implements`."
    },
    {
      id: "l3_q14",
      prompt: "Which constructor form redirects call to another constructor in the same class?",
      options: ["Redirecting constructor (Point.origin() : this(0, 0);)", "Factory constructor", "Const constructor", "Named mixin"],
      answer: 0,
      xp: 75,
      explanation: "A redirecting constructor delegates initialization to another constructor in the same class using `this(...)` in its initializer list."
    },
    {
      id: "l3_q15",
      prompt: "What is required for a constructor to be declared as `const`?",
      options: [
        "All instance fields of the class must be `final`",
        "Class must be abstract",
        "Must return null",
        "Must be static"
      ],
      answer: 0,
      xp: 75,
      explanation: "To create compile-time constant objects, all instance variables of the class must be declared `final`."
    }
  ],

  // --------------------------------------------------------------------------
  // Level 4: Safety & Control (15 Questions)
  // --------------------------------------------------------------------------
  4: [
    {
      id: "l4_q1",
      prompt: "What does Sound Null Safety guarantee in Dart?",
      options: [
        "A non-nullable variable can NEVER contain a null value at runtime",
        "All variables are null by default",
        "Null pointer exceptions are ignored silently",
        "Null values are automatically converted to 0"
      ],
      answer: 0,
      xp: 80,
      explanation: "Sound Null Safety guarantees that non-nullable types will never hold null at runtime, eliminating NullPointerExceptions."
    },
    {
      id: "l4_q2",
      prompt: "How do you declare a variable as nullable in Dart?",
      options: ["Append ? to the type (e.g. String?)", "Prepend null", "Use var?", "Use late"],
      answer: 0,
      xp: 80,
      explanation: "Appending a `?` after a type name explicitly allows the variable to hold `null`."
    },
    {
      id: "l4_q3",
      prompt: "What does the `late` keyword specify in Dart?",
      options: [
        "Declares a non-nullable variable that will be initialized after declaration",
        "Delays function execution by 1 second",
        "Creates a background thread",
        "Makes a variable nullable"
      ],
      answer: 0,
      xp: 80,
      explanation: "`late` marks a non-nullable variable for deferred initialization before its first read."
    },
    {
      id: "l4_q4",
      prompt: "What is the null assertion operator `!` used for?",
      options: [
        "Casts a nullable expression to a non-nullable type, throwing a runtime error if null",
        "Negates a boolean",
        "Checks equality",
        "Prints a warning"
      ],
      answer: 0,
      xp: 80,
      explanation: "The bang operator `!` forces a nullable variable into a non-nullable type; if it is null, an exception is thrown."
    },
    {
      id: "l4_q5",
      prompt: "What operator is used for null-aware member access (invoking a method only if non-null)?",
      options: ["?.", "??", "!!", "?:"],
      answer: 0,
      xp: 80,
      explanation: "The `?.` operator guards property/method access so that if the receiver is null, the expression safely yields null without crashing."
    },
    {
      id: "l4_q6",
      prompt: "Which clause in exception handling catches specific exception types in Dart?",
      options: ["on ExceptionType", "catch Type", "when Type", "if Type"],
      answer: 0,
      xp: 80,
      explanation: "The `on SpecificException` syntax catches specific exception classes."
    },
    {
      id: "l4_q7",
      prompt: "What does the `finally` block do in exception handling?",
      options: [
        "Executes ALWAYS, regardless of whether an exception was thrown or caught",
        "Only runs when an error occurs",
        "Cancels the error",
        "Returns a default value"
      ],
      answer: 0,
      xp: 80,
      explanation: "The `finally` block always runs after `try`/`catch` blocks complete, making it ideal for cleanup code."
    },
    {
      id: "l4_q8",
      prompt: "What keyword raises an exception in Dart?",
      options: ["throw", "raise", "error", "signal"],
      answer: 0,
      xp: 80,
      explanation: "`throw Exception('Message')` raises an exception or error object in Dart."
    },
    {
      id: "l4_q9",
      prompt: "What are enhanced enums in Dart (introduced in Dart 2.17)?",
      options: [
        "Enums that can define fields, constructors, getters, and methods",
        "Enums that allow duplicate names",
        "Enums with infinite values",
        "Enums for web only"
      ],
      answer: 0,
      xp: 80,
      explanation: "Enhanced enums allow declaring constructors, instance fields, methods, and getters on enum declarations."
    },
    {
      id: "l4_q10",
      prompt: "What property returns the index position of an enum value?",
      options: ["index", "position", "id", "ordinal"],
      answer: 0,
      xp: 80,
      explanation: "Every enum value has a zero-based `.index` getter returning its declaration order position."
    },
    {
      id: "l4_q11",
      prompt: "What happens if you read an uninitialized `late` non-nullable variable?",
      options: ["Throws LateInitializationError at runtime", "Returns null", "Returns 0", "Compiler error"],
      answer: 0,
      xp: 80,
      explanation: "Accessing a `late` variable before initializing it throws a `LateInitializationError` at runtime."
    },
    {
      id: "l4_q12",
      prompt: "What is null-aware assignment operator `??=`?",
      options: [
        "Assigns value to variable ONLY if the variable is currently null",
        "Assigns value always",
        "Compares two variables",
        "Deletes a variable"
      ],
      answer: 0,
      xp: 80,
      explanation: "`b ??= value` assigns `value` to `b` only if `b` is currently `null`."
    },
    {
      id: "l4_q13",
      prompt: "In `catch (e, s)`, what does the second parameter `s` represent?",
      options: ["StackTrace object", "Status code", "Second error", "String message"],
      answer: 0,
      xp: 80,
      explanation: "The second parameter in a `catch` block captures the execution `StackTrace`."
    },
    {
      id: "l4_q14",
      prompt: "Can any object be thrown as an exception in Dart?",
      options: ["Yes, Dart allows throwing any non-null object", "No, only Exception instances", "No, only Error instances", "Only strings"],
      answer: 0,
      xp: 80,
      explanation: "Dart allows throwing any non-null object (including custom classes and strings), though extending `Exception` or `Error` is standard practice."
    },
    {
      id: "l4_q15",
      prompt: "How do you access all values of an enum as a List?",
      options: ["EnumType.values", "EnumType.all()", "EnumType.list", "EnumType.items"],
      answer: 0,
      xp: 80,
      explanation: "`EnumType.values` returns a list of all enum constant values."
    }
  ],

  // --------------------------------------------------------------------------
  // Level 5: Asynchronous (15 Questions)
  // --------------------------------------------------------------------------
  5: [
    {
      id: "l5_q1",
      prompt: "What does a `Future<T>` represent in Dart?",
      options: [
        "A computation that completes asynchronously with a value of type T or an error",
        "A synchronous loop",
        "A thread pool",
        "A database table"
      ],
      answer: 0,
      xp: 90,
      explanation: "A `Future` represents an asynchronous operation that will complete later with a value or error."
    },
    {
      id: "l5_q2",
      prompt: "What keyword pauses function execution until a Future completes?",
      options: ["await", "yield", "pause", "wait"],
      answer: 0,
      xp: 90,
      explanation: "`await` pauses execution inside an `async` function until the targeted Future completes."
    },
    {
      id: "l5_q3",
      prompt: "What must be added to a function signature if it uses `await` inside its body?",
      options: ["async keyword", "future keyword", "stream keyword", "isolate keyword"],
      answer: 0,
      xp: 90,
      explanation: "Any function using `await` inside its body must be marked with the `async` keyword modifier."
    },
    {
      id: "l5_q4",
      prompt: "What is the difference between single-subscription and broadcast Streams?",
      options: [
        "Single-subscription allows 1 listener; broadcast allows multiple concurrent listeners",
        "Broadcast streams only work for numbers",
        "Single-subscription streams never close",
        "There is no difference"
      ],
      answer: 0,
      xp: 90,
      explanation: "Single-subscription streams can only be listened to once, whereas broadcast streams accept multiple simultaneous listeners."
    },
    {
      id: "l5_q5",
      prompt: "Which generator modifier returns a `Stream<T>` and emits values using `yield`?",
      options: ["async*", "sync*", "stream*", "generator*"],
      answer: 0,
      xp: 90,
      explanation: "An `async*` generator function returns a `Stream` and emits data asynchronously using `yield`."
    },
    {
      id: "l5_q6",
      prompt: "Which generator modifier returns an `Iterable<T>` synchronously?",
      options: ["sync*", "async*", "yield*", "iterable*"],
      answer: 0,
      xp: 90,
      explanation: "A `sync*` generator returns a lazy `Iterable` synchronously, emitting values via `yield`."
    },
    {
      id: "l5_q7",
      prompt: "In Dart's Event Loop, which queue has HIGHER execution priority?",
      options: ["Microtask Queue", "Event Queue", "Timer Queue", "IO Queue"],
      answer: 0,
      xp: 90,
      explanation: "The Microtask queue is emptied completely before the Event loop processes the next item from the Event queue."
    },
    {
      id: "l5_q8",
      prompt: "How do you schedule a callback onto the Microtask Queue?",
      options: ["scheduleMicrotask()", "Future.microtask()", "Both options are correct", "Timer.run()"],
      answer: 2,
      xp: 90,
      explanation: "Both `scheduleMicrotask(...)` and `Future.microtask(...)` place callbacks on the high-priority Microtask queue."
    },
    {
      id: "l5_q9",
      prompt: "What keyword delegates generator emission to another stream or iterable?",
      options: ["yield*", "yield all", "emit*", "delegate"],
      answer: 0,
      xp: 90,
      explanation: "`yield*` delegates sequence emission to a sub-stream or sub-iterable."
    },
    {
      id: "l5_q10",
      prompt: "What class in `dart:async` is used to create and control a Stream manually?",
      options: ["StreamController", "StreamBuilder", "StreamHandler", "StreamEmitter"],
      answer: 0,
      xp: 90,
      explanation: "`StreamController<T>` provides a sink to send data/events and exposes a `stream` for listeners."
    },
    {
      id: "l5_q11",
      prompt: "How do you catch errors when using `await` in an async function?",
      options: ["Standard try-catch block", ".catchError() method", "on Error clause", "async-catch statement"],
      answer: 0,
      xp: 90,
      explanation: "When using `await`, you handle errors cleanly with standard synchronous-style `try-catch` blocks."
    },
    {
      id: "l5_q12",
      prompt: "What loop syntax is used to consume items from a Stream asynchronously?",
      options: ["await for (var item in stream)", "for (var item in stream)", "while (stream.hasData)", "forEach stream"],
      answer: 0,
      xp: 90,
      explanation: "`await for (final item in stream)` iterates over stream values as they arrive."
    },
    {
      id: "l5_q13",
      prompt: "What method transforms events emitted by a Stream into new events?",
      options: ["stream.transform()", "stream.convert()", "stream.pipe()", "stream.map()"],
      answer: 0,
      xp: 90,
      explanation: "`stream.transform(StreamTransformer)` applies a custom transformer to convert input events into output events."
    },
    {
      id: "l5_q14",
      prompt: "What happens if a single-subscription stream receives a second listener?",
      options: ["Throws StateError", "Ignores second listener", "Converts to broadcast automatically", "Clears first listener"],
      answer: 0,
      xp: 90,
      explanation: "Listening a second time to a single-subscription stream throws a `StateError` ('Stream has already been listened to')."
    },
    {
      id: "l5_q15",
      prompt: "What constructor creates a Future that completes after a specified delay duration?",
      options: ["Future.delayed(duration, callback)", "Future.wait(duration)", "Future.sleep(duration)", "Future.after(duration)"],
      answer: 0,
      xp: 90,
      explanation: "`Future.delayed(Duration(...), () => ...)` schedules execution after a specified time interval."
    }
  ],

  // --------------------------------------------------------------------------
  // Level 6: Advance (15 Questions)
  // --------------------------------------------------------------------------
  6: [
    {
      id: "l6_q1",
      prompt: "What is the primary benefit of Generics in Dart?",
      options: [
        "Provides compile-time type safety and eliminates runtime type casts",
        "Increases app binary size",
        "Makes functions run on background threads",
        "Replaces sound null safety"
      ],
      answer: 0,
      xp: 100,
      explanation: "Generics enforce strict type checks at compile time, preventing runtime type assignment bugs."
    },
    {
      id: "l6_q2",
      prompt: "How do you restrict a Generic type parameter to numbers only?",
      options: ["<T extends num>", "<T implements num>", "<T : num>", "<T super num>"],
      answer: 0,
      xp: 100,
      explanation: "The clause `<T extends num>` bounds the generic type parameter `T` to subtypes of `num`."
    },
    {
      id: "l6_q3",
      prompt: "What syntax declares an extension method on String in Dart?",
      options: [
        "extension MyUtils on String { ... }",
        "class String extension { ... }",
        "String.extend({ ... })",
        "mixin StringExtension { ... }"
      ],
      answer: 0,
      xp: 100,
      explanation: "`extension ExtensionName on Type` defines extension methods and getters on an existing type."
    },
    {
      id: "l6_q4",
      prompt: "Which Dart library is required to perform File and Directory I/O operations?",
      options: ["dart:io", "dart:file", "dart:core", "dart:async"],
      answer: 0,
      xp: 100,
      explanation: "`dart:io` contains classes like `File`, `Directory`, and `Platform` for system I/O operations."
    },
    {
      id: "l6_q5",
      prompt: "What syntax represents a Record literal in Dart 3?",
      options: ["(1, 'Alex')", "[1, 'Alex']", "{1, 'Alex'}", "<1, 'Alex'>"],
      answer: 0,
      xp: 100,
      explanation: "Records in Dart 3 are declared using parentheses `(value1, value2)`."
    },
    {
      id: "l6_q6",
      prompt: "How do you access positional fields in a Dart 3 Record `var r = (10, 'Flutter');`?",
      options: ["r.$1 and r.$2", "r[0] and r[1]", "r.first and r.second", "r.get(1)"],
      answer: 0,
      xp: 100,
      explanation: "Positional Record fields are accessed via 1-based getters: `$1`, `$2`, etc."
    },
    {
      id: "l6_q7",
      prompt: "What does a Switch Expression return in Dart 3?",
      options: [
        "Directly produces a value evaluated from the matching pattern case",
        "Always returns boolean",
        "Returns void",
        "Returns a Future"
      ],
      answer: 0,
      xp: 100,
      explanation: "Dart 3 switch expressions evaluate matching cases and directly return a result value."
    },
    {
      id: "l6_q8",
      prompt: "What modifier creates a closed class hierarchy where all subclasses must be in the same library?",
      options: ["sealed", "interface", "base", "final"],
      answer: 0,
      xp: 100,
      explanation: "`sealed class` ensures a closed hierarchy, enabling exhaustive pattern matching checks in switch expressions."
    },
    {
      id: "l6_q9",
      prompt: "Which class modifier prevents a class from being inherited (`extends`) or implemented outside its library?",
      options: ["final", "sealed", "interface", "base"],
      answer: 0,
      xp: 100,
      explanation: "The `final` class modifier prohibits extending or implementing the class outside its defining file."
    },
    {
      id: "l6_q10",
      prompt: "What is a pure function in Functional Programming?",
      options: [
        "A function that returns the same output for the same input with no side effects",
        "A function that uses async await",
        "A function with no arguments",
        "A static method"
      ],
      answer: 0,
      xp: 100,
      explanation: "Pure functions depend strictly on their arguments, producing no observable side effects (like mutating global state or I/O)."
    },
    {
      id: "l6_q11",
      prompt: "What method tests whether AT LEAST ONE element in a collection satisfies a predicate?",
      options: ["any()", "every()", "contains()", "where()"],
      answer: 0,
      xp: 100,
      explanation: "`iterable.any(test)` returns `true` if at least one element meets the predicate condition."
    },
    {
      id: "l6_q12",
      prompt: "What method tests whether ALL elements in a collection satisfy a predicate?",
      options: ["every()", "any()", "all()", "where()"],
      answer: 0,
      xp: 100,
      explanation: "`iterable.every(test)` returns `true` only if every element satisfies the predicate."
    },
    {
      id: "l6_q13",
      prompt: "In `dart:io`, how do you read a text file asynchronously?",
      options: ["file.readAsString()", "file.readText()", "file.load()", "file.parseString()"],
      answer: 0,
      xp: 100,
      explanation: "`File.readAsString()` reads the entire file contents into a `Future<String>` asynchronously."
    },
    {
      id: "l6_q14",
      prompt: "Can records have named fields in Dart 3 (e.g. `({int x, int y}) point`)?",
      options: ["Yes, records support both positional and named fields", "No, records only allow numbers", "No, records only allow positional fields", "Only in Flutter web"],
      answer: 0,
      xp: 100,
      explanation: "Records support both positional fields `(1, 2)` and named fields `(x: 10, y: 20)`."
    },
    {
      id: "l6_q15",
      prompt: "What wild-card pattern matches any value without binding it to a variable in Dart 3?",
      options: ["Underscore _", "Asterisk *", "Question mark ?", "Null"],
      answer: 0,
      xp: 100,
      explanation: "The wildcard pattern `_` matches any value in pattern matching without binding a variable."
    }
  ],

  // --------------------------------------------------------------------------
  // Level 7: Concurrency (15 Questions)
  // --------------------------------------------------------------------------
  7: [
    {
      id: "l7_q1",
      prompt: "Do Dart Isolates share memory heaps with each other?",
      options: [
        "No, each Isolate has its own isolated memory heap and event loop",
        "Yes, all Isolates share global static memory",
        "Only when running on Android",
        "Yes, via pointers"
      ],
      answer: 0,
      xp: 150,
      explanation: "Isolates are completely memory-isolated. They share no memory heap and communicate exclusively via message passing."
    },
    {
      id: "l7_q2",
      prompt: "Which modern API (Dart 2.19+) simplifies spawning an Isolate for short single computation tasks?",
      options: ["Isolate.run()", "Isolate.spawn()", "Isolate.compute()", "Isolate.execute()"],
      answer: 0,
      xp: 150,
      explanation: "`Isolate.run()` spawns an isolate, executes a callback function, and returns the result back to the main thread cleanly."
    },
    {
      id: "l7_q3",
      prompt: "How do two Isolates send and receive messages?",
      options: [
        "Using ReceivePort and SendPort",
        "Using shared global variables",
        "Using file streams",
        "Using HTTP calls"
      ],
      answer: 0,
      xp: 150,
      explanation: "Isolates exchange messages by sending data through a `SendPort` to a listening `ReceivePort`."
    },
    {
      id: "l7_q4",
      prompt: "What happens to the Flutter UI if a heavy CPU task (like parsing 50MB JSON) runs on the main UI isolate?",
      options: [
        "The UI freezes, drops frames, and stutters (jank)",
        "The app speeds up",
        "The OS automatically spawns background threads",
        "No effect at all"
      ],
      answer: 0,
      xp: 150,
      explanation: "Running heavy synchronous tasks on the main isolate blocks the event loop, causing dropped frames and UI jank."
    },
    {
      id: "l7_q5",
      prompt: "What types of objects can be passed between Isolates via ports?",
      options: [
        "Primitive types, lists, maps, SendPorts, and sendable objects",
        "Open database handles",
        "Live UI widget references",
        "File locks"
      ],
      answer: 0,
      xp: 150,
      explanation: "Dart allows sending primitives, collections, SendPorts, and objects that do not wrap native memory handles."
    },
    {
      id: "l7_q6",
      prompt: "What method is used to forcefully terminate a background Isolate?",
      options: ["isolate.kill()", "isolate.stop()", "isolate.close()", "isolate.abort()"],
      answer: 0,
      xp: 150,
      explanation: "`Isolate.kill(priority: Isolate.immediate)` terminates an isolate immediately."
    },
    {
      id: "l7_q7",
      prompt: "Does Flutter's `compute()` helper function use Isolates under the hood?",
      options: ["Yes, compute() wraps Isolate.run / Isolate.spawn", "No, compute() uses web workers only", "No, compute() runs synchronously", "Only on iOS"],
      answer: 0,
      xp: 150,
      explanation: "Flutter's top-level `foundation` function `compute()` spawns a background isolate to perform heavy computations."
    },
    {
      id: "l7_q8",
      prompt: "Why are background threads called 'Isolates' in Dart?",
      options: [
        "Because their memory is strictly isolated from all other threads",
        "Because they only run when offline",
        "Because they isolated from the internet",
        "Because they run on single core CPUs only"
      ],
      answer: 0,
      xp: 150,
      explanation: "They are called 'Isolates' because memory is completely isolated between threads with no shared state."
    },
    {
      id: "l7_q9",
      prompt: "What is returned when you create a new `ReceivePort()`?",
      options: [
        "A port that implements Stream and exposes a `sendPort` property",
        "A Future",
        "An Isolate object",
        "A boolean"
      ],
      answer: 0,
      xp: 150,
      explanation: "`ReceivePort` extends `Stream` to listen for incoming messages and provides `sendPort` for senders."
    },
    {
      id: "l7_q10",
      prompt: "What happens to objects sent across Isolates in native Dart?",
      options: [
        "Objects are transferred or copied depending on the Dart runtime optimization",
        "Objects are converted to string always",
        "Objects are deleted from memory",
        "Objects become read-only"
      ],
      answer: 0,
      xp: 150,
      explanation: "Most messages sent between isolates are copied, though un-shared immutable data or `Isolate.run` results can be transferred efficiently."
    },
    {
      id: "l7_q11",
      prompt: "Can an Isolate spawn another child Isolate?",
      options: ["Yes, isolates can spawn child isolates", "No, only the main isolate can spawn isolates", "Only on desktop", "Only in debug build"],
      answer: 0,
      xp: 150,
      explanation: "Any isolate can spawn additional child isolates using `Isolate.spawn()`."
    },
    {
      id: "l7_q12",
      prompt: "Which Isolate handles building Flutter UI widgets and processing user taps?",
      options: ["Main Isolate (UI Isolate)", "Background Isolate", "Root Worker", "System Thread"],
      answer: 0,
      xp: 150,
      explanation: "The Main Isolate executes the app entry point `main()`, handles UI rendering, and processes gestures."
    },
    {
      id: "l7_q13",
      prompt: "What method closes a `ReceivePort` so it no longer receives incoming messages?",
      options: ["receivePort.close()", "receivePort.stop()", "receivePort.clear()", "receivePort.dispose()"],
      answer: 0,
      xp: 150,
      explanation: "Calling `receivePort.close()` shuts down the port listener and frees up resources."
    },
    {
      id: "l7_q14",
      prompt: "Is `Isolate.run()` suitable for long-lived background background workers?",
      options: [
        "No, Isolate.run() is for short single-shot tasks; use Isolate.spawn() with ports for long-lived workers",
        "Yes, Isolate.run() runs forever",
        "Isolate.run() is deprecated",
        "Only for database connections"
      ],
      answer: 0,
      xp: 150,
      explanation: "`Isolate.run()` automatically closes the isolate after returning its single result. Use `Isolate.spawn()` with persistent ports for ongoing workers."
    },
    {
      id: "l7_q15",
      prompt: "How do Isolates achieve high-performance multi-core execution?",
      options: [
        "By running separate event loops on distinct CPU cores without lock contention",
        "By disabling garbage collection",
        "By compiling to WebAssembly",
        "By bypassing OS threads"
      ],
      answer: 0,
      xp: 150,
      explanation: "Because isolates share no memory, CPU cores execute them independently without memory lock overhead or race conditions."
    }
  ]
};

// Gamified Quiz Engine Controller
class QuizEngine {
  constructor() {
    this.currentLevel = 1;
    this.currentQuestionIdx = 0;
    this.userScore = 0;
    this.userXP = parseInt(localStorage.getItem('dart_cookbook_xp') || '0', 10);
    this.streak = 0;

    this.init();
  }

  init() {
    this.updateXPDisplay();
    this.bindEvents();
  }

  updateXPDisplay() {
    const xpDisplay = document.getElementById('user-xp-display');
    const rankDisplay = document.getElementById('user-rank-display');

    if (xpDisplay) xpDisplay.textContent = this.userXP;

    if (rankDisplay) {
      let rank = "Dart Novice";
      if (this.userXP >= 5000) rank = "Dart Master Grandmaster 👑";
      else if (this.userXP >= 3000) rank = "Dart Specialist ⚡";
      else if (this.userXP >= 1500) rank = "Dart Architect 🏛️";
      else if (this.userXP >= 500) rank = "Dart Developer 👨‍💻";

      rankDisplay.textContent = rank;
    }
  }

  startLevel(levelNum) {
    if (!QUIZ_QUESTIONS[levelNum]) return;

    this.currentLevel = levelNum;
    this.currentQuestionIdx = 0;
    this.userScore = 0;
    this.streak = 0;

    const modal = document.getElementById('quiz-arena-modal');
    if (modal) modal.classList.remove('hidden');

    this.renderQuestion();
  }

  renderQuestion() {
    const questions = QUIZ_QUESTIONS[this.currentLevel];
    if (!questions || this.currentQuestionIdx >= questions.length) {
      this.finishLevel();
      return;
    }

    const q = questions[this.currentQuestionIdx];

    const levelTitle = document.getElementById('arena-level-title');
    const xpReward = document.getElementById('arena-xp-reward');
    const promptEl = document.getElementById('question-prompt');
    const optionsContainer = document.getElementById('options-container');
    const expBox = document.getElementById('explanation-box');
    const nextBtn = document.getElementById('next-question-btn');

    if (levelTitle) levelTitle.textContent = `Level ${this.currentLevel} • Question ${this.currentQuestionIdx + 1} of ${questions.length}`;
    if (xpReward) xpReward.textContent = `+${q.xp} XP`;
    if (promptEl) promptEl.textContent = q.prompt;
    if (expBox) expBox.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');

    if (optionsContainer) {
      optionsContainer.innerHTML = q.options.map((opt, idx) => `
        <button class="option-btn" onclick="window.quizEngine.submitAnswer(${idx})">
          <span class="opt-prefix">${String.fromCharCode(65 + idx)}</span>
          <span class="opt-text">${opt}</span>
        </button>
      `).join('');
    }
  }

  submitAnswer(selectedIdx) {
    const questions = QUIZ_QUESTIONS[this.currentLevel];
    const q = questions[this.currentQuestionIdx];
    const options = document.querySelectorAll('.option-btn');

    options.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('wrong');
      }
    });

    const expBox = document.getElementById('explanation-box');
    const expText = document.getElementById('explanation-text');
    const nextBtn = document.getElementById('next-question-btn');

    if (selectedIdx === q.answer) {
      if (window.soundEngine) window.soundEngine.playSuccess();
      this.userScore++;
      this.streak++;
      this.userXP += q.xp;
      localStorage.setItem('dart_cookbook_xp', this.userXP.toString());
      this.updateXPDisplay();

      if (expText) expText.innerHTML = `<strong>Correct! 🎉</strong> ${q.explanation}`;
    } else {
      if (window.soundEngine) window.soundEngine.playError();
      this.streak = 0;
      if (expText) expText.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}`;
    }

    if (expBox) expBox.classList.remove('hidden');
    if (nextBtn) nextBtn.classList.remove('hidden');
  }

  nextQuestion() {
    this.currentQuestionIdx++;
    this.renderQuestion();
  }

  finishLevel() {
    const questions = QUIZ_QUESTIONS[this.currentLevel];
    const total = questions.length;
    const pct = Math.round((this.userScore / total) * 100);

    if (window.soundEngine) window.soundEngine.playFanfare();

    if (typeof confetti === 'function') {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    const promptEl = document.getElementById('question-prompt');
    const optionsContainer = document.getElementById('options-container');
    const expBox = document.getElementById('explanation-box');
    const nextBtn = document.getElementById('next-question-btn');

    if (promptEl) promptEl.textContent = `Level ${this.currentLevel} Complete! 🏆`;
    if (optionsContainer) {
      optionsContainer.innerHTML = `
        <div class="level-summary-card">
          <h2>Score: ${this.userScore} / ${total} (${pct}%)</h2>
          <p>${pct >= 80 ? 'Mastery achieved! Outstanding performance! 🌟' : 'Good effort! Review the book and try again for 100%! 🚀'}</p>
        </div>
      `;
    }
    if (expBox) expBox.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
  }

  bindEvents() {
    // Level Card Listeners
    document.querySelectorAll('.quiz-level-card').forEach(card => {
      card.addEventListener('click', () => {
        const lvl = parseInt(card.getAttribute('data-level'), 10);
        this.startLevel(lvl);
      });
    });
  }
}

function exitQuizArena() {
  const modal = document.getElementById('quiz-arena-modal');
  if (modal) modal.classList.add('hidden');
}

function nextQuizQuestion() {
  if (window.quizEngine) window.quizEngine.nextQuestion();
}
