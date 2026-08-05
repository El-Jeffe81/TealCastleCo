/*
Teal Castle Co
Music Controller
*/


const audio = document.getElementById("themeAudio");

const musicButton = document.getElementById("musicToggle");



if (!audio) {

    console.error("Music error: themeAudio not found");

}


if (!musicButton) {

    console.error("Music error: musicToggle not found");

}



if (audio && musicButton) {


    musicButton.addEventListener(
    "click",
    function(){


        if (audio.paused) {


            audio.play()

            .then(function(){


                musicButton.innerHTML =
                "🔇 Mute";


            })


            .catch(function(error){


                console.error(
                    "Music playback failed:",
                    error
                );


            });


        }


        else {


            audio.pause();


            musicButton.innerHTML =
            "🔊 Music";


        }


    });


}
