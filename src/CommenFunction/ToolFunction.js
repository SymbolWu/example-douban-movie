let monitoringScreenSize =()=>{
  let screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
  return screenWidth<=768?{is768:true}:{is768:false};
};
let getMatchPath =(matchPath)=>{
  let path_arr = matchPath.split("/");
  let section_type = path_arr[path_arr.length-1];
  return section_type;
}
export {monitoringScreenSize,getMatchPath}
