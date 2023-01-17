/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

function Card({
  name, birth, death, description, ascension,
}) {
  return (
    <div className="card-container">
      <h1>`Nama: {name}`</h1>
      <h2>`Lahir: {birth}`</h2>
      <h2>`Meninggal: {death}`</h2>
      <h2>`Ascension: {ascension}`</h2>
      <p>`Deskripsi: {description}`</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  death: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ascension: PropTypes.string.isRequired,
};

export default Card;
