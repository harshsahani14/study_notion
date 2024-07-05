import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/Logo.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const NavBar = ({ setLoggedIn, isLoggedIn }) => {
  let nav = useNavigate();

  function clickHandler() {
    setLoggedIn(false);
    toast.success("Logged out");
  }

  return (
    <div className=" flex w-[80%] mx-auto gap-x-[300px] pt-4 ">
      <Link to="/">
        <img src={Logo} className=" w-[175px] ml-4 mt-2"></img>
      </Link>

      <ul className=" flex gap-x-[25px] text-white opacity-[70%] ml-6 mt-3">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/"> About </Link>
        </li>
        <li>
          <Link to="/"> Contact </Link>
        </li>
      </ul>

      <div className=" flex gap-x-4 pl-5 ">
        {isLoggedIn ? (
          <Link to="/">
            {" "}
            <button
              onClick={clickHandler}
              className=" bg-slate-800 text-white opacity-[70%] w-[80px] rounded-md h-10 outline-slate-700 outline-1 outline px-2"
            >
              Log Out
            </button>{" "}
          </Link>
        ) : (
          <Link to="/login">
            <button className=" bg-slate-800 text-white opacity-[70%] w-[70px] rounded-md h-10 outline-slate-700 outline-1 outline">
              Login
            </button>
          </Link>
        )}
        {isLoggedIn ? (
          <Link to="/dashboard">
           
            <button className=" bg-slate-800 text-white opacity-[70%] w-[100px] rounded-md h-10 outline-slate-700 outline-1 outline px-3">
              DashBoard
            </button>{" "}
          </Link>
        ) : (
          <Link to="/signin">
            {" "}
            <button className=" bg-slate-800 text-white opacity-[70%] w-[80px] rounded-md h-10 outline-slate-700 outline-1 outline ">
              Sign Up
            </button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};
