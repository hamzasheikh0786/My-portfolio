# My-portfolio 
 Personal Portfolio

A clean, mobile-first developer portfolio built with HTML, CSS, and vanilla JavaScript.

## Features
- Terminal-style animated hero
- Responsive grid layout (mobile → tablet → desktop)
- Scroll-reveal animations
- Active nav highlighting
- No frameworks, no dependencies

## Project Structure
```
portfolio/
├── index.html      # Markup & content
├── style.css       # All styles (mobile-first)
├── script.js       # Interactivity
├── resume.pdf      # Add your resume here
└── README.md
```

## Setup in VS Code

1. Open the folder in VS Code: `File → Open Folder`
2. Install the **Live Server** extension (search in Extensions panel)
3. Right-click `index.html` → **Open with Live Server**

## Customise

| What to change | Where |
|---|---|
| Your name & role | `script.js` — `typeWriter` calls |
| About text | `index.html` — `#about` section |
| Skills | `index.html` — `#skills` section |
| Projects | `index.html` — `#projects` section |
| Email link | `index.html` — `mailto:` href |
| Social links | `index.html` — `.social__links` |
| Accent colour | `style.css` — `--accent` variable |

## Deploy to GitHub Pages

```bash
# 1. Create a new repo on GitHub named: yourusername.github.io
# 2. In VS Code terminal:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main

# 3. On GitHub: Settings → Pages → Source: main branch → Save
# Your site will be live at: https://yourusername.github.io
```
