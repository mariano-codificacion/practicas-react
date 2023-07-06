import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartImg.css'

const CartImg = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    const imgCarrito = "../assets/carrito.jpg";

    return (
        <div>
            <Link to="/cart">
                <div className='numCarrito'>
                    <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
                    {
                        cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                    }
                </div>
            </Link>
        </div>

    )
}

export default CartImg