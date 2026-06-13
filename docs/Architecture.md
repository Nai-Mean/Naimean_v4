new project structure for Naimean_v4
This is the architecture that will shrink your 6k‑line monster into clean, isolated modules:
This structure is battle‑tested — it’s how real front‑end engines organize complex interactive scenes.

public/
  index.html
  assets/
    js/
      core/
        constants.js    ← (Plan) not yet created
        state.js        ← ✅ implemented
        utils.js        ← ✅ implemented
        media.js        ← (Plan) not yet created
        domRefs.js      ← ✅ implemented
      systems/
        monitors.js     ← ✅ implemented
        dvd.js          ← ✅ implemented
        cornerScore.js  ← ✅ implemented
        aquarium.js     ← ✅ implemented
        prompt.js       ← ✅ implemented
        login.js        ← ✅ implemented
        tools.js        ← ✅ implemented
        hotspots.js     ← ✅ implemented
      ui/
        overlays.js     ← (Plan) not yet created
        performance.js  ← ✅ implemented
      index.js          ← ✅ implemented
    css/
    video/
    images/

These are the foundation everything else plugs into:
1. constants.js
All magic numbers, URLs, IDs, timings, dimensions, insets, etc.
2. utils.js
Clamp, wait, number checks, random helpers, etc.
3. media.js
Shared video/audio playback helpers (like your waitForMediaPlaybackToEnd).
4. state.js
A clean, centralized state object instead of 200+ globals.
5. domRefs.js
All your document.getElementById calls in one place.
Once these are in place, every subsystem becomes dramatically smaller.

It uses Modern ES Modules
Cleaner
Smaller
No globals
Easy to maintain
Works in all modern browsers
Lets us use import / export cleanly

