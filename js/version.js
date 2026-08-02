/*
Teal Castle Co
Version Tracker
*/


fetch("data/version.json")

.then(response => response.json())

.then(version => {


    document.getElementById("version").innerHTML =

    `
    Website Version: v${version.version}
    <br>
    Last Updated: ${version.releaseDate}
    `;



    /*
    Hidden developer information.
    Can be enabled later during troubleshooting.
    */


    console.log(
        "Teal Castle Co Build Information",
        version
    );


})

.catch(error => {


    document.getElementById("version").innerHTML =

    "Version unavailable";


    console.error(
        "Version loading error:",
        error
    );


});
