import React, {Component} from 'react';

import Header from './Header';
import Sidebar from './Sidebar';


export default  class Layout extends Component{
  constructor(props){
    super(props);

    this.handelClick = this.handelClick.bind(this)
  }

  
  handelClick(){
    window.scrollTo( 0, 0);
  }

  componentDidMount(){
    this.controlPositionOFHeader()
  }

  controlPositionOFHeader(){
    let header = this.headerRef;
    let sideBar = this.sideBarRef;
    let sideBarTop = sideBar.getBoundingClientRect().top;
    window.addEventListener('scroll', control);
    function control(){
      if (window.pageYOffset > sideBarTop ){
        header.classList.add('fix-elem');
        sideBar.classList.add('fix-elem');
      } else {
        header.classList.remove('fix-elem');
        sideBar.classList.remove('fix-elem');
      }
    }
  }

  render(){
    return(
        <div className="page">
          <div className="page__header">
            <div id="header-search" className="page__header-search"
            ref={ el => this.headerRef = el }>
              <Header/>
            </div>
          </div>
          <div className="page__content  wrapper">
            <div className="page__sidebar" >
              <div className="page__sidebar-wrapper" ref={ el => this.sideBarRef = el}>
                <Sidebar/>
              </div>
              
            </div>
            <div id="content" className="page__main-content">
              {this.props.children}
            </div>
          </div>
          <div className="up-btn" onClick={this.handelClick}></div>
        </div>
    )
  }
}