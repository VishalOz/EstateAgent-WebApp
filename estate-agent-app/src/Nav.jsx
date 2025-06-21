import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className="w-full bg-transparent opacity-90 h-16 flex items-center justify-between px-4 shadow-lg ">
        <nav className="flex items-center space-x-10">
            <a href='/' className='text-1xl  text-white hover:text-gray-600 ml-30'>Home</a>
            <a href='/' className='text-1xl  text-white  hover:text-gray-600'>About</a>
            <a href='/' className='text-1xl  text-white  hover:text-gray-600'>Contact</a>
        </nav>
    </div>
    <div>
        <img src="/assets/logo.jpg" alt="logo" className="w-10 h-10 absolute top-4 right-2 rounded-md" />
        <h3>Home Lands</h3>
    </div>
    </div>
  )
}

export default Nav
