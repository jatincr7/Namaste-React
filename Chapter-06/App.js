

import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header.js';
import Body from './src/components/Body.js';

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './src/components/Contact.js';
import Error from  './src/components/Error.js'
import ResturantMenu from './src/components/ResturantMenu.js';



  

const Grocery = lazy(() => import("./src/components/Grocery"))
const About = lazy(() =>import ("./src/components/About"))
//lazy loading or on-demand loading //

const AppLayout = () => {
    return (
        <div className=''>
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
                element:(
                    <Suspense fallback={<h1>Loading......................</h1>}><About /></Suspense>
                ),
            },
            {
                path: '/contact',
                element:<Contact/>
            },
            {
                path: '/grocery',
                element:(
                    <Suspense fallback={<h1>Loading......................</h1>}><Grocery /></Suspense>
                ),
             
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
    



