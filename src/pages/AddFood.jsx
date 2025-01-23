import React from "react";
// import Heading from "../components/Heading"; 
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {useMutation, useQueryClient} from '@tanstack/react-query'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const {isPending, mutateAsync} = useMutation({
    mutationFn: async foodData =>{
      await axiosSecure.post(`/add-food`, foodData)
    },
    onSuccess: () => {
      console.log('Food Data Saved');
      queryClient.invalidateQueries({queryKey: ['foods']}) // এর মানে, React Query বুঝবে যে এই কুইরির ক্যাশ করা ডেটা আর আপডেটেড নয় এবং এটি ব্যাকগ্রাউন্ডে রি-ফেচিং শুরু করবে।'jobs' নামের কুইরির ক্যাশ ডেটা পুরোনো হয়েছে। ব্যাকগ্রাউন্ডে নতুন ডেটা আনো। UI-তে সর্বদা সঠিক এবং আপডেটেড ডেটা দেখাও।       
    },
    onError: err => {
      console.log(err); 
    }
  })


  //handle form
  const handleSubmit = async (e) => { 
    console.log('test');
    
    e.preventDefault();
    const form = e.target;

    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodCategory = form.foodCategory.value;
    const quantity = parseFloat(form.quantity.value)
    const price = parseFloat(form.price.value);
    const foodOrigin = form.foodOrigin.value;
    const description = form.description.value; 
    const email = form.email.value

    const formData = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      foodOrigin,
      description,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL 
      }
    };

    console.log('form DAta', formData); 
    //Try Catch blog 
    try{
      await mutateAsync(formData)
      form.reset()
      toast.success('Data Add Successful') 

    }catch(err){
     toast.error('Wrong', err.message)
    }
    

  };

  return (
    <div>
      <div className="bg-blue-500 text-center text-white py-5">
        <h1 className="font-semibold text-4xl">ADD FOOD</h1>
      </div>
      <div className="font-[sans-serif]">
        <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
          <img
            src="https://readymadeui.com/cardImg.webp"
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="-mt-28 mb-6 px-4">
          <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded">
            <h2 className="text-xl text-gray-800 font-bold">
              Food Add By{" "}
              <span className="text-violet-800 font-bold text-xl underline">
                {user?.displayName}
              </span>
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid sm:grid-cols-2 gap-6"
            >
              <div>
                <label className="text-gray-800 text-sm block mb-2">
                  Food Name
                </label>
                <input 
                  name="foodName"
                  type="text"
                  placeholder="Food Name"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">
                  Food Image
                </label>
                <input
                  type="url" 
                  name="foodImage"
                  placeholder="Food Image"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">
                  Food Category
                </label>
                <select
                  type="text"
                  name="foodCategory"
                  placeholder="Food Category."
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                  >
                  <option value="Fast Food">Fast Food</option>
                  <option value="Healthy Food">Healthy Food</option>
                  <option value="Sea Food">Sea Food</option>
                  </select>
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
                <label className="text-gray-800 text-sm block mb-2">Price</label>
                <input 
                  name="price"
                  type="number"
                  placeholder="Price"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">
                  Food Origin(Country)
                </label>
                <select 
                  name="foodOrigin"
                  type="text"
                  placeholder="country"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Bangladesh">USA</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">
                  Add By Email:
                </label>
                <input 
                  name="email"
                  readOnly
                  defaultValue={user?.email}
                  type="email"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none bg-blue-200"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">
                  Add By Name:
                </label>
                <input
                  readOnly
                  defaultValue={user?.displayName}
                  type="email"
                  className="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none bg-blue-200"
                />
              </div>
              <div className="col-span-full">
                <label className="text-gray-800 text-sm block mb-2">
                  Description
                </label>
                <textarea
                  name="description" 
                  placeholder="ingredients, making procedure etc"
                  rows="6"
                  className="w-full rounded px-4 border border-gray-300 text-sm pt-3 focus:border-blue-600 outline-none"
                ></textarea>
              </div>

           <div>
           <button 
                type="submit"
                className="text-white w-max bg-[#007bff] hover:bg-blue-600 tracking-wide rounded text-sm px-4 py-2.5"
              >
                Add Food
              </button>
           </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
