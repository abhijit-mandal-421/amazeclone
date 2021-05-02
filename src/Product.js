import React,{useContext} from 'react';
import "./Product.css";
import {StateContext} from './GlobalStates';
import NumberFormat from 'react-number-format';

const Product = ({ product_id, title, product_img, price }) => {

    const [state, dispatch] = useContext(StateContext);

    const addToCart = () => {
        dispatch({type:'add_to_cart',
                    item: product_id,
                     })}

    return (
        <div className="product">
                <div className="product_info">
                  <p className="product_title"> {title.length < 135 ? title : title.slice(0,135) + '...'  } </p>  

                  <NumberFormat renderText ={(value) =>  { return (
                    <strong> <big> {value} </big></strong>
                    )} }
                    decimalScale = {2} value = {price} displayType = {'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
                
                </div>
        <img src={product_img} alt="" className="product_img"/>
        <button className="add_cart" onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;
