import React from 'react';
import {Link} from 'react-router-dom';



export default function NavBar() {
    return (
      <nav id='fp'>
     <Link to="/Users" className='link'>Users</Link>
      </nav>
      
    )
  }


