import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import MovieHomeComponent from '../Component/MovieHomeComponent'
import MoiveDetailComponent from '../Component/MoiveDetailComponent'
import InTheatersComponent from '../Component/InTheatersComponent'

class MovieRouter extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/Movie' component={MovieHomeComponent}/>
        <Route path='/Movie/InTheaters/:moiveid' component={MoiveDetailComponent}/>
        <Route path='/Movie/InTheaters' component={InTheatersComponent}/>
        <Route path='/Movie/ComingSoon' component={InTheatersComponent}/>
        {/* <Route path='/Movie/InTheaters' component={TestRouter}/> */}
      </Switch>
    )
  }
}

export default MovieRouter;
