

var diamond1;
var diamond2;
var diamond3;
var diamond4;
var randomNum;

function resetValues ()
{
    diamond1 = Math.floor(Math.random()*10);
    diamond2 = Math.floor(Math.random()*10);
    diamond3 = Math.floor(Math.random()*10);
    diamond4 = Math.floor(Math.random()*10);
    randomNum = Math.floor(Math.random()*100);
}

$("#click-me").on("click", function() {
    alert("I've been clicked!");
  });


