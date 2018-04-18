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

      // <div className="nowplaying">
      //   <h2>正在上映</h2>
      //   <ul className="list">
      //     {
      //       intheaters_arr.map((item,index)=>{
      //         return(
      //           <li key={item.id} className="list-item">
      //           <Card  className="card">
      //             <div className="custom-image">
      //               <img alt="example" width="100%" height="170px" src={item.images.small} />
      //             </div>
      //             <div className="custom-card">
      //               {/* <Link to={`/Movie/${item.id}`} className="title" onClick={this.sendMoiveItem.bind(this,item)}>{item.title}</Link> */}
      //               <Link to={`/Movie/${item.id}`} className="title">{item.title}</Link>
      //               <p>{item.original_title}</p>
      //             </div>
      //           </Card>
      //           </li>
      //         )
      //       })
      //     }
      //   </ul>
      // </div>


      if(loading){
        return(
          <div className="example">
            <Spin size="large"/>
          </div>
        )
      }else if(intheaters_arr){
        return(
          <div className="carousel-div">
            <Grid className="container">
              <h2>正在上映</h2>
              <Row className="show-grid">
                {
                  intheaters_arr.map((item,index)=>{
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
