import React,{Component} from 'react';

import { Row, Col } from 'antd';
import './css/intheaters.css'
class InTheaters extends Component{
  // constructor(props) {
  //   super(props);
  // }

  render(){

    return(
      <div className="gutter-example">
        <h3>正在热映</h3>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">.ant-col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">.ant-col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">.ant-col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">.ant-col-6</div>
            </Col>
          </Row>
      </div>
    )
  }
}

export default InTheaters;
