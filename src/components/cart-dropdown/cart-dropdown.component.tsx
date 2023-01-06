import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cartContext';
import { useContext } from 'react';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return ( 
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                { cartItems.length ? 
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem}/>
                ))
                :
                <span className='empty-message'>Your cart is empty</span>
                }

            </div>
            <Button buttonType='inverted' inputOptions={{onClick: goToCheckoutHandler}}>Checkout</Button>
        </div>
     );
}
 
export default CartDropdown;