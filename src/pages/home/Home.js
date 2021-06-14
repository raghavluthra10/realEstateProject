import React from 'react';
import './Home.css';
import HeroSection from './HeroSection';
import Listings from './Listings';
import AboutSectionHomePage from './AboutSectionHomePage';
import HomePageGetStarted from './HomePageGetStarted';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>

        <HeroSection  />
        <Listings  />
        <AboutSectionHomePage  />
        <HomePageGetStarted  />
        <Footer  />
        
        </>
    )
}

export default Home
