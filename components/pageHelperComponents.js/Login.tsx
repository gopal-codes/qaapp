"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSignIn = async () => {
    let data = {
      "username":input.username,
      "password":input.password
    }
    
    await axios
      .post(`/api/login`, data)
      .then((response) => {
          console.log(response)
          const credObj = JSON.stringify(response?.data.data)
          alert(response.data.message)
          if (typeof window !== 'undefined') {
          localStorage.setItem("loginKey",credObj)}
          router.push("/")
      });
  };

  // state for handle show and hide passowrd using eye button.
  const [showPassword, setshowPassword] = useState(false);
  
  return (
    <div className="bg-white  pt-[20px] pb-[79px]">
      <div className="flex flex-col  justify-center pt-[50px] w-[80%] lg:w-[33.33%]  mx-auto px-4 md:p-0">
        <div className="flex flex-col items-center ">
          <div className="w-[150px] h-auto">
            <img
              src="favicon.ico"
              alt="image of logo"
              className="w-full h-full object-container"
            />
          </div>
          <h2 className="text-[#666666] text-[13px] leading-[19.5px] font-light mt-[12px]">
            This page is only for Admin of this Application.
          </h2>
        </div>

        <input
          type="text"
          name="username"
          required
          onChange={handleChange}
          placeholder="Username"
          className="border w-full border-[#D9D9D9] py-[12px] pl-[20px] mt-[20px] placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"
        />

        <div className=" border border-[#D9D9D9] rounded-[2px] flex items-center mt-[24px]  w-full">
          <input
            type={`${showPassword === false ? "password" : "text"}`}
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full py-[12px] pl-[20px]  placeholder:text-[#666666]/[0.4] placeholder:italic placeholder:font-normal rounded-[2px] outline-none"
          />
          <div
            className=" border-l-[1px] p-4"
            onClick={() => setshowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEye /> : <BsEyeSlashFill />}
          </div>
        </div>
        <Link
          href="#"
          className="text-[#666666] text-[13px] leading-[10px] font-light mt-[20px]"
        >
          Forgot Password ?
        </Link>
        <button
          onClick={handleSignIn}
          className="text-white text-[15px] leading-[18px] bg-[#2591B2] font-normal rounded-[2px] w-full py-[15px]
        mt-[44px]"
        >
          Sign in
        </button>
        <div className="flex  items-center justify-center  mt-[29px]">
          <div className="bg-[#666666]/[0.4] h-[3px] w-[60px]"></div>
          <p className="text-[#666666] text-[13px] leading-[10px] font-normal alsolute left-[50%] text-center">
            OR
          </p>
          <div className="bg-[#666666]/[0.4] h-[3px] w-[60px]"></div>
        </div>
        <div className="flex gap-[10px] items-center justify-center mt-[20px] ">
          <Link href="">
            <img
              src="/../assets/google.png"
              alt="image of google logo"
              className="cursor-pointer"
            />
          </Link>
          <Link href="">
            <img
              src="/../assets/facebook.png"
              alt="image of google "
              className="cursor-pointer"
            />
          </Link>
          <Link href="">
            <img
              src="/../assets/instagram.png"
              alt="image of google"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center mt-[57px] mb-[10px]">
          <p className="text-[13px] text-[#666666] leading-[10.72px] font-normal">
            Need an account ? 
          </p>
          <Link
            href="https://www.gopalraut.com.np"
            className="text-[13px] ml-2 text-[#BB243F] leading-[10px] font-bold underline decoration-[#BB243F] cursor-pointer"
          >
          Contact the Developer of this App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
