// public/assets/js/index.js

// Core
import { initDomRefs } from './core/domRefs.js';

// Systems
import { initMonitors } from './systems/monitors.js';
import { initCornerScore } from './systems/cornerScore.js';

// As we build more systems, you will uncomment/add these:
// import { initDvd } from './systems/dvd.js';
// import { initAquarium } from './systems/aquarium.js';
// import { initPrompt } from './systems/prompt.js';
// import { initLogin } from './systems/login.js';
// import { initTools } from './systems/tools.js';
// import { initHotspots } from './systems/hotspots.js';
// import { initPerformance } from './ui/performance.js';

window.addEventListener('DOMContentLoaded', () => {
  // Core DOM references
  initDomRefs();

  // Systems
  initMonitors();
  initCornerScore();

  // Later, when modules are ready:
  // initDvd();
  // initAquarium();
  // initPrompt();
  // initLogin();
  // initTools();
  // initHotspots();
  // initPerformance();
});
