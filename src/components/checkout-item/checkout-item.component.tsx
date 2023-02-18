import './checkout-item.styles.scss'
import { CartItem } from "../../types/CartItem";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.slice';
import { clearItemFromCart } from '../../store/cart/cart.slice';
import { removeItemFromCart } from '../../store/cart/cart.slice';

const CheckoutItem = (cartItem: CartItem) => {

    const { name, quantity, price, imageUrl } = cartItem;

    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

    const addItemHandler = () => dispatch(addItemToCart(cartItem));

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;