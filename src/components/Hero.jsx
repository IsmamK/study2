import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <>
  
    <div className="hero bg-black text-yellow-500 relative goblin-one">


        <div className='lg:hidden absolute -top-60 -left-20 slide-in-left'>
                  
            <img src="curve1.png " className='rotate-[20deg] ' alt="" />
       
        </div> 


                    <div className='hidden lg:block absolute -left-96 -top-[500px] slide-in-left'>
                    <img src="curve1.png" alt="" />
                    </div> 


        <div className="hero-content mt-40 md:mt-0 flex-col lg:flex-row-reverse relative z-10 ">
            
        <div className='flex lg:flex-col relative gap-5'>
          <div>
            <img 
              src="study1.png" 
              alt="" 
              className={`rounded-[100%] w-44 h-44 md:w-72 md:h-72 relative md:-left-20 shadow-2xl shadow-yellow-500 md:fade-in move-down`} 
            />
          </div>

          <div>
            <img 
              src="study2.png" 
              alt="" 
            className={`rounded-[100%] w-44 h-44 md:h-72 relative md:left-40 shadow-2xl shadow-yellow-500 md:slide-in-left move-down`} 
            />
          </div>
          <div>
            <img 
              src="study3.png" 
              alt="" 
              className={`rounded-[100%] w-44 h-44 md:w-72 md:h-72 relative md:-left-20 shadow-2xl shadow-yellow-500 md:fade-in move-down`} 
            />
          </div>
        </div>

        <div className='flex flex-col gap-10 text-center items-center md:text-left md:items-start mt-10'> 
          <h1 className="text-3xl md:text-4xl lg:text-6xl  font-extrabold fade-in relative">
            Explore the World: Study Abroad!
          </h1>
          <p className="py-6 w-3/4 scale-up mb-6">
            Unlock your potential and broaden your horizons by studying abroad. 
            Experience different cultures, gain a global perspective, and 
            enhance your educational journey. Join us for an unforgettable adventure!
          </p>
          <div>
            <button className="btn text-center bg-gold font-bold fade-in">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default Hero;
