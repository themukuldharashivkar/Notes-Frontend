import React, { useState } from "react";
import Button from "../common/Button";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Notes", link: "/notes" },
    { name: "Todo", link: "/todos" },
    { name: "Login", link: "/login" },
    { name: "Contact Us", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // const loginNavigationHandler=()=>{
  //   navigate('/login');
  // }

  const registerNavigationHandler = () => {
    navigate("/signup");
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-100"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          noted.
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <span className="text-white">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </span>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-lg md:text-xl md:my-0 my-7"
            >
              <NavLink
                to={link.link}
                className="text-white hover:text-indigo-500 hover:font-bold duration-300"
                onClick={() => setOpen(!open)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {/* <Button onClick={loginNavigationHandler}>
          Login
        </Button> */}

          <Button onClick={registerNavigationHandler}>Sign Up</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
