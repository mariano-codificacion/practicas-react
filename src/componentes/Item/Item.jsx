import './Item.css'
import { NavLink } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto text-center'>
        <img className='imgProducto' src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio:{precio} </p>
        <p>ID: {id} </p>
        <NavLink to={`/item/${id}`} className='btnProducto'> Ver Detalles </NavLink>
    </div>
  )
}

export default Item