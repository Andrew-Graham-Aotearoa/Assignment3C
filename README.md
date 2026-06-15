# Waikato Women in STEM (WWiSTEM) Website

A multi-page website built for **Waikato Women in STEM**, a student-led community at the University of Waikato dedicated to supporting and empowering women pursuing studies in Science, Technology, Engineering, and Mathematics.

This project was developed as **Part C — Functional Website** of the DSIGN241 Assignment 3 brief, implementing the team's Figma prototype (Part B) into a working, mobile-responsive site.

## Project Overview

The site serves four key audiences: external sponsors, current members, prospective members, and university staff/stakeholders. It provides information about the club, a sponsor showcase with tiered display (Gold, Silver, Close to Home), an events calendar with registration, a photo gallery, and membership/contact forms.

## Pages

- `index.html` — Home page, hero section, photo carousel, Cover Star feature, and membership application form
- `pages/about.html` — About Us, club description, and Contact Us section/form
- `pages/events.html` — Upcoming events with details and registration information
- `pages/gallery.html` — Photo gallery with interactive carousel and About the Gallery section
- `pages/sponsors.html` — Sponsor showcase (Gold/Silver/Close to Home tiers) and sponsor enquiry form

## Tech Stack

- **HTML5**
- **Tailwind CSS** (via CDN, with custom configuration in `scripts/tailwindConfig.js`)
- **Vanilla JavaScript** — modular scripts for navigation, carousels, and interactivity
- Custom brand colours: `deep-purple`, `middle-purple`, `pale-pink`, `dim-white`, `rich-black`
- Custom fonts: Montserrat (headings), Inter (body), Allura (script/drop-caps)

## Project Structure

```
├── index.html
├── pages/
│   ├── about.html
│   ├── events.html
│   ├── gallery.html
│   └── sponsors.html
├── images/
├── scripts/
│   ├── tailwindConfig.js
│   ├── carousel.js
│   ├── hamburgerButton.js
│   └── navbarHighlighting.js
└── styles/
    └── main.css
```

## Key Features

- **Responsive design** — layouts adapt across mobile, tablet, and desktop breakpoints
- **Interactive photo carousels** — home page cover stars and gallery photo strip, with a center-enlarge effect on the gallery
- **Mobile navigation** — collapsible hamburger menu with active page highlighting
- **Functional forms** — membership registration, event registration, and sponsor enquiry
- **Social links** — Instagram, LinkedIn, and Facebook integration

## Running Locally

This is a static site — no build step required. Open `index.html` in a browser, or serve the folder with a local development server (e.g. VS Code's Live Server extension) for the best experience with relative paths and live reload.

## Credits

Built for Waikato Women in STEM as part of the University of Waikato DSIGN241 course.

-Andrew Graham   Mia Wang   Rowan Lea   Seven Liu   Toby Childs
- LinkedIn: [Waikato Women in STEM](https://www.linkedin.com/company/waikato-women-in-stem/)
- Instagram: [@waikatowistem](https://www.instagram.com/waikatowistem/)
