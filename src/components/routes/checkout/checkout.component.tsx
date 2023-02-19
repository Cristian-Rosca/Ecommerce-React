import './checkout.styles.scss';
import CheckoutItem from '../../checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../../store/cart/cart.selector';
import { CartItem } from '../../../types/CartItem';
import PaymentForm from '../../payment-form/payment-form.component';

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                    
                </div>
                <div className='header-block'>
                    <span>Description</span>

                </div>
                <div className='header-block'>
                    <span>Quantity</span>

                </div>
                <div className='header-block'>
                    <span>Price</span>

                </div>
                <div className='header-block'>
                    <span>Remove</span>

                </div>
            </div>
            
                {
                    cartItems.map((cartItem : CartItem) => 
                        <CheckoutItem key={cartItem.id} id={cartItem.id} imageUrl={cartItem.imageUrl} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity}/>
                    )
                }
            <span className='total'>Total: €{cartTotal}</span>
            <PaymentForm />
        </div>
    );
}

export default Checkout;