# Jerry Nwachi / Jerrizzy

Personal consulting portfolio for custom software, websites, integrations and automation.

## Run locally

```sh
npm ci
npm run dev -- --port 4173
```

For the production-mode preview:

```sh
npm run build
npm start -- --hostname 127.0.0.1 --port 4173
```

## Checks

```sh
npm run lint
npm test
npm run build
```

Node 22 is used in CI. Tests cover demo calculation boundaries, duplicate/review gates, and enquiry validation/encoding.

## Site content

- `content/projects.js` owns the featured case-study facts and additional work.
- `/work` and `/work/[slug]` provide direct case-study links.
- `/project` redirects to `/work` for existing links.
- `/demos/estimator` and `/demos/email-to-erp` run entirely on fictional fixtures. No company service is connected.
- The public site uses generic employer descriptions. Do not add company/customer data, private rates, financial savings claims, or private contact numbers to content or assets.

## Contact

The enquiry form validates input and prepares an email addressed to Jerry’s existing Gmail address. The visitor reviews the draft and explicitly sends it in Gmail or their email app. The site never claims delivery. Nothing is sent to a mail API or saved in a database. A long-message fallback preserves the text for copying. There are no mail credentials to configure for this version.

## Visual assets

The portrait is owner-supplied. Decorative hero and workflow artwork were generated for the selected visual direction. Optimized WebP assets are used by the site; original PNGs are retained alongside them. Local design references and verification evidence are ignored under `.design/`.

## Release

The existing repository README documented production deployment from `main`. Build on a review branch and inspect the preview before merging or publishing. This refresh has not been deployed to production.
