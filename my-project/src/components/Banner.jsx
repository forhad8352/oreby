import React from "react";
import Ban from "../assets/banner.png";
import { TbReload } from "react-icons/tb";
import { FaTruck } from "react-icons/fa6";
import { RiNumber2 } from "react-icons/ri";

const Banner = () => {
  return (
    <div>
      <div className="">
        <img src={Ban} alt="" />
      </div>
      
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center">
            <RiNumber2 />
            <p className="text-[16px] font-dmfont font-medium text-[#6D6D6D] pl-3">
              Two years warranty
            </p>
          </div>
          <div className="flex items-center">
            <FaTruck />
            <p className="text-[16px] font-dmfont font-medium text-[#6D6D6D] pl-3">
              Free shipping
            </p>
          </div>
          <div className="flex items-center">
            <TbReload />
            <p className="text-[16px] font-dmfont font-medium text-[#6D6D6D] pl-3">
              Return policy in 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
