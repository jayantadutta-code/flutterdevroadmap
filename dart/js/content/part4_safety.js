/**
 * Dart Cookbook - Part 4: Safety Control
 * Topics: Null safety, Exception handling, Enums
 */
window.part4Content = {
  partId: 4,
  title: "Part 4: Safety Control",
  pages: [
    {
      pageId: "p4_cover",
      header: "PART 4: SAFETY CONTROL",
      content: `
        <div class="chapter-title-page">
          <div class="chapter-number">CHAPTER 04</div>
          <h1 class="chapter-heading">Sound Null Safety & Exception Control</h1>
          <p class="chapter-subtitle">Eliminate null pointer exceptions with sound null safety, handle runtime errors gracefully with try/catch, and leverage enhanced Enums.</p>
        </div>
      `
    },
    {
      pageId: "p4_null_safety",
      header: "4.1 SOUND NULL SAFETY",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-shield-halved"></i> 1. Sound Null Safety Engine</h2>
        <p class="topic-paragraph">
          Dart features sound null safety. Types are non-nullable by default. If a type can be null, append a <code>?</code> (e.g. <code>String?</code>).
        </p>

        <h3 class="section-h3">Null Operators: <code>?</code>, <code>?.</code>, <code>??</code>, <code>??=</code>, <code>!</code>, <code>late</code></h3>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>null_safety.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">class Database {
  // Late variable initialized on demand
  late final String connectionString = _connect();

  String _connect() {
    print('Connecting to DB...');
    return 'postgres://localhost:5432';
  }
}

void main() {
  String? name; // Nullable string
  
  // Null-aware assignment (??=)
  name ??= 'Default User';
  
  // Null-aware access (?.) and fallback (??)
  int length = name?.length ?? 0;
  
  print('Name: $name | Length: $length');
  
  final db = Database();
  print('Conn: \${db.connectionString}'); // Trigger late init
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p4_exceptions_enums",
      header: "4.2 EXCEPTION HANDLING & ENUMS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-triangle-exclamation"></i> 2. Exception Handling</h2>
        <p class="topic-paragraph">
          Dart exceptions are unhandled errors. Use <code>try</code>, <code>on Exception</code>, Catch(e, s), and <code>finally</code> blocks.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>exceptions.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">class NetworkException implements Exception {
  final String message;
  NetworkException(this.message);
  @override
  String toString() => 'NetworkException: $message';
}

void fetchData() {
  throw NetworkException('Connection timeout');
}

void main() {
  try {
    fetchData();
  } on NetworkException catch (e, stackTrace) {
    print('Caught specific: $e');
  } catch (e) {
    print('Caught generic error: $e');
  } finally {
    print('Cleanup executed.');
  }
}</code></pre>
        </div>

        <h3 class="section-h3">3. Enhanced Enums</h3>
        <p class="topic-paragraph">
          Dart enums can have fields, constructors, getters, and methods!
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>enhanced_enums.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">enum Status {
  pending(200, 'Processing request'),
  success(200, 'Completed successfully'),
  error(500, 'Internal server error');

  final int code;
  final String description;

  const Status(this.code, this.description);

  bool get isOk => code == 200;
}

void main() {
  final s = Status.success;
  print('\${s.name} -> Code \${s.code}: \${s.description} (OK? \${s.isOk})');
}</code></pre>
        </div>
      `
    }
  ]
};
