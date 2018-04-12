var butn = document.getElementByID("butn");
butn.addEventListener("click",function(){
  var ajaxhttp = new XMLHttpRequest();
ajaxhttp.open('GET','https://raw.githubusercontent.com/Essssss/random-quotes-generator/master/myrandomquotes.json',true);
ajaxhttp.onload = function(){
  var mydata = JSON.parse(ajaxhttp.responseText);
  console.log(mydata[0])
}
ajaxhttp.send();
});
