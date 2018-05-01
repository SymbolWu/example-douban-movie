import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import { Spin } from 'antd';

import MovieShowComponent from './MovieShowComponent'
import {monitoringScreenSize} from '../../CommenFunction/ToolFunction'

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
    let {pickMovieArrMap}=this.store;
    for(let value of pickMovieArrMap.values()){
      if(value.section_arr.length===0){
          value.getMovieFunction();
      }
    }

    this.setState(monitoringScreenSize());
    window.onresize = () =>{
      this.setState(monitoringScreenSize());
    }
  }
  render(){

    let {pickMovieArrMap}=this.store;

    let isError = false;
    let isNotBlank =true;
    let movie_Arr_Group=[];
    for (let value of pickMovieArrMap.values()) {
      if(Boolean(value.errorInfo)){
        isError=true;
      }
      value.section_arr.length===0?isNotBlank=false:movie_Arr_Group.push(value);
    }

    if(isNotBlank){
      console.log();
      return(
        <div>
          {
            movie_Arr_Group.map((item,index)=>{
              return(
                <MovieShowComponent key={item.section_Title} showArr={item.section_arr} link_path={item.link_path} section_Title={item.section_Title} is768={this.state.is768}/>
              )
            })
          }
        </div>
        )
    }else if(isError){
      return(
          <h1>信息异常</h1>
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
