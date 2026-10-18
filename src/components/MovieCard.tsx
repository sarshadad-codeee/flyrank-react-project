import type { Movie } from '../types/movie';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="movie-card">
      {movie.Poster !== 'N/A' && (
        <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
      )}
      <h2>{movie.Title}</h2>
      <p>
        {movie.Year} - {movie.Type}
      </p>
      <button type="button">Favorite</button>
    </article>
  );
}

export default MovieCard;
