import React from 'react';
import { Carousel } from "flowbite-react";
const CarouselComponent = () => {
  return (
    <div className="h-64 xl:h-96 2xl:h-[700px]">
      <Carousel slideInterval={1500}>
        
       <img src="https://www.lbcc.edu/sites/main/files/imagecache/lightbox/main-images/study_aborad_carousel.jpg" alt="..." />
        
        <img src="https://acestudyabroadgh.com/wp-content/uploads/2023/07/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme-scaled.jpg" alt="..." />
        <img src="https://www.road2college.com/wp-content/uploads/2021/02/Untitled-design.png" alt="..." />
        <img src="https://ilacinternationalcollege.com/wp-content/uploads/2024/05/Featured-image-1024x683.jpg" alt="..." />
        <img src="https://www.admizzionzcampuz.com/wp-content/uploads/2023/09/friends-with-smile-happy-emotions-university-1-1024x683.jpg" alt="..." />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
