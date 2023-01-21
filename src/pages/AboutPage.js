/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Button from '../components/buttons/Button';
import alan from '../images/alan.png';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="aboutpage-container">
      <h1>ABOUT</h1>
      <div className="section1">
        <div className="profile-picture"><img src={alan} alt="profile img" /></div>
        <div className="about-indonesian-heroes">
          <p>
            Hello i am Maulana Dimyati student at Telkom Purwokerto Institute of Technology
            majoring in Software Engineering. Let me explain about this website.
            {' '}
            <br />
            In the Homepage of Pahlawan Indonesia it shows
            list of heroes came from Indonesia.
            Front of the card it shows name of each hero but
            If you hover over the card it will flip and show data such us:
            birth year, death year, ascension year and description.
            {' '}
            <br />
            In the Search Page there is search bar to input name of hero that you looking for.
            The result is directly renewed when you type the name.
          </p>
          <p>Here is technology i used:</p>
          <ul>
            <li>
              Main REST API:
              {' '}
              <a href="https://indonesia-public-static-api.vercel.app/api/heroes">see here</a>
            </li>
            <li>
              Secondary REST API:
              {' '}
              <a href="https://19104008-mhs.bdv.or.id/api/heroes.php">see here</a>
            </li>
            <li>Front-end: React, uiverse.io</li>
          </ul>
          <p>
            If you interested to collaborate in this project
            <a href="https://github.com/dimyatimaulana/indonesian-heroes"> click here</a>
          </p>
          <div className="member-info">
            <p>Connect with me</p>
            <p>Maulana Dimyati 20104061</p>
          </div>
          <div className="social-media">
            <a style={{ color: '#0077b5' }} href="https://www.linkedin.com/in/maulanadimyati/"><FaLinkedinIn /></a>
            <a href="https://github.com/dimyatimaulana"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
