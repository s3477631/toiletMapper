import React, { useState } from "react"

const CurrentLocation = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
  
  CurrentLocation()
    .then((position) => {
    let center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
              }
    })
    .catch((err) => {
      console.error(err.message);
    });



export default CurrentLocation