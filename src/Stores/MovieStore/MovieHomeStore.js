import { observable ,action} from 'mobx'
import axios from 'axios'
class MovieHomeStore {
  @observable intheaters_arr;
  @observable intheaters_loading;
  @observable intheaters_errorInfo;

  @observable comingsoon_arr;
  @observable comingsoon_loading;
  @observable comingsoon_errorInfo;

  @observable movieItem;
  @observable movieItem_loading;
  @observable movieItem_errorInfo;



  constructor() {
    this.intheaters_arr = [];
    this.intheaters_loading=true;
    this.intheaters_errorInfo='';

    this.comingsoon_arr = [];
    this.comingsoon_loading=true;
    this.comingsoon_errorInfo='';

    this.movieItem = null;
    this.movieItem_loading=true;
    this.movieItem_errorInfo='';
  }
  @action fetchIntheatersMoive =() =>{
    axios({
      method:'get',
      baseURL:'/api',
      url:'v2/movie/in_theaters'
    }).then(response=>{
      this.intheaters_loading =false;
      this.intheaters_arr = response.data.subjects;
      })
      .catch(error=>{
        console.log('fetchIntheatersMoive_Error:'+error);
        this.intheaters_loading =false;
        this.intheaters_errorInfo = error;
      })
  }
  @action fetchComingSoonMoive = ()=>{
    axios({
      method:'get',
      baseURL:'/api',
      url:'v2/movie/coming_soon'
    }).then(response=>{
      this.comingsoon_loading = false;
      this.comingsoon_arr = response.data.subjects;
    }).catch(error=>{
      console.log('fetchComingSoonMoive:'+error);
      this.comingsoon_loading =false;
      this.comingsoon_errorInfo = error;
    })
  }
  @action fetchMoiveDetail = (id)=>{
    axios({
      method:'get',
      baseURL:'/api',
      url:`v2/movie/subject/${id}`
    }).then(response=>{
      this.movieItem_loading=false;
      this.movieItem=response.data;

    }).catch(error=>{
      console.log('fetchMoiveDetail:'+error);
      this.movieItem_loading=false;
      this.movieItem_errorInfo=error;

      })
  }
  @action emptyLastmovieItem = ()=>{
    this.movieItem=null;
    this.movieItem_loading=true;
  }
}
const movieHomeStore =new MovieHomeStore()
export {movieHomeStore}
