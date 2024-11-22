// src/components/UserIconDropdown.js
import React, { useState, useEffect, useRef } from "react";
import LoginLogoutMenu from "./LoginLogoutMenu";

const UserIconDropdown = ({ userIcon }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    // Hide dropdown if clicking outside of it
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative">
      <div
        className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all"
        onClick={toggleDropdown}
      >
        <img src={userIcon} className="w-full h-full" alt="user icon" />
        User
      </div>

      {isDropdownVisible && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg"
        >
          <LoginLogoutMenu />
        </div>
      )}
    </div>
  );
};

export default UserIconDropdown;
