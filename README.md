# John Erwin Dimaano | Developer Portfolio

I built this portfolio to show my work as a Full-Stack .NET Developer to recruiters, hiring managers and potential clients. It covers who I am, my skills, my experience and how to contact me.

Live site: _add your link here after you deploy_

## What I focused on

- **Clear and professional.** A dark navy theme with one cyan accent, simple sections and readable text.
- **Works on any device.** The layout adjusts for phones, tablets and desktops, and the menu collapses on small screens.
- **Fast and lightweight.** Plain HTML, CSS and JavaScript with no frameworks, no build step and no third-party requests.
- **Safe by default.** A strict Content Security Policy, no secrets in the code and no backend to attack.
- **Easy to maintain.** Content, styling and behavior live in separate files that I can edit on my own.

## Built with

- HTML5 for the structure
- CSS3 (grid, flexbox, custom properties) for the design and responsiveness
- Vanilla JavaScript for the mobile menu, scroll effects and contact form

## Project structure

```
index.html              Page content (HTML)
assets/css/styles.css   All styling, grouped into numbered sections
assets/js/config.js     My settings: resume link and contact email
assets/js/main.js       Menu, active link highlight, scroll reveal, contact form
assets/img/favicon.svg  Site icon
robots.txt              Search engine rules
```

## Run it locally

I open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## How I update it

| I want to... | File | What I change |
| --- | --- | --- |
| Add my resume button | `assets/js/config.js` | Paste the `https://` PDF link into `resumeUrl` |
| Change my contact email | `assets/js/config.js` and `index.html` | Update `email` and the two `mailto:` links in the Contact section |
| Edit my text (about, experience, skills) | `index.html` | Change the text in the matching `<section>` |
| Add a project | `index.html` | Copy the commented template in `id="projects"`, then remove the "coming soon" box |
| Add a job | `index.html` | Copy a whole `<article class="job">...</article>` block |
| Change colors or fonts | `assets/css/styles.css` | Section 1, DESIGN TOKENS |
| Change spacing or layout | `assets/css/styles.css` | Find the section by name |
| Turn off an effect (glow, scroll reveal) | `assets/css/styles.css` | Delete the matching block in section 12, VISUAL POLISH |
| Change menu or form behavior | `assets/js/main.js` | Each part is numbered and explained |

Tip: `Ctrl+F` for a class name from `index.html` finds its styles.

## Deploy

I upload the whole folder to a static host. There is no build command.

- **GitHub Pages:** push to a repo, then Settings > Pages > deploy from the main branch.
- **Netlify or Cloudflare Pages:** drag and drop the folder, or connect the repo. The publish directory is the repo root.
- **Vercel:** import the repo, framework preset "Other", no build command.

### Before going live

1. Upload my resume PDF somewhere public and put its link in `assets/js/config.js`.
2. Add my real projects in the Projects section.
3. Test the page on a phone and a laptop, and click every link.

## Security notes

- `index.html` sets a Content Security Policy that only allows this site's own scripts and styles. That means no inline `<script>` blocks and no `style=""` attributes; new styles go in `assets/css/styles.css` and new scripts in `assets/js`.
- The contact form has no backend. It opens the visitor's email app, and nothing is sent until they press send.
- I keep two-factor authentication on my GitHub and hosting accounts.

## Contact

- Email: johnerwin.adimaano@gmail.com
- LinkedIn: https://www.linkedin.com/in/jedimaano/
- GitHub: https://github.com/jeditdev
