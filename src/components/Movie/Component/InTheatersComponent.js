import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { Grid, Row,Col} from 'react-bootstrap';

import SingleMovie from './CommentComponent/SingleMovie'
import {monitoringScreenSize} from '../../../CommenFunction/Screen'

import '../css/intheaters.css'
import '../css/moivedetail.css'

@inject("store") @observer
class InTheatersComponent extends Component{
  constructor(props) {
    super(props);
    this.store = props.store.moiveHomeStore;
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
    //获取信息
    let {loading,
         errorInfo,
         comingsoon_loading,
         comingsoon_errorInfo,
         intheaters_arr,
         comingsoon_arr}=this.store;
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
        <h1>信息异常</h1>
      )
    }else{

      let new_intheaters_arr=null;
      let section_Title=null;
      let toPath=null;
      let hideMorebutton=false;
      if(this.props.match===undefined){
        new_intheaters_arr = this.props.showArr.slice(0,6);
        section_Title=this.props.section_Title;
        toPath = this.props.link_path;
        hideMorebutton=false;
      }else{
        if(this.props.match.path==='/Movie/InTheaters'){
          new_intheaters_arr = intheaters_arr;
          section_Title = '影院热映';
          toPath='/Movie/InTheaters';
        }else if(this.props.match.path==='/Movie/ComingSoon'){
          new_intheaters_arr = comingsoon_arr;
          section_Title = '即将上映';
          toPath='/Movie/ComingSoon';
        }
        hideMorebutton=true
      }

      let {is768}=this.state;
      console.log('documentElement:'+document.documentElement.clientWidth+section_Title+':'+(is768&&!hideMorebutton));
      return (is768&&!hideMorebutton)
      ?(
        <div>
          <h6 className="section_title_768">{section_Title}</h6>
          <Link hidden={hideMorebutton} to={toPath} className="more_Link_768">更多{">>"}</Link>
          <div className="slide-box">

            {
              new_intheaters_arr.map((item,index)=>{
                return(
                  <SingleMovie key={item.id} item={item}/>
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
            <Link hidden={hideMorebutton} to={toPath} className="more_Link">更多{">>"}</Link>
            <Row className="show-grid">
              {
                new_intheaters_arr.map((item,index)=>{
                  return(
                    <Col key={item.id} xs={4} sm={4} md={2} lg={2} className="littleScreen">
                      <SingleMovie item={item}/>
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

export default InTheatersComponent;
