import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Order from '../Order/Order';
import Products from '../Products/Products';

const Shop = () => {

    const [products, setProducts] = useState([]);
    //for fetch prudcts data and show to the url.this functionality is working in 73 number line.
    const [toggole, setToggole] = useState(false)
    // dependent on select for me and select again button for toggoling the select for me button,that  means to  disable the button or not.

    const [selectedProduct, setSelectedProduct] = useState([]);
    //for using to show the selected product when clicking the add to cart button and then display the selected product on the select your mobile section.this functionality handle handleCart method in 18 number line.
    const [luckyProduct, setLuckyProuduct] = useState({})
    //to select one product for user when he or she clicked select for me button.this functionality handle lotteryHandler method. in 49 number line

    const [display, setDisplay] = useState("none")

    const handleCart = (product) => {
        console.log(selectedProduct.length, product)

        setDisplay("block")
        //this condition apply beacause user cannot use more than 4 product.

        if (selectedProduct.length < 4) {
            //this conditon apply because if user click to the same product than it will give a message "duplicate item"
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

    //   if  user click to the select Again button than the product will be gone from the select your mobile section UI.
    const emptyCart = () => {

        setSelectedProduct([])
        setToggole(false);
        setDisplay("none")


    }

    //this method is use for deleting single product from the select your mobile section in UI
    const deleteSingleProduct = (singleProduct) => {
        //console.log("product delte", singleProduct)
        const filterItem = selectedProduct.filter(item => item.id !== singleProduct.id)
        setSelectedProduct(filterItem)
    }
    //this method handle the lottery handler means after selecting the products when user click the select for me button it will chose randomly one product for user.
    const lotteryHandler = (id) => {
        //  console.log("random item generate")\
        // if (id) {
        //     document.getElementById("selected-btn").disabled = true
        //     console.log("button clicked")
        // }


        setToggole(true)

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
                toggole={toggole}
                display={display}


            ></Order>


        </div>



    );
};

export default Shop;