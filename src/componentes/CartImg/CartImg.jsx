import './CartImg.css'

const CartImg = () => {
    const imgCarrito = "public/assets/carrito.jpg";
    return (
        <div className='numcarrito'>
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
            <strong> 10 </strong>
        </div>
    )
}

export default CartImg