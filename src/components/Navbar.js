import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import ClearIcon from '@material-ui/icons/Clear';



const Navbar = () => {

    const [ showNavMenu, setShowNavMenu ] = useState(true);
    console.log(showNavMenu)
    return (
        <div className='navbarContainer'>
            <div className='navbarLogo'>
                <Link to='/'>
                    Omega Estates
                </Link>
            </div>

            <div className='menuItemsDiv'>
                <ul className={!showNavMenu ? 'menuItems active' : 'menuItems'}>
                    <li onClick={() => setShowNavMenu(true)} >
                        <Link to='/'>
                            HOME
                        </Link>
                    </li>

                    <li onClick={() => setShowNavMenu(true)} >
                        <Link  to='/listings' > LISTINGS </Link>
                    </li>

                    <li onClick={() => setShowNavMenu(true)} >
                        <Link to='/aboutus'> ABOUT US </Link>
                    </li>

                    <li onClick={() => setShowNavMenu(true)}>
                        <Link to='/contactus'> CONTACT US </Link>
                    </li>
                </ul>
            </div>

            <div className='navBarMobileHandle' onClick={() => setShowNavMenu(!showNavMenu)}>
                {showNavMenu ? <HiMenu className='navBarMobileHandle' /> : <ClearIcon className='navBarMobileHandle'/>}
            </div>
            
    </div>
    )
}

export default Navbar
