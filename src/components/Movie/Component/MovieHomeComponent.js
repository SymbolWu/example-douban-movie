import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import { Spin } from 'antd';
// import { Link } from 'react-router-dom';
import InTheatersComponent from './InTheatersComponent'


import '../css/movie.css'
@inject("store") @observer
class MovieHomeComponent extends Component{
  constructor(props) {
    super(props);
    this.store = props.store.moiveHomeStore;
  }
  componentDidMount(){
    let {intheaters_arr,comingsoon_arr,fetchComingSoonMoive,fetchIntheatersMoive}=this.store;
    if(intheaters_arr.length===0){
      fetchIntheatersMoive();
    }
    if(comingsoon_arr.length===0){
      fetchComingSoonMoive();
    }

  }
  render(){

    let { loading,
          errorInfo,
          intheaters_arr,
          comingsoon_arr,
          comingsoon_loading,
          comingsoon_errorInfo}=this.store;

    let errorInTheaters = Boolean(errorInfo);
    let errorComingSoon = Boolean(comingsoon_errorInfo);

    if(loading||comingsoon_loading){
      return(
        <div className="example">
          <Spin size="large"/>
        </div>
      )
    }else if(errorInTheaters||errorComingSoon){
      return(
          <h1>信息异常{errorInfo.Error}</h1>
        )
    }else if(intheaters_arr.length>0&&comingsoon_arr.length>0){
      return(
        <div>
          {/* <div>Test</div> */}
          <InTheatersComponent showArr={intheaters_arr} link_path={'/Movie/InTheaters'} section_Title={'影院热映'} />
          <InTheatersComponent showArr={comingsoon_arr} link_path={'/Movie/ComingSoon'} section_Title={'即将上映'}/>
        </div>
        )
    }else{
      return(
        <div className="example">
          <Spin size="large"/>
        </div>
      )
    }


  }
}

export default MovieHomeComponent;
