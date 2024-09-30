import { useContext, useState } from 'react';
import './App.css';
import Ct from './Ct';

const Navbar = () => {
  const [buttonLabel, setButtonLabel] = useState('Sign In');
  const obj = useContext(Ct);

  // Login/logout toggle button
  const toggleUserCred = () => {
    setButtonLabel(prev => (prev === 'Sign In' ? 'Sign Up' : 'Sign In'));
  };

  // Trigger search when the icon is clicked
  const handleIconClick = () => {
    obj.filtered(); // Call the filter function
    obj.setSearchText(''); // Clear the search text
  };

  return (
    <div className='navbar'>
      <div className='pancon'>
        <b>PⱯnda</b>
      </div>

      <div className='search'>
        <input
          type='text'
          placeholder='Search cuisine or dish'
          value={obj.searchText}
          onChange={obj.seafun}
        />
        <i 
          className="fa-solid fa-magnifying-glass" 
          onClick={handleIconClick} 
          style={{ cursor: 'pointer' }}
        ></i>
      </div>

      <div>Home</div>
      <div>About</div>
      <div>Contact Us</div>

      <button onClick={toggleUserCred} className='sinbtn'>
        <i className="fa-regular fa-user"></i>
        <span>{buttonLabel}</span>
      </button>
      <div>
        <i className="fa-regular fa-heart"></i>
      </div>
    </div>
  );
};

export default Navbar;
