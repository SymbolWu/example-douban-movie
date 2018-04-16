import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import MovieHomeComponent from '../Component/MovieHomeComponent'
import MoiveDetailComponent from '../Component/MoiveDetailComponent'
class MovieRouter extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/Movie' component={MovieHomeComponent}/>
        <Route path='/Movie/:moiveid' component={MoiveDetailComponent}/>
      </Switch>
    )
  }
}

export default MovieRouter;
