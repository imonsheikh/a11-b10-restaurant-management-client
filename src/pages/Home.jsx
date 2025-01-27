import React from 'react';
import Banner from '../components/Banner';
import TopFoods from '../components/TopFoods';
import Team from '../components/Team';
import Customers from '../components/Customers';
import useAuth from './../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => { 

    const {loading} = useAuth()

    if(loading) return <LoadingSpinner></LoadingSpinner>

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