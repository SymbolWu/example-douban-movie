import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class MoiveDetailComponent extends Component{
  // constructor() {
  //
  // }
  render(){
    let{moiveItem} =this.props;
    console.log(moiveItem.rating.average);
    return(
      <div>
        {/* <header>{this.props.match.params.moiveid}</header>
        <header>isDetail</header> */}

        <div>
          <header>{moiveItem.title}</header>
          <header>{moiveItem.original_title}</header>
          <p>评分：{moiveItem.rating.average}</p>
          <img alt={moiveItem.id} src={moiveItem.images.small} />
          <ul>
            {
              moiveItem.casts.map((item,index)=>{
                return(
                  <li key={item.id}>{item.name}</li>
                )
              })
            }
          </ul>
          <p>评分人数：{moiveItem.ratings_count}</p>
          <p>想看人数：{moiveItem.wish_count}</p>
          <p>看过人数：{moiveItem.collect_count}</p>
          <p>类别:{moiveItem.subtype}</p>

          <p>导演</p>

          <p>收藏数</p>
          <p>年份</p>
          <p>大类</p>
          <p>豆瓣的网站</p>
          <Link to='/Movie'>Back</Link>
        </div>
      </div>
    )
  }
}
export default MoiveDetailComponent;
