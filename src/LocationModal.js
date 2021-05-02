import React from 'react';
// import Modal from 'react-modal';
import './LocationModal.css';


const LocationModal = ({close}) => {
    // if(open)
    //     {
        console.log('popup' ,  close);
   return (
       <>
        <div className= 'overlay' onClick = {() => close(false)}>        
        </div>
        
        <div className= 'content'>
        <h2 className='content_title'>Choose Your location</h2>
        <div className = 'content_text'>Select a delivery to see product availability and delivery options
        </div>
        
        <button className='signin'>Sign In to see your address</button>
        
        <p>or</p>
        
        <div className= 'submit_pincode'>
            <input className='pincode' type="text" placeholder='Enter an Indian Pincode' />
            <button className='submit' onClick={close}>Apply</button>
        </div>
            </div>
            </>
        ) 
        // }
        // else   {
        //     return null;
        // }
            
    
}

export default LocationModal
