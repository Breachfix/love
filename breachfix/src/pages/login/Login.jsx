import React, { useContext, useState } from 'react'
import "./login.scss"
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };


  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
             <img
               className="logo"
               src="https://firebasestorage.googleapis.com/v0/b/joyful-a1987.appspot.com/o/breachfix%20log%20.svg?alt=media&token=fe244c7f-844f-4a3e-bbca-70e809a43515"
               alt="" 
              /> 
            
             </div>
            </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                   <input 
                   type="email"
                   placeholder="Email or phone number"
                   onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                   type="password"
                   placeholder="Password"
                   onChange={(e) => setPassword(e.target.value)}
                />
                <button className='loginButton' onClick={handleLogin}> 
                   Sign In
                </button>
                <span>
                  New to BreachFix? <b>Sign up  now.</b>
                </span>
                <small>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                <b>Learn more</b>.
                </small>
            </form>
        </div>
        
    </div>
  )
}
