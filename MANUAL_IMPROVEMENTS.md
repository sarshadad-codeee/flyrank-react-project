# Manual improvements after reviewing AI-generated code

## 1. Font mismatch in the header (commit 71efd70)
Found in the browser: Home and Favorites links used the browser serif font
while the search box and button used sans-serif. Fixed by hand in
src/index.css with a global font-family, font inheritance for button and
input, and body margin 0.


## 2. Unstyled Home screen (commit f67c703)
Found in the browser: the "Search movies" label was clipped at the left edge,
and results stacked vertically with bullet markers. Fixed by hand in
src/index.css with padding, a flex search form and a grid for the list.

## 3. Duplicate search input (not fixed yet)
Found in the browser: "Search movies" appears twice, once in the header
(not wired up) and once in the Home view. To be fixed when the header is
connected.
