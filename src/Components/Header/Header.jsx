import './Header.css'

import AppleIcon from '../../assets/images/apple-icon.png'

import { FaSearch , FaShoppingCart , FaUser , FaBars } from "react-icons/fa"
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {

   const [MobileContainer , setMobileContainer] = useState(false) 

    const showMobileContainer = () => {
        setMobileContainer(true)
    }

    const HideMobileContainer = () => {
      setMobileContainer(false)
    }

  return (
    <>
    <div className="menu">
      <span onClick={showMobileContainer}><FaBars/></span>
    </div>
    {MobileContainer ?
      (<div className="mobileContainer">
      <div className="Xdiv">
        <span onClick={HideMobileContainer}>X</span>
      </div>
        <div className="logos">
        <img src={AppleIcon} alt="apple-icon.png" />
        </div>
        <nav>
      <ul>

        

        

        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link' to="/about">About</Link></li>
        <li><Link className='link' to="/shop">Shop</Link></li>
        <li><Link className='link' to="/contact">Contact</Link></li>
        <div className="lis">
          <li className='iconSearch'><input type="search" placeholder='Search' /><span><a className='link' href="/#"><FaSearch/></a></span></li>
        <li className='icons'><a className='link' href="/#"><FaShoppingCart/></a></li>
        <li className='icons'><a className='link' href="/#"><FaUser/></a></li>
        </div>
        
      </ul>
    </nav>

    </div>)
    :("")}

   <div className="container">
    <div className="logo">
      <img src={AppleIcon} alt="apple-icon.png" />
    </div>
    <nav>
      <ul>

        <li><Link className='link' to="/">Home</Link></li>
        <li><Link className='link' to="/about">About</Link></li>
        <li><Link className='link' to="/shop">Shop</Link></li>
        <li><Link className='link' to="/contact">Contact</Link></li>
        <li className='icons'><a className='link' href="/#"><FaSearch/></a></li>
        <li className='icons'><a className='link' href="/#"><FaShoppingCart/></a></li>
        <li className='icons'><a className='link' href="/#"><FaUser/></a></li>
      </ul>
    </nav>

   </div>
   </>
  )
}

export default Header