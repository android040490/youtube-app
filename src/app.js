import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import './style.scss';

import Layout from './components/Layout';
import MoviesListPage from './containers/MoviesListPage';
import MoviePage from './containers/MoviePage';
import MoviesBySearch from './containers/MoviesBySearch';

import {store} from './redux/store';

const history = syncHistoryWithStore( browserHistory, store);

let prevLocation = {};
browserHistory.listenBefore(location => {
  const pathChanged = prevLocation.pathname !== location.pathname;
  if (pathChanged) window.scrollTo(0, 0);
  prevLocation = location;
});



render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route exact path='/' component={MoviesListPage}/>
        <Route path='/movie/:id' component={MoviePage}/>
        <Route path='/search/:query' component={MoviesBySearch}/>
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('app'));