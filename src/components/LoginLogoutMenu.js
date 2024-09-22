import React from "react";
import { NavLink } from "react-router-dom";
import { KeyIcon, LogoutIcon } from "@heroicons/react/solid"; // Import icons
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Form/authSlice";

const LoginLogoutMenu = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access auth state
  const dispatch = useDispatch();

  const handleLogin = () => dispatch(login());
  const handleLogout = () => dispatch(logout());

  return (
    <div className="p-4">
      {/* NavLink for Login with active state and an icon */}
      <NavLink
        to="/login"
        onClick={handleLogin}
        className={({ isActive }) =>
          `flex items-center space-x-2 block text-blue-500 font-semibold hover:text-blue-700 hover:underline transition duration-300 ${
            isActive ? "text-blue-700 underline" : ""
          }`
        }
      >
        <KeyIcon className="h-5 w-5" /> {/* Key icon */}
        <span>Login</span>
      </NavLink>

      {/* NavLink for Logout with active state and an icon */}
      <NavLink
        to="/registration"
        onClick={handleLogout}
        className={({ isActive }) =>
          `flex items-center space-x-2 block text-blue-500 font-semibold hover:text-blue-700 hover:underline transition duration-300 mt-2 ${
            isActive ? "text-blue-700 underline" : ""
          }`
        }
      >
        <LogoutIcon className="h-5 w-5" /> {/* Logout icon */}
        <span>Logout</span>
      </NavLink>
    </div>
  );
};

export default LoginLogoutMenu;
