import React from 'react';
import {auth, provider } from '../config/firebase';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  
  const signInWithGoogle =async ()=>{
   const result = await signInWithPopup(auth,provider);
   console.log(result);
   navigate('/');
  }
  return (
    <div>
      <p>sign in with Google</p>
      <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  )
}

export default Login