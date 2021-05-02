import React from 'react'
import './HomeOffers.css';
// import HomeMultidata from './HomeMultidata';

const HomeOffersMulti = (
    {title,image_title_arr, image_arr, link_arr}
    ) => {
                        
        
    return (
        <div className = 'offers'>
            
            <p className="offer_title"><strong>{title}</strong></p> 
            
            <div className= "multiple_offers">
                {
                    image_title_arr.map((img_title,id)=>{return(
                    
                    <a href={link_arr[id]} >
                        <img className = 'offer_img' src={image_arr[id]} alt={img_title}/>
                        <p className="deals">{img_title}</p>
                    </a>
                
                        )}
                )}
            
            
            {/* <div className="offer_img"></div> */}

            
            
        </div>
        </div>
    )
}

export default HomeOffersMulti
