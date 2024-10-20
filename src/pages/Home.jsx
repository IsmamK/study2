import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Cards from '../components/Cards';
import CarouselComponent from '../components/Carousel';

const Home = () => {
  const [isCardSectionVisible, setIsCardSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardSection = document.getElementById('card-section'); // Card section to stop scrolling

      if (cardSection) {
        const rect = cardSection.getBoundingClientRect();

        // Detect if the card section is in view
        if (rect.top <= 100 && rect.bottom >= 0) {
          setIsCardSectionVisible(true);
          document.body.style.overflow = 'hidden'; // Lock body scroll
        } else {
          setIsCardSectionVisible(false);
          document.body.style.overflow = ''; // Unlock body scroll
        }
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // Cleanup scroll listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-0 bg-black min-h-screen">
      <CarouselComponent />
      <Hero />
      <Info />
      
      {/* Card Section */}
        <Cards />

        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>

     
    </div>
    
  );
};

export default Home;
