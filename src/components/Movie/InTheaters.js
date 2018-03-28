import React,{Component} from 'react';

import { Row, Col,Card } from 'antd';
import './css/intheaters.css'
class InTheaters extends Component{
  // constructor(props) {
  //   super(props);
  // }

  render(){
    let {intheaters_arr} = this.props;
    console.log(intheaters_arr);
    return(
      <div className="gutter-example">
        <h3>正在热映</h3>
          <Row gutter={16}>
              {
                intheaters_arr.map((item,index)=>{
                  return(
                    <Col key={item.id} className="gutter-row" span={6}>
                    <Card  style={{ width: 240,height:444 }} bodyStyle={{ padding: 0 }}>
                      <div className="custom-image">
                        <img alt="example" width="100%" height="333px" src={item.images.medium} />
                      </div>
                      <div className="custom-card">
                        <h3>{item.title}</h3>
                        <p>{item.original_title}</p>
                      </div>
                    </Card>
                    </Col>
                  )
                })
              }

          </Row>
      </div>

    )
  }
}

export default InTheaters;
