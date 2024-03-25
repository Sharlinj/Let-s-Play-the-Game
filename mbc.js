function play()
{
  var pos=["man","building","car"];
  var userInput=document.getElementById("ec").value;
  var index=Math.floor(Math.random()*3);
  var compInput=pos[index];
  document.getElementById("cc").value=compInput;
  var b= (compInput==userInput)?"Match Tie":((compInput=="man"&&userInput=="building")||(compInput=="building"&&userInput=="car")||(compInput=="car"&&userInput=="man"))?"Computer Win":"User Win";
  document.getElementById("Answer").innerText=(b);
}