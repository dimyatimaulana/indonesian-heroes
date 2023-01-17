/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Card from './Card';

function CardsList(heroes) {
  if (heroes.length <= 0) {
    return (
      <div>
        <p>Pahlawan tidak ditemukan</p>
      </div>
    );
  }
  return (
    <div className="cards-list">
      {
            heroes.map((hero) => (
              <Card
                name={hero.name}
                birth={hero.birth}
                death={hero.death}
                description={hero.description}
                ascension={hero.ascension}
                {...hero}
              />
            ))
        }
    </div>
  );
}

export default CardsList;
