function play()
{
  var pos=["snake","water","gun"];
  var userInput=document.getElementById("ec").value;
  var index=Math.floor(Math.random()*3);
  var compInput=pos[index];
  document.getElementById("cc").value=compInput;
  var b= (compInput==userInput)?"Match Tie":((compInput=="water"&&userInput=="gun")||(compInput=="snake"&&userInput=="water")||(compInput=="gun"&&userInput=="snake"))?"Computer Win":"User Win";
  document.getElementById("Answer").innerText=(b);
}