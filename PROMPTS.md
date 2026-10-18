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
