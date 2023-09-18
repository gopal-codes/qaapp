"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  HiArrowRightOnRectangle,
  HiMiniWrenchScrewdriver,
} from "react-icons/hi2";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { IoIosNotifications, IoMdCall } from "react-icons/io";
import { LiaBlogSolid } from "react-icons/lia";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdLogin, MdOutlineHomeRepairService } from "react-icons/md";
import { BiSolidInfoCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuMailWarning } from "react-icons/lu";
import { getAdmin } from "@/utils/tokenUtils";
import { useRouter } from "next/navigation";

const Nav = () => {
  //state for navbar
  const [nav, setNav] = useState(false);

  // stop scrolling when side-navigation is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  // handle navbar toggle
  const handleNavClick = () => {
    setNav(!nav);
  };

  // close navigation after clicking navigation links
  const handleNavclose = () => {
    setNav(false);
  };

  const parseCredObj = getAdmin();
  const router = useRouter();
  // handling logout
  const handleLogout = ()=>{
    if (typeof window !== 'undefined') {
    localStorage.removeItem("loginKey");}
    router.push("/login")
  }

  return (

      <div className="sticky top-0 bg-white z-50">
        <div className="Navbar relative border-b-[1px] mx-auto max-w-[1280px]  border-[#ededed]  flex justify-between max-lg:p-4 items-center bg-white h-[70px] ">
          <Link href="/">
            <p className="font-extrabold max-md:text-[25px] text-[30px] text-[#2591b2] ">QA_BANK</p>
          </Link>
          <div className="nav-links  hidden md:flex items-center gap-4 text-[#505056] ">
          
            {!parseCredObj?._id ? (
              <Link className="hover:text-[#2591b2]" href="/login">
                <button className="flex gap-[5px] justify-center items-center bg-[#2591B2] rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] ">
                  <HiArrowRightOnRectangle size={20} className="text-white" />
                  Sign In
                </button>
              </Link>
            ) : (
              
                <button onClick={handleLogout} className="hover:text-[#2591b2] flex gap-[5px] justify-center items-center bg-[#2591B2] rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] ">
                  <HiArrowRightOnRectangle size={20} className="text-white" />
                  Log Out
                </button>
            )}
          </div>

          {/* ========toggle-menu-bar-click======== */}
          <div onClick={handleNavClick} className="menu-btn md:hidden ">
            {!nav ? (
              <FaBars className="text-[#2591b2] cursor-pointer " size={30} />
            ) : (
              <FaTimes className="text-[#2591b2] cursor-pointer " size={30} />
            )}
          </div>

          {/* =========mobile-navigation======== */}
          {nav && (
            <div className="bg-white flex flex-col gap-[24px] shadow-lg z-10 absolute w-max   h-screen top-[70px] right-0 ">
              
              {!parseCredObj?._id ? (
                <Link
                  onClick={handleNavclose}
                  className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                  href="/login"
                >
                  <MdLogin onClick={handleLogout} className="text-[#2591b2]" />
                  Login
                </Link>
              ) : (
                <Link
                  onClick={handleNavclose}
                  className="flex px-[30px] gap-4 text-[20px] font-normal items-center  w-full justify-starts"
                  href="/login"
                >
                  <MdLogin className="text-[#2591b2]" />
                  Logout
                </Link>
              )}

            </div>
          )}
        </div>
      </div>
    
  );
};

export default Nav;
