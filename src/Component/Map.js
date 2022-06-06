import React, { useState,useRef,useEffect } from 'react'
import { MapContainer, TileLayer,Marker } from 'react-leaflet';
//import { Icon} from "leaflet"
import parkdata from "./park.json"
import { GeoSearchControl } from "leaflet-geosearch";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css"

function Map() {
 
const mapRef= useRef()
  
 useEffect(() => {
    const { current = {}
    } = mapRef
    const { map} = current
    if (!map) return
    const control = GeoSearchControl
     control.addTo(map)
    
  },[])

    const container = {
        width: "1000px",
        height: "500px",
        alignItems: "center",
        margin:"50px"
  }

  
    const header = {
     alignItems: "center"
    }
    const [coordinates, setCoordinate] = useState({latitude:0,longitude:0})
   
   const onChangeCoordinate = (e) => {
       setCoordinate({ ...coordinates, [e.target.name]:e.target.value})
  }
  
    return (
      
      <div style={header}>
         <div>
            <label>latitude</label>
              <input type="text" name="latitude" value={coordinates.latitude} onChange={ onChangeCoordinate} />
          </div>
          <div>
          <label>longitude</label>
          <input type="text" name="longitude" value={coordinates.longitude} onChange={onChangeCoordinate} />
        </div>
      
   
        <MapContainer whenCreated={(mapInstance) => {mapRef.current=mapInstance}} style={ container} center={[45.2303, -75.46856]} zoom={9} scrollWheelZoom={true}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
                <Marker position={[coordinates.latitude, coordinates.longitude]} />
                
        {parkdata.features.map(park => (
                  <Marker key={park.properties.PARK_ID } position={[park.geometry.coordinates[1],park.geometry.coordinates[0]]} />
))} 
         
        </MapContainer>
        <br></br>
        
    </div>
  )
}

export default Map