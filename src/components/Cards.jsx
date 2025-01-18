import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ScrollAnimation from 'react-animate-on-scroll';

const Cards = ({divider}) => {
  const [startTypewriter, setStartTypewriter] = useState(false);
  
  const mockData = [
    {
      id: 1,
      title: "Student Visa.",
      description: "A student visa allows you to study in Australia and also to stay in Australia for the duration of your said degree program.",
      imgSrc: "student.png",
    },
    {
      id: 2,
      title: "Trade Courses",
      description: "EWVS education consultants offers easy PR pathways with trade courses, including cookery, Automotive, Engineering, Healthcare and many more",
      imgSrc: "trade.png",
    },
    {
      id: 3,
      title: "Partner/Spouse visa",
      description: "This visa allows you to enter or remain in Australia on the basis of your married or de-facto relationship with your partner.",
      imgSrc: "spouse.png",
    },
    {
      id: 1,
      title: "Visitor Visa",
      description: "A student visa allows you to study in Australia and also to stay in Australia for the duration of your said degree program.",
      imgSrc: "student.png",
    },
    {
      id: 2,
      title: " Business Visa ",
      description: "EWVS education consultants offers easy PR pathways with trade courses, including cookery, Automotive, Engineering, Healthcare and many more",
      imgSrc: "trade.png",
    },
    {
      id: 3,
      title: "Training Visa (407) ",
      description: "This visa allows you to enter or remain in Australia on the basis of your married or de-facto relationship with your partner.",
      imgSrc: "spouse.png",
    },

    {
      id: 1,
      title: "Partner Visa",
      description: "A student visa allows you to study in Australia and also to stay in Australia for the duration of your said degree program.",
      imgSrc: "student.png",
    },
    {
      id: 2,
      title: "General Skilled Migration ",
      description: "EWVS education consultants offers easy PR pathways with trade courses, including cookery, Automotive, Engineering, Healthcare and many more",
      imgSrc: "trade.png",
    },
 
  ];
  
  return (
   
      <div className="flex flex-col items-center relative">
            <img src={divider} className='absolute top-0 z-100' />
        {/* Headline */}
        <h1 className="text-center text-white text-3xl md:text-5xl lg:text-7xl font-extrabold mb-20">
          {startTypewriter && ( // Start typewriter only when scrolled into view
            <Typewriter
              words={[`What We Offer `]}
              cursor
              cursorStyle=":"
              typeSpeed={50}
              delaySpeed={1000}
            />
          )}
        </h1>

        {/* Main Content Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.map((card) => (

            <div className='border-4 p-2 h-full  border-yellow-500 bg-black rounded-2xl sticky top-'>
            <div key={card.id} className="card bg-gradient-to-r  from-gray-600 to-gray-800 p-5 h-full w-full drop-shadow-gold gap-5 relative" >
            <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 rounded-[100%] bg-gradient-to-r from-gray-400 to-gray-700 w-32 h-32 flex items-center justify-center'>
  <div className='rounded-[100%] bg-black w-28 h-28 flex items-center justify-center'>
    <img
      src={card.imgSrc}// Using dynamic image source from mockData
   
      className="rounded-[100%] w-20 h-20"
    />
  </div>
</div>

              <div className="card-body items-center text-center pt-20">
                <h2 className="card-title text-lg font-extrabold">{card.title}</h2>
                <p className='text-xs'>{card.description}</p>
                <div className="card-actions">
                  <button className="btn bg-gold">Learn More</button>
                </div>
              </div>
            </div>
            </div>

          ))}
        </section>
      </div>
  );
};

export default Cards;
