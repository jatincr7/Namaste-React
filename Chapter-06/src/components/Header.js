import React, { useEffect, useState } from 'react';
import { APP_LOGO } from '../utils/Image';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
    const [buttonName, setButtonName] = useState("Login")
    const onlineStatus=useOnlineStatus()
    console.log('Header called ')
    useEffect(() => {
        console.log('useeffect called ')
    },[buttonName])
    return (
        <div className='header'>
            <div className='logo-container'>
                {<img className="logo" src={ APP_LOGO} /> }
            </div>
            <div className='nav-items'>
                <ul>
                    <li> Online status:{onlineStatus? "✅":"🔴"}</li>
                    <li>
                        <Link to='/'>Home</Link>
              </li>  
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <li button className='login' onClick={() => {
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