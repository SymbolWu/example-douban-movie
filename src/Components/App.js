import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'

import MainRouter from '../Routers/MainRouter'

import '../Styles/CommonStyle/Nav.css'
import 'antd/dist/antd.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentKey:'home'
    }
  }
  handleMenuClick=(e)=>{
    console.log('click ', e.key);
    this.setState({
      currentKey:e.key
    });
  }
  render(){
    let {currentKey} =this.state;
    return(
      <div>
        <Menu className="topNav" theme="dark" onClick={this.handleMenuClick} selectedKeys={[currentKey]} mode="horizontal">
          <Menu.Item key="home"><Link to="/"><Icon type="home" />豆瓣</Link></Menu.Item>
          <Menu.Item key="book"><Link to="/Book"><Icon type="book" />图书</Link></Menu.Item>
          <Menu.Item key="movie"><Link to="/Movie"><Icon type="video-camera" />电影</Link></Menu.Item>
          <Menu.Item key="music"><Link to="/Music"><Icon type="play-circle-o" />音乐</Link></Menu.Item>
        </Menu>
        <div className="fill"></div>
        <MainRouter/>
      </div>

    )
  }
}
export default App;
