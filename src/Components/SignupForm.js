import React from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const SignupForm = ({ setLoggedIn, isLoggedIn }) => {
  let nav = useNavigate();

  const [pass1, setPass1] = useState(true);
  const [pass2, setPass2] = useState(true);
  const [tab, setTab] = useState(true);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  function changeHandler(event) {
    setForm((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  }

  function clickHandler1() {
    if (tab === true) {
      return;
    } else {
      setTab(true);
    }
  }

  function clickHandler2() {
    if (tab === false) {
      return;
    } else {
      setTab(false);
    }
  }
  function submitHandler(event) {
    event.preventDefault();

    if (form.password != form.confirmPass) {
      toast.error("Passwords did not match");
      return;
    }

    setLoggedIn(true);

    toast.success("Account created");

    nav("/dashboard");
  }
  return (
    <div className=" translate-y-[-12px] ">
      <div className=" w-[215px] h-[45px] bg-slate-800 rounded-3xl text-white  text-[16px] flex justify-center gap-x-2 items-center px-1">
        <button
          onClick={clickHandler1}
          className={
            tab
              ? `w-[110px] bg-[#010B13] h-[40px] rounded-3xl opacity-100 `
              : `opacity-70 w-[110px]`
          }
        >
          Student
        </button>
        <button
          onClick={clickHandler2}
          className={
            !tab
              ? ` w-[110px] bg-[#010B13] h-[40px] rounded-3xl opacity-100 `
              : `opacity-70 w-[110px]`
          }
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className=" flex gap-x-2">
          <div className=" flex flex-col gap-y-2">
            <label for="firstName" className=" text-white text-sm ">
              First Name. <sup className="text-red-700">*</sup>
            </label>

            <input
              type="text"
              name="firstName"
              placeholder="Enter First name"
              required
              id="firstName"
              value={form.firstName}
              onChange={changeHandler}
              className=" w-[215px] h-[45px]  text-white  pl-3 mr-2  appearance-none rounded-lg bg-slate-800"
            ></input>
          </div>

          <div className=" flex flex-col gap-y-2">
            <label for="lastName" className=" text-white text-sm ">
              Last Name. <sup className="text-red-700">*</sup>
            </label>

            <input
              type="text"
              name="lastName"
              required
              id="lastName"
              value={form.lastName}
              onChange={changeHandler}
              placeholder="Enter Last name"
              className=" appearance-none w-[217px] h-[45px] text-white pl-3 mr-2 rounded-lg bg-slate-800"
            ></input>
          </div>
        </div>

        <label for="email" className=" text-white text-sm">
          Email address <sup className=" text-red-700">*</sup>
        </label>
        <br></br>
        <input
          type="email"
          name="email"
          required
          id="email"
          value={form.email}
          onChange={changeHandler}
          placeholder="Enter your email address"
          className=" appearance-none w-[90%] text-white bg-slate-800 rounded-lg h-[45px] pl-3 mt-1"
        ></input>

        <div className=" flex  gap-x-3">
          <div className=" flex flex-col">
            <label for="password" className=" text-sm text-white">
              Create password. <sup className=" text-red-700">*</sup>
            </label>
            <input
              type={pass1 ? "password" : "text"}
              name="password"
              required
              id="password"
              value={form.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              className=" appearance-none w-[170px] bg-slate-800 rounded-lg h-[45px] pl-3 mt-1 text-white"
            ></input>
            <span
              onClick={() => {
                setPass1(!pass1);
              }}
            >
              {pass1 ? (
                <IoEye className=" relative bottom-[30px] left-[145px]  cursor-pointer text-white scale-125 "></IoEye>
              ) : (
                <IoMdEyeOff className=" relative bottom-[30px] left-[145px]  cursor-pointer text-white scale-125"></IoMdEyeOff>
              )}
            </span>
          </div>

          <div className=" flex flex-col">
            <label for="confirmPass" className=" text-white text-sm">
              Confirm password <sup className=" text-red-700">*</sup>
            </label>
            <input
              type={pass2 ? "password" : "text"}
              name="confirmPass"
              required
              id="confirmPass"
              value={form.confirmPass}
              onChange={changeHandler}
              placeholder="Confirm Password"
              className=" appearance-none w-[270px] h-[45px] bg-slate-800 rounded-lg pl-3 text-white mt-1"
            ></input>
            <span
              onClick={() => {
                setPass2(!pass2);
              }}
            >
              {pass2 ? (
                <IoEye className=" relative bottom-[30px] left-[244px] cursor-pointer text-white scale-125 "></IoEye>
              ) : (
                <IoMdEyeOff className=" relative bottom-[30px] left-[244px] cursor-pointer text-white scale-125 "></IoMdEyeOff>
              )}
            </span>
          </div>
        </div>

        <button className=" appearance-none w-[90%] rounded-md bg-yellow-400 h-10 translate-y-[17px]">
          Create Account
        </button>
      </form>
    </div>
  );
};
