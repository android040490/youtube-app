import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {fetchMovieById} from '../redux/actions';
import {trimString} from '../community_functions';
import Preloader from '../components/Preloader';

class MoviePage extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchMovieById(this.props.params.id)
  }

  renderMovie(){
    let { data : movie , channel } = this.props.movie;
    return (
      <div className="movie">
        <div className="movie__video">
          <iframe className="movie__iframe" src={`https://www.youtube.com/embed/${movie.id}`}></iframe>
        </div>
        <div className="movie__description">
          <h3 className="movie__title">{movie.snippet.title}</h3>
          <div className="movie__info">{movie.statistics.viewCount} просмотров</div>
          <hr />
          <div className="movie__channel">
            <div className="movie__channel-img">
              <img src={channel.thumbnails.medium.url} alt=""/>
            </div>
            <div className="movie__channel-title">{movie.snippet.channelTitle}</div>
          </div>
          <div className="movie__text">{trimString(movie.snippet.description, 400)}</div>
        </div>
      </div>
    )
  }


  render(){
    let { loading , data, channel } = this.props.movie
    return(
      <div>{ Object.keys(data).length && Object.keys(channel).length && !loading ? this.renderMovie() : <Preloader/> }</div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    movie : state.movieInfo 
  }
}

const mapDispatchToProps = {
  fetchMovieById
}

export default connect( mapStateToProps, mapDispatchToProps)(MoviePage);