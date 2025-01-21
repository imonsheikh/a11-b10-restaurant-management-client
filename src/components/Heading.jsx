import React from 'react';

const Heading = ({title, colTitle, desc}) => {
    return (
       
    <div className='my-10 text-center md:w-1/2 mx-auto '>
        <h1 className="mb-4 text-xl font-extrabold  md:text-3xl lg:text-4xl    text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> <span className="text-gray-700">{title}</span> {colTitle}.</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{desc}.</p>
    </div>

    );
};

export default Heading;