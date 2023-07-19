import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'

//Primer paso: IMPORTEMOS

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';



const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext:
    const {agregarProducto} = useContext(CarritoContext);
  //
  

  const manejadorCantidad = (cantidad)  => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div className='card-producto text-center'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, itaque iste. Autem ducimus eaque consequatur magnam numquam adipisci non omnis. </p>
        <img className='img-producto' src={img} alt={nombre} />
  
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Pedido </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    
    </div>
  )
}

export default ItemDetail