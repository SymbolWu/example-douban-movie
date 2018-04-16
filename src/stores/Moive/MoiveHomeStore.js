import { observable ,action} from 'mobx'
import axios from 'axios'
class MoiveHomeStore {
  @observable intheaters_arr;
  @observable loading;
  @observable errorInfo;

  @observable moiveItem;
  @observable moiveItem_loading;
  @observable moiveItem_errorInfo;

  constructor() {
    this.intheaters_arr = [];
    this.loading=true;
    this.errorInfo='';

    this.moiveItem = null;
    this.moiveItem_loading=true;
    this.moiveItem_errorInfo='';
  }
  @action fetchIntheatersMoive =() =>{
    axios({
      method:'get',
      baseURL:'/api',
      url:'v2/movie/in_theaters'
      // url:'v2/book/1220562'
    }).then(response=>{
      this.loading =false;
      this.intheaters_arr = response.data.subjects;
      })
      .catch(error=>{
        console.log(error);
        this.loading =false;
        this.errorInfo = error;
      })
  }
  @action fetchMoiveDetail = (id)=>{
    axios({
      method:'get',
      baseURL:'/api',
      url:`v2/movie/subject/${id}`
    }).then(response=>{
      this.moiveItem_loading=false;
      this.moiveItem=response.data;

    }).catch(error=>{
      this.moiveItem_loading=false;
      this.moiveItem_errorInfo=error;

      })
  }
  @action emptyLastMoiveItem = ()=>{
    this.moiveItem=null;
    this.moiveItem_loading=true;
  }
}
const moiveHomeStore =new MoiveHomeStore()
export {moiveHomeStore}
