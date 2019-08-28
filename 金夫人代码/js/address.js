var lis = document.querySelectorAll("main .nav>li");
var addclass = document.getElementsByClassName("address-class")[0];
var addname = document.getElementsByClassName("address-name")[0];
var contents = document.getElementsByClassName("content-right");

var spans = document.querySelectorAll(".content-left .nav>li>span");

for (var i = 0; i < lis.length; i++) {
  var n = 0;
  // 一级菜单绑定点击事件
  lis[i].onclick = function () {
    n++;
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = "";
      spans[i].innerHTML = "+";
      lis[i].nextElementSibling.style.display = "none";
    if (n%2==1) {
    }
    this.className = "active";
    this.children[1].innerHTML = "-";
      this.nextElementSibling.style.display = "block";
      
      addclass.innerHTML = this.firstElementChild.innerHTML + ">";

      var sublis = this.nextElementSibling.getElementsByTagName("li");

      for (var j = 0; j < sublis.length; j++) {
        // 二级菜单的点击事件
        sublis[j].onclick = function () {
          for (var j = 0; j < sublis.length; j++) {
            sublis[j].className = "sub-li";
          }
          for (var j = 0; j < contents.length;j++) {
            contents[j].className = "fr content-right";
          }
          this.className = "sub-li active";
          addname.innerHTML = this.innerHTML;
          contents[this.getAttribute("xb")].className = "fr content-right active";
        }
      }
    }
    if (n % 2 == 0) {
    this.className = "";
    this.children[1].innerHTML = "+";
    this.nextElementSibling.style.display = "none";
    }
  }
}


// 滚动轮播
var banner = document.querySelector("main .banner");
var btns = document.querySelectorAll("main .btn");
var imgbox = document.querySelector("main .banner-img");
var j = 0;
function time() {
  j++;
  if (j == 7) {
    j = 0;
  }
  imgbox.style.marginLeft = j * (-313.5) + "px";
}
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    if (this.innerHTML == "&gt;") {
      time()
    } else {
      j--;
      if (j == -1) {
        j = 6;
      }
      imgbox.style.marginLeft = j * (-313.5) + "px";
    }
  }
}

var timer = setInterval(function () {
  time()
}, 2000);

banner.onmouseover = function () {
  clearInterval(timer);
};

banner.onmouseout = function () {
 timer = setInterval(function () {
  time()
  }, 2000);
}