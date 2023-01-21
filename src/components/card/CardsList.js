/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../../styles/cardlist.css';

function CardsList({ heroes }) {
  // const heros = JSON.parse(localStorage.getItem('heroes'));
  if (heroes === null || heroes.length <= 0) {
    return (
      <div className="cards-list loader">
        <div className="dot-spinner">
          <div className="dot-spinner__dot" />
          <div className="dot-spinner__dot" />
          <div className="dot-spinner__dot" />
          <div className="dot-spinner__dot" />
          <div className="dot-spinner__dot" />
          <div className="dot-spinner__dot" />
          <div className="dot-spinner__dot" />
          <div className="dot-spinner__dot" />
        </div>
      </div>
    );
  }
  return (
    <div className="cards-list">
      {
            heroes.map((hero) => (
              <Card
                name={hero.name}
                birth={hero.birth_year}
                death={hero.death_year}
                description={hero.description}
                ascension={hero.ascension_year}
                {...hero}
              />
            ))
        }
    </div>
  );
}

CardsList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsList;
