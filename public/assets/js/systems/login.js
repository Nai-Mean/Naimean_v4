// systems/login.js

import { dom } from '../core/domRefs.js';
import { state } from '../core/state.js';

// ------------------------------------------------------
// CONFIG
// ------------------------------------------------------
const VALID_USERNAME = 'matt';
const VALID_PASSWORD = 'den';

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
    const user = dom.loginUser.value.trim().toLowerCase();
    const pass = dom.loginPass.value.trim().toLowerCase();

    if (user === VALID_USERNAME && pass === VALID_PASSWORD) {
        unlockDen();
    } else {
        showLoginError('Invalid credentials');
    }
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
    if (!dom.loginScreen || !dom.loginUser || !dom.loginPass || !dom.loginButton) {
        console.warn('Login DOM missing — skipping login init');
        return;
    }

    // Start locked
    lockDen();

    // Events
    dom.loginUser.addEventListener('keydown', onKeyDown);
    dom.loginPass.addEventListener('keydown', onKeyDown);
    dom.loginButton.addEventListener('click', onLoginClick);

    console.log('Login system initialized');
}
