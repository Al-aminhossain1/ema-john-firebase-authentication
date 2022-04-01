import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Products.css'
const Products = ({ handelAddToCart, product }) => {
    const { name, seller, price, ratings, img } = product;

    return (
        <div className='products'>

            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Seller:{seller}</p>
                <p>Price:${price}</p>
                <p>Ratings:{ratings}</p>
            </div>
            <button onClick={() => handelAddToCart(product)} className='cart-button'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;