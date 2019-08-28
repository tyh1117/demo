var btns=document.getElementsByClassName("btns");
var itd=document.getElementsByClassName("introduce");
var banner=document.getElementsByClassName("banner-img")[0];
var big_img=document.getElementsByClassName("big-img")[0];
var arr=["./img/team1.png","./img/team2.png","./img/team3.png","./img/team4.png"]
var arr1=["./img/team-banner1.png","./img/team-banner2.png","./img/team-banner3.png","./img/team-banner4.png"]
for (let i=0;i<btns.length;i++) {
  btns[i].onclick=function() {
    for (var j=0;j<itd.length;j++) {
      itd[j].style.display="none";
      btns[j].setAttribute("class","btns")
    }
    this.setAttribute("class","active btns");
    itd[i].style.display="block";
    big_img.setAttribute("src",arr[i]);
    banner.setAttribute("src",arr1[i]);
  }
}