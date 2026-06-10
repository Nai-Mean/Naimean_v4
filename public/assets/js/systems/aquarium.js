// systems/aquarium.js

import { dom } from '../core/domRefs.js';

let fish = [];

function spawnFish() {
    return {
        x: Math.random() * 200,
        y: Math.random() * 100,
        speed: 0.5 + Math.random(),
        dir: Math.random() > 0.5 ? 1 : -1
    };
}

function animateAquarium() {
    // Null-safety: if DOM isn't ready, stop loop
    if (!dom.rightMonitor || !dom.rightMonitorCtx) {
        requestAnimationFrame(animateAquarium);
        return;
    }

    const ctx = dom.rightMonitorCtx;
    const canvas = dom.rightMonitor;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fish.forEach(f => {
        f.x += f.speed * f.dir;

        // Bounce off edges
        if (f.x < 0 || f.x > canvas.width) {
            f.dir *= -1;
        }

        ctx.fillStyle = '#4af';
        ctx.beginPath();
        ctx.arc(f.x, f.y, 6, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateAquarium);
}

export function initAquarium() {
    // Spawn 10 fish
    for (let i = 0; i < 10; i++) {
        fish.push(spawnFish());
    }

    requestAnimationFrame(animateAquarium);
}
