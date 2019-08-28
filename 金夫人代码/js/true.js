var lis = document.querySelectorAll(".nav>li");
var contents = document.querySelectorAll(".content-right");
var style_name = document.querySelector(".main-top .active");

for (var i = 0; i < lis.length; i++) {
  lis[i].onclick = function () {
    
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = "";
      lis[i].children[0].innerHTML = "+";
      lis[i].children[0].style.color = "#333333";
      contents[i].className = "fr content-right";
    }
    this.className = "active";
    this.children[0].innerHTML = "-";
    this.children[0].style.color = "#ac6e71";
    contents[this.getAttribute("sub")].className = "fr content-right active";
    style_name.innerHTML = this.innerHTML.substr(0, 3);
  }
}