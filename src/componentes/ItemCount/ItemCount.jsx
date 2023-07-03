import { useState } from "react";
import './ItemCount.css'

//Paso 1, tenemos que trabajar con un estado. En este caso el estado va a ser un numerito con el número de productos seleccionados por el cliente. Tenemos un Hook que nos permite crear un estado y se llama "useState"

//Paso 2, necesito importar "useState"
const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }


    return (
        <div>
            <div className="cont">
                    <button className="menos" onClick={decrementar}> - </button>
                    <p className="num" > {contador} </p>
                    <button className="mas" onClick={incrementar}> + </button>
            </div>
            <h6>Disponibles: {stock}</h6>
            <button className="btnAgregar" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </div>
    )
}



export default ItemCount
