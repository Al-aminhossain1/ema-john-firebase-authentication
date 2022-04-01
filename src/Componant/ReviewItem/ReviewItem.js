import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';



const ReviewItem = (props) => {
    const { product, handelRemoveProduct } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details' title={name}>
                <div>
                    <h3>{name.length > 20 ? name.slice(0, 10) + '...' : name}</h3>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Quantity:{quantity}</p>
                </div>
                <div className='delate-container'>
                    <button onClick={() => handelRemoveProduct(product)} className='delate-btn'><FontAwesomeIcon className='delate-icon' icon={faTrashAlt}></FontAwesomeIcon> </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;