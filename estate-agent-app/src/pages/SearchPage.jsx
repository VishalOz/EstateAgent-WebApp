import React from 'react';
import Nav from '../components/Nav';

const Search = () => {
  return (
    <div>
         <div className="relative z-50">
      <div className="w-full bg-transparent bg-opacity-90 h-16 flex items-center justify-between px-4 shadow-lg">
        <nav className="flex items-center space-x-10">
          <a href='/' className='text-lg text-black hover:text-yellow-400 transition-colors duration-100 ml-30'>
            Home
          </a>
          <a href='/' className='text-lg text-black hover:text-yellow-400 transition-colors duration-100'>
            About
          </a>
          <a href='/' className='text-lg text-black hover:text-yellow-400 transition-colors duration-100'>
            Contact
          </a>
        </nav>
        <div className="flex items-center">
          <img src="/assets/logo.jpg" alt="logo" className="w-12 h-12 rounded-md" />
          <h3 className="ml-2 font-bold text-black">Home Lands</h3>
        </div>
      </div>
    </div>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center p-3">
          <div className="flex flex-col lg:flex-row gap-4 w-full max-w-7xl">
            {/* Search Form */}
            <div className="flex flex-wrap gap-5 bg-white shadow-lg rounded p-4 w-full lg:w-3/4">
              {/* Location */}
              <div className="flex flex-col w-60">
                <label htmlFor="location" className="mb-1 font-bold text-gray-700">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter Location"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Type */}
              <div className="flex flex-col w-60">
                <label htmlFor="type" className="mb-1 font-bold text-gray-700">
                  Type
                </label>
                <select
                  id="type"
                  defaultValue=""
                  className="rounded h-10 bg-white px-4 py-2 border border-gray-300 text-gray-700
                  shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="" disabled>Select Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="studio">Studio</option>
                  <option value="duplex">Duplex</option>
                </select>
              </div>

              {/* Start Date */}
              <div className="flex flex-col w-60">
                <label htmlFor="start-date" className="mb-1 font-bold text-gray-700">
                  Start Date
                </label>
                <input
                  id="start-date"
                  type="date"
                  placeholder="Any"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* End Date */}
              <div className="flex flex-col w-60">
                <label htmlFor="end-date" className="mb-1 font-bold text-gray-700">
                  End Date
                </label>
                <input
                  id="end-date"
                  type="date"
                  placeholder="Any"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* min and max prices */}
              <div className="flex flex-col w-45">
                <label>Min price: </label>
                <input
                id="min price"
                type="range"
                className="ml-5 w-40"/>
              </div>
              <label className="ml-6">Max price: </label>
                <input
                id="max price"
                type="range"
                className="w-40"/>
                <div className="flex gap-5 flex-wrap">
                {/* Min Bedrooms */}
                <div className="flex flex-col w-60">
                  <label htmlFor="min-bedrooms" className="font-bold mb-1 text-gray-700">Min Bedrooms</label>
                  <input 
                    id="min-bedrooms"
                    type="number"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Max Bedrooms */}
                <div className="flex flex-col w-60">
                  <label htmlFor="max-bedrooms" className="font-bold mb-1 text-gray-700">Max Bedrooms</label>
                  <input 
                    id="max-bedrooms"
                    type="number"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="font-bold block">Postal Code</label>
                  <input 
                    type="text"
                    className="mt-1 ml-5 h-9 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

                
            </div>

            {/* Favorites Section */}
            <div className="bg-white shadow-lg rounded p-4 w-full lg:w-1/4">
              <h1 className="font-bold text-lg mb-2">Favorites</h1>
              <p className="text-gray-600">You haven't added any favorites yet.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Search;
