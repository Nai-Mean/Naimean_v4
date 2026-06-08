// systems/aquarium.js

import { dom } from '../core/domRefs.js';

// ------------------------------------------------------
// CONFIG
// ------------------------------------------------------
const FISH_COUNT = 6;
const MIN_SPEED = 0.4;
const MAX_SPEED = 1.2;
const TURN_CHANCE = 0.01; // 1% chance per frame to randomly turn

// ------------------------------------------------------
// INTERNAL STATE
// ------------------------------------------------------
let fishList = [];
let animationFrame = null;

// ------------------------------------------------------
// CREATE A SINGLE FISH
// ------------------------------------------------------
function createFishElement() {
    const el = document.createElement('div');
    el.className = 'aquarium-fish';

    // Random initial color
    el.style.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg)`;

    // Random initial position
    el.style.left = `${Math.random() * 80 + 10}%`;
    el.style.top = `${Math.random() * 80 + 10}%`;

    return el;
}

// ------------------------------------------------------
// SPAWN FISH
// ------------------------------------------------------
function spawnFish() {
    fishList = [];

    for (let i = 0; i < FISH_COUNT; i++) {
        const el = createFishElement();

        dom.rightMonitor.appendChild(el);

        fishList.push({
            el,
            x: parseFloat(el.style.left),
            y: parseFloat(el.style.top),
            dir: Math.random() * Math.PI * 2, // radians
            speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED)
        });
    }
}

// ------------------------------------------------------
// UPDATE FISH MOVEMENT
// ------------------------------------------------------
function updateFish(fish, bounds) {
    // Random turn
    if (Math.random() < TURN_CHANCE) {
        fish.dir += (Math.random() - 0.5) * 1.2; // ±0.6 rad
    }

    // Move
    fish.x += Math.cos(fish.dir) * fish.speed;
    fish.y += Math.sin(fish.dir) * fish.speed;

    // Bounce off edges
    if (fish.x < 0) {
        fish.x = 0;
        fish.dir = Math.PI - fish.dir;
    }
    if (fish.x > bounds.width - 40) {
        fish.x = bounds.width - 40;
        fish.dir = Math.PI - fish.dir;
    }
    if (fish.y < 0) {
        fish.y = 0;
        fish.dir = -fish.dir;
    }
    if (fish.y > bounds.height - 40) {
        fish.y = bounds.height - 40;
        fish.dir = -fish.dir;
    }

    // Apply transform
    fish.el.style.transform = `translate(${fish.x}px, ${fish.y}px) rotate(${fish.dir}rad)`;
}

// ------------------------------------------------------
// MAIN LOOP
// ------------------------------------------------------
function animateAquarium() {
    if (!dom.rightMonitor) {
        animationFrame = requestAnimationFrame(animateAquarium);
        return;
    }

    const bounds = dom.rightMonitor.getBoundingClientRect();

    for (const fish of fishList) {
        updateFish(fish, bounds);
    }

    animationFrame = requestAnimationFrame(animateAquarium);
}

// ------------------------------------------------------
// PUBLIC INIT
// ------------------------------------------------------
export function initAquarium() {
    if (!dom.rightMonitor) {
        console.warn('Right monitor not found — skipping aquarium init');
        return;
    }

    // Clear previous fish
    dom.rightMonitor.innerHTML = '';

    spawnFish();

    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(animateAquarium);

    console.log('Aquarium system initialized');
}
