import React from 'react';
import { Avatar, Blockquote } from "flowbite-react";

const Info = ({divider}) => {
  const mockData = [
    {
      id: 1,
      title: "John Doe",
      description: "Thanks to this consultancy, I got my student visa and started my journey in Australia! They guided me through every step of the visa process and made sure I was well-prepared to stay and study for the duration of my degree program. Highly recommend them for their expertise and support!",
      imgSrc: "https://thumbs.dreamstime.com/b/handsome-confident-man-black-suit-arms-crossed-dark-background-handsome-confident-man-black-suit-arms-crossed-145558355.jpg",
    },
    {
      id: 2,
      title: "Steve Rogers",
      description: "EWVS Education Consultants made my PR pathway super easy! With their help, I enrolled in a trade course that fits perfectly with Australia’s immigration pathways. They offered expert advice on a wide range of courses, from cookery to engineering, and their support was exceptional throughout the entire process.",
      imgSrc: "https://media.istockphoto.com/id/839214266/photo/intense-portrait-of-a-man-with-beard.jpg?b=1&s=612x612&w=0&k=20&c=INurjVOJZzn-m7Z3lF6D0g9BAiHkiVTRvHiQwkVoz6w=",
    },
    {
      id: 3,
      title: "James Spader",
      description: "I can't thank this consultancy enough! They helped me secure my partner visa, allowing me to stay in Australia with my loved one. Their guidance was thorough, and the process went smoothly thanks to their expertise. If you’re looking for a reliable agency to assist with visa matters, look no further!",
      imgSrc: "https://static.vecteezy.com/system/resources/previews/026/945/929/non_2x/business-man-on-black-background-free-photo.jpg",
    }
  ];
  
   

  return (

  

    <div
      className="md:min-h-screen bg-gradient-to-b from-gray-800 to-black text-white relative" // Add the new class here
 
    >
      
      <img src={divider} className='absolute top-0 z-100' />
  
  <div className='mt-10 p-20'>
       <h1 className='font-bold text-6xl md:text-8xl text-white z-30 pt-32'> Testimonials</h1>
       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {mockData.map((card) => (

            <div className='p-2  bg-black rounded-2xl box-shadow-xl mt-40 border border-yellow-500 '>
            <div key={card.id} className="card bg-black  drop-shadow-2xl relative" >
            <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 rounded-[100%] bg-gradient-to-r from-yellow-300 to-orange-700 w-[115px] h-[115px] flex items-center justify-center'>
          <div className='rounded-[100%] bg-black w-28 h-28 flex items-center justify-center'>
            <img
              src={card.imgSrc}// Using dynamic image source from mockData
          
              className="rounded-[100%] h-28 w-28"
            />
          </div>
        </div>

              <div className="card-body items-center text-center pt-20">
              
                <p className="text-sm font-bold italic text-white ">
                  "{card.description}"
                </p>
     
                <h2 className="card-title text-lg font-extrabold mt-10"> ~ {card.title}</h2>

              </div>
            </div>
            </div>

          ))}
        </section>


        </div>
    </div>
   
    
  );
};

export default Info;
