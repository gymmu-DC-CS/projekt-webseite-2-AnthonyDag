---
description: "Create a multi-column grid of clickable athlete hero images (photos + Instagram links) for the triathlon site"
argument-hint: "Number of columns (e.g., 2, 3), images per row, and athlete data (image URL, Instagram handle)"
agent: "agent"
---

You are building a gallery/grid of athlete hero images for the triathlon website.

## Your Task

1. **Create a responsive grid layout** with the specified number of columns
2. **Add athlete hero cards** containing:
   - Athlete portrait image
   - Name/caption
   - Clickable link to Instagram profile
3. **Apply consistent styling** across all cards:
   - Hover effects (opacity fade)
   - Responsive design (stacks on mobile, grid on desktop)
   - Proper spacing and alignment
4. **Provide code** that can be repeated for each athlete

## Input Format

**Provide:**
- Number of columns (e.g., 2, 3, 4)
- Athletes list with:
  - Image URL
  - Athlete name
  - Instagram handle/URL
  - Optional: additional text or role

## Output Format

Show:
- **HTML structure** (grid container + athlete card template)
- **CSS for responsive grid** (desktop, tablet, mobile)
- **How to add more athletes** (copy-paste template)
- **Example** with 2-3 athletes filled in

## Guidelines

- Use CSS Grid for modern layout
- Mobile-first responsive design
- Consistent card dimensions
- Smooth hover transitions
- Accessible link structure (`title`, `aria-label`)
- External links: `target="_blank"` + `rel="noopener noreferrer"`
- Consider image optimization (correct aspect ratio, lazy loading)

Generate the code now.
