/**
 * Dart Cookbook - Part 7: Concurrency
 * Topics: Isolates, SendPort, ReceivePort, Worker Isolates, Isolate.run and compute
 */
window.part7Content = {
  partId: 7,
  title: "Part 7: Concurrency",
  pages: [
    {
      pageId: "p7_cover",
      header: "PART 7: CONCURRENCY",
      content: `
        <div class="chapter-title-page">
          <div class="chapter-number">CHAPTER 07</div>
          <h1 class="chapter-heading">Concurrency & Isolates</h1>
          <p class="chapter-subtitle">Achieve true multi-threaded CPU parallel processing in Dart using memory-isolated threads (Isolates) and port communication.</p>
        </div>
      `
    },
    {
      pageId: "p7_isolates_intro",
      header: "7.1 ISOLATES ARCHITECTURE",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-microchip"></i> 1. What are Isolates?</h2>
        <p class="topic-paragraph">
          Unlike traditional threads that share memory and require locks/mutexes, Dart code executes inside <strong>Isolates</strong>. Each Isolate has its own private heap memory and event loop. Isolates communicate strictly by passing messages over <code>Ports</code>.
        </p>

        <div class="callout-box tip">
          <i class="fa-solid fa-lightbulb callout-icon"></i>
          <div><strong>Why Memory Isolation?</strong> Memory isolation completely eliminates race conditions, lock deadlocks, and shared-memory synchronization bugs!</div>
        </div>

        <h3 class="section-h3">Modern Isolate API: <code>Isolate.run()</code></h3>
        <p class="topic-paragraph">
          In Dart 2.19+, <code>Isolate.run()</code> spawns a short-lived isolate, performs heavy computation, and returns the result back to the main thread cleanly.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>isolate_run.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">import 'dart:isolate';

int _heavyFibonacci(int n) {
  if (n <= 1) return n;
  return _heavyFibonacci(n - 1) + _heavyFibonacci(n - 2);
}

void main() async {
  print('Main thread starting heavy calculation...');
  
  // Offload CPU heavy work to background isolate
  final result = await Isolate.run(() => _heavyFibonacci(35));
  
  print('Computation complete in background Isolate: $result');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p7_ports",
      header: "7.2 PORTS & TWO-WAY ISOLATE COMMUNICATION",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-network-wired"></i> 2. Long-Running Worker Isolates with Ports</h2>
        <p class="topic-paragraph">
          For long-running background workers, use <code>ReceivePort</code> and <code>SendPort</code> to establish bidirectional messaging.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>isolate_ports.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">import 'dart:isolate';

// Worker entry point (runs in separate memory isolate)
void _workerIsolate(SendPort mainSendPort) {
  final workerReceivePort = ReceivePort();
  // Send worker's SendPort back to main
  mainSendPort.send(workerReceivePort.sendPort);

  workerReceivePort.listen((message) {
    if (message is String) {
      final processed = 'Worker processed: \${message.toUpperCase()}';
      mainSendPort.send(processed);
    }
  });
}

void main() async {
  final mainReceivePort = ReceivePort();
  await Isolate.spawn(_workerIsolate, mainReceivePort.sendPort);

  SendPort? workerSendPort;

  mainReceivePort.listen((message) {
    if (message is SendPort) {
      workerSendPort = message;
      print('Connected to Worker Isolate port!');
      workerSendPort?.send('Hello Isolate Worker!');
    } else {
      print('Main received response: $message');
      mainReceivePort.close(); // Clean up
    }
  });
}</code></pre>
        </div>
      `
    }
  ]
};
