import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
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

    let {loading,intheaters_arr,errorInfo}=this.store;
    if(loading){
      return(
        <div className="example">
          <Spin size="large"/>
        </div>
      )
    }else if(intheaters_arr){
      return(

        <div>
          <InTheatersComponent/>

        </div>
          // <InTheatersComponent intheaters_arr={intheaters_arr.slice(0,7)}/>


        )
    }else{
      return(
        <h1>信息异常{errorInfo}</h1>
      )
    }


  }
}

export default MovieHomeComponent;
