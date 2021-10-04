import React from 'react';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <ServiceHome></ServiceHome>
        </div>
    );
};

export default Home;