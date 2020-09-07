import React from 'react';

const Imagen = ( {contenido} ) => {

    const {largeImageURL, likes, previewURL, tags, views} = contenido
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} classname="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>
                <div className="card-footer">
                    <a 
                        href={largeImageURL} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >
                        Ver imagen
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Imagen;