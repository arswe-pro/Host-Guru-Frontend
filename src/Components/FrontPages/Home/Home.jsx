import React from 'react';
import Footer from './Footer/Footer';
import GoogleMap from './GoogleMap';
import HeroSection from './HeroSection';
import Navbar from './Navbar/Navbar';
import Pricing from './Pricing';
import ServicesSection from './ServicesSection';
import TeamSection from './TeamSection';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <Pricing />
            <TeamSection />
            <GoogleMap />
            <Footer />
        </>
    );
};

export default Home;