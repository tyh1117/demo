var ul = document.querySelector(".sidenav ul");
var gts = document.getElementsByClassName("gt");
var span = document.querySelector(".small-nav span:nth-of-type(3)");
var spans = document.querySelectorAll(".sidenav ul span");
var mains = document.querySelectorAll(".content1");

ul.onclick = function (e) {
  e = e || window.event;
  var target = e.target || e.srcaElement;
  if (target.nodeName == "SPAN") {
    for (var i = 0; i < gts.length; i++) {
      gts[i].style.display = "none";
      spans[i].className = "";
      mains[i].style.display = "none";
    }
    target.className = "active";
    target.nextElementSibling.style.display = "inline-block";
    span.innerHTML = target.innerHTML;
    span.className = "active";
    mains[target.getAttribute("sub")].style.display = "block";
  }
}