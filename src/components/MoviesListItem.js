import React , {Component} from 'react';
import {withRouter} from 'react-router';

import {parseTime, trimString} from '../community_functions';


class MoviesListItem extends Component{
  constructor(props){
    super(props)

    this.openMovie = this.openMovie.bind(this);
  }
  openMovie(){
    this.props.router.push(`/movie/${this.props.movieId}`);
  }

  render(){
    let {data} = this.props;
    return(
      <div onClick={this.openMovie} className="movies-list__item">
        <div className="movies-list__img">
          <img src={data.snippet.thumbnails.medium.url} />
          <h4 className="movies-list__duration">{data.contentDetails ? parseTime(data.contentDetails.duration) : ''}</h4>
        </div>
        <h4 className="movies-list__title">{trimString(data.snippet.title, 30)}
        </h4>
        <h5 className="movies-list__info">{data.snippet.channelTitle}
        </h5>
        <h5 className="movies-list__info">{data.statistics ? data.statistics.viewCount + ' просмотров' : ''}
        </h5>
        <h5 className="movies-list__info">{data.snippet.publishedAt.split('T')[0]}
        </h5>
      </div>
    )
  }
}

export default withRouter(MoviesListItem);