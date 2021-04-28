import React, { useState } from "react";
import "./RegistrationPage.css";
import InfoIcon from '@material-ui/icons/Info';
import { Link } from "react-router-dom";

const RegistrationPage = () => {
 const [regForm, setRegForm] = useState({
  username: "",
  mob_no: "",
  email: "",
  password: ""
 });

 const [regUsers, setRegUsers] = useState([]);

 const [errors, setErrors] = useState({
  username: "",
  mob_no: "",
  email: "",
  password: ""
 });


//  const errors = {};

 const input_fields = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[#\w@_-]{6,20}$/,
  mob_no: /^\d{10}$/
 };

 const handleRegInput = e => {
  const name = e.target.name;
  const value = e.target.value;

  setRegForm({ ...regForm, [name]: value });
  console.log(regForm);
 };

 const handleSubmit = e => {
  e.preventDefault();

  if (validation()){
    setRegUsers([...regUsers, regForm]);

    setRegForm({
     username: "",
     mob_no: "",
     email: "",
     password: ""
    });

    setErrors({
      username: "",
     mob_no: "",
     email: "",
     password: ""
    })
  }
  console.log(validation(), regUsers,errors);
  

  // console.log(errors);
  // errors = { username: "", mob_no: "", email: "", password: "" };
 };

 const validation = () => {
   let er = {...errors};
  // !regForm.username ? errors.username = "Your name required" : "";

  // !regForm.mob_no
  //  ? errors.mob_no = "Mobile no. required"
  //  : input_fields.mob_no.test(regForm.mob_no)
  //  ? ""
  //  : errors.mob_no = "Mobile no. invalid";

  // !regForm.email
  //  ? ""
  //  : input_fields.email.test(regForm.email)
  //  ? ""
  //  : errors.email = "Email invalid";

  // !regForm.password
  //  ? (errors.password = "Password required")
  //  : input_fields.password.test(regForm.password)
  //  ? ""
  //  : (errors.password = "Password invalid");

  // setErrors1({ ...errors1, errors });

  er.username=!regForm.username?  "Your name required" : "";

  //  console.log('after username')
  //  er = {...errors}
  //  console.log(JSON.stringify(er))

  er.mob_no =!regForm.mob_no
   ? "Mobile no. required"
   : input_fields.mob_no.test(regForm.mob_no)
   ? ""
   : "Mobile no. invalid";

   er.email=!regForm.email
   ? ""
   : input_fields.email.test(regForm.email)
   ? ""
   : "Email invalid";

   er.password=!regForm.password
   ? "Password required"
   : input_fields.password.test(regForm.password)
   ? ""
   : "Password invalid";


  if ((er.email) || (er.mob_no) || (er.username) || (er. password)){
    setErrors(er)
    // console.log(er,errors)
    return false;
  }
  else
  { 
    return true;
  }

  // if (!regForm.username) {
  //  setErrors({ ...errors, username: "Your name required" });
  // }
  // // elseif()
  // //  ?
  // //  : setErrors({ ...errors, username: "" });

  // if (!regForm.mob_no) {
  //  setErrors({ ...errors, mob_no: "Mobile no. required" });
  // } else if (regForm.mob_no) {
  //  if (input_fields.mob_no.test(regForm.mob_no)) {
  //   setErrors({ ...errors, mob_no: "" });
  //  } else {
  //   setErrors({ ...errors, mob_no: "Mobile no. invalid" });
  //  }
  // }

  // if (regForm.email) {
  //  if (input_fields.email.test(regForm.email)) {
  //   setErrors({ ...errors, email: "Email invalid" });
  //  } else {
  //   setErrors({ ...errors, email: "" });
  //  }
  // }

  // if (!regForm.password) {
  //  setErrors({ ...errors, password: "Password required" });
  // } else if (regForm.password) {
  //  if (input_fields.password.test(regForm.password)) {
  //   setErrors({ ...errors, password: "" });
  //  } else {
  //   setErrors({ ...errors, password: "Password invalid" });
  //  }

  //  // else if ()
  // }
  // console.log(errors);
  // console.log("----------------------");
  // console.log(errors);
 };

 return (
  <div className="registration_page">
   <div className="registration_form">
   <Link to='/'>  <img className="reg_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG5.png" alt="logo" /> </Link>
    <h1>Create Account</h1>
    <form action="" className="reg_form"  onSubmit={handleSubmit}> 

     <div>
      <div className='lbl'>
        <label htmlFor="username">Your name</label>
        {errors.username ? <div className="error"><InfoIcon className = 'error_icon'/>{errors.username}</div> : ""}
      </div>
      <input
       type="text"
       autoComplete="off"
       name="username"
       id="username"
       onChange={handleRegInput}
       value={regForm.username}
      />
      
     </div>

     <div>
     <div className = 'lbl'>
        <label htmlFor="mob_no">Mobile Number</label>
        {errors.mob_no ? <div className="error"><InfoIcon className = 'error_icon'/>{errors.mob_no}</div> : ""}
      </div>
      <input
       type="text"
       autoComplete="off"
       name="mob_no"
       id="mob_no"
       onChange={handleRegInput}
       value={regForm.mob_no}
      />
     
     </div>

     

     <div>
     <div className='lbl'>
      <label htmlFor="email">Email (optional)</label>
      {errors.email ? <div className="error"><InfoIcon className = 'error_icon'/>{errors.email}</div> : ""}
      </div>
      <input
       type="text"
       autoComplete="off"
       name="email"
       id="email"
       onChange={handleRegInput}
       value={regForm.email}
      />
     </div>

     

     <div>
     <div className = 'lbl'>
      <label htmlFor="password">Password</label>
      {errors.password ? <div className="error"><InfoIcon className = 'error_icon'/>{errors.password}</div> : ""}
      </div>
      <input
       type="password"
       autoComplete="off"
       name="password"
       id="password"
       onChange={handleRegInput}
       value={regForm.password}
       placeholder="At least 6 characters"
      />
      <p>(icon)Passwords must be at least 6 characters.</p>

      
     </div>

     <div className="reg_note">
      We will send you a text to verify your phone.
      <br />
      Message and Data rates may apply.
     </div>

     <button type="submit" className="form_submit">
      Continue
     </button>
     
    </form>

    <hr />
    
    <div className="reg_note">
     Already have an account?  <Link to='/signin'> Sign in </Link> <br />
    </div>

    <div>
     
     {regUsers.map(user => {
      return (
       <div>
        {user.username} {user.mob_no} {user.email} {user.password}
        <br />
       </div>
      );
     })}
    </div>
   </div>

   {/* ==================================================================== */}
   {/* <div className="product_info">
    <p className="product_title"> The Fault in our Starts </p>
    <p>
     <small>$</small>
     <strong>4.55</strong>
    </p>
   </div>

   <img
    src="https://images-na.ssl-images-amazon.com/images/I/41dr+Ay2zjL._SX326_BO1,204,203,200_.jpg"
    alt=""
    className="product_img"
   />

   <button className="add_cart">Add to Cart</button> */}
  </div>
 );
}

export default RegistrationPage;
