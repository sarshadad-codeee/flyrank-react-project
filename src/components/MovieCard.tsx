import type { Movie } from '../types/movie';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
  actionLabel?: string;
  onAction?: (movie: Movie) => void;
}

function MovieCard({
  movie,
  actionLabel = 'Favorite',
  onAction,
}: MovieCardProps) {
  return (
    <article className="movie-card">
      {movie.Poster !== 'N/A' && (
        <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
      )}
      <h2>{movie.Title}</h2>
      <p>
        {movie.Year} - {movie.Type}
      </p>
      <button
        type="button"
        aria-label={`${actionLabel}: ${movie.Title}`}
        onClick={() => onAction?.(movie)}
      >
        {actionLabel}
      </button>
    </article>
  );
}

export default MovieCard;
