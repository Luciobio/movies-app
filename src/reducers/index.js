import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  REMOVE_MOVIE_FAVORITE
} from '../actions';

const initialState = {
  movies: [], //favoritas
  moviesLoaded: [], //buscadas con el Buscador
  movieDetail: {} //Peli de la cual estoy viendo el detalle
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_FAVORITE:
    return {
      ...state,
      movies: state.movies.concat(action.payload)
      //movies: [...state.movies, action.payload]
    };

    case GET_MOVIES:
    return {
      ...state,
      moviesLoaded: action.payload.Search
    };

    case GET_MOVIE_DETAIL:
    return {
      ...state,
      movieDetail: action.payload
    };

    case REMOVE_MOVIE_FAVORITE:
    return {
      ...state,
      movies: state.movies.filter(movie => movie.title !== action.payload.title)
    };

    default:
      return state;
  }
};

export default rootReducer;
