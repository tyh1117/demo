var btn=document.querySelector(".botton");
var box=document.querySelectorAll(".imgbox > div");
var spans2=document.querySelectorAll(".botton > span");
var rt=document.querySelector(".return");
rt.onclick=function() {
  // history.go(-1);
  location="product.html";
}
btn.onclick=function(e) {
  e=e||window.event;
  var target=e.target||e.srcElement;
  if (target.innerHTML=="&gt;") {
    box[0].style.marginLeft="-1070px";
    box[1].style.marginLeft="-1070px";
    spans2[0].className="";
    spans2[1].className="active";
  }
  if (target.innerHTML=="&lt;") {
    box[0].style.marginLeft="0px";
    box[1].style.marginLeft="0px";
    spans2[0].className="active";
    spans2[1].className="";
  }
}

var bk=document.querySelector(".sidenav");
bk.onclick=function(e) {
  e=e||window.event;
  var target=e.target||e.srcElement;
  if (target.nodeName=="SPAN") {
    location="product.html";
  }
}