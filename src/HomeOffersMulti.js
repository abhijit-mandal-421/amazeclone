import React from 'react'
import './HomeOffers.css';
// import HomeMultidata from './HomeMultidata';

const HomeOffersMulti = (
    {title,image_title_arr, image_arr, link_arr}
    ) => {

        // const home_multi_data = 
        //     {
        //         title:'Up to 40% off | Smartphone Upgrade Days', 
        //         image_title_arr: ["AC","Refrigerators","Television","Washing machines"],
        //         image_arr: ["https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg",
        //                     "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_3._SY116_CB414480869_.jpg",
        //                     "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_4._SY116_CB414480869_.jpg",
        //                     "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_2._SY116_CB414480869_.jpg",
        //                     ],
        //          link_arr:["","","",""]}
                        
        
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
