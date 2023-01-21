/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';
import BackButton from '../components/buttons/BackButton';
import CardsList from '../components/card/CardsList';
import '../styles/SearchPage.css';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get('keywordSearch') || '');

  const heros = JSON.parse(localStorage.getItem('heroes'));

  const filteredHeroes = heros.filter(
    (hero) => hero.name.toLowerCase().includes(
      keyword.toLocaleLowerCase(),
    ),
  );

  function onKeywordChangeHandler(keywordSearch) {
    setKeyword(keywordSearch);
    setSearchParams({ keywordSearch });
  }

  if (filteredHeroes.length === 0) {
    return (
      <div className="search-page">
        <Link to="/"><BackButton /></Link>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <p className="hasil-kosong">Hasil tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="search-page">
      <Link to="/"><BackButton /></Link>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <CardsList heroes={filteredHeroes} />
    </div>
  );
}

export default SearchPage;
