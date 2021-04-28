import React,{useContext} from 'react';
import './CheckoutProduct.css';
import {StateContext} from './GlobalStates';
// import CurrencyFormat from 'react-currency-format';
import NumberFormat from 'react-number-format';
// import Product_data from './Product_data';


const CheckoutProduct = ({qty, product_id, title, price, product_img }) => {

  const [state, dispatch] = useContext(StateContext);


  const deleteInCart = () => {
    dispatch({type: 'delete_in_cart',
              item: product_id
              })} 

  const addToWishlist = () => {
      dispatch({type: 'add_to_wishlist',
                item: product_id
                          })}  
  
  // const qty_upd =(e) => {
  //   var new_qty = e.target.value;
  //   console.log(qty)
  //   console.log('new_q')
  //   console.log(new_qty)
  //   dispatch({type:'upd_qty_cart',quantity: new_qty - qty})
    // dispath({type: 'add_to_cart',
    //         item: product_id})
  // }
  
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
        
          <div>
            {/* <button  > */}<span style={{fontWeight: 700}}>Qty:</span>
              <select className="product_qty" value = {qty} name= 'p_qty'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            {/* </button> */}
            </div>
            <div className="checkout_options"> <span onClick= {deleteInCart}> Delete </span>| <span onClick = {addToWishlist}> Save for later</span></div>
           </div>

            {/* <div className='product_price'> */}
            {/* <p>{price} </p> */}
            <NumberFormat renderText ={(value) =>  { return (<p className='product_price'>{value} </p>)} }

              decimalScale = {2} value = {price} displayType = {'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
            {/* </div> */}
          </div>
         );
}

export default CheckoutProduct
