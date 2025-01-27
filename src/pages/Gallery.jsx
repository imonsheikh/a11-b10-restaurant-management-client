import React from 'react';
import Heading from '../components/Heading';
import LightGallerys from '../components/LightGallerys';

const Gallery = () => {
    return (
        <div className=''>
            <div className='bg-blue-300 flex items-center h-28 pt-8'>
            <Heading title={'Gallery'} colTitle={'Section'}></Heading>
            </div>
            <div>
            <LightGallerys></LightGallerys>
            </div>
        </div>
    );
};

export default Gallery;