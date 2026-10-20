# Iowa | The Hawkeye State

A multi-page tourism website about Iowa and three of its largest cities. It's built with plain HTML, CSS and JavaScript, with no frameworks.

Built for WGU's D277 Front-End Web Development course.

## Pages

| Page | What's on it |
| --- | --- |
| **Home** (`index.html`) | Hero section with the state motto, a numbered fact list, statistic cards (population, median income, median age), and a table of cities by region |
| **Des Moines** (`cities/des-moines.html`) | The state capital: a statistics sidebar and an overview of the city |
| **Cedar Rapids** (`cities/cedar-rapids.html`) | Statistics sidebar and city overview |
| **Davenport** (`cities/davenport.html`) | Statistics sidebar and city overview |
| **Contact** (`contact.html`) | Contact form with client-side validation |

## Features

- **Shared navigation** on every page, with a "More Cities" dropdown menu built in pure CSS using `:hover`.
- **Modern layout** using Flexbox for the header, hero and cards, and CSS Grid for the city pages' sidebar and content.
- **Theming with CSS custom properties.** Colors are defined once in `:root` and reused across the site.
- **Responsive contact form.** The two-column rows stack into one column on screens narrower than 600px.
- **Form validation:**
  - HTML5 `required` fields and `type="email"` inputs.
  - JavaScript (`validateEmail()` in `main.js`) checks that the email and confirm-email fields match before submitting.
- **Semantic HTML** with `header`, `nav`, `main`, `section`, `aside`, `article` and `footer`.

## Project structure

```
├── index.html            Home page
├── contact.html          Contact form
├── cities/
│   ├── des-moines.html
│   ├── cedar-rapids.html
│   └── davenport.html
└── resources/
    ├── images/           Photos and logo
    ├── scripts/main.js   Form validation
    └── styles/main.css   All site styles
```

## Running it

No build step is needed. Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/aLLmentaLx/d277-frontend-web-development.git
```
