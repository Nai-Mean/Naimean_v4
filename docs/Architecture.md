new project structure for Naimean_v4
This is the architecture that will shrink your 6k‑line monster into clean, isolated modules:
This structure is battle‑tested — it’s how real front‑end engines organize complex interactive scenes.

public/
  index.html
  assets/
    js/
      core/
        constants.js
        state.js
        utils.js
        media.js
        domRefs.js
      systems/
        monitors.js
        dvd.js
        cornerScore.js
        aquarium.js
        prompt.js
        login.js
        tools.js
        hotspots.js
      ui/
        overlays.js
        performance.js
      index.js
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

