// systems/monitors.js

import { dom, initDomRefs } from '../core/domRefs.js';
import { state } from '../core/state.js';
import { wait } from '../core/utils.js';

// Internal helpers

function setMonitorInteractive(monitorKey, isInteractive) {
  switch (monitorKey) {
    case 'left':
      state.monitors.left = isInteractive ? 'interactive' : 'idle';
      break;
    case 'right':
      state.monitors.rightInteractive = isInteractive;
      break;
    case 'bigTv':
      state.monitors.bigTvInteractive = isInteractive;
      break;
    case 'commodore':
      state.monitors.commodorePoweringOn = isInteractive;
      break;
    default:
      break;
  }
}

function addPowerOnClass(el) {
  if (!el) return;
  el.classList.add('monitor-power-on');
}

function removePowerOnClass(el) {
  if (!el) return;
  el.classList.remove('monitor-power-on');
}

function addStaticClass(el) {
  if (!el) return;
  el.classList.add('monitor-static');
}

function removeStaticClass(el) {
  if (!el) return;
  el.classList.remove('monitor-static');
}

// Example: power-on sequence for a single monitor
async function runMonitorPowerOnSequence(el, monitorKey) {
  if (!el) return;

  // mark as powering on
  setMonitorInteractive(monitorKey, false);
  addPowerOnClass(el);

  // brief static / boot effect
  addStaticClass(el);
  await wait(400);
  removeStaticClass(el);

  // finish boot
  await wait(600);
  removePowerOnClass(el);

  // mark as interactive
  setMonitorInteractive(monitorKey, true);
}

// Public API

export async function initMonitors() {
  // Ensure DOM refs exist
  if (!dom.bigTv || !dom.leftMonitor || !dom.rightMonitor || !dom.commodore) {
    initDomRefs();
  }

  // Initial state
  setMonitorInteractive('left', false);
  setMonitorInteractive('right', false);
  setMonitorInteractive('bigTv', false);
  setMonitorInteractive('commodore', false);

  // Run boot sequences (you can tweak timings or conditions)
  runMonitorPowerOnSequence(dom.leftMonitor, 'left');
  runMonitorPowerOnSequence(dom.rightMonitor, 'right');
  runMonitorPowerOnSequence(dom.bigTv, 'bigTv');
  runMonitorPowerOnSequence(dom.commodore, 'commodore');

  // TODO: this is where you move over your existing logic:
  // - shadow / glow classes
  // - “interactive ready” overlays
  // - click handlers for tools / aquarium / DVD
  // - any polling or state sync tied to monitors
}
