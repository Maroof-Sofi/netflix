import { useRef, useState } from 'react';
import Header from './Header';
import {checkValidData} from '../utils/Validate'; // Import validate.js
import {
  createUserWithEmailAndPassword,  
  signInWithEmailAndPassword,
  updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
  
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  

      const handleButtonClick = () => {
          //  Validate the form data
          // console.log(email.current.value);
          // console.log(password.current.value);

        const message = checkValidData (
          email.current.value, 
          password.current.value, 
          name.current?.value,
           isSignInForm
          );
        setErrorMessage(message); 
      // console.log(message);
       
      if(message) return;
             
      // SignIn / SignUp
     if(!isSignInForm) {
          // sign up logic
          createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          
          )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value , 
              photoURL:USER_AVATAR,
            })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;          // ...
              dispatch(
               addUser({ 
                 uid: uid, 
                 email: email, 
                 displayName: displayName, 
                 photoURL: photoURL,
               })
               );
            })
            .catch((error) => {
               setErrorMessage(error.message);
            });
    // Signed in 
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
   }else{
        //  sign in logic
        signInWithEmailAndPassword(
          auth,
           email.current.value, 
           password.current.value
           )
            .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  })
  .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
      setErrorMessage(errorCode + " " + errorMessage);
    });


     }         
  };  
     const toggleSignInform = ()=>{
      setIsSignInFrom(!isSignInForm);
    };


  return (
    <div>
        <Header/>
        <div className='absolute'>
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='logo' />
        </div>

        <form onSubmit={(e)=> e.preventDefault()} 
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "SignIn" : "SignUp"}</h1>
            { !isSignInForm && (
             <input  ref= {name}
             type='text' placeholder='Full Name' 
              className='p-4 my-4 w-full bg-gray-900 ' />
            )}
        
            <input ref={email} 
            type='text' placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-900 ' />
        
            <input ref={password} 
            type='password' placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-900'/>
        
             <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        
             <button   onClick={handleButtonClick}
             className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignInForm ? "sign In" : "sign Up"}
             </button>
        
          <p className='py-4 cursor-pointer' onClick={toggleSignInform}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now "}</p>
        </form>
    </div>
  );
};

export default Login;