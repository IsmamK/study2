import Navbar from '../components/Navbar';
import React,{ useState }  from 'react'
import { Outlet} from 'react-router-dom';


const Layout = () => {

  

  return (
        <div className='bg-gray-50'> 
        <Navbar />
         <Outlet  />
         </div>
  )
}

export default Layout
