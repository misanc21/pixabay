import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Axios from 'axios';

function App() {

  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    if(busqueda === '') return;
    const consultaApi = async()=> {
      const ipp = 30
      const url = `https://pixabay.com/api/?key=18202644-f6430b032268bc6174e356a54&q=${busqueda}&per_page=${ipp}`

      const consulta = await Axios.get(url)
      setBusqueda(consulta.data.hits)
    }
    consultaApi()
  }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Formulario
          setBusqueda = {setBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
