import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Order from '../Order/Order';
import Products from '../Products/Products';

const Shop = () => {

    const [products, setProducts] = useState([]);


    const [selectedProduct, setSelectedProduct] = useState([]);
    const [luckyProduct, setLuckyProuduct] = useState({})

    const handleCart = (product) => {
        // console.log(selectedProduct.length, product)

        if (selectedProduct.length < 4) {
            if (selectedProduct.includes(product)) {

                alert("duplicate item")
            }
            else {
                const newProduct = [...selectedProduct, product]
                setSelectedProduct(newProduct)
            }
        }

        else {
            alert("cannot added more than 4 times")
        }

    }
    const emptyCart = () => {

        setSelectedProduct([])
    }

    const deleteSingleProduct = (singleProduct) => {
        //console.log("product delte", singleProduct)
        const filterItem = selectedProduct.filter(item => item.id !== singleProduct.id)
        setSelectedProduct(filterItem)
    }
    const lotteryHandler = (id) => {
        //  console.log("random item generate")\
        // if (id) {
        //     document.getElementById("selected-btn").disabled = true
        //     console.log("button clicked")
        // }



        const selectedItem = selectedProduct[Math.round(Math.random() * 5 - 1)];
        if (selectedItem === undefined) {
            const property = {
                name: "Better Luck Next Time"

            }
            setLuckyProuduct(property)
        }
        else {
            setLuckyProuduct(selectedItem)
        }
        //  console.log(selectedItem)
    }


    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    // useEffect(() => {








    // }, [selectedProduct, uniqueProduct])

    return (




        <div className='shop-container'>

            <div className='product-container'>

                {

                    products.map(product =>
                        <Products
                            product={product}
                            key={product.id}
                            handleEvent={handleCart}
                        >

                        </Products>)
                }
            </div>


            <Order
                selectedProduct={selectedProduct}
                key={Math.random() * 10}
                handleClearCart={emptyCart}
                deleteSingleProduct={deleteSingleProduct}
                lotteryHandler={lotteryHandler}
                luckyProduct={luckyProduct}


            ></Order>


        </div>



    );
};

export default Shop;