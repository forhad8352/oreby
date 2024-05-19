import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-[124px]">
        <h2 className="text-[49px] font-dmfont font-bold">Contact</h2>
        <span className="flex items-center gap-x-2 text-[12px] text-[#767676] font-dmfont font-normal">
          {" "}
          <Link to={"/"}>Home</Link> &gt; Contact{" "}
        </span>
      </div>
      <div className="w-[100%] pt-[125px]">
        <h3 className="text-[39px] font-dmfont font-bold">Fill up a Form</h3>
        <div className="pt-[42px]">
          <h4 className="text-[16px] font-dmfont font-bold pb-[10px]">Name</h4>
          <input
            className="text-[14px] font-dmfont font-normal text-[#767676] border-b-[1px] border-[#F0F0F0] pr-[500px] pb-4"
            type="text"
            placeholder="Your name here"
          />
        </div>
        <div className="pt-[23px]">
          <h4 className="text-[16px] font-dmfont font-bold pb-[10px]">Email</h4>
          <input
            className="text-[14px] font-dmfont font-normal text-[#767676] border-b-[1px] border-[#F0F0F0] pr-[500px] pb-4"
            type="text"
            placeholder="Your email here"
          />
        </div>
        <div className="pt-[23px] pb-[30px]">
          <h4 className="text-[16px] font-dmfont font-bold pb-[10px]">
            Message
          </h4>
          <input
            className="text-[14px] font-dmfont font-normal text-[#767676] border-b-[1px] border-[#F0F0F0] pr-[500px] pb-[80px]"
            type="text"
            placeholder="Your message here"
          />
        </div>
        <div className="w-[16%]">
          <h5 className="text-[16px] text-[#fff] text-center font-dmfont font-bold py-4 px-6 border-[1px] border-[#000] bg-[black] hover:bg-[tomato] hover:text-[#000] duration-1000 ease-in-out">
            Post
          </h5>
        </div>
        <div className="py-[140px]">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1EIyBVJurFBfi4Il130fSdgEAnIU&hl=en&ehbc=2E312F"
            className="w-full h-[500px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
