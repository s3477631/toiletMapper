import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { useGlobalState } from '../states/store';

const Map = () => {
    const {store} = useGlobalState()
    const {center} = store
    const {latitude, longitude} = center
    const {zoom} = store
    return (
        <LoadScript
          id="script-loader"
          googleMapsApiKey={process.env.REACT_APP_MAP_KEY}
        >
          <GoogleMap
            id='example-map'
            mapContainerStyle={{height:'100vh', width: '100vw'}}
            center={{lat: parseFloat(latitude),lng: parseFloat(longitude)}}
            zoom={zoom}
          >
            
          </GoogleMap>
        </LoadScript>
       )



}
    







 
export default Map;