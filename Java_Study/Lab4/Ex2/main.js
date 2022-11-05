
function calcArea(width, height) {
    var area;
    var answerarea;
    area = width * height;
    answerarea=document.getElementById("answer");
    answerarea.innerHTML=area;
   }
  
   function calcPeri(width, height) {
    var peri;
    var answerarea;
    peri = (width *2) + (height*2);
    answerarea=document.getElementById("answer1");
    answerarea.innerHTML=peri;
   }