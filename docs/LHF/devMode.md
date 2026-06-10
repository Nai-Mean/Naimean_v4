## 2. Added devMode flag to state.js
A simple boolean toggle that allows skipping:
- the login screen
- boot animations
- transitions

### Why
- Speeds up development
- Allows instant entry into the Den
- Reduces friction during rapid iteration

### What Was Added
`devMode: false` in `state.js`, plus logic in `index.js` to bypass login when enabled.

### How to Use
- Open `assets/js/core/state.js`
- Set:
  ```js
  devMode: true
  ```
- Reload the page
- You will bypass login and boot animations automatically
