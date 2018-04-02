import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class MoiveDetail extends Component {
  // constructor() {
  //
  // }
  render(){
    return(
      <div>
        <header>{this.props.match.params.moiveid}</header>
        <header>isDetail</header>
        <Link to='/Movie'>Back</Link>
      </div>
    )
  }
}
export default MoiveDetail;
