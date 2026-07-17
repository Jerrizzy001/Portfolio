# AI Change Log

AI agents must read this file before changing the project and append an entry after completing their work. Keep this history append-only and never include secrets, credentials, private customer data, or sensitive environment values.

## 2026-07-17 - Redesign Projects page

- **Goal:** Redesign the Projects page to match the new Home/About/Contact design language and make seven projects easier to browse, without changing any project data.
- **Changes:** Rewrote `pages/project.js`: added a dedicated featured-project card (Email-to-ERP Automation, chosen for its live demo and direct relevance to the YarlMetal automation work) showing the first two detail bullets; added a category filter bar with counts, `aria-pressed` state, and an `aria-live` result count; converted the header "Current work" sidebar into a bordered panel matching the redesigned pages; equalized card heights with card buttons pinned to the bottom (`mt-auto`); separated image priority handling from list index via a `priority` prop on `CardImage`. Project data, detail modal, accessibility hook (`useModalA11y`), badges, and GitHub CTA section are unchanged in behavior.
- **Important files:** `pages/project.js`, `AI_CHANGELOG.md`.
- **Verification:** Not run locally — the user asked to skip local Node checks because this iCloud-backed checkout makes them slow. Lint and production-build verification are left to the repository's GitHub Actions CI.
- **Limitations and follow-up:** Filtering, the featured card, and equal-height rows have not been browser-checked; verify at mobile and desktop widths in both themes after CI passes and the deploy lands.

## 2026-07-17 - Redesign Home, About, and Contact pages

- **Goal:** Redesign the frontend focused on the Home, About, and Contact pages, replacing the auto-rotating hero carousel with content-rich layouts that surface more real detail (YarlMetal internship, Seneca degree, City of Markham role, certifications, stack, AI-assisted workflow, project highlights).
- **Changes:** Rewrote `pages/index.js` (split hero with profile card and "Currently" panel, at-a-glance facts strip, selected-work cards, "How I build" section with stack chips, contact CTA band; carousel and its state removed entirely), `pages/about.js` (photo header, story with facts sidebar, experience timeline, education and certification sections, "How I work" section with stack chips, dual CTA), and `pages/contact.js` (header with availability line, restyled contact cards with context notes, "Good reasons to reach out" side panel with location and fastest-reply info; `target="_blank"` now applied only to external links). All pages reuse the project-page visual vocabulary (mono eyebrow pills, hairline borders, meta `dl` grids) and keep the existing cobalt brand tokens, SignalField, and light/dark themes. Projects, Skills, Navbar, Footer, and theme files are unchanged.
- **Important files:** `pages/index.js`, `pages/about.js`, `pages/contact.js`, `AI_CHANGELOG.md`.
- **Verification:** Local `npm run lint` was started but stopped at the user's request because this iCloud-backed checkout makes local Node runs slow. Lint and production-build verification are left to the repository's GitHub Actions CI, per the precedent in earlier entries.
- **Limitations and follow-up:** New markup has not been browser-checked; after CI passes and the deploy lands, verify the three pages at mobile and desktop widths in both themes.

## 2026-07-17 - Add missing pinned GitHub projects

- **Goal:** Bring the Projects page up to date by adding the missing pinned repositories, their real screenshots, links, stacks, and project details while preserving the existing design.
- **Changes:** Added Email-to-ERP Automation, Taskflow, and JARVIS cards and detail modals; presented JARVIS as a collaborative project with the Co-developer role; corrected the Portfolio repository URL; expanded project categories and page metadata; added descriptive thumbnail alt text; and removed the card content height rule that caused fixed-height thumbnails to overlap the text grid on desktop.
- **Important files:** Updated `pages/project.js`; added `public/projects/email-to-erp.jpg`, `public/projects/taskflow.png`, and `public/projects/jarvis.jpg`; added `.github/workflows/ci.yml` to run install, lint, and build checks on pushes and pull requests.
- **Verification:** `npm ci` completed with zero reported vulnerabilities. Project-data verification confirmed seven cards, all six pinned repository links, and all three new image assets. Browser checks confirmed the cards, descriptive alt text, live/source link behavior, modal content, Escape and close-button handling, lazy-loaded images, light/dark themes, and no horizontal overflow at 375px, 768px, 1024px, and 1440px. A full lint and production build passed before the final one-line card-layout correction.
- **Limitations and follow-up:** Final local lint/build reruns stalled before compilation because this checkout is backed by iCloud and file access became idle. The new GitHub Actions CI workflow is intended to run those final checks on GitHub; rerun `npm run lint && npm run build` locally after moving the repository out of the iCloud-backed path.

## 2026-07-17 - GitHub CI follow-up

- **Goal:** Complete final verification on GitHub after the iCloud-backed local checkout stalled.
- **Changes:** Updated `actions/checkout` and `actions/setup-node` to their current v7 releases after GitHub reported that the v4 actions used the deprecated Node.js 20 action runtime.
- **Verification:** GitHub Actions passed `npm ci`, `npm run lint`, and `npm run build` on both the branch-push and pull-request runs for commit `f1972ef`.
- **Limitations and follow-up:** The repository can still be moved out of the iCloud-backed Documents path to make future local Node.js checks more reliable; no remaining code or CI failure is known for this update.

## 2026-07-17 - Rewrite project copy in a human voice

- **Goal:** Replace architecture-heavy portfolio language with clear descriptions that sound like a person explaining what each project does and why it was built.
- **Changes:** Rewrote the subtitles, focus lines, results, descriptions, and detail notes for all seven projects in `pages/project.js`. JARVIS now leads with its real use as a bedroom assistant built with a friend; the other projects lead with the user problem or question they address. Renamed “Build notes” to “What I built,” “Project facts” to “At a glance,” and simplified the Projects page introduction.
- **Verification:** `git diff --check` passed. The content will receive final lint and production-build verification through the repository's GitHub Actions workflow because the local checkout remains on an iCloud-backed path.
- **Limitations and follow-up:** This is a copy-only update; project links, screenshots, stack tags, card behavior, and layout are unchanged.

## 2026-07-17 - Human project copy CI follow-up

- **Verification:** GitHub Actions passed `npm ci`, `npm run lint`, and `npm run build` for the human-copy update on commit `024f08b`.
- **Limitations and follow-up:** No code, layout, link, or build issue was found during CI; production wording still requires a final browser check after merge and deployment.

## 2026-07-17 - Verify the core page redesign on GitHub

- **Goal:** Verify the Home, About, and Contact redesign through GitHub before releasing it to production.
- **Changes:** Moved the existing redesign onto the fresh `codex/redesign-home-about-contact` branch based on current `origin/main`, committed only the three redesigned pages and their existing change-log entry, and opened GitHub pull request #3. No additional application behavior or dependencies were changed during release preparation.
- **Important files:** `pages/index.js`, `pages/about.js`, `pages/contact.js`, and `AI_CHANGELOG.md`.
- **Verification:** `git diff --check` passed locally. GitHub Actions passed `npm ci`, `npm run lint`, and `npm run build` on both the branch-push run and pull-request run for commit `0010122`. Both Vercel preview deployments attached to pull request #3 completed successfully.
- **Limitations and follow-up:** The production domain still requires a final live browser and route check after the pull request is merged and Vercel finishes the production deployment.
