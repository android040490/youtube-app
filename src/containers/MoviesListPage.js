import React from 'react';
import {connect} from 'react-redux';

import {fetchMovies} from '../redux/actions';
import MoviesListItem from '../components/MoviesListItem';
import Preloader from '../components/Preloader';

const mapStateToProps = (state) => {
  return { 
    movies : state.movies
   }
}

const mapDispatchToProps = {
  fetchMovies
}

@connect( mapStateToProps, mapDispatchToProps)

export default class MoviesList extends React.Component{
  constructor(props){
    super(props);

    this.loadMoreVideos = this.loadMoreVideos.bind(this)
  }

  renderMoviesList(movies){
    return movies.map((movie) => {
      return <MoviesListItem key={movie.id} data={movie} movieId={movie.id}/>
    })
  }

  componentDidMount(){
    document.addEventListener('scroll', this.loadMoreVideos);

    if ( !this.props.movies.data.length ){
      this.props.fetchMovies()
    }
  }
  componentWillUnmount(){
    document.removeEventListener('scroll', this.loadMoreVideos)
  }

  loadMoreVideos(){
    
    let { noVideos, loading } = this.props.movies;
    const documentScrolledToBottom = document.body.scrollHeight == window.pageYOffset + document.body.clientHeight;
    if ( documentScrolledToBottom && !noVideos && !loading ){ 
      this.props.fetchMovies() 
    }
  }

  render(){ 
    let {loading, data} = this.props.movies;
    return (
      <div className="movies-list">
        { this.renderMoviesList(data)}
        { loading && <Preloader/>}
      </div>
    )
  }
}
