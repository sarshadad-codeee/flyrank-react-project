import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeView from './pages/home/HomeView';
import FavoritesView from './pages/favorites/FavoritesView';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/favorites" element={<FavoritesView />} />
      </Routes>
    </>
  );
}

export default App;
