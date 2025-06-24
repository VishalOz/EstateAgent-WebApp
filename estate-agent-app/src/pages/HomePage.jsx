import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
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

      {/* Heading */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl md:text-8xl font-bold z-10 px-4 text-center mb-0">
          THIS <span className="inline-block mx-2">HOME.</span> THIS LIFE
        </h1>

        <p className="text-white text-md md:text-xl tracking-[0.4em] mb-8">
          Discover more than a place...find your future
        </p>

        <button
          onClick={handleSearchClick}
          className="bg-yellow-400 text-black font-bold shadow-lg w-40 h-12
            flex items-center justify-center rounded-lg cursor-pointer hover:bg-yellow-300 
            transition duration-200 gap-2"
        >
          <img width="20" height="20" src="https://img.icons8.com/ios/50/search--v1.png" 
            alt="search--v1" className="filter brightness-0" />
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePage;

