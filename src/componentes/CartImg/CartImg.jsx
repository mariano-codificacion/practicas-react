import './CartImg.css'

const CartImg = () => {
    const imgCarrito = "../assets/carrito.jpg";
    return (
        <div className='numCarrito'>
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
            <strong> 10 </strong>
        </div>
    )
}

export default CartImg