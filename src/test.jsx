import React from 'react'; 
import './App.css'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>

        <div>  
        <ul>
        <li >
        <b>PⱯnda</b>
        <img src='https://as2.ftcdn.net/v2/jpg/02/76/34/55/1000_F_276345533_gQr0R2h68cDY1MRE1QyR7ydS2Xsiwx7T.jpg' alt='Panda'/>
        </li>
        </ul>
        </div>

        <div>   
        <p className='panda'>
            <li>Search</li>
            <li>Signup</li>
            <li>Sign in</li>

        </p>
        </div>

            
        </div>
      
   </div>
  );
}

export default Navbar;
