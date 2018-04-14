var twitterlink = document.getElementById("tweetlink");
var thequoteplace = document.getElementById("quoteplace");
var buttn = document.getElementById("butn");
//var tweetbutn = document.getElementById("tweetlink");
var clickscounter =0;
buttn.addEventListener("click", function(){
  var ajaxhttp = new XMLHttpRequest();
ajaxhttp.open('GET','https://raw.githubusercontent.com/Essssss/random-quotes-generator/master/myrandomquotes.json',true);
ajaxhttp.onload = function(){
  var mydata = JSON.parse(ajaxhttp.responseText);
  if(clickscounter<mydata.length){
  displaydata(mydata,clickscounter);
  /*tweetbutn.addEventListener("click", function(){
    var url = "https://twitter.com/intent/tweet?text=";
    var quotetext = mydata[clickscounter].quote+" -"+mydata[clickscounter].author;
     window.open(url+quotetext);
  });*/
  var text = mydata[clickscounter].quote+" -"+mydata[clickscounter].author;
  var url = "https://twitter.com/intent/tweet/?text="+text;
  twitterlink.setAttribute("href",url);
 clickscounter++;} else{
   thequoteplace.innerHTML="Quotes ended (: </br> Press New Quote button to start over";
   clickscounter=0;}


};

ajaxhttp.send();

});
function displaydata(data,n){

  var mystring = "<p>"+data[n].quote +"</br> -"+data[n].author+"</p>";
thequoteplace.innerHTML = mystring;


}
