import React from "react";
import frame from "../assests/frame.png";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { FcGoogle } from "react-icons/fc";

export const Template = ({
  title,
  desc1,
  desc2,
  formtype,
  image,
  setLoggedIn,
  isLoggedIn,
}) => {
  return (
    <div className=" mx-auto w-[80%] flex gap-[250px] mt-14 ">
      <div className=" flex flex-col gap-y-3 max-w-[500px] ml-6">
        <h3 className="text-white font-semibold text-[32px]">{title}</h3>

        <p>
          <span className=" text-white opacity-[70%] text-[18px]">{desc1}</span>
          <span className=" text-sky-400 text-[18px] italic">{desc2}</span>
        </p>

        {formtype === "login" ? (
          <LoginForm
            setLoggedIn={setLoggedIn}
            isLoggedIn={isLoggedIn}
          ></LoginForm>
        ) : (
          <SignupForm
            setLoggedIn={setLoggedIn}
            isLoggedIn={isLoggedIn}
          ></SignupForm>
        )}

        <div className=" w-[90%] mb-4 flex justify-center">
          <div className=" w-[45%] h-[0.20px] bg-slate-700 mt-3"></div>
          <span className=" text-slate-700  w-[10%] text-center traslate-y-[-5px] ">
            OR
          </span>
          <div className=" w-[45%] h-[0.20px] bg-slate-700 mt-3"></div>
        </div>

        <button className=" appearance-none w-[90%] rounded-md h-10  bg-[#010B13] outline-slate-700 outline-1 outline translate-y-[-20px] text-white opacity-[70%] flex justify-center items-center gap-x-2">
          <FcGoogle className="mt-1" />
          Sign Up with Google
        </button>
      </div>

      <div className=" ">
        <img
          src={frame}
          width={300}
          height={300}
          className=" relative w-[450px] right-[30px] top-[8px]"
        ></img>
        <img
          src={image}
          width={300}
          height={300}
          className=" relative w-[450px] right-[45px] bottom-[415px] "
        ></img>
      </div>
    </div>
  );
};
