// systems/dvd.js

import { dom } from '../core/domRefs.js';
import { state } from '../core/state.js';

let x = 50;
let y = 50;
let dx = 2;
let dy = 2;

function animateDvd() {
    // Null-safety: if DOM isn't ready, stop loop
    if (!dom.dvdLogo || !dom.bigTv) {
        requestAnimationFrame(animateDvd);
        return;
    }

    const tvRect = dom.bigTv.getBoundingClientRect();
    const logoRect = dom.dvdLogo.getBoundingClientRect();

    x += dx;
    y += dy;

    // Bounce horizontally
    if (x + logoRect.width >= tvRect.width || x <= 0) {
        dx = -dx;
        state.cornerScore++;
    }

    // Bounce vertically
    if (y + logoRect.height >= tvRect.height || y <= 0) {
        dy = -dy;
        state.cornerScore++;
    }

    dom.dvdLogo.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(animateDvd);
}

export function initDvd() {
    requestAnimationFrame(animateDvd);
}
