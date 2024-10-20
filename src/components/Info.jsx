import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ScrollAnimation from 'react-animate-on-scroll';

// Mock Data


const Info = () => {
  return (
    <div className="flex flex-col items-center px-4 relative">
        {/* <img src="square1.png" className='w-96 absolute lg:-bottom-48 lg:-left-40 fade-in overflow-hidden'/>
        <img src="circle1.png" className='w-96 absolute lg:-top-48 lg:-right-40 fade-in'/> */}

      {/* Headline */}
      <h1 className="text-center text-5xl md:text-7xl font-extrabold  mb-20">
        <Typewriter
          words={[`What's the buzz`]}
          loop={false}
          cursor
          cursorStyle="?"
          typeSpeed={120}
          delaySpeed={1000}
        />
      </h1>

      {/* Main Content Section */}
      
      <ScrollAnimation animateIn="fadeInLeft" duration={1}   initiallyVisible={true} >
<section class="">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none  md:text-3xl lg:text-5xl ">We invest in the YOUR potential</h1>
        <p class="mb-8 text-md font-normal lg:text-lg sm:px-16 lg:px-48">Here at Committed Student's Consultancy, we dedicate our time to help YOU realize your potential and reach new heights</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 font-medium text-center text-black rounded-lg bg-gold  hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium focus:outline-none  rounded-lg border border-yellow-500 hover:bg-yellow-500 hover:text-black  focus:z-10 focus:ring-4 focus:ring-yellow-500 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">
                Learn more
            </a>  
        </div>
    </div>
</section>

</ScrollAnimation>
    </div>
  );
};

export default Info;
