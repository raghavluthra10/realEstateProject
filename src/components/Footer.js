import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='FooterContainer'>
            <div className='footer__uperHalf' >
                <div className='footer__formDiv' >
                    <form className='footerForm'>
                        <input type='text' className='footerInputText' placeholder='email@example.com'  />
                        <input type='submit' className='footerInputSubmit' value='Sign Up'  />
                    </form>
                </div>
                
                <div className='footerMenuItems'>
                    <ul className='footer__ulMenu'>
                        <li>
                            <Link to='/'> Home </Link>
                        </li>

                        <li>
                            <Link to='/listings' > Listings </Link>
                        </li>

                        <li>
                            <Link to='/aboutus'> About Us </Link> 
                        </li>

                        <li>
                            <Link to='/contactus'> Contact Us </Link>
                        </li>
                    </ul>
            
                </div>
            </div>
          
            <div className='footer__lowerHalf'>
                <div className='footerSocialMediaIcons'>
                    <FaInstagramSquare  />
                    <FaFacebookSquare />
                    <FaTwitterSquare  />
                </div>

                <div className='footerTermsAndCondition'>
                    Terms & Conditions | Privacy Policy 
                </div>
            </div>
        </div>
    )
} 

export default Footer
