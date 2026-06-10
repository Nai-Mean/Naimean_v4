// core/domRefs.js

// ------------------------------------------------------
// DOM REFERENCES (populated on init)
// ------------------------------------------------------
export const dom = {
    // Screens
    loginScreen: null,
    denContainer: null,

    // Login fields
    loginUser: null,
    loginPass: null,
    loginButton: null,
    loginError: null,

    // Monitors
    leftMonitor: null,
    rightMonitor: null,
    bigTv: null,
    commodore: null, // placeholder for future expansion

    // DVD
    dvdLogo: null,

    // Prompt
    promptContainer: null,
    promptOutput: null,
    promptInput: null,

    // Tools
    toolsPanel: null,
    toolsToggle: null,

    // Hotspots
    hotspotTools: null,
    hotspotPrompt: null,
    hotspotLogin: null,
    hotspotLeftMonitor: null,
    hotspotRightMonitor: null,

    // Performance UI
    perfPanel: null,
    perfFps: null,
    perfCpu: null,
    perfMem: null
};

// ------------------------------------------------------
// INIT FUNCTION
// ------------------------------------------------------
export function initDomRefs() {
    // Screens
    dom.loginScreen      = document.getElementById('login-screen');
    dom.denContainer     = document.getElementById('den-container');

    // Login
    dom.loginUser        = document.getElementById('login-user');
    dom.loginPass        = document.getElementById('login-pass');
    dom.loginButton      = document.getElementById('login-button');
    dom.loginError       = document.getElementById('login-error');

    // Monitors
    dom.leftMonitor      = document.getElementById('left-monitor');
    dom.rightMonitor     = document.getElementById('right-monitor');
    dom.bigTv            = document.getElementById('big-tv');
    dom.commodore        = document.getElementById('commodore'); // optional

    // DVD
    dom.dvdLogo          = document.getElementById('dvd-logo');

    // Prompt
    dom.promptContainer  = document.getElementById('prompt-container');
    dom.promptOutput     = document.getElementById('prompt-output');
    dom.promptInput      = document.getElementById('prompt-input');

    // Tools
    dom.toolsPanel       = document.getElementById('tools-panel');
    dom.toolsToggle      = document.getElementById('tools-toggle');

    // Hotspots
    dom.hotspotTools        = document.getElementById('hotspot-tools');
    dom.hotspotPrompt       = document.getElementById('hotspot-prompt');
    dom.hotspotLogin        = document.getElementById('hotspot-login');
    dom.hotspotLeftMonitor  = document.getElementById('hotspot-left-monitor');
    dom.hotspotRightMonitor = document.getElementById('hotspot-right-monitor');

    // Performance
    dom.perfPanel        = document.getElementById('performance-panel');
    dom.perfFps          = document.getElementById('perf-fps');
    dom.perfCpu          = document.getElementById('perf-cpu');
    dom.perfMem          = document.getElementById('perf-mem');

    console.log('DOM refs initialized');
}
