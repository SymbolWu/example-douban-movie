import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from '../Components/Home/Home'
import Book from '../Components/Book/Book'
import Music from '../Components/Music/Music'

import MovieRouter from './MovieRouter'

class MainRouter extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/Book" component={Book}/>
        <Route path="/Movie" component={MovieRouter}/>
        <Route path="/Music" component={Music}/>
      </Switch>
    )
  }
}
export default MainRouter;
