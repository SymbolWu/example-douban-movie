import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import MusicHomeComponent from '../Components/Music/MusicHomeComponent'

class MusicRouter extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/Music' component={MusicHomeComponent}/>
      </Switch>
    )
  }
}
export default MusicRouter;
