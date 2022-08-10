import React, { useState } from 'react'
import {Button} from './Button'
import HomeIcon from '@mui/icons-material/Home';
import SyncIcon from '@mui/icons-material/Sync';
import FlightIcon from '@mui/icons-material/Flight';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import {Link} from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'

function Navbar() {
const [click, setClick] = useState(false);
const [dropdown, setDropdown] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
  if(window.innerWidth < 960) {
    setDropdown(true);
  } else{
    setDropdown(true);
  }
};

const onMouseLeave = () => {
  if(window.innerWidth < 960) {
    setDropdown(false);
  } else{
    setDropdown(false);
  }
};
  return (
    // nav section ul, li, link and hambuger menu //
    <>
        <nav className='navbar'>
            <Link to='/' className='Navbar-logo'>
            <HomeIcon></HomeIcon>
            </Link>
            <ul className={click? 'nav-menu1 active' : 'nav-menu1'}>

<li className='nav-item1'>
  <Link to='/' className='nav-links1' onClick={closeMobileMenu}>
  <FlightIcon></FlightIcon> 
  </Link>
</li>


<li className='nav-item1'>

  <Link to='/products' className='nav-links1' onClick={closeMobileMenu}>
  <BuildIcon></BuildIcon><i className='fas fa-caret-down' />
  </Link>
</li>

<li className='nav-item1'>
  <Link to='/products' className='nav-links1' onClick={closeMobileMenu}>
  <SettingsIcon></SettingsIcon> 
  </Link>
</li>


<li className='nav-item1'>
  <Link to='/contact-us' className='nav-links1' onClick={closeMobileMenu}>
   <PersonIcon></PersonIcon>John Smith
  </Link>
</li>

<li className='nav-item1'>
  <Link to='/contact-us' className='nav-links1' onClick={closeMobileMenu}>
   <SyncIcon></SyncIcon> 
  </Link>
</li>



</ul>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        
          <ul className={click? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
            SCHEDULE
         </Link>
           </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              FLIGHTS<i className='fas fa-caret-down' />
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              SALES<i className='fas fa-caret-down' />
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
               HANDLING<i className='fas fa-caret-down' />
              </Link>
            </li>

            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

              <Link to='/mx' className='nav-links' onClick={closeMobileMenu}>
          MX <i className='fas fa-caret-down' />
              </Link>
        {dropdown && <Dropdown />}
            </li>

            <li className='nav-item'>
              <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
          CREW<i className='fas fa-caret-down' />
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
               REPORT<i className='fas fa-caret-down' />
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/log-out' className='nav-links-mobile' onClick={closeMobileMenu}>
               Logout
              </Link>
            </li>
          </ul>
          <Button />
        </nav>
    </>
  )
}

export default Navbar
