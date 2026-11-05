import { useAuthViewModel } from './useAuthViewModel';
import './AuthView.css';

function AuthView() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    mode,
    loading,
    error,
    handleSubmit,
    toggleMode,
  } = useAuthViewModel();

  const isLogin = mode === 'login';

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit();
  }

  return (
    <main className="auth">
      <h1>{isLogin ? 'Login' : 'Create account'}</h1>

      <form onSubmit={onSubmit} className="auth-form">
        <label htmlFor="auth-email">Email</label>
        <input
          id="auth-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="auth-password">Password</label>
        <input
          id="auth-password"
          type="password"
          autoComplete={isLogin ? 'current-password' : 'new-password'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error && <p role="alert">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Please wait...' : isLogin ? 'Login' : 'Create account'}
        </button>
      </form>

      <button type="button" className="auth-switch" onClick={toggleMode}>
        {isLogin
          ? 'No account yet? Create one'
          : 'Already have an account? Login'}
      </button>
    </main>
  );
}

export default AuthView;
