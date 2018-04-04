import React,{Component} from 'react';
import MoiveDetailComponent from './MoiveDetailComponent'
import {Spin } from 'antd';
import axios from 'axios'
import './css/movie.css'
class MoiveDetail extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading:true,
      moiveItem:null,
      errorInfo:null
    }
  }
  componentDidMount(){
    axios({
      method:'get',
      baseURL:'/api',
      url:`v2/movie/subject/${this.props.match.params.moiveid}`
    }).then(response=>{
      this.setState({
        loading:false,
        moiveItem:response.data,
      });
    })
      .catch(error=>{
        this.setState({
          loading:false,
          errorInfo:error
        });
      })

  }

  render(){
    let {loading,moiveItem,errorInfo}=this.state;
    if (loading){
      return(
        <div className="example">
          <Spin />
        </div>
      )
    }else if (moiveItem) {
      return(
        <MoiveDetailComponent moiveItem={moiveItem}/>
      )
    }else {
      return(
        <div>{errorInfo}</div>
      )
    }

  }
}
export default MoiveDetail;
