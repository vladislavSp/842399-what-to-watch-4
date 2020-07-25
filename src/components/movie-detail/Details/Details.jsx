import React from 'react';
import PropTypes from 'prop-types';

const Details = ({filmContent}) => (<div className="movie-card__text movie-card__row">
  <div className="movie-card__text-col">
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Director</strong>
      <span className="movie-card__details-value">{filmContent.producer}</span>
    </p>
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Starring</strong>
      <span className="movie-card__details-value"></span>
    </p>
  </div>

  <div className="movie-card__text-col">
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Run Time</strong>
      <span className="movie-card__details-value">{filmContent.time}</span>
    </p>
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Genre</strong>
      <span className="movie-card__details-value">{filmContent.genre}</span>
    </p>
    <p className="movie-card__details-item">
      <strong className="movie-card__details-name">Released</strong>
      <span className="movie-card__details-value">{filmContent.year}</span>
    </p>
  </div>
</div>);


Details.propTypes = {
  filmContent: PropTypes.object.isRequired,
};

export default Details;
