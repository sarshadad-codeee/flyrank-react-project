import { useState } from 'react';
import { getMovies } from './homeModel';
import type { Movie } from '../../types/movie';

export function useHomeViewModel() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
