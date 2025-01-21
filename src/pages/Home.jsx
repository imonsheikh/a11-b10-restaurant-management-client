import React from 'react';
import Banner from '../components/Banner';
import TopFoods from '../components/TopFoods';
import Team from '../components/Team';
import Customers from '../components/Customers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFoods></TopFoods>
            <Team></Team>
            <Customers></Customers>
        </div>
    );
};

export default Home;