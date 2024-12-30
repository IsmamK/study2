import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider,useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Layout from './layouts/Layout';
import PlayerFinder from './components/home_components/PlayerFinder';
import FieldsList from './components/home_components/FieldsList';
import BookingForm from './components/home_components/BookingForm';
import GroupManager from './components/home_components/GroupManager';
import Dashboard from './pages/Dashboard';




const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home />},
        { path: 'players', element: <PlayerFinder />},
        { path: 'fields', element: <FieldsList />},
        { path: 'book', element: <BookingForm />},
        { path: 'groups', element: <GroupManager />},
        { path: 'dashboard', element: <Dashboard />},


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
