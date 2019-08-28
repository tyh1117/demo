// 轮播
var bimgs = document.querySelectorAll(".banner>.banner-img");

var lis = document.querySelectorAll(".banner li");

function f1() {
  for (let j = 0; j < bimgs.length; j++) {
    bimgs[j].className = "banner-img";
    lis[j].className = "";
  }
}

  for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {

      f1()
      
      bimgs[this.getAttribute("sub")].className = "banner-img active";
      this.className = "active";
    }
  }


  var a = 0;
timer = setInterval(function () {
 
  a++; 
  if (a == 3) {
    a = 0;
  }
  f1()
  lis[a].className = "active";
  bimgs[a].className = "banner-img active";
},2000)

var banner = document.getElementsByClassName("banner")[0];

banner.onmouseover = function () {
  clearInterval(timer);
  timer = null;
}

banner.onmouseout = function () {
  timer=setInterval(function () {
    a++; 
    if (a == 3) {
      a = 0;
    }
    f1()
    lis[a].className = "active";
    bimgs[a].className = "banner-img active";
  },2000)
}


// 设计团队4部分内容鼠标移上去后效果
var personbox = document.querySelector(".design .personbox");
var person = document.querySelectorAll(".design .person");

personbox.onmouseover = function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.className == "d" || target.nodeName == "H3" || target.nodeName == "P"||target.nodeName=="IMG") {
    target.parentNode.parentNode.firstElementChild.lastElementChild.style.top = "0";
    target.parentNode.parentNode.lastElementChild.firstElementChild.style.color = "#f96853";
 }
}

personbox.onmouseout = function (e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.className == "d" || target.nodeName == "H3" || target.nodeName == "P"||target.nodeName=="IMG") {
    target.parentNode.parentNode.firstElementChild.lastElementChild.style.top = "";
    target.parentNode.parentNode.lastElementChild.firstElementChild.style.color = "#494949";
 }
}


// 新闻动态效果

var newsbox = document.querySelector(".news .content");

newsbox.onmouseover = function (e) {
  e = e || window.event;
  var target = e.target || e.scrElement;

  if (target.nodeName == "SPAN" || target.nodeName == "H3" || target.nodeName == "P") {
    target.parentNode.parentNode.firstElementChild.firstElementChild.style.color = "#f96855";
    target.parentNode.parentNode.lastElementChild.firstElementChild.style.color = "#f96855";
  }
}

newsbox.onmouseout = function (e) {
  e = e || window.event;
  var target = e.target || e.scrElement;
  if (target.nodeName == "SPAN" || target.nodeName == "H3" || target.nodeName == "P") {
    target.parentNode.parentNode.firstElementChild.firstElementChild.style.color = "#333";
    target.parentNode.parentNode.lastElementChild.firstElementChild.style.color = "#343434";
  }
}