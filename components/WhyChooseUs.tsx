"use client";

import { GiGloves } from "react-icons/gi";
import { ImPhone } from "react-icons/im";
import { MdBookOnline, MdHighQuality, MdMasks, MdRecommend, MdSanitizer } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="container mx-auto py-[60px] xl:w-[80rem] sm:w-full  sm-w-full m-auto px-4">
        <div className="flex items-center gap-[10px]">
          <div className="h-[3px] w-[40px] bg-black/[0.5]"></div>{" "}
          <div> WHY CHOOSE US</div>
        </div>
        <h3 className="text-[25px] md:text-[30px] text-black mt-[10px] text-left font-bold">
          Because We Care About Your Study..
        </h3>
        <div className="flex  flex-col md:flex-row  gap-4 md:gap-[40px] mt-[30px]">
          <div className="basis-[45%] grid grid-cols-2 gap-[30px]">
            <div className="bg-white h-[120px] cursor-pointer w-full flex border items-center justify-center transform hover:scale-[102%] duration-300 ease-out ">
              <div className="flex items-center gap-[10px]">
                <MdBookOnline color="#2591B2" fontSize={46} />
                <p className="text-[16px] md:text-[19px] font-medium  inline-block">
                  Free <br></br> Notes
                </p>
              </div>
            </div>
            <div className="bg-white h-[120px] cursor-pointer border w-full flex items-center justify-center transform hover:scale-[102%] duration-300 ease-out ">
              <div className="flex items-center gap-[10px]">
                <ImPhone color="#2591B2" fontSize={34} />
                <p className="text-[16px] md:text-[19px] font-medium  inline-block">
                  24/7 <br></br> Access
                </p>
              </div>
            </div>
            <div className="bg-white h-[120px] cursor-pointer border w-full flex items-center justify-center transform hover:scale-[102%] duration-300 ease-out ">
              <div className="flex items-center gap-[10px]">
                <MdRecommend color="#2591B2" fontSize={44} />
                <p className="text-[16px] md:text-[19px] font-medium  inline-block">
                  Best<br></br> Resource
                </p>
              </div>
            </div>
            <div className="bg-white h-[120px] cursor-pointer border w-full flex items-center justify-center transform hover:scale-[102%] duration-300 ease-out ">
              <div className="flex items-center gap-[10px]">
                <MdHighQuality color="#2591B2" fontSize={44} />
                <p className="text-[16px] md:text-[19px] font-medium  inline-block">
                  Ensuring <br></br> Quality
                </p>
              </div>
            </div>
          </div>
          <div className="basis-[55%] bg-white h-[280px] rounded-[3px]  cursor-pointer">
            <img
              width={250}
              height={200}
              src="/assets/whyus.jpg"
              className="h-full w-full object-contain"
              alt="why us banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
