**RecoverWell**
Member1:Jovina K J
Member2:Gayathri Surya Athendavida

Hosted Project Link
https://github.com/gayathrisuryaa04-byte/Recoverywebsite

Project Description
RecoverWell is an interactive web-based recovery support system designed to assist individuals who want to overcome alcohol addiction and regain control over their lives. The platform is built on the
understanding that recovery is a gradual psychological and behavioral process rather than a single decision or event. Many individuals attempting to quit alcohol face multiple emotional and physical 
barriers that can interrupt their progress. To address this, RecoverWell focuses on eight core challenges commonly experienced during recovery: strong cravings, anxiety and stress, withdrawal symptoms,
depression and low mood, social pressure, lack of motivation, guilt and shame, and sleep-related problems. By recognizing these obstacles as normal parts of the recovery journey, the platform helps users
feel understood, supported, and less isolated.
        The system integrates motivational design principles and behavioral reinforcement strategies to encourage consistency and resilience. Instead of pressuring users to achieve perfection, RecoverWell 
promotes a positive mindset centered on progress, emphasizing that every small step forward is meaningful. To reinforce this philosophy, the platform includes milestone celebrations at key recovery
stages such as days 3, 7, and 14, allowing users to visibly track their improvement and feel a sense of accomplishment. These milestones act as psychological rewards that strengthen determination
and help maintain long-term commitment.
Additionally, RecoverWell serves as a digital companion that continuously encourages users by highlighting their gradual improvement and reminding them that recovery is possible. By combining structured
guidance, emotional reassurance, and progress visualization, the platform aims to transform the recovery experience into a hopeful, motivating, and empowering journey. Ultimately, RecoverWell seeks to 
provide individuals with the confidence, awareness, and support necessary to break free from alcohol dependence and move toward a healthier and more fulfilling life.

The Problem Statement
RecoverWell is an interactive web-based recovery support system designed to assist individuals who want to overcome alcohol addiction and regain control over their lives.

The Solution
The platform is built on the
understanding that recovery is a gradual psychological and behavioral process rather than a single decision or event. Many individuals attempting to quit alcohol face multiple emotional and physical 
barriers that can interrupt their progress. To address this, RecoverWell focuses on eight core challenges commonly experienced during recovery: strong cravings, anxiety and stress, withdrawal symptoms,
depression and low mood, social pressure, lack of motivation, guilt and shame, and sleep-related problems. By recognizing these obstacles as normal parts of the recovery journey, the platform helps users
feel understood, supported, and less isolated.

Technical Details
For Software:
Language used:HTML,CSS,JavaScript
Frameworks used:None
Libraries Used: None
Tools Used:VSCode ,GitHub
 
## Features

List the key features of your project:

* **Feature 1 — Problems & Solutions Module:** Covers 8 core alcohol recovery challenges (Strong Cravings, Anxiety & Stress, Withdrawal Symptoms, Depression & Low Mood, Social Pressure, Lack of Motivation, Guilt & Shame, Sleep Problems) — each with a color-coded category tag, a clear problem statement, and 4 practical, evidence-based solutions displayed in an interactive card grid.

* **Feature 2 — Gamified Progress System:** A visual recovery tracking system featuring a 28-day streak calendar (with sober day indicators, brightness progression, and a "today" marker), three streak stat cards showing current streak, longest streak, and total XP earned — designed to make invisible daily courage feel visible and rewarding.

* **Feature 3 — Milestone & Badge System:** Six recovery milestones (3 Days 🌱, 1 Week ⭐, 2 Weeks 🔥, 1 Month 🌙, 3 Months 💎, 1 Year 👑) displayed as a visual achievement track with gold glow effects for reached milestones, plus 10 achievement badges (earned vs. locked states) covering streak length and behavioral challenges like journaling, meditation, and craving resistance.

* **Feature 4 — Scroll-Reveal Animated UI & Resources Section:** The entire website uses CSS scroll-reveal animations (powered by the browser's IntersectionObserver API) to smoothly fade and slide sections into view as the user scrolls. A dedicated Resources section links users to real-world support services — SAMHSA Helpline, Alcoholics Anonymous, and the Crisis Text Line — with hover-interactive cards.

---

## Implementation

### For Software:

#### Installation

No installation is required. This is a fully static website with zero dependencies, no package manager, and no build tools.

Simply download or clone the three files into the same folder:

```
recoverwell/
├── index.html
├── style.css
└── script.js
```

If you want to host it on a local development server (optional), you can use any of the following:

```bash
# Option 1 — Python (built-in, no install needed)
python -m http.server 8000

# Option 2 — Node.js live-server (if Node is installed)
npm install -g live-server
live-server

# Option 3 — VS Code
# Install the "Live Server" extension and click "Go Live"
```

#### Run

```bash
# Simply open the HTML file directly in any browser — no server needed
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# OR if using Python server (after running the install command above)
# Visit: http://localhost:8000
```

---

## Project Documentation

### For Software:

#### Screenshots

![Screenshot1]<img width="1920" height="1080" alt="Screenshot 2026-02-21 114640" src="https://github.com/user-attachments/assets/7cea7d61-409d-4275-944d-8ac71ba78944" />
First page of our Website.

![Screenshot2]<img width="1920" height="1080" alt="Screenshot 2026-02-21 114659" src="https://github.com/user-attachments/assets/db64f347-6b63-4065-a7db-a68906c4e51d" />
Main part of website where database is suppose to be given.

![Screenshot3]<img width="1920" height="1080" alt="Screenshot 2026-02-21 114715" src="https://github.com/user-attachments/assets/4350e01d-1ec0-472e-90dd-220c50efcfe7" />
milestone celebrations and Achievement badges

---

### Diagrams

#### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        BROWSER                              │
│                                                             │
│   ┌─────────────┐    loads     ┌──────────────────────┐    │
│   │ index.html  │ ────────────▶│     style.css        │    │
│   │  (Structure)│              │  (All Visual Design) │    │
│   │             │    loads     └──────────────────────┘    │
│   │             │ ────────────▶┌──────────────────────┐    │
│   │             │              │     script.js        │    │
│   └─────────────┘              │ (Calendar + Reveal)  │    │
│          │                     └──────────────────────┘    │
│          │ requests                                         │
│          ▼                                                  │
│   ┌─────────────────────┐                                  │
│   │   Google Fonts CDN  │                                  │
│   │  fonts.googleapis   │  (Playfair Display + Outfit)     │
│   └─────────────────────┘                                  │
│                                                             │
│   Tech Stack:                                               │
│   • HTML5 — Page structure & content                        │
│   • CSS3  — Grid, Flexbox, Variables, Animations           │
│   • JS ES6 — IntersectionObserver, DOM manipulation        │
│   • Google Fonts — Typography only                         │
│                                                             │
│   No backend. No database. No framework. No build step.    │
└─────────────────────────────────────────────────────────────┘
```

**Components:**
- `index.html` is the single entry point — the browser opens this first
- It pulls in `style.css` for all visual styles and `script.js` for behavior
- `script.js` runs after the page loads (placed at bottom of `<body>`)
- Google Fonts is the only external network request — everything else is local

**Data Flow:**
1. Browser opens `index.html`
2. Browser parses HTML and finds `<link>` to `style.css` → fetches and applies styles
3. Browser finds Google Fonts `<link>` → fetches Playfair Display and Outfit fonts
4. Browser renders the visible page
5. Browser reaches `<script src="script.js">` at bottom → runs JavaScript
6. JS builds the streak calendar (creates `<div>` elements dynamically)
7. JS sets up `IntersectionObserver` to watch `.reveal` elements
8. As user scrolls, observer fires → adds `.visible` class → CSS transitions animate elements in

---

#### Application Workflow

```
User Opens Website
        │
        ▼
┌───────────────────┐
│   HERO SECTION    │  ← Animated dashboard cards slide in (CSS @keyframes)
│   (First View)    │
└────────┬──────────┘
         │  User scrolls down
         ▼
┌───────────────────┐
│    CHALLENGES     │  ← 8 cards fade up via IntersectionObserver
│  (Education Hub)  │     Each card: Problem → Solutions
└────────┬──────────┘
         │  User scrolls down
         ▼
┌───────────────────┐
│   QUOTE BANNER    │  ← Full-width teal motivational message
│  (Emotional Beat) │
└────────┬──────────┘
         │  User scrolls down
         ▼
┌───────────────────────────────────────┐
│         PROGRESS SECTION              │
│                                       │
│  1. Streak Calendar (JS-built grid)   │  ← script.js builds this dynamically
│  2. Milestone Track (HTML + CSS)      │  ← Gold glow on reached milestones
│  3. Badge Showcase (HTML + CSS)       │  ← Lit vs locked badge states
└────────┬──────────────────────────────┘
         │  User scrolls down
         ▼
┌───────────────────┐
│    RESOURCES      │  ← 3 support service cards with hover effects
│  (Help & Support) │
└────────┬──────────┘
         │  User scrolls down
         ▼
┌───────────────────┐
│      FOOTER       │  ← Logo, tagline, navigation links
└───────────────────┘
```

**Scroll Reveal Workflow (script.js):**
```
Page loads
    │
    ▼
script.js runs
    │
    ├── Builds streak calendar grid (createElement loop)
    │
    └── Creates IntersectionObserver
            │
            └── Observes all .reveal and .reveal-stagger elements
                        │
                        └── When element enters viewport:
                                → Adds .visible class to element
                                → CSS transition fires automatically
                                → Element fades in + slides up smoothly
```

---

## Tech Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Structure | HTML5 | Page layout and content |
| Styling | CSS3 (Grid, Flexbox, Variables) | All visual design |
| Animation | CSS @keyframes + Transitions | Hero cards, hover effects |
| Scroll FX | JS IntersectionObserver API | Reveal animations on scroll |
| Calendar | Vanilla JS DOM manipulation | Builds streak grid dynamically |
| Typography | Google Fonts (external CDN) | Playfair Display + Outfit fonts |
| Hosting | Any static host | GitHub Pages, Netlify, Vercel, etc. |
| Framework | None | Zero dependencies |

---

## File Structure

```
recoverwell/
│
├── index.html         ← All page content (nav, hero, sections, footer)
├── style.css          ← All styles (layout, colors, fonts, animations, responsive)
└── script.js          ← Streak calendar builder + scroll reveal observer
```

---

## Hosting Options

Since this is a fully static website, it can be hosted for free on:

| Platform | How to Deploy |
|----------|--------------|
| **GitHub Pages** | Push files to a repo → enable Pages in settings |
| **Netlify** | Drag and drop the folder onto netlify.com |
| **Vercel** | Connect GitHub repo or drag-and-drop deploy |
| **Any Web Host** | Upload via FTP — no server-side configuration needed |

---
