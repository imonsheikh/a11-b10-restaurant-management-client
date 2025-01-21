import React from 'react';
import Heading from '../components/Heading';
import Card from '../components/Card';

const AllFoods = () => {
    return (
        <div>
            <Heading title={'All Foods'}></Heading>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
             </div> 
        </div>
    );
};

export default AllFoods;