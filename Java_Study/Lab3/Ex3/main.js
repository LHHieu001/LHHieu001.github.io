function calcCost()     {

    //This function will calculate the cost of cupcakes based on what the number the user
    //enters in the text box
    
    //Variable Declaration
         var costPerCupcake;
         var amountOfCupcakes;
         var totalCost;
         var currencyType;

    //do calculations
         costPerCupcake=3;
         amountOfCupcakes =document.getElementById("amtToGet").value;
         totalCost = amountOfCupcakes * costPerCupcake;
    
    //display answers
    var myOpenTags;
    var myCloseTags;
    var Total;
    var myProgram;
    myProgram="Hieu's first program! ";
    Total="Total Cost:";
    myOpenTags="<p><h1>";
    myCloseTags="</h1></p>";
        document.write(myProgram);
         document.write(myOpenTags + " " + Total + " ");
         document.write(totalCost);
         currencyType=" Yen";
        document.write(currencyType);
        document.write(myCloseTags);
    
    } //end of function