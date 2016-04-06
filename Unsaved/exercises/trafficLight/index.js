// Brian Lackey Solution:

var stopLight = function(button, light, color) {
   document.getElementById(button).addEventListener("click", function() {
     var bulb = document.getElementById(light);
     bulb.style.backgroundColor = color;

     if(color === "red") {
       document.getElementById("slowLight").style.backgroundColor = "black";
       document.getElementById("goLight").style.backgroundColor   = "black";
     }
     else if(color === "yellow") {
       document.getElementById("stopLight").style.backgroundColor = "black";
       document.getElementById("goLight").style.backgroundColor   = "black";
     }
     else {
       document.getElementById("stopLight").style.backgroundColor = "black";
       document.getElementById("slowLight").style.backgroundColor = "black";
     }
   });
 };

 stopLight("stopButton", "stopLight", "red");
 stopLight("slowButton", "slowLight", "yellow");
 stopLight("goButton", "goLight", "green");

