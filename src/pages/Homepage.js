/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import CardList from '../components/card/CardsList';
import Button from '../components/buttons/Button';
import '../styles/Homepage.css';

function Homepage(heroes) {
  // const onClick = (heroes) => {
  //   const listContainer = document.querySelector('.cards-list-container');
  //   listContainer.innerHTML = <CardsList heroes={heroes} />;
  // };

  return (
    <div className="page-container">
      <div className="jumbotron center">
        <p>Daftar para Pahlawan dari Indonesia</p>
      </div>
      <div className="menu-container center">
        <Link to="/search"><Button /></Link>
      </div>
      <div className="cards-list-container">
        <CardList heroes={heroes.heroes} />
      </div>
    </div>
  );
}

export default Homepage;
