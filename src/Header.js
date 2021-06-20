import React , {useState,useContext} from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import LocationModal from './LocationModal';
import { Link } from 'react-router-dom';
import {StateContext} from './GlobalStates';
// import Modal from 'react-modal';


const Header = () => {
    const [openLocModal, setOpenLocModal] = useState(false);
    const  [state, dispatch]= useContext(StateContext)

    const select_category = (e) => {
        console.log(e.value);
        <Link to = {process.env.PUBLIC_URL + e.value}></Link>
    }

    // const popupModal = (data) =>{
    //     console.log({data})
    //         setOpenLocModal(data)
    // }

    return (
        <div className= 'header'>
            {/* <img src="https://fonts.google.com/icons?selected=Material%20Icons%20Two%20Tone%3Alocation_on" alt=""/> */}
            
            <Link to={process.env.PUBLIC_URL}>
            <img className='header_logo' src="http://pngimg.com/uploads/amazon/small/amazon_PNG18.png" alt="Amazon_logo"/>
            </Link>

            <div className='header_search'>
                <div onClick = {() => setOpenLocModal(true)} className="header_location">
                    <PersonPinCircleIcon className='location_icon'/>
                    <div className='header_search_location'><span className= 'line1'>Hello</span> <span className= 'line2'>Select your address </span> </div> 
                    {/* onclick header_location should show an alert box  */}
                    
                </div> 

                {openLocModal && <LocationModal close={setOpenLocModal} />}
                {/* <div className='header_search_category'> */}
                    <select onChange = {select_category} className='header_search_category'>
                        <option value='/'>All</option>
                        <option value='/mobiles'>Mobiles</option>
                        <option value= "/toys">Kids and Toys</option>
                        <option value= "/chocolates">Groceries</option>
                        <option value= "/office">Office Needs</option>
                        <option value="/workout">Workouts</option>
                    </select>
                {/* </div> */}
                <input className='header_search_inp' type="text"/>
                <SearchIcon className='search_icon' />
                {/* <div className='lang' >Region_logo</div> */}

                
                <div className='header_nav'>
                    <Link to={process.env.PUBLIC_URL +'/signin'} style={{color:'white'}}>
                        <div className='header_nav_option'>
                            <span className = 'line1'>Hello, SignIn</span>
                            <span className = 'line2'>Account & Lists</span>
                        </div>
                    </Link>

                    <Link to={process.env.PUBLIC_URL +'/order'} style={{color:'white'}}>
                        <div className='header_nav_option'>
                            <span className = 'line1'>Returns</span>
                            <span className = 'line2'>& Orders</span>
                        </div>
                    </Link>

                    <Link to={process.env.PUBLIC_URL +'/checkout'} style={{color:'white'}}>
                    <div className='header_cart'>
                        <div className='header_cart1'>
                            <span className = 'line1'>Cart</span>
                            <ShoppingCartIcon className = 'cart_icon' />
                        </div>
                        <span>{state.cart.length}</span>
                    </div>
                    </Link>


                </div>
        </div>
        </div>
    )
}

export default Header
