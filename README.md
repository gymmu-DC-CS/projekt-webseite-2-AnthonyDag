[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pAqJXfzR)

# Ironman Pro Series Website

A professional website showcasing the 2026 Ironman Pro Series elite male triathletes and race schedule.

## Project Overview

**Objective:** Build a comprehensive, professional website for the Ironman Pro Series featuring elite athletes and race schedules with navigation, responsive design, and interactive elements.

**Scope:** 
- Display 18 elite male triathletes in a responsive grid layout
- Showcase 15 races from the 2026 schedule
- Professional navigation with external links to Ironman official pages
- Responsive design for mobile, tablet, and desktop views
- Interactive hover effects and smooth transitions

## Technical Implementation

### File Structure
```
triathlon-site/
├── index.html      # Main HTML structure
├── style.css       # Complete CSS styling
└── script.js       # Interactive JavaScript features
```

### Key Features Implemented

#### 1. HTML Structure (10+ Semantic Tags)
- `<header>` elements in hero section
- `<nav>` - Navigation menu with anchor links and external links
- `<section>` - Hero section, race schedule, athletes grid
- `<figure>` & `<figcaption>` - Athlete image containers with captions
- `<ul>` & `<li>` - Navigation menu list
- `<a>` - Multiple anchor types (scroll navigation, external links)
- `<img>` - Athlete photos and race logos
- `<div>` - Content containers for layout structure
- `<main>` - Primary content wrapper

#### 2. CSS Styling (5+ Properties & Advanced Techniques)
**Core Properties:**
- `background-color` - Theme colors (#990000, #000000, #ffffff, #cc0000)
- `padding` - Spacing around sections
- `display: flex/grid` - Layout management
- `transition` - Smooth animations on hover
- `border` - Accent lines and card borders

**Advanced CSS:**
- **CSS Grid** - 3-column responsive athlete/race grids
- **Flexbox** - Navigation menu alignment
- **Media Queries** - Responsive breakpoints (768px, 1024px)
- **Aspect Ratio** - 3:4 image ratio for athlete photos
- **Box Shadow** - Depth effects on cards
- **Text Shadow** - Typography enhancement
- **Transform & Translate** - Hover lift effects
- **Object-fit** - Image scaling and cropping

**Color Scheme (IRONMAN Branding):**
- Primary: #990000 (Dark Red - Hero section)
- Primary Dark: #000000 (Black - Main sections)
- Accent: #cc0000 (Ironman Red - Borders, hover states)
- Text: #ffffff (White on dark), #000000 (Black on white cards)

#### 3. JavaScript Interactive Features
**Implemented Features:**
1. **Smooth Scroll Navigation** - Click navbar links to scroll to sections
2. **Hover Effects** - Cards scale and shadow on mouseover
3. **Dynamic Content Updates** - Athlete filtering capability (framework ready)
4. **Event Listeners** - Multiple event-driven interactions
5. **Modal Functionality** - Expandable athlete profile cards (framework ready)

#### 4. Responsive Design
- **Desktop** (1200px+): 3-column grid, full-size navigation
- **Tablet** (768px-1024px): 2-column grid, responsive spacing
- **Mobile** (<768px): Single column, optimized spacing
- Flexible padding and margin scaling
- Text sizing adaptation

### New Technologies Learned & Implemented

#### HTML5 Learning
**`<figure>` & `<figcaption>`** - Semantic image containers
- **Why:** Proper semantic HTML for grouped content
- **Use Case:** Athlete photos with associated captions
- **Adaptation:** Created custom styling for card-like appearance with red borders
- **Status:** ✅ Independently researched and implemented

#### CSS Learning
**CSS Grid Layout** - Advanced layout system
- **Why:** Superior to flexbox for 2D grid arrangements
- **Properties Used:**
  - `grid-template-columns: repeat(3, 1fr)` - 3 equal columns
  - `gap: 2rem` - Spacing between grid items
  - `max-width: 1400px` - Container width constraint
- **Adaptation:** Responsive grid that collapses to 1 column on mobile
- **Status:** ✅ Independently learned and customized

**CSS Aspect Ratio** - Maintain image proportions
- **Why:** Ensures consistent 3:4 portrait images without distortion
- **Implementation:** `aspect-ratio: 3 / 4; object-fit: cover;`
- **Adaptation:** Prevents image stretching on different screen sizes
- **Status:** ✅ Independently researched and applied

#### JavaScript Learning
**Event Delegation & Smooth Scrolling**
- **Why:** Handle dynamic events and provide smooth UX
- **Implementation:**
  - Smooth scroll for anchor navigation
  - Event listeners on athlete cards
  - Framework for future filtering
- **Adaptation:** Custom scroll behavior matching design system
- **Status:** ✅ Independently adapted and enhanced

### Design Decisions Justified

1. **Dark Theme (Ironman Branding)**
   - Professional sports aesthetic
   - Red accents create visual hierarchy
   - High contrast for accessibility

2. **3-Column Grid for Athletes**
   - Displays 18 athletes efficiently
   - Balanced visual layout
   - Responsive collapse to mobile

3. **Card-Based Design**
   - Separates content into digestible units
   - Scalable for future additions
   - Consistent interaction patterns

4. **External Navigation Links**
   - Standings → Ironman official standings page
   - News → Ironman news section
   - How to Watch → Official streaming info
   - Opens in new tabs to maintain site context

5. **Hover Effects**
   - Scale transform provides tactile feedback
   - Color changes indicate interactivity
   - Smooth transitions improve UX

### Git Commit Strategy

Commits follow the pattern: **"[Component] Description (what changed and why)"**

Examples:
- `[HTML] Add figure/figcaption for athlete cards (semantic structure)`
- `[CSS] Implement CSS Grid for responsive athlete layout`
- `[JavaScript] Add smooth scroll navigation (UX enhancement)`
- `[DOCS] Update README with learning objectives and implementation`

### Content Management

**Athlete Roster (18 Total):**
1. Kristian Blummenfelt (@kristianblu)
2. Casper Stornes (@casperstornes)
3. Jelle Geens (@jellegeens)
4. Kristian Hogenhaug (@mr_hoegen)
5. Nick Thompson (@nick_thompson00)
6. Gustav Iden (@gustav_iden)
7. Rudy von Berg (@rudyvonberg)
8. Jonas Schomburg (@jonasschomburg)
9. Henrik Goesch (Ironman profile)
10. Leon Chevalier (@l.chevalier)
11. Jonas Hoffmann (@jonas_hoffmann_triathlete)
12. Jamie Riddle (@jamie__riddle)
13. Sam Laidlow (@samlaidlow)
14. Marten Van Riel (@martenvanriel)
15. Matthew Marquardt (@matthewdmarquardt)
16. Patrick Lange (@patricklange1)
17. Rico Bogen (@ricobogen)
18. Magnus Ditlev (@magnuselbaekditlev)

**Race Schedule (15 Total):**
- March: New Zealand, Geelong, Oceanside
- April: Texas
- May: Aix en Provence
- June: Pennsylvania, Elsinore, Frankfurt
- July: Swansea, Lake Placid, Boise
- August: Kalmar
- August-September: Zell am See, 70.3 World Championship
- October: Ironman World Championship

### How to Run

1. **Clone repository:**
   ```bash
   git clone <repository-url>
   cd projekt-webseite-2-AnthonyDag/triathlon-site
   ```

2. **Open in browser:**
   - Double-click `index.html`, OR
   - Use Live Server extension in VS Code, OR
   - Run: `python -m http.server 8000` and visit `http://localhost:8000`

3. **Navigate the site:**
   - Click navbar items to scroll or visit external pages
   - Hover over athlete cards for effects
   - Click athlete cards to visit Instagram profiles

### Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Features

- Semantic HTML structure improves screen reader support
- High contrast colors meet WCAG AA standards
- Proper alt text on all images
- Keyboard navigation support
- Focus indicators on interactive elements

### Future Enhancements

- [ ] Add athlete filtering by country
- [ ] Create athlete detail pages with full profiles
- [ ] Implement race results/standings tracker
- [ ] Add video integration for race highlights
- [ ] Create blog section for news posts
- [ ] Add team/sponsor information pages
- [ ] Implement contact form backend
- [ ] Add social media feed integration
- [ ] Create merchandise shop
- [ ] Add race registration integration

### Learning Outcomes Achieved

✅ **HTML:** Semantic tags, proper structure, accessibility
✅ **CSS:** Grid layout, responsive design, animations, theming
✅ **JavaScript:** Event handling, DOM manipulation, interactivity
✅ **Version Control:** Meaningful commits, clear history
✅ **Documentation:** README as learning diary
✅ **Design:** Professional UI, brand consistency, UX focus
✅ **Problem Solving:** Responsive layouts, cross-browser compatibility
✅ **Code Quality:** No inline styles, separation of concerns

### Sources & References

**HTML5 Semantic Elements:**
- MDN Web Docs: `<figure>` and `<figcaption>`
- Used as reference, adapted for card-based design

**CSS Grid:**
- CSS-Tricks: CSS Grid Complete Guide
- W3C CSS Grid Specification
- Adapted grid patterns for responsive layouts

**Responsive Design:**
- Mozilla Developer Network: Responsive Web Design
- Mobile-first approach implemented

**Ironman Branding:**
- Official Ironman website for color schemes
- Professional sports design patterns

---

**Project Status:** ✅ Complete and Functional
**Last Updated:** April 2026
**Version:** 1.0

