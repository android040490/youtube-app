import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Sidebar extends Component{
  
  render(){
    return(
      <div className="sidebar">
        <Link to='/' className="home-btn">Home</Link>
      </div>
    )
  }
}