# (Legacy) js Folder Documentation

> **Legacy Note:** This document describes an outdated `public/js/` directory structure. The actual JavaScript is organized under `public/assets/js/` (with `core/`, `systems/`, and `ui/` subfolders). Only `public/js/bootBanner.js` exists at this path. See `docs/Architecture.md` for the current structure.

## 1. Title & Description
Documentation for the JavaScript components of the Naimean_v4 project, located in the `public/js` directory.

## 2. User Experience
This folder contains the client-side logic that powers the user interface and system interactions in the browser.

## 3. Configuration Details
Technical constraints: JavaScript files are served from the `public/js` directory.
Setup: Ensure all dependencies in subfolders are correctly referenced in `index.html` or loaded via `bootBanner.js`.

## 4. Code Structure
| Path | Description |
|---|---|
| `public/js/core/` | Core logic and utilities. |
| `public/js/systems/` | System-level implementations. |
| `public/js/ui/` | User interface components and logic. |
| `public/js/index.js` | Main entry point for JavaScript. |
| `public/js/bootBanner.js` | Handles the initial boot banner and loading sequence. |

## 5. Validation & Drift Guard
Run `scripts/check-drift.js` to ensure documentation matches code.

## 6. Changelog
| Date | Commit | Description |
|---|---|---|
| 2026-06-10 | Initial | Initial documentation for js folder |
