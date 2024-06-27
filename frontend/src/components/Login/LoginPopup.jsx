import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Login")

  return (
    <div className='login'>
        <form  className="login-container">
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required />
                <p>By Continuing,I agree to the terms of use and privacy policy.</p>
            </div>
            {currentState==="Login"
                ?<p>Create new account? <span onClick={()=>setCurrentState("Sign Up")}>Sign Up Here</span></p>
                :<p>Already Have an Account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup