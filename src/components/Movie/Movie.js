import React,{Component} from 'react';
import { Carousel,Spin } from 'antd';
import InTheaters from './InTheaters'
import axios from 'axios'
import './css/movie.css'
class Movie extends Component{
  constructor(props) {
    super(props);
    this.state={
      initView:true,
      intheaters_arr:null,
      errorInfo:''
    }
  }
  componentDidMount(){

    // let url = "v2/movie/in_theaters";
    // let url =`${\/api}v2/movie/in_theaters`
    axios({
      method:'get',
      baseURL:'/api',
      url:'v2/movie/in_theaters'
      // url:'v2/book/1220562'
    }).then(response=>{
        this.setState({
          initView:false,
          intheaters_arr:response.data.subjects
        });
      })
      .catch(error=>{
        console.log(error);
        this.setState({
          initView:false,
          errorInfo:error
        });
      })

  }
  render(){

    let {initView,intheaters_arr,errorInfo}=this.state;
    if(initView){
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
          <InTheaters intheaters_arr={intheaters_arr}/>

        </div>
        )
    }else{
      return(
        <h1>信息异常{errorInfo}</h1>
      )
    }


  }
}

export default Movie;
