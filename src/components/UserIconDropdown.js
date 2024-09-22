// src/components/UserIconDropdown.js
import React, { useState } from 'react';
import LoginLogoutMenu from './LoginLogoutMenu';

const UserIconDropdown = ({ userIcon }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleIconClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className='relative'>
            <div
                className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'
                onClick={handleIconClick}
            >
                <img src={userIcon} className='w-full h-full' alt='user icon' />
            </div>

            {isDropdownVisible && (
                <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg'>
                    <LoginLogoutMenu />
                </div>
            )}
        </div>
    );
};

export default UserIconDropdown;
