import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Error from './components/Error'
import Axios from 'axios';

function App() {

  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [sinImagenes, setSinImagenes] = useState(false)

  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)

  useEffect(() => {
    if (busqueda === '') return;
    const consultaApi = async () => {
      const ipp = 30
      const url = `https://pixabay.com/api/?key=18202644-f6430b032268bc6174e356a54&q=${busqueda}&per_page=${ipp}&page=${paginaActual}`

      const consulta = await Axios.get(url)
      setImagenes(consulta.data.hits)

      setTotalPaginas(Math.ceil(consulta.data.totalHits / ipp))
      if (consulta.data.totalHits === 0) setSinImagenes(true)

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' })

    }
    consultaApi()
  }, [busqueda, paginaActual])

  const pagAnterior = () => {
    const pagActual = paginaActual - 1;
    if (pagActual === 0) return
    setPaginaActual(pagActual)
  }

  const pagSiguiente = () => {
    const pagActual = paginaActual + 1;
    if (pagActual > totalPaginas) return
    setPaginaActual(pagActual)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Formulario
          setBusqueda={setBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        {
          sinImagenes ?
            <Error mensaje="no hay imagenes relacionadas con la busqueda" />
            :
            <Listado
              imagenes={imagenes}
            />
        }

        {
          paginaActual === 1 ? null : sinImagenes ? null :
            <button
              type="button"
              className="bbtn btn-info mr-1"
              onClick={pagAnterior}
            >&laquo; Anterior
          </button>
        }
        {
          paginaActual === totalPaginas ? null : sinImagenes ? null :
            <button
              type="button"
              className="bbtn btn-info mr-1"
              onClick={pagSiguiente}
            >Siguiente &raquo;
          </button>
        }

      </div>
    </div>
  );
}

export default App;
