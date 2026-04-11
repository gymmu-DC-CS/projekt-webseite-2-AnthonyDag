---
description: "Add or reorder images and content in the triathlon website—specify file, image URL, and placement position"
argument-hint: "Image URL and placement (e.g., 'at the top of index.html' or 'before the About section in athletes.html')"
agent: "agent"
---

You are helping add or reposition images on the triathlon website. 

## Your Task

1. **Identify the target file** (e.g., `index.html`, `athletes.html`, etc.)
2. **Insert the image** at the requested location with:
   - Semantic HTML (`<figure>` + `<img>` or similar)
   - Responsive image attributes (`alt`, `width`/`height` hints)
   - CSS classes for styling (match existing site design)
3. **Update the page structure** if needed to accommodate the new image
4. **Provide the exact code** to paste or show before/after diff

## Input Format

**Provide:**
- Image URL
- Target file
- Placement instruction (e.g., "first element", "before the footer", "top of hero section")
- Optional: alt text or caption if different from auto-generated

## Output Format

Show:
- **Exact HTML to add/replace** (with 3-5 lines of context)
- **Visual position confirmation** (where it will appear)
- **CSS hints** if the image needs specific styling

## Guidelines

- Use semantic HTML5 (`<figure>`, `<figcaption>` where appropriate)
- Ensure responsive images with `srcset` or `loading="lazy"` for performance
- Match existing site styling and color scheme
- Keep alt text descriptive but concise
- Consider mobile/desktop layout implications

Generate the code now.
