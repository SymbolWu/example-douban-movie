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
    console.log(props);
    this.store = props.store.moiveHomeStore;
  }
  componentDidMount(){
    let {intheaters_arr,fetchIntheatersMoive}=this.store;
    if(intheaters_arr.length===0){
      fetchIntheatersMoive();
    }

  }
  render(){

    let {loading,errorInfo}=this.store;
    console.log('MovieHomeComponent - errorInfo:'+Boolean(errorInfo));
    let reqError = Boolean(errorInfo);
    if(loading){
      return(
        <div className="example">
          <Spin size="large"/>
        </div>
      )
    }else if(reqError){
      return(
          <h1>信息异常{errorInfo.Error}</h1>
        )
    }else{
      return(
        <div>
          <InTheatersComponent/>
        </div>
        )
    }


  }
}

export default MovieHomeComponent;
