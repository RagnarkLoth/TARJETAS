import React from "react";

const Cartas = ({tarjetas}) =>{

    return(

            
                tarjetas.map((tarjeta) => 
                    <div className="cartas" key={tarjeta.id}>
                        <div className="titulo">
                            <h1>{tarjeta.nombre}</h1>
                        </div>
                        <img src={tarjeta.imagen} alt={tarjeta.nombre}  className="imagen" id="idImagen" />                    
                    </div>
                )

                
    
        

    )

}

export default Cartas