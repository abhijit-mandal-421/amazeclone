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

      {location.pathname !== '/signin' && location.pathname !== '/register' ? <Header/> : "" }
      
      
      <Switch>


      <Route path="/checkout"><Checkout /></Route>
      <Route path="/mobiles"><Mobiles /></Route>
      <Route path ="/register"><RegistrationPage /></Route>
      <Route path ="/signin"><Login /></Route>
      <Route path ="/wishlist"><Wishlist /></Route>
      <Route path ="/toys"><Toys /></Route>
      <Route path ="/chocolates"><Chocolates /></Route>
      <Route path ="/office_needs"><OfficeNeeds /></Route>
      <Route path ="/workouts"><Workouts /></Route>
      <Route path="/order"><Orders /></Route>


      <Route path="/"><HomePage /></Route>

        

      </Switch>

    </div>
    
  );
}

export default App;
