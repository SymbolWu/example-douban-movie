import React,{Component} from 'react';
import { Rate,Spin } from 'antd';
import { Grid, Row,Col ,Breadcrumb} from 'react-bootstrap';
import {inject,observer} from 'mobx-react'

import '../../Styles/MovieStyle/movieAllStyle.css'
import '../../Styles/MovieStyle/movieDetailStyle.css'

@inject("store") @observer
class MovieDetailComponent extends Component {

  constructor(props) {
    super(props);
    this.store = props.store.movieHomeStore;
  }
  componentWillMount(){
<<<<<<< HEAD
    //添加注释 online Test 2156
=======
    //添加注释 online Test 2134
>>>>>>> 8fed043bd6d07325b86e432852530d0c19c8ef24
    let {movieItem,emptyLastmovieItem}=this.store;
    //检测 store 中是否已经有movieItem ,如果有，且于当前所需要展示的电影ID不同，则提前清除。(4)
    (movieItem!==null&&this.props.match.params.movieid!==movieItem.id)?emptyLastmovieItem():console.log('last');
  }
  componentDidMount(){
    //add 56
<<<<<<< HEAD
    //999887656
=======
    //456666
>>>>>>> 8fed043bd6d07325b86e432852530d0c19c8ef24
    let {fetchMoiveDetail}=this.store;
    fetchMoiveDetail(this.props.match.params.movieid);
  }

  render(){
    let {
      movieItem_loading,
      movieItem,
      movieItem_errorInfo
    }=this.store;

    if (movieItem_loading){
      return(
        <div className="example">
          <Spin size="large"/>
        </div>
      )
    }else if (movieItem) {
      console.log('movieItemrating:'+Math.round(movieItem.rating.average)/2);
      return(
        <Grid className="container">
          <Row className="show-grid">
            <Col md={12}>
              <h3>
                {movieItem.title}
  			      </h3>
              {
                (movieItem.original_title===movieItem.title)
                ?(<h5>{movieItem.year}</h5>)
                :(<h5>{movieItem.original_title}</h5>)
              }
              <Row className="show-grid">
                <Col lg={3} md={3} sm ={6}>
                  <img alt={movieItem.id} className="img-responsive" src={movieItem.images.small} />
                </Col>
                <Col lg={5} md={6} sm ={6}>
                  <p>导演:{movieItem.directors[0].name}</p>
                  <Breadcrumb>主演:
                    {
                      movieItem.casts.map((item,index)=>{
                        return(
                          <Breadcrumb.Item active key={item.id}><a href={item.alt} target="_blank">{item.name}</a></Breadcrumb.Item>
                        )
                      })
                    }
                  </Breadcrumb>
                  <Breadcrumb>类型:
                    {
                      movieItem.genres.map((item,index)=>{
                        return(
                          <Breadcrumb.Item active key={index}>{item}</Breadcrumb.Item>
                        )
                      })
                    }
                  </Breadcrumb>
                  <p>制片国家地区:{movieItem.countries}</p>
                  <p>年代:{movieItem.year}</p>
                  <p>评论数:{movieItem.comments_count}</p>
                  <p>想看人数:{movieItem.wish_count}</p>
                  <p>看过人数:{movieItem.collect_count}</p>
                  <a href={movieItem.alt} target="_blank">豆瓣原页面</a>
                </Col>

                <Col lg={4} md={3} sm ={12} className="rating">
                  <hr/>
                  <h5>豆瓣评分</h5>
                  <h3>{movieItem.rating.average.toFixed(1)}</h3>
                  <Rate allowHalf disabled defaultValue={Math.round(movieItem.rating.average)/2}/>
                  <hr/>
                </Col>
              </Row>
              <h4>{movieItem.title}的剧情简介</h4>
              <p>
                {movieItem.summary}
              </p>
            </Col>
          </Row>
        </Grid>
      )
    }else {
      return(
        <div>{movieItem_errorInfo.Error}</div>
      )
    }

  }
}
export default MovieDetailComponent;
