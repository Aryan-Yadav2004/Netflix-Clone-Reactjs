import React from 'react'
import "./Login.css";
function Login() {
  return (
    <div className="loginScreen">
        <div  className="loginScreen_background">
            <img className='loginScreen_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="" />
            <button className="loginScreen_btn">Sign In</button>
            <div className="loginScreen_gradient"></div>
        </div> 
        <div className="loginScreen_body">
            <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter you email to create or restart your membership.</h3>
                <div className="loginScreen_input">
                    <form >
                        <input type='email' placeholder='Email Address' />
                        <button className='loginScreen_getStarted'>GET STARTED</button>
                    </form>
                </div>
            </>
        </div>
    </div>
  )
}

export default Login