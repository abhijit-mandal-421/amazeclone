import React from 'react';
import './HomePage.css';
import HomeOffers from './HomeOffers.js';
import Homedata from './Homedata.js';
import HomeOffersMulti from './HomeOffersMulti.js';
import HomeMultidata from './HomeMultidata';


const HomePage = () => {
    
    return (
        <div className = 'home'>
            
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" 
            alt="Prime_image" className="home_img"/>

            <div className="home_row">
            {Homedata.slice(0,3).map((data,ind)=>{return( 
                <HomeOffers title={data.title} image={data.image} link={data.link} key={ind}/>
            )})}
            {HomeMultidata.slice(0,1).map((data,ind)=>{return( 
                <HomeOffersMulti title={data.title}   image_title_arr={data.image_title_arr} image_arr={data.image_arr} link_arr={data.link_arr} key={ind}/>
            )})}
            
            
            {/* <HomeOffersMulti /> */}
            {/* <HomeOffersMulti /> */}
            {/* <HomeOffersMulti /> */}
                {/* <HomeOffers title='Up to 40% off | Smartphone Upgrade Days' image = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vivo/march/UD/MSO/D21938933_WL_MSO_UpgradeDays_DESKTOP_CC._SY304_CB657385560_.jpg" link= ""/>
                <HomeOffers title='Visit the Summer Toy list store' image = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Toys/STL/DesktopGateway_CategoryCard_758X608_1x._SY304_CB654729478_.jpg" link= ""/> */}
            </div>

            

            <div className="home_row">
            {Homedata.slice(3,5).map((data,ind)=>{return( 
                <HomeOffers title={data.title} image={data.image} link={data.link} key={ind} />
            )})}

            {HomeMultidata.slice(0,1).map((data,ind)=>{return( 
                <HomeOffersMulti title={data.title}   image_title_arr={data.image_title_arr} image_arr={data.image_arr} link_arr={data.link_arr} key={ind}/>
            )})}
            </div>

               

        </div>
    )
}

export default HomePage
