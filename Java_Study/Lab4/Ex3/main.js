function getRandomNumber() {
    var low = document.getElementById('smallest').value;
    var high = document.getElementById('largest').value;
    var ranNum;
    low=low*1; 
    high=high*1;
    ranNum= Math.random()*(high-low+1);
    ranNum=Math.floor(ranNum);
    ranNum=ranNum + low;
    document.getElementById('answer').innerHTML = ranNum;
   }