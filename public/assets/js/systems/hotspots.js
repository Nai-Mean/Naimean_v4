// systems/hotspots.js

import { dom } from '../core/domRefs.js';
import { state } from '../core/state.js';

// ------------------------------------------------------
// INTERNAL STATE
// ------------------------------------------------------
let hotspots = [];

// ------------------------------------------------------
// HOTSPOT DEFINITIONS
// ------------------------------------------------------
// Each hotspot is a clickable region with an action.
const HOTSPOT_MAP = [
    {
        id: 'hotspot-tools',
        element: () => dom.hotspotTools,
        action: () => {
            if (dom.toolsToggle) dom.toolsToggle.click();
        }
    },
    {
        id: 'hotspot-prompt',
        element: () => dom.hotspotPrompt,
        action: () => {
            if (dom.promptContainer) {
                dom.promptContainer.classList.toggle('active');
            }
        }
    },
    {
        id: 'hotspot-login',
        element: () => dom.hotspotLogin,
        action: () => {
            if (dom.loginScreen) {
                dom.loginScreen.classList.add('active');
                dom.denContainer.classList.remove('active');
            }
        }
    },
    {
        id: 'hotspot-left-monitor',
        element: () => dom.hotspotLeftMonitor,
        action: () => {
            if (dom.leftMonitor) {
                dom.leftMonitor.classList.add('flash');
                setTimeout(() => dom.leftMonitor.classList.remove('flash'), 300);
            }
        }
    },
    {
        id: 'hotspot-right-monitor',
        element: () => dom.hotspotRightMonitor,
        action: () => {
            if (dom.rightMonitor) {
                dom.rightMonitor.classList.add('flash');
                setTimeout(() => dom.rightMonitor.classList.remove('flash'), 300);
            }
        }
    }
];

// ------------------------------------------------------
// EVENT HANDLERS
// ------------------------------------------------------
function onHotspotClick(hs) {
    if (typeof hs.action === 'function') {
        hs.action();
    }
}

function onHotspotHover(e) {
    e.target.classList.add('hover');
}

function onHotspotLeave(e) {
    e.target.classList.remove('hover');
}

// ------------------------------------------------------
// PUBLIC INIT
// ------------------------------------------------------
export function initHotspots() {
    hotspots = [];

    HOTSPOT_MAP.forEach(hs => {
        const el = hs.element();
        if (!el) return;

        hotspots.push({ ...hs, el });

        el.addEventListener('click', () => onHotspotClick(hs));
        el.addEventListener('mouseenter', onHotspotHover);
        el.addEventListener('mouseleave', onHotspotLeave);
    });

    console.log('Hotspots system initialized');
}
