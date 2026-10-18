# Prompts used

## 1. Broad brief (Cursor agent)
Pasted the whole assignment and the video transcript into one Cursor agent prompt.
Result: it only scaffolded the Vite project and installed packages
(react-router-dom, firebase), then hung on a terminal command.
I stopped it and switched to small prompts, as the mentor does.

## 2. Remove default Vite content (Claude, not Cursor)
Tool note: the Cursor Hobby agent limit was reached (resets 16 Nov), so this
prompt was never run in Cursor. I used Claude as the code generator and
reviewed and applied the changes by hand.

Prompt, in the mentor's wording:
Remove all default Vite content, images, styles and demonstration code. Leave a minimal working React application with an empty App component. Do not create any additional components or functionality.

Review: deleted src/App.css and src/assets, replaced App.tsx, main.tsx and
index.css with minimal versions. npm run build passes and the page is blank.

## 3. Header component (Claude, not Cursor)
Tool note: Cursor agent limit still reached, so Claude generated the code
and I applied and reviewed it by hand.

Prompt, in the mentor's wording:
Create a reusable Header component. The header should contain a Home navigation link, a Favorites navigation link, a search input and a search button. Use React Router links for navigation. Only create and display the header. Do not create the Home or Favorites screens yet. Do not connect the search input to any functionality.
