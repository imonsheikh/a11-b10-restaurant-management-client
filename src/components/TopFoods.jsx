import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import Card from './Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TopFoods = () => { 
    const [foods, setFoods] = useState([])

    useEffect(() => {
        const fetchAllFoods = async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/foods`)
            // console.log(data);
            setFoods(data) 
        } 
        fetchAllFoods() 
    }, [])  

    return (
        <div>
            <Heading title={'Top'} colTitle={'Foods'} desc={'Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates'} ></Heading> 
            <div>

                <h1 className='font-bold bg-blue-200 inline-block p-2 rounded-md text-blue-500'>Top Foods: {foods.length}</h1>
             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    foods.map(food => <Card food={food}></Card>)
                }
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