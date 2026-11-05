import {
  addFavoriteMovie,
  getFavorites,
  removeFavoriteMovie,
} from '../../services/firebaseService';
import type { Movie } from '../../types/movie';

export function loadFavorites(): Promise<Movie[]> {
  return getFavorites();
}

export function saveFavorite(movie: Movie): Promise<void> {
  return addFavoriteMovie(movie);
}

export function deleteFavorite(imdbID: string): Promise<void> {
  return removeFavoriteMovie(imdbID);
}
