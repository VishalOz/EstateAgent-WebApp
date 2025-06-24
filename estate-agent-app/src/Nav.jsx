import React from 'react'

const Nav = () => {
  return (
    <div className="relative z-50">
      <div className="w-full bg-transparent bg-opacity-90 h-16 flex items-center justify-between px-4 shadow-lg">
        <nav className="flex items-center space-x-10">
          <a href='/' className='text-lg text-white hover:text-yellow-400 transition-colors duration-100 ml-30'>
            Home
          </a>
          <a href='/' className='text-lg text-white hover:text-yellow-400 transition-colors duration-100'>
            About
          </a>
          <a href='/' className='text-lg text-white hover:text-yellow-400 transition-colors duration-100'>
            Contact
          </a>
        </nav>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2
             focus:ring-yellow-400 transition-colors duration-200"
          />
        </div>
        <div className="flex items-center">
          <img src="/assets/logo.jpg" alt="logo" className="w-12 h-12 rounded-md" />
          <h3 className="ml-2 font-bold text-white">Home Lands</h3>
        </div>
      </div>
    </div>
  )
}

export default Nav