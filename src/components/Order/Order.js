
import CartShow from '../CartShow/CartShow';
import "./Order.css"
const Order = (props) => {
    // console.log(props)
    const productArray = props?.selectedProduct;
    const { name, id } = props.luckyProduct;
    const toggoleButton = props.toggole;
    const displayProperty = props.display
    console.log(toggoleButton, displayProperty)
    // console.log(name, id)

    // const { name, price, image } = props.selectedProduct



    return (
        <div className='order-container'>
            <h1>Select Your Mobile</h1>

            <div className='cart-container'>
                {

                    productArray.map(singleProduct =>

                        <CartShow
                            key={singleProduct.id}
                            singleProduct={singleProduct}
                            deleteSingleProduct={props.deleteSingleProduct}
                        >

                        </CartShow>








                    )
                }


                <div id='btn-main-container' style={{ display: displayProperty }}>



                    <div id='btn-container' >
                        {

                            toggoleButton ? <button onClick={() => props.lotteryHandler("selected-btn")} id="selected-btn"
                                disabled={true}
                                className='lottery-btn'>Select For me</button> : <button onClick={() => props.lotteryHandler("selected-btn")} id="selected-btn"
                                    disabled={false}
                                    className='lottery-btn'>Select For me</button>
                        }



                        <button onClick={() => props.handleClearCart()} id="select-again" className='delte-btn'>Select Again</button>
                    </div>
                </div>
            </div>


            {

                id ?
                    <div style={{ display: displayProperty }} className='winner-text'>Congratulation you win {name}</div>
                    :
                    <div style={{ display: displayProperty }} className='loser-text'>{name}</div>
            }

        </div>
    );
};

export default Order;