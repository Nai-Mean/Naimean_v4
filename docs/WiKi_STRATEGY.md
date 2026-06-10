# Documentation Strategy & Wiki Policy (Naimean_v4)

## 1. Title & Description
This repository utilizes a **"Living Documentation"** approach. We have moved away from traditional separate Wikis to a `/docs` directory structure within the main repository. This allows documentation to be version-controlled, automated, and tested alongside the codebase.

## 2. User Experience
Documentation is integrated directly into the development workflow.
- **Access:** All documentation is located in `docs/`.
- **Navigation:**
  - `docs/LHF/`: Contains "Low Hanging Fruit" improvements, each in their own `.md` file.
  - `docs/Architecture.md`: High-level system design.
  - `docs/WiKi_STRATEGY.md`: This document; the master manual for documentation.
- **Workflow:** To add a new Policy, create a new `.md` file in `docs/` (or a relevant sub-folder) following the "Living Policy" template.

## 3. Configuration Details
Every policy or tool document must follow this exact structure to ensure consistency:
1. **Title & Description:** Clear statement of purpose.
2. **User Experience:** How it is interacted with and functions from the user's perspective.
3. **Configuration Details:** Technical constraints and setup notes.
4. **Code Structure:** A table listing exact file paths and code blocks.
5. **Validation & Drift Guard:** Links to validators and smoke test instructions.
6. **Changelog:** A structured table tracking all modifications.

## 4. Code Structure
| Path | Description |
| --- | --- |
| `docs/` | Root directory for all Living Documentation. |
| `docs/WiKi_STRATEGY.md` | The policy governing documentation itself. |
| `scripts/check-drift.js` | Script used to ensure Markdown matches production code. |

## 5. Validation & Drift Guard
We treat documentation as an extension of our testing suite:
- **Drift Checks:** Before a push, run `scripts/check-drift.js` to ensure the code in the Markdown files matches the production code.
- **Smoke Tests:** Every component has a corresponding validator script. If the system drifts during a change, the `healthCheck.js` orchestrator will trigger a browser warning.

## 6. Changelog
| Date | Commit | Description |
| --- | --- | --- |
| 2026-06-10 | - | Update WiKi_STRATEGY to follow its own Living Policy template. |
