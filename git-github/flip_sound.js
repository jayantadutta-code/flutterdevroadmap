/* ==========================================================================
   Git & GitHub Interactive Flipbook - Safari & WebKit Compatible Audio Engine
   ========================================================================== */

(function() {
    window.isSoundEnabled = true;

    let sharedAudioCtx = null;

    function getAudioContext() {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtxClass) return null;

        if (!sharedAudioCtx || sharedAudioCtx.state === 'closed') {
            sharedAudioCtx = new AudioCtxClass();
        }
        return sharedAudioCtx;
    }

    // Synchronously unlock AudioContext on Safari / WebKit user interaction
    function unlockSafariAudio() {
        const ctx = getAudioContext();
        if (!ctx) return;

        if (ctx.state === 'suspended' || ctx.state === 'interrupted') {
            ctx.resume();
        }

        // Play silent 1-sample buffer to force Safari Web Audio engine state to 'running'
        try {
            const buffer = ctx.createBuffer(1, 1, 22050);
            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(ctx.destination);
            source.start(0);
        } catch (e) {}
    }

    // Register NON-PASSIVE user interaction listeners for Safari Web Audio blessing
    const events = ['touchstart', 'touchend', 'click', 'pointerdown', 'keydown'];
    events.forEach(evt => {
        window.addEventListener(evt, unlockSafariAudio, { capture: true });
    });

    window.getSharedAudioContext = getAudioContext;

    window.playPaperFlipSound = function() {
        if (!window.isSoundEnabled) return;

        // Synchronously unlock/resume on user click callstack for Safari
        unlockSafariAudio();

        const ctx = getAudioContext();
        if (!ctx) return;

        try {
            const now = ctx.currentTime;
            const sampleRate = ctx.sampleRate || 44100;

            // 1. Paper rustle noise (swoosh)
            const bufferSize = Math.floor(sampleRate * 0.22);
            const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
            const data = buffer.getChannelData(0);

            for (let i = 0; i < bufferSize; i++) {
                const progress = i / bufferSize;
                const envelope = Math.sin(progress * Math.PI) * Math.exp(-progress * 2.5);
                data[i] = (Math.random() * 2 - 1) * envelope;
            }

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            // Bandpass filter for papery friction frequency range (1000Hz - 2400Hz)
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1800, now);
            filter.Q.setValueAtTime(1.2, now);
            filter.frequency.exponentialRampToValueAtTime(600, now + 0.2);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.6, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start(now);

            // 2. Subtle paper snap (thump) at the end of flip
            const osc = ctx.createOscillator();
            const oscGain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(180, now + 0.08);
            osc.frequency.exponentialRampToValueAtTime(40, now + 0.18);

            oscGain.gain.setValueAtTime(0.0, now);
            oscGain.gain.setValueAtTime(0.25, now + 0.08);
            oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

            osc.connect(oscGain);
            oscGain.connect(ctx.destination);
            osc.start(now + 0.08);
            osc.stop(now + 0.22);
        } catch (e) {
            console.warn('Paper sound playback issue:', e);
        }
    };
})();
