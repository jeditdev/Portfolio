# John Erwin Dimaano | Portfolio

A static, responsive developer portfolio. No build step and no dependencies.

## Structure

```
index.html              Page content (HTML)
assets/css/styles.css   All styling
assets/js/config.js     Your settings: resume link and contact email
assets/js/main.js       Menu, active link highlight, contact form
assets/img/favicon.svg  Site icon
robots.txt              Search engine rules
```

## How to edit

| I want to... | Open this file | What to change |
| --- | --- | --- |
| Add my resume button | `assets/js/config.js` | Paste the `https://` PDF link into `resumeUrl` |
| Change the contact email | `assets/js/config.js` and `index.html` | Update `email`, and the two `mailto:` links in the Contact section |
| Edit text (about, experience, skills) | `index.html` | Change the text inside the matching `<section>` |
| Add a project | `index.html` | Copy the commented template inside `id="projects"`, then remove the "coming soon" box |
| Add a job | `index.html` | Copy a whole `<article class="job">...</article>` block |
| Change colors or fonts | `assets/css/styles.css` | Section 1, DESIGN TOKENS |
| Change spacing or layout | `assets/css/styles.css` | Find the section by name (header, hero, content blocks...) |
| Change menu or form behavior | `assets/js/main.js` | Each part is numbered and explained |

Tip: press `Ctrl+F` and search for a class name from `index.html` to find its styles.
Do not add inline `style=""` or `<script>` code in `index.html`; the security policy blocks it. Use the files in `assets/` instead.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Before you deploy

1. Upload your resume PDF somewhere public and paste its `https://` link into `resumeUrl` in `assets/js/config.js`. The Download resume button appears automatically.
2. Add real projects in the `id="projects"` section of `index.html` (a commented template is included).

## Deploy

Upload the whole folder to any static host:

- **GitHub Pages:** push to a repo, then Settings > Pages > deploy from the main branch.
- **Netlify or Cloudflare Pages:** drag and drop the folder, or connect the repo. No build command, publish directory is the repo root.
- **Vercel:** import the repo, framework preset "Other", no build command.

## Security notes

- `index.html` sets a Content Security Policy that only allows this site's own scripts and styles. Keep scripts and styles in the `assets` folder, with no inline `<script>` or `style=""` attributes.
- The contact form has no backend. It opens the visitor's email app; nothing is sent until they press send.
- Turn on two-factor authentication for your GitHub and hosting accounts.
