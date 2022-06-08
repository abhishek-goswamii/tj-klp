import React from 'react'
import './header.css'
import navBarImage from '../../assets/images/navbar-image.png'
import Homepage from '../homepage/homepage';

const Header = () => {
  return (
    <>

      <div className='navbar'>
        <div className='navbar_image'>
          <img src={navBarImage}></img>
        </div>

        <div className='navbar_elements'>
          <ul>

            <li> About Us</li>
            <li>Services</li>
            <li>Investor Corner</li>
            <li>Partner With Us</li>

          </ul>
        </div>
        <div className='login_ipo_btn'>
          <button>Login</button>
          <button>IPO</button>
        </div>
      </div>
      
    </>
  )
}

export default Header