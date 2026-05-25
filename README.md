# Portfolio Structure

This portfolio is now organized for easy editing and future growth.

## Files
- `index.html` — minimal HTML structure with placeholders for content.
- `css/styles.css` — site styling separated from markup.
- `js/data.js` — all text content and section data stored in one place.
- `js/main.js` — renders the page from the data object.
- `docs/` — CV PDF and per-project demo/docs pages linked from portfolio cards.

## How to edit
- Add or update project cards, experience entries, or skills in `js/data.js`.
- Change colors and spacing in `css/styles.css`.
- Add new sections by following the existing structure in `index.html` and `js/main.js`.

## Adding a new project
1. Open `js/data.js`.
2. Add a new object to the `featuredProjects` array.
3. Save the file and refresh the page.

## Adding a new section
1. Add a new section container in `index.html`.
2. Add the data structure in `js/data.js`.
3. Render the new section from `js/main.js`.
