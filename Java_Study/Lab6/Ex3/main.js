var theAnswer;  
var numOfTries = 0; 

function generateTheAnswer() {
    numOfTries = 0;
    theAnswer = Math.floor(Math.random() * (10 - 1) + 1);
}

function checkTheGuess() {
      var theGuess;
      var highOrLow;
      theGuess = prompt("Enter your guess:", "Your guess goes here");
      while ((theGuess != theAnswer) && (theGuess != -1)) {
            if (theGuess > theAnswer) {
                  highOrLow = theGuess + " was too high! Enter -1 to quit or enter another guess:";
            } 
            else {
                  highOrLow = theGuess + " was too low! Enter -1 to quit or enter another guess:";
            } 
            theGuess=prompt (highOrLow, "Guess again, your next guess goes here");
            numOfTries++;
            if (numOfTries >= 5)
            {
                  alert("You lose");
            }
      } 
      
      if (theGuess != -1 || theGuess != theAnswer && numOfTries < 5) {
            alert ("You win!");
      }else{
            alert ("You are a quitter");
      } 
} 