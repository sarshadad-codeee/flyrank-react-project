import { useHomeViewModel } from './useHomeViewModel';

function HomeView() {
  const { query, setQuery, movies, loading, error, handleSearch } =
    useHomeViewModel();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSearch();
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="home-search-input">Search movies</label>
        <input
          id="home-search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p role="alert">{error}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Poster !== 'N/A' && (
              <img src={movie.Poster} alt={`Poster of ${movie.Title}`} width="120" />
            )}
            <h2>{movie.Title}</h2>
            <p>
              {movie.Year} - {movie.Type}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomeView;
