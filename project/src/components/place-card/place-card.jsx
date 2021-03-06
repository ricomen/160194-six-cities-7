import React from 'react';
import PropTypes from 'prop-types';

function PlaceCard({card}) {
  const {
    isPremium,
    isFavorite,
    previewImage,
    href = '#',
    price,
    title,
    type,
  } = card;

  const bookMarkClass = `place-card__bookmark-button button ${isFavorite && 'place-card__bookmark-button--active'}`;

  return (
    <article className="cities__place-card place-card">
      {
        isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={href}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={bookMarkClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  card: PropTypes.object,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  previewImage: PropTypes.string,
  href: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default PlaceCard;
