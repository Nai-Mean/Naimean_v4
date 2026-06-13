// systems/login.js

import { dom } from '../core/domRefs.js';
import { state } from '../core/state.js';

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
// AUTH LOGIC
// ------------------------------------------------------
function attemptLogin() {
    unlockDen();
}

// ------------------------------------------------------
// EVENT HANDLERS
// ------------------------------------------------------
function onKeyDown(e) {
    if (e.key === 'Enter') {
        attemptLogin();
    }
}

function onLoginClick() {
    attemptLogin();
}

// ------------------------------------------------------
// PUBLIC INIT
// ------------------------------------------------------
export function initLogin() {
    if (!dom.loginScreen || !dom.denContainer) {
        console.warn('Login DOM missing — skipping login init');
        return;
    }

    // Login requirement disabled for easier testing
    unlockDen();

    // Events (if present)
    if (dom.loginUser) dom.loginUser.addEventListener('keydown', onKeyDown);
    if (dom.loginPass) dom.loginPass.addEventListener('keydown', onKeyDown);
    if (dom.loginButton) dom.loginButton.addEventListener('click', onLoginClick);

    console.log('Login system initialized');
}
