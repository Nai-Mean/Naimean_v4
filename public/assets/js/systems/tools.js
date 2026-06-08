// systems/tools.js

import { dom } from '../core/domRefs.js';
import { state } from '../core/state.js';
import { initDvd } from './dvd.js';
import { initAquarium } from './aquarium.js';

// ------------------------------------------------------
// INTERNAL STATE
// ------------------------------------------------------
let isToolsOpen = false;

// ------------------------------------------------------
// UI HELPERS
// ------------------------------------------------------
function openTools() {
    if (!dom.toolsPanel) return;
    dom.toolsPanel.classList.add('open');
    isToolsOpen = true;
}

function closeTools() {
    if (!dom.toolsPanel) return;
    dom.toolsPanel.classList.remove('open');
    isToolsOpen = false;
}

function toggleTools() {
    isToolsOpen ? closeTools() : openTools();
}

// ------------------------------------------------------
// TOOL ACTIONS
// ------------------------------------------------------
function runToolAction(action) {
    switch (action) {
        case 'restart-dvd':
            initDvd();
            break;

        case 'restart-aquarium':
            initAquarium();
            break;

        case 'clear-monitor-left':
            if (dom.leftMonitor) dom.leftMonitor.innerHTML = '';
            break;

        case 'clear-monitor-right':
            if (dom.rightMonitor) dom.rightMonitor.innerHTML = '';
            break;

        case 'toggle-prompt':
            if (dom.promptContainer) {
                dom.promptContainer.classList.toggle('active');
            }
            break;

        default:
            console.warn('Unknown tool action:', action);
            break;
    }
}

// ------------------------------------------------------
// EVENT HANDLERS
// ------------------------------------------------------
function onToolButtonClick(e) {
    const action = e.target.dataset.action;
    if (!action) return;

    runToolAction(action);
}

function onToolsToggleClick() {
    toggleTools();
}

// ------------------------------------------------------
// PUBLIC INIT
// ------------------------------------------------------
export function initTools() {
    if (!dom.toolsToggle || !dom.toolsPanel) {
        console.warn('Tools DOM missing — skipping tools init');
        return;
    }

    // Toggle button
    dom.toolsToggle.addEventListener('click', onToolsToggleClick);

    // Tool buttons
    const buttons = dom.toolsPanel.querySelectorAll('[data-action]');
    buttons.forEach(btn => btn.addEventListener('click', onToolButtonClick));

    console.log('Tools system initialized');
}
