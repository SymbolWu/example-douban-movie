let monitoringScreenSize =()=>{
  let screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
  return screenWidth<=768?{is768:true}:{is768:false};
};
export {monitoringScreenSize}
