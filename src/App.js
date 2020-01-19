import React, {Fragment, useReducer, useEffect} from 'react';
import Map from "./components/Map"
import stateReducer from './reducers/stateReducer'
import { StateContext } from './states/store'
import CurrentLocation from './components/LocationSetter'
import  Form from './components/Form'

import styled from 'styled-components'

const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const initialState = {
    center: {
      lat: 32.1,
      lng: 21
    },
    zoom: 3, 
    newPin: {lat: '', lng: '', price: '', bedrooms: 0, bathrooms: 0, garageSpace: 0, propertyType: '', comments: ''}
}

const  App = () => {
  const [store, dispatch] = useReducer(stateReducer, initialState)
 async function fetchLocation(){
    dispatch({
      type: "setUserLocation", 
      data: await CurrentLocation()
    })
  }
 function fetchHouses(){
    dispatch({
      type: "setPropertyLocations", 
      data: {lat: '32.212', lng: '12.22', price: '44,333', bedrooms: 1, bathrooms: 0, garageSpace: 0, propertyType: '', comments: ''}
    })
  }

  useEffect(() => { 
    fetchLocation()
    fetchHouses()  
  }, [])
 
  return (
    <>
    <StateContext.Provider value={{store, dispatch}}>
      <MapContainer>
      <Form/>
      <Map/>
      </MapContainer>
    </StateContext.Provider>
    </>
  );
}

export default App;
