import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useGlobalState } from '../states/store';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 

const Map = props => { 
    const {store} = useGlobalState()
    const {center} = store
    const {zoom} = store
 
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY}}
          center={{lat: center.latitude,lng: center.longitude}}
          zoom={zoom}
        >
            
          <AnyReactComponent
            lat={center.latitude}
            lng={center.longitude}
            text={`${zoom}`}
          />
        </GoogleMapReact>
      </div>
    )
}
 
export default Map;