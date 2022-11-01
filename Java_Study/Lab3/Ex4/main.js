//Code written by: Le Hoang Hieu (Goatee)

function calcCost()     {

    //This function will calculate the cost of cupcakes based on what the number the user
    //enters in the text box
    
    //Variable Declaration
         var costPerCupcake;
         var amountOfCupcakes;
         var totalCost;
         var cupcakeTypes=['Red Raspberry','Berry Berry Blueberry','Cherry Chocolate'];
         var allTheTypes = " ";

    //do calculations
         costPerCupcake=3;
         amountOfCupcakes =document.getElementById("amtToGet").value;
         totalCost = amountOfCupcakes * costPerCupcake;
    
    //display answers
         document.write("<p><h1>Total Cost: ");
         document.write(totalCost);
         document.write(" dollars </h1></p>");

    //display types of cupcakes
         document.write( cupcakeTypes[0] );
         document.write( cupcakeTypes[1] );
         document.write( cupcakeTypes[2] );
         cupcakeTypes[3]="Your Western User Id’s Tootie Fruity";
         cupcakeTypes[4]="Gaymen Flavour";
         cupcakeTypes[1]="Butter Pecan";
         document.write(cupcakeTypes.length);
         for (i = 0; i < cupcakeTypes.length; i++){
             allTheTypes = allTheTypes + cupcakeTypes[i] + "<br>";
         }
         document.write(allTheTypes);
    } //end of function