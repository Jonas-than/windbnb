import React, { useState, useEffect } from 'react'

function NavBar({onFilter, data}) {

  const [shownav, setShownav] = useState(false)
  const [showoptionsLocation, setShowoptionsLocation] = useState(false)
  const [showguest, setShowguest] = useState(false)
  
  const [valorAdult, setValorAdult] = useState(0)
  const [valorChildren, setValorChildren] = useState(0)

  const [location, setLocation] = useState('Whole')
  

  const [showGuestsText, setShowGuestsText] = useState(true)

const handleFilterClick = () => {

  onFilter(location, total);
};

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
  


  const showContainer = (n)=>{
    setShowoptionsLocation(n === 1 );
    setShowguest(n === 2 );
  }
  

   const handleShow = ()=>{
      setShownav(!shownav)
      setShowoptionsLocation(!showoptionsLocation);
     
    }

  

  return (
    <>
    <div className='edit-search'>
    {shownav &&
      (<>
      <div className='container-edit-search'>
      <div className='container-close'>
       <h2 className='edit'>Edit your search</h2>
       <button className="btn-close" onClick={handleShow}></button>
       </div>
       <div className='btns-search'>
        <button className='btn-location' onClick={()=>showContainer(1)}><span className='btns-content'>Location</span><div className='btns-content-2 ' id='ubicacion'>{location}, Finland</div></button>
        <button className='btn-guest-nav' onClick={()=>showContainer(2)}><span className='btns-content'>Guests</span><div className='btns-content-2'>{total}</div></button>
        <button className='btn-search-nav' onClick={handleFilterClick}><img className="ico-search" src="./img/search_black_36dp.svg"/><span>Search</span></button>
        </div>
        
        {showoptionsLocation && (
          <>
          <div className='location-options'>
            {ciudades.map((city, i)=>(
              <button key={i} className='btns-location' onClick={()=>handleCiudadClick(city)}><img src="./img/location_on_black_24dp.svg"/><span className='locations'>{city}, Finland</span></button>
            ))}
          </div>
          </>
        )}

        {showguest && (
          <>
          <div className='guest-options'>
            <div className='guest-container'>
              <h2 className='guests-1'>Adult</h2>
              <span className='btns-content-2'>Age 13 or above</span>
              <div className='num-guest'>
                <button className='btn-o' onClick={() => actualizarValor('adult', 'sumar')}>+</button>
                <span>{valorAdult}</span>
                <button className='btn-o m-lg-2' onClick={() => actualizarValor('adult', 'restar')}>-</button>
              </div>
            </div>
            <div className='guest-container'>
              <h2 className='guests-1'>Children</h2>
              <span className='btns-content-2'>Age 2 - 12</span>
              <div className='num-guest'>
                <button className='btn-o' onClick={() => actualizarValor('children', 'sumar')}>+</button>
                <span>{valorChildren}</span>
                <button className='btn-o m-lg-2' onClick={() => actualizarValor('children', 'restar')}>-</button>
              </div>
            </div>
          </div>
          </>
        )}
        </div>
        </>
      )}
      
    </div>
    <header className="encabezado">
    <div>
      <img className="logo" src="./img/logo.principal.svg" alt="logo"/>
    </div>
    <nav className="navbar">
    <button className="btn-country" onClick={handleShow}><span className="country">{location},Finlad</span></button>
    <button className="btn-guest" onClick={handleShow}><span className="guests">{showGuestsText ? 'Add guests' : `${total}`}</span></button>
    <button className="btn-search" onClick={handleFilterClick} ><img className="ico-search" src="./img/search_black_24dp.svg" alt="" /></button>
    </nav>
    </header>
      
    </>
  )
}

export default NavBar