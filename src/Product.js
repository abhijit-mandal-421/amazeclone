import React,{useContext} from 'react';
import "./Product.css";
import {StateContext} from './GlobalStates';


const Product = ({ product_id, title, product_img, price }) => {

    const [state, dispatch] = useContext(StateContext);

    // console.log(state);
    // https://www.geeksforgeeks.org/how-to-convert-set-to-array-in-javascript/
    var cart_set = new Set(state.cart)
    var cart_set_arr = Array.from(cart_set)

    var qty = state.cart.filter((item) => item === product_id).length;

    const addToCart = () => {
        // qty = 

        dispatch({type:'add_to_cart',
                    item: product_id,
                     })}

    return (
        <div className="product">
                <div className="product_info">
                  <p className="product_title"> {title}</p>  
                  <p><small>$</small><strong>{price}</strong></p>
                </div>
        <img src={product_img} alt="" className="product_img"/>
        <button className="add_cart" onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;
