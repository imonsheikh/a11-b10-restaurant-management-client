import React, { useEffect, useState } from 'react';
import useAxiosSecure from './../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import MyFoodsTable from '../components/MyFoodsTable';

const MyFoods = () => {
  
    
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetchAllJobs() 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const fetchAllJobs = async () => {
    const {data} = await axiosSecure.get(`/foods/${user?.email}`)
    setFoods(data)
  }
  console.log(foods); 

  //Handle Update 
  const handleUpdate = (id) => {
    console.log(id);
    
  }

    

    return (
        <div>
            <h1>My Food: {foods.length}</h1> 
            <div className="font-[sans-serif] overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="whitespace-nowrap">
          <tr>
            <th className="pl-4 w-8">
              <input id="checkbox" type="checkbox" className="hidden peer" />
              <label for="checkbox"
                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                  <path
                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                    data-name="7-Check" data-original="#000000" />
                </svg>
              </label>
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              FoodName and photo
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Quantity:
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                viewBox="0 0 401.998 401.998">
                <path
                  d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                  data-original="#000000" />
              </svg>
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Price:
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                viewBox="0 0 401.998 401.998">
                <path
                  d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                  data-original="#000000" />
              </svg>
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap">
       
        {
          foods.map(food => <MyFoodsTable 
            key={food._id}
            food={food} 
            handleUpdate={handleUpdate}></MyFoodsTable>)
        }
    
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default MyFoods;