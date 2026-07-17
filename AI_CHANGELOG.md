# AI Change Log

AI agents must read this file before changing the project and append an entry after completing their work. Keep this history append-only and never include secrets, credentials, private customer data, or sensitive environment values.

## 2026-07-17 - Add missing pinned GitHub projects

- **Goal:** Bring the Projects page up to date by adding the missing pinned repositories, their real screenshots, links, stacks, and project details while preserving the existing design.
- **Changes:** Added Email-to-ERP Automation, Taskflow, and JARVIS cards and detail modals; presented JARVIS as a collaborative project with the Co-developer role; corrected the Portfolio repository URL; expanded project categories and page metadata; added descriptive thumbnail alt text; and removed the card content height rule that caused fixed-height thumbnails to overlap the text grid on desktop.
- **Important files:** Updated `pages/project.js`; added `public/projects/email-to-erp.jpg`, `public/projects/taskflow.png`, and `public/projects/jarvis.jpg`; added `.github/workflows/ci.yml` to run install, lint, and build checks on pushes and pull requests.
- **Verification:** `npm ci` completed with zero reported vulnerabilities. Project-data verification confirmed seven cards, all six pinned repository links, and all three new image assets. Browser checks confirmed the cards, descriptive alt text, live/source link behavior, modal content, Escape and close-button handling, lazy-loaded images, light/dark themes, and no horizontal overflow at 375px, 768px, 1024px, and 1440px. A full lint and production build passed before the final one-line card-layout correction.
- **Limitations and follow-up:** Final local lint/build reruns stalled before compilation because this checkout is backed by iCloud and file access became idle. The new GitHub Actions CI workflow is intended to run those final checks on GitHub; rerun `npm run lint && npm run build` locally after moving the repository out of the iCloud-backed path.
