
import { addToDb, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import useProducts from '../../hooks/UseProducts';
import useCart from '../../hooks/UseCart'
import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products)



    const handelAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)

    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}>
                    </Products>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}><Link to="/review">
                    <button>Review Order</button>
                </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;