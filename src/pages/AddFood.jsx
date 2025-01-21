import React from 'react';

const AddFood = () => {
    return (
        <div>
            <h1>Add food</h1>
            <div class="font-[sans-serif]">
      <div class="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
        <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" class="w-full h-full object-cover" />
      </div>

      <div class="-mt-28 mb-6 px-4">
        <div class="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded">
          <h2 class="text-xl text-gray-800 font-bold">Food Add By User</h2>

          <form class="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <label class="text-gray-800 text-sm block mb-2">Food Name</label>
              <input type='text' placeholder='Food Name'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Food Image</label>
              <input type='url' placeholder='Food Image' 
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Food Category</label>
              <input type='text' placeholder='Food Category.'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Quantity</label>
              <input type='number' placeholder='quantity'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Price</label>
              <input type='number' placeholder='Price'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Food Origin</label>
              <input type='text' placeholder='country'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div>
              <label class="text-gray-800 text-sm block mb-2">Add By</label>
              <input type='email' placeholder='email'
                class="w-full rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none" />
            </div>
            <div class="col-span-full">
              <label class="text-gray-800 text-sm block mb-2">Description</label>
              <textarea placeholder='ingredients, making procedure etc' rows="6"
                class="w-full rounded px-4 border border-gray-300 text-sm pt-3 focus:border-blue-600 outline-none"></textarea>
            </div>
      
            <button type='button'
              class="text-white w-max bg-[#007bff] hover:bg-blue-600 tracking-wide rounded text-sm px-4 py-2.5">
      
              Add Food
            </button>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AddFood;