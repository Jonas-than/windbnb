import React, { useState } from 'react'
import LocationSection from './LocationSection'
import GuestSection from './GuestSection'
import './NavBar.css'


function NavBar({onFilter, data}) {
  
  const [valorAdult, setValorAdult] = useState(0)
  const [valorChildren, setValorChildren] = useState(0)

  const [location, setLocation] = useState('Whole')
  

  const [showGuestsText, setShowGuestsText] = useState(true)

  const [searchClicked, setSearchClicked] = useState(false)
  const [showOptions, setShowOptions] = useState(0);
  const OPTIONS = {
    NONE: 0,
    LOCATION: 1,
    GUESTS: 2
  }

const handleFilterClick = () => {

  onFilter(location, total);
  setSearchClicked(true)
  hideOptions();
};

const hideOptions = () => {
  setSearchClicked(false)
  setShowOptions(OPTIONS.NONE);
}

const showLocationOptions = () => {
  setSearchClicked(true)
  setShowOptions(OPTIONS.LOCATION);
}

const showGuestOptions = () => {
  setSearchClicked(true)
  setShowOptions(OPTIONS.GUESTS);
}


  const obtenerCiudadesUnicas = () =>{
    const ciudadesUnicas = [...new Set(data.map((obj)=>obj.city))];
    return ciudadesUnicas
  }

  const ciudades = obtenerCiudadesUnicas();
  
  const handleCiudadClick = (ciudad) =>{
    setLocation(ciudad)
  }

  const actualizarValor = (type, operation) =>{
    if(type === 'adult' && operation === 'sumar'){
      setValorAdult(valorAdult + 1);
      setShowGuestsText(false)
    }else if(type === 'adult' && operation === 'restar' && valorAdult > 0){
      setValorAdult(valorAdult - 1);
      setShowGuestsText(false)
    }else if(type === 'children' && operation === 'sumar'){
      setValorChildren(valorChildren + 1);
      setShowGuestsText(false)
    }else if(type === 'children' && operation === 'restar' && valorChildren > 0){
      setValorChildren(valorChildren - 1);
      setShowGuestsText(false)
    }
  }

  const total = valorAdult + valorChildren;
  

  return (
    <>
    <div className='edit-search'>
    {searchClicked &&
      (
      <div className='container-edit-search'>
      <div className='container-close'>
       <h2 className='edit'>Edit your search</h2>
       <button className="btn-close" onClick={hideOptions}></button>
       </div>
       <div className='btns-search'>
        <button className='btn-location' onClick={showLocationOptions}><span className='btns-content'>Location</span><div className='btns-content-2 ' id='ubicacion'>{location}, Finland</div></button>
        <button className='btn-guest-nav' onClick={showGuestOptions}><span className='btns-content'>Guests</span><div className='btns-content-2'>{total}</div></button>
        <button className='btn-search-nav' onClick={handleFilterClick}><img className="ico-search" src="img/search_black_36dp.svg"/><span className='span-search'>Search</span></button>
        </div>
        
        {showOptions === OPTIONS.LOCATION && ( <LocationSection location={location} ciudades={ciudades} handleCiudadClick={handleCiudadClick} />
        )}

        {showOptions === OPTIONS.GUESTS && ( <GuestSection valorAdult={valorAdult} valorChildren={valorChildren} actualizarValor={actualizarValor}/>
        )}
        </div>
      )}
      
    </div>
    <header className="encabezado">
    <div>
      <img className="logo" src="img/logo.principal.svg" alt="logo"/>
    </div>
    <nav className="navbar">
    <button className="btn-country" onClick={showLocationOptions}><span className="country">{location},Finlad</span></button>
    <button className="btn-guest" onClick={showGuestOptions}><span className="guests">{showGuestsText ? 'Add guests' : `${total}`}</span></button>
    <button className="btn-search" onClick={handleFilterClick} ><img className="ico-search" src="img/search_black_24dp.svg" alt="" /></button>
    </nav>
    </header>
    </>
  )
}

export default NavBar