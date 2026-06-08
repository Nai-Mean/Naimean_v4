// public/assets/js/index.js

// ------------------------------------------------------
// CORE
// ------------------------------------------------------
import { initDomRefs } from './core/domRefs.js';

// ------------------------------------------------------
// SYSTEMS
// ------------------------------------------------------
import { initMonitors } from './systems/monitors.js';
import { initCornerScore } from './systems/cornerScore.js';
import { initDvd } from './systems/dvd.js';
import { initAquarium } from './systems/aquarium.js';
import { initPrompt } from './systems/prompt.js';
import { initLogin } from './systems/login.js';
import { initTools } from './systems/tools.js';
import { initHotspots } from './systems/hotspots.js';

// ------------------------------------------------------
// UI / PERFORMANCE
// ------------------------------------------------------
import { initPerformance } from './ui/performance.js';

// ------------------------------------------------------
// BOOTSTRAP
// ------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    // Core DOM references
    initDomRefs();

    // Systems
    initMonitors();
    initCornerScore();
    initDvd();
    initAquarium();
    initPrompt();
    initLogin();
    initTools();
    initHotspots();

    // UI
    initPerformance();
});
