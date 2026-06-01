# Portfolio Structure

This portfolio is now organized for easy editing and future growth.

## Files
- `index.html` — minimal HTML structure with placeholders for content.
- `css/styles.css` — site styling separated from markup.
- `js/data.js` — all text content and section data stored in one place.
- `js/main.js` — renders the page from the data object.
- `docs/project-docs-data.js` — multilingual content for project detail pages.
- `docs/project-pages.js` — shared renderer for project detail pages.
- `docs/` — CV PDFs and per-project demo/docs pages linked from portfolio cards.

## How to edit
- Add or update homepage project cards, experience entries, or skills in `js/data.js`.
- Add or update project detail page content in `docs/project-docs-data.js`.
- Change colors and spacing in `css/styles.css`.
- Add new sections by following the existing structure in `index.html` and `js/main.js`.

## Adding a new project
1. Open `js/data.js`.
2. Add a new object to the `projects.items` array for each supported language.
3. Add the project detail content to `docs/project-docs-data.js`.
4. Create a lightweight HTML shell in `docs/` that loads `project-docs-data.js` and `project-pages.js`.
5. Save the files and refresh the page.

## Adding a new section
1. Add a new section container in `index.html`.
2. Add the data structure in `js/data.js`.
3. Render the new section from `js/main.js`.
