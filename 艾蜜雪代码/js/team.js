var btns=document.querySelectorAll(".lastbtn");
var imgbox=document.querySelectorAll(".imgbox div");
var spans1 = document.querySelectorAll(".lastbtn span");
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function (e) {
    e = e || window.event;
    var target = e.target || e.scrElement;

  
    if (target.innerHTML == "&gt;") {
     for (var a = 0; a < spans1.length; a++) {
       spans1[a].className = "";
     }

      target.parentNode.previousElementSibling.children[0].style.left = "-1050px";
      target.previousElementSibling.className = "active";
    }
    if (target.innerHTML == "&lt;") {
      for (var a = 0; a < spans1.length; a++) {
        spans1[a].className = "";
      }
      target.parentNode.previousElementSibling.children[0].style.left = "0px";
      target.nextElementSibling.className = "active";
    }
  }
}

