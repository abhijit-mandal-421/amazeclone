import React,{useState} from 'react';
import './CheckoutProduct.css';
import NumberFormat from 'react-number-format';


const OrderProduct = ({ product_id, title, price, product_img }) => {

  const [returnStatus, setReturnStatus] = useState('checkout_product')

    // var return_status = 'checkout_product';

    const return_style  = () => {
        setReturnStatus('yes_return')
    }
  
    return (
          <div className= {returnStatus}>
           <img
            src={product_img}
            className="checkout_product_img"
                alt={title}
           />
        
           <div className="product_details">
            <div className="product_name">
            {title}
            </div>
            
            
            <NumberFormat renderText ={(value) =>  { return (<p className='product_price' style={{textAlign : 'left'}}>{value} </p>)} }
              decimalScale = {2} value = {price} displayType = {'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
        
          </div>

          <div className = 'return_items'>
          <button className = 'return_item_btn' onClick = {return_style}> Return Item</button>
          <button className = 'track_item_btn' > Track Item</button>

          </div>
          </div>
         );
}

export default OrderProduct
