function helpBart() {
    var theSaying;
    var temp;
    theSaying=document.getElementById('saying');
    temp=" "; 
    for (var count=1; count<=50; count++) {
        temp=temp+"A fire drill does not demand a fire<br/>";
    } 
    theSaying.innerHTML=temp;
} 