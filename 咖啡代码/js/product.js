var btns=document.getElementsByClassName("btn");
var main=document.getElementsByClassName("main-content");
var banner=document.getElementsByClassName("banner-img")[0];
var coffee=document.getElementsByClassName("caffee")[0];
var arr = ['./img/product-banner1.png','./img/product-banner2.png','./img/product-banner3.png'];
var arr_coffee=["卡布基诺","摩卡咖啡","拿铁咖啡"];

for (let i=0;i<btns.length;i++) {
  btns[i].onclick=function() {
    for (var j = 0;j<main.length; j++){
      main[j].style.display = 'none';
    }
    main[i].style.display = 'block';
    banner.setAttribute('src',arr[i]);
    coffee.innerHTML=arr_coffee[i];
  }
}
