---
description: "Make an image clickable by wrapping it in a link with proper HTML semantics and styling"
argument-hint: "Image element or URL, destination link, and optional styling (e.g., 'add hover effect')"
agent: "agent"
---

You are helping make images interactive by converting them into clickable links.

## Your Task

1. **Identify the image element** in the specified file
2. **Wrap it in an `<a>` tag** with the destination URL
3. **Add accessibility attributes** (`title`, `aria-label` if needed)
4. **Apply CSS styling** for visual feedback:
   - Hover effect (opacity, scale, shadow)
   - Cursor pointer
   - Optional: smooth transitions
5. **Provide the exact code** before/after

## Input Format

**Provide:**
- Image URL or selector (or the file where it exists)
- Destination link (where the image should take you)
- Optional: hover effect style preference

## Output Format

Show:
- **Before HTML** (current image code)
- **After HTML** (wrapped in `<a>` tag with all attributes)
- **CSS to add** (hover effects, styling)
- **Where to place** the CSS

## Guidelines

- Use semantic HTML (`<a>` wrapping `<figure>` or `<img>`)
- Add meaningful `title` and `aria-label` for accessibility
- Include `target="_blank"` if linking to external sites (Instagram, external URLs)
- Add `rel="noopener noreferrer"` for security on external links
- Keep hover effects subtle and performant (use CSS transitions)
- Ensure touch targets are adequate on mobile (minimum 44×44px)

Generate the code now.
