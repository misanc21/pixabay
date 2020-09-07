import React, { useState } from 'react';
import PropTypes from 'prop-types'

import Error from './Error'

const Formulario = ( {setBusqueda, setChangeSubmit, changeSubmit} ) => {

    const [termino, setTermino] = useState('')
    const [error, setError] = useState(false)

    const buscarimagenes = e => {
        e.preventDefault();

        if(termino.trim() === ''){
            setError(true)
            return
        }
        setError(false)
        setBusqueda(termino)
        changeSubmit ? setChangeSubmit(false) : setChangeSubmit(true)
    }

    return (
        <form
            onSubmit = {buscarimagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen"
                        onChange= {e => setTermino(e.target.value)}
                        value={termino}
                    />
                </div>
                <div className="form-group col-md-4">
                    <button
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                    >
                        Buscar
                    </button>
                </div>
            </div>
            {error ? <Error mensaje="agrega un termino de busqueda"/> : null}
        </form>
    )
}

Formulario.propTypes = {
    setBusqueda: PropTypes.func.isRequired
}

export default Formulario;