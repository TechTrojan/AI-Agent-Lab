# AI-Agent-Lab Portfolio (Astro + Tailwind)

A modern, static portfolio site designed for a high-trust **Principal/Staff-level Backend + Cloud Native + AI Experiments** brand.

## Tech Stack

- [Astro](https://astro.build/) (static export)
- Tailwind CSS
- Markdown content collections for writing posts
- GitHub Actions deployment to GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build (Static)

```bash
npm run build
```

Generated output is in `dist/`.

## Preview Production Build Locally

```bash
npm run build
npm run preview
```

This serves the generated static site for a deployment-like preview.

## Troubleshooting install/build

If `npm install` fails due registry/proxy policy, ensure npm points to public registry:

```bash
npm config set registry https://registry.npmjs.org/
npm config delete proxy
npm config delete https-proxy
npm install
```

Then run:

```bash
npm run build
npm run preview
```

## Content Management

### Add/Update projects

Edit `src/data/projects.json`.

Each project supports:

- `title`
- `summary`
- `tags` (array)
- `repoUrl`
- `demoUrl`

### Add writing posts (Markdown)

Create a new file in `src/content/posts/`:

```md
---
title: "Post title"
description: "Short summary"
date: 2026-01-01
tags: ["RAG", "System Design"]
---

Post body...
```

Posts automatically appear on `/writing` and get static routes under `/writing/<slug>/`.

## Architecture Thumbnails

Drop image files into `public/architecture/` and update captions in `src/pages/index.astro`.

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy.yml` that deploys on push to `main`.

### Important

- If this is your **user site repo** (`mukeshzala.github.io`), this setup works as-is.
- If this is a **project repo**, set Astro `base` in `astro.config.mjs` to `/<repo-name>/` before deployment.

Then push to `main`:

```bash
git push origin main
```

GitHub Actions will build and publish the static site automatically.
