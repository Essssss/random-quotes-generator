var thequoteplace = document.getElementById("quoteplace");
var buttn = document.getElementById("butn");
var clickscounter =0;
buttn.addEventListener("click", function(){
  var ajaxhttp = new XMLHttpRequest();
ajaxhttp.open('GET','https://raw.githubusercontent.com/Essssss/random-quotes-generator/master/myrandomquotes.json',true);
ajaxhttp.onload = function(){
  var mydata = JSON.parse(ajaxhttp.responseText);
  if(clickscounter<mydata.length){
  displaydata(mydata,clickscounter);
   clickscounter++;} else{clickscounter=0;}

};
ajaxhttp.send();

});
function displaydata(data,n){

  var mystring = "<p>"+data[n].quote +"</br> -"+data[n].author+"</p>";
thequoteplace.innerHTML = mystring;

}
