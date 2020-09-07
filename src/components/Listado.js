import React from 'react';
import Imagen from './Imagen'

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
 
export default Listado;