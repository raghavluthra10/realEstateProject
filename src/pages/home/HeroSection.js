import React, { useContext } from 'react';
import { PropertyContext } from '../../context/PropertyState';
import './HeroSection.css';

const HeroSection = () => {

    // const value = useContext(PropertyContext)

    return (
        <div className='heroContainer'>
            <div className='heroHeading'>
                We Are OMEGA ESTATES
            </div>

            <div className='heroSectionSearchListings'>
                <form>
                    <input type='text' placeholder='Address...' />
                    <input type='submit' value='Search' className='heroSectionSubmitButton' />
                </form>   
            </div>
            
        </div>
    )
}

export default HeroSection
