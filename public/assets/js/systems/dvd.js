// systems/dvd.js

import { dom } from '../core/domRefs.js';
import { state } from '../core/state.js';
import { incrementCornerScore } from './cornerScore.js';

// ------------------------------------------------------
// DVD CONFIG
// ------------------------------------------------------
const COLORS = [
    '#ff0040',
    '#00eaff',
    '#39ff14',
    '#ffea00',
    '#ff7b00',
    '#b300ff'
];

const SPEED = 2.2; // base movement speed

// ------------------------------------------------------
// INTERNAL STATE
// ------------------------------------------------------
let dvdX = 100;
let dvdY = 100;
let velX = SPEED;
let velY = SPEED;
let lastColorIndex = -1;
let animationFrame = null;

// ------------------------------------------------------
// UTIL: Pick a new color different from the last one
// ------------------------------------------------------
function getNewColor() {
    let idx = Math.floor(Math.random() * COLORS.length);
    if (idx === lastColorIndex) {
        idx = (idx + 1) % COLORS.length;
    }
    lastColorIndex = idx;
    return COLORS[idx];
}

// ------------------------------------------------------
// MAIN ANIMATION LOOP
// ------------------------------------------------------
function animateDvd() {
    if (!dom.dvdLogo || !dom.bigTv) {
        animationFrame = requestAnimationFrame(animateDvd);
        return;
    }

    const tvRect = dom.bigTv.getBoundingClientRect();
    const logoRect = dom.dvdLogo.getBoundingClientRect();

    // Move
    dvdX += velX;
    dvdY += velY;

    // Bounce horizontally
    if (dvdX <= 0 || dvdX + logoRect.width >= tvRect.width) {
        velX *= -1;
        handleBounce();
    }

    // Bounce vertically
    if (dvdY <= 0 || dvdY + logoRect.height >= tvRect.height) {
        velY *= -1;
        handleBounce();
    }

    // Apply transform
    dom.dvdLogo.style.transform = `translate(${dvdX}px, ${dvdY}px)`;

    animationFrame = requestAnimationFrame(animateDvd);
}

// ------------------------------------------------------
// HANDLE BOUNCE (color + corner detection)
// ------------------------------------------------------
function handleBounce() {
    // Change color
    dom.dvdLogo.style.filter = `drop-shadow(0 0 12px ${getNewColor()})`;

    // Detect corner hit
    if (isCornerHit()) {
        incrementCornerScore(1);
    }
}

// ------------------------------------------------------
// CORNER DETECTION
// ------------------------------------------------------
function isCornerHit() {
    const tvRect = dom.bigTv.getBoundingClientRect();
    const logoRect = dom.dvdLogo.getBoundingClientRect();

    const hitLeft = dvdX <= 0;
    const hitRight = dvdX + logoRect.width >= tvRect.width;
    const hitTop = dvdY <= 0;
    const hitBottom = dvdY + logoRect.height >= tvRect.height;

    // Corner = hit on both axes
    return (hitLeft || hitRight) && (hitTop || hitBottom);
}

// ------------------------------------------------------
// PUBLIC INIT
// ------------------------------------------------------
export function initDvd() {
    if (!dom.dvdLogo) {
        console.warn('DVD logo not found — skipping DVD init');
        return;
    }

    // Reset state
    dvdX = 100;
    dvdY = 100;
    velX = SPEED;
    velY = SPEED;

    // Start animation
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(animateDvd);

    console.log('DVD system initialized');
}
