import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem as CartItemType} from '../../types/CartItem';


const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return ( 
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                { cartItems.length ? 
                cartItems.map((cartItem : CartItemType) => (
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