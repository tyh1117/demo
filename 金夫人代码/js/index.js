var banner = document.getElementsByClassName("banner")[0];
var banner_imgs = banner.getElementsByClassName("img");
var banner_btns = banner.getElementsByTagName("button");
var banner_points = document.getElementsByClassName("point");
var j = 0;

function aaa() {
  j++;
  if (j == 3) {
    j = 0;
  }
  for (var i = 0; i < banner_imgs.length; i++) {
    banner_imgs[i].className = "img";
    banner_points[i].className = "point";
  }
  banner_imgs[j].className = "active img";
  banner_points[j].className = "active point";
}


for (var i = 0; i < banner_btns.length; i++) {
  banner_btns[i].onclick = function () {
    if (this.innerHTML == "&gt;") {
      aaa();
    } else {
      j--;
      if (j == -1) {
        j = 2;
      }
      for (var i = 0; i < banner_imgs.length; i++) {
        banner_imgs[i].className = "img";
        banner_points[i].className = "point";
      }
      banner_imgs[j].className = "active img";
      banner_points[j].className = "active point";
    }
  }
}

// 小点
for (var i = 0; i < banner_points.length; i++) {

  banner_points[i].onclick = function () {

    for (var i = 0; i < banner_points.length; i++){
      banner_points[i].className = "point";
      banner_imgs[i].className = "img";
    }

     j = this.getAttribute("sub");
    banner_imgs[j].className = "active img";
    this.className = "active point";
  }
}


var timer = setInterval(aaa, 2000);
banner.onmouseover = function () {
  clearInterval(timer);
}
banner.onmouseout = function () {
  timer = setInterval(aaa, 2000);
}