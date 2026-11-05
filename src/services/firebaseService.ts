import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref, remove, set } from 'firebase/database';
import type { Movie } from '../types/movie';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as
    | string
    | undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as
    | string
    | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export async function addFavoriteMovie(movie: Movie): Promise<void> {
  try {
    await set(ref(database, `favorites/${movie.imdbID}`), movie);
  } catch {
    throw new Error('Could not add the movie to favorites. Please try again.');
  }
}

export async function removeFavoriteMovie(imdbID: string): Promise<void> {
  try {
    await remove(ref(database, `favorites/${imdbID}`));
  } catch {
    throw new Error('Could not remove the movie from favorites. Please try again.');
  }
}

export async function getFavorites(): Promise<Movie[]> {
  try {
    const snapshot = await get(ref(database, 'favorites'));
    if (!snapshot.exists()) {
      return [];
    }
    return Object.values(snapshot.val() as Record<string, Movie>);
  } catch {
    throw new Error('Could not load favorites. Please try again.');
  }
}
