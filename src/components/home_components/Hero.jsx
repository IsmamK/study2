import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 px-8 text-center">
      <h1 className="text-5xl font-extrabold mb-6">SportsConnect</h1>
      <p className="text-lg font-light mb-8">
        Your one-stop platform to find players, book fields, and create unforgettable sports memories.
      </p>
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search for players, fields, or activities"
          className="px-4 py-3 rounded-l-lg w-1/2 focus:outline-none border-none shadow-lg"
        />
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-r-lg font-semibold shadow-lg hover:bg-gray-100">
          Search
        </button>
      </div>
      <p className="mt-4 text-sm font-light">Not sure where to start? Explore our fields or find players below!</p>
    </div>
  );
};

export default Hero;
