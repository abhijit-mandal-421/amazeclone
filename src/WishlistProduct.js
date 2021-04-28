import React,{useContext} from 'react';
import './CheckoutProduct.css';
import {StateContext} from './GlobalStates';
import NumberFormat from 'react-number-format';



const WishlistProduct = ({ product_id, title, price, product_img }) => {

  const [state, dispatch] = useContext(StateContext);

  const deleteInWishlist = () => {
    dispatch({type: 'delete_in_wishlist',
              item: product_id
              })} 

  const addToCart = () => {
      dispatch({type: 'add_to_cart',
                item: product_id
                          })} 

    return (
          <div className="checkout_product">
           <img
            src={product_img}
            className="checkout_product_img"
                alt={title}
           />
        
           <div className="product_details">
            <div className="product_name">
            {title}
            </div>
        
            <div className="checkout_options"> <span onClick= {deleteInWishlist}> Delete </span>| <span onClick = {addToCart}> Add to Cart</span></div>
           </div>
        
            {/* <div className='product_price'> */}
            <NumberFormat renderText ={(value) =>  { return (<p className='product_price'>{value} </p>)} }

              decimalScale = {2} value = {price} displayType = {'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
            {/* </div> */}
          </div>
         );
}

export default WishlistProduct
