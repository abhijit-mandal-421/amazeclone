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
  var new_cart = [...state.cart];
  const qty_upd =(e) => {
    var new_qty = e.target.value;
    var diff_qty = new_qty - qty;
    

    console.log(qty)
    console.log('product_id',product_id)
    console.log('qty',qty)
    console.log('new_q',new_qty)

    if (diff_qty > 0) 
    { 
      qty = new_qty;
      for (let i=0 ; i < diff_qty ; i++) { new_cart.push(product_id)}
      // console.log(diff_qty,'added items', new_cart)
      
    }
    else if(diff_qty < 0)
    {
      qty = new_qty;
      for (let i = 0 ; i < Math.abs(diff_qty) ; i++) 
        {
          new_cart.splice(new_cart.indexOf(product_id),1);
        }
      // console.log(Math.abs(diff_qty),'removed items', new_cart)

    }

      dispatch({type:'upd_qty_cart',
              cart : new_cart
              })
  }
  
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
              <select className="product_qty" value = {qty} name= 'p_qty' onChange= {qty_upd}>
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

            <NumberFormat renderText ={(value) =>  { return (<p className='product_price'>{value} </p>)} }

              decimalScale = {2} value = {price} displayType = {'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
          </div>
         );
}

export default CheckoutProduct
