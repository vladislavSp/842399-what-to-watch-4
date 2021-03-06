import {parseFilm, parseFilms} from "../../adapters/films-adapter.js";
import {extend, replaceMovie, replacePromo} from "../../utils/utils.js";

const initialState = {
  allFilms: [],
  promoFilm: {},
  isFilmsLoading: true,
  isPromoLoading: true,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  UPDATE_MOVIE: `UPDATE_MOVIE`,
  SET_COMMENT: `SET_COMMENT`,
  SET_LOADING_FILMS: `SET_LOADING_FILMS`,
  SET_LOADING_PROMO: `SET_LOADING_PROMO`,
};

const ActionCreator = {
  loadFilms: (allFilms) => ({
    type: ActionType.LOAD_FILMS,
    payload: allFilms
  }),

  loadPromo: (promoFilm) => ({
    type: ActionType.LOAD_PROMO,
    payload: promoFilm
  }),

  updateMovie: (movie) => ({
    type: ActionType.UPDATE_MOVIE,
    payload: movie
  }),

  setComments: (comments) => ({
    type: ActionType.SET_COMMENT,
    payload: comments
  }),

  setLoadingFilms: (flag) => ({
    type: ActionType.SET_LOADING_FILMS,
    payload: flag
  }),

  setLoadingPromo: (flag) => ({
    type: ActionType.SET_LOADING_PROMO,
    payload: flag
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(ActionCreator.loadFilms(parseFilms(response.data)));
      dispatch(ActionCreator.setLoadingFilms(false));
    });
  },

  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`).then((response) => {
      dispatch(ActionCreator.loadPromo(parseFilm(response.data)));
      dispatch(ActionCreator.setLoadingPromo(false));
    });
  },

  changeFavorStatus: (movie) => (dispatch, getState, api) => {
    return api
      .post(`/favorite/${movie.id}/${+!movie.inFavorites}`)
      .then(({data}) => {
        dispatch(ActionCreator.updateMovie(data));
      });
  },

  uploadReview: (movie, comment, rating) => (dispatch, getState, api) => {
    return api
      .post(`/comments/${movie.id}`, {rating, comment})
      .then((response) => {
        if (response !== undefined) {
          dispatch(ActionCreator.setComments(response.data));
        }
        return response;
      });
  },

  loadComments: (movie) => (dispatch, getState, api) => {
    return api.get(`/comments/${movie.id}`).then(({data}) => {
      dispatch(ActionCreator.setComments(data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {allFilms: action.payload});
    case ActionType.LOAD_PROMO:
      return extend(state, {promoFilm: action.payload});
    case ActionType.UPDATE_MOVIE:
      const updatedMovie = parseFilm(action.payload);
      return extend(state, {
        allFilms: replaceMovie(updatedMovie, state.allFilms),
        promoFilm: replacePromo(updatedMovie, state.promoFilm)
      });
    case ActionType.SET_COMMENT:
      return extend(state, {comments: action.payload});
    case ActionType.SET_LOADING_FILMS:
      return extend(state, {isFilmsLoading: action.payload});
    case ActionType.SET_LOADING_PROMO:
      return extend(state, {isPromoLoading: action.payload});
  }

  return state;
};

export {reducer, Operation, ActionCreator, ActionType};
