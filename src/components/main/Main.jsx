import React from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list.jsx';
import GenreList from '../genrelist/genrelist.jsx';
import SignHeader from '../sign/SignHeader.jsx';

const Main = ({promoFilm, films, onCardClick, authorizationStatus, onSignInClick}) => <React.Fragment>
  <section className="movie-card">
    <div className="movie-card__bg">
      <img src={promoFilm.background} alt="The Grand Budapest Hotel" />
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

      <SignHeader status={authorizationStatus} onSignInClick={onSignInClick}/>

    </header>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={promoFilm.posterImage} alt={`${promoFilm.title} poster`} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{promoFilm.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{promoFilm.genre}</span>
            <span className="movie-card__year">{promoFilm.year}</span>
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

      <GenreList />

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
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCardClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

export default Main;
