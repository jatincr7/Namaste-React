import React from 'react';
import ReactDOM from 'react-dom/client';
import { APP_LOGO } from '../utils/Image.js';

 const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={ APP_LOGO} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
 }
export default Header;