Abdul Qayum Akindele — Personal Portfolio

«Cybersecurity Learner · AI Learner · Technical Writer · Content Creator · Technology Enthusiast»

This repository contains the source code for my personal portfolio website.

The portfolio presents my learning journey, qualifications, projects, technical writing, personal thoughts, and ongoing development across cybersecurity, AI, Python, web development, and technology.

---

About the Project

I built this portfolio as a central place to document what I am learning, building, researching, and sharing.

The project is also part of my practical web-development journey. It was built with Astro, HTML, CSS, and JavaScript, with the source code maintained in GitHub.

The portfolio is structured around several areas of my work and development:

- Cybersecurity and ethical hacking
- AI and technology
- Python and development
- Web development
- Research and analysis
- Technical writing
- Technology content creation

---

Features

The current website includes:

- Personal homepage
- About page
- Qualifications and credentials
- Projects section
- Technical and personal writing
- Quotes and thoughts
- Personal contact page
- Personal social profiles
- OFF_LIMIT TECH project page
- Responsive desktop and mobile navigation
- Active navigation state
- Project category filtering
- Writing category tabs
- Quote category filtering
- Responsive layouts
- Accessibility-focused markup and focus states
- External links that open safely in new tabs
- Professional profile image
- Structured content managed from a central JavaScript data file

---

Tech Stack

Technology| Purpose
Astro 7.3.2| Website framework and page generation
JavaScript| Content data and client-side interactions
HTML| Semantic page structure
CSS| Layout, styling, responsiveness, and accessibility states
Git| Version control
GitHub| Source-code hosting

The current "package.json" declares Astro as the project's only direct dependency.

---

Project Structure

portfolio/
├── .gitignore
├── .vscode/
│   ├── extensions.json
│   └── launch.json
│
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── tsconfig.json
│
├── public/
│   ├── assets/
│   │   └── README.md
│   │
│   ├── favicon.ico
│   ├── favicon.svg
│   │
│   └── images/
│       ├── README.md
│       └── photo.png
│
└── src/
    ├── components/
    │   ├── Footer.astro
    │   └── Header.astro
    │
    ├── data/
    │   └── content.js
    │
    ├── layouts/
    │   └── Layout.astro
    │
    ├── pages/
    │   ├── index.astro
    │   ├── about.astro
    │   ├── qualifications.astro
    │   ├── projects.astro
    │   ├── writing.astro
    │   ├── quotes.astro
    │   ├── contact.astro
    │   └── off-limit-tech.astro
    │
    └── styles/
        └── global.css

The tree above reflects the current "main" branch.

---

Directory and File Overview

"src/pages/"

Contains the site's main Astro pages.

File| Purpose
"index.astro"| Homepage
"about.astro"| Personal background, direction, values, and interests
"qualifications.astro"| Education, technical learning, certifications, and professional development
"projects.astro"| Projects with category filtering
"writing.astro"| Technical and personal writing with tabs
"quotes.astro"| Quotes and thoughts with category filtering
"contact.astro"| Personal contact form and social profiles
"off-limit-tech.astro"| OFF_LIMIT TECH project/brand page

The homepage includes the hero section, current focus areas, featured OFF_LIMIT TECH project, writing, featured thought, current building areas, About preview, and contact CTA.

---

"src/components/"

Contains reusable site-wide components.

"Header.astro"

Provides:

- Site branding
- Desktop navigation
- Mobile menu
- Navigation links

The main navigation currently contains:

- Home
- About
- Qualifications
- Projects
- Writing
- Quotes & Thoughts
- Contact

"Footer.astro"

Provides:

- Personal identity
- Footer navigation
- Personal social links
- Copyright information

---

"src/layouts/Layout.astro"

Provides the shared HTML document structure.

It currently handles:

- Global stylesheet loading
- Page titles
- Meta description
- Open Graph metadata
- Twitter card metadata
- Google Fonts connection
- Page slot rendering
- Scroll-based header behavior
- Mobile navigation behavior
- Active navigation state

The current canonical/Open Graph URL in the layout is:

https://abdulqayumakindele.com

---

"src/data/content.js"

This is the central content/data file for the portfolio.

It currently contains data for:

- Site identity
- Personal social profiles
- Current focus areas
- Current building areas
- Writing
- Quotes and thoughts
- Projects
- Qualifications
- Certifications
- Professional development
- OFF_LIMIT TECH
- About page content
- Personal contact purposes

This allows much of the site's content to be maintained separately from the page templates.

---

"src/styles/global.css"

Contains the site's global styling.

The stylesheet includes:

- Global reset
- Typography
- Dark visual theme
- Blue accent system
- Header and navigation
- Mobile navigation
- Buttons
- Cards
- Featured project cards
- Responsive grids
- Forms
- Social links
- Status badges
- Filters
- Tabs
- Quotes
- Values
- Qualifications
- OFF_LIMIT TECH sections
- Responsive breakpoints
- Keyboard focus styles

The layout switches to mobile-oriented arrangements at "900px" and "700px" breakpoints.

---

Pages

Home

The homepage introduces Abdul Qayum Akindele and presents:

- Professional identity
- Current focus
- Featured project
- Featured writing
- Featured thought
- Current building areas
- About preview
- Contact CTA

The homepage also displays the profile image stored at:

public/images/photo.png

---

About

The About page contains:

- Introduction
- Personal journey
- Identity
- Direction
- Values
- Interests beyond technology

The page describes the long-term direction of becoming an ethical hacker and includes interests such as psychology, philosophy, nature, and exploring the world.

---

Qualifications

The Qualifications page contains four major areas:

1. Education
2. Technical Learning
3. Certifications & Credentials
4. Professional Development

Current credentials include Cisco and Anthropic certifications, with credential links where available.

---

Projects

The Projects page includes category filtering for:

- All
- Technology
- Cybersecurity
- Development
- Volunteer

The current data contains:

OFF_LIMIT TECH

- Role: Founder
- Status: In Progress
- Category: Technology
- Flagship project

Personal Portfolio Website

- Role: Developer
- Status: In Progress
- Category: Development

The project page also contains a placeholder for additional future projects.

---

Writing

The Writing page separates content into:

- All
- Technical Writing
- Articles / Personal Writing

Current writing data includes published Dev.to and Substack work as well as a future personal-writing entry marked Coming Soon.

---

Quotes & Thoughts

The Quotes page provides categories for:

- Life & Growth
- Technology & Cybersecurity
- Learning
- Books & Ideas
- Personal Thoughts

It contains original thoughts, personal observations, book quotations, and personal writing.

---

Contact

The personal Contact page contains:

- Name field
- Email field
- Message field
- Direct email link
- Personal social profiles
- Contact-purpose information
- Separate pointer to OFF_LIMIT TECH contact information

The form uses a "mailto:" action:

<form action={`mailto:${site.email}`} method="get">

Therefore, the current implementation relies on the visitor's email client rather than a server-side form-processing system.

---

OFF_LIMIT TECH

The portfolio contains a dedicated OFF_LIMIT TECH page.

OFF_LIMIT TECH is presented as a technology education brand founded by Abdul Qayum Akindele.

Tagline

«Breaking the Limits. Building the Future.»

Mission

«Making technology easier to understand, one concept at a time.»

The page covers:

- Cybersecurity
- Artificial Intelligence
- Computer Literacy
- Networking
- Internet Technology
- Privacy
- Online Safety
- Technical Writing
- Technology Education

It also contains:

- Featured videos
- Published technical articles
- Social profiles
- Brand contact information
- Collaboration and sponsorship information

---

Assets

Profile Image

The repository currently contains:

public/images/photo.png

This image is used on the homepage and About page.

Favicon

The repository contains:

public/favicon.ico
public/favicon.svg

OFF_LIMIT TECH Logo

The repository currently has an "assets/README.md" explaining where the OFF_LIMIT TECH logo should be placed.

The source page currently uses an OLT text placeholder, rather than an actual logo image.

---

Interactivity

The portfolio uses client-side JavaScript for several interface features.

Header

The header changes appearance after scrolling and supports mobile navigation.

Projects

Users can filter projects by category without navigating to another page.

Writing

Users can switch between:

- All
- Technical Writing
- Personal Writing

using client-side tabs.

Quotes

Users can filter quotes and thoughts by category.

---

Accessibility

The current implementation includes several accessibility-oriented features, including:

- Semantic navigation
- "aria-label"
- "aria-labelledby"
- "aria-pressed"
- "aria-selected"
- Screen-reader-only text
- Visible keyboard focus states
- Form labels
- Descriptive image "alt" text
- New-tab indicators for external links

The global stylesheet also defines a visible ":focus-visible" outline for keyboard users.

---

External Links

External links generally use:

target="_blank"
rel="noopener noreferrer"

This is used throughout the portfolio for external social profiles, articles, videos, and other external resources.

---

Authentication

The current portfolio does not implement application-level authentication.

There is no authentication system for:

- User accounts
- Login
- Registration
- Passwords
- Sessions
- JWTs
- OAuth
- Protected routes
- Authentication middleware
- Bearer-token authentication
- Authentication API

The current "package.json" also does not declare an authentication dependency.

This is consistent with the portfolio being a primarily static Astro website rather than an account-based web application.

---

Security

The repository includes a ".gitignore" that excludes:

dist/
.astro/
node_modules/
*.log
.env
.env.production
.DS_Store
.idea/

Environment files are therefore excluded from version control.

The current application does not collect passwords or maintain user accounts.

External links opened in new tabs use "noopener noreferrer", and the stylesheet includes keyboard-visible focus states.

---

Development

Requirements

You need:

- Node.js
- npm
- Git

Install dependencies

npm install

Start the development server

npm run dev

The repository's "package.json" defines the development command as:

astro dev

Build

npm run build

This runs:

astro build

Preview

npm run preview

This runs:

astro preview

---

Development Instructions

The repository contains "AGENTS.md", which provides instructions for development work.

It recommends starting the Astro development server in background mode:

astro dev --background

It also documents commands for managing the background server:

astro dev stop
astro dev status
astro dev logs

The same instructions are available through "CLAUDE.md", which currently points to the same development guidance.

---

VS Code

The repository includes VS Code configuration.

Recommended Extension

The project recommends:

astro-build.astro-vscode

Development Launch Configuration

The VS Code launch configuration starts:

./node_modules/.bin/astro dev

---

TypeScript Configuration

The repository contains "tsconfig.json".

It extends Astro's strict configuration:

{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}

---

Astro Configuration

The current "astro.config.mjs" contains the default Astro configuration:

import { defineConfig } from 'astro/config';

export default defineConfig({});

No additional Astro integrations are currently configured there.

---

Repository Workflow

The project follows a simple development workflow:

Plan
  ↓
Build
  ↓
Test locally
  ↓
Review
  ↓
Git
  ↓
GitHub
  ↓
Improve

The repository is structured to make future projects, writing, qualifications, and other content easy to add through "src/data/content.js" and the existing page components.

---

Current Status

Active Development

The portfolio is an ongoing project.

Future work can include:

- Additional projects
- More technical writing
- More certifications and learning achievements
- OFF_LIMIT TECH logo integration
- Additional accessibility improvements
- Performance improvements
- More advanced web-development features
- Additional cybersecurity projects
- Further UI/UX improvements

---

Author

Abdul Qayum Akindele

Cybersecurity Learner · AI Learner · Technical Writer · Content Creator · Technology Enthusiast

«I build, learn, research, and document my journey in cybersecurity and technology.»

My long-term direction is to become an ethical hacker and use technical knowledge responsibly to protect, educate, and help others.

---

Connect

- GitHub: https://github.com/abdulqayumakindele
- LinkedIn: https://www.linkedin.com/in/abdul-qayum-akindele-bb33573a3
- TikTok: https://www.tiktok.com/@akindeleabdulqayum
- Substack: https://substack.com/@offlimittech
- Snapchat: https://www.snapchat.com/add/akindele.16
- Facebook: https://www.facebook.com/share/18XMAV73NC/

The personal social profiles above are defined in the project's content data.

---

License

No license file is currently present in the repository.

Therefore, no open-source license is currently declared for the project.

---

Project Philosophy

Learning. Building. Documenting. Growing.

«Breaking the Limits. Building the Future.»