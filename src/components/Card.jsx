import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({food}) => {

  const {
    _id,
    foodName,
    foodImage,
    quantity,
    price, 
    description,
    buyer,
    purchaseCount  
  } = food || {}

    return (
        <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full py-6 rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <div className="flex items-center gap-2 px-6">
          <h3 className="text-xl text-gray-800 font-bold flex-1">{foodName}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-blue-600 shrink-0"
            viewBox="0 0 64 64">
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"></path>
          </svg>
        </div>
  
        <div className="h-[220px] ">
          <img src={foodImage} className="w-full h-full my-6" />
        </div>
  
        <div className="px-6">
          <p className="text-sm text-gray-600 leading-relaxed mt-3"><span className='text-black font-bold'>Desc: </span>{description}</p>
         <div className='flex gap-3 justify-between'>
         <p className="text-sm text-gray-600 leading-relaxed mt-3"><span className='text-black font-bold'>Buyer Name: </span>{buyer?.name}</p>
         <p className="text-sm text-gray-600 leading-relaxed mt-3"><span className='text-black font-bold'>purchase Count: </span>{purchaseCount}</p>
          <div className='w-10 h-10'>
            <img className='rounded-full w-full h-full' src={buyer?.photo} alt="" />
          </div>
         </div>
  
          <div className="mt-8 flex items-center flex-wrap gap-4">
            <h3 className="text-xl text-gray-800 font-bold flex-1">Price: ${price}</h3>
            <h3 className="text-xl text-gray-800 font-bold flex-1">Quantity: ${quantity}</h3>
            <Link to={`/single-food/${_id}`}>
            <button 
              // type="button"
              
              className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Card;