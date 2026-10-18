import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies, initialMovies } from './homeModel';
import type { Movie } from '../../types/movie';

export function useHomeViewModel() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadInitialMovies() {
      setLoading(true);
      setError(null);
      setQuery('');

      try {
        const result = await initialMovies();
        if (!cancelled) {
          setMovies(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Something went wrong.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadInitialMovies();

    return () => {
      cancelled = true;
    };
  }, [location.key]);

  async function handleSearch() {
    setLoading(true);
    setError(null);

    try {
      const result = await getMovies(query);
      setMovies(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return { query, setQuery, movies, loading, error, handleSearch };
}
