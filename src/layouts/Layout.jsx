import Navbar from '../components/Navbar';
import React,{ useState }  from 'react'
import { Outlet} from 'react-router-dom';


const Layout = () => {

  

  return (
        <>
        <Navbar />
         <Outlet  />
         </>
  )
}

export default Layout
