import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {fetchMoviesBySearch} from '../redux/actions';
import MoviesListItem from '../components/MoviesListItem';
import Preloader from '../components/Preloader';


class MoviesBySearch extends React.Component{

  componentDidMount(){
    this.props.fetchMoviesBySearch(this.props.params.query)
  }

  renderMovies(movies){
    return movies.map(movie => {
      return <MoviesListItem key={movie.id.videoId} data={movie} movieId={movie.id.videoId}/>
    }) 
  }

  render(){
    let { data, loading } = this.props.movies
    return(
      <div className="movies-list">
        { data.length && !loading ? this.renderMovies(data) : <Preloader/> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    movies : state.moviesBySearch
  }
}

const mapDispatchToProps = {
  fetchMoviesBySearch
}

export default connect( mapStateToProps, mapDispatchToProps )(MoviesBySearch);
