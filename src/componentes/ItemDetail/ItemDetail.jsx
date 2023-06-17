import './ItemDetail.css'

const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div className='card-producto text-center'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, itaque iste. Autem ducimus eaque consequatur magnam numquam adipisci non omnis. </p>
        <img className='img-producto' src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail