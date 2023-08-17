

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header.js';
import Body from './src/components/Body.js';
import About  from './src/components/About.js';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './src/components/Contact.js';
import Error from  './src/components/Error.js'
import ResturantMenu from './src/components/ResturantMenu.js';


  



const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet/>
            
       </div>
   )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element:<Body/>
           },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: '/contact',
                element:<Contact/>
            },
            {
                path: '/resturant/:restId',
                element:<ResturantMenu/>
            }
        ],
        errorElement:<Error/>
    }
    
  
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter } />)
    



