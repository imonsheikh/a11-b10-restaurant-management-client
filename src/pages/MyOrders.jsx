import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const MyOrders = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
       fetchAllOrders()
    }, [])

    const fetchAllOrders = async() => {
        const {data} = await axiosSecure.get(`/orders/${user?.email}`) 
        console.log(data); 
        setOrders(data)
    }
    

    const handleDelete = async(id) => {
        // console.log('clidk', id); 
        try{
            // const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/order/${id}`) 
            const {data} = await axiosSecure.delete(`/order/${id}`)
            // console.log(data);
            toast.success('Data Deleted Successfully')
            // setOrders(data)
            fetchAllOrders() 
           }catch(err){
            console.log(err);
            toast.error('Something Went Wrong: ', err.message)
           }

        
    }
    

    return (
        <div>
            <h1>My Orders: {orders.length}</h1> 
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr>
                <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    FoodName:
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty:
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className=''>
        {
            orders.map(order =>  <tr 
            key={order._id}
            className="bg-white border-b dark:border-gray-700 hover:bg-gray-100">
                <td className="p-4 flex gap-2">
                    <img src={order.foodImage} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/> 
                    <div className='flex flex-col justify-center'>
                        <p className='text-black'>Buyer info:</p>
                         <p>{order?.buyer?.name}</p>
                         <div className='flex gap-3 items-center '>
                         <p>{order?.buyer?.email}</p>
                         <img className='rounded-full w-8 h-8' src={order?.buyer?.photo} alt="" />
                         </div>
                         <p><span className='text-black'>Buying Date:</span> <br/>{order?.buyingDate}</p>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                    {order?.foodName}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                    {order?.quantity}
                </td>
              
                <td className="px-6 py-4 font-semibold text-gray-900 ">
                    ${order?.price}
                </td>
                <td className="px-6 py-4">
                    <Link 
                    onClick={() => handleDelete(order._id)}
                    // to={`/delete/${order?._id}`}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline border bg-red-100 p-1.5 rounded-md">Delete</Link>
                </td>
            </tr>)
        }
       
        </tbody>
    </table>
</div>
        </div>
    );
};

export default MyOrders;