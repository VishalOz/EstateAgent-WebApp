import React from 'react'

const Search = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-3">
      <div className="flex gap-4">
        <div className=" flex w-260 h-auto bg-white shadow-lg rounded p-4 gap-5">
          <div className="flex flex-col mb-4 w-60">
                <label htmlFor="name" className="mb-1 font-bold text-gray-700">
                  Location
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Location"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
          </div>

          <div className="flex flex-col mb-4 w-60">
            <label htmlFor="type" className="mb-1 font-bold text-gray-700">
              Type
            </label>
            <select
              id="type"
              className="rounded w-60 h-10 bg-white px-4 py-2 border border-gray-300 bg-white text-gray-700 shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-yellow-400"
              defaultValue=""
            >
            <option value="" disabled>
            </option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="studio">Studio</option>
            <option value="duplex">Duplex</option>
          </select>
</div>


          <div className="flex flex-col mb-4 w-60">
            <label htmlFor="name" className="mb-1 font-bold text-gray-700">
              Start Date
            </label>
            <input
              id="name"
              type="text"
              placeholder="Any"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex flex-col mb-4 w-60">
            <label htmlFor="name" className="mb-1 font-bold text-gray-700">
              End Date
            </label>
            <input
              id="name"
              type="text"
              placeholder="Any"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
        <div className="w-64 h-auto bg-white shadow-lg rounded p-4">

        </div>
      </div>
    </div>
  )
}

export default Search
