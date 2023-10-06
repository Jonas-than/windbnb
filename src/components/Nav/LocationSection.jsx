import React from 'react'
import './NavBar.css'

function LocationSection({location, ciudades, handleCiudadClick}) {
  return (
    <div className='location-options'>
            {ciudades.map((city, i)=>(
              <button key={i} className='btns-location' onClick={()=>handleCiudadClick(city)}><img src="./img/location_on_black_24dp.svg"/><span className='locations'>{city}, Finland</span></button>
            ))}
          </div>
  )
}

export default LocationSection