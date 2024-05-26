import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" container mx-auto">
      <div className="py-[124px]">
        <h2 className="text-[49px] font-dmfont font-bold">Login</h2>
        <span className="flex items-center gap-x-2 text-[12px] text-[#767676] font-dmfont font-normal">
          {" "} <Link to={"/"}>Home</Link> &gt; Login{" "}
        </span>
      </div>

      <div className="pb-[57px]">
        <p className="w-[50%] text-[16px] font-dmfont font-normal text-[#767676] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <div className="border-b-2 border-[#F0F0F0] pt-[60px]"></div>
      </div>

      <div className="w-[60%]">
        <h2 className="text-[39px] font-dmfont font-bold">
          Returning Customer
        </h2>
        <div className="flex justify-between pt-[42px]">
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Email Address</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="text"
              placeholder="company@domain.com"
            />
          </div>
          <div className="w-[30%]">
            <h4 className="text-[16px] font-dmfont font-bold">Password</h4>
            <input
              className="py-[8px] pr-[320px] border-b-2 border-[#F0F0F0]"
              type="password"
              placeholder="Type password"
            />
          </div>
        </div>
        <div className="w-[25%]">
          <div className="pt-[29px]">
          <h5 className="text-[16px] text-[#000] text-center font-dmfont font-bold w-[180px] h-[50px] pt-3 border-[1px] border-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] duration-1000 ease-in-out">
            Log in
          </h5>
          </div>
        </div>
      </div>
      <div className="pb-[57px]">
        <div className="border-b-2 border-[#F0F0F0] pt-[60px]"></div>
      </div>
      <div className="w-[50%]">
        <div className="pb-[140px]">
          <h2 className="text-[39px] font-dmfont font-bold pb-[38px]">
            New Customer
          </h2>
          <p className="text-[16px] font-dmfont font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <div className="pt-[51px]">
          <h5 className="text-[16px] text-[#000] text-center font-dmfont font-bold w-[180px] h-[50px] pt-3 border-[1px] border-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] duration-1000 ease-in-out">
            Continue
          </h5>
          </div>
        </div>
      </div>
      <div className="">
      </div>
    </div>
  );
};

export default Login;
