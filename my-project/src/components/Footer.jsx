import React from "react";
import Logo from "../assets/logo.png";
import {
  GrFacebookOption,
  GrLinkedinOption,
  GrInstagram,
} from "react-icons/gr";

const Footer = () => {
  return (
    <section className="bg-[#F5F5F3] py-[55px]">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[15%]">
            <h4 className="text-[16px] font-bold text-[#262626] leading-6 pb-[17px]">MENU</h4>
            <ul>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Home</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Shop</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">About</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Contact</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Journal</li>
            </ul>
          </div>
          <div className="w-[15%]">
            <h4 className="text-[16px] font-bold text-[#262626] leading-6 pb-[17px]">SHOP</h4>
            <ul>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Category 1</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Category 2</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Category 3</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Category 4</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Category 5</li>
            </ul>
          </div>
          <div className="w-[15%]">
            <h4 className="text-[16px] font-bold text-[#262626] leading-6 pb-[17px]">HELP</h4>
            <ul>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Privacy Policy</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Terms & Conditions</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Special E-shop</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Shipping</li>
              <li className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">Secure Payments</li>
            </ul>
          </div>
          <div className="w-[25%]">
            <h4 className="text-[16px] font-bold text-[#262626] leading-6">(052) 611-5711</h4>
            <h4 className="text-[16px] font-bold text-[#262626] leading-6 pb-[17px]">company@domain.com</h4>
            <p className="text-[16px] font-dmfont text-[#6D6D6D] font-medium  pb-[6px]">575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
          <div className="w-[30%]">
            <div className="">
              <img src={Logo} alt="" className="w-[25%]"/>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-[65px]">
          <div className="flex gap-x-6">
            <span>
              <GrFacebookOption className="text-[24px]"/>{" "}
            </span>
            <span>
              {" "}
              <GrLinkedinOption className="text-[24px]"/>{" "}
            </span>
            <span>
              {" "}
              <GrInstagram className="text-[24px]"/>{" "}
            </span>
          </div>
          <div className="">
            <p className="text-[16px] font-dmfont text-[#6D6D6D] font-medium">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
