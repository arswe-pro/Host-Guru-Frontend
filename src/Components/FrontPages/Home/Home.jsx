import React from 'react';
import Footer from './Footer/Footer';
import GoogleMap from './GoogleMap';
import HeroSection from './HeroSection';
import Navbar from './Navbar/Navbar';
import OurClient from './OurClient';
import OurProject from './OurProject';
import Pricing from './Pricing';
import ServicesSection from './ServicesSection';
import TeamSection from './TeamSection';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <OurClient />
            <OurProject />
            <TeamSection />
            <Pricing />
            <GoogleMap />
            <Footer />
        </div>
    );
};

export default Home;