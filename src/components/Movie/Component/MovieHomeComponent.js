import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import { Carousel,Spin } from 'antd';
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
          <Spin />
        </div>
      )
    }else if(intheaters_arr){
      return(
        <div className="carousel-div">
          <Carousel autoplay effect="fade">
            <div><h3>Movie Component1</h3></div>
            <div><h3>Movie Component2</h3></div>
            <div><h3>Movie Component3</h3></div>
            <div><h3>Movie Component5</h3></div>
          </Carousel>
          <InTheatersComponent intheaters_arr={intheaters_arr}/>
        </div>
        )
    }else{
      return(
        <h1>信息异常{errorInfo}</h1>
      )
    }


  }
}

export default MovieHomeComponent;
