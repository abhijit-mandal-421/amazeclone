import React,{useContext} from 'react';
import './CheckoutProduct.css';
import {StateContext} from './GlobalStates';
import Product_data from './Product_data';
import OrderProduct from "./OrderProduct.js";



const Orders = () => {
    
    const [state,dispatch] = useContext(StateContext);
    // console.log(state.order)
    return (
        <div className = 'checkout'>
            <div className = 'left_checkout'>
                
                {state.order.length > 0? <><h1 style = {{textAlign : 'center'}}> Your Orders</h1>
                {state.order.map((item)=>{return(
                    Product_data.filter((product)=> product.id === item).map((product_display)=>{

                        return(<>
                        <OrderProduct  product_id={item} title={product_display.title} price={product_display.price} product_img={product_display.product_img} />
                            
                            </>)
                        
                }))})} </>: <h1 className = 'no_items'>No Items Ordered</h1>
                
                }

            </div>
            
</div>
            
        
    )
}

export default Orders;
