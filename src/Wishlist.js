import React,{useContext} from 'react';
import './CheckoutProduct.css';
import WishlistProduct from './WishlistProduct';
import {StateContext} from './GlobalStates';
import Product_data from './Product_data';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';



const Wishlist = () => {
    // console.log(state.cart)
    const [state,dispatch] = useContext(StateContext);
    console.log('wishlist')
    console.log(state.wishlist)

    var wish_subtotal=0;
    
    return (
        <div className = 'checkout'>
            <div className = 'left_checkout'>
                <h2>Shopping Wish List</h2>
                {state.wishlist.length > 0? state.wishlist.map((item)=>{return(
                    Product_data.filter((product)=> product.id === item).map((product_display)=>{
                        console.log(item, product_display)
                        wish_subtotal = wish_subtotal + product_display.price;

                        return(<>
                        <WishlistProduct product_id={item} title={product_display.title} price={product_display.price} product_img={product_display.product_img} />
                            <hr />
                            </>)
                }))}) : <div>No Items in Wishlist</div>
                
                }

            </div>
            
            <div className="right_checkout">

            <NumberFormat renderText ={(value) =>  { return (
                <p>
            Subtotal ( <strong>{state.wishlist.length}</strong> ) : <strong>{value}</strong>
            </p>
            )} }

              decimalScale = {2} value = {wish_subtotal} displayType = {'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
                {/* wish_Subtotal = <strong>{state.wishlist.length}</strong>  */}

                <Link to='checkout'>Go to Checkout</Link>
            </div>
</div>
            
        
    )
}

export default Wishlist;
