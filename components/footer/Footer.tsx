import React from "react";
import Link from "next/link";
import { ImFacebook } from "react-icons/im";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import {IoLocationOutline, IoLocationSharp} from "react-icons/io5"
const Footer = () => {
  return (
    <div>
      <div className="bg-[#2591B2] ">
        <div className="py-[10px]   max-w-[1280px] mx-auto">
          {/* heading of footer */}

          <div className="font-semibold text-base leading-[19px] text-[#FFF] font-Roboto text-center ">
            Our Other Products
          </div>
          {/* link of location */}
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center  py-8">
            <div className="flex-1 flex gap-8 font-Roboto font-normal text-base leading-[24px] text-[#FFF]">
              <div className="flex flex-col gap-[10px]">
                <Link prefetch={false} href="Pokhara">Btech_Note</Link>
                <Link prefetch={false} href="Chitwan">Mtech_Note</Link>
                <Link prefetch={false} href="Lalitpur">Bca_Note</Link>
                <Link prefetch={false} href="Ilam">Mca_Note</Link>
                <Link prefetch={false} href="Manang">BBA_Note</Link>
                <Link prefetch={false} href="Dhangadi">MBA_Note</Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <Link prefetch={false} href="butwal">BBS_Note</Link>
                <Link prefetch={false} href="bhairahwa">BSW_Note</Link>
                <Link prefetch={false} href="lumbini">CSIT_Note</Link>
                <Link prefetch={false} href="jhapa">BIT_Note</Link>
                <Link prefetch={false} href="hetauda">MIT_Note</Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <Link prefetch={false} href="kathmandu">CIVIL_Note</Link>
                <Link prefetch={false} href="kavre">LLB_Note</Link>
                <Link prefetch={false} href="mustang">+2_Note</Link>
                <Link prefetch={false} href="dharan">SEE_note</Link>
                <Link prefetch={false} href="sindupalchowk">Others</Link>
              </div>
            </div>

            {/* direction  */}
            <div className="flex-1  flex items-center justify-center">
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/27%C2%B042'08.4%22N+85%C2%B018'35.8%22E/@27.702328,85.309943,15z/data=!4m4!3m3!8m2!3d27.7023333!4d85.3099444?hl=en&entry=ttu"
                className=" bg-white text-[#2591B2] flex py-4 items-center justify-center w-[95px] h-[28px] font-Roboto font-normal text-base leading-[24px]  text-center border-[1px] border-solid border-[#E5E7EB]"
              >
                Direction
                <IoLocationSharp className="text-green-500" size={20} />
              </Link>
            </div>
          </div>
          <hr />
          {/* Next Foter */}
          <div className="flex flex-col md:flex-row items-center justify-between  mt-[10px] gap-4 ">
            <div className=" flex flex-col md:flex-row items-center gap-4">
              {/* <Link
                href=""
                className="w-[210px] h-[52px] 2xl:h-[67px] bg-[#FFF] p-[3px] rounded-[3px]"
              >
                <img
                  src="/../assets/logoofts.png"
                  alt="image of logo"
                  className="w-full h-full object-contain"
                />
              </Link> */}
              <div className="flex flex-col font-Roboto text-[#FFF] gap-[10px]">
                <Link href="#" className="font-bold text-[14px] leading-[16px]">
                  Contact us
                </Link>
                <p className="font-[300px] text-[13px] leading-[15px] ">
                  QA_BANK Pvt. Ltd.
                </p>
                <p className="font-[300px] text-[13px] leading-[15px]">
                  Gairegau,Tinkune-Kathmandu,Nepal
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex  justify-start xl:justify-end gap-[10px]">
                <Link
                  href=""
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <ImFacebook className="text-[#2591B2] " size={20} />
                </Link>
                <Link
                  href=""
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <BiLogoInstagramAlt className="text-[#2591B2] " size={20} />
                </Link>
                <Link
                  href=""
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <BsYoutube className="text-[#2591B2] " size={20} />
                </Link>
                <Link
                  href=""
                  className="flex items-center justify-center bg-[white] w-[35px] h-[35px] rounded-[50%]"
                >
                  <BsTwitter className="text-[#2591B2] " size={20} />
                </Link>
              </div>
              <h5 className="font-normal text-[13px] leading-[24px] text-[#FFF] pt-[10px] text-left md:text-right">
                TO Get APP download Link
              </h5>
              <div className="flex items-center justify-start md:justify-end my-[12px] w-full">
                <input
                  type="phone"
                  name="phonenumber"
                  placeholder="Type your mobile number "
                  className="border rounded-[5px] h-[32px] bg-white pl-[14px] w-[170px] text-xs outline-none"
                />
                <button className="bg-black rounded-tr-[5px] rounded-br-[5px] text-[#FBFCFE] leaing-[25.5px] font-notmal h-[32px] px-[8px] ">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright footer */}
      <div className="py-[9px] bg-[#054355]">
        <h6 className="font-light text-[14px] text-white/[0.5] tracking-[0.3px] leading-[14.06px] text-center">
          Copyright-2023 QA_BANK, All Rights Reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
