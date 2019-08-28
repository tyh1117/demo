var lis = document.querySelectorAll(".nav li");
var contents = document.querySelectorAll(".content-right");
var photographer = document.getElementsByClassName("photographer")[0];
// console.log(abc);

for (var i = 0; i < lis.length; i++) {
  lis[i].onclick = function () {
    for (var i = 0; i < lis.length; i++) {
      lis[i].children[0].innerHTML = "+";
      lis[i].className = "";
      contents[i].className = "fr content-right";
    }
    this.children[0].innerHTML = "-";
    this.children[0].style.color = "#ac6e71";
    this.className = "active";
    contents[this.getAttribute("sub")].className = "fr content-right active";
    photographer.innerHTML = this.innerHTML.substr(0, 3);
  }
}

