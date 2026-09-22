Abdul Qayum Akindele — Personal Portfolio

«Cybersecurity Learner · AI Learner · Technical Writer · Content Creator · Technology Enthusiast»

This repository contains the source code for my personal portfolio website.

The portfolio brings together my learning journey, qualifications, projects, technical writing, and thoughts as I continue developing my skills in cybersecurity, technology, Python, AI, and web development.

🌐 Live Website: "abdulqayum.netlify.app" (https://abdulqayum.netlify.app)
💻 Repository: "github.com/abdulqayumakindele/portfolio" (https://github.com/abdulqayumakindele/portfolio)

---

About the Project

I built this portfolio to create a central place where people can learn about me, explore my work, view my qualifications, and follow my progress in technology.

Rather than presenting only a list of skills, the website is designed to document the things I am learning, building, writing, and exploring.

The project also serves as a practical example of my development journey with Astro, JavaScript, HTML, CSS, Git, and GitHub.

---

Features

The portfolio currently includes:

- Home — Introduction and overview
- About — Background, interests, and professional direction
- Qualifications — Certifications and credentials
- Projects — Selected technology and cybersecurity-related projects
- Writing — Technical writing and published work
- Quotes & Thoughts — Personal reflections and ideas
- Contact — Contact form and social profiles
- Responsive navigation — Desktop and mobile navigation
- Responsive layout — Designed for different screen sizes
- External social links — Links to professional and social platforms
- Accessibility considerations — Semantic navigation, labels, hidden headings, and screen-reader text

---

Tech Stack

Technology| Purpose
Astro| Static site framework and page generation
JavaScript| Interactive browser-side functionality and data
HTML| Page structure and semantic markup
CSS| Styling, layout, responsiveness, and visual design
Git| Version control
GitHub| Source-code hosting and project management
Netlify| Website deployment

The current "package.json" keeps the project intentionally lightweight, with Astro as its main dependency.

---

Project Structure

portfolio/
├── public/
│   └── static assets
│
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   │
│   ├── data/
│   │   └── content.js
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── qualifications.astro
│   │   ├── projects.astro
│   │   ├── writing.astro
│   │   ├── quotes.astro
│   │   ├── contact.astro
│   │   └── off-limit-tech.astro
│   │
│   └── styles/
│       └── global.css
│
├── .gitignore
├── package.json
└── README.md

Main directories

"src/pages/"

Contains the website's pages.

Astro uses files inside "src/pages/" to create routes.

For example:

src/pages/about.astro

becomes:

/about

"src/components/"

Contains reusable interface components.

The current project includes:

- "Header.astro"
- "Footer.astro"

"src/layouts/"

Contains the shared page layout.

"Layout.astro" handles common elements such as:

- Global CSS
- HTML metadata
- Page titles
- Open Graph metadata
- Twitter card metadata
- Google Fonts
- Shared client-side interactions

"src/data/"

Contains reusable website content.

The current project uses:

src/data/content.js

for structured content such as identity information and social/contact data.

"src/styles/"

Contains the global styling used throughout the website.

---

Page Routes

The current portfolio includes these main routes:

Route| Purpose
"/"| Homepage
"/about"| About me
"/qualifications"| Qualifications and credentials
"/projects"| Projects
"/writing"| Technical writing
"/quotes"| Quotes and thoughts
"/contact"| Contact and social profiles
"/off-limit-tech"| OFF_LIMIT TECH project

---

Contact Form

The contact page includes a simple contact form that uses the visitor's email client.

The current implementation uses:

<form action={`mailto:${site.email}`} method="get">

This means the portfolio does not currently have a server-side contact API or database.

Messages are not stored by the portfolio application.

Visitors can also email directly using the displayed email address.

---

Authentication

This portfolio currently does not implement user authentication.

There are currently no:

- User accounts
- Login system
- Registration system
- Password authentication
- Password hashing
- JWT authentication
- OAuth implementation
- Authentication API
- Session store
- Protected routes
- Authentication middleware
- Bearer-token system

The ".gitignore" file excludes environment files such as:

.env
.env.production

This helps prevent environment-specific configuration from being committed accidentally, but environment files themselves are not an authentication system.

---

Client-Side Functionality

The portfolio contains a small amount of browser-side JavaScript in "Layout.astro".

Scroll header

The header receives a "scrolled" class when the user scrolls more than 40 pixels.

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

Mobile navigation

The mobile menu can be opened and closed using JavaScript.

Navigation links also close the mobile menu after selection.

Active navigation

The current page is detected using "window.location" and the corresponding navigation link receives an "active" class.

---

External Links

External social links are opened in a new browser tab.

The project uses:

target="_blank"
rel="noopener noreferrer"

The "noopener noreferrer" attributes help prevent the newly opened page from accessing the original page through "window.opener".

---

Security Considerations

Security is an important part of how I approach technology.

The current portfolio is a relatively simple static website, which means its attack surface is smaller than that of an application with user accounts, databases, APIs, and server-side authentication.

Current practices include:

- No authentication credentials are stored in the application.
- Environment files are excluded from Git.
- No passwords are collected.
- No user accounts are created.
- No authentication tokens are handled by the application.
- External links opened in new tabs use "noopener noreferrer".
- The project uses semantic HTML and accessibility attributes in several interface elements.

Security is an ongoing learning process, and I intend to continue improving the project as I learn more about secure web development.

---

Getting Started

Prerequisites

You should have the following installed:

- Node.js
- npm
- Git

Clone the repository

git clone https://github.com/abdulqayumakindele/portfolio.git

Move into the project directory:

cd portfolio

Install dependencies

npm install

Start the development server

npm run dev

The Astro development server will normally be available at:

http://localhost:4321

Build the project

npm run build

This creates the production build in:

dist/

Preview the production build

npm run preview

---

Development Workflow

My development workflow currently involves:

Idea
  ↓
Design / Planning
  ↓
Development
  ↓
Local Testing
  ↓
Git
  ↓
GitHub
  ↓
Deployment
  ↓
Review & Improvement

The portfolio is an ongoing project rather than a finished product.

As I learn new technologies and improve my development skills, I plan to continue refining it.

---

Deployment

The production website is deployed through Netlify.

🌐 Live Portfolio:
https://abdulqayum.netlify.app

The source code is maintained in GitHub.

---

Future Improvements

Possible future improvements include:

- Improved project documentation
- Additional accessibility testing
- Automated testing
- Better performance monitoring
- Improved SEO
- More project case studies
- Additional cybersecurity projects
- Better deployment documentation
- Security-focused repository configuration
- Further UI/UX improvements

As the project grows, some documentation may eventually be moved into dedicated documentation files.

---

Related Project — OFF_LIMIT TECH

OFF_LIMIT TECH is my technology-focused project centered on making cybersecurity and technology easier to understand.

Its focus includes:

- Cybersecurity awareness
- Computer literacy
- Scam awareness
- Beginner-friendly technology explanations
- Technical learning
- Technology content creation

The portfolio contains a dedicated page for the project:

/off-limit-tech

---

Author

Abdul Qayum Akindele

Cybersecurity Learner · AI Learner · Technical Writer · Content Creator · Technology Enthusiast

I am currently developing my skills across cybersecurity, Python, AI, web development, technical writing, and technology communication.

My goal is to keep learning, building, documenting what I learn, and using technology responsibly.

---

Connect With Me

- Portfolio: https://abdulqayum.netlify.app
- GitHub: https://github.com/abdulqayumakindele
- LinkedIn: https://www.linkedin.com/in/abdul-qayum-akindele-bb33573a3/

For other social profiles, visit the Contact page on the portfolio.

---

License

No license has currently been specified for this repository.

If this project is intended to be reused, modified, or redistributed by others, an appropriate open-source license can be added later.

---

Status

Active Development

This portfolio represents an ongoing learning and development project.

«Breaking the limits. Building the future.
:::»

