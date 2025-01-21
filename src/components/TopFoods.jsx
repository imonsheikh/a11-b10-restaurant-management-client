import React from 'react';
import Heading from './Heading';
import Card from './Card';
import { Link } from 'react-router-dom';

const TopFoods = () => {
    return (
        <div>
            <Heading title={'Top'} colTitle={'Foods'} desc={'Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates'} ></Heading> 
            <div>

             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
             </div> 
             {/* See All buttons */}
             <Link to='/all-foods' className='flex justify-center my-5'>
             <button className="bg-blue-600 text-white font-bold text-3xl btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">See All</button>
             </Link>
            </div>
        </div>
    );
};

export default TopFoods;