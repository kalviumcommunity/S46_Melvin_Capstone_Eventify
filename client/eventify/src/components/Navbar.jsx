import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-2 text-white mx-2">
      <a
        aria-label="Luma Home"
        href="/"
        target="_self"
        className="flex items-center cursor-pointer"
      >
        <img src={logo} alt="" className="w-9 h-8 mx-2" />
      </a>
      <div className="flex items-center space-x-4">
        <a className="button" href="#">
          Explore Events
          <span className="button__icon-wrapper">
            <svg
              width="10"
              className="button__icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>

            <svg
              className="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </span>
        </a>

        <a
          href="/signin"
          target="_self"
          className="text-[#cacaca] hover:text-white rounded-full text-sm px-5 py-2.5 bg-gray-800 bg-opacity-30 hover:bg-opacity-80 hover:bg-gray-900"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
