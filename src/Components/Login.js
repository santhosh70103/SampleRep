import React from "react";
import LoginImg from "../Assets/loginImg.jpg"

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/3"> 
          <img src={LoginImg} className=""/>
        </div>
        <div className="space-y-4">
          <div className="text-3xl font-bold">Welcome Back!</div>
          <div className="">
            <label className="block text-xl pb-3">
              Email<span className="text-[#ff4040]">*</span>
            </label>

            <input
              type="email"
              className="bg-gray-200 focus:outline-none p-2 w-full rounded-md"
            />
            
          </div>
          <div className="">
            <label className="inline-block text-xl pb-3">
              Password<span className="text-[#ff4040]">*</span>
            </label>
            <br />
            <input
              type="password"
              className="bg-gray-200 focus:outline-none p-2 w-full pr-[150px] rounded-md" 
            />
          </div>
          <div className="pt-2">
            <button className="bg-[#899eff] pb-2 pt-2 pr-5 pl-5 text-xl font-bold rounded-md">
              Login
            </button>
          </div>
          <div className="text-xs">
            <span className="">Doesn't Have an Account</span>
            <span> </span>
            <a
              href=""
              className="text-blue-300 text-decoration-line: underline"
            >
              {" "}
              Register here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
