import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router'
import App from './components/App';
import Home from './components/Home/Home'
import City from './components/City/City'
import Book from './components/Book/Book'
import Movie from './components/Movie/Movie'
import Music from './components/Music/Music'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/Book" component={Book}></Route>
      <Route path="/City" component={City}></Route>
      <Route path="/Movie" component={Movie}></Route>
      <Route path="/Music" component={Music}></Route>
    </Route>

  </Router>
), document.getElementById('root'));
