## 1. Added debugBoot() (DOM sanity check)
A lightweight diagnostic that prints the presence/absence of all critical DOM nodes on startup.

### Why
- Instantly reveals missing IDs or load-order issues
- Prevents silent failures during initialization
- Saves time during debugging

### What Was Added
A `console.table()` dump of all required DOM refs, called at the end of `init()`.

### How to Use
- Open DevTools -> Console
- Reload the page
- Look for **"DOM Sanity Check"**
- Any `false` or `null` means a missing or mis-named element
