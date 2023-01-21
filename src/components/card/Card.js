/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Card.css';

function Card({
  name, birth, death, description, ascension,
}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">{name}</p>
        </div>
        <div className="flip-card-back">
          <p>Kelahiran: {birth}</p>
          <p>Meninggal: {death}</p>
          <p>Pengangkatan: {ascension}</p>
          <p>Deskripsi: {description}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  birth: PropTypes.number.isRequired,
  death: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  ascension: PropTypes.number.isRequired,
};

export default Card;
