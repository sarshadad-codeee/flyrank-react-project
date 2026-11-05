import { useCallback, useEffect, useState } from 'react';
import { deleteFavorite, loadFavorites } from './favoritesModel';
import type { Movie } from '../../types/movie';

export function useFavoritesViewModel() {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await loadFavorites();
      setFavorites(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  async function removeMovie(imdbID: string) {
    setError(null);

    try {
      await deleteFavorite(imdbID);
      setFavorites((current) =>
        current.filter((movie) => movie.imdbID !== imdbID),
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return { favorites, loading, error, loadMovies, removeMovie };
}
