import React, { useEffect } from 'react';
import './AboutUs.css';
import Footer from '../../components/Footer';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <div className='aboutUsContainer'>
            <div className='aboutUs__upperHalf'>
                <header className='aboutUsHeader' > ABOUT US </header>
            </div>
           
            <div className='aboutUs__lowerHalf'>
                <div className='aboutUsOmegaEstates'>
                    OMEGA ESTATES brings you the Best properyties in New York.
                </div>  
                
                <div className='aboutUsPara1'>
                    Founded by Wall Street veteran John Lucas, OMEGA New York is the 
                    5th largest real estate brokerage in NYC with a 96% retention rate. 
                    Unlike the traditional real estate model, OMEGA New York’s unique structure 
                    allows the broker greater freedom and more success in running their own business.
                </div>
            </div>
            

        </div>

        <Footer  />    
        </>
    )
}

export default AboutUs
