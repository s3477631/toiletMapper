import React from 'react'
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api'
import { useGlobalState } from '../states/store';
const Map = () => {
    const {store} = useGlobalState()
    const {center} = store
    const {latitude, longitude} = center
    const {zoom} = store
 
 
    const locations = [
        {lat:  parseFloat(-27.460989), lng: parseFloat(153.024654)},
        {lat:  parseFloat(-27.450989), lng: parseFloat(153.044654)},
        {lat:  parseFloat(-27.465989), lng: parseFloat(153.024654)},
        {lat:  parseFloat(-27.460389), lng: parseFloat(153.024454)},
        {lat:  parseFloat(-27.465989), lng: parseFloat(153.024254)},
      ];
      
      const options = { 
        imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" 
      }

      
    return (
<LoadScript
id="script-loader"
googleMapsApiKey={process.env.REACT_APP_MAP_KEY}
>
  <GoogleMap
    id="marker-example"
    mapContainerStyle={{height:'100vh', width: '100vw'}}
    zoom={zoom}
    center={{lat: parseFloat(latitude),lng: parseFloat(longitude)}}
  >
    <MarkerClusterer
      options={options}
    >
      {
        (clusterer) => locations.map((location, i) => (
          <Marker
            key={i}
            position={location}
            clusterer={clusterer}
          />
        ))
      }
      </MarkerClusterer>
      </GoogleMap>
      </LoadScript>
       )



}
    







 
export default Map;