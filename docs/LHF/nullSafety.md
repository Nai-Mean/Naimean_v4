## 4. Added null-safety guards to Aquarium + DVD systems
Implemented checks to prevent errors when elements are not found or when animations are triggered prematurely.

### Why
- Prevents JavaScript crashes if certain DOM elements are missing
- Improves stability during state transitions
- Ensures the DVD screensaver and Aquarium background don't break the UI

### What Was Added
`if (!element) return;` guards in `aquarium.js` and `dvd.js`.

### How to Use
- This is a backend improvement.
- No change in usage required.
