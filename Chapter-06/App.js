

import React,{lazy,Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header.js';
import Body from './src/components/Body.js';

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './src/components/Contact.js';
import Error from  './src/components/Error.js'
import ResturantMenu from './src/components/ResturantMenu.js';
import UserContext from './src/utils/userContext.js';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore.js';
import Cart from './src/components/Cart.js';
// Bridge between redux and react//



  

const Grocery = lazy(() => import("./src/components/Grocery"))
const About = lazy(() => import("./src/components/About"))

//lazy loading or on-demand loading //

const AppLayout = () => {
    const [userName, setUserName] = useState()
    useEffect(() => {
        const data = {
            name:'Jatin'
        }
        setUserName(data.name)
         
     },[])
    return (
        <Provider store={ appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className=''>
                <UserContext.Provider value={{ loggedInUser:'Elon Musk' }}>
                    <Header />
                    </UserContext.Provider>
                
                     {/* Header will have  loggedInUser value of E lon Musk while all other places will have the value 'Jatin' */}
            <Outlet/>
            
            </div>
            </UserContext.Provider>
            </Provider>
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
                path: '/cart',
                element:<Cart/>
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
    



