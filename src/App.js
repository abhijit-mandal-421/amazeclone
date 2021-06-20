import React from 'react'
import Header from './Header.js';
import HomePage from './HomePage.js';
// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Checkout from './Checkout.js';
import Mobiles from './Mobiles.js';
import RegistrationPage from './RegistrationPage.js';
import Login from './Login.js';
import Wishlist from './Wishlist.js';
import Toys from './Toys';
import Chocolates from './Chocolates';
import OfficeNeeds from './OfficeNeeds';
import Workouts from './Workouts';
import Orders from './Orders.js'



function App() {
  
  const location = useLocation();
  console.log(location)
  return (
    
    <div className="App">

      {location.pathname !== '/signin' && location.pathname !== '/register' && <Header/>  }
      
      
      <Switch>


      <Route path ={process.env.PUBLIC_URL + "/checkout"}><Checkout /></Route>
      <Route path ={process.env.PUBLIC_URL + "/mobiles"}><Mobiles /></Route>
      <Route path ={process.env.PUBLIC_URL + "/register"}><RegistrationPage /></Route>
      <Route path ={process.env.PUBLIC_URL + "/signin"}><Login /></Route>
      <Route path ={process.env.PUBLIC_URL + "/wishlist"}><Wishlist /></Route>
      <Route path ={process.env.PUBLIC_URL + "/toys"}><Toys /></Route>
      <Route path ={process.env.PUBLIC_URL + "/chocolates"}><Chocolates /></Route>
      <Route path ={process.env.PUBLIC_URL + "/office_needs"}><OfficeNeeds /></Route>
      <Route path ={process.env.PUBLIC_URL + "/workouts"}><Workouts /></Route>
      <Route path ={process.env.PUBLIC_URL + "/order"}><Orders /></Route>


      <Route path ={process.env.PUBLIC_URL + "/"}><HomePage /></Route>

      {console.log('##',process.env.PUBLIC_URL)}

      </Switch>

    </div>
    
  );
}

export default App;
