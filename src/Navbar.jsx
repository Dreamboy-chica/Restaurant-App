import { useState } from 'react';
import './App.css'

const Navbar = ({props}) => {

  const[data,setData]=useState('Sig-in')
  const[search,setSearch]=useState("")

  let searchfun=(e)=>{
   setSearch(e.target.value)
  }

  let filteritem=()=>{
    const filteredres=props.recipes.filter((res)=>res.name.includes(search))
    setSearch(filteredres)
  }

//login/logout toggle button  
const usercred=()=>{
  data==='Sig-in'? setData('Sig-up'):setData('Sig-in')
}

  return (
    <div>
        <div className='navbar'>

        <div className='pancon'>
          <b>PⱯnda</b>
        </div>

        <div className='search'>
        <button>
        <i className="fa-solid fa-magnifying-glass" onClick={filteritem}></i>
        </button>
        <input type='text' placeholder='Search cusinie or dish' value={search} 
        onChange={searchfun}/>
        </div>


        <div>Home</div>
        <div>About</div>
        <div>Contact Us</div>
        <button onClick={usercred}>{data}</button>
        <div>Whishlist</div>
        <div>Cart</div>

        </div>
      
   </div>
  );
}

export default Navbar;
