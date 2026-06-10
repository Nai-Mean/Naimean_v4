// index.js (entry point for Naimean v4)

// ------------------------------------------------------
// CORE IMPORTS
// ------------------------------------------------------
import { initDomRefs } from './core/domRefs.js';
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
// MAIN INITIALIZATION
// ------------------------------------------------------
function init() {
    console.log('Naimean v4 booting...');

    // 1. DOM references
    initDomRefs();

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

    console.log('Naimean v4 initialized.');
}

// ------------------------------------------------------
// START
// ------------------------------------------------------
window.addEventListener('DOMContentLoaded', init);
