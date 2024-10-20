import React from 'react';

const Info = () => {
  return (
    <div
      className="hero h-96 md:min-h-screen animated-spiral" // Add the new class here
      style={{
        backgroundImage: "url(circular.jpg)", // Background image
        backgroundSize: 'cover', // Ensures the image covers the entire area
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-6xl lg:text-7xl font-bold">Hello there</h1>
          <p className="mb-5 text-center text-wrap text-xs md:text-lg lg:text-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn bg-gold font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
