import React, { useState } from 'react'
import "./navbar.scss"
import logo from "../../images/Logo.png"
import { ArrowDropDown, NotificationAdd, Search } from '@mui/icons-material'

const Navbar = () => {
    
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset ===0 ?false:true);
    return ()=>(window.onscroll== null)
  }



  return (
    <div className={isScrolled?"navbar scrolled":"navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="" />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>Mylist</span>
        </div>

        <div className="right">
          <Search  className='icon' />
          <span>KID</span>
          <NotificationAdd className='icon' />
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
         
         <div className="profile">
          <ArrowDropDown className='icon' />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
         </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar