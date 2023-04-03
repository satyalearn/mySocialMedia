import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut =async()=>{
    await signOut(auth);
  }
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'> Home</Link>
        {!user?<Link to='/login'> Login</Link>:
          <Link to='/createpost'>create post</Link>
        }
        </div>
        <div className='user'>
          { user && (<><p>{user?.displayName}</p>
          <img src={user?.photoURL || ""} alt="user-profile"width='20px' height='20px' />
          <button className='logout' onClick={signUserOut}>Log Out</button></>)}
          
        </div>
    </div>
  )
}

export default Navbar