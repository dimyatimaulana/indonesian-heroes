import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SearchPage from './pages/SearchPage';
// import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="menu">
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/search">Tentang Kami</a></li>
            <li><a href="/FAQ">FAQ</a></li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
