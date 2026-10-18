# Manual improvements after reviewing AI-generated code

## 1. Font mismatch in the header (commit 71efd70)
Found in the browser: Home and Favorites links used the browser serif font
while the search box and button used sans-serif. Fixed by hand in
src/index.css with a global font-family, font inheritance for button and
input, and body margin 0.
