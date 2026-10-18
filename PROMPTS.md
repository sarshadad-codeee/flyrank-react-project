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

## 4. Home MVVM skeleton (Claude, not Cursor)
Prompt, in the mentor's wording:
Create the empty MVVM file structure for the Home screen. Create a home model, a use home view model hook and a home view. The home model will later contain home-specific data and business logic. The home view model will later contain React state and actions. The home view will later render the home interface. Create only minimal placeholder exports so the application can compile. Do not add API requests, React state or movie UI.

## 5. Favorites MVVM skeleton (Claude, not Cursor)
Prompt, in the mentor's wording:
Create the empty MVVM file structure for the Favorites screen. Create a favorites model, a use favorites view model hook and a favorites view. Create only minimal placeholder exports so the application can compile. Do not add Firebase, React state or movie UI.

## 6. Shared Movie types (Claude, not Cursor)
Prompt, in the mentor's wording:
Create a shared types folder with a Movie type and an OMDB search response type. The Movie type should contain imdbID, Title, Year, Type and Poster. The OMDB search response type should contain Search (an optional array of Movie), totalResults, Response and an optional Error. Do not add any API requests or functionality.

## 7. OMDB movie service (Claude, not Cursor)
Prompt, in the mentor's wording:
Create an OMDB movie service file at src/services/omdbMovieService.ts. Implement and export an async function searchMovies(query: string). Use the OMDB API. Read the API key from VITE_OMDB_API_KEY and the base URL from VITE_OMDB_API_URL. Encode the search query. Use the Movie and OmdbSearchResponse types. Return the Search array as Movie[]. Throw a readable error when the HTTP request fails. Throw a readable error when OMDB returns Response False. Do not use React hooks. Do not use effects. Do not manage loading or component state.

## 8. Home model (Claude, not Cursor)
Prompt, in the mentor's wording:
Implement the home model in src/pages/home/homeModel.ts. Import searchMovies from the OMDB movie service. Create and export getMovies(query: string). Responsibility: trim the query, validate that the query contains at least two characters, call searchMovies with the cleaned query, and return the movie list. Do not use React hooks. Do not use useState or useEffect. Do not call fetch directly.

## 9. Home view model (Claude, not Cursor)
Prompt, in the mentor's wording:
Implement a custom hook in src/pages/home/useHomeViewModel.ts. Create and export useHomeViewModel. Manage these values using useState: query, movies, loading, error. Create a function handleSearch. The function should set loading to true, clear the previous error, call getMovies from the home model using the current query, save the returned movie list in the movies state, and store a readable error if the request fails. Set loading to false when finished. Return query, setQuery, movies, loading, error and handleSearch. Do not render JSX. Do not call fetch directly. Do not import the OMDB service directly.

## 10. Home view (Claude, not Cursor)
Prompt, in the mentor's wording:
Implement the Home view in src/pages/home/HomeView.tsx. Import and use useHomeViewModel. Display a search input and connect its value to query, updating it with setQuery. Call handleSearch when the search button is clicked. Also allow searching by submitting the form. Display a loading message while loading is true. Display the error message when error exists. Render the movie list using .map. Display the movie title, year, type and poster. Do not call fetch directly. Do not import the home model or the OMDB movie service. Do not implement favorites yet. Do not create a reusable movie card component yet.
Note: the search input is in the view for now because the header input is not wired up yet.
