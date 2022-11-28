function changeTheColor() {
    var desiredColor;
    desiredColor=document.getElementById('colorText').value;
    desiredColor=desiredColor.toLowerCase();
    document.getElementById('myWelcome').style.color = "colourthatyoupicked";
    switch (desiredColor) {
    case 'green':
        document.body.style.backgroundColor="LightGreen";
        document.getElementById("myButton").style.backgroundColor="DarkOliveGreen";
        break;
    case 'yellow':
        document.body.style.backgroundColor="Gold";
        document.getElementById("myButton").style.backgroundColor="PaleGoldenRod";
        break;
    case 'blue':
        document.body.style.backgroundColor="CornflowerBlue";
        document.getElementById("myButton").style.backgroundColor="Navy";
        break;
    default:
        document.body.style.backgroundColor="White";
        alert ("Sometimes I don't know my favourite colour either!");
        break;
    }
   } 