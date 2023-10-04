import React from 'react'

export default function Geolocation() {
    var x = document.getElementById("demo");

    let getLocation=()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    let showPosition=(position)=> {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
    return (
        <>
            <p id="demo"></p>
            <button onClick={() => getLocation()}>Try It</button>
        </>
    )
}
