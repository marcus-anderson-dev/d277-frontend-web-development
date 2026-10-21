# Iowa | The Hawkeye State
# WGU Project for Frontend Web Development.

A multi-page tourism website about Iowa and three of its largest cities. It's built with plain HTML, CSS and JavaScript, with no frameworks.

Built for WGU's D277 Front-End Web Development course.

## Pages

| Page | What's on it |
| --- | --- |
| **Home** (`index.html`) | Main Page with Hero section, fact list, stat cards, and a table of cities by region |
| **Des Moines** (`cities/des-moines.html`) | State capital of Iowa: City overview with stats sidebar |
| **Cedar Rapids** (`cities/cedar-rapids.html`) | City overview with stats sidebar |
| **Davenport** (`cities/davenport.html`) | City overview with stats sidebar |
| **Contact** (`contact.html`) | Contact form with validation |

## Features

- **Shared navigation**
- **Theming with CSS custom properties.**
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
git clone https://github.com/marcus-anderson-dev/d277-frontend-web-development.git
```
