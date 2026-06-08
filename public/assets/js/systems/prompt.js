// systems/prompt.js

import { dom } from '../core/domRefs.js';
import { state } from '../core/state.js';
import { initDvd } from './dvd.js';
import { initAquarium } from './aquarium.js';

// ------------------------------------------------------
// INTERNAL STATE
// ------------------------------------------------------
let history = [];
let historyIndex = -1;
let isTyping = false;

// ------------------------------------------------------
// UTILS
// ------------------------------------------------------
function printLine(text = '') {
    const line = document.createElement('div');
    line.className = 'prompt-line';
    line.textContent = text;
    dom.promptOutput.appendChild(line);
    dom.promptOutput.scrollTop = dom.promptOutput.scrollHeight;
}

function printTyping(text, speed = 12) {
    return new Promise(resolve => {
        isTyping = true;
        let i = 0;

        const line = document.createElement('div');
        line.className = 'prompt-line';
        dom.promptOutput.appendChild(line);

        function tick() {
            if (i < text.length) {
                line.textContent += text[i];
                i++;
                dom.promptOutput.scrollTop = dom.promptOutput.scrollHeight;
                setTimeout(tick, speed);
            } else {
                isTyping = false;
                resolve();
            }
        }

        tick();
    });
}

function clearPrompt() {
    dom.promptOutput.innerHTML = '';
}

// ------------------------------------------------------
// COMMAND HANDLER
// ------------------------------------------------------
async function handleCommand(cmd) {
    const input = cmd.trim().toLowerCase();

    // Save to history
    if (input.length > 0) {
        history.push(input);
        historyIndex = history.length;
    }

    printLine(`> ${cmd}`);

    // Built‑in commands
    switch (input) {
        case 'help':
            await printTyping('Available commands:');
            printLine('help');
            printLine('clear');
            printLine('monitors');
            printLine('dvd');
            printLine('aquarium');
            printLine('about');
            printLine('version');
            printLine('exit');
            break;

        case 'clear':
            clearPrompt();
            break;

        case 'about':
            await printTyping('Naimean Den v4 — Modular Interactive Environment');
            break;

        case 'version':
            await printTyping('v4.0.0');
            break;

        case 'exit':
            dom.promptContainer.classList.remove('active');
            break;

        // --------------------------------------------------
        // MONITOR COMMANDS
        // --------------------------------------------------
        case 'monitors':
            await printTyping('Monitor systems online.');
            break;

        // --------------------------------------------------
        // DVD COMMANDS
        // --------------------------------------------------
        case 'dvd':
            await printTyping('Restarting DVD system...');
            initDvd();
            break;

        // --------------------------------------------------
        // AQUARIUM COMMANDS
        // --------------------------------------------------
        case 'aquarium':
            await printTyping('Restarting aquarium...');
            initAquarium();
            break;

        // --------------------------------------------------
        // HIDDEN COMMANDS / EASTER EGGS
        // --------------------------------------------------
        case 'naimean':
            await printTyping('You found the hidden command.');
            await printTyping('Respect.');
            break;

        case 'secret':
            await printTyping('This command does nothing.');
            await printTyping('Or does it?');
            break;

        default:
            await printTyping(`Unknown command: ${cmd}`);
            break;
    }
}

// ------------------------------------------------------
// INPUT HANDLING
// ------------------------------------------------------
function onKeyDown(e) {
    if (!dom.promptInput) return;

    // Prevent typing while animation is running
    if (isTyping) {
        e.preventDefault();
        return;
    }

    switch (e.key) {
        case 'Enter':
            const cmd = dom.promptInput.value;
            dom.promptInput.value = '';
            handleCommand(cmd);
            break;

        case 'ArrowUp':
            if (history.length > 0) {
                historyIndex = Math.max(0, historyIndex - 1);
                dom.promptInput.value = history[historyIndex];
            }
            break;

        case 'ArrowDown':
            if (history.length > 0) {
                historyIndex = Math.min(history.length, historyIndex + 1);
                dom.promptInput.value =
                    historyIndex === history.length ? '' : history[historyIndex];
            }
            break;
    }
}

// ------------------------------------------------------
// PUBLIC INIT
// ------------------------------------------------------
export function initPrompt() {
    if (!dom.promptContainer || !dom.promptInput || !dom.promptOutput) {
        console.warn('Prompt DOM missing — skipping prompt init');
        return;
    }

    dom.promptInput.addEventListener('keydown', onKeyDown);

    printLine('Naimean Prompt v4');
    printLine('Type "help" for commands.');

    console.log('Prompt system initialized');
}
