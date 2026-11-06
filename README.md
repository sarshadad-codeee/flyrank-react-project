# Movie Browser

A small movie browser built with React, TypeScript and Vite. Movie data comes
from the OMDB API. Favorites are stored in Firebase Realtime Database.

## Features
- Search movies by title (minimum two characters).
- Random selection of movies on the Home screen, reloaded on each visit.
- Save movies to Favorites and remove them again.

## Structure
- src/pages/<screen>: model (logic), view model (state and actions), view (UI)
- src/services: OMDB, Firebase and authentication services
- src/components: shared UI such as Header and MovieCard
- src/context: authentication context
- src/types: shared types

## Setup
1. Install dependencies: npm install
2. Copy .env.example to .env and fill in your own OMDB and Firebase values.
3. Start the app: npm run dev (opens at http://localhost:5173)

## Scripts
- npm run dev: start the development server
- npm run build: type-check and build
- npm run lint: run oxlint
- npm run preview: preview the build

## Notes
- The .env file is git-ignored and must never be committed.
- Firebase Realtime Database is in test mode, so its data is open to anyone
  with the database URL. Do not store anything private in it.
- Login and registration code exists, but the sign-in screen is not routed yet.
