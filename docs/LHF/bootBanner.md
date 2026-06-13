## 6. Added Boot Banner (ASCII + Booting...)
Enhanced the initial loading screen with a retro-style ASCII art banner and a dynamic "Booting..." message.

### Why
- Adds character to the application
- Reinforces the "terminal/OS" theme
- Keeps user attention during initial JS parsing

### What Was Added
A new `bootBanner()` function in `public/js/bootBanner.js` (loaded via `<script>` in `index.html`) and the ASCII banner + `Booting...` animation in `initBoot()` inside `public/assets/js/index.js`.

### How to Use
- Visible on every page load before login.
