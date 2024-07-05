import React from "react";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const LoginForm = ({ setLoggedIn, isLoggedIn }) => {
  const nav = useNavigate();

  const [pass, setPass] = useState(true);

  const [form, setForm] = useState({
    password: "",
    emailAddress: "",
  });

  function changeHandler(event) {
    setForm((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(!isLoggedIn);
    toast.success("Logged in ");
    nav("/dashboard");
  }

  return (
    <div className=" flex flex-col  mt-3 relative">
      <form onSubmit={submitHandler}>
        <label for="email" className=" text-white text-sm">
          Email Address <sup className=" text-red-700">*</sup>
        </label>

        <br></br>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          required
          name="emailAddress"
          onChange={changeHandler}
          value={form.emailAddress}
          className=" appearance-none w-[90%] rounded-md bg-slate-800 h-12 mt-1 pl-3 text-white"
        ></input>

        <br></br>
        <br></br>

        <label for="password" className=" text-white text-sm ">
          Password<sup className=" text-red-700">*</sup>
        </label>

        <br></br>

        <input
          type={pass ? "password" : "text"}
          id="password"
          placeholder="Enter your password"
          required
          name="password"
          onChange={changeHandler}
          value={form.password}
          className=" appearance-none w-[90%] rounded-md bg-slate-800 h-12 mt-1 pl-3 text-white relative z-0"
        />
        <span
          onClick={() => {
            setPass(!pass);
          }}
          className=" absolute translate-x-[-30px]  translate-y-[20px] z-10 cursor-pointer text-white scale-125"
        >
          {pass ? <IoEye></IoEye> : <IoMdEyeOff></IoMdEyeOff>}
        </span>

        <br></br>
        <Link to="/login">
          <span className=" text-sky-500 right-[50px] text-[12px] absolute mt-1">
            Forgot Password
          </span>
        </Link>

        <br></br>

        <button className=" appearance-none w-[90%] rounded-md bg-yellow-400 h-10 mt-6 translate-y-[4px]">
          Log in
        </button>
      </form>
    </div>
  );
};
