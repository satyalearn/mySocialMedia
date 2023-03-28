import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../config/firebase'

const Navbar = () => {
  return (
    <div>
        <Link to='/'> Home</Link>
        <Link to='/login'> Login</Link>

        <div>
          <p>{auth.currentUser?.displayName}</p>
          <img src={auth.currentUser?.photoURL || ""} width='50px' height='50px' />
        </div>
    </div>
  )
}

export default Navbar