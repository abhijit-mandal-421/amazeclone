import React from 'react';
import { Link } from 'react-router-dom';
import './HomeOffers.css';

const HomeOffers = ({title, image, link}) => {
    return (
        <div className = 'offers'>
            
            <p className="offer_title"><strong>{title}</strong></p> 
            
            <Link to={process.env.PUBLIC_URL + '/'+link}>
                <img className = 'offer_img' src={image} alt=""/>
                <p className="deals">See all deals</p>
            </Link>
            
            {/* <div className="offer_img"></div> */}

            
            
        </div>
    )
}

export default HomeOffers
