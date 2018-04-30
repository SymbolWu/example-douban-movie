import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { Grid, Row,Col} from 'react-bootstrap';

import MovieSingleComponent from './MovieSingleComponent'
import {getMatchPath} from '../../CommenFunction/ToolFunction'

import '../../Styles/MovieStyle/movieShowStyle.css'
import '../../Styles/MovieStyle/movieDetailStyle.css'

@inject("store") @observer
class MovieShowComponent extends Component{
  constructor(props) {
    super(props);
    this.store = props.store.movieHomeStore;
  }
  componentDidMount(){
    let {pickMovieArrMap}=this.store;
    if(this.props.match!==undefined){
      for(let [key,value] of pickMovieArrMap.entries()){
        if(key===getMatchPath(this.props.match.path)){
          if(value.section_arr.length===0){
            console.log('fetch');
            value.getMovieFunction();
          }
        }
      }
      // let section_type = getMatchPath(this.props.match.path);
      // if(pickMovieArrMap.has(section_type)){
      //   if(pickMovieArrMap.get(section_type).section_arr.length===0){
      //     pickMovieArrMap.get(section_type).getMovieFunction();
      //   }
      //
      // }
    }
  }


  render(){
    //获取Store中的信息并进行整理
    let {pickMovieArrMap}=this.store;

    let isError =false;
    let isLoading =false;
    if(this.props.match!==undefined){
      let section_type = getMatchPath(this.props.match.path);
      if(pickMovieArrMap.has(section_type)){
        isLoading = pickMovieArrMap.get(section_type).loading;
        isError = Boolean(pickMovieArrMap.get(section_type).errorInfo);
      }
    }


    //条件渲染
    if(isLoading){
      return(
        <div className="example">
          <Spin size="large"/>
        </div>
      )
    }else if(isError){
      return(
        <h1>信息异常</h1>
      )
    }else{
      //判断本组件展示的位置 在Movie Home 还是点击 更多进来的
      let show_in_component_arr=null;
      let section_Title=null;
      let toPath=null;
      let inMovieHome=false;


      if(this.props.match===undefined){
        /* 电影首页Section页面展示 （呈现部分数据） */
        show_in_component_arr = this.props.showArr.slice(0,6);
        section_Title=this.props.section_Title;
        toPath = this.props.link_path;
        inMovieHome=false;
      }else{
        /* 具体的Section页面展示（加载全部数据） */
        let section_type = getMatchPath(this.props.match.path);

        if(pickMovieArrMap.has(section_type)){
          show_in_component_arr = pickMovieArrMap.get(section_type).section_arr;
          section_Title = pickMovieArrMap.get(section_type).section_Title;
          toPath = this.props.match.path;
          inMovieHome=true
        }
      }
      /* 针对屏幕大小对Movie中的Section进行不同形式的展示*/
      return (this.props.is768&&!inMovieHome)
      ?(
        <div>
          <h6 className="section_title_768">{section_Title}</h6>
          <Link hidden={inMovieHome} to={toPath} className="more_Link_768">更多{">>"}</Link>
          <div className="slide-box">

            {
              show_in_component_arr.map((item,index)=>{
                return(
                  <MovieSingleComponent key={item.id} item={item}/>
                )
              })
            }
          </div>
        </div>
      )
      :(
        <div>
          <Grid className="container">
            <h4 className="section_title">{section_Title}</h4>
            <Link hidden={inMovieHome} to={toPath} className="more_Link">更多{">>"}</Link>
            <Row className="show-grid">
              {
                show_in_component_arr.map((item,index)=>{
                  return(
                    <Col key={item.id} xs={4} sm={4} md={2} lg={2} className="littleScreen">
                      <MovieSingleComponent item={item}/>
                    </Col>
                  )
                })
              }
            </Row>
          </Grid>
        </div>
        )


    }


  }
}

export default MovieShowComponent;
