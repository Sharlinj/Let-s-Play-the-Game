function play()
{
  var pos=["rock","paper","scissor"];
  var userInput=document.getElementById("ec").value;
  var index=Math.floor(Math.random()*3);
  var compInput=pos[index];
  document.getElementById("cc").value=compInput;
  var b= (compInput==userInput)?"Match Tie":((compInput=="rock"&&userInput=="scissor")||(compInput=="paper"&&userInput=="rock")||(compInput=="scissor"&&userInput=="paper"))?"Computer Win":"User Win";
  document.getElementById("Answer").innerText=(b);
}