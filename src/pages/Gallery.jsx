import React from 'react';
import Heading from '../components/Heading';
import LightGallerys from '../components/LightGallerys';

const Gallery = () => {
    return (
        <div className=''>
            <Heading title={'Gallery'} colTitle={'Section'}></Heading>
            <div>
            <LightGallerys></LightGallerys>
            </div>
        </div>
    );
};

export default Gallery;