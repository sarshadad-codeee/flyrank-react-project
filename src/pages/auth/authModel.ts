import type { User } from 'firebase/auth';
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../../services/authService';

interface NormalizedCredentials {
  email: string;
  password: string;
}

function normalizeCredentials(
  email: string,
  password: string,
): NormalizedCredentials {
  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail || !password) {
    throw new Error('Email and password are required.');
  }

  if (password.length < 6) {
    throw new Error('Password must contain at least 6 characters.');
  }

  return { email: normalizedEmail, password };
}

export function register(email: string, password: string): Promise<User> {
  const credentials = normalizeCredentials(email, password);
  return registerUser(credentials.email, credentials.password);
}

export function login(email: string, password: string): Promise<User> {
  const credentials = normalizeCredentials(email, password);
  return loginUser(credentials.email, credentials.password);
}

export function logout(): Promise<void> {
  return logoutUser();
}
