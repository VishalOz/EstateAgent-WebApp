import React from 'react';
import './App.css';
import './index.css';
import Nav from './Nav'; 

const App = () => {
  return (
    <div className="relative">
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="/assets/house1.jpg" 
            alt="mainImage" 
            className="w-full h-full object-cover brightness-45"
          />
        </div>
        <Nav />
        
        {/* Main Heading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-8xl font-bold z-10 px-4 text-center mb-4">
            THIS <span className="inline-block mx-2">HOME.</span> THIS LIFE
          </h1>
          
          {/* Subtitle */}
          <p className="text-white text-lg md:text-xl tracking-[0.3em] mb-8">
            Discover more than a place...find your future
          </p>
          
          {/* Search Button */}
          <button className="bg-yellow-400 text-black font-bold shadow-lg w-40 h-12
            flex items-center justify-center rounded-lg cursor-pointer hover:bg-yellow-300 
            transition duration-200 gap-2">
            <img width="20" height="20" src="https://img.icons8.com/ios/50/search--v1.png" 
              alt="search--v1" className="filter brightness-0" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;