import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <>
  
  <div
  className="hero h-96  md:min-h-screen"
  style={{
    backgroundImage: "url(blackgrad.jpg)",
  }}>
    {/* <img src="goldsquare.png" alt="" /> */}
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-3xl md:text-5xl lg:text-9xl font-bold">Study Abroad!</h1>
      <h1 className="mb-5 text-3xl md:text-5xl font-bold">Your dream begins here</h1>
      <p className="mb-5 text-xs md:text-md">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn bg-gold">Get Started</button>
    </div>
  </div>
</div>
    </>
  );
}

export default Hero;
