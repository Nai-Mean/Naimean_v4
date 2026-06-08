// systems/cornerScore.js

import { state } from '../core/state.js';

// ------------------------------------------------------
// Secret sound lock
// ------------------------------------------------------
let isSecretPlaying = false;

// Play the Zelda secret sound (locked so it can't overlap)
async function playSecretSound() {
    if (isSecretPlaying) return;

    isSecretPlaying = true;

    const audio = new Audio('/assets/audio/zelda_secret.wav');

    audio.onended = () => {
        isSecretPlaying = false;
    };

    await audio.play();
}

// ------------------------------------------------------
// Standard ping sound
// ------------------------------------------------------
function playStandardPingSound() {
    const audio = new Audio('/assets/audio/ping.wav');
    audio.play();
}

// ------------------------------------------------------
// Sync score to server (stub for now)
// ------------------------------------------------------
function syncLocalToWhiteboard() {
    // You will replace this with your real API call
    console.log('Syncing score to whiteboard:', state.dvd.cornerScore);
}

// ------------------------------------------------------
// Show initials prompt (stub for now)
// ------------------------------------------------------
function syncCornerScoreInitialsPromptVisibility(visible) {
    // You will replace this with your real UI logic
    console.log('Initials prompt visibility:', visible);
}

// ------------------------------------------------------
// Main increment logic (includes your secret-score behavior)
// ------------------------------------------------------
export function incrementCornerScore(amount) {
    state.dvd.cornerScore += amount;

    // Secret trigger
    if (state.dvd.cornerScore === -999) {
        playSecretSound();
        return;
    }

    // Only play ping if secret isn't playing
    if (!isSecretPlaying) {
        playStandardPingSound();
    }

    // Normal sync
    syncLocalToWhiteboard();

    // High score check
    if (state.dvd.cornerScore > (state.dvd.highScore || 0)) {
        syncCornerScoreInitialsPromptVisibility(true);
    }
}

// ------------------------------------------------------
// Initialization
// ------------------------------------------------------
export function initCornerScore() {
    // Initialize score values
    state.dvd.cornerScore = 0;
    state.dvd.highScore = 0;

    console.log('CornerScore system initialized');
}
