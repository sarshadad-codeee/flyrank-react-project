# How AI assisted this project

## Tools
- Cursor agent: used once, with the whole assignment as one large prompt. It
  scaffolded the Vite project and installed packages, then hung on a terminal
  command. I stopped it. Cursor's free agent limit was then reached (resets
  16 Nov).
- Claude: used as the code generator for every later step. I applied the code
  by hand, ran the build after each step, reviewed the result in the browser
  and committed.

## Method (following the mentor's session)
- One small prompt per layer: Header, MVVM skeletons, OMDB service, home model,
  view model, view, MovieCard, Firebase service, favorites, auth.
- Each prompt has explicit "do not" limits (no hooks in models, no direct
  fetch, no Firebase in views).
- Every prompt is logged in PROMPTS.md before it was applied.
- Every step was checked with npm run build, and with the browser where a
  screen existed.

## Where AI helped
- Generating the layered structure (model, view model, view) and the services.
- Writing readable error messages for OMDB and Firebase failures.
- Spotting risks, for example the .gitignore not covering .env.

## Where AI was wrong or needed review
- Early guidance mixed up which folder PROMPTS.md belonged in.
- A command was given before its result had been checked, so a log entry
  briefly claimed Cursor ran a step that Claude had run. I corrected it in a
  separate commit.
- I used git diff to catch homeModel.ts losing initialMovies before it was
  committed (see MANUAL_IMPROVEMENTS.md).

## Known limits
- Firebase Realtime Database is in test mode, so its data is open to anyone
  with the URL.
- Favorites are stored globally, not per user, until auth routing is finished.
- Lint reports one warning in useFavoritesViewModel.ts (setState called in an
  effect).
