import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import Card from '../components/Card';
import axios from 'axios';

const AllFoods = () => {

    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('') 

    useEffect(() => {
        const fetchAllFoods = async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-foods?search=${search}`)
            console.log(data);
            setFoods(data) 
        } 
        fetchAllFoods() 
    }, [search])  

    // const handleSearch = (e) => {

    // }

    return (
        <div>
            <div className='bg-slate-400 text-white  pt-2'>
            <Heading title={'All Foods'}></Heading>
            </div>  

            <div>
<div className="relative mr-6 my-2">
  <input  
  onChange={(e) => setSearch(e.target.value)}
  type="search" className="bg-purple-white shadow rounded border-2 p-3" placeholder="Search by name..."/>
  <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">


  </div>
</div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
               {
                foods.map(food => <Card 
                    key={food._id}
                    food={food}></Card>)
               } 
             </div> 
        </div>
    );
};

export default AllFoods;