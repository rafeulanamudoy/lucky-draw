import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./CartShow.css"
const CartShow = (props) => {

    const { name, price, image } = props.singleProduct;
    const deleteSingleProduct = (singleProduct) => {
        console.log("product delte", singleProduct)

    }
    return (
        <div className='cart-info'>
            <img src={image} alt="" />
            <p>{name}</p>

            <button onClick={() => props?.deleteSingleProduct(props.singleProduct)} className='cart-btn'>

                <FontAwesomeIcon icon={faTrash} />
            </button>


        </div>
    );
};

export default CartShow;