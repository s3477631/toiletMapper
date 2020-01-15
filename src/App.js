import React, {Fragment, useReducer, useEffect} from 'react';
import Map from "./components/Map"
import stateReducer from './reducers/stateReducer'
import { StateContext } from './states/store'
import CurrentLocation from './components/LocationSetter'

const initialState = {
    center: {
      lat: 32.1,
      lng: 21
    },
    zoom: 3
}


const  App = () => {
  const [store, dispatch] = useReducer(stateReducer, initialState)
 async function fetchLocation(){
    dispatch({
      type: "setUserLocation", 
      data: await CurrentLocation()
    })

  }

  useEffect(() => { 
    fetchLocation()
  }, [])

  return (
    <>
    <StateContext.Provider value={{store, dispatch}}>
      <Map/>
    </StateContext.Provider>
    </>
  );
}

export default App;
