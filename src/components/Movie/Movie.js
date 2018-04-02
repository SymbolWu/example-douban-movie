import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import MovieContainer from './MovieContainer'
import MoiveDetail from './MoiveDetail'
class Movie extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/Movie' component={MovieContainer}/>
        <Route path='/Movie/:moiveid' component={MoiveDetail}/>
      </Switch>
    )
  }
}

export default Movie;
