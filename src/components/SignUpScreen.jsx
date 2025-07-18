import React, { useRef } from 'react'
import "./SignUpScreen.css"
import { auth } from '../Firebase';
function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value,
            passwordRef.current.value);
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => alert(error.message));
    };
  return (
    <div className="signupScreen">
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='password' />
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4>
                <span className='signUpScreen_gray'>New to Netflix ?</span>
                <span className='signupScreen_link' onClick={register}>Sign Up now</span>
            </h4>
        </form>
    </div>
  )
}

export default SignUpScreen