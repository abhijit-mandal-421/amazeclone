import React,{useContext} from 'react';
import './CheckoutProduct.css';
import CheckoutProduct from './CheckoutProduct';
import {StateContext} from './GlobalStates';
import Product_data from './Product_data';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
// import CurrencyFormat from 'react-currency-format';

// https://www.npmjs.com/package/react-number-format
import NumberFormat from 'react-number-format';


const Checkout = () => {
    // console.log(state.cart)
    const [state,dispatch] = useContext(StateContext);

    // Creating a new set for getting quantities of item using map and filter function
    // var cart_set = state.cart.filter((item) => {});

    // https://www.geeksforgeeks.org/how-to-convert-set-to-array-in-javascript/
    var cart_set = new Set(state.cart)
    var cart_set_arr = Array.from(cart_set)

    // const Total = () => {
    //     state.
    // }

    console.log(Array.from(cart_set))
    console.log('cart lenght',state.cart.length)

    var qty=0;
    var subtotal=0;

    const add_to_order = () => {
        
        dispatch({type: 'add_to_order',
                  cart : [...state.cart]})
    }
    

    console.log(state.cart)
    return (
        <div className = 'checkout'>
            <div className = 'left_checkout'>
                
                {state.cart.length > 0? <><h2>Shopping Cart <small>Price</small></h2>
                {cart_set_arr.map((item)=>{return(
                    Product_data.filter((product)=> product.id === item).map((product_display)=>{
                        console.log(item, product_display)
                        qty = state.cart.filter((cart_item) => cart_item === item).length;
                        subtotal = subtotal + qty *product_display.price;
                        return(<>
                        <CheckoutProduct qty = {qty} product_id={item} title={product_display.title} price={product_display.price} product_img={product_display.product_img} />
                            </>)
                        
                }))})} </>: <h1 className = 'no_items'>No Items in Cart</h1>
                
                }

            </div>
            
            <div className = 'right_checkout1'>
            <div className="right_checkout">
                {subtotal > 2000 ? 
                <span className ='free_delivery'><CheckCircleIcon className = 'checkicon'/> Your Order is eligible for FREE delivery</span> : 
                <span className ='free_delivery'><CancelIcon className = 'cancelicon'/> Your Order is not eligible for FREE delivery<br/> Minimum order should be ₹2,000</span>}
            {/* https://www.npmjs.com/package/react-number-format */}
            <NumberFormat renderText ={(value) =>  { return (
                <p>
                Subtotal ( <strong>{state.cart.length}</strong> 
                {state.cart.length > 1? ' items': ' item'}) :  <strong>{value}</strong>
                </p>
                )} }

            decimalScale = {2} value = {subtotal} displayType = {'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'}/>
                 {/* Subtotal ( <strong>{state.cart.length}</strong> ) :  <strong>{format.format(subtotal)}</strong> */}

                <button className="checkout_btn" onClick = {add_to_order}>Proceed to Buy</button>
                <Link to='wishlist'>Go to Wishlist</Link>
            </div>
            </div>
</div>
            
        
    )
}

export default Checkout;
