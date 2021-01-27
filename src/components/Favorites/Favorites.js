import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite} from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map((movie, i) =>(
              <div>
                <Link to={`/movie/${movie.imdbID}`}>{movie.title}</Link>
                <button onClick={()=> this.props.removeMovieFavorite({title: movie.title, id: movie.imdbID})}>x</button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
