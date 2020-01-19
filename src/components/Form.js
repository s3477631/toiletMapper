import React, {Fragment, useState } from "react"
import styled from 'styled-components'
import axios from "axios"
 
const FormStyle = styled.div`
background: #bbb;
border-radius: 10px;
width: 50vw;
`
const FormElems = styled.ul`
list-style-type: none;
padding: 0px;
`
const InputElems = styled.li`
display: flex; 
justify-content: center;
padding: .5em;
 label { 
    padding: .5em 1em .5em 0;
    flex: 1;
 }
 input { 
     flex: 2;
 }
 input button { 
     padding: .5em;
 }
button { 
    background: green; 
    color: white; 
    border: 0;
    width: 100%;
    font-size: 8vh;
}
`


const Form = () => {
    const [newLocation, setNewLocation] = useState(
        {lat: '', lng: '', price: '', bedrooms: 0, bathrooms: 0, garageSpace: 0, propertyType: '', comments: ''}
    )

const handleChange = e => {
   setNewLocation({...newLocation, [e.target.name]: e.target.value })

}

const submitNewLocation = e => { 
    const api = axios.create({
        baseURL: 'http://localhost:3002/'
    })
 
    e.preventDefault()
    console.log(newLocation)
   api.post('/savelocation', newLocation)
    .then(function(response){
        console.log(response)})
    .catch(function(err){
        console.log(err)
    })
}



    return (
        <>
        <FormStyle>
        <h1>Enter Location</h1>
       <form onSubmit={submitNewLocation}> 
           <FormElems>
              <InputElems>
              <label htmlFor="lat"></label>
              <input type="text" id="lat" placeholder="Latitude:" name="lat" value={newLocation.lat} onChange={handleChange} />
              </InputElems>
              <InputElems>
              <label htmlFor="lng"></label>
              <input type="text" id="lng" placeholder="Longitude:" name="lng" value={newLocation.lng} onChange={handleChange} />
               </InputElems>
               <InputElems>
               <label htmlFor="price"></label>
               <input type="text" id="price" placeholder="Price ($)" name="price" value={newLocation.price} onChange={handleChange}/>
               </InputElems>
               <InputElems>
               <label htmlFor="Bedrooms">No: Bedrooms</label> 
               <select id="Bedrooms" onChange={handleChange} name="bedrooms" value={newLocation.bedrooms}>
                <option value={1} >1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={5}>4</option>
                <option value={6}>5</option>
                <option value={7}>+6</option>
                </select>
               </InputElems>
               <InputElems>
               <label htmlFor="Bathrooms">No: Bathrooms</label> 
               <select id="Bathrooms" onChange={handleChange} name="bathrooms" value={newLocation.bathrooms}>
               <option value={1} >1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={5}>4</option>
                <option value={6}>5</option>
                <option value={7}>+6</option>
                </select>
               </InputElems>
               <InputElems>
               <label htmlFor="GarageSpace">Garage Space</label> 
               <select id="GarageSpace" onChange={handleChange} name="garageSpace" value={newLocation.garageSpace}>
               <option value={1} >1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={5}>4</option>
                <option value={6}>5</option>
                <option value={7}>+6</option>
                </select>
               </InputElems>
               <InputElems>
               <label htmlFor="PropertyType">Property Type</label> 
               <select id="PropertyType" onChange={handleChange} name="propertyType" value={newLocation.propertyType}>
                <option value="Apartment/Unit">Apartment & Unit</option>
                <option value="House">House</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Villa">Villa</option>
                <option value="Land">Land</option>
                <option value="Acreage">Acreage</option>
                <option value="Rural">Rural</option>
                </select>
               </InputElems>
               <InputElems>
               <label htmlFor="comments">Comments:</label>
               <textarea rows="8" cols="50" type="text" id="comments" name="comments" onChange={handleChange} value={newLocation.comments}>
                   </textarea>
               </InputElems>
               <InputElems>
               <button type="submit">Submit</button>
               </InputElems>
        </FormElems>
       </form>
        </FormStyle>

       </>
    )
}

export default Form