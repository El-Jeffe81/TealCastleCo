/*
Teal Castle Co
Music Controller
*/

const audio = document.getElementById("site-music");

const musicButton = document.getElementById("music-toggle");


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
