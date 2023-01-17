/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get('keywordSearch') || '');

  function onKeywordChangeHandler(keywordSearch) {
    setKeyword(keywordSearch);
    setSearchParams({ keywordSearch });
  }

  return (
    <div className="page-container">
      <button type="button"><Link to="/">Kembali</Link></button>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
    </div>
  );
}

export default SearchPage;
