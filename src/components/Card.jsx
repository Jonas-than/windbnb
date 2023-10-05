import React, { useState, useEffect } from 'react'


function Card() {

  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
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

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  return (
    <>
    {data.map((el, i) => {
        return( 
        <>
        <div className="card-container" key={i}>
          <div className="img-container">
          <img className="card-img" src={el.photo} />
          </div>
            <div className="title-container">
            <div>
           {el.superHost === true ? <span className="superhost">SUPER HOST</span> : ''}
            <span key={i} className="text-type">{el.type}. {el.beds} beds</span>
            </div>
              <div className="star-container">
              <img className="ico-star" src="./img/star_black_24dp.svg"/>
              <span className="rating">{el.rating}</span>
              </div>
            </div>
            <div className="text-title">{el.title}</div>
        </div>
        
        </>);
      })} 
    </>
  )
}

export default Card