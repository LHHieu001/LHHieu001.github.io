var theAnswer;
var numOfTries;
function generateTheAnswer() {
 numOfTries=0;
 theAnswer=Math.floor(Math.random() * (10-1) + 1);
}

function checkTheGuess() {
 var theGuess; //holds users guess
 theGuess=document.getElementById('guess').value * 1;
 if (numOfTries < 3) { 
 if (theGuess > theAnswer) {
numOfTries=numOfTries+1;
alert ("Too High");
 }
 if (theGuess < theAnswer) {
numOfTries=numOfTries+1;
alert ("Too Low");
 }
 if (theGuess == theAnswer) {
alert ("You Win");
 } 
 } 
 else {
 alert("Sorry, you have run out of tries.");
 } 
} 