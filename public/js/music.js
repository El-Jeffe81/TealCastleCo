/*
Teal Castle Co
Music Controller
*/


const audio =
document.getElementById("themeAudio");


const musicButton =
document.getElementById("musicToggle");



musicButton.addEventListener(
"click",
function(){


    if(audio.paused){


        audio.play();


        musicButton.innerHTML =
        "🔇 Mute";


    }

    else{


        audio.pause();


        musicButton.innerHTML =
        "🔊 Music";


    }


});
