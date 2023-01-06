import './checkout.styles.scss';
import {  useContext } from 'react';
import { CartContext } from '../../../contexts/cartContext';
import CheckoutItem from '../../checkout-item/checkout-item.component';

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);
    
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
                    cartItems.map((cartItem) => 
                        <CheckoutItem key={cartItem.id} id={cartItem.id} imageUrl={cartItem.imageUrl} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity}/>
                    )
                }
            <span className='total'>Total: €{cartTotal}</span>
        </div>
    );
}

export default Checkout;