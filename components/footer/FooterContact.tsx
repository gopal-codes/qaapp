"use client";

import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
const FooterContact = () => {
  return (
    <div className="bg-[#F4F5F9]  ">
      <div className="  max-w-[1280px] mx-auto px-4 py-4 md:px-0">
        <div className="flex items-center">
          <div className="container mx-auto ">
            <h4 className="font-bold text-[25px] leading-[38px] desired">
              Can't find your desired service? Let us know 24/7 in 9851201580
            </h4>
            <div className="flex gap-[20px] mt-[20px]">
              <button className="w-[180px] h-[50px] rounded-[4px] bg-[#2591B2] hover:bg-[#2591B2]/[0.7] text-white text-base font-semibold tracking-[0.02em] ">
                Request a service
              </button>
              <button className="flex items-center justify-center  gap-[10px] h-[50px] w-[180px] border border-[#2591B2] rounded-[4px] text-black">
                <BsFillTelephoneFill className="text-[#2591B2]" size={20} />
                9851201580
              </button>
            </div>
          </div>
          <img
            src="/../assets/girlssmile.png"
            alt="image of fottercontact"
            className=" w-[250px] h-auto md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
