import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import moment from 'moment'
// import { useMutation, useQueryClient } from '@tanstack/react-query';

const FoodPurchase = () => { 
  const {id} = useParams()  
  const [food,setFood] = useState({}) 
  const {user} = useAuth() 
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure() 
  const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  useEffect(() => {
   const fetchAllFoods = async () => {
       const {data} = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/food/${id}`)
      //  console.log(data);
       setFood(data) 
   } 
   fetchAllFoods() 
}, [id])   

//Single Dynamic food 
const {
 _id,
 foodName,
 foodImage,
 foodCategory,
 quantity,
 price,
 foodOrigin,
 description,
 purchaseCount,
 buyer 

} = food || {} 
// console.log(food.buyer); 

const handleSubmit = async (e) => {
  e.preventDefault()



  const purchaseData = {
     email: user?.email,
     foodName,
     foodImage,
     foodCategory,
     quantity,
     price,
     foodOrigin,
     description,
     purchaseCount,
     buyer,
     buyingDate: currentDate,
     purchaseId: _id,
  } 
  // console.log(purchaseData);
  
 
  //try catch
  try{
   const {data} = axiosSecure.post(`${import.meta.env.VITE_API_URL}/add-food-purchase`, purchaseData)

   //Validation for own product purchase 
   if(buyer.email === user?.email) return toast.error('You can not purchase your own product') 
    fetchAllFoods() 
   toast.success('Food Purchase Successful') 
   console.log(data);
   navigate('/my-orders')
  }catch(err){
   toast.error(err.response.data) 
  }
}

  

    return ( 
        <div>
        <div className="bg-blue-500 text-center text-white py-5">
          <h1 className="font-semibold text-4xl">Food Purchase</h1>
        </div>
        <div className="font-[sans-serif]">
          <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-96">
            <img
              src={foodImage}
              alt="Banner Image"
              className="w-full h-full object-cover"
            />
          </div>
  
          <div className="mt-2 mb-6 px-4">
            <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded">
              <h2 className="text-xl text-gray-800 font-bold">
                {/* Food Add By:  */}
                <span className="text-violet-800 font-bold text-xl underline">
                  {/* {user?.displayName} */}
                </span>
              </h2>
  
              <form
                onSubmit={handleSubmit} 
                className="mt-8 grid sm:grid-cols-2 gap-6"
              >
                {/* <div>
                  <label className="text-gray-800 text-sm block mb-2">
                    Food Name
                  </label>
                  <input 
                    name="foodName"
                    type="text"
                    defaultValue={foodName}
                    placeholder="Food Name"
                    className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm block mb-2">Price</label>
                  <input 
                    name="price"
                    type="number"
                    placeholder="Price"
                    className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm block mb-2">Quantity</label>
                  <input 
                    name="quantity"
                    type="number"
                    placeholder="quantity"
                    className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm block mb-2">Quantity</label>
                  <input 
                    name="quantity"
                    type="number"
                    placeholder="quantity"
                    className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                  />
                </div> */}  
                <div>
                <p className="text-sm text-gray-600 leading-relaxed mt-3"><span className='text-black font-bold'>Food Name: </span>{foodName}</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-3"><span className='text-black font-bold'>Price: </span>${price}</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-3"><span className='text-black font-bold'>Quantity: </span>{quantity}</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-3"><span className='text-black font-bold'>Buying Date: </span>{currentDate}</p>
                </div>
            
              {/* Buyer Details starts */}
                <div className='f'>
                  <h1 className='font-bold text-lg'>Buyer Details: </h1> 
                  <div>
                  <label className="text-gray-800 text-sm block mb-2">
                    Buyer Name:
                  </label>
                  <input
                    readOnly
                    defaultValue={buyer?.name}
                    type="email"
                    className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none bg-blue-200"
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm block mb-2">
                    Buyer Email:
                  </label>
                  <input 
                    name="email"
                    readOnly
                    defaultValue={buyer?.email}
                    type="email"
                    className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none bg-blue-200"
                  />
                </div>
               
                </div>
              {/* Buyer Details ends */}
         
  
             <div className='text-start mt-20 '>
             <button 
                  type="submit"
                  className="text-white w-max font-bold text-lg bg-[#007bff] hover:bg-blue-600 tracking-wide rounded px-14 py-4"
                >
                  Purchase
                </button>
             </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodPurchase;