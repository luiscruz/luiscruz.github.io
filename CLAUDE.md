# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Development

Serve the site locally with Jekyll:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`. Changes to `_config.yml` require a server restart; all other files hot-reload.

Alternatively, use Docker (build the image first if not already done):

```bash
docker build -t sandbox .
docker compose up
```

## Site Architecture

This is a Jekyll-based personal academic website using the `minima` theme with Bootstrap 3 for layout.

**Key pages** are Markdown files at the root or in subdirectories with front matter specifying `layout`, `title`, and `permalink`:
- `index.md` – homepage (uses raw HTML + Bootstrap)
- `courses/index.md` – teaching page, manually maintained lists of courses by year
- `publications.md` – auto-generated from the `_publications/` collection
- `research.md`, `blog.md` – static pages

**Navigation** is a single shared include: `_includes/menu.md`. It uses `page.permalink` to apply an `active` CSS class to the current page link.

**Layouts:**
- `default.html` – base HTML shell (head, meta tags, Bootstrap, Ionicons, MathJax optional)
- `default_md.html` – wraps Markdown pages in a Bootstrap container
- `publication.html` – renders a single publication entry (extends `default`)
- `post.html` – for blog posts

## Publications Collection

Publications live in `_publications/` as Markdown files with YAML front matter. The filename convention is `YYYY-MM-slug.md`. Key front matter fields:

```yaml
layout: publication
key: authorYYYYkeyword
author: …
title: "…"
journal: …   # or booktitle:
year: YYYY
abstract: |-
  …
bibtex: |-
  …
arxiv: url
preprint: url
full-text: url
doi: identifier
slides: url
video: url
replication-package: url
website: url
image: publications/filename.png   # relative to /img/
award: "Best Paper Award"
disable-page: true   # omit individual page, show only in list
```

`publications.md` iterates `site.publications` in reverse order to display the list. Individual publication pages use `publication.html`.

## Courses Page

`courses/index.md` is a manually maintained Markdown list grouped by academic year (e.g., `#### 2021–2024`). To add a new course or lecture link for a year, add or update the appropriate section with a Markdown list item.

## Blog Posts

Posts live in `_posts/` with the filename convention `YYYY-MM-DD-slug.md`. Key front matter fields:

```yaml
layout: post
title: "…"
date: YYYY-MM-DD
author: Luís Cruz
summary: "One-sentence summary shown in the blog index."
image: blog/filename.png   # relative to /img/; used for Open Graph
equation: true             # optional: load MathJax
mermaid: true              # optional: load Mermaid diagrams
draft: true                # optional: marks post as draft
invisible: true            # optional: hides post from blog index listing
```

## News / Updates

Site-wide news items are in `_data/updates.yml`. Each entry:

```yaml
- msg: "Text of the update"
  date: "YYYY/MM/DD"
  link: "URL"              # optional
  badge: "Badge label"     # optional
```

## Content Guidelines

- Do **not** add "Co-Authored-By" or any AI attribution to commits or files.
- Publication slugs should match their BibTeX `key` field.
- Slides and external resources use SURFdrive or other external URLs; link directly without copying files into the repo.
