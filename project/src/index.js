import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import PropTypes from 'prop-types';

const cards = [
  {
    'id': 1,
    'isFavorite': true,
    'isPremium': false,
    'previewImage': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 2,
    'isFavorite': true,
    'isPremium': true,
    'previewImage': 'img/room.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 3,
    'isFavorite': false,
    'isPremium': false,
    'previewImage': 'img/room.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 4,
    'isFavorite': false,
    'isPremium': false,
    'previewImage': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'id': 5,
    'isFavorite': false,
    'isPremium': false,
    'previewImage': 'img/room.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App cards={cards} />
  </React.StrictMode>,
  document.getElementById('root'));

App.propTypes = {
  cards: PropTypes.array.isRequired,
};
