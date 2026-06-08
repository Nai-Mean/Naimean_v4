// ui/performance.js

import { dom } from '../core/domRefs.js';

// ------------------------------------------------------
// INTERNAL STATE
// ------------------------------------------------------
let lastFrameTime = performance.now();
let fps = 0;
let frameCount = 0;
let fpsTimer = 0;
let perfInterval = null;

// ------------------------------------------------------
// UPDATE LOOP
// ------------------------------------------------------
function updatePerformance() {
    const now = performance.now();
    const delta = now - lastFrameTime;
    lastFrameTime = now;

    frameCount++;
    fpsTimer += delta;

    // Update FPS every 500ms
    if (fpsTimer >= 500) {
        fps = Math.round((frameCount / fpsTimer) * 1000);
        frameCount = 0;
        fpsTimer = 0;

        if (dom.perfFps) {
            dom.perfFps.textContent = `${fps} FPS`;
        }
    }

    // Fake CPU + Memory load (visual only)
    if (dom.perfCpu) {
        dom.perfCpu.textContent = `${Math.floor(20 + Math.random() * 40)}%`;
    }

    if (dom.perfMem) {
        dom.perfMem.textContent = `${Math.floor(30 + Math.random() * 50)}%`;
    }

    requestAnimationFrame(updatePerformance);
}

// ------------------------------------------------------
// TOGGLE
// ------------------------------------------------------
function togglePerformance() {
    if (!dom.performancePanel) return;
    dom.performancePanel.classList.toggle('visible');
}

// ------------------------------------------------------
// PUBLIC INIT
// ------------------------------------------------------
export function initPerformance() {
    if (!dom.performancePanel) {
        console.warn('Performance panel DOM missing — skipping performance init');
        return;
    }

    // Toggle button
    if (dom.performanceToggle) {
        dom.performanceToggle.addEventListener('click', togglePerformance);
    }

    // Start update loop
    requestAnimationFrame(updatePerformance);

    console.log('Performance overlay initialized');
}
