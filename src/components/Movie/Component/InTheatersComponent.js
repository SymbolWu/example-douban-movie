import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { Grid, Row,Col} from 'react-bootstrap';
import '../css/intheaters.css'
import '../css/moivedetail.css'

@inject("store") @observer
class InTheatersComponent extends Component{
  constructor(props) {
    super(props);
    this.store = props.store.moiveHomeStore;
  }
  componentDidMount(){
    let {intheaters_arr,fetchIntheatersMoive}=this.store;
    if(intheaters_arr.length===0){
      fetchIntheatersMoive();
    }
    console.log("InTheatersComponent");
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
        let hidebuttn=false;
        if(this.props.match===undefined){
          new_intheaters_arr = intheaters_arr.slice(0,6);
          hidebuttn=false;
        }else{
          new_intheaters_arr = intheaters_arr,
          hidebuttn=true
        }
        return(
          <div className="carousel-div">
            <Grid className="container">
              <h2>正在上映</h2>
              <Link hidden={hidebuttn} to="/Movie/InTheaters">更多（正在热映）</Link>
              <Row className="show-grid">
                {
                  new_intheaters_arr.map((item,index)=>{
                    return(
                      <Col key={item.id} lg={2} md={3} sm={3} xs={6}>
                        <div>
                          <img alt="example" className="img-responsive" src={item.images.small}/>
                          <Link to={`/Movie/InTheaters/${item.id}`} className="title">{item.title}</Link>
                          {
                            (item.original_title===item.title)
                            ?(<p>{item.year}</p>)
                            :(<p>{item.original_title}</p>)
                          }
                        </div>

                      </Col>
                    )
                  })
                }
              </Row>
            </Grid>
          </div>
          )
      }else{
        return(
          <h1>信息异常{errorInfo}</h1>
        )
      }




  }
}

export default InTheatersComponent;
