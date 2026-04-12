# kriggity.com

Source for [kriggity.com](https://kriggity.com) — my personal portfolio site.

Built solo in [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), with accessibility treated as a foundational constraint rather than a retrofit: semantic structure, keyboard support, focus visibility, color contrast, and minimal decorative ARIA. Content drives layout, not the other way around.

## Stack

- Astro 5
- Tailwind CSS 4
- Fontsource (Roboto Slab, Poppins)
- Sitemap and robots.txt generation

## Local development

```sh
npm install
npm run dev
```

Dev server runs at `localhost:4321`.

## Build

```sh
npm run build      # outputs to ./dist
npm run preview    # preview the production build locally
```
