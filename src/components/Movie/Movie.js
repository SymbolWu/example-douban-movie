import React,{Component} from 'react';
import { Carousel } from 'antd';
import InTheaters from './InTheaters'
import axios from 'axios'
import './css/movie.css'
class Movie extends Component{
  constructor(props) {
    super(props);
    this.state={
      intheaters_arr:null
    }
  }
  componentDidMount(){

    let url = "https://api.douban.com/v2/movie/in_theaters";
    axios.get(url)
      .then(response=>{
        console.log(response.subjects);
      })
      .catch(error=>{
        console.log(error);
      })

  }
  render(){

    return(
      <div className="carousel-div">
        <Carousel autoplay effect="fade">
          <div><h3>Movie Component1</h3></div>
          <div><h3>Movie Component2</h3></div>
          <div><h3>Movie Component3</h3></div>
          <div><h3>Movie Component5</h3></div>
        </Carousel>
        <InTheaters/>

      </div>
    )
  }
}

export default Movie;
