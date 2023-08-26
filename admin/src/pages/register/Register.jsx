import React from 'react'
import axios from "axios";
import "./register.scss"
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [email,setEmail] =  useState("")
    const [password, setPpassword] =  useState("")
    const [username, setUsername] = useState("");

    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef();
    

    const handleStart = () =>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = async (e) =>{
        e.preventDefault();
        setPpassword(passwordRef.current.value)
        setUsername(usernameRef.current.value);
        
    try {
        await axios.post("register", { email, username, password });
        navigate("/logini");
    } catch (err) {}
    }
    const handleLoginClick = () => {
        navigate('/logini');
      }; 
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
             <img
               className="logo"
               src="https://firebasestorage.googleapis.com/v0/b/joyful-a1987.appspot.com/o/breachfix%20log%20.svg?alt=media&token=fe244c7f-844f-4a3e-bbca-70e809a43515"
               alt="" 
              /> 
              <button className="loginButton" onClick={handleLoginClick} >
                Sign In
              </button>
             </div>
            </div>
        <div className="container">
            <h1>Partner with BreachFix To share, Create,Christian movies, TV shows, and more.</h1>
             <h2>Join,learn, Pray & Watch anywhere. Cancel at any time</h2>
             <p>
                Ready to watch? Enter your email to create or restart your membership.
             </p> 
             {
                !email ? (
                <div className="input">
                <input type="email" placeholder='email address' ref={emailRef} />
                <button className="registerButton" onClick={handleStart} >
                    Get Started
                </button>
                </div>
                ): (
                    <form className="input">
                    <input type="text" placeholder='username' ref={usernameRef} />
                    <input type="password" placeholder='password' ref={passwordRef} />
                    <button className="registerButton" type="submit" onClick={handleFinish}>
                        Start
                    </button>
                </form>)
                
            }
             
        </div>
        
    </div>
  )
}
