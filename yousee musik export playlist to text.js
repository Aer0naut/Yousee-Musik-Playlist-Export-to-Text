var x = document.querySelectorAll(".flexlist");
var flexlistDiv;
var i;
var j;
var numberOfTracks = 0;
var playList ="";
var H1s = document.getElementsByTagName("h1");

playList = "* " + H1s[0].innerHTML +" *\n\n";

//find correct flexlist div (it has a child with a certain classname)
for (i = 0; i < x.length; i++) {

if(x[i].children[0].className == "flexlist__header") {flexlistDiv=x[i]} 

}

//iterate the children of that div except the first since its the header
for (j = 1; j < flexlistDiv.length; j++) {

numberOfTracks++;

playList = playList + numberOfTracks +": " +

flexlistDiv[j].children[3].children[0].text +" "+
flexlistDiv[j].children[4].children[0].text +" "+
flexlistDiv[j].children[5].children[0].text +"\n";

}


alert(numberOfTracks);

