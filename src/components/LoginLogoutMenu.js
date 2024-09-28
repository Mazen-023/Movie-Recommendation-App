import React from "react";
import { NavLink } from "react-router-dom";
import { KeyIcon, LogoutIcon, UserIcon } from "@heroicons/react/solid"; // Import icons
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout } from "../redux/slices/authSlice"; // Import loginUser instead of login

const LoginLogoutMenu = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access auth state
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const credentials = { username: "yourUsername", password: "yourPassword" }; // Replace with actual user input
    await dispatch(loginUser(credentials)); // Dispatch the login action
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-4">
      {isAuthenticated ? (
        <div>
          <NavLink
            to="/"
            onClick={handleLogout}
            className={({ isActive }) =>
              `flex items-center space-x-2 block text-blue-500 dark:text-blue-300 font-semibold hover:text-blue-700 dark:hover:text-blue-400 hover:underline transition duration-300 ${
                isActive ? "text-blue-700 dark:text-blue-400 underline" : ""
              }`
            }
          >
            <LogoutIcon className="h-5 w-5" /> {/* Logout icon */}
            <span>Logout</span>
          </NavLink>
          <NavLink
            to="/profile" // Link to the Profile page
            className={({ isActive }) =>
              `flex items-center space-x-2 block text-blue-500 dark:text-blue-300 font-semibold hover:text-blue-700 dark:hover:text-blue-400 hover:underline transition duration-300 ${
                isActive ? "text-blue-700 dark:text-blue-400 underline" : ""
              }`
            }
          >
            <UserIcon className="h-5 w-5" /> {/* User icon */}
            <span>Profile</span>
          </NavLink>
        </div>
      ) : (
        <NavLink
          to="/login"
          onClick={handleLogin}
          className={({ isActive }) =>
            `flex items-center space-x-2 block text-blue-500 dark:text-blue-300 font-semibold hover:text-blue-700 dark:hover:text-blue-400 hover:underline transition duration-300 ${
              isActive ? "text-blue-700 dark:text-blue-400 underline" : ""
            }`
          }
        >
          <KeyIcon className="h-5 w-5" /> {/* Key icon */}
          <span>Login</span>
        </NavLink>
      )}
    </div>
  );
};

export default LoginLogoutMenu;
