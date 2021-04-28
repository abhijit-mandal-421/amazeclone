import React from 'react';
import "./Product.css";
import Product from './Product';
import Product_data from './Product_data';

const Toys = () => {
    
    return (
        <div className= 'toys'>

        {Product_data.filter((product) => product.product_type === 'toy').map((product_display)=> {return(
            <Product title= {product_display.title}
                 price={product_display.price}
                 product_img = {product_display.product_img}
                 product_id={product_display.id}
                 />
        )})}

                        
        </div>
    )
}

export default Toys
