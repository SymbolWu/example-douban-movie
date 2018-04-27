import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import MovieHomeComponent from '../Components/Movie/MovieHomeComponent'
import MovieDetailComponent from '../Components/Movie/MovieDetailComponent'
import MovieShowComponent from '../Components/Movie/MovieShowComponent'

class MovieRouter extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/Movie' component={MovieHomeComponent}/>
        <Route path='/Movie/InTheaters/:movieid' component={MovieDetailComponent}/>
        <Route path='/Movie/InTheaters' component={MovieShowComponent}/>
        <Route path='/Movie/ComingSoon' component={MovieShowComponent}/>
      </Switch>
    )
  }
}

export default MovieRouter;
