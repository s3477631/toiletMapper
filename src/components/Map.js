import React from 'react'
import { GoogleMap, LoadScript, MarkerClusterer, Marker, OverlayView } from '@react-google-maps/api'
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

      const onClick = e => {
        console.log(e)
          e.preventDefault()
      
        console.info('I have been clicked!')
      };
      

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
      <OverlayView
      position={{lat: parseFloat(latitude),lng: parseFloat(longitude)}}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div
        style={{
          background: `#bbb`,
          border: `1px solid #ccc`,
          padding: 15
        }}
      >
        <h1>Add Property</h1>
        <form> 
            Address: 
        <input type="text" name="address" />
        <button onClick={onClick}>Add Point</button>
        </form>
      </div>
    </OverlayView>
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