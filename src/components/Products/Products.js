import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    const { name, price, image } = props.product;


    return (
        <div className='product-info'>


            <img src={image} alt="" />
            <div className='product-text'>

                <p>Name:{name}</p>
                <p>Price:{price}</p>
            </div>

            <button onClick={() => props.handleEvent(props?.product)} className='btn-cart'>

                <span className='btn-text'>Add to Cart</span>
                <FontAwesomeIcon icon={faShoppingCart} transform="shrink-6 left-4" />

            </button>
        </div>
    );
};

export default Products;