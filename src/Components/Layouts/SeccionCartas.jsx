import React, {useEffect, useState} from "react";
import Cartas from "./Cartas";
import tarjetas from '../../helpers/tarjetas.json'

const SeccionCartas = () => {

    const[cambio, setCambio] = useState(false)
    const[texto, setTexto] = useState("DESACTIVADO")
    const[tarjetasOne] = useState(tarjetas.tarjetas)

    useEffect(() => {
        
        const imagen = []
    
        tarjetasOne.map((tarjeta) => 
             imagen.push(document.querySelector("#" + tarjeta.nombre))
        )

        console.log(imagen)

        if(cambio){

            imagen.forEach(element => {
                element.classList.remove("imagen")
                element.classList.add("imagenPersonalizado") 
            });

        }else{
            
            imagen.forEach(element => {
                element.classList.remove("imagenPersonalizado")
                element.classList.add("imagen")
            })
        }

    },[cambio])

    const precionar = () => {
        if(cambio){
            setCambio(false)
            setTexto("DESACTIVADO")
        }else{
            setCambio(true)
            setTexto("ACTIVADO")
        }
    
    }

    return(

        <section>

            <Cartas tarjetas={tarjetasOne}/>

            <button onClick={precionar}>{texto}</button>

        </section>

    )

}

export default SeccionCartas