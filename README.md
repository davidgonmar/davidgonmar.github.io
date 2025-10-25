# My Personal Website

Uses Jekyll, YAML, and Tailwind.

## Quick start
```bash
bundle install
npm install
npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/main.css --minify
bundle exec jekyll serve
```

## Edit content
- `_data/papers.yml` - publications
- `_data/news.yml` - news for homepage
- `_data/talks.yml` - talks
- `_data/people.yml` - group members
- `pages/*` - simple Markdown pages
- `assets/css/tailwind.css` - styles (rebuild Tailwind after edits)

## Deploy to GitHub Pages
Push to `main`, enable Pages -> Source: GitHub Actions. The included workflow builds Tailwind and Jekyll and deploys.
