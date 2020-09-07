import React from 'react';
import Imagen from './Imagen'
import PropTypes from 'prop-types'

const Listado = ( { imagenes } ) => {
    return (  
        <div className="col-12 p-5 row">
            {imagenes.map(im => (<Imagen 
                key={im.id}
                contenido = {im}
            />
            ))}
        </div>
    );
}
 
Listado.propTypes = {
    imagenes: PropTypes.array.isRequired
}
export default Listado;