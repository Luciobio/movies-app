import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

  componentDidMount(){
    // usando destructuring
    const { match: { params: { id }}} = this.props;
    // manera convencional
    //const movieId = this.props.match.params.id;
    this.props.getMovieDetail(id);
  }

    render() {
        return (
            <div className="movie-detail">
              <h1>{this.props.movie.Title}</h1>
              <h2>({this.props.movie.Year})</h2>
              <h3>Director: {this.props.movie.Director}</h3>
              <h4>Genre: {this.props.movie.Genre}</h4>
              <h4>Cast: {this.props.movie.Actors}</h4>
              <img src= {this.props.movie.Poster} alt="movie poster"/>
              <p>{this.props.movie.Plot}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    movie: state.movieDetail
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
