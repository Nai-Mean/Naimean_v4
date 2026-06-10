// index.js (entry point for Naimean v4)

// ------------------------------------------------------
// CORE IMPORTS
// ------------------------------------------------------
import { initDomRefs, dom } from './core/domRefs.js';
import { state } from './core/state.js';

// ------------------------------------------------------
// SYSTEM IMPORTS
// ------------------------------------------------------
import { initLogin } from './systems/login.js';
import { initMonitors } from './systems/monitors.js';
import { initDvd } from './systems/dvd.js';
import { initAquarium } from './systems/aquarium.js';
import { initPrompt } from './systems/prompt.js';
import { initTools } from './systems/tools.js';
import { initHotspots } from './systems/hotspots.js';
import { initPerformance } from './ui/performance.js';

// ------------------------------------------------------
// DEBUG BOOT STATUS
// ------------------------------------------------------
function debugBoot() {
    console.log('%cNaimean v4 — Boot Status', 'color:#0f0;font-weight:bold;');

    console.table({
        loginScreen: !!dom.loginScreen,
        denContainer: !!dom.denContainer,

        leftMonitor: !!dom.leftMonitor,
        rightMonitor: !!dom.rightMonitor,
        bigTv: !!dom.bigTv,
        commodore: !!dom.commodore,

        dvdLogo: !!dom.dvdLogo,

        promptContainer: !!dom.promptContainer,
        promptOutput: !!dom.promptOutput,
        promptInput: !!dom.promptInput,

        toolsPanel: !!dom.toolsPanel,
        toolsToggle: !!dom.toolsToggle,

        hotspotTools: !!dom.hotspotTools,
        hotspotPrompt: !!dom.hotspotPrompt,
        hotspotLogin: !!dom.hotspotLogin,
        hotspotLeftMonitor: !!dom.hotspotLeftMonitor,
        hotspotRightMonitor: !!dom.hotspotRightMonitor,

        performancePanel: !!dom.perfPanel,
        perfFps: !!dom.perfFps,
        perfCpu: !!dom.perfCpu,
        perfMem: !!dom.perfMem
    });
}

// ------------------------------------------------------
// MAIN INITIALIZATION
// ------------------------------------------------------
function init() {
    console.log('Naimean v4 booting...');

    // 1. DOM references
    initDomRefs();

    // --------------------------------------------------
    // DEV MODE: Skip login + skip boot animations
    // --------------------------------------------------
    if (state.devMode) {
        console.warn('DEV MODE ENABLED — Skipping login + boot animations');

        // Instantly unlock the Den
        if (dom.loginScreen) dom.loginScreen.classList.remove('active');
        if (dom.denContainer) dom.denContainer.classList.add('active');

        // Skip login system entirely
        // Skip monitor boot animations
        // Still initialize everything else
        initDvd();
        initAquarium();
        initPrompt();
        initTools();
        initHotspots();
        initPerformance();

        debugBoot();
        return;
    }

    // 2. Login system (locks the Den)
    initLogin();

    // 3. Monitors boot sequence
    initMonitors();

    // 4. DVD system (Big TV)
    initDvd();

    // 5. Aquarium system (Right monitor)
    initAquarium();

    // 6. Prompt terminal
    initPrompt();

    // 7. Tools panel
    initTools();

    // 8. Hotspots
    initHotspots();

    // 9. Performance overlay
    initPerformance();

    // 10. Debug boot status
    debugBoot();

    console.log('Naimean v4 initialized.');
}

// ------------------------------------------------------
// START
// ------------------------------------------------------
window.addEventListener('DOMContentLoaded', init);
