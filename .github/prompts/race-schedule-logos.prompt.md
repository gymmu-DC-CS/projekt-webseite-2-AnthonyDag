---
description: "Display race logos as clickable links to official race websites in the schedule table"
argument-hint: "Race data with logo URL and official website (e.g., 'logo URL | website URL')"
agent: "agent"
---

You are updating the race schedule to feature race logos as the primary clickable element.

## Your Task

1. **Add race logos** to the schedule table
2. **Make logos clickable** — logo image links directly to the official race website
3. **Logo styling:**
   - Prominent display (replaces or complements the flag)
   - Hover effects (scale, glow, shadow)
   - Professional sizing
4. **Apply Ironman theme** (black/white/red)
5. **Provide updated code** for the schedule

## Input Format

**Provide:**
- Race name
- Logo image URL (the primary visual element)
- Official website URL
- Optional: flag emoji or location text

## Output Format

Show:
- **Updated HTML** for schedule table with logo cells
- **Updated CSS** for logo styling and hover effects
- **How to replace** existing table cells
- **Mobile-responsive** layout for logos

## Guidelines

- Use `<img>` or `<a>` with background-image
- Hover effects: scale up, add red glow/shadow
- Logo height consistent across all races (~60-80px)
- Maintain table structure and readability
- Smooth transitions (0.3s)
- External links: `target="_blank"` + `rel="noopener noreferrer"`
- Accessibility: proper alt text, title attributes

Generate the updated schedule code now.
