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
    let {intheaters_arr,fetchIntheatersMoive}=this.store;
    if(intheaters_arr.length===0){
      fetchIntheatersMoive();
    }


    this.setState(monitoringScreenSize());
    window.onresize = () =>{
      this.setState(monitoringScreenSize());
      console.log('DiD documentElement:'+document.documentElement.clientWidth+' body:'+document.body.clientWidth+monitoringScreenSize().is768);
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
        let new_intheaters_arr=null;
        let hideMorebutton=false;
        if(this.props.match===undefined){
          new_intheaters_arr = intheaters_arr.slice(0,6);
          hideMorebutton=false;
        }else{
          new_intheaters_arr = intheaters_arr;
          hideMorebutton=true
        }

        let {is768}=this.state;
        console.log('Render_documentElement:'+document.documentElement.clientWidth+' body:'+document.body.clientWidth+':'+(is768&&!hideMorebutton));
        // if(is768&&!hideMorebutton){
        //   return(
        //       <div>小小小的{document.documentElement.clientWidth} 和 {String(is768)}</div>
        //   )
        // }else{
        //   return(
        //       <div>大大大的{document.documentElement.clientWidth}和 {String(is768)}</div>
        //   )
        // }


        return (is768&&!hideMorebutton)
        ?(
          <div>
            <h2>正在上映</h2>
            <Link hidden={hideMorebutton} to="/Movie/InTheaters">更多（正在热映）</Link>
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
              <h2>正在上映</h2>
              <Link hidden={hideMorebutton} to="/Movie/InTheaters">更多1（正在热映）</Link>
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



        // return(
        //     <div>
        //       <Grid className="container">
        //         <h2>正在上映</h2>
        //         <Link hidden={hideMorebutton} to="/Movie/InTheaters">更多1（正在热映）</Link>
        //         <Row className="show-grid">
        //           {
        //             new_intheaters_arr.map((item,index)=>{
        //               return(
        //                 <Col key={item.id} xs={4} sm={4} md={2} lg={2} className="littleScreen">
        //                   <SingleMovie item={item}/>
        //                 </Col>
        //               )
        //             })
        //           }
        //         </Row>
        //       </Grid>
        //     </div>
        // )
      }else{
        return(
          <h1>信息异常{errorInfo}</h1>
        )
      }




  }
}

export default InTheatersComponent;
