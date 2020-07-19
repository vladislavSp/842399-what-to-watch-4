import React from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list.jsx';
import GenreList from '../genrelist/genrelist.jsx';
import {genreFilterArray} from '../../const/const.js';

const Main = ({films, onCardClick}) => <React.Fragment>
  <section className="movie-card">
    <div className="movie-card__bg">
      <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">Заголовок</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">Жанр</span>
            <span className="movie-card__year">1920</span>
          </p>
          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="page-content">
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList genreFilterArray={genreFilterArray} />

      <FilmList films={films} onCardClick={onCardClick} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>

    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
</React.Fragment>;

Main.propTypes = {
  // promoFilm: PropTypes.objectOf({
  //   title: PropTypes.string,
  //   genre: PropTypes.string,
  //   year: PropTypes.number,
  // }).isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Main;
