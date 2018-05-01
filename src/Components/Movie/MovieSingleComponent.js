import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Image} from 'react-bootstrap';

import  '../../Styles/MovieStyle/movieShowStyle.css'
import  '../../Styles/MovieStyle/movieDetailStyle.css'

class MovieSingleComponent extends Component {
  render(){
    let {item,is768}=this.props;
    let toggleScreen = is768?"float-title-768":"float-title";
    return(
      <div className="full-div">
        <div className={toggleScreen}>
          {/* <Link to={`/Movie/InTheaters/${item.id}`} className="title">{item.title}</Link>
          <span className="title">{item.rating.average}分</span> */}
          <Link to={`/Movie/InTheaters/${item.id}`} className="title">{item.title}</Link>

        </div>
        <div className="single-movie-div">
          <Link to={`/Movie/InTheaters/${item.id}`}>
            <Image alt={item.title} className="img-responsive" src={item.images.small}/>
          </Link>
          {/* <Link to={`/Movie/InTheaters/${item.id}`} className="title">{item.title}</Link> */}
          {/* <span className="title">{item.rating.average}分</span> */}
          {/* <hr className="hrLine"/> */}
        </div>

      </div>

    )
  }
}
export default MovieSingleComponent;
