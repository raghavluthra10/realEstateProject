import React from 'react';
import './Home.css';
import HeroSection from './HeroSection';
import Listings from './Listings';
import AboutSectionHomePage from '../../components/AboutSectionHomePage';
import HomePageGetStarted from '../../components/HomePageGetStarted';
import Footer from '../../components/Footer';
// import  PropertyState  from '../../context/PropertyState';

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
