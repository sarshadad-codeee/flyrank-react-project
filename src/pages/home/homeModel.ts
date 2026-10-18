import { searchMovies } from '../../services/omdbMovieService';
import type { Movie } from '../../types/movie';

const SEED_KEYWORDS = [
  'Batman',
  'Avengers',
  'Harry Potter',
  'Matrix',
  'Star Wars',
  'Spider',
  'Lord of the Rings',
  'Jurassic',
  'Toy Story',
  'Mission',
];

const KEYWORDS_PER_LOAD = 5;
const MOVIES_PER_LOAD = 20;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export async function getMovies(query: string): Promise<Movie[]> {
  const cleanedQuery = query.trim();

  if (cleanedQuery.length < 2) {
    throw new Error('Search query must contain at least two characters.');
  }

  return searchMovies(cleanedQuery);
}

export async function initialMovies(): Promise<Movie[]> {
  const keywords = shuffle(SEED_KEYWORDS).slice(0, KEYWORDS_PER_LOAD);

  const results = await Promise.all(
    keywords.map((keyword) => searchMovies(keyword).catch(() => [] as Movie[])),
  );

  const unique = new Map<string, Movie>();
  for (const movie of results.flat()) {
    unique.set(movie.imdbID, movie);
  }

  return shuffle([...unique.values()]).slice(0, MOVIES_PER_LOAD);
}
