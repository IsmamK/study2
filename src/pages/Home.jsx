import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Cards from '../components/Cards';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {

  const dividers = {
    'wave-black': 'dividers/wavesblack.svg',
    'wave-white': 'waveswhite.svg',
    'triangle-black':'triangle-black.svg',
    'triangle-white':'triangle-white.svg'
  }

  return (
    <div className="">
      <CarouselComponent />
      <Hero />
     
     
      {/* console.log(dividers['triangle-white']) */}
      <Info divider={dividers['wave-white']}/>


    
     <Cards divider={dividers['wave-black']} />


     
    </div>
    
  );
};

export default Home;
