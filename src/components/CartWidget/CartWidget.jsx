import {useNavigate } from 'react-router-dom';
import { useCartContext } from '../../state/Cart.context'
import cart from '../Assets/carrito.svg'

export const Cartwidget = () => {
    const {getCartQty} = useCartContext();
    const navigate = useNavigate ();
    return(
    <div className="cart-widget" onClick={() => navigate ("/cart")}>
        <img className='carrito' src={cart} alt='cart'/> <span className="cart_widget_qty">({getCartQty()})</span>

        </div>
        );
}