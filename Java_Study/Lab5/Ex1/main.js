function whoWasChecked() {
    var radioButtons;
    var firstButton;
    radioButtons = document.getElementsByName('q1');
    firstButton=radioButtons[0].checked;
    alert ("First button was checked: " + firstButton);
   }