import {React,useEffect} from 'react'
import Hero from '../components/Hero'
import ScrollAnimation from 'react-animate-on-scroll';
import Info from '../components/Info';
import Cards from '../components/Cards';


const Home = () => {
   

  return (
    <div className='flex flex-col gap-0 bg-black min-h-screen'>
        <Hero/>

        <ScrollAnimation animateIn="fadeInLeft" duration={1}>
                 <img src="divider2.png" alt="" className=''/>
        </ScrollAnimation>
         
        <Info />

        <ScrollAnimation animateIn="fadeInLeft" duration={1}>
             <img src="divider2.png" alt="" className=''/>
        </ScrollAnimation>

        <Cards />

        <ScrollAnimation animateIn="fadeInLeft" duration={1}>
             <img src="divider2.png" alt="" className=''/>
        </ScrollAnimation>

        <div className='h-96'></div>
    </div>
  )
}

export default Home
