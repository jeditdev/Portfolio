/* ==========================================================================
   main.js  |  John Erwin Dimaano portfolio

   What this file does:
   1. Reads your settings from config.js
   2. Shows the current year in the footer
   3. Shows the Download resume button (only when a resume link is set)
   4. Opens and closes the mobile menu
   5. Highlights the nav link of the section you are viewing
   6. Fades cards in as you scroll (scroll reveal)
   7. Validates the contact form and opens the visitor's email app

   Notes for editing:
   - Do not add inline <script> blocks to index.html; the Content Security
     Policy only allows scripts loaded from the assets/js folder.
   - Change your resume link and email in config.js, not here.
   ========================================================================== */

"use strict";

/* --------------------------------------------------------------------------
   1. SETTINGS AND SHORTCUTS
   -------------------------------------------------------------------------- */

// SITE comes from config.js (it holds resumeUrl and email).
const SITE = window.SITE || {};

// Shortcut: $("#menuBtn") finds the first element matching a CSS selector.
const $ = (selector) => document.querySelector(selector);


/* --------------------------------------------------------------------------
   2. FOOTER YEAR
   Fills <span id="yr"> so the copyright year never goes out of date.
   -------------------------------------------------------------------------- */

$("#yr").textContent = new Date().getFullYear();


/* --------------------------------------------------------------------------
   3. RESUME BUTTON
   The button in index.html starts hidden. It is revealed only when
   SITE.resumeUrl is a valid https:// link, so visitors never see a dead button.
   -------------------------------------------------------------------------- */

const httpsLink = /^https:\/\/[^\s"'<>]+$/i;

if (httpsLink.test(SITE.resumeUrl || "")) {
  document.querySelectorAll(".resume-btn").forEach((button) => {
    button.href = SITE.resumeUrl;
    button.target = "_blank";                // open in a new tab
    button.rel = "noopener noreferrer";      // security for new-tab links
    button.hidden = false;                   // reveal the button
  });
}


/* --------------------------------------------------------------------------
   4. MOBILE MENU
   On small screens the links sit inside <nav id="nav"> and are shown or
   hidden by adding or removing the class "open" (styled in styles.css).
   -------------------------------------------------------------------------- */

const nav = $("#nav");
const menuButton = $("#menuBtn");

function setMenu(isOpen) {
  nav.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", isOpen);                          // for screen readers
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

// Tap the hamburger button to open or close.
menuButton.addEventListener("click", () => {
  setMenu(!nav.classList.contains("open"));
});

// Close the menu after tapping any link inside it.
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

// Press Escape to close the menu.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});


/* --------------------------------------------------------------------------
   5. ACTIVE NAV LINK
   Watches each <section id="..."> and adds the class "on" to the matching
   nav link while that section is in the middle of the screen.
   -------------------------------------------------------------------------- */

const navLinks = document.querySelectorAll("a.link");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("on", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }   // only count the middle strip of the screen
  );

  document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
}


/* --------------------------------------------------------------------------
   6. SCROLL REVEAL
   Adds a gentle fade-in to cards and timeline items. The class "js" on <html>
   tells the CSS that scripts are running, so nothing stays hidden if this file
   fails to load. To change what animates, edit the selector list below.
   -------------------------------------------------------------------------- */

document.documentElement.classList.add("js");

const revealItems = document.querySelectorAll(".card, .job, .stats li, .empty, .code-card");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");        // fade in
        revealObserver.unobserve(entry.target);  // only animate once
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });
}


/* --------------------------------------------------------------------------
   7. CONTACT FORM
   There is no server. After validation, the visitor's own email app opens
   with the message filled in. Nothing is sent until they press Send there,
   and the status text says so honestly.
   -------------------------------------------------------------------------- */

const form = $("#form");
const formStatus = $("#status");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();                       // stop the page from reloading

  const values = {};
  let isValid = true;

  // Check every field. Each field is followed by a <span class="err"> for its message.
  form.querySelectorAll("input, textarea").forEach((field) => {
    const value = field.value.trim();
    let message = "";

    if (!value) {
      message = "This field is required.";
    } else if (field.name === "email" && !emailPattern.test(value)) {
      message = "Enter a valid email address.";
    }

    field.setAttribute("aria-invalid", message ? "true" : "false");   // red border via CSS
    field.nextElementSibling.textContent = message;

    if (message) isValid = false;
    values[field.name] = value;
  });

  if (!isValid) {
    formStatus.textContent = "Fix the highlighted fields and try again.";
    return;
  }

  if (!SITE.email) {
    formStatus.textContent = "The contact email is not set. Add it in assets/js/config.js.";
    return;
  }

  // Build the email and hand it to the visitor's email app.
  const body = values.message + "\n\nFrom: " + values.name + " (" + values.email + ")";
  window.location.href =
    "mailto:" + SITE.email +
    "?subject=" + encodeURIComponent(values.subject) +
    "&body=" + encodeURIComponent(body);

  formStatus.textContent =
    "Your email app should open with this message ready. Nothing is sent until you press send there.";
});
