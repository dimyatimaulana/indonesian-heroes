/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import api from './utils/api';
import Homepage from './pages/Homepage';
import SearchPage from './pages/SearchPage';
import './styles/App.css';
import AboutPage from './pages/AboutPage';

function App() {
  const [heroes, setHeroes] = useState(JSON.parse(localStorage.getItem('heroes')) || null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getHeroes2();
      setHeroes(data);
    };

    fetchData()
      .catch(console.error);
  }, []);

  useEffect(() => {
    localStorage.setItem('heroes', JSON.stringify(heroes));
  }, [heroes]);

  return (
    <div className="App">
      <header className="App-header">
        <nav className="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search Page</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Homepage heroes={heroes} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <footer>
        <p>Copyrights 2022 Indonesian Heroes All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
