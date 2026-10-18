import { searchMovies } from '../../services/omdbMovieService';
import type { Movie } from '../../types/movie';

export async function getMovies(query: string): Promise<Movie[]> {
  const cleanedQuery = query.trim();

  if (cleanedQuery.length < 2) {
    throw new Error('Search query must contain at least two characters.');
  }

  return searchMovies(cleanedQuery);
}
