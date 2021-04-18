import Navbar from '../Home/Navbar/Navbar';
import React from 'react';
import Footer from '../Home/Footer/Footer';
import loader from '../../../images/loader.gif'

const Orders = () => {
    return (
        <div>
            <Navbar />

            <div style={{ textAlign: 'center' }}>
                <img src={loader} alt="" />
            </div>

            <Footer />
        </div>
    );
};

export default Orders;