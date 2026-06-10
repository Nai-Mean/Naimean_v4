# Documentation Strategy & Wiki Policy (Naimean_v4)

## Overview
This repository utilizes a **"Living Documentation"** approach. We have moved away from traditional separate Wikis to a `/docs` directory structure within the main repository. This allows documentation to be version-controlled, automated, and tested alongside the codebase.

## Folder Structure
All documentation is located in `docs/`.
- `docs/LHF/`: Contains "Low Hanging Fruit" improvements, each in their own `.md` file.
- `docs/Architecture.md`: High-level system design.
- `docs/WIKI_STRATEGY.md`: This document; the master manual for documentation.

## The "Living Policy" Template
Every policy or tool document must follow this exact structure to ensure consistency:

1. **Title & Description:** Clear statement of purpose.
2. **User Experience:** How it functions from the user's perspective.
3. **Configuration Details:** Technical constraints and setup notes.
4. **Code Structure:** A table listing exact file paths and code blocks.
5. **🧪 Validation & Drift Guard:**
   - **Validator:** Link to `public/js/utils/validators/[name]Validator.js`.
   - **Smoke Test:** Instructions on how to verify the code is "Live" and active.
6. **📜 Changelog:** A structured table tracking all modifications (Date | Commit | Description).

## Maintenance & Drift Prevention
We treat documentation as an extension of our testing suite:
- **Drift Checks:** Before a push, run `scripts/check-drift.js` to ensure the code in the Markdown files matches the production code.
- **Smoke Tests:** Every component has a corresponding validator script. If the system drifts during a change, the `healthCheck.js` orchestrator will trigger a browser alert.

## How to add a new Policy
1. Create a new `.md` file in the appropriate `docs/` subfolder.
2. Copy the template from this file.
3. Create the corresponding validator in `public/js/utils/validators/`.
4. Register the new validator in `public/js/utils/healthCheck.js`.
5. Run the smoke test to ensure zero drift.
