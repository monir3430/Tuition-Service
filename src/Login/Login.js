import { useRef, useState } from "react";
import {useSendPasswordResetEmail,useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from '../../src/Firebase/firebase.init'
import "./Login.css";
import google from '../../src/images/google.png'




const Login = () => {
    const emailRef = useRef('');
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const[SignInWithEmail, user, loding, hookError] = useSignInWithEmailAndPassword(auth)
const [signInWithGoogle] = useSignInWithGoogle(auth);
const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



const EmailChange=(event)=>{
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if(validEmail){
        setEmail(event.target.value);
    } else{
        setError('Invalid Email')
    }
   


}

const PasswordChange=(event)=>{
    const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value);

    if(validPassword){
        setPassword(event.target.value);
    } else{
        setError('Minimum 6 characters')

    }
}
const handleLogin = (event)=>{
    event.preventDefault();
    console.log(email, password)
    SignInWithEmail(email, password)
}

       const Navigate = useNavigate();
       const location = useLocation();
       const from = location.state?.from?.pathname || "/";

       
           if (user) {
               Navigate(from, {replace:true});
           

           
            
          };

          const resetPassword = async () => {
            const email = emailRef.current.value;
            if (email) {
                await sendPasswordResetEmail(email);
                toast('Sent email');
            }
            else{
                toast('please enter your email address');
            }
       

    
        }

    return (
        <div className="login-container">
            <div className="login">Login</div>
            <form className="login-form" onSubmit={ handleLogin}>
                <input ref={emailRef} type="text" placeholder="Your Email" onChange={EmailChange} required/>
        
                <input type="password" placeholder="password" onChange={PasswordChange} required />
                
                <button>Login</button>
                {error && <p className="error-message">{error}</p>}
                {hookError && <p className="error-message">{hookError?.message}</p>}

                <ToastContainer />

                <p className="toggle ">Have No account?  <Link className="toggle " to="/signup">Sign-up</Link> </p>
                <div className="OR">-------------------or-------------------</div>
            </form>

            <button onClick={() => signInWithGoogle()}> <img src={google} alt="" />SignIn with Google</button>
            <p><button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
        </div>
    );
};

export default Login;