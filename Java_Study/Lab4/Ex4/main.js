//declare some global variables
var globalvar1;
var aaa;

//assign global variables values
globalvar1="Hello";
aaa=123;

//show what is in globalvar1 right at the beginning
alert("globalvar1 = " + globalvar1);


//display the value in at whichId id on the webpage
function displayAnswer(myAnswer, whichId) {
      answerarea=document.getElementById(whichId);
      answerarea.innerHTML=myAnswer;
}


//here we make a local variable, notice it can ONLY be used inside testFunctionOne
//aaa here is the global one as we never declare a local aaa
function testFunctionOne(param1) {
  var localvar1;
  localvar1 = "in testFunction One";
  aaa=aaa+5;
  globalvar1=globalvar1+ " " + "World";
  displayAnswer(globalvar1,"g1");
  displayAnswer(aaa,"aaa");
  displayAnswer(localvar1,"l1");
}

//this shouldnt display any value, as localvar1 was declared inside of testFunctionOne
//so it is a local variable and can only be used in the function it was created in
alert ("localvar1 = " + localvar1);



//Here we create another local variable called aaa, it is NOW the aaa we are referring to, 
//we are no longer referring to the global aaa variable
//but notice the line aaa+5 is not valid because we never gave aaa an initial value

function testFunctionTwo(param1) {
  var aaa;
  aaa=aaa+5;
  globalvar1=globalvar1 +" " + "Cruel World";
  displayAnswer(globalvar1,"g1");
  displayAnswer(aaa,"aaa");
  displayAnswer(localvar1,"l1");
}

//now that we are outside of the function, we can use aaa again
alert("aaa = " + aaa);


//Here we create another local variable called aaa, it is NOW the aaa we are referring to, 
//we are no longer referring to the global aaa variable
//notice that localvar1 is holding our param1 that was passed to it
function testFunctionThree(param1) {
  var aaa;
  var localvar1;
  aaa=5;
  localvar1="I am the parameter, my value is: " + param1;
  globalvar1=globalvar1 +" " + "Cruel World";
  displayAnswer(globalvar1,"g1");
  displayAnswer(aaa,"aaa");
  displayAnswer(localvar1,"l1");
}


