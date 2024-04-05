import React from "react";
import { NavLink, Form } from "react-router-dom";

// Assets
import Logo from "../assets/logo.png";

// Library
import {ArchiveBoxXMarkIcon} from "@heroicons/react/24/solid";

const CustomNavbar = ({userName}) => {
  return (
    <nav className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="flex justify-center items-center">
          <NavLink to="/" aria-label="nav to home">
            <img className="block h-32 w-auto" src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="hidden md:flex ml-4">
          <ul className="flex items-center space-x-4">
            <li className="text-gray-500 hover:text-gray-700 cursor-pointer text-4xl">
              <NavLink to="/detailexpenses" aria-label="nav to dashboard">Expenses</NavLink>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          {userName && (
            <Form
              method="post"
              action="/logout"
              onSubmit={(event) => {
                /* eslint-disable no-restricted-globals */
                if (!confirm("Delete user and relevant data?")) {
                  event.preventDefault();
                }
              }}
            >
              <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <span className="mr-2 ">Log Out</span>
                <ArchiveBoxXMarkIcon className="w-10 h-10" />
              </button>
            </Form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;