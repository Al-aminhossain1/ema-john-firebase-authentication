import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const Tax = parseFloat((total * 0.1).toFixed(2))
    const GrandTotal = total + shipping + Tax;
    return (
        <div className='order-summery'>
            <h2>Order summary</h2>
            <h5>Count order:{cart.length}</h5>
            <p>Total Price:${total}</p>
            <p>Shipping Charge:${shipping}</p>
            <p>Tax:${Tax}</p>
            <h4>GrandTotal:{GrandTotal}</h4>
        </div>
    );
};

export default Cart;