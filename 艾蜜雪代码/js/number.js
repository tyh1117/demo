function getXhr(){
  var xhr=null;
  if(XMLHttpRequest){
    xhr=new XMLHttpRequest();
  }else{
    xhr=new ActiveXObject("Microsoft.XMLHttp");
  }
  return xhr;
}
var xhr=getXhr();

xhr.open("get", "news.php");
xhr.send(null);
xhr.onreadystatechange = function () {
  xhr.readyState == 4 && xhr.status == 200;
  console.log(xhr.responseText);
}