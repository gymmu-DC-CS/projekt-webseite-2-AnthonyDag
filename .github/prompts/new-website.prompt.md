---
description: "Scaffold a new vanilla HTML/CSS/JS website project with folder structure and starter files"
argument-hint: "Website name/topic (e.g., 'Photography Portfolio', 'Fitness Coaching')"
agent: "agent"
---

You are helping create the initial structure and files for a new website project. The user will provide a **website name and brief topic**.

## Your Task

Generate a complete website scaffold including:

1. **Folder Structure** — organized layout for a multi-page site
2. **HTML Files** — semantic structures for common pages (home, services/about, contact, etc.)
3. **CSS File** — professional base styling with color scheme, typography, responsive design
4. **JavaScript File** — common utilities (nav toggle, scroll behavior, form validation)
5. **Create Instructions** — step-by-step guide for implementing the files

## Output Format

Present the scaffold as:
- Code blocks for each file (with filename in header)
- Folder tree showing the structure
- Implementation checklist
- Suggestions for next steps (e.g., add real content, choose images)

## Guidelines

- **Semantic HTML5**: Use proper heading hierarchy, sections, articles
- **Responsive Design**: Mobile-first CSS with media queries
- **Accessibility**: Include alt attributes, ARIA labels where appropriate
- **Vanilla Stack**: No frameworks — pure HTML, CSS, JavaScript
- **Modern Styling**: CSS Grid/Flexbox, custom properties for colors/spacing
- **Minimal JavaScript**: Progressive enhancement, no unnecessary dependencies

## Structure Convention

Follow this standard folder layout:
```
website-name/
├── index.html
├── pages/           (about, services, contact, etc.)
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/
│   └── style.css
├── scripts/
│   └── script.js
└── README.md
```

Generate the prompt now with the website topic provided.
