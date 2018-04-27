import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Image} from 'react-bootstrap';

import  '../../Styles/MovieStyle/movieShowStyle.css'
import  '../../Styles/MovieStyle/movieDetailStyle.css'

class MovieSingleComponent extends Component {
  render(){
    let {item}=this.props;
    return(
      <div className="SingleMovieDiv">
        <Image alt={item.title} className="img-responsive" src={item.images.small} thumbnail />
        <Link to={`/Movie/InTheaters/${item.id}`} className="title">{item.title}</Link>
        <span className="title">{item.rating.average}分</span>
        <hr className="hrLine"/>
      </div>
    )
  }
}
export default MovieSingleComponent;
