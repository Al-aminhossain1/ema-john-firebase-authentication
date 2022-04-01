import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/UseCart';
import useProducts from '../../hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css'

const OrderReview = () => {
    const [products, setProducts] = useProducts([]);
    const [cart, setCart] = useCart(products)

    const handelRemoveProduct = product => {

        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='review-product'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoveProduct={handelRemoveProduct}>
                    </ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to={"/inventory"}>
                        <button>Procced Cheakout</button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default OrderReview;