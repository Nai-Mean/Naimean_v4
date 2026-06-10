// core/state.js

// ------------------------------------------------------
// GLOBAL STATE OBJECT
// ------------------------------------------------------
export const state = {
    // Login / access
    isLocked: true,

    // Monitor states
    monitors: {
        left: 'idle',              // 'idle' | 'interactive'
        rightInteractive: false,   // boolean
        bigTvInteractive: false,   // boolean
        commodorePoweringOn: false // boolean
    },

    // Prompt
    promptOpen: false,

    // Corner score (DVD)
    cornerScore: 0,

    // Performance metrics (optional UI)
    performance: {
        fps: 0,
        cpu: 0,
        mem: 0
    }
};
