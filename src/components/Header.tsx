import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav" aria-label="Main">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <div className="header-search">
        <label htmlFor="header-search-input" className="visually-hidden">
          Search movies
        </label>
        <input
          id="header-search-input"
          type="search"
          placeholder="Search movies"
        />
        <button type="button">Search</button>
      </div>
    </header>
  );
}

export default Header;
