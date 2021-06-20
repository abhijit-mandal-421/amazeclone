import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Header from './Header.js';

const Login = () => {

  const [loginForm, setLoginForm] = useState(
    {email_no:"",
    password:""
    }
  )

  const [loginUser, setLoginUser] = useState([])

  const [errors, setErrors] = useState({
    email_no: "",
    password: ""
   });

  const handleLogInput = e => {
    const name = e.target.name;
    const value = e.target.value;
  
    setLoginForm({ ...loginForm, [name]: value });
    console.log(loginForm);
   };


   const handleSubmit = (e) => {
    e.preventDefault();
  
    // if (validation()){
      setLoginUser([...loginUser, loginForm]);
  
      setLoginForm({
       email_no: "",
       password: ""
      });
  console.log(loginUser)
    }

 return (
   <>
  {!<Header />}
  <div className="login_page">

  <Link to={process.env.PUBLIC_URL}>
  <img
     className="reg_logo"
     src="http://pngimg.com/uploads/amazon/amazon_PNG5.png"
     alt="logo"
    />
  </Link>

   <div className="login_form">
     
     <h1>Sign-In</h1>
     
    <form action="" className="log_form" onSubmit={handleSubmit}>
     
     <div>
      <label htmlFor="email_no">Email or Phone number</label>
      
      <input
       type="text"
       autoComplete="off"
       name="email_no"
       id="email_no"
        onChange={handleLogInput}
        value={loginForm.email_no}
      />
      
     </div>
     
     <div>
     <div className="password_label">
      <label htmlFor="password">Password</label>
      <a href="https://www.google.co.in/" className="forgot_pwd">
       Forgot Password?
      </a>
      </div>
      
      <input
       type="password"
       autoComplete="off"
       name="password"
       id="password"
        onChange={handleLogInput}
        value={loginForm.password}
      />
      
     </div>
     
     <button type="submit" className="form_submit">
      Continue 
     </button>
      
    </form>
    
    <div className="reg_note">
     By continuing, you agree to Amazon's Condition of use and Privacy
     Note 
    </div>
     
    <div className="reg_note">
     <span>New to Amazon?</span>      
    </div>

    <Link to={process.env.PUBLIC_URL +'/register'}>
     <button type="submit" className="form_submit">
      Create Your Amazon account
     </button>
     </Link>
     
   </div>
  </div>
  </>
 );
}

export default Login;