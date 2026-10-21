# John Erwin Dimaano | Developer Portfolio

I built this portfolio to show my work as a Full-Stack .NET Developer to recruiters, hiring managers and potential clients. It covers who I am, what I can build, my skills, my experience and how to contact me.

Live site: _add your link here after you deploy_

## What I focused on

- **Clear and professional.** A dark navy theme with one cyan accent, simple sections and readable text.
- **Works on any device.** The layout adjusts for phones, tablets and desktops, and the menu collapses on smaller screens.
- **Fast and lightweight.** Plain HTML, CSS and JavaScript with no frameworks, no build step and no third-party requests.
- **Safe by default.** A strict Content Security Policy, no secrets in the code, no backend and no form to attack.
- **Easy to maintain.** Content, styling and behavior live in separate, commented files that I can edit on my own.

## Built with

- HTML5 for the structure
- CSS3 (grid, flexbox, custom properties) for the design and responsiveness
- Vanilla JavaScript for the mobile menu, active link highlight and scroll fade-in

## Project structure

```
index.html                       Page content (HTML)
404.html                         "Page not found" page
assets/css/styles.css            All styling, in 13 numbered sections
assets/js/config.js              My settings: resume link
assets/js/main.js                Menu, active link highlight, scroll fade-in
assets/img/john-erwin-dimaano.jpg  Profile photo (800x1000)
assets/img/og-image.jpg          Share preview image (1200x630)
assets/img/favicon.svg           Site icon
assets/img/projects/             Project screenshots
robots.txt                       Search engine rules
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
| Edit my text (about, services, experience, skills) | `index.html` | Change the text in the matching `<section>` |
| Add a project | `index.html` | Copy the card template from the comment in `id="projects"`, paste it above the "coming soon" box, then delete that box. Screenshots go in `assets/img/projects/` |
| Add a job | `index.html` | Copy a whole `<article class="job">...</article>` block |
| Edit my availability or the FAQ | `index.html` | The `availability` line and the `faq` block in the Contact section |
| Show "Currently learning" | `index.html` | In About, fill in the hidden line and delete the word `hidden` |
| Change my photo | `assets/img/john-erwin-dimaano.jpg` | Replace the file with a 4:5 photo (about 800x1000) |
| Change colors or fonts | `assets/css/styles.css` | Section 1, DESIGN TOKENS |
| Change spacing or layout | `assets/css/styles.css` | Find the section by name |
| Turn off the scroll fade-in | `assets/css/styles.css` | Delete the `.reveal` rules in section 13 |

Tip: `Ctrl+F` for a class name from `index.html` finds its styles.

## What I include in each project card

- **Problem:** what the project solves, in one or two sentences.
- **What I built:** the main features in plain words.
- **My role:** what I personally did.
- **Tech:** the languages and tools I used.
- **Links:** the GitHub repo, and a live demo if there is one. I only use real links, real numbers and real screenshots (with fake data if the original is private).

## Deploy

I upload the whole folder to a static host. There is no build command.

- **GitHub Pages:** push to a repo, then Settings > Pages > deploy from the main branch.
- **Netlify or Cloudflare Pages:** drag and drop the folder, or connect the repo. The publish directory is the repo root.
- **Vercel:** import the repo, framework preset "Other", no build command.

### Before going live

1. Upload a public version of my resume PDF (without my phone number or my references' details) and put its link in `assets/js/config.js`.
2. Add my real projects in the Projects section.
3. Check that every statement is true, especially the availability line and the FAQ answers.
4. Turn on the share preview: in the `<head>` of `index.html`, replace `YOUR-DOMAIN` with my real address and delete the comment markers around the two share-image lines.
5. Test the page on a phone and a laptop, click every link, and run Lighthouse in Chrome.

## Security notes

- `index.html` sets a Content Security Policy that only allows this site's own scripts and styles. That means no inline `<script>` blocks and no `style=""` attributes; new styles go in `assets/css/styles.css` and new scripts in `assets/js`.
- There is no contact form and no backend. The email button opens the visitor's email app.
- I keep two-factor authentication on my GitHub and hosting accounts.

## Contact

- Email: johnerwin.adimaano@gmail.com
- LinkedIn: https://www.linkedin.com/in/jedimaano/
- GitHub: https://github.com/jeditdev
