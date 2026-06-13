// systems/login.js

import { dom } from '../core/domRefs.js';

// ------------------------------------------------------
// INTERNAL STATE
// ------------------------------------------------------
let isLocked = true;

// ------------------------------------------------------
// UI HELPERS
// ------------------------------------------------------
function showLoginError(msg) {
    if (!dom.loginError) return;
    dom.loginError.textContent = msg;
    dom.loginError.classList.add('visible');

    setTimeout(() => {
        dom.loginError.classList.remove('visible');
    }, 2000);
}

function unlockDen() {
    isLocked = false;

    dom.loginScreen.classList.remove('active');
    dom.denContainer.classList.add('active');

    console.log('Login successful — Den unlocked');
}

function lockDen() {
    isLocked = true;

    dom.denContainer.classList.remove('active');
    dom.loginScreen.classList.add('active');

    console.log('Den locked');
}

// ------------------------------------------------------
// PUBLIC INIT
// ------------------------------------------------------
export function initLogin() {
    if (!dom.loginScreen || !dom.denContainer) {
        console.warn('Login DOM missing — skipping login init');
        return;
    }

    // Login requirement disabled so the den is immediately accessible
    unlockDen();

    console.log('Login system initialized');
}
