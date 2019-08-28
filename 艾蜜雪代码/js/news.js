var btn=document.querySelector(".contents");
btn.onclick=function(e) {
  e=e||window.event;
  var target=e.target||e.scrElement;
  if (target.innerHTML=="春日里的连衣裙，仙气又撩人") {
    location="news-sub1.html";
  }
  if (target.innerHTML=="时髦客不爱裙装爱裤装，她们美得不一样") {
    location="news-sub2.html";
  }
  if (target.innerHTML=="夏日，吹起，运动风") {
    location="news-sub3.html";
  }
  if (target.innerHTML=="美丽说，我把春天献给你") {
    location="news-sub4.html";
  }
}