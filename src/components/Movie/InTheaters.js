import React,{Component} from 'react';

import { Link } from 'react-router-dom';
import { Card } from 'antd';
import './css/intheaters.css'

class InTheaters extends Component{
  // constructor(props) {
  //   super(props);
  // }

  render(){
    let {intheaters_arr} = this.props;
    return(
      <div className="nowplaying">
        <h2>正在上映</h2>
        <ul className="list">
          {
            intheaters_arr.map((item,index)=>{
              return(
                <li key={item.id} className="list-item">
                <Card  className="card">
                  <div className="custom-image">
                    <img alt="example" width="100%" height="170px" src={item.images.small} />
                  </div>
                  <div className="custom-card">
                    {/* <Link to={`/Movie/${item.id}`} className="title" onClick={this.sendMoiveItem.bind(this,item)}>{item.title}</Link> */}
                    <Link to={`/Movie/${item.id}`} className="title">{item.title}</Link>
                    <p>{item.original_title}</p>
                  </div>
                </Card>
                </li>
              )
            })
          }
        </ul>

      </div>

    )
  }
}

export default InTheaters;
