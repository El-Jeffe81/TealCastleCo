/*
Teal Castle Co
Main Application Controller
*/


const menuButton =
document.getElementById("menuToggle");


const navigation =
document.getElementById("navigation");



if(menuButton){


menuButton.addEventListener(
"click",
()=>{


navigation.classList.toggle(
"active"
);


});


}
