import React from 'react'
import './header.css'
import navBarImage from '../../assets/images/navbar-image.png'
import Homepage from '../homepage/homepage';
import SideBar from '../sideBar/sideBar';


const Header = ({ openModel, setOpenModel }) => {
  return (
    <>

      <div className='navbar'>

        <div className='navbar_child_div'>


          <div className='navbar_image'>

            <img src={navBarImage}></img>


          </div>

          {openModel == true ? <SideBar /> : <>

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
          </>}



        </div>

      </div>

    </>
  )
}

export default Header