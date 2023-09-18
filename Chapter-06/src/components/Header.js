import React, { useEffect, useState,useContext } from 'react';
import { APP_LOGO } from '../utils/Image';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';


const Header = () => {
    const [buttonName, setButtonName] = useState("Login")
    const onlineStatus = useOnlineStatus()
    const{loggedInUser}=useContext(UserContext);

 
    useEffect(() => {
        console.log('useeffect called ')
    },[buttonName])
    return (
        <div className='flex justify-between shadow-lg  bg-pink-200  sm:bg-yellow-50'>
            <div className='logo-container'>
                {<img className="w-56" src={ APP_LOGO} /> }
            </div>
            <div className='flex items-centre'>
                <ul className='flex p-4 m-4'>
                    <li className='px-4' > Online status:{onlineStatus? "✅":"🔴"}</li>
                    <li className='px-4'>
                        <Link to='/'>Home</Link>
              </li>  
                    <li className='px-4'> 
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className='px-4'>{loggedInUser }</li>
                    <li  button className='px-4' onClick={() => {
                        console.log('button clicked ')
                       buttonName==='Login'?setButtonName('Logout'):setButtonName('Login')

                        
                        
                    }
                        
                       }
                    >{buttonName}</li>
                </ul>

            </div>
        </div>
    )
 }
export default Header;