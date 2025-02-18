import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBar from "./admin-components/SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-background-main border-border-primary border-b-[1px] text-text-primary">
      <div className="w-full px-2 sm:px-4 lg:px-4">
        <div className="h-16 relative flex items-center justify-between">
          <div className="font-bold text-xl">ProjectIon</div>
          <div className="flex flex-row items-center justify-end gap-4">
            <SearchBar />
            <div>
              <IoMdNotificationsOutline className="text-2xl" />
            </div>
            <div onClick={toggleDropdown}>
              <div className="w-8 h-8 rounded-full border-border-primary border-[1px] bg-background-main cursor-pointer"></div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="origin-top-right absolute right-0 top-[48px] mt-2 mr-2 w-60 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="block w-full px-2 py-1 text-sm">
                <li className="bg-gray-200 px-2 py-1">Something</li>
              </div>
              <li>
                <a
                  href="/some"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="/some1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="/some2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
