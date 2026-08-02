/*
Teal Castle Co
Temporary Sparkle Cursor Effect
*/


document.addEventListener(
"mousemove",
function(e){


const sparkle = document.createElement("div");


sparkle.className = "sparkle";


sparkle.innerHTML = "✦";


sparkle.style.left = e.pageX + "px";

sparkle.style.top = e.pageY + "px";



document.body.appendChild(sparkle);



setTimeout(
function(){

sparkle.remove();

},
800
);



});
