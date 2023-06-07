import './CartImg.css'

const CartImg = () => {
    const imgCarrito = "src/assets/carrito.jpg";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
            <strong> 10 </strong>
        </div>
    )
}

export default CartImg