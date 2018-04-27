import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import { Spin } from 'antd';

import MovieShowComponent from './MovieShowComponent'
import {monitoringScreenSize} from '../../CommenFunction/Screen'

import '../../Styles/MovieStyle/movieAllStyle.css'

@inject("store") @observer
class MovieHomeComponent extends Component{
  constructor(props) {
    super(props);
    this.store = props.store.movieHomeStore;
    this.state={
      is768:false
    }
  }
  componentDidMount(){
    let {intheaters_arr,comingsoon_arr,fetchComingSoonMoive,fetchIntheatersMoive}=this.store;
    if(intheaters_arr.length===0){
      fetchIntheatersMoive();
    }
    if(comingsoon_arr.length===0){
      fetchComingSoonMoive();
    }
    this.setState(monitoringScreenSize());
    window.onresize = () =>{
      this.setState(monitoringScreenSize());
    }
  }
  render(){

    let {
      intheaters_errorInfo,
      intheaters_arr,
      comingsoon_arr,
      comingsoon_errorInfo
    }=this.store;

    let errorInTheaters = Boolean(intheaters_errorInfo);
    let errorComingSoon = Boolean(comingsoon_errorInfo);


    if(intheaters_arr.length>0&&comingsoon_arr.length>0){
      return(
        <div>
          <MovieShowComponent showArr={intheaters_arr} link_path={'/Movie/InTheaters'} section_Title={'影院热映'} is768={this.state.is768}/>
          <MovieShowComponent showArr={comingsoon_arr} link_path={'/Movie/ComingSoon'} section_Title={'即将上映'} is768={this.state.is768}/>
        </div>
        )
    }else if(errorInTheaters||errorComingSoon){
      return(
          <h1>信息异常</h1>
        )
    } else{
      return(
        <div className="example">
          <Spin size="large"/>
        </div>
      )
    }


  }
}

export default MovieHomeComponent;
