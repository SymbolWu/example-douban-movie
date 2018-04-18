import React,{Component} from 'react';
import { Rate,Spin } from 'antd';
import { Grid, Row,Col ,Breadcrumb} from 'react-bootstrap';
import {inject,observer} from 'mobx-react'
import '../css/movie.css'
import '../css/moivedetail.css'
@inject("store") @observer
class MoiveDetailComponent extends Component {

  constructor(props) {
    super(props);
    this.store = props.store.moiveHomeStore;
  }
  componentWillMount(){
    let {moiveItem,emptyLastMoiveItem}=this.store;
    (moiveItem!==null&&this.props.match.params.moiveid!==moiveItem.id)?emptyLastMoiveItem():console.log('last');
  }
  componentDidMount(){
    let {fetchMoiveDetail}=this.store;
    fetchMoiveDetail(this.props.match.params.moiveid);
  }

  render(){
    let {moiveItem_loading,moiveItem,moiveItem_errorInfo}=this.store;
    if (moiveItem_loading){
      return(
        <div className="example">
          <Spin size="large"/>
        </div>
      )
    }else if (moiveItem) {
      return(
        <Grid className="container">
          <Row className="show-grid">
            <Col md={12}>
              <h3>
                {moiveItem.title}
  			      </h3>
              <h5>{moiveItem.original_title}</h5>
              <Row className="show-grid">
                <Col lg={3} md={3} sm ={6}>
                  <img alt={moiveItem.id} className="img-responsive" src={moiveItem.images.small} />
                </Col>
                <Col lg={5} md={6} sm ={6}>
                  <p>导演:{moiveItem.directors[0].name}</p>
                  <Breadcrumb>主演:
                    {
                      moiveItem.casts.map((item,index)=>{
                        return(

                          <Breadcrumb.Item active key={item.id}><a href={item.alt} target="_blank">{item.name}</a></Breadcrumb.Item>
                        )
                      })
                    }
                  </Breadcrumb>
                  <Breadcrumb>类型:
                    {
                      moiveItem.genres.map((item,index)=>{
                        return(

                          <Breadcrumb.Item active key={index}>{item}</Breadcrumb.Item>
                        )
                      })
                    }
                  </Breadcrumb>
                  <p>制片国家地区:{moiveItem.countries}</p>
                  <p>年代:{moiveItem.year}</p>
                  <p>评论数:{moiveItem.comments_count}</p>
                  <p>想看人数:{moiveItem.wish_count}</p>
                  <p>看过人数:{moiveItem.collect_count}</p>
                  <a href={moiveItem.alt} target="_blank">豆瓣原页面</a>
                </Col>

                <Col lg={4} md={3} sm ={12} className="rating">
                  <hr/>
                  <h5>豆瓣评分</h5>
                  <h3>{moiveItem.rating.average.toFixed(1)}</h3>
                  <Rate allowHalf disabled defaultValue={parseFloat(moiveItem.rating.average.toFixed(1))/2}/>
                  <hr/>
                </Col>
              </Row>
              <h4>{moiveItem.title}的剧情简介</h4>
              <p>
                {moiveItem.summary}
              </p>
            </Col>
          </Row>
        </Grid>
      )
    }else {
      return(
        <div>{moiveItem_errorInfo}</div>
      )
    }

  }
}
export default MoiveDetailComponent;
