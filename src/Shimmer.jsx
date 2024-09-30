import React from 'react';
import Navbar from './Navbar'

const Shimmer = () => {
  return (

    <div>
    <Navbar/>


        <div className='banner'>
            <h3>Looking for great food for you</h3>
            <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
       </div>

        </div>

       

        <div className='shimmer-container'>
          
            <div className='shimmercard'>
                <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*VN-Fijz8nHBcl9hs6kCeUw.gif" alt="no-data"/>
            </div>
        </div>
      
    </div>
  );
}

export default Shimmer;
