import { useHomeViewModel } from './useHomeViewModel';
import MovieCard from '../../components/MovieCard';

function HomeView() {
  const {
    query,
    setQuery,
    movies,
    loading,
    error,
    notice,
    handleSearch,
    handleFavorite,
  } = useHomeViewModel();

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
      {notice && <p role="status">{notice}</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <MovieCard movie={movie} onAction={handleFavorite} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomeView;

