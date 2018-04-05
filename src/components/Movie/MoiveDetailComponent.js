import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './css/moivedetail.css'
import { Rate } from 'antd';
import { Grid, Row,Col ,Breadcrumb} from 'react-bootstrap';
class MoiveDetailComponent extends Component{
  // constructor() {
  //
  // }
  render(){
    let{moiveItem} =this.props;
    console.log(moiveItem.directors[0].name);
    return(
      <Grid className="container">
        <Row className="show-grid">
          <Col md={12}>
            <h3>
              {moiveItem.title}
			      </h3>
            <h5>{moiveItem.original_title}</h5>
            <Row className="show-grid">
              <Col md={3}>
                <img alt={moiveItem.id} src={moiveItem.images.small} />
              </Col>
              <Col md={6}>
                <Row className="show-grid">
                  <Col md={9}>
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
                  <Col md={3}>
                    <p>豆瓣评分</p>
                    <h3>{moiveItem.rating.average.toFixed(1)}</h3>
                    <Rate allowHalf disabled defaultValue={parseFloat(moiveItem.rating.average.toFixed(1))/2}/>
                  </Col>
                </Row>

              </Col>

              <Col md={3}>
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
  }
}
export default MoiveDetailComponent;
