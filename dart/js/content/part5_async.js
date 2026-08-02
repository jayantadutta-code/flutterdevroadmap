/**
 * Dart Cookbook - Part 5: Asynchronous
 * Topics: Futures, Async, Await, Stream, Generators such as async*, Event loop
 */
window.part5Content = {
  partId: 5,
  title: "Part 5: Asynchronous Dart",
  pages: [
    {
      pageId: "p5_cover",
      header: "PART 5: ASYNCHRONOUS",
      content: `
        <div class="chapter-title-page">
          <div class="chapter-number">CHAPTER 05</div>
          <h1 class="chapter-heading">Asynchronous Dart & Reactive Streams</h1>
          <p class="chapter-subtitle">Master Futures, async/await, reactive Streams, async* generators, and understand Dart's single-threaded Event Loop & Microtask Queue.</p>
        </div>
      `
    },
    {
      pageId: "p5_futures",
      header: "5.1 FUTURES, ASYNC & AWAIT",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-clock"></i> 1. Futures, Async & Await</h2>
        <p class="topic-paragraph">
          A <code>Future&lt;T&gt;</code> represents a computation that completes asynchronously to produce a value or error of type <code>T</code>.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>futures.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">Future<String> fetchUserRole() async {
  // Simulate network delay
  await Future.delayed(Duration(milliseconds: 500));
  return 'Lead Engineer';
}

void main() async {
  print('Fetching role...');
  final role = await fetchUserRole();
  print('Role received: $role');
  
  // Future.wait for parallel execution
  final results = await Future.wait([
    Future.value('Task A'),
    Future.value('Task B'),
  ]);
  print('Parallel results: $results');
}</code></pre>
        </div>
      `
    },
    {
      pageId: "p5_streams",
      header: "5.2 STREAMS & GENERATORS",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-water"></i> 2. Streams & Generators (async*)</h2>
        <p class="topic-paragraph">
          A <code>Stream&lt;T&gt;</code> provides an asynchronous sequence of data values over time. Generators (<code>sync*</code> and <code>async*</code>) yield values lazily.
        </p>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>streams_generators.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">// Asynchronous generator function
Stream<int> countStream(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(milliseconds: 200));
    yield i; // Emit item to stream
  }
}

void main() async {
  print('Listening to stream:');
  final stream = countStream(3);
  
  await for (final val in stream) {
    print('Stream emitted: $val');
  }
}</code></pre>
        </div>

        <h3 class="section-h3">Single Subscription vs Broadcast Streams</h3>
        <p class="topic-paragraph">
          Standard streams allow only 1 listener. Use <code>asBroadcastStream()</code> if multiple listeners are required.
        </p>
      `
    },
    {
      pageId: "p5_event_loop",
      header: "5.3 EVENT LOOP & MICROTASK QUEUE",
      content: `
        <h2 class="section-h2"><i class="fa-solid fa-arrows-spin"></i> 3. The Dart Event Loop</h2>
        <p class="topic-paragraph">
          Dart's isolate runs a single thread containing an <strong>Event Queue</strong> and a higher-priority <strong>Microtask Queue</strong>.
        </p>

        <div class="callout-box warning">
          <i class="fa-solid fa-triangle-exclamation callout-icon"></i>
          <div><strong>Execution Priority:</strong> The microtask queue is emptied completely before the event loop picks up the next I/O or timer event from the event queue!</div>
        </div>

        <div class="code-snippet-box">
          <div class="code-snippet-header">
            <span>event_loop_order.dart</span>
            <button class="code-btn" onclick="runCodeSnippet(this)"><i class="fa-solid fa-play"></i> Run</button>
          </div>
          <pre><code class="language-dart">import 'dart:async';

void main() {
  print('1. Sync Start');

  Future(() => print('4. Event Queue: Future'));

  scheduleMicrotask(() => print('3. Microtask Queue'));

  print('2. Sync End');
}</code></pre>
        </div>
      `
    }
  ]
};
