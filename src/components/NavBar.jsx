import React, { useState, useEffect } from 'react'

function NavBar() {

  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
 }, []);

 const handleSearch = ()=>{
  
 }


  const [shownav, setShownav] = useState(false)
  const [showoptionsLocation, setShowoptionsLocation] = useState(false)
  const [showguest, setShowguest] = useState(false)
  const [valorAdult, setValorAdult] = useState(0)
  const [valorChildren, setValorChildren] = useState(0)
  const [filtered, setFiltered] = useState(data)
  const [location, setLocation] = useState('Whole')

  // const filtrarDatos = () => {
  //   let filteredData = [...data];
  //   if(data.city !== ''){
  //     filteredData = filteredData.filter((obj)=> obj.city === city);
  //   }
  //   if(data.maxGuests !== ''){
  //     filteredData = filteredData.filter(
  //       (obj) => obj.maxGuests >= parseInt(obj.maxGuests) )
  //   }
  //   setFiltered(filteredData)
  // }

  // useEffect(()=>{
  //   filtrarDatos();
  // },[data.city, data.maxGuests])



  const handleLocation = (i)=>{
    setLocation(data[0].city)
  }

  const sumarAdult = ()=>{
    setValorAdult(valorAdult + 1);
  }

  const restarAdult = ()=>{
    if(valorAdult >0){
      setValorAdult(valorAdult - 1);
    }
  }

  const sumarChildren = ()=>{
    setValorChildren(valorChildren + 1);
  }

  const restarChildren = ()=>{
    if(valorChildren >0){
      setValorChildren(valorChildren - 1);
    }
  }

  const showContainer = (n)=>{
    if(n===1){
      setShowoptionsLocation(true);
      setShowguest(false);
      //handleShow()
    }else if(n===2){
      setShowoptionsLocation(false);
      setShowguest(true);
      //handleShow()
    }
  }

  const handleShow = ()=>{
    setShownav(!shownav)
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
        <button className='btn-guest-nav' onClick={()=>showContainer(2)}><span className='btns-content'>Guests</span><div className='btns-content-2'>{valorAdult+valorChildren}</div></button>
        <button className='btn-search-nav'><img className="ico-search" src="./img/search_black_36dp.svg"/><span>Search</span></button>
        </div>
        {showoptionsLocation && (
          <>
          <div className='location-options'>
            <button className='btns-location' onClick={handleLocation}><img src="./img/location_on_black_24dp.svg"/><span className='locations'>{data[0].city}, Finland</span></button>
            <button className='btns-location'><img src="./img/location_on_black_24dp.svg"/><span className='locations'>{data[1].city}, Finland</span></button>
            <button className='btns-location'><img src="./img/location_on_black_24dp.svg"/><span className='locations'>{data[5].city}, Finland</span></button>
            <button className='btns-location'><img src="./img/location_on_black_24dp.svg"/><span className='locations'>{data[7].city}, Finland</span></button>
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
                <button className='btn-o' onClick={sumarAdult}>+</button>
                <span>{valorAdult}</span>
                <button className='btn-o m-lg-2' onClick={restarAdult}>-</button>
              </div>
            </div>
            <div className='guest-container'>
              <h2 className='guests-1'>Children</h2>
              <span className='btns-content-2'>Age 2 - 12</span>
              <div className='num-guest'>
                <button className='btn-o' onClick={sumarChildren}>+</button>
                <span>{valorChildren}</span>
                <button className='btn-o m-lg-2' onClick={restarChildren}>-</button>
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
    <button className="btn-country" onClick={handleShow}><span className="country">Whole,Finlad</span></button>
    <button className="btn-guest" onClick={handleShow}><span className="guests">Add guests</span></button>
    <button className="btn-search" onClick={handleShow} ><img className="ico-search" src="./img/search_black_24dp.svg" alt="" /></button>
    </nav>
    </header>
      
   {/* {filtered.map((objeto) => (
          <li key={objeto.title}>
            {objeto.title} - Ciudad: {objeto.city}, Máximo de Huéspedes:{' '}
            {objeto.maxGuests}
          </li>
        ))} */}
    </>
  )
}

export default NavBar