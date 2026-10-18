import type { Movie, OmdbSearchResponse } from '../types/movie';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY as string | undefined;
const API_URL = import.meta.env.VITE_OMDB_API_URL as string | undefined;

export async function searchMovies(query: string): Promise<Movie[]> {
  if (!API_KEY || !API_URL) {
    throw new Error('OMDB API key or URL is missing. Check the .env file.');
  }

  const url = `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`OMDB request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as OmdbSearchResponse;

  if (data.Response === 'False') {
    throw new Error(data.Error ?? 'OMDB returned no results.');
  }

  return data.Search ?? [];
}
