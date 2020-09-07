import React from 'react';

const Error = ({mensaje}) => {
    return ( 
    <p className="my-3 p-4text-center text-red alert alert-danger">{mensaje}</p>
    );
}
 

export default Error;