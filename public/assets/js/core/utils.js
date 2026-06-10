// core/utils.js

// ------------------------------------------------------
// Simple async wait helper
// ------------------------------------------------------
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
