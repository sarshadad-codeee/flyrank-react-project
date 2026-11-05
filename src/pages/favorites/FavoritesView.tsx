import MovieCard from '../../components/MovieCard';
import { useFavoritesViewModel } from './useFavoritesViewModel';

function FavoritesView() {
  const { favorites, loading, error, removeMovie } = useFavoritesViewModel();

  return (
    <main>
      <h1>Favorites</h1>

      {loading && <p>Loading favorites...</p>}
      {error && <p role="alert">{error}</p>}

      {!loading && !error && favorites.length === 0 && (
        <p>No favorites yet. Add some from the Home screen.</p>
      )}

      <ul>
        {favorites.map((movie) => (
          <li key={movie.imdbID}>
            <MovieCard
              movie={movie}
              actionLabel="Remove"
              onAction={(item) => removeMovie(item.imdbID)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default FavoritesView;
