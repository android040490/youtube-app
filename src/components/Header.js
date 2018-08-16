import React, {Component} from 'react';
import {withRouter} from 'react-router';



class Header extends Component{
  constructor(props){
    super(props)

    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(){
    this.props.router.push('/search/' + this.searchRef.value);
  }

  render(){
    return(
      <div className="search">
        <input 
        placeholder="Введите запрос" 
        id="search-input"  
        type="text" 
        className="search__input" 
        ref={ el => this.searchRef = el }
        />
        <button onClick={this.handleQuery} className="search__btn">Search</button>
      </div>
    )
  }
}

export default withRouter(Header);