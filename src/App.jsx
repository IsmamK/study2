import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider,useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Layout from './layouts/Layout';




const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home />},

        // { path: 'about',
          
        //   children:[
        //   { path: '', element: <Warehouse /> },
          
         

        // ] },

        // { path: 'our-services',
          
        //   children:[
        //   { path: '', element: <Products /> },
          
         

        // ] },
    

      ],
    },

  ]);

  return <RouterProvider router={router} />;

  
};

export default App;
