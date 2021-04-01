import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';



const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <div className='navbarLogo'>
                <Link to='/'>
                    Logo Estates
                </Link>
            </div>

            <div className='menuItemsDiv'>
                <ul className='menuItemsList'>
                    <li>
                        <Link to='/'>
                            HOME
                        </Link>
                    </li>

                    <li>
                        <Link  to='/listings' > LISTINGS </Link>
                    </li>

                    <li>
                        <Link to='/aboutus'> ABOUT US </Link>
                    </li>

                    <li>
                        <Link to='/contactus'> CONTACT US </Link>
                    </li>
                </ul>
            </div>

            <HiMenu className='navbarMobileMenu' />
            
    </div>
    )
}

export default Navbar
