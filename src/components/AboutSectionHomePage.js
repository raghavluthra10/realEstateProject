import React from 'react';
import './AboutSectionHomePage.css';
import Button from './Button';

const AboutSectionHomePage = () => {

    const onClick = () => {

    }

    return (
        <div className='aboutSectionHomePageContainer' >
            <div className='aboutSectionHomePageReadMoreCard'>
                <span className='aboutSectionHomePageReadMoreCardHeading'>
                    OMEGA ESTATES Here To Help You
                </span>

                <span className='aboutSectionHomePageReadMoreCardDesc'>
                    OMEGA ESTATES brings you the new standard in handling real estate transactions.  
                    With a brokerage built on family values and decades of experience, 
                    R New York thrives on the success of its valued clients and the network 
                    of its esteemed sales agents.

                    <br/>
                    <br/>

                    Your real estate experience is our business, and relationships are at the 
                    heart of everything we do.  Our sales agents cut through the city’s hustle 
                    and bustle to ensure your priorities always come first.
                </span>

                <br/>

                
                <Button 
                className='readMoreButton ' 
                btnColor='black' 
                btnSize='btn--medium'
                children='READ MORE' 
                destination='/aboutus'
                />
                    
            </div>

            <div className='aboutSectionHomePageReadMoreBgImage'>
                {/* <img src={require('../images/aboutSectionPhtooot.png')} alt=''  className='aboutSectionHomePageReadMoreBgImage' /> */}
            </div>
        </div>
    )
}

export default AboutSectionHomePage
