import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import MovieHomeComponent from '../Components/Movie/Component/MovieHomeComponent'
import MovieDetailComponent from '../Components/Movie/Component/MovieDetailComponent'
import MovieShowComponent from '../Components/Movie/Component/MovieShowComponent'

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
