<?php
$conn=mysqli_connect("127.0.0.1","root","","h51904",3306);
$sql="select * from news";
mysqli_query($conn,"SET NAMES UTF8");
$result=mysqli_query($conn,$sql);
while($row=mysqli_fetch_row($rs)){
  var_dump($row);
  echo("<br>");
 }



?>