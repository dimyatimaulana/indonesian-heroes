/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import CardsList from '../components/card/CardsList';

function Homepage() {
  const onLoad = async () => {
    const response = api.getHeroes();
    return response;
  };

  useEffect(() => {
    onLoad();
  }, []);

  const [heroes] = useState(onLoad);
  console.log(heroes);

  // const onClick = (heroes) => {
  //   const listContainer = document.querySelector('.cards-list-container');
  //   listContainer.innerHTML = <CardsList heroes={heroes} />;
  // };

  return (
    <div className="page-container">
      <div>
        <p>Daftar para Pahlawan dari Indonesia</p>
      </div>
      <div className="menu-container">
        <button tabIndex={0} type="button">Lihat daftar pahlawan</button>
        <button type="button"><Link to="/search">Cari pahlawan</Link></button>
      </div>
      <div className="cards-list-container">
        <CardsList heroes={heroes} />
      </div>
    </div>
  );
}

export default Homepage;
