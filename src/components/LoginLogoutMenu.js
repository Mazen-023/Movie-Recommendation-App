// src/components/LoginLogoutMenu.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LoginLogoutMenu = () => {
    return (
        <div className='p-4'>
            {/* Simple links to login and logout routes */}
            <Link to="/login" className='block text-blue-500 hover:underline'>
                Login
            </Link>
            <Link to="/registration" className='block text-blue-500 hover:underline'>
                Logout
            </Link>
        </div>
    );
};

export default LoginLogoutMenu;
