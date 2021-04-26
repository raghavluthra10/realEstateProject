import React from 'react';
import './HomePageGetStarted.css';
import Button from '../components/Button';

const HomePageGetStarted = () => {
    return (
        <div className='HomePagGetStartedContainer'>
            <div className='GetStartedImageDiv'>
                <img src='https://www.wernewyork.com/Components/Home/Images/theme/img06.png' alt=''  />
            </div>

            <div className='GetStartedTextDiv'>
                <span className='GetStartedTextDivHeading'>
                    FIND YOUR PROPERTY
                </span>
                <br />
                <br />

                <span className='GetStartedTextDivDesc'>
                    Real Estate, Simplified
                    <br />
                    Partner with our expert agents to list, market, and find the perfect buyer.
                </span>
                <br />

                <Button 
                className='GetStartedTextDivButton'
                children='GET STARTED'
                btnColor='black'
                btnSize='btn--medium'
                destination='/listings'  /> 
  
            </div>
        </div>
    )
}

export default HomePageGetStarted
