import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import NavBar from "./components/Nav/NavBar";

function App() {
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
      setFilteredData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  //console.log(data);
  const [filteredData, setFilteredData] = useState(data)
  //console.log(filteredData)
  const handleSearch = (location, totalGuests) => { 
    const filteredResults = data.filter((item)=>{
      return (
        (location === "" || item.city === location) &&
        (totalGuests === "" || item.maxGuests >= totalGuests)
      )
    })
    setFilteredData(filteredResults.length > 0 ? filteredResults : data);
  }
 

  return (
    <>
    <div className="principal-container">
    <NavBar onFilter={handleSearch} data={data}/>
    <main>
    <div className="Title">
      <h1 className="titulo-principal">Stays in Finland</h1>
      <span className="titulo-secundario">{filteredData.length > 12 ? '12+' : filteredData.length} stays</span>
    </div>

    <div className="cards-container">
      <Card data={filteredData} />
    </div>
    </main>
    </div>
    </>
  );
}

export default App;
